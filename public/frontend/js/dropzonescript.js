// var DropzoneDemo={init:function(){Dropzone.options.mDropzoneOne={paramName:"file",maxFiles:1,maxFilesize:5,addRemoveLinks:!0,accept:function(e,o){"justinbieber.jpg"==e.name?o("Naha, you don't."):o()}},Dropzone.options.mDropzoneTwo={paramName:"file",maxFiles:10,maxFilesize:10,addRemoveLinks:!0,accept:function(e,o){"justinbieber.jpg"==e.name?o("Naha, you don't."):o()}},Dropzone.options.mDropzoneThree={paramName:"file",maxFiles:10,maxFilesize:10,addRemoveLinks:!0,acceptedFiles:"image/*,application/pdf,.psd",accept:function(e,o){"justinbieber.jpg"==e.name?o("Naha, you don't."):o()}}}};DropzoneDemo.init();
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

function JS_ClearDropZone() {
    //DropZone Object Get
    
}

    var dropzoneupload1= {
        init:function() {
            var fileList = new Array;
            var fileListinput = new Array;
            var i =0;
            Dropzone.options.dropzoneupload1= {
                paramName:"file",
                maxFiles:1,
                maxFilesize:5000,
                acceptedFiles:".jpg,.jpeg,.png",
                addRemoveLinks:!0,
                accept:function(e, o) {
                    "justinbieber.jpg"==e.name?o("Naha, you don't."): o()
                },
                success:function(file, serverFileName) {
                    fileList[i] = {"serverFileName" : serverFileName, "fileName" : file.name,"fileId" : i };
                    fileListinput[i] = "/public/uploads/products"+serverFileName;
                    //when multiple file upload use the below line
                    // $('input[name="dp"]').val(JSON.stringify(fileListinput));
                    //when single file upload use the below line
                    $('input[name="featured_image"]').val(serverFileName);
                    
                    i++;
                },
                removedfile:function(file) {
                    var path ="/public/uploads/products";
                    var rmvFile = "";
                    for(f=0;f<fileList.length;f++){
                        if(fileList[f].fileName == file.name)
                        {
                            rmvFile = fileList[f].serverFileName;
                        }
                    }
                    if (rmvFile){
                        $.ajax({
                            url: document.location.origin+"/deletefiles",
                            type: "POST",
                            data: { "fileList" : rmvFile,"path":path },
                            success: function(data) {
                                removeImg(fileListinput, rmvFile);
                                $('input[name="featured_image"]').val('');
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

dropzoneupload1.init();

