// CSS content
//  UPDATE html_courses
//  SET title = 'CSS Tutor',
//     content = '
//     <style>
//         p {
//             text-align: justify;
//         }
//         h2 {
//             text-align: center;
//         }
//         h1{
//             color:white;
//         }
//     </style>
// 	<h1>CSS<h1>
//     <h2>CSS means cascading style sheet.</h2>
//     <p>It is simply a file that goes along with your HTML file which specifies the look and formatting of the HTML file. We will illustrate this with a simple example.</p>

//     <h2>Creating the CSS file</h2>
//     <p>First create a file called <code>thecssfile.css</code> and place it in the same folder as your HTML file. In this example, we will see how to specify how text with certain tags appears - what font is used, what style, and what size.</p>

//     <h2>Commenting in CSS</h2>
//     <p>Note: Comments in a CSS file are lines which are ignored by the browser. These are enclosed between the characters <code>/*…*/</code>.</p>
//     <p><code>/* Example comment that would be ignored */</code></p>

//     <h2>Example CSS</h2>
//     <p>What you do in a CSS file is list tags used in the HTML file and specify values for various attributes enclosed in curly braces.</p>

//     <pre>tag_name {
//         properties
//     }</pre>

//     <p>For example, we can specify the font used and text size for an <code>h1</code> header:</p>

//     <pre>h1 {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 24px;
//         font-style: bold;
//         font-variant: normal;
//         font-weight: 700;
//         line-height: 26.3999996185303px;
//     }</pre>

//     <p>If you wanted all text in your HTML file that was enclosed in paragraph tags <code>&lt;p&gt;</code> to have Helvetica Neue font with size 12 pixels, you would write:</p>

//     <pre>p {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 12px;
//         font-style: normal;
//         font-variant: normal;
//         font-weight: 400;
//         line-height: 20px;
//     }</pre>

//     <p>Or suppose that we want all quotes on our web page to have italic font. We can do this by specifying the properties of the block quote tag in our CSS file:</p>

//     <pre>blockquote {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 21px;
//         font-style: italic;
//         font-variant: normal;
//         font-weight: 400;
//         line-height: 30px;
//     }</pre>

//     <p>As you learn more CSS, you will be able to make very fancy web pages, but with this simple example we are seeing some advantages of using CSS. One is that we can have all block quotes appear in italics with other specified font properties without having to type in tags every single time in our HTML file.</p>

//     <h2>Complete Code of CSS File</h2>
//     <pre>/* The CSS File */
//     h1 {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 24px;
//         font-style: bold;
//         font-variant: normal;
//         font-weight: 700;
//         line-height: 26.3999996185303px;
//     }
//     h3 {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 14px;
//         font-style: normal;
//         font-variant: normal;
//         font-weight: 500;
//         line-height: 15.3999996185303px;
//     }
//     p {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 14px;
//         font-style: normal;
//         font-variant: normal;
//         font-weight: 400;
//         line-height: 20px;
//     }
//     blockquote {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 21px;
//         font-style: italic;
//         font-variant: normal;
//         font-weight: 400;
//         line-height: 30px;
//     }
//     pre {
//         font-family: Arial, ‘Helvetica Neue’, Helvetica, sans-serif;
//         font-size: 13px;
//         font-style: normal;
//         font-variant: normal;
//         font-weight: 400;
//         line-height: 18.5714302062988px;
//     }</pre>

//     <h2>Using the CSS File</h2>
//     <p>To use the CSS file, you need to add a reference to it in your header section of the HTML file. This is placed in between the header tags <code>&lt;head&gt;</code> and <code>&lt;/head&gt;.</code> The important line to add is:</p>

//     <pre>&lt;link href="thecssfile.css" rel="stylesheet" type="text/css"&gt;</pre>

//     <p>Be sure that the <code>href</code> is correct, or that the .css file is in the same folder as your HTML file. There are some other codes necessary to include in the header section but we won’t worry about what they do just yet and just make sure they are listed:</p>

