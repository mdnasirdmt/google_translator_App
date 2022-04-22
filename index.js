

//helper function
function read(id){
     return document.getElementById(id).value;
}


// text to translate 
 async function Translate(){


    try{
 
    let input = read('input-text');
    // console.log(input)

    const input_lang=read('inp_lang')
    const out_lang=read('out_lang')

    //post request
    const res =await fetch("https://libretranslate.de/translate",{

        method:'POST',
        body: JSON.stringify({

            q:input,
            source:input_lang,
            target:out_lang,
            format:'text',
        }),

        /// additional info about request that server might need to know

        headers:{
            "Content-Type": "application/json",
        },

    });

    const {translatedText} =await res.json();
    // const data =await res.json();

    document.getElementById('output-text').innerText=translatedText;
    console.log(translatedText)
    console.log(res);

    }
    catch(err){
        console.log(err);
    }


}