import { exit, stdin, stdout } from "process";

stdin.on('data', data => {
    stdout.write(data);
    exit(1);
})