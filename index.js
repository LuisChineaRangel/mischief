function greet(name = 'World')
{
    if (prompt('Hello ' + name + '!\nHow are you? (Fine or Bad)', 'Bad') == 'Fine')
    {
        alert('Good, have a nice day!');
    }
    else
    {
        alert('Well, take a break');
    }
    if (confirm(name + ' is your name, right?'))
    {
        alert('Perfect! :)');
    }
    else
    {
        alert('What a shame :(');
    }
}