//     <pre>&lt;html&gt;
//     &lt;head&gt;
//         &lt;title&gt;CSS Example&lt;/title&gt;
//         &lt;meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"&gt;
//         &lt;link href="thecssfile.css" rel="stylesheet" type="text/css"&gt;
//     &lt;/head&gt;</pre>

//     <h2>Adding to the HTML Body</h2>
//     <p>Then we can add some things to our HTML body:</p>

//     <pre>&lt;body&gt;
//         &lt;h1&gt;My Great Web Page&lt;/h1&gt;
//         &lt;pre&gt;This is some random text written for&lt;br&gt;display on the web page. Hello world&lt;br&gt;hello world hello world hello world.&lt;br&gt;&lt;/pre&gt;
//         &lt;br&gt;
//         &lt;q&gt;&lt;/q&gt;
//         &lt;blockquote&gt;&lt;q&gt;This is the best day in the world!&lt;/q&gt;&lt;/blockquote&gt;
//         &lt;br&gt;&lt;br&gt;
//     &lt;/body&gt;
//     &lt;/html&gt;</pre>

//     <p>Now that we have specified the CSS file in the header, all the text listed in the body will automatically take on the properties specified, so for instance, the quoted text will be in italics even though we didn’t add <code>&lt;i&gt;</code> or <code>&lt;em&gt;</code> tags.</p>
//     '
//  WHERE id = 3;







