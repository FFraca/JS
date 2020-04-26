<h1>Script 1: VL.js</h1>
What <b>VL.js</b> is?<br>
It is a simple code that allow you to create a listener for your variable and trigger a function when it values change.<br>
Exemple:<br>
<pre>
var hello = 0;
var listenerForHello = new VL('hello', function(){
  alert('Value of hello is changed!');
});
VL.start();
</pre>


<h2>How to use it</h2>
First, create a variable using the keyword "var" (or easly don't use any keyword)<br>
Example: <code>var hello = 0;</code> or <code>helloThere = 0;</code><br>
Then, create a listener for your variable using the VL class (VL is the acronym of Variable Listener)<br>
<code>yourListener = new VL("your_variable_name", () => console.log(""));</code><br>
First parameter: the name of the variable you want to listen for<br>
Second parameter: the function you want to execute after the value of the variable change<br><br>

Then, start the loop with: <code>yourListener.start()</code><br>

Now it's all done (remember that if you want, you can stop the listener with <code>yourListener.stop()</code>)
