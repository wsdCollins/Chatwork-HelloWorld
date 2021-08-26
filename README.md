# ChatWork-HelloWorld

This is a repository with simple samples for getting started with interacting with the
ChatWork API. Information on the API itself can be found [here](https://download.chatwork.com/ChatWork_API_Documentation.pdf) and details on the
NPM library we are using can be found [here](https://www.npmjs.com/package/chatwork-api-client). The examples covered in this repository
are as follows.

- Post a message
- Post a file
- Get and write file

## Get an API Token

This is a required step for any of the following steps to work, which requires
getting an API token from the ChatWork settings after logging in. First clone
this repository.

```
$ git clone https://github.com/wsdCollins/ChatWork-HelloWorld.git
$ cd ChatWork-HelloWorld
$ npm install
```

Also install TypeScript globally if you haven't already. This is required for compiling the examples.

```
$ sudo npm install typescript -g
```

![Screenshot from 2021-08-25 08-44-49](https://user-images.githubusercontent.com/5259968/130886146-10c25982-08cb-4ac4-af4a-6b082577516a.png)

From the chat main screen, click on the top right drop down menu and slect "Integrations".

![Screenshot from 2021-08-25 08-47-46](https://user-images.githubusercontent.com/5259968/130886151-73a04f7f-9c31-42ae-9eb8-073fba3120b8.png)

A new tab will open. Under the API section on the right hand menu, select "API Token". Enter your password and click on "Display".

![Screenshot from 2021-08-25 08-48-14](https://user-images.githubusercontent.com/5259968/130886155-dae41224-0dc6-4e07-9b87-1b20940af681.png)

This token will allow you to interact with the API. In the cloned repository create a ".env" file and replace "[YOUR_API_TOKEN]" with
the copied value of your API token.

```
$ echo "CHATWORK_TOKEN=[YOUR_API_TOKEN]" > .env
```
