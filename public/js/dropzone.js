function removeImg(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}
var projectimage= {
        init:function() {
            var fileList = new Array;
            var fileListinput = new Array;
            var i =0;
            Dropzone.options.projectimage= {
                paramName:"file",
                maxFiles:1,
                maxFilesize:4,
                addRemoveLinks:!0,
                accept:function(e, o) {
                    "justinbieber.jpg"==e.name?o("Naha, you don't."): o()
                },
                success:function(file, serverFileName) {
                    // alert('asdsadff2');
                    console.log(serverFileName.payload);
                 fileList[i] = {"serverFileName" : serverFileName.payload, "fileName" : file.name,"fileId" : i };
                    fileListinput[i] = "/public/uploads/projects/images/"+serverFileName.payload;
                    // $('input[name="image"]').val(JSON.stringify(fileListinput));
                    $('input[name="image_path"]').val(fileListinput[i]);
                    // $('input[name="image"]').val(fileListinput[i]);
                    i++;
                },
                removedfile:function(file) {
                    var path="/public/uploads/projects/images/";
                    var rmvFile = "";
                    for(f=0;f<fileList.length;f++){
                        if(fileList[f].fileName == file.name)
                        {
                            rmvFile = fileList[f].serverFileName;
                        }
                    }
                    if (rmvFile){
                        $.ajax({
                            url: document.location.origin+"/delete_temp_files.php",
                            //url: document.location.origin+"/64_HorseAuction/delete_temp_files.php",
                            type: "POST",
                            data: { "fileList" : rmvFile,"path":path },
                            success: function(data) {
                                removeImg(fileListinput, rmvFile);
                                $('input[name="image_path"]').val(JSON.stringify(fileListinput));
                                $(document).find(file.previewElement).remove();
                                i--;
                            }
                        });
                    }
                },
            }
        }
    }
    ;
var featureimage= {
        init:function() {
            var fileList = new Array;
            var fileListinput = new Array;
            var i =0;
            Dropzone.options.featureimage= {
                paramName:"file",
                maxFiles:1,
                maxFilesize:4,
                addRemoveLinks:!0,
                accept:function(e, o) {
                    "justinbieber.jpg"==e.name?o("Naha, you don't."): o()
                },
                success:function(file, serverFileName) {
                    // alert('sdfa2');
                    // $('input[name="image"]').val(JSON.stringify(fileListinput));
                 fileList[i] = {"serverFileName" : serverFileName.payload, "fileName" : file.name,"fileId" : i };

                     fileListinput[i] = "/public/uploads/projects/featuredimage/"+serverFileName.payload;
                    $('input[name="featured_image"]').val(fileListinput[i]);
                    i++;
                },
                removedfile:function(file) {
                    var path="/public/uploads/projects/featuredimage/";
                    var rmvFile = "";
                    for(f=0;f<fileList.length;f++){
                        if(fileList[f].fileName == file.name)
                        {
                            rmvFile = fileList[f].serverFileName;
                        }
                    }
                    if (rmvFile){
                        $.ajax({
                            url: document.location.origin+"/delete_temp_files.php",
                            type: "POST",
                            data: { "fileList" : rmvFile,"path":path },
                            success: function(data) {
                                removeImg(fileListinput, rmvFile);
                                $('input[name="featured_image"]').val(fileListinput);
                                $(document).find(file.previewElement).remove();
                                i--;
                            }
                        });
                    }
                },
            }
        }
    }
    ;
function JS_ClearDropZone() {
    //DropZone Object Get
}
var media= {
        init:function() {
            var fileList = new Array;
            var fileListinput = new Array;
            var i =0;
            Dropzone.options.media= {
                paramName:"file",
                maxFiles:20,
                maxFilesize:20,
                acceptedFiles:".jpg,.jpeg,.png",
                addRemoveLinks:!0,
                accept:function(e, o) {
                    "justinbieber.jpg"==e.name?o("Naha, you don't."): o()
                },
                success:function(file, serverFileName) {
                    alert('asdf');
                    
                    // console.log('sdf',$(this)[i].element.attributes.path.nodeValue);
                    fileList[i] = {"serverFileName" : serverFileName, "fileName" : file.name,"fileId" : i };
                    fileListinput[i] = "public/uploads/property/media/"+serverFileName;
                    $('input[name="media"]').val(fileListinput[i]);
                    i++;
                },
                 complete:function(file, serverFileName) {
                // JS_ClearDropZone();
                },
                removedfile:function(file) {
                    var path ="/public/uploads/property/media/";
                    var rmvFile = "";
                    for(f=0;f<fileList.length;f++){
                        if(fileList[f].fileName == file.name)
                        {
                            rmvFile = fileList[f].serverFileName;
                        }
                    }
                    if (rmvFile){
                        $.ajax({
                            url: document.location.origin+"/delete_temp_files.php",
                             //url: document.location.origin+"/ozland/delete_temp_files.php",
                            type: "POST",
                            data: { "fileList" : rmvFile,"path":path },
                            success: function(data) {
                                removeImg(fileListinput, rmvFile);
                                // $('input[name="vetanaryDocs"]').val(JSON.stringify(fileListinput));
                                $('input[name="media"]').val(fileListinput);
                                $(document).find(file.previewElement).remove();
                                i--;
                            }
                        });
                    }
                },
            }
        }
    }
    ;
projectimage.init();
featureimage.init();
media.init();

