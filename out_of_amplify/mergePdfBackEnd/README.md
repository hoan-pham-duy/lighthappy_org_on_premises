Install with Zappa

python3 -m pip install virtualenv

virtualenv -p python3 env

source env/bin/active

python3 -m pip install -r requirements.txt

zappa deploy <env_name>  (in zappa_settings.json)
example:
    zappa deploy production

If deployed -> zappa update <env_name>
    zappa update production