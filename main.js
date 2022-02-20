var reasons = [
    "My Dad (Rajesh Salian",
    "My Mom (Sapna Salian", 
    "My Little Sister (Aashrita Salian) ", 
    "Me (Misheeta Salian)" 
    ]
    var images = [ "https://images.onlinelabels.com/images/clip-art/oksmith/Fun%20with%20Dad%20(_2)-313721.png",
     "https://images.onlinelabels.com/images/clip-art/oksmith/Mother%20and%20Baby%20(_6)-312245.png", 
     "https://mail.google.com/mail/u/0?ui=2&ik=d353857126&attid=0.1&permmsgid=msg-a:r-8514315272266489285&th=17f18dd32e957c3b&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9qUTO864IKZzfWPh0pNaZS190QINsbTrzHNiSkSVFGCzGUZvlJk6p_xCTlVlO7JYT0W3Co5sxpZQ1WE2YGjiS_j-0Yr4xfeI1wDal_xnwn_yU8AoIVfGiAedk&disp=emb&realattid=ii_kzvqhwan0",
     "https://clipground.com/images/clip-art-sister-7.jpg" ];
     var i = 0; function nextslide() { document.getElementById("reasontext").innerHTML = reasons[i]; document.getElementById("album").src = images[i]; i++; document.getElementById("audio").play(); }