// HTML content
// UPDATE `edu_users`.`html_courses`
// SET `content` = '<html>
//         <body>
//             <h1 style="text-align: center;">HTML Tutor</h1>
//             <p style="text-align: justify;">HTML means Hypertext Markup Language. It\'s basically just a text file with codes that tell the browser how to display the information. For example, you can let the browser know that a certain string of text should be displayed as a header with bold font, or that the text should be centered on the page. To let the browser know the text file contains HTML, we use the file extension .html rather than .doc or .txt or .rtf.</p>
//             <p style="text-align: justify;">Since an HTML document is nothing but a text file, you can use any text editor to make one. You can use Microsoft Word, Pages, or your built-in text editors provided by the operating system. However, if you are a Mac user I\'m going to recommend a special HTML editor which is free called Kompozer. The nice thing about Kompozer is that it allows you to preview your file in real time inside the application without having to save your HTML file and loading it in a browser. Although in this book we will be focusing on teaching HTML and CSS, Kompozer allows WYSIWYG editing of web pages. You can download it free here: <a href="http://www.kompozer.net/">Kompozer</a>.</p>
//             <p style="text-align: justify;">A website is made up of multiple HTML pages. So each HTML file is a single web page. When you type in a website\'s home address, such as <a href="http://cnn.com">http://cnn.com</a> or <a href="http://nytimes.com">http://nytimes.com</a>, what happens is the browser opens a special file named index.html. In a nutshell, this is an HTML file no different than any other, but it has the name "index" that tells the browser to load this file when someone visits the website. On your server, you will place the index.html file in the home directory. There are some exceptions to this, but for now that is how you can view the home page of a website.</p>
//             <p style="text-align: justify;">The other web pages on the site will have different names like pageone.html, pagetwo.html, etc. These other pages can be in the home directory or you can make a folder on your server and place the pages in there. So for example, suppose you have a website <a href="http://acmeincorporated.com">http://acmeincorporated.com</a>. In the public_html folder on the server, you would place the home page here. This would be the file index.html. You could place an about.html page in this folder as well. Then it would be referenced in the browser as: <a href="http://acmeincorporated.com/about.html">http://acmeincorporated.com/about.html</a>.</p>
//             <p style="text-align: justify;">Alternatively, you could create a folder in your home directory and place the about.html file in there. Let\'s say that we called that folder "info". In that case, the web address would be: <a href="http://acmeincorporated.com/info/about.html">http://acmeincorporated.com/info/about.html</a>.</p>
//             <p style="text-align: justify;">Like a word processing document, an HTML file can include different fonts, colors, images, and links to other HTML pages. An HTML page can also have a style format which is done using CSS. We will see how to enter the appropriate codes to do these tasks in future chapters.</p>
//             <h2 style="text-align: center;">Your First Webpage</h2>
//             <p style="text-align: justify;">Now that we have an idea of what a web page and HTML file is and how to create one, let\'s get our feet wet and start creating simple web pages. The first thing you need to know is how to give instructions to the browser. This is done by using tags. The format used to enter a tag is to enclose it in <code>&lt;&gt;</code>. You will need an opening tag and a closing tag. Inside the <code>&lt;&gt;</code> characters, you give the browser an instruction. So for illustration, to tell the browser that a block of text is tag_one, the opening tag would be: <code>&lt;tag_one&gt;</code></p>
//             <p style="text-align: justify;">A closing tag is indicated with a forward slash. So to tell the browser that we are finished with tag_one, we would write: <code>&lt;/tag_one&gt;</code></p>
//             <h2 style="text-align: center;">Linebreaks and Center Tags</h2>
//             <p style="text-align: justify;">In our first tutorial, we created a Hello World web page. It wasn’t too exciting, it just printed our Hello World message to the screen. Now let’s move forward by adding some text formatting. First let’s add a couple more lines of text. Maybe we want to print the following: Hello World! My name is Joe. My friend is Sally.</p>
//             <p style="text-align: justify;">When you do this and save your HTML file, and then open it in a browser, what you see is: Hello World! My name is Joe. My friend is Sally. So even though we put line breaks and some spacing, the browser ignores it. The browser sees one long string of text unless you add tags to tell it how to display that text.</p>
//             <p style="text-align: justify;">To center text, you can use the <code>&lt;center&gt;</code> tag. To add a line break, use the <code>&lt;br&gt;</code> tag. For now, let\'s just add line breaks and see how the page changes.</p>
//             <h2 style="text-align: center;">Header Tags</h2>
//             <p style="text-align: justify;">Header tags enable us to easily create nice bold text to spruce up the appearance of our web pages. Header tags use the format <code>&lt;hx&gt;</code> where x is an integer 1,2,3,4…. The smaller the number, the larger the header. For example: <code>&lt;h1&gt;</code> for the largest header, <code>&lt;h2&gt;</code> for the second-largest, and so on.</p>
//             <h2 style="text-align: center;">Font Color</h2>
//             <p style="text-align: justify;">We can improve the appearance of our web pages using the <code>&lt;font color=&quot;color&quot;&gt;</code> tag. For example, to set the font color to red, you can use: <code>&lt;font color=&quot;red&quot;&gt;</code>Some text<code>&lt;/font&gt;</code>.</p>
//             <h2 style="text-align: center;">Font Size and Type Face</h2>
//             <p style="text-align: justify;">You can also change the font size and type face using the <code>&lt;font size=&quot;x&quot;&gt;</code> tag. For example, <code>&lt;font size=&quot;5&quot;&gt;</code>Text<code>&lt;/font&gt;</code> sets the text size to 5. You can also specify the typeface with the <code>&lt;font face=&quot;verdana&quot;&gt;</code> tag.</p>
//             <h2 style="text-align: center;">Paragraph and Div Tags</h2>
//             <p style="text-align: justify;">The <code>&lt;p&gt;</code> tag creates a formatted paragraph for any text enclosed within the tags, adding margins and spacing. The <code>&lt;div&gt;</code> tag is used to group elements together, often for styling purposes. You can specify the style like color for the div, for example: <code>&lt;div style=&quot;color: rgb(0, 0, 255);&quot;&gt;</code>Text<code>&lt;/div&gt;</code>.</p>
//             <h2 style="text-align: center;">Hyperlinks</h2>
//             <p style="text-align: justify;">To add a hyperlink, we use the <code>&lt;a href=&quot;url&quot;&gt;</code> tag. For example, <code>&lt;a href=&quot;http://nytimes.com&quot;&gt;New York Times&lt;/a&gt;</code> will create a link to the New York Times website.</p>

