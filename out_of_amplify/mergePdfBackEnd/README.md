<!-- Improved compatibility of back to top link: See: https://github.com/hoan-pham-duy/lighthappy.tk_aws_amlify/graphs/pull/73 -->
<a name="readme-top"></a>

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://lighthappy.tk">
    <img src="./images/ToolPdf.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">LightHappy.tk</h3>

  <p align="center">
    Tools with pdf websites like merge pdfs, .... 
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<!-- ABOUT THE PROJECT -->

### Built With

Built with Zappa to makes it super easy to build and deploy server-less, event-driven Python applications (including, but not limited to, WSGI web apps) on AWS Lambda + API Gateway. 

* [![Zappa][Zappa]][Zappa-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
To create a backend that include all the pdf tools features, please follow these steps:

### Prerequisites
A machine that installed Python with AWS CLI. (Tested with Ubuntu 18.04, python3.8, AWS CLI v2)

### Installation
1. Install Zappa
```
python3 -m pip install zappa
```
2. Install virtual environement
```
python3 -m pip install virtualenv

virtualenv -p python3 env

source env/bin/activate
```
3. Update Zappa_setting.json:
```json
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
```
4. Deploy to AWS
```shell
zappa deploy <env_name>  (in zappa_settings.json)
```

example:
```shell
    zappa deploy production
```
The Lambda Function and API Gateway will be named as: `${project_name}-${env_name}`
<br />
Note:
In the case the command is failed at the first time, should do it again.
<br /> If we deployed the app, run this command:

```shell
zappa update <env_name>
```
example:
```shell
  zappa update production
```

5. Go to Lambda Function named as `${project_name}-${env_name}`, Add a Lambda Layer (depend on the region)
Check the ARN of Lambda Layer <a href='https://github.com/shelfio/ghostscript-lambda-layer'> here </a>
example:
```
  arn:aws:lambda:ap-southeast-1:764866452798:layer:ghostscript:8
```

Find another arns for other packages if needed:
Refer: <a href='https://github.com/keithrozario/Klayers'> here </a>

6. Go to APIGateway, choose the API Gateway named as `${project_name}-${env_name}` 
then enable the CORS as guide <a href='https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors-console.html'> here </a>

Choose Stage -> Copy the Invoke URL
-> Paste the `${invoke_URL}/mergepdf` to environment of the application.
For example, in the .env.local file of root folder of react app:
```
REACT_APP_PDF_TOOLS_URL=`${invoke_URL}/mergepdf`
```
<!-- USAGE EXAMPLES -->
## Usage

Click to the projects we want to use in "My Projects" in <a> https://lighthappy.tk </a>

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- CONTACT -->
## Contact

Pham Duy Hoan - [@hoan.pham.duy.1](https://fb.com/hoan.pham.duy.1) - phamduyhoan95@gmail.com

Project Link: [https://github.com/hoan-pham-duy/lighthappy_tk_aws_amlify](https://github.com/hoan-pham-duy/lighthappy_tk_aws_amlify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Best README Template](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/hoan-pham-duy/lighthappy.tk_aws_amlify/graphs/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/hoan-pham-duy/lighthappy.tk_aws_amlify/graphs/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/hoan-pham-duy/lighthappy.tk_aws_amlify/graphs/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/hoan-pham-duy/lighthappy.tk_aws_amlify/graphs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pham-duy-hoan-10a68b13a/ 

[Zappa]: https://img.shields.io/badge/Zappa-FFB266?style=for-the-badge&logoColor=FFB266
[Zappa-url]: https://github.com/zappa/Zappa