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
//     <p style="text-align: justify;">Python: Dynamic programming language which supports several different programming paradigms: Procedural programming, Object-oriented programming, Functional programming. Standard: Python byte code is executed in the Python interpreter (similar to Java) → platform independent code.</p>
//     <p style="text-align: justify;">Why Python? Extremely versatile language. Website development, data analysis, server maintenance, numerical analysis, ... Syntax is clear, easy to read and learn (almost pseudo code). Common language. Intuitive object-oriented programming. Full modularity, hierarchical packages. Comprehensive standard library for many tasks. Big community. Simply extendable via C/C++, wrapping of C/C++ libraries. Focus: Programming speed.</p>
//     <p style="text-align: justify;">History: Start implementation in December 1989 by Guido van Rossum (CWI). 16.10.2000: Python 2.0 Unicode support. Garbage collector. Development process more community oriented. 3.12.2008: Python 3.0 Not 100% backwards compatible. 2007 & 2010 most popular programming language (TIOBE Index). Recommendation for scientific programming (Nature News, NPG, 2015). Current version: Python 3.9.2. Python2 is out of support!</p>
//     <h2 style="text-align:center;">Zen of Python</h2>
//     <p style="text-align: justify;">20 software principles that influence the design of Python:</p>
//     <ul style="text-align: justify;">
//         <li>1. Beautiful is better than ugly.</li>
//         <li>2. Explicit is better than implicit.</li>
//         <li>3. Simple is better than complex.</li>
//         <li>4. Complex is better than complicated.</li>
//         <li>5. Flat is better than nested.</li>
//         <li>6. Sparse is better than dense.</li>
//         <li>7. Readability counts.</li>
//         <li>8. Special cases aren’t special enough to break the rules.</li>
//         <li>9. Although practicality beats purity.</li>
//         <li>10. Errors should never pass silently.</li>
//         <li>11. Unless explicitly silenced.</li>
//     </ul>
//     <p style="text-align: justify;">Is Python fast enough? For user programs: Python is fast enough! Most parts of Python are written in C. For compute intensive algorithms: Fortran, C, C++ might be better. Performance-critical parts can be re-implemented in C/C++ if necessary. First analyse, then optimise!</p>
//     <h2 style="text-align:center;">Strong and Dynamic Typing</h2>
//     <p style="text-align: justify;">Strong Typing: Object is of exactly one type! A string is always a string, an integer always an integer. Counterexamples: PHP, JavaScript, C: char can be interpreted as short, void * can be everything. Dynamic Typing: No variable declaration. Variable names can be assigned to different data types in the course of a program. An object’s attributes are checked only at run time. Duck typing (an object is defined by its methods and attributes). When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.</p>
//     <h2 style="text-align:center;">Documentation</h2>
//     <p style="text-align: justify;">Online help in the interpreter:</p>
//     <ul style="text-align: justify;">
//         <li>help(): general Python help</li>
//         <li>help(obj): help regarding an object, e.g. a function or a module</li>
//         <li>dir (): all used names</li>
//         <li>dir (obj): all attributes of an object</li>
//     </ul>
//     <p style="text-align: justify;">Official documentation: http://docs.python.org/ </p>
//     <h2 style="text-align:center;">Numerical Data Types</h2>
//     <p style="text-align: justify;">int : integer numbers (infinite). float : corresponds to double in C. complex : complex numbers ( j is the imaginary unit).</p>
//     <h2 style="text-align:center;">Operators on Numbers</h2>
//     <p style="text-align: justify;">Basic arithmetics: + , - , * , /. hint: Python 2 ⇒ 1/2 = 0, Python 3 ⇒ 1/2 = 0.5. Div and modulo operator: // , % , divmod(x, y). Absolute value: abs(x). Rounding: round(x). Conversion: int(x) , float(x) , complex(re [, im=0]). Conjugate of a complex number: x.conjugate(). Power: x ** y , pow(x, y). Result of a composition of different data types is of the “bigger” data type.</p>'
// );



// react-js code