//             <!-- New Concepts Added -->
//             <h2 style="text-align: center;">Forms</h2>
//             <p style="text-align: justify;">Forms are used to collect user input. They can contain input fields like text boxes, checkboxes, and buttons. Below is an example of a simple form:</p>
//             <code>&lt;form action=&quot;submit.php&quot; method=&quot;post&quot;&gt;</code><br>
//             <code>&lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;</code><br>
//             <code>&lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot;&gt;</code><br>
//             <code>&lt;input type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code><br>
//             <code>&lt;/form&gt;</code>

//             <h2 style="text-align: center;">Tables</h2>
//             <p style="text-align: justify;">Tables are used to display data in rows and columns. Here is an example of a table:</p>
//             <code>&lt;table&gt;</code><br>
//             <code>&lt;tr&gt;&lt;th&gt;Header 1&lt;/th&gt;&lt;th&gt;Header 2&lt;/th&gt;&lt;/tr&gt;</code><br>
//             <code>&lt;tr&gt;&lt;td&gt;Data 1&lt;/td&gt;&lt;td&gt;Data 2&lt;/td&gt;&lt;/tr&gt;</code><br>
//             <code>&lt;/table&gt;</code>

//             <h2 style="text-align: center;">Audio and Video Embedding</h2>
//             <p style="text-align: justify;">HTML5 allows embedding audio and video files directly into the webpage using <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. Example:</p>
//             <code>&lt;audio controls&gt;</code><br>
//             <code>&lt;source src=&quot;audiofile.mp3&quot; type=&quot;audio/mp3&quot;&gt;</code><br>
//             <code>&lt;/audio&gt;</code><br>
//             <code>&lt;video width=&quot;320&quot; height=&quot;240&quot; controls&gt;</code><br>
//             <code>&lt;source src=&quot;movie.mp4&quot; type=&quot;video/mp4&quot;&gt;</code><br>
//             <code>&lt;/video&gt;</code>

//             <h2 style="text-align: center;">Meta Tags</h2>
//             <p style="text-align: justify;">Meta tags provide metadata about the HTML document, such as the character set and page description. Example:</p>
//             <code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code><br>
//             <code>&lt;meta name=&quot;description&quot; content=&quot;HTML Tutorial&quot;&gt;</code><br>

//             <h2 style="text-align: center;">HTML5 Elements</h2>
//             <p style="text-align: justify;">HTML5 introduced new semantic elements like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, and <code>&lt;nav&gt;</code> to improve the structure of web pages.</p>
//         </body>
//     </html>'
// WHERE `id` = 1;


