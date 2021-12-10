const rightRotate = (value, amount) => {
    return (value >>> amount) | (value << (32 - amount));
    };

    const sha256 = (ascii) => {
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = "length";
    var i, j; // Used as a counter across the whole file
    var result = "";

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = (sha256.h = sha256.h || []);
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = (sha256.k = sha256.k || []);
    var primeCounter = k[lengthProperty];
    /*/
        var hash = [], k = [];
        var primeCounter = 0;
        //*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
            isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
        }
    }

    ascii += "\x80"; // Append Ƈ' bit (plus zero padding)
    while ((ascii[lengthProperty] % 64) - 56) ascii += "\x00"; // More zero padding

    for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j >> 8) return; // ASCII check: only accept characters in range 0-255
        words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
    words[words[lengthProperty]] = asciiBitLength;

    // process each chunk
    for (j = 0; j < words[lengthProperty]; ) {
        var w = words.slice(j, (j += 16)); // The message is expanded into 64 words as part of the iteration
        var oldHash = hash;
        // This is now the undefinedworking hash", often labelled as variables a...g
        // (we have to truncate as well, otherwise extra entries at the end accumulate
        hash = hash.slice(0, 8);

        for (i = 0; i < 64; i++) {
        var i2 = i + j;
        // Expand the message into 64 words
        // Used below if
        var w15 = w[i - 15],
            w2 = w[i - 2];

        // Iterate
        var a = hash[0],
            e = hash[4];
        var temp1 =
            hash[7] +
            (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + // S1
            ((e & hash[5]) ^ (~e & hash[6])) + // ch
            k[i] +
            // Expand the message schedule if needed
            (w[i] =
            i < 16
                ? w[i]
                : (w[i - 16] +
                (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + // s0
                    w[i - 7] +
                    (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | // s1
                0);
        // This is only used once, so could be moved below, but it only saves 4 bytes and makes things unreadble
        var temp2 =
            (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + // S0
            ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

        hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
        hash[4] = (hash[4] + temp1) | 0;
        }

        for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
        }
    }

    for (i = 0; i < 8; i++) {
        for (j = 3; j + 1; j--) {
        var b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? 0 : "") + b.toString(16);
        }
    }
    return result;
    };

    function blobToUint8Array(b) {
            console.log(b);
            var uri = URL.createObjectURL(b.files[0]),
            xhr = new XMLHttpRequest(),
            i,
            ui8;
            xhr.open("GET", uri, false);
            xhr.send();

            URL.revokeObjectURL(uri);

            ui8 = new Uint8Array(xhr.response.length);
            console.log(ui8);
            for (i = 0; i < xhr.response.length; ++i) {
            ui8[i] = xhr.response.charCodeAt(i);
            }

            return ui8;
        };
        
        //imAGE FUNCTION
        function fetch_image() {
            var x = document.getElementById("img");
            var code = blobToUint8Array(x);
            //console.log(code);
            var hashText = sha256(code);   
                document.getElementById("users").innerHTML = hashText;

        const code1 = {
        code: hashText.toString(),
        };

    fetch(
            "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-hddeb/service/manthanAPI/incoming_webhook/getUserIds",
            {
            method: "POST",
            body: JSON.stringify(code1),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            }
        )
        .then((response) => response.json())
        .then((json) => {
        //json will have the UserId of the Originator.
        console.log(json);
        document.getElementById("list").innerHTML = json;
        });  
        }

        function fetch_video(){
            //for video
            var x = document.getElementById("video");
            var code = blobToUint8Array(x);
            var hashText = sha256(code);   
                document.getElementById("users").innerHTML = hashText;
        const code1 = {
        code: hashText.toString(),
        };

    fetch(
            "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-hddeb/service/manthanAPI/incoming_webhook/getUserIds",
            {
            method: "POST",
            body: JSON.stringify(code1),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            }
        )
        .then((response) => response.json())
        .then((json) => {
        //json will have the UserId of the Originator.
        console.log(json);
        document.getElementById("list").innerHTML = json;
        });
        document.getElementById("output").innerHTML = "No Image Submitted";  
        }


        function fetch_text() {
            //for text
            getlocation();

            let apiKey = '9ad9f5c7dbff0f4a48119f73d03ea6d1e576d64f1ecebc454f168bab';
            json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
              console.log(data.ip);
              console.log(data.city);
              console.log(data.country_code);
              // so many more properties
            });

            var x = document.getElementById("message").value;
            x=x.toLowerCase();
            x=x.replace(/ /g, "")
            console.log(x);
            var hashText = sha256(x);   
                document.getElementById("users").innerHTML = hashText;

            //for image

        const code = {
        code: hashText.toString(),
        };

    fetch(
            "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-hddeb/service/manthanAPI/incoming_webhook/getUserIds",
            {
            method: "POST",
            body: JSON.stringify(code),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            }
        )
        .then((response) => response.json())
        .then((json) => {
        //json will have the UserId of the Originator.
        console.log(json);
        document.getElementById("list").innerHTML = json;
        });
        //document.getElementById("output").innerHTML = "No Image Submitted";  
        }

        function getlocation() {  
            if(navigator.geolocation){  
                navigator.geolocation.getCurrentPosition(showPosition)  
              }  
            else  
            {  
                 alert("Sorry! your browser is not supporting")  
             } }  
           
         function showPosition(position){  
            console.log("Latitude" + position.coords.latitude + ", " + "Longitude: " +    position.coords.longitude)  
         }

        //  function getIPFromAmazon() {
        //     fetch("https://checkip.amazonaws.com/",{mode:"no-cors"}).then(res => res.text()).then(data => console.log("IP " + data))
        //   }

        function json(url) {
            return fetch(url).then(res => res.json());
          }
          
         

      