// UPDATE html_courses
// SET title = 'React-js Tutor', 
//     content = '
//         <h1 style="text-align:center; color:white">React-Js</h1>
//         <h2 style="text-align:center;">What is React?</h2>
//         <p style="text-align: justify;">React (https://facebook.github.io/react/) is a JavaScript library for building user interfaces. It is the view layer for web applications. At the heart of all React applications are components. A component is a self-contained module that renders some output. We can write interface elements like a button or an input field as a React component. Components are composable. A component might include one or more other components in its output. Broadly speaking, to write React apps we write React components that correspond to various interface elements. We then organize these components inside higher-level components which define the structure of our application.</p>
//         <p style="text-align: justify;">For example, take a form. A form might consist of many interface elements, like input fields, labels, or buttons. Each element inside the form can be written as a React component. We\'d then write a higher-level component, the form component itself. The form component would specify the structure of the form and include each of these interface elements inside of it. Importantly, each component in a React app abides by strict data management principles. Complex, interactive user interfaces often involve complex data and application state. The surface area of React is limited and aimed at giving us the tools to be able to anticipate how our application will look with a given set of circumstances. We dig into these principles later in the course.</p>
//         <p style="text-align: justify;">React is a JavaScript framework. Using the framework is as simple as including a JavaScript file in our HTML and using the React exports in our application\'s JavaScript. For instance, the Hello world example of a React website can be as simple as:</p>
//         <p style="text-align: justify;">&lt;html&gt;<br />
//         &lt;head&gt;<br />
//         &lt;meta charset="utf-8"&gt;<br />
//         &lt;title&gt;Hello world&lt;/title&gt;<br />
//         &lt;!-- Script tags including React --&gt;<br />
//         &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"&gt;&lt;/script&gt;<br />
//         &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/reactdom.min.js"&gt;&lt;/script&gt;<br />
//         &lt;script src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script&gt;<br />
//         &lt;/head&gt;<br />
//         &lt;body&gt;<br />
//         &lt;div id="app"&gt;&lt;/div&gt;<br />
//         &lt;script type="text/babel"&gt;<br />
//         ReactDOM.render(<br />
//         &lt;h1&gt;Hello world&lt;/h1&gt;,<br />
//         document.querySelector(\'#app\')<br />
//         );<br />
//         &lt;/script&gt;<br />
//         &lt;/body&gt;<br />
//         &lt;/html&gt;</p>
//         <p style="text-align: justify;">Although it might look a little scary, the JavaScript code is a single line that dynamically adds Hello world to the page. Note that we only needed to include a handful of JavaScript files to get everything working. Unlike many of its predecessors, React operates not directly on the browser\'s Document Object Model (DOM) immediately, but on a virtual DOM. That is, rather than manipulating the document in a browser after changes to our data (which can be quite slow) it resolves changes on a DOM built and run entirely in memory. After the virtual DOM has been updated, React intelligently determines what changes to make to the actual browser\'s DOM.</p>
//         <h2 style="text-align:center;">What is JSX?</h2>
//         <p style="text-align: justify;">JSX (JavaScript XML) allows us to write HTML-like syntax directly within JavaScript. JSX is not necessary for writing React apps, but it is widely used because it makes the syntax for defining components much more intuitive. JSX must be transpiled to JavaScript, which React does using tools like Babel.</p>
//         <h2 style="text-align:center;">React Components</h2>
//         <p style="text-align: justify;">Components are the building blocks of React. A component can be either a functional component or a class component. Functional components are simpler and usually used for presentational purposes, while class components are more feature-rich and can maintain internal state and lifecycle methods.</p>
//         <h3>Functional Components</h3>
//         <p style="text-align: justify;">Functional components are defined as functions that return JSX. They are simpler and do not have access to lifecycle methods, but in modern React (post React 16.8), they can use Hooks (such as useState, useEffect) to manage state and side effects.</p>
//         <h3>Class Components</h3>
//         <p style="text-align: justify;">Class components are more complex and can manage their own state and lifecycle methods. They are defined using JavaScript classes and extend the React.Component class.</p>
//         <h2 style="text-align:center;">State and Props</h2>
//         <p style="text-align: justify;">React uses a unidirectional data flow. Components receive input data through props (short for properties), and they manage their own state. Props are immutable, meaning that a component cannot change its own props, while state is mutable, and a component can change its state.</p>
//         <h3>State</h3>
//         <p style="text-align: justify;">State allows React components to manage their own data. State is mutable, meaning it can change over time. When the state of a component changes, React re-renders the component and its children to reflect the new state.</p>
//         <h3>Props</h3>
//         <p style="text-align: justify;">Props are used to pass data from a parent component to a child component. Props are read-only and cannot be modified by the receiving component.</p>
//         <h2 style="text-align:center;">React Hooks</h2>
//         <p style="text-align: justify;">React introduced Hooks in version 16.8 to allow functional components to manage state and side effects. Hooks like <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, and <code>useReducer</code> enable functional components to have features that were previously only available in class components.</p>
//         <h3>useState</h3>
//         <p style="text-align: justify;">The <code>useState</code> Hook allows functional components to maintain state. It returns a state variable and a function to update that state.</p>
//         <h3>useEffect</h3>
//         <p style="text-align: justify;">The <code>useEffect</code> Hook is used to perform side effects in functional components. It replaces lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in class components.</p>
//         <h2 style="text-align:center;">Lifecycle Methods</h2>
//         <p style="text-align: justify;">Lifecycle methods are special methods in React class components that allow us to run code at specific points in a component\'s life, such as when it is mounted, updated, or unmounted. Common lifecycle methods include <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>.</p>
//         <h2 style="text-align:center;">React Router</h2>
//         <p style="text-align: justify;">React Router is a popular library for adding routing to a React application. It allows you to define different routes (URLs) and associate them with components. This way, users can navigate between different pages without having to reload the entire app.</p>
//         <h2 style="text-align:center;">React Redux</h2>
//         <p style="text-align: justify;">Redux is a state management library often used with React. It allows you to store the entire application state in a single JavaScript object called the "store," and enables easy state management using actions and reducers.</p>
//         <h2 style="text-align:center;">Context API</h2>
//         <p style="text-align: justify;">The Context API allows us to share state across the component tree without having to explicitly pass props down to each level. It is particularly useful when many components need access to the same data.</p>
//         <h2 style="text-align:center;">Error Boundaries</h2>
//         <p style="text-align: justify;">Error boundaries are a feature in React to catch JavaScript errors anywhere in the component tree and log them, while also displaying a fallback UI. This prevents the whole application from crashing when an error occurs in a component.</p>
//         <h2 style="text-align:center;">React Performance Optimization</h2>
//         <p style="text-align: justify;">React provides several ways to optimize the performance of our applications. Some strategies include <code>React.memo</code> for preventing unnecessary re-renders, <code>useCallback</code> for memoizing functions, and <code>useMemo</code> for memoizing values.</p>
//         <h2 style="text-align:center;">Testing in React</h2>
//         <p style="text-align: justify;">Testing is an essential part of React development. Tools like Jest and React Testing Library are commonly used for unit and integration testing of React components, ensuring the application works as expected before deployment.</p>
//     '
// WHERE id = 6;