// java code
// INSERT INTO html_courses (title, content)
// VALUES 
// ('Java Tutor', 
// '<h2 style="text-align:center;">OOPs Concepts</h2>
// <p style="text-align: justify;">Object Oriented Programming is a paradigm that provides many concepts such as inheritance, data binding, polymorphism etc. Simula is considered as the first object-oriented programming language. The programming paradigm where everything is represented as an object is known as truly object-oriented programming language. Smalltalk is considered as the first truly object-oriented programming language.</p>
// <p style="text-align: justify;">OOPs (Object Oriented Programming System) Object means a real world entity such as pen, chair, table etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance by providing some concepts: object, class, inheritance, polymorphism, abstraction, encapsulation.</p>
// <p style="text-align: justify;">Inheritance When one object acquires all the properties and behaviours of parent object i.e. known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.</p>
// <p style="text-align: justify;">Polymorphism When one task is performed by different ways i.e. known as polymorphism. For example: to convince the customer differently, to draw something e.g. shape or rectangle etc. In java, we use method overloading and method overriding to achieve polymorphism. Another example can be to speak something e.g. cat speaks meaw, dog barks woof etc.</p>
// <p style="text-align: justify;">Abstraction Hiding internal details and showing functionality is known as abstraction. For example: phone call, we don\'t know the internal processing. In java, we use abstract class and interface to achieve abstraction.</p>
// <p style="text-align: justify;">Encapsulation Binding (or wrapping) code and data together into a single unit is known as encapsulation. For example: capsule, it is wrapped with different medicines. A java class is the example of encapsulation. Java bean is the fully encapsulated class because all the data members are private here.</p>
// <h2 style="text-align:center;">Java Basics</h2>
// <p style="text-align: justify;">Java is a high-level programming language developed by Sun Microsystems (now owned by Oracle). Java was designed with the principle of "Write Once, Run Anywhere," meaning that Java code can run on any platform that has a Java Virtual Machine (JVM) installed.</p>
// <p style="text-align: justify;">Java has a syntax similar to C++ and follows the Object-Oriented Programming paradigm. It uses a robust memory management system (automatic garbage collection) and supports multithreading, making it an excellent choice for both small applications and large enterprise-level applications.</p>
// <h2 style="text-align:center;">Java Data Types</h2>
// <p style="text-align: justify;">In Java, data types are divided into two categories: primitive and non-primitive data types. Primitive data types include byte, short, int, long, float, double, char, and boolean. Non-primitive data types include objects and arrays.</p>
// <p style="text-align: justify;">For example, the `int` type is used to represent integer values, while `char` is used to represent single characters. The `boolean` type is used for binary values, i.e., `true` or `false`.</p>
// <h2 style="text-align:center;">Java Control Flow Statements</h2>
// <p style="text-align: justify;">Control flow statements in Java help in controlling the flow of execution of a program. There are three main types of control flow statements: decision-making statements (if-else, switch), loop statements (for, while, do-while), and jump statements (break, continue, return).</p>
// <p style="text-align: justify;">For example, the `if-else` statement allows the program to choose between two or more paths of execution based on a given condition. The `for` loop allows repeated execution of a block of code while a specified condition is true, and the `while` loop executes code as long as a condition is true.</p>
// <h2 style="text-align:center;">Java Classes and Objects</h2>
// <p style="text-align: justify;">In Java, a class is a blueprint for creating objects. It defines the data members (fields) and methods that the created objects will have. Objects are instances of a class that represent real-world entities.</p>
// <p style="text-align: justify;">For example, you can create a class `Car` with attributes like `model`, `color`, and `engineType`, and methods like `start()` and `stop()`. When an object of the `Car` class is created, it will have these attributes and methods specific to that car.</p>
// <h2 style="text-align:center;">Java Exception Handling</h2>
// <p style="text-align: justify;">Java provides a powerful mechanism for handling errors and exceptional conditions that may occur during the execution of a program. Exception handling in Java is done using `try`, `catch`, `finally`, and `throw` statements.</p>
// <p style="text-align: justify;">For example, the `try` block contains code that might throw an exception, and the `catch` block is used to handle the exception. The `finally` block always executes regardless of whether an exception occurred or not. The `throw` statement is used to explicitly throw an exception.</p>');



// java

