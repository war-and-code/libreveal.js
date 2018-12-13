"""
compile.py

Compiles libreveal.js and libreveal.min.js

Compatible only with Python 3 and requires Internet access to hit RetireJS Github repo

"""

from minify_js import minify_js
from pathlib import Path
from urllib.request import Request, urlopen

import json
import os
import time

LIBREVEALJS_PATH = 'libreveal.js'
LIBREVEALJS_MIN_PATH = 'libreveal.min.js'

LIBREVEAL_JSON_PATH = 'json/libreveal_jsrepository.json'
RETIREJS_LOCAL_PATH = 'json/retirejs_jsrepository.json'
RETIREJS_ONLINE_PATH = 'https://raw.githubusercontent.com/RetireJS/retire.js/master/repository/jsrepository.json'

LAST_LIBREVEAL_JSON_RUN_PATH = 'lrjson.lastrun'

error = None

do_librevealjs = False
do_librevealjs_min = False

def _does_file_exist(file_path):
    the_file = Path(file_path)
    if the_file.exists and the_file.is_file():
        return True
    # Doesn't exist
    return False

def _get_time_file_was_last_modified(file_path):
    try:
        last_modified = int(os.stat(file_path).st_mtime)
    except:
        last_modified = None
    return last_modified

def delete_file(file_path):
    if _does_file_exist(file_path):
        try:
            os.remove(file_path)
        except:
            # Fail out gracefully
            pass

def read_file_into_string(file_path):
    with open(file_path, 'r') as in_file:
        return in_file.read()
    return ''

def write_string_to_file(file_path, string):
    try:
        with open(file_path, 'w') as out_file:
            out_file.write(string)
            out_file.close()
    except:
        pass

def does_librevealjs_exist():
    return _does_file_exist(LIBREVEALJS_PATH)

def does_librevealjs_min_exist():
    return _does_file_exist(LIBREVEALJS_MIN_PATH)

def does_libreveal_json_exist():
    return _does_file_exist(LIBREVEAL_JSON_PATH)

def does_local_retirejs_exist():
    return _does_file_exist(RETIREJS_LOCAL_PATH)

def get_libreveal_json():
    try:
        with open(LIBREVEAL_JSON_PATH) as json_data:
            d = json.load(json_data)
            json_data.close()
            return d
    except:
        # Fail gracefully here
        return None

def get_local_retirejs_repo():
    try:
        with open(RETIREJS_LOCAL_PATH) as json_data:
            d = json.load(json_data)
            json_data.close()
            return d
    except:
        error = 'Could not read local RetireJS repo via ' + RETIREJS_LOCAL_PATH
    # If we get here there was an exception
    return None

def get_online_retirejs_repo():
    try:
        req = Request(RETIREJS_ONLINE_PATH)
        res = urlopen(req).read()
        output = json.loads(res.decode('utf-8'))
        return output
    except:
        error = 'Could not check online RetireJS @ ' + RETIREJS_ONLINE_PATH
    # If we get here there was an exception
    return None

def write_out_to_json(data, out_path):
    with open(out_path, 'w') as out_file:
        json.dump(data, out_file)
        out_file.close()

def are_the_same(data1, data2):
    return data1.__dict__ == data2.__dict__

def is_in_library_name_blacklist(string_to_check):
    if string_to_check.lower() == 'retire-example':
        return True
    return False

def get_all_func_extractors(list_of_retirejs_objects):
    extractor_map = {}
    for retirejs_object in list_of_retirejs_objects:
        for key, value in retirejs_object.items():
            library_name = key
            if is_in_library_name_blacklist(library_name):
                # Skip this
                continue
            if 'bowername' in value:
                if isinstance(value['bowername'], list):
                    library_name = value['bowername'][0]
                else:
                    library_name = value['bowername']
            if 'extractors' in value and 'func' in value['extractors']:
                for extractor in value['extractors']['func']:
                    if library_name not in extractor_map:
                        extractor_map[library_name] = []
                    extractor_map[library_name].append(extractor)
    return extractor_map

def was_last_libreveal_json_run_earlier_than_file_update():
    determination = True
    if _does_file_exist(LAST_LIBREVEAL_JSON_RUN_PATH):
        try:
            with open(LAST_LIBREVEAL_JSON_RUN_PATH, 'r') as in_file:
                raw_file_content = in_file.read()
                parsed_time_in = int(raw_file_content)
            libreveal_json_last_modified = _get_time_file_was_last_modified(LIBREVEAL_JSON_PATH)
            if parsed_time_in > libreveal_json_last_modified:
                determination = False
        except:
            # Number of things could go wrong here but fail gracefully
            pass
    return determination

def write_last_libreveal_json_run():
    time_now = str(int(time.time()))
    write_string_to_file(LAST_LIBREVEAL_JSON_RUN_PATH, time_now)

def make_librevealjs_from_extractors(extractor_maps):
    # TODO
    return 'TODO'

def get_error_as_json():
    return '{"error":"' + error + '"}'

def get_no_update_json():
    return '{"result":"No update, recompilation not needed"}'

def get_success_json():
    return '{"result":"Success"}'

if __name__ == '__main__':
    if True == does_libreveal_json_exist():
        if True == was_last_libreveal_json_run_earlier_than_file_update():
            do_librevealjs = True
            do_librevealjs_min = True
        write_last_libreveal_json_run()
    else:
        if False == does_librevealjs_exist():
            do_librevealjs = True
        if False == does_librevealjs_min_exist():
            do_librevealjs_min = True
    online_retirejs = get_online_retirejs_repo()
    if online_retirejs == None:
        print(get_error_as_json())
        exit
    if False == does_local_retirejs_exist():
        write_out_to_json(online_retirejs, RETIREJS_LOCAL_PATH)
        do_librevealjs = True
        do_librevealjs_min = True
    else:
        local_retirejs = get_local_retirejs_repo()
        if True == are_the_same(local_retirejs, online_retirejs):
            print(get_no_update_json())
            exit
        else:
            delete_file(RETIREJS_LOCAL_PATH)
            write_out_to_json(online_retirejs, RETIREJS_LOCAL_PATH)
    if do_librevealjs:
        objects_to_parse_for_extractors = [online_retirejs]
        if True == does_libreveal_json_exist():
            libreveal_json = get_libreveal_json()
            objects_to_parse_for_extractors.append(libreveal_json)
        js_extractor_maps = get_all_func_extractors(objects_to_parse_for_extractors)
        librevealjs_script = make_librevealjs_from_extractors(js_extractor_maps)
        write_string_to_file(LIBREVEALJS_PATH, librevealjs_script)
    if do_librevealjs_min:
        normal_librevealjs = read_file_into_string(LIBREVEALJS_PATH)
        minified_librevealjs = minify_js(normal_librevealjs)
        write_string_to_file(LIBREVEALJS_MIN_PATH, minified_librevealjs)
    print(get_success_json())
    exit
