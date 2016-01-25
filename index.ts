import * as OS from "os";
import * as pathExists from "path-exists";
import * as child_process from "child_process";

if(pathExists.sync("./dist/"+OS.platform()+"/"+OS.arch())){
    child_process.exec("./dist/"+OS.platform()+"/"+OS.arch()+"/nw ./");
} else{
    throw Error("not supported platform");
}