// INSERT INTO html_courses (title, content)
// VALUES 
// ('Java Tutor', 
// '<h2 style="text-align:center;">OOPs Concepts</h2>
// <p style="text-align: justify;">Object Oriented Programming is a paradigm that provides many concepts such as inheritance, data binding, polymorphism etc. Simula is considered as the first object-oriented programming language. The programming paradigm where everything is represented as an object is known as truly object-oriented programming language. Smalltalk is considered as the first truly object-oriented programming language.</p>
// <p style="text-align: justify;">OOPs (Object Oriented Programming System) Object means a real world entity such as pen, chair, table etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance by providing some concepts: object, class, inheritance, polymorphism, abstraction, encapsulation.</p>
// <p style="text-align: justify;">Inheritance When one object acquires all the properties and behaviours of parent object i.e. known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.</p>
// <p style="text-align: justify;">Polymorphism When one task is performed by different ways i.e. known as polymorphism. For example: to convince the customer differently, to draw something e.g. shape or rectangle etc. In java, we use method overloading and method overriding to achieve polymorphism. Another example can be to speak something e.g. cat speaks meaw, dog barks woof etc.</p>
// <p style="text-align: justify;">Abstraction Hiding internal details and showing functionality is known as abstraction. For example: phone call, we don\'t know the internal processing. In java, we use abstract class and interface to achieve abstraction.</p>
// <p style="text-align: justify;">Encapsulation Binding (or wrapping) code and data together into a single unit is known as encapsulation. For example: capsule, it is wrapped with different medicines. A java class is the example of encapsulation. Java bean is the fully encapsulated class because all the data members are private here.</p>
// <h2 style="text-align:center;">Java Basics</h2>
// <p style="text-align: justify;">Java is a high-level programming language developed by Sun Microsystems (now owned by Oracle). Java was designed with the principle of "Write Once, Run Anywhere," meaning that Java code can run on any platform that has a Java Virtual Machine (JVM) installed.</p>
// <p style="text-align: justify;">Java has a syntax similar to C++ and follows the Object-Oriented Programming paradigm. It uses a robust memory management system (automatic garbage collection) and supports multithreading, making it an excellent choice for both small applications and large enterprise-level applications.</p>
// <h2 style="text-align:center;">Java Data Types</h2>
// <p style="text-align: justify;">In Java, data types are divided into two categories: primitive and non-primitive data types. Primitive data types include byte, short, int, long, float, double, char, and boolean. Non-primitive data types include objects and arrays.</p>
// <p style="text-align: justify;">For example, the `int` type is used to represent integer values, while `char` is used to represent single characters. The `boolean` type is used for binary values, i.e., `true` or `false`.</p>
// <h2 style="text-align:center;">Java Control Flow Statements</h2>
// <p style="text-align: justify;">Control flow statements in Java help in controlling the flow of execution of a program. There are three main types of control flow statements: decision-making statements (if-else, switch), loop statements (for, while, do-while), and jump statements (break, continue, return).</p>
// <p style="text-align: justify;">For example, the `if-else` statement allows the program to choose between two or more paths of execution based on a given condition. The `for` loop allows repeated execution of a block of code while a specified condition is true, and the `while` loop executes code as long as a condition is true.</p>
// <h2 style="text-align:center;">Java Classes and Objects</h2>
// <p style="text-align: justify;">In Java, a class is a blueprint for creating objects. It defines the data members (fields) and methods that the created objects will have. Objects are instances of a class that represent real-world entities.</p>
// <p style="text-align: justify;">For example, you can create a class `Car` with attributes like `model`, `color`, and `engineType`, and methods like `start()` and `stop()`. When an object of the `Car` class is created, it will have these attributes and methods specific to that car.</p>
// <h2 style="text-align:center;">Java Exception Handling</h2>
// <p style="text-align: justify;">Java provides a powerful mechanism for handling errors and exceptional conditions that may occur during the execution of a program. Exception handling in Java is done using `try`, `catch`, `finally`, and `throw` statements.</p>
// <p style="text-align: justify;">For example, the `try` block contains code that might throw an exception, and the `catch` block is used to handle the exception. The `finally` block always executes regardless of whether an exception occurred or not. The `throw` statement is used to explicitly throw an exception.</p>');




// Python

// INSERT INTO html_courses (title, content) 
// VALUES (
//     'Python Tutor', 
//     '<h2 style="text-align:center;">Python</h2>
//     <p style="text-align: justify;">Python: Dynamic programming language which supports several different programming paradigms: Procedural programming, Object-oriented programming, Functional programming. Standard: Python byte code is executed in the Python interpreter (similar to Java) → platform independent code.</p>'
// );



// react-js code

// UPDATE html_courses
// SET title = 'React-js Tutor', 
//     content = '
//         <h1 style="text-align:center; color:white">React-Js</h1>
//         <h2 style="text-align:center;">What is React?</h2>
//         <p style="text-align: justify;">React (https://facebook.github.io/react/) is a JavaScript library for building user interfaces. It is the view layer for web applications. At the heart of all React applications are components. A component is a self-contained module that renders some output. We can write interface elements like a button or an input field as a React component. Components are composable. A component might include one or more other components in its output. Broadly speaking, to write React apps we write React components that correspond to various interface elements. We then organize these components inside higher-level components which define the structure of our application.</p>

