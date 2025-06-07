  function selectedcard(value) {
                if (value == 4) {
                    document.getElementById("gen").style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/monorolls/grow@main/a.gif')";
                }
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                document.getElementById("text-header").style.display = "none";
                document.getElementById("content-body").style.display = "none";
                document.getElementById("page3").style.display = "block";
                var vargenerator = setInterval(GenTimer, 250);
                var getTextStep = 0;

                function GenTimer() {
                    if (getTextStep == 3) {
                        document.getElementById("code").innerHTML = "Connecting to server..";
                    } else if (getTextStep == 4) {
                        document.getElementById("code").innerHTML = "Connected.";
                    } else if (getTextStep == 5) {
                        document.getElementById("code").innerHTML = "Searching Gift Card Code..";
                    } else if (getTextStep == 6) {
                        document.getElementById("code").innerHTML = "Obtaining Gift Card Code...";
                    } else if (getTextStep == 7) {
                        document.getElementById("code").innerHTML = "Creating Code";
                    } else if (getTextStep == 8) {
                        document.getElementById("code").innerHTML = "Generating Gift Card Code...";
                    } else if (getTextStep == 9) {
                        document.getElementById("code").innerHTML = "Generating Gift Card Code...";
                    } else if (getTextStep == 12) {
                        document.getElementById("code").innerHTML = "Generating Gift Card Code...";
                    } else if (getTextStep == 14) {
                        myfunction2()
                        document.getElementById("pro-step2").style.backgroundColor = "white";
                        clearInterval(vargenerator)
                    }
                    getTextStep++;
                }
            }

            function myfunction2() {
                var vargenerator2 = setInterval(GenTimer2, 70);
                var getTextStep2 = 0;

                function GenTimer2() {
                    if (getTextStep2 == 1) {
                        document.getElementById("pro-bar").classList.remove('A0To50');
                        document.getElementById("pro-bar").classList.add('A50To100');
                    } else if (getTextStep2 == 4) {
                        var myVarCode = setInterval(genkey, 70);
                        var stop = 0;
                        var KeyCode = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "Z", "Y", "X", "W", "V", "U", "T", "S", "R", "Q", "P", "O", "N", "M"];

                        function genkey() {
                            key1 = KeyCode[Math.floor(Math.random() * 10)];
                            key2 = KeyCode[Math.floor(Math.random() * 10)];
                            key3 = KeyCode[Math.floor(Math.random() * 10)];
                            key4 = KeyCode[Math.floor(Math.random() * 10)];
                            key5 = KeyCode[Math.floor(Math.random() * 10)];
                            key6 = KeyCode[Math.floor(Math.random() * 10)];
                            key7 = KeyCode[Math.floor(Math.random() * 10)];
                            key8 = KeyCode[Math.floor(Math.random() * 10)];
                            key9 = KeyCode[Math.floor(Math.random() * 10)];
                            key10 = KeyCode[Math.floor(Math.random() * 10)];
                            key11 = KeyCode[Math.floor(Math.random() * 36)];
                            key12 = KeyCode[Math.floor(Math.random() * 36)];
                            key13 = KeyCode[Math.floor(Math.random() * 36)];
                            key14 = KeyCode[Math.floor(Math.random() * 36)];
                            key15 = KeyCode[Math.floor(Math.random() * 36)];
                            key16 = KeyCode[Math.floor(Math.random() * 36)];
                            key17 = KeyCode[Math.floor(Math.random() * 36)];
                            key18 = KeyCode[Math.floor(Math.random() * 36)];
                            key19 = KeyCode[Math.floor(Math.random() * 36)];
                            key20 = KeyCode[Math.floor(Math.random() * 36)];
                            key21 = KeyCode[Math.floor(Math.random() * 36)];
                            key22 = KeyCode[Math.floor(Math.random() * 36)];
                            key23 = KeyCode[Math.floor(Math.random() * 36)];
                            key24 = KeyCode[Math.floor(Math.random() * 36)];
                            key25 = KeyCode[Math.floor(Math.random() * 36)];
                            key26 = KeyCode[Math.floor(Math.random() * 36)];
                            key27 = KeyCode[Math.floor(Math.random() * 36)];
                            key28 = KeyCode[Math.floor(Math.random() * 36)];
                            key29 = KeyCode[Math.floor(Math.random() * 36)];
                            key30 = KeyCode[Math.floor(Math.random() * 36)];
                            key31 = KeyCode[Math.floor(Math.random() * 36)];
                            key32 = KeyCode[Math.floor(Math.random() * 36)];
                            key33 = KeyCode[Math.floor(Math.random() * 36)];
                            key34 = KeyCode[Math.floor(Math.random() * 36)];
                            key35 = KeyCode[Math.floor(Math.random() * 36)];
                            key36 = KeyCode[Math.floor(Math.random() * 36)];
                            document.getElementById("code").innerHTML = key1 + key2 + key3 + "-" + key5 + key6 + key7 + "-" + key13 + key14 + key15 + key16;
                            stop++;
                            if (stop == 70) {
                                document.getElementById("verify-bg").style.display = "block";
                                document.getElementById("code").innerHTML = key1 + key2 + key3 + "-" + key5 + key6 + key7 + "-" + "####";
                                clearInterval(myVarCode);
                                document.getElementById("pro-step3").style.backgroundColor = "white";
                            }
                        }
                    }
                    getTextStep2++;
                }
            }
