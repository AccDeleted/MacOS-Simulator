function dropdown1() {
    document.getElementById("dropdown1").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function dropdown2() {
    document.getElementById("dropdown2").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function dropdown3() {
    document.getElementById("dropdown3").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  

  

  function controlcenter() {
    document.getElementById("controlcenter").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtnicon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  $(function()
{
    var playerTrack = $("#player-track"), bgArtwork = $('#bg-artwork'), bgArtworkUrl, albumName = $('#album-name'), trackName = $('#track-name'), albumArt = $('#album-art'), sArea = $('#s-area'), seekBar = $('#seek-bar'), trackTime = $('#track-time'), insTime = $('#ins-time'), sHover = $('#s-hover'), playPauseButton = $("#play-pause-button"),  i = playPauseButton.find('i'), tProgress = $('#current-time'), tTime = $('#track-length'), seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0, buffInterval = null, tFlag = false, albums = ['Talk','Circles','Dakiti','Home','Proxy (Original Mix)'], trackNames = ['Khalid - Talk','Post Malone - HWs bleeding','Bad Bunny - Dakiti','Jordan Schor - Home','Martin Garrix - Proxy'], albumArtworks = ['_1','_2','_3','_4','_5'], trackUrl = ['https://hiphopkit.com/music/stream/67','https://hiphopkit.com/music/stream/153','https://mp3.filmisongs.com/Bad%20Bunny,%20Jhay%20Cortez%20-%20D%C3%81KITI.mp3','https://www.luvmp.com/wp-content/uploads/2018/04/The_Weeknd_Kendrick_Lamar_-_Pray_For_Me.mp3','https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3'], playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < albumArtworks.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img.active').removeClass('active');
            $('#'+currArtwork).addClass('active');
            
            bgArtworkUrl = $('#'+currArtwork).attr('src');

            bgArtwork.css({'background-image':'url('+bgArtworkUrl+')'});
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer()
	{	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});// Make the DIV element draggable:
$( function() {
  $( ".noteapp" ).draggable({ containment: ".appcontainer", scroll: false });
} );
$( function() {
  $( ".cameraapp" ).draggable({ containment: ".appcontainer", scroll: false });
} );
$( function() {
  $( ".browserapp" ).draggable({ containment: ".appcontainer", scroll: false });
} );
$( function() {
  $( ".portfolio" ).draggable({ containment: ".appcontainer", scroll: false });
} );
$( function() {
  $( ".calcapp" ).draggable({ containment: ".appcontainer", scroll: false });
} );

$( function() {
  $( ".noteapp" ).resizable({ containment: ".appcontainer", scroll: false, minHeight: 290,
  minWidth: 370 });
} );
$( function() {
  $( ".cameraapp" ).resizable({ containment: ".appcontainer", scroll: false, 
    minHeight: 200,
    minWidth: 500
  });
} );
$( function() {
  $( ".browserapp" ).resizable({ containment: ".appcontainer", scroll: false,  
      minWidth: 420,
      minHeight: 520,
  });
} );
$( function() {
  $( ".portfolio" ).resizable({ containment: ".appcontainer", scroll: false });
} );
$( function() {
  $( ".calcapp" ).resizable({ containment: ".appcontainer", scroll: false,
    maxHeight: 600,
      maxWidth: 420,
      minHeight: 600,
      minWidth: 420
  });
  
} );




window.addEventListener("DOMContentLoaded", function () {

  const result = document.querySelector('.js-result');
  const buttons = document.querySelectorAll('button');

  var action = ""; // store operators
  var prevVal = []; // store previous values
  var turn = 1;
  var firstTouch = true; // overwrite result text?

  // if reset button is pressed
  function reset() {
    result.textContent = 0;
    action = "";
    prevVal = [];
    firstTouch = true;
    turn = 1;
  }

  function negative() {
    let str = String(result.textContent); // store current value in a variable

    if (!action || !firstTouch) {
      str.includes('-') ? result.textContent = str.substr(1, str.length) : result.textContent = `-${str}`; // if includes "-" remove it, otherwise add "-"
    } else if (action && firstTouch) {
      str.includes('-') ? result.textContent = str.substr(1, str.length) : result.textContent = `-0`;
    }
  }

  function float() {
    let str = String(result.textContent); // store current value in a variable

    if (!action || !firstTouch) {
      if (!str.includes('.')) {// if doesn't include "." => add it
        result.textContent = `${str}.`;
      }
    } else if (action && firstTouch) {
      if (!str.includes('.')) {
        result.textContent = `${0}.`;
      }
    }
  }

  function percentage() {

    let number = Number(result.textContent); // make sure it's a number
    result.textContent = number / 100;

  }

  // function for pressing a number

  function number(num) {

    let resultText = result.textContent;

    if (resultText === "-0") {// if current text is -0, replace 0
      result.textContent = `-${num}`;
      firstTouch = false;
    } else if (resultText === "0.") {// if current text is 0. append number
      result.textContent += num;
      firstTouch = false;
    } else if (resultText !== "0" && !firstTouch) {
      result.textContent += num;
    } else {
      result.textContent = num;
      firstTouch = false;
    }
    console.log(`clicked number: ${num}`);
  }

  function operation(target) {

    let operator = target.dataset.action;
    console.log(`clicked operator ${operator}`);

    // to allow chaining (has to be done before assigning a currentVal)
    if (turn > 1) {
      calculate();
    }

    let currentVal = Number(result.textContent);

    action = operator; //set global variable to data attribute of the button



    if (prevVal.length >= 2) {// if pressed operator after making prior calculations
      prevVal = [currentVal]; // replace the memory with current value on the screen
    } else {
      // To prevent storing values when pressing operator buttons
      !firstTouch ? prevVal.push(currentVal) : null; // TODO causes a bug if no numbers pressed
    }


    firstTouch = true;
    turn++;

    console.log(`memory: ${prevVal}`);
    console.log(`turn no.: ${turn}`);

  }

  function calculate() {
    let currentVal = Number(result.textContent);

    function values() {

      if (prevVal.length >= 2) {
        prevVal.shift();
        prevVal.unshift(currentVal);
      } else {
        prevVal.push(currentVal);
      }
    }

    switch (action) {

      case "add":
        values();
        result.textContent = prevVal.reduce((a, b) => a + b);
        break;

      case "substract":
        values();
        result.textContent = prevVal.reduce((a, b) => a - b);
        break;

      case "divide":
        values();
        result.textContent = prevVal.reduce((a, b) => a / b);
        break;

      case "multiply":
        values();
        result.textContent = prevVal.reduce((a, b) => a * b);
        break;}



    firstTouch = true;
    turn = 1;
    console.log(`========Calc========`);
    console.log(`memory: ${prevVal[0]} ${action} ${prevVal[1]}}`);
    console.log(`Turn no.: ${turn}`);
  }

  // add events to all buttons
  buttons.forEach(el => {

    switch (el.dataset.action) {

      case 'clear':
        el.addEventListener('click', reset);
        break;

      case 'number':
        el.addEventListener('click', e => {
          let target = e.target || e.srcElement;
          number(target.textContent);
        });
        break;

      case 'negative':
        el.addEventListener('click', negative);
        break;

      case 'percentage':
        el.addEventListener('click', percentage);
        break;

      case 'float':
        el.addEventListener('click', float);
        break;

      case 'divide':
      case 'multiply':
      case 'substract':
      case 'add':
        el.addEventListener('click', e => operation(e.target || e.srcElement));
        break;

      case 'result':
        el.addEventListener('click', calculate);
        break;}

  });

  // keyboard support
  window.addEventListener('keydown', e => {
    let keycode = e.keyCode;
    if (keycode >= 48 && keycode <= 57) {
      number(String.fromCharCode(keycode));
    }
  });

});