//    '
// WHERE id = 6;





// INSERT INTO html_courses (title, content) 
// VALUES ('Node-js Tutor', 
// '<p style="text-align: justify;">This post is a getting started guide to Node.js, the server-side JavaScript runtime environment. Node.js is built on top of the Google Chrome V8 JavaScript engine, and it\'s mainly used to create web servers - but it\'s not limited to that. Node.js is a runtime environment for JavaScript that runs on the server. Node.js is open source, cross-platform, and since its introduction in 2009, it got hugely popular and now plays a significant role in the web development scene. If GitHub stars are one popularity indication factor, having 46000+ stars means being very popular.</p> 
// <h2 style="text-align: center;">Overview</h2> 
// <p style="text-align: justify;">Node.js is a runtime environment for JavaScript that runs on the server. Node.js is open source, cross-platform, and since its introduction in 2009, it got hugely popular and now plays a significant role in the web development scene. If GitHub stars are one popularity indication factor, having 46000+ stars means being very popular.</p> 
// <h2 style="text-align: center;">The best features of Node.js</h2> 
// <p style="text-align: justify;">Fast: One of the main selling points of Node.js is speed. JavaScript code running on Node.js (depending on the benchmark) can be twice as fast as compiled languages like C or Java, and orders of magnitude faster than interpreted languages like Python or Ruby, because of its non-blocking paradigm.</p> 
// <p style="text-align: justify;">Simple: Node.js is simple. Extremely simple, actually. JavaScript: Node.js runs JavaScript code. This means that millions of frontend developers who already use JavaScript in the browser can now run server-side code using the same programming language without the need to learn a completely different tool.</p> 
// <p style="text-align: justify;">V8: Running on the Google V8 JavaScript engine, which is Open Source, Node.js is able to leverage the work of thousands of engineers who made (and will continue to make) the Chrome JavaScript runtime blazing fast.</p> 
// <p style="text-align: justify;">Asynchronous platform: Node.js uses non-blocking, event-driven architecture. Instead of waiting for an I/O operation to complete (e.g., reading from the database, accessing the filesystem), Node.js continues running other tasks and uses a callback function once the I/O operation is completed. This enables the server to handle thousands of concurrent connections with a single thread.</p> 
// <p style="text-align: justify;">A huge number of libraries: npm with its simple structure helped the ecosystem of Node.js proliferate. Now the npm registry hosts almost 500,000 open source packages you can freely use.</p>
// <h2 style="text-align: center;">An example Node.js application</h2>
// <p style="text-align: justify;">The most common example "Hello World" of Node.js is a web server:</p>
// <pre style="text-align: justify;">
// const http = require(\'http\');
// const hostname = \'127.0.0.1\';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader(\'Content-Type\', \'text/plain\');
//   res.end(\'Hello World\n\');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// </pre>
// <p style="text-align: justify;">To run this snippet, save it as a server.js file and run <code>node server.js</code> in your terminal. This code first includes the Node.js http module. Node.js has an amazing standard library, including a first-class support for networking. The <code>createServer()</code> method of http creates a new HTTP server and returns it. The server is set to listen on the specified port and hostname. When the server is ready, the callback function is called, in this case informing us that the server is running.</p>
// <h2 style="text-align: center;">Node.js frameworks and tools</h2>
// <p style="text-align: justify;">Node.js is a low-level platform, and to make things easier and more interesting for developers, thousands of libraries have been built on top of Node.js. Many of those established over time as popular options. Here is a non-comprehensive list of the ones I consider very relevant and worth learning:</p>
// <ul style="text-align: justify;">
//   <li><b>Express</b>: One of the most simple yet powerful ways to create a web server. Its minimalist approach is key to its success.</li>
//   <li><b>Meteor</b>: An incredibly powerful full-stack framework, sharing code on both the client and server.</li>
//   <li><b>Next.js</b>: A framework to render server-side rendered React applications.</li>
//   <li><b>Socket.io</b>: A real-time communication engine for building network applications.</li>
// </ul>
// <h2 style="text-align: center;">A brief history of Node.js</h2>
// <p style="text-align: justify;">Node.js is just 9 years old. In comparison, JavaScript is 23 years old and the web as we know it is 25 years old. Node.js has been around for a relatively short time but has grown very quickly. Let’s take a look at its history:</p>
// <ul style="text-align: justify;">
//   <li><b>2009:</b> Node.js is born. The first form of npm is created.</li>
//   <li><b>2010:</b> Express and Socket.io are born.</li>
//   <li><b>2015:</b> The Node.js Foundation is formed. IO.js is merged back into Node.js.</li>
//   <li><b>2017:</b> Node 8 introduces HTTP/2. npm reaches 3 billion downloads weekly.</li>
//   <li><b>2018:</b> Node 10 adds experimental support for ES modules (.mjs).</li>
// </ul>
// <h2 style="text-align: center;">How much JavaScript do you need to know to use Node?</h2>
// <p style="text-align: justify;">If you are just starting out with JavaScript, you should have a good grasp of the following concepts before diving into Node.js:</p>
// <ul style="text-align: justify;">
//   <li>Lexical Structure</li>
//   <li>Expressions</li>
//   <li>Types</li>
//   <li>Variables</li>
//   <li>Functions</li>
//   <li>Arrow Functions</li>
//   <li>Loops</li>
//   <li>Arrays</li>
//   <li>ECMAScript 6, 2016, 2017</li>
// </ul>
// <p style="text-align: justify;">Once you’ve mastered these, you’ll be ready to take on asynchronous programming with callbacks, promises, async/await, and understand how Node.js works.</p>
// <h2 style="text-align: center;">Differences between Node.js and the Browser</h2>
// <p style="text-align: justify;">While both the browser and Node.js use JavaScript, they differ in several ways:</p>
// <ul style="text-align: justify;">
//   <li>Node.js is server-side, while the browser is client-side.</li>
//   <li>Node.js has access to the filesystem and network, whereas the browser does not.</li>
//   <li>Node.js handles asynchronous programming and concurrency differently than the browser.</li>
// </ul>');


