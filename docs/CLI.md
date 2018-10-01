# CLI

To use `ci-status` from the command line, you need to install it globally:

```bash
$ npm install -g ci-status
```

Just want to test the CLI without installing? Use `npx` like this:

```bash
$ npx ci-status <service> ...
```

## Usage

The options you can use in the cli differ per service. Each service is a sub-command of the ci-status tool. To list all options type:

```bash
$ ci-status -h
```

### AppVeyor

| Short command | Full command | Description |
| ------------- | ------------ |-------------|
| -o | --owner &lt;owner&gt; | User account the repositories belong to |
| -r | --repo &lt;repo&gt; | The name of the repository your interested in |
| -h | --help | Output usage information |

### Jenkins

| Short command | Full command | Description |
| ------------- | ------------ |-------------|
| -p | --project &lt;project&gt; | The name of the project your interested in |
| -r | --url &lt;url&gt; | The host url to connect to (ex. http://localhost:8080/) |
| -t | --token &lt;token&gt; | API token (preferred) / password of the user for authentication |
| -u | --user &lt;user&gt; | User account name to connect with |
| -h | --help | Output usage information |

### Travis CI

| Short command | Full command | Description |
| ------------- | ------------ |-------------|
| -b | --branch &lt;branch&gt; | Show build status for specific branch |
| -o | --owner &lt;owner&gt; | User account the repositories belong to |
| -r | --repo &lt;repo&gt; | The name of the repository your interested in |
| -t | --token &lt;token&gt; | API token (preferred) / password of the user for authentication |
| -h | --help | Output usage information |
