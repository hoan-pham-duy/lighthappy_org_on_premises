Install with Zappa

python3 -m pip install virtualenv

virtualenv -p python3 env

source env/bin/activate

python3 -m pip install -r requirements.txt

Update Zappa_setting.json:
[
    {
        "${env_name}": {
        "app_function": "my_app.app",
        "aws_region": "${aws_region}}",
        "profile_name": "default",
        "project_name": "mergepdf",
        "runtime": "python3.8",
        "s3_bucket": "zappa-mergepdf-lighthappy-aws-amplify"
    }
    }
]

zappa deploy <env_name>  (in zappa_settings.json)
example:
    zappa deploy production

(Can failed at the first time, should do it again)

The Lambda Function and API Gateway will be named as: `${project_name}-${env_name}`

If deployed -> zappa update <env_name>
    zappa update production

Need go to APIGateway -> Enable CORS

Need go to Lambda Function, Add a Lambda Layer (depend on the region)
https://github.com/shelfio/ghostscript-lambda-layer
        arn:aws:lambda:ap-southeast-1:764866452798:layer:ghostscript:8

Find another arns for other packages if needed:
Refer at: https://github.com/keithrozario/Klayers