// UPDATE html_courses 
// SET title = 'Node-js Tutor', 
//     content = '<h1>Node-Js</h1> 
//     <p style="text-align: justify;">This post is a getting started guide to Node.js, the server-side JavaScript runtime environment. Node.js is built on top of the Google Chrome V8 JavaScript engine, and it\'s mainly used to create web servers - but it\'s not limited to that. Node.js is a runtime environment for JavaScript that runs on the server. Node.js is open source, cross-platform, and since its introduction in 2009, it got hugely popular and now plays a significant role in the web development scene. If GitHub stars are one popularity indication factor, having 46000+ stars means being very popular.</p>'
// WHERE id = 7; 


// Express js

// INSERT INTO html_courses (title, content) 
// VALUES (
//   'Express-js Tutor', 
//   '<p style="text-align: justify;">Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to build web and mobile applications. It simplifies the process of handling HTTP requests, routing, middleware, and setting up APIs, among other things. It\'s one of the most popular frameworks in the Node.js ecosystem.</p> 
//   <h2 style="text-align: center;">Key Features of Express</h2>
//   <p style="text-align: justify;">Routing: Handle requests to different URLs with ease.</p>
//   <p style="text-align: justify;">Middleware: Easily manage requests and responses, add authentication, logging, error handling, etc.</p>
//   <p style="text-align: justify;">Template Engines: Serve dynamic HTML content using engines like EJS, Pug, etc.</p>
//   <p style="text-align: justify;">API Creation: Build RESTful APIs with simple HTTP request handling.</p>
// );
