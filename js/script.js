var users=[
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar1.png'
    },
    {
        name: 'Chris',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar1.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar1.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
]

window.addEventListener('load', function() {
    
    var results = document.getElementById('results');

    function search(){

        var hobbyField=document.getElementById('hobby');
        var hobby = hobbyField.value;
        console.log(hobby);

        var genderField=document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        console.log(gender);

        let resultsHtml = '';
        let len = users.length;
        for (let i = 0; i < len; i++) {
            if(gender == 'A' || gender == users[i].gender) {
                if(hobby=='' || hobby == users[i].hobby){
                        resultsHtml += '<div class="person-row">\
                             <img src="avatar1.png" />\
                            <dic class="person-info">\
                            <div>' + users[i].name + '</div>\
                            <div>' + users[i].hobby + '</div>\
                            <button>Add as friend </button> </div>'   
                }        
            }
        }

        results.innerHTML = resultsHtml ;
    }

    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});