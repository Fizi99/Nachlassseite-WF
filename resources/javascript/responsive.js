

window.onload = function loaded(){
    if(window.screen.width<640||window.innerWidth<640){
        mobileNav();
        reorder();
    }
}

window.onresize = function resize(){
    if(window.screen.width<640||window.innerWidth<640){
        mobileNav();
        reorder();
    }else{
        desktopNav();
        unhideNav();
        reorderBack();
    }
}

function reorder(){

    if(document.getElementById('text')){

        while (document.getElementById('text').firstChild){

            document.getElementById('text').parentNode.insertBefore(document.getElementById('text').firstChild, document.getElementById('text'));
        }
        document.getElementById('text').parentNode.removeChild(document.getElementById('text'));
    }
}

function reorderBack(){

    if(!document.getElementById('text')){

        const e = document.createElement('div');
        e.id = 'text';
        
        while (document.getElementsByTagName('main')[0].firstChild != document.getElementById('med')){

            e.appendChild(document.getElementsByTagName('main')[0].firstChild);
        }
    
       document.getElementsByTagName('main')[0].prepend(e);
    }
}


function mobileNav(){

    if(document.getElementById('bottomnav').childNodes.length>0){

        while (document.getElementById('bottomnav').firstChild){

            const e = document.getElementById('bottomnav').firstChild;

            document.getElementById('topnav').appendChild(e);
        }

        for(let i = 0; i<3; i++){

            var l = document.createElement('li');
            l.className = 'mobileline';
            var d = document.createElement('div');
            l.appendChild(d);

            switch (i) {
                case 0:
                    var c=4;
                    break;
                case 1:
                    var c=10;
                    break;
                case 2:
                    var c=15;
                    break;
                default:
                    break;
            }

            document.getElementById('topnav').insertBefore(l, document.getElementById('topnav').childNodes[c]);
        }
    }

    document.getElementById('topnav').style.display = 'none';

    document.getElementById('menue').style.display = 'block';
}

function desktopNav(){

    if(document.getElementById('bottomnav').getElementsByTagName('li').length<3){

        const lines = document.getElementsByClassName('mobileline');

        while(lines[0]) {
            lines[0].parentNode.removeChild(lines[0]);
        }

        for(let i = 0; i<4; i++){

            const e=document.getElementById('topnav').lastChild;

            document.getElementById('bottomnav').prepend(e);
        }
    }
}

function menueButton(){

    const e=document.getElementById('topnav');

    if((window.screen.width<640||window.innerWidth<640)&&window.getComputedStyle(e).display=='none'){
        
        e.style.display= 'flex';
        document.getElementById('menue').style.display = 'none';

        hideOnClickOutside();

    }
    
}

function hideOnClickOutside(){
    
    const e = document.getElementById('header');

    const outsideClickListener = event => {
        if (!e.contains(event.target)&&(window.screen.width<640||window.innerWidth<640)) {

            const nav = document.getElementById('topnav');
            const button = document.getElementById('menue');
            
            nav.style.display= 'none';
            button.style.display= 'block';

            removeClickListener();
        }
    }

    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener);
    }

    document.addEventListener('click', outsideClickListener);

    if(window.screen.width>640||window.innerWidth>640){
        removeClickListener();
    }
}

function unhideNav(){

    const e=document.getElementById('topnav');

    if((window.screen.width>640||window.innerWidth>640)&&window.getComputedStyle(e).display=='none'){
        
        e.style.display= 'flex';
    }
}