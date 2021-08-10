from flask import Flask, render_template, request, send_file
from flask_cors import CORS, cross_origin

import subprocess
import os
import json

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods = ['GET', 'POST','OPTIONS'])
@cross_origin()
def home():
    return 'here is home'

@app.route('/mergepdf', methods = ['GET', 'POST', 'OPTIONS'])
@cross_origin()
def upload_file():
    if request.method == 'POST':
        outputPath = '/tmp/output/'
        if os.path.isdir(outputPath):
            pass 
        else:
            try: 
                os.mkdir(outputPath)
            except:
                print("ERROR CREATE OUTPUT DIRECTORY: {}".format(outputPath))

        inputPath = '/tmp/input/'
        if os.path.isdir(inputPath):
            pass 
        else:
            try: 
                os.mkdir(inputPath)
            except:
                print("ERROR CREATE input DIRECTORY: {}".format(inputPath))
        print('Check create directory')
        print('list file in /tmp: {}'.format(os.listdir('/tmp/')))
        print('list file in /tmp/input: {}'.format(os.listdir('/tmp/input')))
        print('list file in /tmp/output: {}'.format(os.listdir('/tmp/output')))
        print('request = {}'.format(request))
        fileNames = []
        for fileKey in request.files.keys():
            print('fileKey = {}'.format(fileKey))
            f = request.files[fileKey]
            f.save(outputPath+f.filename)
            fileNames.append(outputPath+f.filename)
        print('Start run subprocess')
        p = subprocess.call('gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite  -dAutoRotatePages=/None -sOutputFile=/tmp/input/merge.pdf /tmp/output/*.pdf', shell=True)
        print('Merged File Successfully')
        return send_file('/tmp/input/merge.pdf', mimetype='application/pdf')
    else:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Hello from MergePdf')
        }        

# We only need this for local development.
if __name__ == '__main__':
    app.run()