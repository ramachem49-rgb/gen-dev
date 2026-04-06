export interface Lesson {
  id: number;
  slug: string;
  title: string;
  description: string;
  level: "ថ្នាក់ដើម" | "មធ្យម" | "កម្រិតខ្ពស់";
  icon: string;
  content: string;
  codeExample: string;
  language: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    slug: "html",
    title: "HTML មូលដ្ឋាន",
    description: "រៀនពីរចនាសម្ព័ន្ធមូលដ្ឋានរបស់គេហទំព័រដោយប្រើ HTML",
    level: "ថ្នាក់ដើម",
    icon: "🌐",
    language: "html",
    content: `HTML (HyperText Markup Language) គឺជាភាសាមូលដ្ឋានបំផុតសម្រាប់បង្កើតគេហទំព័រ។ វាកំណត់រចនាសម្ព័ន្ធនិងអត្ថន័យនៃមាតិកាគេហទំព័រ។\n\nHTML ប្រើស្លាក (tags) ដើម្បីរៀបចំមាតិកា ដូចជា ចំណងជើង កថាខណ្ឌ រូបភាព តំណភ្ជាប់ និងច្រើនទៀត។`,
    codeExample: `1. Introduction to HTML
HTML (HyperText Markup Language) គឺជាភាសាសម្គាល់ដែលប្រើសម្រាប់បង្កើតទំព័របណ្តាញ។ វាផ្តល់នូវរចនាសម្ព័ន្ធមូលដ្ឋានសម្រាប់ខ្លឹមសារនៅលើអ៊ីនធឺណិត ដូចជាអត្ថបទ រូបភាព និងតំណភ្ជាប់។ ផ្នែកនេះនឹងណែនាំអំពី HTML និងធាតុសំខាន់ៗរបស់វា។

1.1 What is HTML?
HTML គឺជាភាសាសម្គាល់ (markup language) ដែលត្រូវបានប្រើដើម្បីកំណត់រចនាសម្ព័ន្ធនៃទំព័របណ្តាញ។ វាមិនមែនជាភាសាសរសេរកម្មវិធីទេ ប៉ុន្តែជាវិធីដើម្បីប្រាប់កម្មវិធីរុករកគេហទំព័រពីរបៀបបង្ហាញខ្លឹមសារ។ នេះជាឧទាហរណ៍សាមញ្ញ៖

<p>This is a paragraph in HTML.</p>
អត្ថន័យ៖ ស្លាក <p> បង្ហាញកថាខណ្ឌមួយ។ អត្ថបទ "This is a paragraph in HTML." នឹងត្រូវបានបង្ហាញនៅលើទំព័របណ្តាញជាកថាខណ្ឌធម្មតា។

1.2 HTML Document Structure (<!DOCTYPE html>, <html>, <head>, <body>)
ឯកសារ HTML មានរចនាសម្ព័ន្ធជាមូលដ្ឋានដែលរួមបញ្ចូល <!DOCTYPE html>, <html>, <head>, និង <body>។ នេះជាឧទាហរណ៍៖

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
អត្ថន័យ៖

<!DOCTYPE html> – ប្រកាសថា៖ ឯកសារនេះជា HTML5។
<html lang="en"> – ធាតុឫស បញ្ជាក់ភាសាជាអង់គ្លេស។
<head> – ផ្ទុកទិន្នន័យមេតា ដូចជាចំណងជើង។
<body> – ផ្ទុកខ្លឹមសារដែលអាចមើលឃើញ។
1.3 Basic HTML Tags and their Usage
ស្លាក HTML មូលដ្ឋានដូចជា <h1>, <p>, <a> ត្រូវបានប្រើដើម្បីបង្កើតខ្លឹមសារផ្សេងៗ។ នេះជាឧទាហរណ៍៖

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">Click me</a>
អត្ថន័យ៖

<h1> – បង្ហាញចំណងជើងធំ (heading)។
<p> – បង្ហាញកថាខណ្ឌ (paragraph)។
<a> – បង្កើតតំណភ្ជាប់ (link) ដែលអ្នកប្រើអាចចុចទៅកាន់គេហទំព័រផ្សេង។
1.4 Structure of an HTML Page
ទំព័រ HTML មានរចនាសម្ព័ន្ធច្បាស់លាស់ ដែលរួមបញ្ចូលផ្នែកផ្សេងៗដើម្បីរៀបចំខ្លឹមសារ។ នេះជាឧទាហរណ៍ពេញលេញ៖

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple HTML Page</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
  </header>
  <main>
    <p>Welcome to my page!</p>
  </main>
  <footer>
    <p>© 2025</p>
  </footer>
</body>
</html>
អត្ថន័យ៖ ទំព័រនេះមាន <header> (ផ្នែកខាងលើ), <main> (ខ្លឹមសារសំខាន់), និង <footer> (ផ្នែកខាងក្រោម) ដើម្បីរៀបចំខ្លឹមសារឱ្យមានសណ្តាប់ធ្នាប់។

1.5 HTML Elements and Attributes
ធាតុ HTML (elements) គឺជាស្លាកដែលបង្កើតខ្លឹមសារ ហើយគុណលក្ខណៈ (attributes) ផ្តល់ព័ត៌មានបន្ថែមដល់ធាតុទាំងនោះ។ នេះជាឧទាហរណ៍៖

<a href="https://example.com" target="_blank">Visit Example</a>
<img src="image.jpg" alt="A sample image">
អត្ថន័យ៖

<a> – ធាតុតំណភ្ជាប់ ជាមួយគុណលក្ខណៈ href (ទីតាំងតំណ) និង target="_blank" (បើកនៅផ្ទាំងថ្មី)។
<img> – ធាតុរូបភាព ជាមួយ src (ទីតាំងរូបភាព) និង alt (អត្ថបទជំនួស)។
2. Basic HTML Tags
ស្លាក HTML មូលដ្ឋានគឺជាស្លាកដែលត្រូវបានប្រើញឹកញាប់បំផុតក្នុងការបង្កើតទំព័របណ្តាញ។ ផ្នែកនេះនឹងណែនាំអ្នកអំពីស្លាកទាំងនេះ និងរបៀបប្រើវាឱ្យបានត្រឹមត្រូវ។

2.1 Text Formatting Tags
ស្លាកដើម្បីរៀបចំអត្ថបទឱ្យមានរូបរាងល្អ និងអានយល់បានងាយ។

2.1.1 <h1> to <h6> (Headings)
ស្លាកចំណងជើងពី h1 ដល់ h6 ត្រូវបានប្រើសម្រាប់បង្ហាញចំណងជើងនៃផ្នែកផ្សេងៗ។ h1 ជាចំណងជើងធំបំផុត រីឯ h6 តូចបំផុត។

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
គន្លឹះ៖ គួរប្រើ h1 តែមួយក្នុងមួយទំព័រ ដើម្បី SEO ល្អ។

2.1.2 <p> (Paragraph)
ស្លាកសម្រាប់បង្កើតកថាខណ្ឌធម្មតា។

<p>នេះជាកថាខណ្ឌមួយ។</p>
<p>នេះជាកថាខណ្ឌមួយទៀត។</p>
2.1.3 <br> (Line Break)
ស្លាកដែលបង្កើតការបំបែកបន្ទាត់ដោយមិនចាំបាច់បិទស្លាក។

<p>បន្ទាត់ទីមួយ<br>បន្ទាត់ទីពីរ</p>
2.1.4 <hr> (Horizontal Rule)
ស្លាកដែលបង្កើតបន្ទាត់ផ្តេកសម្រាប់បែងចែកផ្នែក។

<p>ផ្នែកខាងលើ</p>
<hr>
<p>ផ្នែកខាងក្រោម</p>
2.1.5 <strong>, <em> (Text emphasis)
ស្លាកសម្រាប់ធ្វើឱ្យអត្ថបទមានភាពច្បាស់លាស់។

<p><strong>អត្ថបទដែលមានទម្ងន់</strong> និង <em>អត្ថបទដែលមានការបន្លឺ</em></p>
<strong> - បង្ហាញថាអត្ថបទមានសារៈសំខាន់ (ធានាភាពជាអក្សរដិត)
<em> - បង្ហាញការបន្លឺ (ធានាភាពជាអក្សរទ្រេត)

2.1.6 <u>, <mark>, <del> (Text style)
ស្លាកសម្រាប់ដាក់រចនាបថអត្ថបទ។

<p>
  <u>អត្ថបទដែលមានបន្ទាត់ក្រោម</u>, 
  <mark>អត្ថបទដែលបានគូសពណ៌</mark>, 
  <del>អត្ថបទដែលត្រូវបានលុប</del>
</p>
2.1.7 <b>, <i>, <small> (Font styling)
ស្លាកសម្រាប់ផ្លាស់ប្តូររូបរាងអក្សរ។

<p>
  <b>អក្សរដិត</b>, 
  <i>អក្សរទ្រេត</i>, 
  <small>អក្សរតូច</small>
</p>
ចំណាំ៖ <b> និង <i> គឺសម្រាប់រូបរាងប៉ុណ្ណោះ ខុសពី <strong> និង <em> ដែលមានន័យសំខាន់។

2.2 Text Containers
ស្លាកដែលប្រើសម្រាប់ផ្ទុកអត្ថបទ ឬធាតុផ្សេងៗ ដើម្បីរៀបចំប្លង់ និងរចនាបថ។

2.2.1 <span> (Inline element)
ស្លាក <span> គឺជាធាតុ inline ដែលត្រូវបានប្រើសម្រាប់ប្លង់តូចៗ ឬការដាក់រចនាបថតាម CSS។

<p>នេះជាអត្ថបទ <span style="color: red;">ដែលមានពណ៌ក្រហម</span></p>
2.2.2 <div> (Block-level element)
ស្លាក <div> ជាធាតុ block-level ដែលត្រូវបានប្រើសម្រាប់បំបែកផ្នែកនៃទំព័រ និងសម្រាប់រៀបចំ layout។

<div style="background-color: #f0f0f0; padding: 10px;">
  <p>នេះជាផ្នែកមួយដែលប្រើ &lt;div&gt;</p>
</div>
2.2.3 <pre> (Preformatted text)
ស្លាក <pre> បង្ហាញអត្ថបទដោយរក្សាទ្រង់ទ្រាយដើមរបស់វា (space និងline breaks)។

<pre>
នេះជាអត្ថបទ
    ដែលមានការរៀបចំ
        ដូចដែលវាមាននៅក្នុងកូដ។
</pre>
3. Lists in HTML
ស្លាកបញ្ជីត្រូវបានប្រើសម្រាប់រាយបញ្ជីធាតុជាចំណាត់ថ្នាក់។ HTML មានបីប្រភេទនៃបញ្ជី៖ unordered, ordered និង definition list។

3.1 Unordered Lists
បញ្ជីដែលមានសញ្ញា bullet មិនតាមលំដាប់ជាលេខ។

3.1.1 <ul>, <li> (List items)
<ul> ជាស្លាកបញ្ជីមិនមានលំដាប់ និង <li> ជាស្លាកធាតុបញ្ជី។

<ul>
  <li>ផ្លែប៉ោម</li>
  <li>ផ្លែលីម</li>
  <li>ផ្លែក្រូច</li>
</ul>
3.2 Ordered Lists
បញ្ជីដែលមានលំដាប់ជាលេខ (១, ២, ៣...) ឬអក្សរ (a, b, c...)។

3.2.1 <ol>, <li> (Numbered list)
<ol> ជាស្លាកបញ្ជីមានលំដាប់ និង <li> សម្រាប់ធាតុនីមួយៗ។

<ol>
  <li>រៀន HTML</li>
  <li>រៀន CSS</li>
  <li>រៀន JavaScript</li>
</ol>
3.3 Definition Lists
បញ្ជីដែលបង្ហាញពាក្យនិងនិយមន័យរបស់ពាក្យនោះ។

3.3.1 <dl>, <dt>, <dd> (Definition Term, Definition Description)
<dl> ជាស្លាកបញ្ជីនិយមន័យ។ <dt> សម្រាប់ពាក្យ និង <dd> សម្រាប់និយមន័យ។

<dl>
  <dt>HTML</dt>
  <dd>ភាសាសម្រាប់បង្កើតទំព័របណ្តាញ។</dd>

  <dt>CSS</dt>
  <dd>ភាសាសម្រាប់រចនាបថនៃទំព័របណ្តាញ។</dd>
</dl>
4. Links and Navigation
ស្លាកសម្រាប់បង្កើតតំណភ្ជាប់ទៅកាន់ទំព័រផ្សេងៗ ឬមុខងារផ្សេងៗនៅក្នុងគេហទំព័រ។

4.1 Anchor Tag
ស្លាកសម្រាប់បង្កើតតំណភ្ជាប់ (hyperlink)។

4.1.1 <a> (Creating hyperlinks)
ស្លាក <a> ត្រូវបានប្រើសម្រាប់បង្កើតតំណភ្ជាប់ទៅកាន់ URL ឬផ្នែកផ្សេងៗក្នុងទំព័រ។

<a href="https://www.example.com">ចូលទៅកាន់ Example</a>
4.1.2 Attributes: href, target, title
href - បញ្ជាក់ URL
target - បញ្ជាក់របៀបបើកតំណ (ex: _blank សម្រាប់បើកក្នុង tab ថ្មី)
title - បង្ហាញពាក្យពន្យល់ពេលយក mouse hover

<a href="https://www.google.com" target="_blank" title="ចូល Google">ចូលទៅកាន់ Google</a>
4.2 Navigation
ស្លាកសម្រាប់កំណត់ផ្នែកនៃទំព័រដែលជារចនាសម្ព័ន្ធនៃការរុករក។

4.2.1 <nav> (Navigation section)
ស្លាក <nav> ត្រូវបានប្រើសម្រាប់បញ្ជាក់ផ្នែក navigational links។

<nav>
  <ul>
    <li><a href="#home">ទំព័រដើម</a></li>
    <li><a href="#about">អំពីយើង</a></li>
    <li><a href="#contact">ទំនាក់ទំនង</a></li>
  </ul>
</nav>
5. Images and Media
HTML មានសមត្ថភាពបញ្ចូលរូបភាព អូឌីយ៉ូ និងវីដេអូ ដើម្បីធ្វើឲ្យគេហទំព័រមានភាពស៊ីជម្រៅនិងទាក់ទាញ។

5.1 Images
សម្រាប់បញ្ចូលរូបភាពទៅក្នុងគេហទំព័រ។

5.1.1 <img> (Embedding images)
ស្លាក <img> ត្រូវបានប្រើសម្រាប់បញ្ចូលរូបភាព។ វាជាស្លាក self-closing។

<img src="cat.jpg" alt="រូបកូនឆ្មា" />
5.1.2 Attributes: src, alt, width, height
src - ទីតាំងរូបភាព
alt - អត្ថបទជំនួសពេលរូបភាពមិនអាចបង្ហាញបាន
width និង height - បញ្ជាក់ទំហំរូបភាព

<img src="dog.jpg" alt="រូបឆ្កែ" width="300" height="200" />
5.2 Audio and Video
បញ្ចូលអូឌីយ៉ូនិងវីដេអូទៅក្នុងទំព័រ។

5.2.1 <audio>, <video> (Embedding audio and video)
ស្លាកទាំងនេះប្រើសម្រាប់បញ្ចូលបណ្ដាញសម្លេងនិងវីដេអូ។ អ្នកអាចដាក់ controls ដើម្បីអោយអ្នកប្រើបញ្ជា។

<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
  Browser មិនគាំទ្រ audio tag។
</audio>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  Browser មិនគាំទ្រ video tag។
</video>
5.2.2 Attributes: controls, src, autoplay, loop
controls - បង្ហាញប៊ូតុងលេង
src - ទីតាំងឯកសារ
autoplay - លេងដោយស្វ័យប្រវត្តិ
loop - លេងសារឡើងវិញ

<audio src="bg-music.mp3" autoplay loop controls></audio>
5.3 Multimedia Source Elements
ស្លាក <source> និង <track> ជួយផ្តល់ភាពតំណកសម្រាប់ media elements។

5.3.1 <source>, <track>
<source> ប្រើសម្រាប់បញ្ជាក់ប្រភព media
<track> ប្រើសម្រាប់បញ្ជាក់អក្សររត់ (subtitles, captions)

<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  <track src="subtitles.vtt" kind="subtitles" srclang="en" label="English" />
</video>
6. Tables
តារាង (Tables) ត្រូវបានប្រើដើម្បីបង្ហាញទិន្នន័យជាស៊ុម និងជួរ ដូចជាតារាងព័ត៌ព័ត៌មាន ឬកាលវិភាគ។

6.1 Table Structure
សមាសភាគគ្រប់គ្រងរបស់តារាង HTML។

6.1.1 <table>, <tr>, <th>, <td> (Table rows and cells)
<table> - ស្លាកសម្រាប់បង្កើតតារាង
<tr> - ជួរដេកមួយ
<th> - ក្បាលជួរដេក
<td> - ក្រឡាធម្មតា

<table border="1">
  <tr>
    <th>ឈ្មោះ</th>
    <th>អាយុ</th>
  </tr>
  <tr>
    <td>សុភា</td>
    <td>២៥</td>
  </tr>
  <tr>
    <td>ចាន់ថន</td>
    <td>២២</td>
  </tr>
</table>
6.1.2 <caption> (Table caption)
<caption> ត្រូវបានប្រើដើម្បីបន្ថែមចំណងជើងសម្រាប់តារាង។

<table border="1">
  <caption>បញ្ជីសិស្ស</caption>
  <tr>
    <th>ឈ្មោះ</th>
    <th>ថ្នាក់</th>
  </tr>
  <tr>
    <td>រឿន</td>
    <td>១១A</td>
  </tr>
</table>
6.1.3 <thead>, <tbody>, <tfoot> (Table sections)
<thead> - ផ្នែកក្បាល
<tbody> - ផ្នែកខ្លឹមសារ
<tfoot> - ផ្នែកបាត

<table border="1">
  <thead>
    <tr>
      <th>ផលិតផល</th>
      <th>តម្លៃ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>កាហ្វេ</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>ស៊ុប</td>
      <td>$3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">បញ្ចប់តារាង</td>
    </tr>
  </tfoot>
</table>
/* Section 7: Forms and Input */
7. Forms and Input
សំណុំបែបបទ (Forms) ត្រូវបានប្រើសម្រាប់ប្រមូលព័ត៌មានពីអ្នកប្រើប្រាស់ ដូចជា username, email, feedback និងផ្សេងៗ។

7.1 Creating Forms
7.1.1 <form> (Form tag)
<form> ត្រូវបានប្រើដើម្បីបង្កើតសំណុំបែបបទ។

<form>
  <!-- Input fields go here -->
</form>
7.1.2 Form attributes: action, method
action បញ្ជាក់ URL ដោយបញ្ជូនទិន្នន័យ
method ជាវិធីសាស្រ្តសម្រាប់បញ្ជូន (GET ឬ POST)

<form action="/submit" method="post">
  ...
</form>
7.2 Input Elements
7.2.1 <input>, <textarea>, <select>, <option>, <button>
ស្លាកសំខាន់ៗក្នុងសំណុំបែបបទ៖

<input type="text" placeholder="ឈ្មោះ" />
<textarea placeholder="សាររបស់អ្នក"></textarea>
<select>
  <option>ជ្រើសរើសមួយ</option>
  <option>ជម្រើសទី១</option>
</select>
<button type="submit">បញ្ជូន</button>
7.3 Form Grouping
7.3.1 <fieldset>, <legend>
<fieldset> ប្រើដើម្បីដាក់ input ទាំងអស់នៅក្នុងក្រុម
<legend> ជាចំណងជើងសម្រាប់ក្រុមនោះ។

<fieldset>
  <legend>ព័ត៌មានផ្ទាល់ខ្លួន</legend>
  <input type="text" placeholder="ឈ្មោះ" />
</fieldset>
7.4 Labels and Accessibility
7.4.1 <label> (Associating input with labels)
<label> ជួយបញ្ជាក់ថា input ត្រូវបានបញ្ជាក់ដោយអ្វី។ ប្រើ for ដើម្បីភ្ជាប់ label ជាមួយ input។

<label for="name">ឈ្មោះ:</label>
<input type="text" id="name" name="name" />
Form Example
ឧទាហរណ៍ខាងក្រោមបង្ហាញពីការប្រើប្រាស់ form ទាំងស្រុងដែលរួមបញ្ចូល input, textarea, select, និង button។

<form action="/submit" method="post">
  <fieldset>
    <legend>ព័ត៌មានផ្ទាល់ខ្លួន (Personal Info)</legend>

    <label for="name">ឈ្មោះ (Name):</label>
    <input type="text" id="name" name="name" placeholder="ឈ្មោះ" />

    <br /><br />

    <label for="message">សារ (Message):</label><br />
    <textarea id="message" name="message" placeholder="សាររបស់អ្នក"></textarea>

    <br /><br />

    <label for="options">ជម្រើស (Options):</label>
    <select id="options" name="options">
      <option>ជ្រើសរើសមួយ</option>
      <option>ជម្រើសទី១</option>
      <option>ជម្រើសទី២</option>
    </select>
  </fieldset>

  <br />

  <button type="submit">បញ្ជូន (Submit)</button>
</form>
8. Semantic HTML
Semantic HTML ជាការប្រើប្រាស់ស្លាក (tags) ដែលមានអត្ថន័យបញ្ជាក់ពីមាតិកាផ្ទៃក្នុង។ វាជួយឲ្យ browser និង search engines ដឹងពីមាតិការបស់គេហទំព័ររបស់អ្នកបានច្បាស់។

8.1 Understanding Semantic Tags
8.1.1 <header>, <footer>, <main>, <section>, <article>, <aside>, <nav>
ស្លាក semantic ជួយឲ្យ HTML មានរចនាសម្ព័ន្ធច្បាស់សម្រាប់មាតិកាផ្សេងៗ។

<header>ក្បាលទំព័រ</header>
<nav>រុករក</nav>
<main>
  <section>
    <article>
      <h2>ចំណងជើងអត្ថបទ</h2>
      <p>អត្ថបទ...</p>
    </article>
  </section>
  <aside>ព័ត៌មានបន្ថែម</aside>
</main>
<footer>បាតទំព័រ</footer>
8.2 Accessibility and SEO Benefits of Semantic HTML
- ✅ **Accessibility**: ស្លាក semantic ជួយឲ្យ screen readers អាចយល់នូវរចនាសម្ព័ន្ធមាតិកា។
- 🚀 **SEO**: Search engines អាចយល់ context និងសារៈសំខាន់របស់មាតិកាបានកាន់តែងាយ។

9. Embedded Content
Embedded content ត្រូវបានប្រើដើម្បីបញ្ចូលមាតិកាពីបណ្តាញផ្សេងទៀត ឬបង្កើតក្រាហ្វិកនិងវីដេអូក្នុងគេហទំព័រ។

9.1 Embedding External Content
<iframe> (Embedding other web pages)
<iframe> ប្រើសម្រាប់បញ្ចូលទំព័របណ្តាញផ្សេងទៀតនៅក្នុងទំព័ររបស់អ្នក។

<iframe src="https://example.com" width="600" height="400"></iframe>
<object>, <embed> (Embedding multimedia content)
<object> និង <embed> ប្រើសម្រាប់បញ្ចូលវីដេអូ, PDF ឬ Flash។

<object data="file.pdf" type="application/pdf" width="600" height="400"></object>

<embed src="video.mp4" width="600" height="400">
9.2 SVG and Canvas
<svg> (Scalable Vector Graphics)
<svg> អាចបង្កើតក្រាហ្វិកដែលអាចពង្រីកដោយគ្មានបាត់គុណភាព។

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
<canvas> (Drawing graphics with JavaScript)
<canvas> ប្រើសម្រាប់គូរផ្ទាំងក្រាហ្វិកដោយប្រើ JavaScript។

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

<script>
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(10, 10, 150, 75);
</script>
10. HTML Attributes
Attribute គឺជាគុណលក្ខណៈសម្រាប់បន្ថែមព័ត៌មានបន្ថែមទៅលើ elements។ ឧទាហរណ៍៖ id, class, style, data-*។

10.1 Common Attributes
10.1.1 id, class, style, src, href, alt, title, target
Attribute ទាំងនេះគេប្រើជារឿយៗក្នុង HTML:

<div id="header" class="main-header" style="color: red;">
  សួស្តី!
</div>

<img src="image.jpg" alt="រូបភាព" title="Hover title" />

<a href="https://example.com" target="_blank">Visit Site</a>
id & class: សម្គាល់និងដាក់ស្លាក
style: ដាក់រចនាប័ទ្ម CSS
src: ប្រភពរូបភាព ឬឯកសារ
href: តំណភ្ជាប់ URL
alt: អត្ថបទជំនួសរូបភាព
title: Tooltip នៅពេល hover
target="_blank": បើកតំណថ្មីនៅក្នុង tab ថ្មី

10.2 Data Attributes
10.2.1 data-* (Custom data attributes)
data-* គឺជាគន្លងសម្រាប់រក្សាទិន្នន័យផ្ទាល់ខ្លួនក្នុង HTML ដែលអាចយកទៅប្រើជាមួយ JavaScript។

<button data-user-id="123" data-role="admin">
  ព័ត៌មានអ្នកប្រើ
</button>
អ្នកអាចយកទិន្នន័យនេះជាមួយ JavaScript៖
element.dataset.userId & element.dataset.role

11. HTML Forms Advanced Concepts
Form ជាផ្នែកសំខាន់ក្នុងការបញ្ចូលទិន្នន័យពីអ្នកប្រើ។ ចំណេះដឹងជាក់លាក់អំពីប្រភេទ input និងការផ្ទៀងផ្ទាត់ទិន្នន័យជួយឲ្យអ្នកអភិវឌ្ឍបានប្រសើរជាងមុន។

11.1 Input Types
11.1.1 Text, Email, Password, Number, Date, etc.
ប្រភេទនៃ input ជាច្រើន មានសមត្ថភាពបញ្ជាក់រូបរាងនៃទិន្នន័យដែលអ្នកប្រើអាចបញ្ចូល។

<input type="text" placeholder="ឈ្មោះ" />
<input type="email" placeholder="Email" />
<input type="password" placeholder="លេខសម្ងាត់" />
<input type="number" placeholder="អាយុ" />
<input type="date" />
11.1.2 <input type="checkbox">, <input type="radio">, <input type="submit">
ប្រភេទសំខាន់ផ្សេងទៀត៖

<label>
  <input type="checkbox" /> ចូលរួមសកម្មភាព
</label>

<label>
  <input type="radio" name="gender" value="male" /> ប្រុស
</label>
<label>
  <input type="radio" name="gender" value="female" /> ស្រី
</label>

<input type="submit" value="បញ្ជូន" />
11.2 Form Validation
11.2.1 required, pattern, min, max, etc.
HTML ផ្ដល់ attribute ដូចជា required, pattern, min, max ដើម្បីផ្ទៀងផ្ទាត់ទិន្នន័យ។

<input type="text" required placeholder="ឈ្មោះ" />
<input type="email" pattern="[^@]+@[^\\.]+\\..+" placeholder="Email" />
<input type="number" min="1" max="100" placeholder="អាយុ" />
11.3 Form Controls
11.3.1 <select>, <option>, <optgroup>
ការជ្រើសជម្រើសជាគ្រាប់ប៊ូតុងជ្រើសតែមួយ ឬជាក្រុមជាជម្រើសអាចប្រើជាមួយ <select>។

<select>
  <optgroup label="ប្រភេទការអប់រំ">
    <option value="primary">បឋមសិក្សា</option>
    <option value="secondary">មធ្យមសិក្សា</option>
  </optgroup>
</select>
12. HTML5 New Features
HTML5 បាននាំមកនូវលក្ខណៈពិសេសថ្មីៗដើម្បីធ្វើឲ្យការអភិវឌ្ឍវេបសាយកាន់តែងាយស្រួល និងមានប្រសិទ្ធភាព។ វាចូលរួមជាមួយ tag ថ្មីៗ, input type, និង API ផ្សេងៗ។

12.1 HTML5 Structural Tags
12.1.1 <header>, <footer>, <article>, <section>
Structural tags ជួយឲ្យ HTML មានរចនាសម្ព័ន្ធច្បាស់លាស់ និងមានអត្ថន័យ (semantic) សម្រាប់ SEO និង accessibility។

<header>
  <h1>ស្វាគមន៍មកកាន់គេហទំព័រ</h1>
</header>
<section>
  <article>
    <h2>អត្ថបទថ្មីបំផុត</h2>
    <p>...</p>
  </article>
</section>
<footer>
  <p>រក្សាសិទ្ធិ © 2025</p>
</footer>
12.2 HTML5 Input Types
12.2.1 Date, Color, Range, Email, and others
HTML5 ផ្ដល់ប្រភេទ input ថ្មីៗដើម្បីបង្កើនសមត្ថភាពសំណុំបែបបទ។

<input type="date" />
<input type="color" />
<input type="range" min="0" max="100" />
<input type="email" placeholder="example@gmail.com" />
12.3 HTML5 APIs
12.3.1 Local Storage, Geolocation, Canvas, Web Workers
HTML5 APIs ផ្ដល់នូវភាពអាចធ្វើបានខ្ពស់ដូចជា៖ ការរកទីតាំង, រក្សាទិន្នន័យក្នុង browser, គូរអក្សរឬក្រាហ្វិក, និងប្រើ Worker ផ្នែកក្រៅ។

// Local Storage
localStorage.setItem("username", "user1");

// Geolocation
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
});

// Canvas
<canvas id="myCanvas" width="200" height="100"></canvas>

// Web Worker
const worker = new Worker("worker.js");
13. HTML Accessibility Best Practices
ការធ្វើឲ្យវេបសាយអាចចូលប្រើបានសម្រាប់មនុស្សគ្រប់រូប ជាផ្នែកសំខាន់ក្នុងការរចនាយ៉ាងទូលំទូលាយ។ HTML ផ្ដល់ឧបករណ៍ដូចជា ARIA និង semantic tags សម្រាប់ជួយដល់ accessibility។

13.1 ARIA (Accessible Rich Internet Applications)
ARIA ជាឧបករណ៍សម្រាប់បន្ថែមព័ត៌មានលម្អិតអំពី UI ទៅឧបករណ៍ assistive ដូចជា screen readers។

13.1.1 Role and State Attributes
role បញ្ជាក់តួនាទីនៃធាតុ។
aria-* ជា attributes សម្រាប់បញ្ជាក់ state (ស្ថានភាព) ឬ properties (លក្ខណៈ)។

<div role="alert" aria-live="assertive">
  មានបញ្ហាខ្លះបង្ហាញ។
</div>

<button aria-pressed="false">Like</button>
13.2 Semantic HTML for Screen Readers
ប្រើ tag ដែលមានអត្ថន័យដូចជា <nav>, <main>, <article> ជួយឲ្យ screen readers អាចយល់នឹងរចនាសម្ព័ន្ធ។

<nav>
  <ul>
    <li><a href="#home">ទំព័រដើម</a></li>
    <li><a href="#contact">ទំនាក់ទំនង</a></li>
  </ul>
</nav>
13.3 Keyboard Navigation Support
ត្រូវប្រាកដថាវេបសាយអាចប្រើបានដោយគ្រាប់ចុច៖
• ប្រើ tabindex ដើម្បីកំណត់លំដាប់នៃការចុច Tab
• ប្រើ accesskey បន្ថែម shortcut

<button tabindex="0" accesskey="s">រក្សាទុក (Alt+S)</button>
<input type="text" tabindex="1" />
14. HTML Styling and CSS Introduction
CSS (Cascading Style Sheets) ត្រូវបានប្រើសម្រាប់រៀបចំរចនាបថនៃទំព័របណ្ដាញ។ វាអាចបញ្ចូលដោយរបៀបផ្សេងៗគ្នាដូចជា Internal, External និង Inline។

14.1 Internal vs External CSS
Internal CSS ត្រូវបានដាក់នៅក្នុង <style> tag ខាងក្នុង HTML។ External CSS ត្រូវបានភ្ជាប់តាម <link> tag ទៅកាន់ឯកសារ .css។

<!-- Internal CSS -->
<style>
  body {
    background-color: #f0f0f0;
  }
</style>

<!-- External CSS -->
<link rel="stylesheet" href="styles.css">
14.2 <style> tag vs <link> tag
<style> ត្រូវបានប្រើសម្រាប់ Internal CSS, ខណៈដែល <link> ប្រើសម្រាប់ភ្ជាប់ External CSS។ External CSS អាច reuse និងធ្វើការផ្លាស់ប្តូរជារួសរាន់ជាង។

14.3 Basic Styling with CSS
CSS អាចប្រើសម្រាប់ដាក់ style លើអត្ថបទ, ពណ៌, margins និង padding ជាដើម។

14.3.1 Styling text, colors, margins, and padding
h1 {
  color: blue;
  margin-top: 20px;
  padding: 10px;
  font-family: Arial, sans-serif;
}

p {
  color: #333;
  margin: 0 0 10px 0;
  padding: 5px;
}
15. Advanced Topics (Optional for Deep Learning)
ចំណេះដឹងជាច្រើនទៀតអាចជួយពង្រឹងសមត្ថភាពក្នុងការបង្កើតគេហទំព័រដែលមានប្រសិទ្ធភាពលើគ្រប់ឧបករណ៍ និងមានសុវត្ថិភាពក្នុងការបញ្ចូនទិន្នន័យ។

15.1 Responsive Design
Responsive design អនុញ្ញាតឲ្យគេហទំព័រត្រូវបានបង្ហាញបានល្អលើទំហំអេក្រង់ផ្សេងៗគ្នា។

15.1.1 Viewport meta tag
Viewport tag ជាចំណុចសំខាន់សម្រាប់ mobile responsiveness។

<meta name="viewport" content="width=device-width, initial-scale=1.0">
15.1.2 Media queries
Media queries អាចកំណត់ style ផ្សេងៗសម្រាប់ទំហំអេក្រង់ខុសៗគ្នា។

@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
15.2 HTML Forms in Depth
15.2.1 Form submission methods (GET, POST)
GET និង POST ជាវិធីសាស្រ្តសំរាប់បញ្ជូនទិន្នន័យពី Form ទៅ Server។

GET: បញ្ជូនទិន្នន័យតាម URL (មើលឃើញបាន)
POST: បញ្ជូនទិន្នន័យនៅក្នុង request body (សុវត្ថិភាពជាង)
<form method="get" action="/search">
  <input type="text" name="query">
  <button type="submit">Search</button>
</form>

<form method="post" action="/submit">
  <input type="text" name="name">
  <button type="submit">Submit</button>
</form>
15.2.2 Input Validation using HTML5
HTML5 មាន attributes ដូចជា required, pattern, min, និង max សម្រាប់ធ្វើ validation ទិន្នន័យ។

<form>
  <input type="text" name="username" required>
  <input type="email" name="email" required>
  <input type="number" name="age" min="18" max="100">
  <button type="submit">Submit</button>
</form>`
  },
  
  {
    id: 2,
    slug: "css",
    title: "CSS មូលដ្ឋាន",
    description: "រៀនពីរបៀបធ្វើឱ្យគេហទំព័រស្រស់ស្អាតដោយប្រើ CSS",
    level: "ថ្នាក់ដើម",
    icon: "🎨",
    language: "css",
    content: `CSS (Cascading Style Sheets) ប្រើសម្រាប់កំណត់រចនាប័ទ្មនៃគេហទំព័រ រួមទាំងពណ៌ ពុម្ពអក្សរ ទំហំ និងការរៀបចំទីតាំង។`,
    codeExample: `1. CSS Syntax and Selectors - វាក្យសម្ព័ន្ធ CSS និងការជ្រើសរើស
CSS (Cascading Style Sheets) ត្រូវបានប្រើដើម្បីកំណត់រចនាប័ទ្ម និងប្លង់នៃទំព័រគេហទំព័រ។ ផ្នែកនេះនឹងណែនាំអំពីវាក្យសម្ព័ន្ធមូលដ្ឋានរបស់ CSS និងប្រភេទនៃការជ្រើសរើស (selectors) ដែលប្រើដើម្បីកំណត់គោលដៅធាតុ HTML។

1.1 CSS Syntax - វាក្យសម្ព័ន្ធ CSS
វាក្យសម្ព័ន្ធ CSS មានការជ្រើសរើស (selector) និងប្លុកប្រកាស (declaration block) ដែលមានលក្ខណៈសម្បត្តិ (property) និងតម្លៃ (value)។

ឧទាហរណ៍ HTML:

html
<p>នេះគឺជាអត្ថបទគំរូ។</p>
ឧទាហរណ៍ CSS:

css
p {
  color: blue;
  font-size: 16px;
}
ការពន្យល់៖

p ជាការជ្រើសរើសដែលកំណត់គោលដៅធាតុ paragraph

color: blue; កំណត់ពណ៌អក្សរជាខៀវ

font-size: 16px; កំណត់ទំហំអក្សរជា 16 ភីកសែល

1.2 Types of Selectors - ប្រភេទនៃការជ្រើសរើស
CSS មានប្រភេទការជ្រើសរើសផ្សេងៗគ្នាដើម្បីកំណត់គោលដៅធាតុ HTML យ៉ាងជាក់លាក់។

1.2.1 Element Selector - ការជ្រើសរើសធាតុ
ការជ្រើសរើសធាតុប្រើឈ្មោះធាតុ HTML ដើម្បីអនុវត្តរចនាប័ទ្មទៅលើធាតុទាំងអស់នៃប្រភេទនោះ។

ឧទាហរណ៍ HTML:

html
<h1>ចំណងជើងធំ</h1>
ឧទាហរណ៍ CSS:

css
h1 {
  color: red;
}
ការពន្យល់៖ កំណត់ពណ៌ក្រហមទៅធាតុ h1 ទាំងអស់។

1.2.2 Class Selector - ការជ្រើសរើសតាមថ្នាក់
ការជ្រើសរើសតាមថ្នាក់ប្រើចំណុច (.) ដើម្បីកំណត់គោលដៅធាតុដែលមានថ្នាក់ជាក់លាក់។

ឧទាហរណ៍ HTML:

html
<p class="highlight">អត្ថបទនេះត្រូវបានរំលេច។</p>
ឧទាហរណ៍ CSS:

css
.highlight {
  background-color: yellow;
}
ការពន្យល់៖ កំណត់ផ្ទៃខាងក្រោយជាពណ៌លឿងសម្រាប់ធាតុដែលមានថ្នាក់ 'highlight'។

1.2.3 ID Selector - ការជ្រើសរើសតាម ID
ការជ្រើសរើសតាម ID ប្រើសញ្ញា (#) ដើម្បីកំណត់គោលដៅធាតុតែមួយដែលមាន ID ជាក់លាក់។

ឧទាហរណ៍ HTML:

html
<div id="header">ផ្នែកក្បាលទំព័រ</div>
ឧទាហរណ៍ CSS:

css
#header {
  font-weight: bold;
}
ការពន្យល់៖ កំណត់អក្សរដិតសម្រាប់ធាតុដែលមាន ID 'header'។

1.2.4 Universal Selector - ការជ្រើសរើសទូទៅ
ការជ្រើសរើសទូទៅប្រើសញ្ញា (*) ដើម្បីអនុវត្តរចនាប័ទ្មទៅលើធាតុទាំងអស់។

ឧទាហរណ៍ HTML:

html
<h1>ចំណងជើង</h1>
<p>អត្ថបទ</p>
ឧទាហរណ៍ CSS:

css
* {
  margin: 0;
}
ការពន្យល៖ កំណត់គម្លាតខាងក្រៅ (margin) ជា 0 សម្រាប់ធាតុទាំងអស់។

1.2.5 Attribute Selector - ការជ្រើសរើសតាមគុណលក្ខណៈ
ការជ្រើសរើសតាមគុណលក្ខណៈប្រើតង្កៀបការ៉េ ([ ]) ដើម្បីកំណត់គោលដៅធាតុដែលមានគុណលក្ខណៈជាក់លាក់។

ឧទាហរណ៍ HTML:

html
<input type="text" placeholder="បញ្ចូលអត្ថបទ">
ឧទាហរណ៍ CSS:

css
[type="text"] {
  border: 1px solid black;
}
ការពន្យល់៖ កំណត់ស៊ុម 1px ពណ៌ខ្មៅសម្រាប់ធាតុដែលមានគុណលក្ខណៈ type='text'។

1.2.6 Pseudo-class Selectors - ការជ្រើសរើសតាមថ្នាក់ក្លែងក្លាយ
ការជ្រើសរើសតាមថ្នាក់ក្លែងក្លាយប្រើសញ្ញាកូឡុង (:) ដើម្បីកំណត់គោលដៅស្ថានភាពជាក់លាក់នៃធាតុ។

ឧទាហរណ៍ HTML:

html
<a href="#">ចុចខ្ញុំ</a>
ឧទាហរណ៍ CSS:

css
a:hover {
  color: green;
}
ការពន្យល់៖ ផ្លាស់ប្តូរពណ៌ទៅជាបៃតងនៅពេលចង្អុលលើតំណភ្ជាប់ (link)។

1.2.7 Pseudo-element Selectors - ការជ្រើសរើសតាមធាតុក្លែងក្លាយ
ការជ្រើសរើសតាមធាតុក្លែងក្លាយប្រើសញ្ញាកូឡុងពីរ (::) ដើម្បីកំណត់គោលដៅផ្នែកជាក់លាក់នៃធាតុ។

ឧទាហរណ៍ HTML:

html
<p>នេះគឺជាបន្ទាត់ដំបូង។ នេះជាបន្ទាត់ទីពីរ។</p>
ឧទាហរណ៍ CSS:

css
p::first-line {
  font-weight: bold;
}
ការពន្យល់៖ កំណត់អក្សរដិតសម្រាប់បន្ទាត់ដំបូងនៃធាតុ paragraph។

2. CSS Colors and Backgrounds - ពណ៌ CSS និងផ្ទៃខាងក្រោយ
CSS អនុញ្ញាតឱ្យអ្នកកំណត់ពណ៌ និងផ្ទៃខាងក្រោយសម្រាប់ធាតុ HTML។ ផ្នែកនេះនឹងបង្ហាញពីវិធីកំណត់ពណ៌ផ្សេងៗ និងរបៀបប្រើលក្ខណៈសម្បត្តិផ្ទៃខាងក្រោយ។

2.1 Color Values - តម្លៃពណ៌
CSS ផ្តល់ជម្រើសជាច្រើនសម្រាប់កំណត់ពណ៌ ដូចជា Hexadecimal, RGB, RGBA, HSL និង HSLA។

2.1.1 Hexadecimal - ពណ៌ជាលេខគោលដប់ប្រាំមួយ
ឧទាហរណ៍ CSS:

css
p {
  color: #0000FF; /* ពណ៌ខៀវ */
}
2.1.2 RGB - ពណ៌ RGB
ឧទាហរណ៍ CSS:

css
p {
  color: rgb(255, 0, 0); /* ពណ៌ក្រហម */
}
2.1.3 RGBA - ពណ៌ RGBA
ឧទាហរណ៍ CSS:

css
p {
  color: rgba(0, 0, 255, 0.5); /* ពណ៌ខៀវថ្លា 50% */
}
2.1.4 HSL - ពណ៌ HSL
ឧទាហរណ៍ CSS:

css
p {
  color: hsl(120, 100%, 50%); /* ពណ៌បៃតងសុទ្ធ */
}
2.1.5 HSLA - ពណ៌ HSLA
ឧទាហរណ៍ CSS:

css
p {
  color: hsla(120, 100%, 50%, 0.7); /* ពណ៌បៃតងថ្លា 70% */
}
2.2 Backgrounds - ផ្ទៃខាងក្រោយ
CSS ផ្តល់លក្ខណៈសម្បត្តិផ្សេងៗដើម្បីគ្រប់គ្រងផ្ទៃខាងក្រោយ។

2.2.1 background-color - ពណ៌ផ្ទៃខាងក្រោយ
ឧទាហរណ៍ CSS:

css
div {
  background-color: yellow;
}
2.2.2 background-image - រូបភាពផ្ទៃខាងក្រោយ
ឧទាហរណ៍ CSS:

css
div {
  background-image: url('https://example.com/image.jpg');
  height: 100px;
}
2.2.3 background-position - ទីតាំងផ្ទៃខាងក្រោយ
ឧទាហរណ៍ CSS:

css
div {
  background-image: url('https://example.com/image.jpg');
  background-position: right bottom;
  height: 100px;
}
2.2.4 background-repeat - ការធ្វើម្តងទៀតនៃផ្ទៃខាងក្រោយ
ឧទាហរណ៍ CSS:

css
div {
  background-image: url('https://example.com/image.jpg');
  background-repeat: no-repeat;
  height: 100px;
}
2.2.5 background-size - ទំហំផ្ទៃខាងក្រោយ
ឧទាហរណ៍ CSS:

css
div {
  background-image: url('https://example.com/image.jpg');
  background-size: cover;
  height: 100px;
}
3. CSS Box Model - គំរូប្រអប់ CSS
CSS Box Model ពន្យល់ពីរបៀបដែលធាតុ HTML ត្រូវបានបង្ហាញជាប្រអប់ ដែលមានផ្នែកផ្សេងៗ។

3.1 Box Model Areas - ផ្នែកនៃគំរូប្រអប់
3.1.1 Content - មាតិកា
ឧទាហរណ៍ CSS:

css
div {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
3.1.2 Padding - គម្លាតខាងក្នុង
ឧទាហរណ៍ CSS:

css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: lightgreen;
}
3.1.3 Border - ស៊ុម
ឧទាហរណ៍ CSS:

css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  background-color: lightyellow;
}
3.1.4 Margin - គម្លាតខាងក្រៅ
ឧទាហរណ៍ CSS:

css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 30px;
  background-color: lightpink;
}
3.2 box-sizing - ការកំណត់ទំហំប្រអប់
ឧទាហរណ៍ CSS:

css
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  box-sizing: border-box; /* រួមបញ្ចូល padding និង border ក្នុងទទឹង 200px */
  background-color: lightcoral;
}
4. CSS Typography - ការកំណត់អក្សរ CSS
CSS Typography គ្រប់គ្រងរូបរាង និងការរៀបចំអក្សរ។

4.1 Font Properties - លក្ខណៈសម្បត្តិពុម្ពអក្សរ
4.1.1 font-family - ប្រភេទពុម្ពអក្សរ
css
p {
  font-family: Arial, sans-serif;
}
4.1.2 font-size - ទំហំអក្សរ
css
p {
  font-size: 20px;
}
4.1.3 font-weight - ទម្ងន់អក្សរ
css
p {
  font-weight: bold;
}
4.1.4 font-style - រចនាប័ទ្មអក្សរ
css
p {
  font-style: italic;
}
4.1.5 line-height - គម្លាតបន្ទាត់
css
p {
  line-height: 2;
}
4.2 Text Alignment - ការតម្រឹមអត្ថបទ
css
p {
  text-align: center;
}
4.3 Text Decoration - ការតុបតែងអត្ថបទ
css
p {
  text-decoration: underline;
}
4.4 Text Transform - ការបំលែងអត្ថបទ
css
p {
  text-transform: uppercase;
}
5. CSS Layouts - ការរៀបចំប្លង់ CSS
5.1 Display Property - លក្ខណៈសម្បត្តិ Display
5.1.1 block - ប្លុក
css
div {
  display: block;
}
5.1.2 inline - ក្នុងជួរ
css
span {
  display: inline;
}
5.1.3 inline-block - ក្នុងជួរប្លុក
css
div {
  display: inline-block;
  width: 100px;
  height: 50px;
}
5.1.4 none - គ្មាន
css
p {
  display: none; /* លាក់ធាតុ */
}
5.2 Flexbox - ប្លង់អាចបត់បែនបាន
ឧទាហរណ៍ CSS:

css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
5.3 CSS Grid - ក្រឡាចត្រង្គ CSS
ឧទាហរណ៍ CSS:

css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
}
5.4 Positioning - ការកំណត់ទីតាំង
5.4.1 Static - ឋិតិវន្ត
css
div {
  position: static;
}
5.4.2 Relative - ទាក់ទង
css
div {
  position: relative;
  top: 20px;
  left: 30px;
}
5.4.3 Absolute - ដាច់ខាត
css
.absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}
5.4.4 Fixed - ថេរ
css
div {
  position: fixed;
  top: 10px;
  right: 10px;
}
5.4.5 Sticky - ស្អិត
css
.sticky {
  position: sticky;
  top: 0;
}
6. CSS Styling Lists and Tables - ការកំណត់រចនាប័ទ្មបញ្ជី និងតារាង
6.1 Lists - បញ្ជី
6.1.1 list-style-type - ប្រភេទសញ្ញាសម្គាល់បញ្ជី
css
ul {
  list-style-type: square;
}
6.1.2 list-style-position - ទីតាំងសញ្ញាសម្គាល់បញ្ជី
css
ul {
  list-style-position: inside;
}
6.1.3 list-style-image - រូបភាពសញ្ញាសម្គាល់បញ្ជី
css
ul {
  list-style-image: url('https://example.com/bullet.png');
}
6.2 Tables - តារាង
6.2.1 border - ស៊ុម
css
table, td {
  border: 1px solid black;
}
6.2.2 border-collapse - ការបញ្ចូលស៊ុម
css
table {
  border-collapse: collapse;
}
6.2.3 padding - គម្លាតខាងក្នុង
css
td {
  padding: 10px;
}
6.2.4 text-align - ការតម្រឹមអត្ថបទ
css
td {
  text-align: center;
}
6.2.5 vertical-align - ការតម្រឹមបញ្ឈរ
css
td {
  vertical-align: middle;
  height: 100px;
}
7. CSS Pseudo-classes and Pseudo-elements
7.1 Pseudo-classes
7.1.1 :hover
css
button:hover {
  background-color: blue;
  color: white;
}
7.1.2 :active
css
a:active {
  color: red;
}
7.1.3 :focus
css
input:focus {
  border: 2px solid green;
  outline: none;
}
7.1.4 :first-child
css
li:first-child {
  font-weight: bold;
}
7.1.5 :last-child
css
li:last-child {
  color: red;
}
7.2 Pseudo-elements
7.2.1 ::before
css
p::before {
  content: "★ ";
  color: yellow;
}
7.2.2 ::after
css
p::after {
  content: " ✔";
  color: green;
}
7.2.3 ::first-letter
css
p::first-letter {
  font-size: 2em;
  color: blue;
}
7.2.4 ::first-line
css
p::first-line {
  font-weight: bold;
  color: purple;
}
8. CSS Transitions and Animations
8.1 Transitions
ឧទាហរណ៍ CSS:

css
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: background-color 0.5s ease;
}
.box:hover {
  background-color: lightcoral;
}
8.1.1 Properties: transition-property, transition-duration, transition-timing-function, transition-delay
css
.box {
  transition-property: width, background-color;
  transition-duration: 1s, 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.2s;
}
.box:hover {
  width: 200px;
  background-color: lightgreen;
}
8.2 Animations
8.2.1 @keyframes: Defines a set of steps for an animation
css
@keyframes move {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.box {
  animation: move 2s infinite;
}
8.2.2 animation: Specifies animation properties
css
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}

.box {
  animation: bounce 1.5s ease-in-out 0.5s 3 alternate;
}
9. Responsive Design - ការរចនាឆ្លើយតប
9.1 Media Queries
ឧទាហរណ៍ CSS:

css
.box {
  width: 100%;
  background-color: lightblue;
}

@media (max-width: 768px) {
  .box {
    background-color: lightcoral;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 10px;
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 40px;
    font-size: 18px;
  }
}
9.2 Mobile-first Design
ឧទាហរណ៍ CSS:

css
.content {
  width: 100%;
  padding: 10px;
  background-color: lightblue;
}

@media (min-width: 768px) {
  .content {
    width: 50%;
    padding: 20px;
    background-color: lightgreen;
  }
}
9.3 Responsive Units
9.3.1 vw, vh: Viewport width and height
css
.box {
  width: 50vw;
  height: 50vh;
  background-color: lightblue;
}
9.3.2 em, rem: Relative to font size
css
html {
  font-size: 16px;
}

.parent {
  font-size: 20px;
}

.child {
  margin: 1em; /* 20px, based on parent */
  padding: 1rem; /* 16px, based on root */
}
10. Positioning and Z-index
10.1 Positioning
ឧទាហរណ៍ CSS:

css
.container {
  position: relative;
  height: 200px;
}

.box {
  position: absolute;
  top: 20px;
  left: 20px;
}
10.2 Z-index
ឧទាហរណ៍ CSS:

css
.box1 {
  position: absolute;
  z-index: 1;
  background-color: lightblue;
}

.box2 {
  position: absolute;
  z-index: 2;
  background-color: lightcoral;
}
11. CSS Variables - អថេរ CSS
11.1 CSS Variables
ឧទាហរណ៍ CSS:

css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
}

.box {
  background-color: var(--main-color);
  color: white;
}

.text {
  color: var(--secondary-color);
}
11.2 Syntax
css
:root {
  --primary-color: #3498db;
  --text-color: #333;
}

.element {
  color: var(--primary-color);
  background-color: var(--text-color);
}
12. CSS Specificity and Cascade
12.1 Specificity
ឧទាហរណ៍ CSS:

css
p { color: blue; }           /* Element selector - ទាបបំផុត */
.highlight { color: green; } /* Class selector - មធ្យម */
#text { color: red; }        /* ID selector - ខ្ពស់ */
/* Inline style - ខ្ពស់បំផុត */
12.2 Cascade
ឧទាហរណ៍ CSS:

css
.text { color: blue; }
.text { color: green; } /* ច្បាប់នេះនឹងឈ្នះ ព្រោះនៅក្រោយ */
13. CSS Functions - មុខងារ CSS
13.1 calc()
css
.box {
  width: calc(100% - 50px);
  height: calc(200px + 2em);
}
13.2 var()
css
:root {
  --primary-color: #3498db;
}

.element {
  color: var(--primary-color);
}
13.3 clamp()
css
.text {
  font-size: clamp(14px, 4vw, 24px);
}
14. CSS Grid Layout - ប្លង់ក្រឡាចត្រង្គ CSS
14.1 Definition
css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
14.2 Grid Container
css
.container {
  display: grid;
  grid-template-columns: 100px 200px;
}
14.3 Grid Items
css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
}
14.4 Grid-template-columns/rows
css
.grid {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
  grid-template-rows: 100px;
}
14.5 Grid-gap
css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
15. CSS Flexbox Layout - ប្លង់ Flexbox របស់ CSS
15.1 Flex Container
css
.container {
  display: flex;
}
15.2 Flex Items
css
.container {
  display: flex;
  justify-content: space-between;
}
15.3 Main Axis and Cross Axis
15.3.1 Horizontally (Main Axis)
css
.container {
  display: flex;
  justify-content: center;
}
15.3.2 Vertically (Cross Axis)
css
.container {
  display: flex;
  align-items: center;
  height: 200px;
}
  ការពន្យល់៖ align-items: center; តម្រឹមធាតុទាំងពីរនៅកណ្តាលបញ្ឈរតាម Cross Axis (បញ្ឈរ ព្រោះ Main Axis ជាផ្តេក)។`
  },

  {
    id: 3,
    slug: "javascript",
    title: "JavaScript មូលដ្ឋាន",
    description: "រៀនពីមូលដ្ឋានគ្រឹះនៃភាសា JavaScript សម្រាប់បង្កើតគេហទំព័រឆ្លាតវៃ",
    level: "ថ្នាក់ដើម",
    icon: "⚡",
    language: "javascript",
    content: `សៀវភៅណែនាំ JavaScript ជាភាសាខ្មែរ`,
    codeExample:` 1. Basic Syntax and Fundamentals - វាក្យសម្ព័ន្ធមូលដ្ឋាន និងមូលដ្ឋានគ្រឹះ
វាក្យសម្ព័ន្ធមូលដ្ឋាន និងមូលដ្ឋានគ្រឹះនៃភាសា JavaScript គឺជាចំណុចសំខាន់សម្រាប់អ្នកចាប់ផ្តើមរៀនសរសេរកម្មវិធី។ ផ្នែកនេះនឹងពន្យល់លម្អិតអំពីរបៀបប្រើ variables, constants, data types, type conversion, operators, និង comments ដើម្បីបង្កើតកម្មវិធីដែលមានប្រសិទ្ធភាព។

1.1 Variables and Constants (let, const, var) - អថេរ និងថេរ
អថេរ (variables) និងថេរ (constants) ត្រូវបានប្រើដើម្បីរក្សាទុកទិន្នន័យនៅក្នុង JavaScript។ អថេរអនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរតម្លៃបាន ចំណែកថេរមិនអនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃបន្ទាប់ពីកំណត់រួច។

ឧទាហរណ៍៖

javascript
// ប្រើ let សម្រាប់អថេរដែលអាចផ្លាស់ប្តូរតម្លៃ
let age = 25;
age = 26; // អាចផ្លាស់ប្តូរបាន

// ប្រើ const សម្រាប់ថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃ
const name = "Sokha";
// name = "Vannak"; // នឹងបណ្តាលឱ្យមានកំហុស

// ប្រើ var (វិធីចាស់ មិនសូវប្រើទំនើប)
var score = 100;
score = 150; // អាចផ្លាស់ប្តូរបាន

console.log(age);   // 26
console.log(name);  // Sokha
console.log(score); // 150
ការពន្យល់៖ let អនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃអថេរ ប៉ុន្តែមាន block scope។ const មិនអនុញ្ញាតឱ្យផ្លាស់ប្តូរតម្លៃបន្ទាប់ពីកំណត់ និងមាន block scope។ var ជាវិធីចាស់ មាន function scope និងអាចបណ្តាលឱ្យមានបញ្ហាក្នុងកម្មវិធីធំ ដូច្នេះគួរជៀសវាងប្រើ។

1.2 Data Types (String, Number, Boolean, Object, Array, Null, Undefined, Symbol) - ប្រភេទទិន្នន័យ
JavaScript មានប្រភេទទិន្នន័យផ្សេងៗសម្រាប់រក្សាទុកទិន្នន័យ។

ឧទាហរណ៍៖

javascript
// String: អក្សរឬឃ្លា
let greeting = "សួស្តី";

// Number: លេខ (ទាំងគត់ និងទសភាគ)
let price = 99.99;

// Boolean: តម្លៃ True ឬ False
let isStudent = true;

// Object: ទិន្នន័យដែលមានលក្ខណៈសម្បត្តិ
let person = { name: "Sokha", age: 25 };

// Array: បញ្ជីទិន្នន័យ
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];

// Null: គ្មានតម្លៃ
let empty = null;

// Undefined: អថេរដែលមិនបានកំណត់តម្លៃ
let notAssigned;

// Symbol: តម្លៃតែមួយគត់
let id = Symbol("id");

console.log(typeof greeting);   // string
console.log(typeof price);      // number
console.log(typeof isStudent);  // boolean
console.log(typeof person);     // object
console.log(typeof fruits);     // object (Array ជា object)
console.log(typeof empty);      // object (null ត្រូវបានចាត់ទុកជា object)
console.log(typeof notAssigned); // undefined
console.log(typeof id);         // symbol
ការពន្យល់៖ typeof ត្រូវបានប្រើដើម្បីពិនិត្យប្រភេទទិន្នន័យ។ String សម្រាប់អក្សរ, Number សម្រាប់លេខ, Boolean សម្រាប់តម្លៃពិត/មិនពិត, Object សម្រាប់ទិន្នន័យស្មុគស្មាញ, Array សម្រាប់បញ្ជី, Null សម្រាប់គ្មានតម្លៃ, Undefined សម្រាប់អថេរមិនទាន់កំណត់, និង Symbol សម្រាប់តម្លៃតែមួយគត់។

1.3 Type Conversion (Implicit and Explicit) - ការបម្លែងប្រភេទទិន្នន័យ
ការបម្លែងប្រភេទទិន្នន័យ (type conversion) គឺជាដំណើរការផ្លាស់ប្តូរទិន្នន័យពីប្រភេទមួយទៅប្រភេទមួយទៀត។

ឧទាហរណ៍៖

javascript
// Implicit Conversion
let result = "5" + 3; // String + Number = String
console.log(result); // "53"

let sum = "10" - 2; // String - Number = Number
console.log(sum); // 8

// Explicit Conversion
let str = "123";
let num = Number(str); // បម្លែង String ទៅ Number
console.log(num); // 123

let value = 456;
let text = String(value); // បម្លែង Number ទៅ String
console.log(text); // "456"

let truth = "true";
let bool = Boolean(truth); // បម្លែង String ទៅ Boolean
console.log(bool); // true
ការពន្យល់៖ ក្នុង implicit conversion, JavaScript បម្លែងទិន្នន័យដោយស្វ័យប្រវត្តិ (ឧ. "5" + 3 បណ្តាលឱ្យ "53" ព្រោះ + បម្លែង 3 ទៅជា String)។ ក្នុង explicit conversion, យើងប្រើ Number(), String(), ឬ Boolean() ដើម្បីបម្លែងទិន្នន័យដោយចេតនា។

1.4 Operators - ប្រតិបត្តិករ
ប្រតិបត្តិករ (operators) គឺជាសញ្ញា ឬពាក្យគន្លឹះដែលប្រើសម្រាប់ធ្វើប្រតិបត្តិការលើទិន្នន័យ។

Arithmetic Operators - ប្រតិបត្តិករគណនា
javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (បូក)
console.log(a - b);  // 7 (ដក)
console.log(a * b);  // 30 (គុណ)
console.log(a / b);  // 3.3333333333333335 (ចែក)
console.log(a % b);  // 1 (សំណល់)
console.log(a ** b); // 1000 (ស្វ័យគុណ)
console.log(++a);    // 11 (បន្ថែម 1)
console.log(--b);    // 2 (ដក 1)
Comparison Operators - ប្រតិបត្តិករប្រៀបធៀប
javascript
let x = 5;
let y = "5";

console.log(x == y);   // true (ស្មើ មិនខ្វល់ប្រភេទ)
console.log(x === y);  // false (ស្មើ និងប្រភេទដូចគ្នា)
console.log(x != y);   // false (មិនស្មើ)
console.log(x !== y);  // true (មិនស្មើ ឬប្រភេទខុសគ្នា)
console.log(x > y);    // false (ធំជាង)
console.log(x >= y);   // true (ធំជាងឬស្មើ)
console.log(x < y);    // false (តូចជាង)
console.log(x <= y);   // true (តូចជាងឬស្មើ)
Logical Operators - ប្រតិបត្តិករតក្កវិជ្ជា
javascript
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false (AND: ទាំងពីរត្រូវតែពិត)
console.log(isAdult || hasID); // true (OR: យ៉ាងហោចមួយពិត)
console.log(!isAdult);         // false (NOT: ប្តូរតម្លៃ)
Assignment Operators - ប្រតិបត្តិករកំណត់តម្លៃ
javascript
let x = 5;

x += 2;  // x = x + 2
console.log(x); // 7

x -= 3;  // x = x - 3
console.log(x); // 4

x *= 2;  // x = x * 2
console.log(x); // 8

x /= 4;  // x = x / 4
console.log(x); // 2

x %= 3;  // x = x % 3
console.log(x); // 2

x **= 2; // x = x ** 2
console.log(x); // 4
Ternary Operator - ប្រតិបត្តិករលក្ខខណ្ឌសង្ខេប
javascript
let age = 20;
let status = age >= 18 ? "មនុស្សពេញវ័យ" : "អនីតិជន";
console.log(status); // មនុស្សពេញវ័យ

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // B
1.5 Comments - កំណត់សម្គាល់
កំណត់សម្គាល់ (comments) ត្រូវបានប្រើដើម្បីបន្ថែមការពន្យល់ ឬកំណត់ចំណាំនៅក្នុងកូដ ដែលមិនត្រូវបានប្រតិបត្តិដោយ JavaScript។

ឧទាហរណ៍៖

javascript
// នេះជាកំណត់សម្គាល់មួយជួរ
let x = 10; // កំណត់អថេរ x

/* 
   នេះជាកំណត់សម្គាល់ច្រើនជួរ
   ប្រើសម្រាប់ពន្យល់កូដលម្អិត
*/
let y = 20;

console.log(x + y); // បោះពុម្ពលទ្ធផលនៃ x + y
2. Control Flow - លំហូរគ្រប់គ្រង
លំហូរគ្រប់គ្រង (control flow) នៅក្នុង JavaScript អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដដោយប្រើលក្ខខណ្ឌ (conditional statements) និងរង្វិលជុំ (loops)។

2.1 Conditional Statements - សេចក្តីបញ្ជាលក្ខខណ្ឌ
2.1.1 Simple if Statement - សេចក្តីបញ្ជា if សាមញ្ញ
javascript
let temperature = 30;

if (temperature > 25) {
    console.log("អាកាសធាតុក្តៅណាស់");
}
2.1.2 if else Statement - សេចក្តីបញ្ជា if else
javascript
let age = 16;

if (age >= 18) {
    console.log("អ្នកជាមនុស្សពេញវ័យ");
} else {
    console.log("អ្នកនៅតែជាអនីតិជន");
}
2.1.3 if else if else Statement - សេចក្តីបញ្ជា if else if else
javascript
let score = 75;

if (score >= 90) {
    console.log("អ្នកបាននិទ្ទេស A");
} else if (score >= 80) {
    console.log("អ្នកបាននិទ្ទេស B");
} else if (score >= 70) {
    console.log("អ្នកបាននិទ្ទេស C");
} else if (score >= 60) {
    console.log("អ្នកបាននិទ្ទេស D");
} else {
    console.log("អ្នកបាននិទ្ទេស F");
}
2.1.4 Switch Statement - សេចក្តីបញ្ជា Switch
javascript
let score = 75;

switch (true) {
    case score >= 90:
        console.log("អ្នកបាននិទ្ទេស A");
        break;
    case score >= 80:
        console.log("អ្នកបាននិទ្ទេស B");
        break;
    case score >= 70:
        console.log("អ្នកបាននិទ្ទេស C");
        break;
    case score >= 60:
        console.log("អ្នកបាននិទ្ទេស D");
        break;
    default:
        console.log("អ្នកបាននិទ្ទេស F");
}
2.2 Loops - រង្វិលជុំ
2.2.1 for Loop - រង្វិលជុំ for
javascript
for (let i = 0; i < 5; i++) {
    console.log(/លេខ: {i}/);
}
2.2.2 while Loop - រង្វិលជុំ while
javascript
let count = 0;
while (count < 5) {
    console.log(/ចំនួន: {count}/);
    count++;
}
2.2.3 do...while Loop - រង្វិលជុំ do...while
javascript
let num = 0;
do {
    console.log(/តម្លៃ: {num}/);
    num++;
} while (num < 3);
2.2.4 for...in Loop - រង្វិលជុំ for...in
javascript
let person = { name: "សុខា", age: 25, city: "ភ្នំពេញ" };

for (let key in person) {
    console.log(/{key}: {person[key]}/);
}
2.2.5 for...of Loop - រង្វិលជុំ for...of
javascript
let fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];

for (let fruit of fruits) {
    console.log(/ផ្លែឈើ: {fruit}/);
}
2.3 Break and Continue - ការគ្រប់គ្រងរង្វិលជុំ
javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // បញ្ចប់រង្វិលជុំនៅ i = 5
    }
    if (i === 3) {
        continue; // រំលង i = 3
    }
    console.log(/លេខ: {i}/);
}
3. Functions - អនុគមន៍
អនុគមន៍ (functions) គឺជាប្លុកកូដដែលត្រូវបានរចនាឡើងដើម្បីប្រតិបត្តិការងារជាក់លាក់មួយ និងអាចប្រើឡើងវិញបាន។

3.1 Function Declarations and Expressions
javascript
// Function Declaration
function greet(name) {
    console.log("សួស្តី " + name);
}
greet("សុខា");

// Function Expression
const add = function(a, b) {
    console.log(a + b);
};
add(5, 3);
3.2 Arrow Functions
javascript
// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// Arrow Function ជាមួយប្លុកកូដ
const sayHello = name => {
    console.log(/ជម្រាបសួរ ${name}/);
};
sayHello("វណ្ណៈ");
3.3 Function Parameters (Default, Rest Parameters)
javascript
// Default Parameters
function welcome(name = "ភ្ញៀវ") {
    console.log(/ស្វាគមន៍ ${name}/);
}
welcome();          // ប្រើតម្លៃលំនាំដើម
welcome("សុខា");

// Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log(total);
}
sum(1, 2, 3, 4);
3.4 Return Values
javascript
function square(num) {
    return num * num;
    console.log("នឹងមិនប្រតិបត្តិទេ"); // កូដបន្ទាប់ពី return
}
const result = square(4);
console.log(result);
3.5 Closures
javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment(); // 1
increment(); // 2
3.6 Callback Functions
javascript
function processData(data, callback) {
    console.log("កំពុងដំណើរការទិន្នន័យ: " + data);
    callback(data);
}
function display(data) {
    console.log("បង្ហាញទិន្នន័យ: " + data);
}
processData("ព័ត៌មាន", display);
3.7 IIFE (Immediately Invoked Function Expressions)
javascript
(function() {
    let message = "សារឯកជន";
    console.log(message);
})();
console.log(typeof message); // undefined
4. Objects - វត្ថុ
វត្ថុ (objects) គឺជាទិន្នន័យដែលផ្ទុកលក្ខណៈសម្បត្តិ (properties) និងវិធីសាស្ត្រ (methods) ដែលតំណាងឱ្យអង្គភាពមួយ។

4.1 Creating Objects
javascript
// Object Literal
const person = {
    name: "សុខា",
    age: 25
};
console.log(person);

// Constructor Function
function Car(model, year) {
    this.model = model;
    this.year = year;
}
const myCar = new Car("Toyota", 2020);
console.log(myCar);
4.2 Accessing Object Properties
javascript
const student = {
    name: "វណ្ណៈ",
    grade: "A"
};

console.log(student.name);  // Dot notation
console.log(student["grade"]); // Bracket notation

student.grade = "B"; // កែប្រែលក្ខណៈសម្បត្តិ
console.log(student.grade);
4.3 Methods and this Keyword
javascript
const person = {
    name: "សុខា",
    age: 25,
    introduce: function() {
        console.log(/ជម្រាបសួរ ខ្ញុំឈ្មោះ {this.name} អាយុ {this.age} ឆ្នាំ/);
    }
};

person.introduce();
4.4 Object Destructuring
javascript
const user = {
    username: "វណ្ណៈ",
    email: "vanna@example.com"
};

const { username, email } = user;
console.log(username);
console.log(email);

// ប្តូរឈ្មោះអថេរ
const { username: userName } = user;
console.log(userName);
4.5 Object Literals
javascript
const name = "សុខា";
const age = 25;

// Object Literal នៅក្នុង ES6
const person = {
    name, // សង្ខេបពី name: name
    age,
    greet() { // វិធីសាស្ត្រសង្ខេប
        console.log(/សួស្តី ខ្ញុំឈ្មោះ {this.name}/);
    }
};

console.log(person);
person.greet();
4.6 Prototype and Inheritance
javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function() {
    console.log(/សួស្តី ខ្ញុំឈ្មោះ {this.name}/);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const myDog = new Dog("ប៊ុន", "Husky");
myDog.sayHello();
console.log(myDog.breed);
5. Arrays - អារេ
អារេ (arrays) គឺជាទិន្នន័យប្រភេទបញ្ជីដែលផ្ទុកធាតុជាច្រើន។

5.1 Creating and Accessing Arrays
javascript
// បង្កើតអារេ
const fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
const numbers = new Array(1, 2, 3);

// ចូលប្រើធាតុ
console.log(fruits[0]); // ធាតុទីមួយ
console.log(numbers[2]); // ធាតុទីបី

// កែប្រែធាតុ
fruits[1] = "ទំពាំង";
console.log(fruits);
5.2 Array Methods
push() and pop() - បន្ថែម និងលុបធាតុចុងក្រោយ
javascript
const fruits = ["ផ្លែប៉ោម", "ចេក"];
fruits.push("ស្វាយ");
console.log(fruits);

const lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
shift() and unshift() - លុប និងបន្ថែមធាតុដើម
javascript
const numbers = [10, 20, 30];
const firstNumber = numbers.shift();
console.log(firstNumber);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);
slice() and splice() - កាត់ និងកែប្រែអារេ
javascript
const fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ", "ទំពាំង"];
const sliced = fruits.slice(1, 3);
console.log(sliced);
console.log(fruits);

fruits.splice(1, 1, "ក្រូច");
console.log(fruits);
forEach() - ឆ្លងកាត់ធាតុអារេ
javascript
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
map() - បង្កើតអារេថ្មី
javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled);
console.log(numbers);
filter() - ច្រោះធាតុ
javascript
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 === 0);
console.log(even);
console.log(numbers);
reduce() - បង្រួមអារេ
javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
5.3 Array Destructuring
javascript
const colors = ["ក្រហម", "បៃតង", "ខៀវ"];
const [first, second] = colors;
console.log(first);
console.log(second);

// រំលងធាតុ
const [, , third] = colors;
console.log(third);
5.4 Spread Operator (...)
javascript
const fruits = ["ផ្លែប៉ោម", "ចេក"];
const moreFruits = [...fruits, "ស្វាយ"];
console.log(moreFruits);

const numbers = [1, 2];
const combined = [...numbers, ...fruits];
console.log(combined);
5.5 Rest Parameter in Functions
javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
5.6 Finding and Searching in Arrays
javascript
const fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
console.log(fruits.indexOf("ចេក"));
console.log(fruits.includes("ស្វាយ"));

const numbers = [10, 20, 30, 40];
const found = numbers.find(num => num > 25);
console.log(found);

const index = numbers.findIndex(num => num > 25);
console.log(index);
5.7 Sorting and Reversing
javascript
const numbers = [30, 10, 20];
numbers.sort((a, b) => a - b);
console.log(numbers);

const fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
fruits.reverse();
console.log(fruits);
5.8 Checking if a Value is an Array
javascript
const arr = [1, 2, 3];
const obj = { a: 1 };
console.log(Array.isArray(arr));
console.log(Array.isArray(obj));
5.9 Concatenating Arrays
javascript
const fruits = ["ផ្លែប៉ោម", "ចេក"];
const moreFruits = ["ស្វាយ", "ទំពាំង"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits);
console.log(fruits);
5.10 Converting Arrays to Strings
javascript
const fruits = ["ផ្លែប៉ោម", "ចេក", "ស្វាយ"];
console.log(fruits.join(" - "));
console.log(fruits.toString());
6. ES6 Features - លក្ខណៈពិសេស ES6
ES6 (ECMAScript 2015) បានណែនាំលក្ខណៈពិសេសថ្មីៗជាច្រើនដែលធ្វើឱ្យការសរសេរកូដ JavaScript កាន់តែសង្ខេប និងមានអនុភាព។

6.1 Let and Const (Block Scope)
javascript
// let
let score = 10;
if (true) {
    let score = 20; // block scope
    console.log(score); // អថេរក្នុងប្លុក
}
console.log(score); // អថេរខាងក្រៅ

// const
const name = "សុខា";
console.log(name);
// name = "វណ្ណៈ"; // នឹងបណ្តាលឱ្យមានកំហុស
6.2 Template Literals (String Interpolation)
javascript
const name = "វណ្ណៈ";
const age = 25;

const greeting = /សួស្តី {name}! អ្នកមានអាយុ {age} ឆ្នាំ។/;
console.log(greeting);

const multiLine = /នេះជាអក្សរ
ច្រើនជួរ
នៅក្នុង ES6/;
console.log(multiLine);
6.3 Destructuring (Arrays and Objects)
javascript
// Array Destructuring
const colors = ["ក្រហម", "បៃតង", "ខៀវ"];
const [first, second] = colors;
console.log(first, second);

// Object Destructuring
const person = { name: "សុខា", age: 25 };
const { name, age } = person;
console.log(name, age);

// ប្តូរឈ្មោះអថេរ
const { name: personName } = person;
console.log(personName);
6.4 Default Parameters
javascript
function greet(name = "ភ្ញៀវ") {
    console.log(/សួស្តី ${name}/);
}
greet();
greet("វណ្ណៈ");
6.5 Spread Operator (...)
javascript
// អារេ
const numbers = [1, 2];
const newNumbers = [...numbers, 3, 4];
console.log(newNumbers);

// វត្ថុ
const person = { name: "សុខា" };
const updatedPerson = { ...person, age: 25 };
console.log(updatedPerson);
6.6 Rest Parameters (...args)
javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
6.7 Modules (import and export)
javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';

console.log(add(5, 3));
console.log(subtract(5, 3));
6.8 Classes
javascript
// ថ្នាក់មូលដ្ឋាន
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(/សួស្តី ខ្ញុំឈ្មោះ {this.name}/);
    }

    static info() {
        console.log("នេះជាថ្នាក់ Person");
    }
}

// មរតក
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    study() {
        console.log(/{this.name} កំពុងសិក្សា និទ្ទេស {this.grade}/);
    }
}

const student = new Student("សុខា", 25, "A");
student.greet();
student.study();
Person.info();
7. Asynchronous JavaScript - JavaScript អសមកាល
JavaScript ជាភាសាដែលដំណើរការជា single-threaded ប៉ុន្តែវាមានយន្តការសម្រាប់គ្រប់គ្រងប្រតិបត្តិការអសមកាល។

7.1 Callbacks
javascript
function fetchData(callback) {
    setTimeout(() => {
        callback("ទិន្នន័យត្រូវបានទាញ");
    }, 1000);
}

fetchData(message => {
    console.log(message);
});
7.2 Promises: then(), catch(), finally()
javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("ទិន្នន័យជោគជ័យ");
        } else {
            reject("មានកំហុស");
        }
    }, 1000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("បញ្ចប់ការទាញទិន្នន័យ"));
7.3 Async/Await
javascript
async function fetchData() {
    try {
        const promise = new Promise(resolve => {
            setTimeout(() => resolve("ទិន្នន័យជោគជ័យ"), 1000);
        });
        const data = await promise;
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("បញ្ចប់ការទាញទិន្នន័យ");
    }
}

fetchData();
7.4 setTimeout() / setInterval()
javascript
// setTimeout
setTimeout(() => {
    console.log("បន្ទាប់ពី 1 វិនាទី");
}, 1000);

// setInterval
let count = 0;
const intervalId = setInterval(() => {
    console.log(/ចំនួន: {++count}/);
    if (count === 3) {
        clearInterval(intervalId);
        console.log("បញ្ឈប់ setInterval");
    }
}, 1000);
7.5 Event Loop and Call Stack
javascript
console.log("ចាប់ផ្តើម");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

console.log("បញ្ចប់");
8. DOM (Document Object Model) Manipulation - ការគ្រប់គ្រង DOM
DOM (Document Object Model) គឺជារចនាសម្ព័ន្ធដែលតំណាងឱ្យទំព័របណ្តាញជាដើមឈើនៃវត្ថុ។

8.1 Accessing DOM Elements
HTML:

html
<div id="myDiv">សួស្តី</div>
<p class="text">អក្សរ</p>
<p class="text">អក្សរទីពីរ</p>
JavaScript:

javascript
// getElementById
const div = document.getElementById("myDiv");
console.log(div.textContent);

// querySelector
const firstText = document.querySelector(".text");
console.log(firstText.textContent);

// querySelectorAll
const allTexts = document.querySelectorAll(".text");
allTexts.forEach(text => console.log(text.textContent));
8.2 Modifying Content and Attributes
HTML:

html
<div id="myDiv">សួស្តី</div>
<img id="myImage" src="old.jpg">
JavaScript:

javascript
const div = document.getElementById("myDiv");

// innerHTML
div.innerHTML = "<strong>សួស្តីថ្មី</strong>";

// textContent
div.textContent = "អក្សរសាមញ្ញ";

// setAttribute
const img = document.getElementById("myImage");
img.setAttribute("src", "new.jpg");
console.log(img.getAttribute("src"));
8.3 Creating and Removing Elements
HTML:

html
<div id="container">
    <p id="oldText">អក្សរចាស់</p>
</div>
JavaScript:

javascript
const container = document.getElementById("container");

// បង្កើតធាតុថ្មី
const newText = document.createElement("p");
newText.textContent = "អក្សរថ្មី";
container.appendChild(newText);

// លុបធាតុ
const oldText = document.getElementById("oldText");
container.removeChild(oldText);

console.log(container.innerHTML);
8.4 Event Handling
HTML:

html
<button id="myButton">ចុចខ្ញុំ</button>
<ul id="list">
    <li>ធាតុ 1</li>
    <li>ធាតុ 2</li>
</ul>
JavaScript:

javascript
// addEventListener
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    console.log("ប៊ូតុងត្រូវបានចុច");
});

// Event Delegation
const list = document.getElementById("list");
list.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
        console.log(/ធាតុ: {event.target.textContent}/);
    }
});
8.5 Styling with JavaScript
HTML:

html
<div id="myDiv">សួស្តី</div>
JavaScript:

javascript
const div = document.getElementById("myDiv");
div.style.backgroundColor = "lightblue";
div.style.fontSize = "20px";
div.style.padding = "10px";

console.log(div.style.backgroundColor);
8.6 DOM Traversal
HTML:

html
<div id="parent">
    <p>ធាតុ 1</p>
    <p>ធាតុ 2</p>
</div>
JavaScript:

javascript
const parent = document.getElementById("parent");

// មេ
console.log(parent.tagName);

// កូន
const children = parent.children;
console.log(children[0].textContent);

// បងប្អូន
const firstChild = parent.firstElementChild;
const nextSibling = firstChild.nextElementSibling;
console.log(nextSibling.textContent);
9. Event Handling - ការគ្រប់គ្រងព្រឹត្តិការណ៍
ការគ្រប់គ្រងព្រឹត្តិការណ៍អនុញ្ញាតឱ្យអ្នកឆ្លើយតបទៅនឹងសកម្មភាពរបស់អ្នកប្រើប្រាស់។

9.1 DOM Events
HTML:

html
<button id="btn">ចុចខ្ញុំ</button>
<input id="input" type="text" placeholder="វាយអក្សរ">
<form id="form">
    <input type="text">
    <button type="submit">ដាក់ស្នើ</button>
</form>
JavaScript:

javascript
// Mouse Event
const btn = document.getElementById("btn");
btn.addEventListener("click", () => console.log("ប៊ូតុងត្រូវបានចុច"));

// Keyboard Event
const input = document.getElementById("input");
input.addEventListener("keydown", () => console.log("គ្រាប់ចុចត្រូវបានចុច"));

// Form Event
const form = document.getElementById("form");
form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("ទម្រង់ត្រូវបានដាក់ស្នើ");
});

// Window Event
window.addEventListener("load", () => console.log("ទំព័របានផ្ទុករួចរាល់"));
9.2 Event Listeners: addEventListener(), removeEventListener()
javascript
const btn = document.getElementById("btn");

const handleClick = () => {
    console.log("ប៊ូតុងត្រូវបានចុច");
};

// បន្ថែម Event Listener
btn.addEventListener("click", handleClick);

// លុប Event Listener បន្ទាប់ពី 3 វិនាទី
setTimeout(() => {
    btn.removeEventListener("click", handleClick);
    console.log("Event Listener ត្រូវបានលុប");
}, 3000);
9.3 Event Propagation: Bubbling and Capturing
HTML:

html
<div id="parent">
    <button id="child">ចុចខ្ញុំ</button>
</div>
JavaScript:

javascript
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Bubbling
parent.addEventListener("click", () => console.log("ចុចមេ"));
child.addEventListener("click", () => console.log("ចុចកូន"));

// Capturing
parent.addEventListener("click", () => console.log("ចុចមេ (Capturing)"), true);

// បញ្ឈប់ Propagation
child.addEventListener("click", e => {
    e.stopPropagation();
    console.log("ចុចកូន (បញ្ឈប់ Propagation)");
});
9.4 Event Object
HTML:

html
<button id="btn">ចុចខ្ញុំ</button>
<input id="input" type="text" placeholder="វាយអក្សរ">
JavaScript:

javascript
const btn = document.getElementById("btn");
const input = document.getElementById("input");

// Mouse Event Properties
btn.addEventListener("click", e => {
    console.log(/ប្រភេទ: {e.type}, គោលដៅ: {e.target.tagName}, ទីតាំង X: {e.clientX}/);
});

// Keyboard Event Properties
input.addEventListener("keydown", e => {
    console.log(/គ្រាប់ចុច: {e.key}, កូដ: {e.code}/);
});
10. Error Handling - ការគ្រប់គ្រងកំហុស
ការគ្រប់គ្រងកំហុសអនុញ្ញាតឱ្យអ្នកចាប់ និងដោះស្រាយបញ្ហាដែលកើតឡើងអំឡុងពេលប្រតិបត្តិកម្មវិធី។

10.1 Try-Catch Block
javascript
try {
    const data = JSON.parse("ខ្សែអក្សរមិនត្រឹមត្រូវ");
    console.log(data);
} catch (error) {
    console.log("កំហុស:", error.message);
} finally {
    console.log("បញ្ចប់ការព្យាយាម");
}
10.2 Throwing Errors
javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("មិនអាចចែកជាមួយសូន្យបានទេ");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("កំហុស:", error.message);
}
10.3 Custom Error Objects
javascript
// បង្កើត Custom Error
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateInput(input) {
    if (!input) {
        throw new ValidationError("បញ្ចូលទិន្នន័យមិនត្រឹមត្រូវ", "input");
    }
    return input;
}

try {
    validateInput("");
} catch (error) {
    console.log(/កំហុស: {error.name}, សារ: {error.message}, វាល: {error.field}/);
}
11. JSON (JavaScript Object Notation)
JSON គឺជាទម្រង់ទិន្នន័យស្រាលសម្រាប់ផ្លាស់ប្តូរទិន្នន័យរវាងភាគីផ្សេងៗ។

11.1 Parsing JSON: JSON.parse()
javascript
try {
    const jsonString = '{"name": "សុខា", "age": 25, "city": "ភ្នំពេញ"}';
    const obj = JSON.parse(jsonString);
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.city);

    // ឧទាហរណ៍ JSON មិនត្រឹមត្រូវ
    const invalidJson = '{name: "សុខា"}';
    JSON.parse(invalidJson); // នឹងបណ្តាលឱ្យមានកំហុស
} catch (error) {
    console.log("កំហុស:", error.message);
}
11.2 Stringifying JSON: JSON.stringify()
javascript
const obj = {
    name: "វណ្ណៈ",
    age: 30,
    city: "សៀមរាប",
    hobbies: ["អានសៀវភៅ", "ធ្វើដំណើរ"]
};

// ការបំប្លែងជា JSON
const jsonString = JSON.stringify(obj);
console.log(jsonString);

// ការបំប្លែងជាមួយទម្រង់ស្អាត
const prettyJson = JSON.stringify(obj, null, 2);
console.log(prettyJson);
12. Web APIs - API បណ្តាញ
Web APIs គឺជាចំណុចប្រទាក់ដែលផ្តល់ដោយកម្មវិធីរុករកដើម្បីអន្តរកម្មជាមួយមុខងារផ្សេងៗ។

12.1 Local Storage and Session Storage
javascript
// localStorage
localStorage.setItem("username", "សុខា");
console.log(localStorage.getItem("username"));

// sessionStorage
sessionStorage.setItem("sessionId", "12345");
console.log(sessionStorage.getItem("sessionId"));

// លុបទិន្នន័យ
localStorage.removeItem("username");
console.log(localStorage.getItem("username"));
12.2 Cookies
javascript
// កំណត់ Cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

setCookie("user", "វណ្ណៈ", 7);

// អាន Cookie
function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let c of ca) {
        c = c.trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

console.log(getCookie("user"));
12.3 Fetch API
javascript
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data.name);
    } catch (error) {
        console.log("កំហុស:", error.message);
    }
}

fetchData();
12.4 Geolocation API
javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log("រយៈទទឹង:", position.coords.latitude);
            console.log("រយៈបណ្តោយ:", position.coords.longitude);
        },
        error => {
            console.log("កំហុស:", error.message);
        }
    );
} else {
    console.log("Geolocation មិនត្រូវបានគាំទ្រទេ");
}
12.5 Canvas API
HTML:

html
<canvas id="myCanvas" width="200" height="100"></canvas>
JavaScript:

javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(50, 20, 100, 60);

ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.strokeRect(20, 10, 50, 30);
12.6 Audio/Video API
HTML:

html
<audio id="myAudio" src="sample.mp3"></audio>
<button onclick="playAudio()">ចាក់</button>
<button onclick="pauseAudio()">ផ្អាក</button>
JavaScript:

javascript
const audio = document.getElementById("myAudio");

function playAudio() {
    audio.play();
    console.log("កំពុងចាក់អូឌីយ៉ូ");
}

function pauseAudio() {
    audio.pause();
    console.log("អូឌីយ៉ូត្រូវបានផ្អាក");
}
13. Regular Expressions - កន្សោមនិយ័ត
Regular Expressions គឺជាលំនាំដែលប្រើសម្រាប់ផ្គូផ្គង ស្វែងរក ឬជំនួសអក្សរនៅក្នុងខ្សែអក្សរ។

13.1 Basic Syntax
javascript
// អក្សរត្រង់ និង Metacharacters
const literal = /សួស្តី/;
const digit = /\\d+/; // ផ្គូផ្គងលេខ 1 ឬច្រើន
const word = /\\w+/; // ផ្គូផ្គងអក្សរ លេខ ឬ _

// Quantifiers
const oneOrMore = /a+/; // a មួយឬច្រើន
const exactlyThree = /\\d{3}/; // លេខ 3 ខ្ទង់
const optional = /colou?r/; // u ជាជម្រើស

console.log(literal.test("សួស្តី ពិភពលោក")); // true
console.log(digit.test("ឆ្នាំ 2025")); // true
console.log(word.test("អក្សរ_123")); // true
console.log(oneOrMore.test("aaa")); // true
console.log(exactlyThree.test("123")); // true
console.log(optional.test("color")); // true
console.log(optional.test("colour")); // true
13.2 Testing Patterns: test(), exec()
javascript
const pattern = /\\d+/g; // ផ្គូផ្គងលេខទាំងអស់
const text = "ឆ្នាំ 2025 និង 123";

// test()
console.log(pattern.test(text)); // true

// exec()
let result;
while ((result = pattern.exec(text)) !== null) {
    console.log(/ផ្គូផ្គង: {result[0]}, ទីតាំង: {result.index}/);
}
13.3 Matching and Replacing: match(), replace()
javascript
const text = "សួស្តី 2025! ជួបគ្នាឆ្នាំ 2026";

// match()
const numbers = text.match(/\\d+/g);
console.log(numbers);

// replace()
const replaced = text.replace(/d+/g, "ឆ្នាំថ្មី");
console.log(replaced);
14. Modules in JavaScript - ម៉ូឌុលនៅក្នុង JavaScript
Modules អនុញ្ញាតឱ្យអ្នកបំបែកកូដទៅជាឯកសារដាច់ដោយឡែក។

14.1 Importing and Exporting Modules
javascript
// math.js
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

// main.js
import { add, PI } from './math.js';

console.log(add(2, 3));
console.log(PI);
14.2 Dynamic Imports: import()
javascript
// utils.js
export function greet(name) {
    return /សួស្តី ${name}/;
}

// main.js
async function loadModule() {
    try {
        const module = await import('./utils.js');
        console.log(module.greet("សុខា"));
    } catch (error) {
        console.log("កំហុស:", error.message);
    }
}

loadModule();
14.3 Export Default vs Named Exports
javascript
// calculations.js
export default function multiply(a, b) {
    return a * b;
}

export const divide = (a, b) => a / b;

// main.js
import multiply, { divide } from './calculations.js';

console.log(multiply(4, 5));
console.log(divide(10, 2));
14.4 Modular Code Structure
javascript
// utils/math.js
export const sum = (a, b) => a + b;

// utils/dom.js
export function updateText(id, text) {
    document.getElementById(id).textContent = text;
}

// main.js
import { sum } from './utils/math.js';
import { updateText } from './utils/dom.js';

console.log(sum(10, 20));
updateText('myDiv', 'សួស្តី ពិភពលោក');
15. Object-Oriented JavaScript - JavaScript តម្រង់ទិសវត្ថុ
ការសរសេរកម្មវិធីតម្រង់ទិសវត្ថុ (OOP) អនុញ្ញាតឱ្យអ្នករៀបចំកូដជាវត្ថុដែលមានលក្ខណៈសម្បត្តិ និងវិធីសាស្ត្រ។

15.1 Classes and Objects
javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return /សួស្តី ខ្ញុំឈ្មោះ {this.name}/;
    }
}

const person = new Person("សុខា", 25);
console.log(person.name);
console.log(person.age);
console.log(person.greet());
15.2 Constructor Functions
javascript
function Car(brand, model) {
    this.brand = brand;
    this.model = model;

    this.drive = function() {
        return /{this.brand} {this.model} កំពុងបើកបរ/;
    };
}

const car = new Car("Toyota", "Camry");
console.log(car.brand);
console.log(car.model);
console.log(car.drive());
15.3 Inheritance
javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return /{this.name} បញ្ចេញសំឡេង/;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return /{this.name} ព្រុស: វ៉ុហ្វ!/;
    }
}

const dog = new Dog("ប៊ុនធឿន", "Golden Retriever");
console.log(dog.name);
console.log(dog.breed);
console.log(dog.speak());
15.4 Getters and Setters
javascript
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 0) {
            this._name = value;
        } else {
            console.log("ឈ្មោះមិនអាចទទេបានទេ");
        }
    }
}

const user = new User("វណ្ណៈ");
console.log(user.name);
user.name = "សុភា";
console.log(user.name);
user.name = "";
15.5 Static Methods
javascript
class MathUtils {
    static square(number) {
        return number * number;
    }

    static isEven(number) {
        return number % 2 === 0;
    }
}

console.log(MathUtils.square(5));
console.log(MathUtils.isEven(4));
console.log(MathUtils.isEven(7));
16. Error Handling & Debugging - ការគ្រប់គ្រងកំហុស និងការកែកូដ
16.1 Console API
javascript
const user = { name: "សុខា", age: 25, city: "ភ្នំពេញ" };

// console.log()
console.log("អ្នកប្រើ:", user);

// console.error()
console.error("កំហុស: ទិន្នន័យមិនត្រឹមត្រូវ");

// console.table()
console.table(user);
16.2 Debugging Techniques: Breakpoints
javascript
function calculateTotal(items) {
    let total = 0;
    debugger; // ផ្អាកនៅទីនេះ
    for (let item of items) {
        total += item.price;
    }
    return total;
}

const items = [
    { name: "សៀវភៅ", price: 10 },
    { name: "ប៊ិច", price: 2 }
];

console.log(calculateTotal(items));
16.3 Error Stacks
javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("មិនអាចចែកជាមួយសូន្យបានទេ");
    }
    return a / b;
}

function calculate(a, b) {
    return divide(a, b);
}

try {
    calculate(10, 0);
} catch (error) {
    console.error("កំហុស:", error.message);
    console.log("ជង់កំហុស:", error.stack);
}
17. JavaScript Design Patterns - គំរូរចនានៅក្នុង JavaScript
17.1 Module Pattern
javascript
const CounterModule = (function() {
    let count = 0; // ឯកជន

    return {
        increment: function() {
            count++;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(CounterModule.increment());
console.log(CounterModule.increment());
console.log(CounterModule.getCount());
console.log(CounterModule.count); // មិនអាចចូលប្រើបាន
17.2 Singleton Pattern
javascript
const Singleton = (function() {
    let instance;

    function createInstance() {
        return {
            config: { theme: "ភ្លឺ" },
            getConfig: function() {
                return this.config;
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const config1 = Singleton.getInstance();
const config2 = Singleton.getInstance();

console.log(config1.getConfig());
console.log(config2.getConfig());
console.log(config1 === config2);
17.3 Observer Pattern
javascript
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log(/ទទួលបានទិន្នន័យ: {data}/);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify("សួស្តី ពិភពលោក");
17.4 Factory Pattern
javascript
class Car {
    constructor(model) {
        this.model = model;
    }

    drive() {
        return /{this.model} កំពុងបើកបរ/;
    }
}

class Truck {
    constructor(model) {
        this.model = model;
    }

    haul() {
        return /{this.model} កំពុងដឹកទំនិញ/;
    }
}

class VehicleFactory {
    static createVehicle(type, model) {
        switch (type) {
            case "car":
                return new Car(model);
            case "truck":
                return new Truck(model);
            default:
                throw new Error("ប្រភេទយានយន្តមិនស្គាល់");
        }
    }
}

const car = VehicleFactory.createVehicle("car", "Toyota");
const truck = VehicleFactory.createVehicle("truck", "Isuzu");

console.log(car.drive());
console.log(truck.haul());
17.5 Decorator Pattern
javascript
class Coffee {
    cost() {
        return 5;
    }

    description() {
        return "កាហ្វេធម្មតា";
    }
}

function addMilk(coffee) {
    return {
        cost: function() {
            return coffee.cost() + 2;
        },
        description: function() {
            return /{coffee.description()}, បន្ថែមទឹកដោះគោ/;
        }
    };
}

function addSugar(coffee) {
    return {
        cost: function() {
            return coffee.cost() + 1;
        },
        description: function() {
            return /{coffee.description()}, បន្ថែមស្ករ/;
        }
    };
}

let coffee = new Coffee();
coffee = addMilk(coffee);
coffee = addSugar(coffee);

console.log(coffee.description());
console.log(coffee.cost());
18. Advanced JavaScript Concepts - គោលគំនិតកម្រិតខ្ពស់
18.1 Closure
javascript
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
18.2 Currying
javascript
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

const add5 = curryAdd(5);
const add5and3 = add5(3);

console.log(add5and3(2));
console.log(curryAdd(1)(2)(3));
18.3 Higher-Order Functions
javascript
function withLogging(fn) {
    return function(...args) {
        console.log(/ហៅ {fn.name} ជាមួយ {args}/);
        return fn(...args);
    };
}

function multiply(a, b) {
    return a * b;
}

const loggedMultiply = withLogging(multiply);

console.log(loggedMultiply(3, 4));
console.log(multiply(3, 4));
18.4 Memoization
javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        cache[key] = fn(...args);
        return cache[key];
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFibonacci = memoize(fibonacci);

console.log(memoFibonacci(10));
console.log(memoFibonacci(10)); // ប្រើឃ្លាំងសម្ងាត់
18.5 Debouncing and Throttling
javascript
function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

function throttle(fn, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const log = () => console.log("ហៅអនុគមន៍");

const debouncedLog = debounce(log, 1000);
const throttledLog = throttle(log, 1000);

// ការហៅច្រើនដង ប៉ុន្តែប្រតិបត្តិតែម្តងបន្ទាប់ពី 1 វិនាទី
debouncedLog();
debouncedLog();
debouncedLog();

// ការហៅច្រើនដង ប៉ុន្តែប្រតិបត្តិរៀងរាល់ 1 វិនាទី
throttledLog();
throttledLog();
throttledLog();
18.6 Async Iterators
javascript
async function* asyncGenerator() {
    const data = [1, 2, 3];
    for (const item of data) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield item;
    }
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();
18.7 Generators (function*, yield)
javascript
function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const range = rangeGenerator(1, 5);

console.log(range.next().value);
console.log(range.next().value);
console.log([...range]);
19. Testing in JavaScript - ការធ្វើតេស្តនៅក្នុង JavaScript
19.1 Unit Testing with Jest
javascript
// math.js
export function add(a, b) {
    return a + b;
}

// math.test.js
import { add } from './math';

describe('Math functions', () => {
    test('add should return sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });
});
19.2 Test-Driven Development (TDD)
javascript
// multiply.test.js
describe('Multiply function', () => {
    test('should multiply two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(-2, 4)).toBe(-8);
    });
});

// multiply.js (បន្ទាប់ពីតេស្តបរាជ័យ)
export function multiply(a, b) {
    return a * b;
}
19.3 Mocking with Jest
javascript
// api.js
export async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    return response.json();
}

// dataService.js
import { fetchData } from './api';

export async function getUserData() {
    const data = await fetchData();
    // return អ្នកប្រើ: {data.name};
}

// dataService.test.js
jest.mock('./api');

import { fetchData } from './api';
import { getUserData } from './dataService';

describe('DataService', () => {
    test('getUserData returns formatted user name', async () => {
        fetchData.mockResolvedValue({ name: 'សុខា' });
        const result = await getUserData();
        expect(result).toBe('អ្នកប្រើ: សុខា');
        expect(fetchData).toHaveBeenCalled();
    });
});
20. Performance Optimization - ការបង្កើនប្រសិទ្ធភាពនៃការអនុវត្ត
20.1 Memory Management: Garbage Collection
javascript
function createObjects() {
    let obj = { data: new Array(1000000).fill('ទិន្នន័យ') }; // បម្រុងទុកអង្គចងចាំ
    obj = null; // អនុញ្ញាតឱ្យ Garbage Collector សម្អាត
}

createObjects();
console.log('វត្ថុត្រូវបានដោះលែងសម្រាប់ Garbage Collection');
20.2 Lazy Loading
HTML:

html
<!DOCTYPE html>
<html>
<head>
    <title>Lazy Loading Example</title>
</head>
<body>
    <img src="placeholder.jpg" data-src="large-image.jpg" alt="រូបភាព" loading="lazy">
    <button onclick="loadModule()">ផ្ទុកម៉ូឌុល</button>

    <script>
        // ការផ្ទុករូបភាពយឺត
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.src = img.dataset.src;
        });

        // ការផ្ទុកម៉ូឌុល JavaScript យឺត
        async function loadModule() {
            const module = await import('./heavyModule.js');
            console.log(module.default());
        }
    </script>
</body>
</html>

<!-- heavyModule.js -->
export default function() {
    return 'ម៉ូឌុលធ្ងន់ត្រូវបានផ្ទុក';
}
20.3 Event Delegation
HTML:

html
<!DOCTYPE html>
<html>
<head>
    <title>Event Delegation Example</title>
</head>
<body>
    <ul id="itemList">
        <li>ធាតុ 1</li>
        <li>ធាតុ 2</li>
    </ul>
    <button onclick="addItem()">បន្ថែមធាតុ</button>

    <script>
        document.getElementById('itemList').addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                console.log(/ចុចលើ: {event.target.textContent}/);
            }
        });

        function addItem() {
            const li = document.createElement('li');
            li.textContent = /ធាតុ /${document.getElementsByTagName('li').length + 1}/;
            document.getElementById('itemList').appendChild(li);
        }
    </script>
</body>
</html>
20.4 Async and Defer Scripts
HTML:

html
<!DOCTYPE html>
<html>
<head>
    <title>Async and Defer Example</title>
    <!-- ស្គ្រីបឯករាជ្យដែលមិនអាស្រ័យលើ DOM -->
    <script async src="analytics.js"></script>
    <!-- ស្គ្រីបដែលត្រូវការ DOM -->
    <script defer src="domScript.js"></script>
</head>
<body>
    <div id="content">សួស្តី</div>
</body>
</html>

<!-- analytics.js -->
console.log('Analytics ត្រូវបានផ្ទុក');

<!-- domScript.js -->
document.getElementById('content').textContent = 'សួស្តី ពិភពលោក';
សង្ខេប
មេរៀននេះបានគ្របដណ្តប់លើគោលគំនិតសំខាន់ៗនៃ JavaScript ទាំងមូល៖

មូលដ្ឋានគ្រឹះ៖ អថេរ, ប្រភេទទិន្នន័យ, ប្រតិបត្តិករ, និងការបម្លែងប្រភេទទិន្នន័យ

លំហូរគ្រប់គ្រង៖ លក្ខខណ្ឌ (if, switch) និងរង្វិលជុំ (for, while, for...in, for...of)

អនុគមន៍៖ function declarations, arrow functions, parameters, closures, callbacks, IIFE

វត្ថុ និងអារេ៖ object literals, destructuring, spread operator, array methods

ES6 Features៖ let/const, template literals, destructuring, modules, classes

អសមកាល៖ callbacks, promises, async/await, event loop

DOM Manipulation៖ accessing elements, modifying content, event handling, styling

Web APIs៖ localStorage, cookies, Fetch API, Geolocation, Canvas

ការគ្រប់គ្រងកំហុស៖ try-catch, throwing errors, custom errors

គំរូរចនា៖ Module, Singleton, Observer, Factory, Decorator

គោលគំនិតកម្រិតខ្ពស់៖ closures, currying, memoization, debouncing, generators

ការធ្វើតេស្ត៖ unit testing, TDD, mocking

ការបង្កើនប្រសិទ្ធភាព៖ lazy loading, event delegation, async/defer

ការយល់ដឹងអំពីគោលគំនិតទាំងនេះគឺជាមូលដ្ឋានគ្រឹះសម្រាប់ការសរសេរកម្មវិធី JavaScript ដែលមានគុណភាពខ្ពស់ អាចថែទាំបាន និងមានប្រសិទ្ធភាព។ `
  },
  {
    id: 4,
    slug: "python",
    title: "Python មូលដ្ឋាន",
    description: "រៀនភាសា Python ដែលងាយស្រួលសម្រាប់អ្នកចាប់ផ្ដើម",
    level: "ថ្នាក់ដើម",
    icon: "🐍",
    language: "python",
    content: `Python គឺជាភាសាសរសេរកម្មវិធីដែលពេញនិយមបំផុតមួយ ព្រោះវាមានវាក្យសម្ពន្ធងាយស្រួលអាន និងសាមញ្ញ។`,
    codeExample: `1. Introduction to Python - សេចក្តីផ្តើមអំពី Python
Python គឺជាភាសាសរសេរកម្មវិធីដែលមានភាពបត់បែនខ្ពស់ និងងាយស្រួលសម្រាប់អ្នកចាប់ផ្តើមរៀន។ វាត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយក្នុងការអភិវឌ្ឍគេហទំព័រ ការវិភាគទិន្នន័យ បញ្ញាសិប្បនិម្មិត និងការងារជាច្រើនផ្សេងទៀត។ ផ្នែកនេះនឹងផ្តល់នូវទិដ្ឋភាពទូទៅអំពី Python និងរបៀបចាប់ផ្តើមប្រើប្រាស់វា។

1.1 What is Python? - Python ជាអ្វី?
Python គឺជាភាសាសរសេរកម្មវិធី high-level ដែលត្រូវបានបង្កើតឡើងដោយ Guido van Rossum នៅឆ្នាំ 1991។ វាល្បីល្បាញដោយសារមាន syntax សាមញ្ញ និងអាចអានបានយ៉ាងងាយស្រួល ដែលធ្វើឱ្យវាស័ក្តិសមសម្រាប់អ្នករៀនថ្មី។

លក្ខណៈពិសេស៖

Syntax សាមញ្ញ និងងាយស្រួលអាន។
គាំទ្រទម្រង់សរសេរកម្មវិធីច្រើនដូចជា object-oriented និង functional។
មាន libraries និង tools ជាច្រើនសម្រាប់ការអភិវឌ្ឍ។
1.2 Why Learn Python? - ហេតុអ្វីត្រូវរៀន Python?
ការរៀន Python មានសារៈសំខាន់ព្រោះវាជាភាសាដែលងាយស្រួលរៀន និងមានតម្រូវការខ្ពស់នៅក្នុងទីផ្សារការងារ។ វាអាចប្រើប្រាស់បានសម្រាប់ការងារផ្សេងៗដូចជា ការសរសេរកម្មវិធី ការវិភាគទិន្នន័យ និង machine learning។ លើសពីនេះ Python មានសហគមន៍អ្នកប្រើប្រាស់ដ៏ធំដែលផ្តល់ការគាំទ្រ និងធនធានសិក្សាជាច្រើន។

1.3 Installing Python (Windows, macOS, Linux) - ការដំឡើង Python (Windows, macOS, Linux)
ដើម្បីប្រើ Python អ្នកត្រូវដំឡើងវានៅលើកុំព្យូទ័ររបស់អ្នកជាមុនសិន។ ជំហានខាងក្រោមនេះនឹងណែនាំពីរបៀបដំឡើង Python នៅលើប្រព័ន្ធប្រតិបត្តិការ Windows, macOS និង Linux។

ជំហានដំឡើង៖

ចូលទៅកាន់គេហទំព័រផ្លូវការ https://www.python.org/downloads/ ហើយទាញយកកំណែចុងក្រោយបំផុត។
បើកឯកសារដែលបានទាញយក ហើយធ្វើតាមការណែនាំតាមប្រព័ន្ធប្រតិបត្តិការរបស់អ្នក។
បន្ទាប់ពីដំឡើងរួច ពិនិត្យកំណែ Python ដោយប្រើពាក្យបញ្ជា៖
python --version
ឧទាហរណ៍លទ្ធផល៖ Python 3.11.4
1.4 Running Python Programs (IDLE, VS Code, PyCharm) - ការដំណើរការកម្មវិធី Python (IDLE, VS Code, PyCharm)
បន្ទាប់ពីដំឡើង Python អ្នកអាចដំណើរការកម្មវិធី Python បានតាមវិធីផ្សេងៗដូចជា ប្រើ IDLE (ឧបករណ៍ដែលភ្ជាប់មកជាមួយ Python), Visual Studio Code (VS Code), ឬ PyCharm។ ខាងក្រោមនេះគឺជាឧទាហរណ៍មួយដោយប្រើ command line។

ឧទាហរណ៍ការដំណើរការ៖

# បង្កើតឯកសារឈ្មោះ hello.py
echo "print('Hello, World!')" > hello.py

# ដំណើរការឯកសារ hello.py
python hello.py
ការពន្យល់៖ ពាក្យបញ្ជាខាងលើបង្កើតឯកសារមួយឈ្មោះ hello.py ដែលមានកូដ Python សម្រាប់បោះពុម្ព "Hello, World!"។ បន្ទាប់មក យើងប្រើ python hello.py ដើម្បីដំណើរការវា។

លទ្ធផល៖

Hello, World!
ប្រសិនបើអ្នកប្រើ IDLE, VS Code, ឬ PyCharm អ្នកអាចសរសេរកូដនៅក្នុង editor របស់ពួកគេ ហើយចុច "Run" ដើម្បីដំណើរការវាដោយផ្ទាល់។

2. Python Basics (Syntax & Variables) - មូលដ្ឋានគ្រឹះ Python (Syntax និង Variables)
ផ្នែកនេះនឹងណែនាំអំពីមូលដ្ឋានគ្រឹះនៃ Python ដែលរួមមាន syntax និង variables។ វាជាជំហានដំបូងដ៏សំខាន់សម្រាប់អ្នកចាប់ផ្តើមរៀន Python ដើម្បីយល់ពីរបៀបសរសេរកូដឱ្យត្រឹមត្រូវ។

2.1 Python Syntax & Indentation - Syntax និង Indentation របស់ Python
Python ប្រើ indentation (ការចូលបន្ទាត់) ដើម្បីកំណត់ blocks នៃកូដ ជំនួសឱ្យការប្រើ curly braces ដូចភាសាផ្សេងទៀត។ Syntax របស់ Python ត្រូវបានរចនាឱ្យសាមញ្ញ និងងាយយល់។

ឧទាហរណ៍៖

# ឧទាហរណ៍ syntax និង indentation
if 5 > 2:
    print("5 ធំជាង 2")
else:
    print("5 មិនធំជាង 2")
ការពន្យល់៖ នៅក្នុងឧទាហរណ៍ខាងលើ កូដក្រោម if និង else ត្រូវបានចូលបន្ទាត់ (indent) ដើម្បីបង្ហាញថាវាជា block មួយ។ បើគ្មាន indentation ត្រឹមត្រូវ Python នឹងបង្ហាញ error។

លទ្ធផល៖

5 ធំជាង 2
2.2 Variables & Constants - Variables និង Constants
Variables គឺជាទីតាំងផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន ចំណែក constants គឺជាតម្លៃដែលមិនផ្លាស់ប្តូរ។ នៅក្នុង Python អ្នកបង្កើត variable ដោយកំណត់ឈ្មោះ និងតម្លៃដោយប្រើសញ្ញា =។

ឧទាហរណ៍៖

# Variables
name = "Sok"
age = 25

# Constants (ជាទម្លាប់ សរសេរជាអក្សរធំ)
PI = 3.14

print(name)
print(age)
print(PI)
ការពន្យល់៖ នៅទីនេះ name និង age ជា variables ដែលអាចផ្លាស់ប្តូរតម្លៃបាន។ PI ជា constant ដែលជាទម្លាប់សរសេរជាអក្សរធំដើម្បីបង្ហាញថាវាមិនគួរផ្លាស់ប្តូរ។

លទ្ធផល៖

Sok
25
3.14
2.3 Data Types (int, float, str, bool, complex) - ប្រភេទទិន្នន័យ (int, float, str, bool, complex)
Python មាន data types ជាច្រើនដូចជា int (ចំនួនគត់), float (ចំនួនទសភាគ), str (អក្សរ), bool (ត្រូវ/ខុស), និង complex (ចំនួនស្មុគស្មាញ)។

ឧទាហរណ៍៖

# Data types
integer = 10          # int
floating = 3.14       # float
string = "Hello"      # str
boolean = True        # bool
complex_num = 2 + 3j  # complex

print(type(integer))
print(type(floating))
print(type(string))
print(type(boolean))
print(type(complex_num))
ការពន្យល់៖ យើងប្រើ type() ដើម្បីពិនិត្យប្រភេទទិន្នន័យនៃ variable នីមួយៗ។ ឧទាហរណ៍ខាងលើបង្ហាញ data types ផ្សេងៗ។

លទ្ធផល៖

<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'complex'>
2.4 Type Casting (int(), float(), str()) - ការប្តូរប្រភេទទិន្នន័យ (int(), float(), str())
Type casting គឺជាការប្តូរប្រភេទទិន្នន័យពីមួយទៅមួយផ្សេងទៀតដោយប្រើ int(), float(), ឬ str()។

ឧទាហរណ៍៖

# Type casting
num_str = "123"
num_int = int(num_str)    # ប្តូរពី str ទៅ int
num_float = float(num_str) # ប្តូរពី str ទៅ float
text = str(456)           # ប្តូរពី int ទៅ str

print(num_int)
print(num_float)
print(text)
ការពន្យល់៖ នៅទីនេះ "123" ត្រូវបានប្តូរទៅជា int និង float ហើយ 456 ត្រូវបានប្តូរទៅជា str។

លទ្ធផល៖

123
123.0
456
2.5 Taking User Input (input()) - ការទទួលយកទិន្នន័យពីអ្នកប្រើ (input())
នៅក្នុង Python អ្នកអាចប្រើ input() ដើម្បីទទួលយកទិន្នន័យពីអ្នកប្រើប្រាស់ ហើយរក្សាទុកវាក្នុង variable។

ឧទាហរណ៍៖

# Taking user input
name = input("បញ្ចូលឈ្មោះរបស់អ្នក: ")
age = int(input("បញ្ចូលអាយុរបស់អ្នក: "))

print(f"សួស្តី {name}! អ្នកមានអាយុ {age} ឆ្នាំ។")
ការពន្យល់៖ input() ស្នើសុំអ្នកប្រើបញ្ចូលទិន្នន័យ។ យើងប្រើ int() ដើម្បីប្តូអាយុពី str ទៅ int។

លទ្ធផល (ឧទាហរណ៍បញ្ចូល "Sok" និង "25")៖

បញ្ចូលឈ្មោះរបស់អ្នក: Sok
បញ្ចូលអាយុរបស់អ្នក: 25
សួស្តី Sok! អ្នកមានអាយុ 25 ឆ្នាំ។
3. Operators in Python - ប្រមាណវិធីនៅក្នុង Python
Operators គឺជានិមិត្តសញ្ញាដែលប្រើសម្រាប់ធ្វើប្រតិបត្តិការលើ variables និងតម្លៃនានា។ នៅក្នុង Python មាន operators ជាច្រើនប្រភេទដែលជួយសម្រួលដល់ការសរសេរកម្មវិធី ដូចជា ការគណនា ការប្រៀបធៀប និងការតភ្ជាប់តក្កៈ។

3.1 Arithmetic Operators (+, -, *, /, //, %, **) - ប្រមាណវិធីគណិត (+, -, *, /, //, %, **)
Arithmetic operators ត្រូវបានប្រើសម្រាប់ការគណនាគណិតសាស្ត្រដូចជា បូក ដក គុណ និងចែក។

ឧទាហរណ៍៖

a = 10
b = 3

print(a + b)  # បូក
print(a - b)  # ដក
print(a * b)  # គុណ
print(a / b)  # ចែក (លទ្ធផលជា float)
print(a // b) # ចែកយកតែផ្នែកគត់
print(a % b)  # យកសំណល់
print(a ** b) # លើកកំពស់ (គុណ b ដង)
ការពន្យល់៖ + បូក, - ដក, * គុណ, / ចែក (លទ្ធផលជា float), // ចែកយកតែផ្នែកគត់, % យកសំណល់, ** លើកកំពស់។

លទ្ធផល៖

13
7
30
3.3333333333333335
3
1
1000
3.2 Comparison Operators (==, !=, >, <, >=, <=) - ប្រមាណវិធីប្រៀបធៀប (==, !=, >, <, >=, <=)
Comparison operators ត្រូវបានប្រើដើម្បីប្រៀបធៀបតម្លៃពីរ ហើយផ្តល់លទ្ធផលជា True ឬ False។ វាមានប្រយោជន៍សម្រាប់ការសម្រេចចិត្តនៅក្នុងកម្មវិធី។

ឧទាហរណ៍៖

x = 5
y = 10

print(x == y)  # ស្មើគ្នា
print(x != y)  # មិនស្មើគ្នា
print(x > y)   # ធំជាង
print(x < y)   # តូចជាង
print(x >= y)  # ធំជាងឬស្មើ
print(x <= y)  # តូចជាងឬស្មើ
ការពន្យល់៖ == ពិនិត្យថាតើតម្លៃស្មើគ្នា, != ពិនិត្យថាតើមិនស្មើគ្នា, ...

លទ្ធផល៖

False
True
False
True
False
True
3.3 Logical Operators (and, or, not) - ប្រមាណវិធីតក្កៈ (and, or, not)
Logical operators ត្រូវបានប្រើដើម្បីផ្សំលក្ខខណ្ឌច្រើន ហើយផ្តល់លទ្ធផលជា True ឬ False។

ឧទាហរណ៍៖

a = True
b = False

print(a and b)  # ទាំងពីរត្រូវតែ True
print(a or b)   # យ៉ាងហោចណាស់មួយ True
print(not a)    # ប្តូរពី True ទៅ False ឬផ្ទុយមកវិញ
ការពន្យល់៖ and តម្រូវឱ្យលក្ខខណ្ឌទាំងពីរពិត, or តម្រូវឱ្យយ៉ាងហោចណាស់មួយពិត, not ប្តូរតម្លៃតក្កៈ។

លទ្ធផល៖

False
True
False
3.4 Bitwise Operators (&, |, ^, ~, <<, >>) - ប្រមាណវិធីប៊ីត (&, |, ^, ~, <<, >>)
Bitwise operators ធ្វើការលើ bits នៃចំនួនគត់ (binary) ដើម្បីអនុវត្តប្រតិបត្តិការតក្កៈនៅកម្រិតទាប។

ឧទាហរណ៍៖

x = 5  # binary: 0101
y = 3  # binary: 0011

print(x & y)   # AND (0101 & 0011 = 0001)
print(x | y)   # OR (0101 | 0011 = 0111)
print(x ^ y)   # XOR (0101 ^ 0011 = 0110)
print(~x)      # NOT (~0101 = -0110)
print(x << 1)  # Left shift (0101 << 1 = 1010)
print(x >> 1)  # Right shift (0101 >> 1 = 0010)
ការពន្យល់៖ & ធ្វើ AND, | ធ្វើ OR, ^ ធ្វើ XOR, ~ ប្តូរប៊ីត, << ផ្លាស់ទៅឆ្វេង, >> ផ្លាស់ទៅស្តាំ។

លទ្ធផល៖

1
7
6
-6
10
2
3.5 Assignment Operators (=, +=, -=, etc.) - ប្រមាណវិធីកំណត់តម្លៃ (=, +=, -=, ជាដើម)
Assignment operators ត្រូវបានប្រើដើម្បីកំណត់តម្លៃទៅ variables ឬធ្វើប្រតិបត្តិការរួមជាមួយការកំណត់តម្លៃ។

ឧទាហរណ៍៖

x = 10
print(x)

x += 5  # x = x + 5
print(x)

x -= 3  # x = x - 3
print(x)

x *= 2  # x = x * 2
print(x)

x /= 4  # x = x / 4
print(x)
ការពន្យល់៖ = កំណត់តម្លៃ, += បូកហើយកំណត់, -= ដកហើយកំណត់, *= គុណហើយកំណត់, /= ចែកហើយកំណត់។

លទ្ធផល៖

10
15
12
24
6.0
4. Control Flow (Conditions & Loops) - លំហូរគ្រប់គ្រង (លក្ខខណ្ឌ និង រង្វិលជុំ)
Control flow នៅក្នុង Python អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដដោយប្រើលក្ខខណ្ឌ (conditions) និងរង្វិលជុំ (loops)។ ផ្នែកនេះនឹងពន្យល់ពីរបៀបប្រើ if, if else, if elseif else, for, និង while ដើម្បីធ្វើឱ្យកម្មវិធីមានភាពបត់បែន។

4.1 if-else Statements - សេចក្តីបញ្ជា if-else
if សេចក្តីបញ្ជាត្រូវបានប្រើដើម្បីសម្រេចចិត្តផ្អែកលើលក្ខខណ្ឌ។ វាអាចប្រើតែ if តែមួយ ឬរួមបញ្ចូលជាមួយ else និង elif ដើម្បីគ្រប់គ្រងលទ្ធផលផ្សេងៗ។ ប្រសិនបើលក្ខខណ្ឌពិត (True) កូដនឹងប្រតិបត្តិផ្នែកមួយ បើមិនដូច្នេះទេ វានឹងប្រតិបត្តិផ្នែកផ្សេង។

4.1.1 Simple if Statement - សេចក្តីបញ្ជា if សាមញ្ញ
if សាមញ្ញត្រូវបានប្រើនៅពេលអ្នកចង់ប្រតិបត្តិកូដតែនៅពេលលក្ខខណ្ឌមួយពិត។

ឧទាហរណ៍៖

temperature = 30

if temperature > 25:
    print("អាកាសធាតុក្តៅណាស់")
ការពន្យល់៖ if temperature > 25 ពិនិត្យថាតើសីតុណ្ហភាពធំជាង 25, បើពិត បោះពុម្ព 'អាកាសធាតុក្តៅណាស់', បើមិនពិត មិនធ្វើអ្វីទេ។

លទ្ធផល៖

អាកាសធាតុក្តៅណាស់
4.1.2 if-else Statement - សេចក្តីបញ្ជា if-else
if-else បន្ថែមផ្នែក else ដើម្បីប្រតិបត្តិកូដនៅពេលលក្ខខណ្ឌមិនពិត (False)។

ឧទាហរណ៍៖

age = 18

if age >= 18:
    print("អ្នកជាមនុស្សពេញវ័យ")
else:
    print("អ្នកនៅតែជាអនីតិជន")
ការពន្យល់៖ if age >= 18 ពិនិត្យថាតើអាយុធំជាងឬស្មើ 18, បើពិត បោះពុម្ព 'អ្នកជាមនុស្សពេញវ័យ', បើមិនពិត បោះពុម្ព 'អ្នកនៅតែជាអនីតិជន'។

លទ្ធផល៖

អ្នកជាមនុស្សពេញវ័យ
4.1.3 if-elif-else Statement - សេចក្តីបញ្ជា if-elif-else
if-elif-else អនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌច្រើន ដោយប្រើ elif (else if) សម្រាប់លក្ខខណ្ឌបន្ថែម និង else សម្រាប់ករណីផ្សេងទៀតទាំងអស់។

ឧទាហរណ៍៖

score = 75

if score >= 90:
    print("អ្នកបាននិទ្ទេស A")
elif score >= 80:
    print("អ្នកបាននិទ្ទេស B")
elif score >= 70:
    print("អ្នកបាននិទ្ទេស C")
elif score >= 60:
    print("អ្នកបាននិទ្ទេស D")
else:
    print("អ្នកបាននិទ្ទេស F")
ការពន្យល់៖ if score >= 90 ពិនិត្យថាតើពិន្ទុធំជាងឬស្មើ 90, បើពិត បោះពុម្ព 'និទ្ទេស A', elif score >= 80 ពិនិត្យបន្ទាប់បើធំជាងឬស្មើ 80, បើពិត បោះពុម្ព 'និទ្ទេស B', បន្តពិនិត្យលក្ខខណ្ឌបន្ទាប់ៗទៀត, បើគ្មានលក្ខខណ្ឌណាពិត បោះពុម្ព 'និទ្ទេស F'។

លទ្ធផល៖

អ្នកបាននិទ្ទេស C
4.2 Nested if Statements - សេចក្តីបញ្ជា if ខាងក្នុង if
Nested if គឺជា if ដែលស្ថិតនៅក្នុង if មួយទៀត ដើម្បីពិនិត្យលក្ខខណ្ឌបន្ថែម។

ឧទាហរណ៍៖

score = 85

if score >= 60:
    print("អ្នកបានជាប់")
    if score >= 80:
        print("អបអរសាទរ! អ្នកបានពិន្ទុល្អណាស់")
else:
    print("អ្នកមិនបានជាប់ទេ")
ការពន្យល់៖ if score >= 60 ពិនិត្យថាតើពិន្ទុធំជាងឬស្មើ 60, បើពិត បោះពុម្ព 'អ្នកបានជាប់', ហើយបន្តពិនិត្យ <code>if score >= 80</code> ថាតើពិន្ទុធំជាងឬស្មើ 80, បើពិត បោះពុម្ពសារអបអរ, បើមិនមែន រំលងផ្នែកខាងក្នុង។

លទ្ធផល៖

អ្នកបានជាប់
អបអរសាទរ! អ្នកបានពិន្ទុល្អណាស់
4.3 for Loop & while Loop - រង្វិលជុំ for និង while
for និង while ត្រូវបានប្រើដើម្បីធ្វើការងារដដែលៗ។ for ប្រើសម្រាប់រង្វិលជុំលើលំដាប់ (sequence) ចំណែក while ប្រើសម្រាប់រង្វិលជុំដរាបណាលក្ខខណ្ឌនៅតែពិត។

ឧទាហរណ៍ (for loop)៖

for i in range(5):
    print(f"លេខ: {i}")
ឧទាហរណ៍ (while loop)៖

count = 0
while count < 5:
    print(f"ចំនួន: {count}")
    count += 1
ការពន្យល់៖ for i in range(5) រត់ពី 0 ដល់ 4, បោះពុម្ពលេខនីមួយៗ, while count < 5 រត់ដរាបណា count តូចជាង 5, បោះពុម្ព count ហើយបន្ថែម 1។

លទ្ធផល (for loop)៖

លេខ: 0
លេខ: 1
លេខ: 2
លេខ: 3
លេខ: 4
លទ្ធផល (while loop)៖

ចំនួន: 0
ចំនួន: 1
ចំនួន: 2
ចំនួន: 3
ចំនួន: 4
4.4 Loop Control (break, continue, pass) - ការគ្រប់គ្រងរង្វិលជុំ (break, continue, pass)
break, continue, និង pass ត្រូវបានប្រើដើម្បីគ្រប់គ្រងឥរិយាបថនៃរង្វិលជុំ។ break បញ្ចប់រង្វិលជុំ, continue រំលងទៅវដ្តបន្ទាប់, និង pass មិនធ្វើអ្វីទេ (placeholder)។

ឧទាហរណ៍៖

for i in range(10):
    if i == 5:
        break  # បញ្ចប់រង្វិលជុំនៅ i = 5
    if i == 3:
        continue  # រំលង i = 3
    if i == 7:
        pass  # មិនធ្វើអ្វីទេ
    print(f"លេខ: {i}")
ការពន្យល់៖ break បញ្ចប់រង្វិលជុំនៅ i = 5, continue រំលងការបោះពុម្ពនៅ i = 3, pass មិនធ្វើអ្វីទេនៅ i = 7 ប៉ុន្តែបន្តរង្វិលជុំ។

លទ្ធផល៖

លេខ: 0
លេខ: 1
លេខ: 2
លេខ: 4
5. Functions & Modules - អនុគមន៍ និង ម៉ូឌុល
Functions និង Modules ជួយរៀបចំកូដឱ្យមានរបៀប និងអាចប្រើឡើងវិញបាន។ Functions ជាបណ្តុំកូដដែលអាចហៅប្រើបានច្រើនដង ចំណែក Modules ជាឯកសារដែលផ្ទុក Functions និងកូដផ្សេងទៀត។

5.1 Defining & Calling Functions - ការកំណត់ និង ការហៅអនុគមន៍
Functions ត្រូវបានកំណត់ដោយប្រើ def ហើយអាចហៅប្រើបានដោយឈ្មោះរបស់វា។

ឧទាហរណ៍៖

def greet():
    print("សួស្តី! ស្វាគមន៍មកកាន់ Python")

greet()
ការពន្យល់៖ def greet() កំណត់អនុគមន៍ឈ្មោះ greet, នៅពេលហៅ <code>greet()</code> វាបោះពុម្ពសារ 'សួស្តី! ស្វាគមន៍មកកាន់ Python'។

លទ្ធផល៖

សួស្តី! ស្វាគមន៍មកកាន់ Python
5.2 Function Parameters (Positional, Default, Keyword, *args, **kwargs) - ប៉ារ៉ាម៉ែត្រអនុគមន៍
Functions អាចទទួល parameters ដើម្បីធ្វើការជាមួយទិន្នន័យផ្សេងៗ។ មានប្រភេទ parameters ជាច្រើន៖

ឧទាហរណ៍ (Positional Parameters)៖

def add(a, b):
    return a + b

print(add(3, 5))
ឧទាហរណ៍ (Default Parameters)៖

def greet(name="ភ្ញៀវ"):
    print(f"សួស្តី {name}")

greet()
greet("សុខា")
ឧទាហរណ៍ (Keyword Parameters)៖

def introduce(name, age):
    print(f"ខ្ញុំឈ្មោះ {name} អាយុ {age} ឆ្នាំ")

introduce(age=25, name="សុភី")
ឧទាហរណ៍ (*args)៖

def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))
ឧទាហរណ៍ (**kwargs)៖

def info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

info(name="សុធា", age=30, city="ភ្នំពេញ")
ការពន្យល់៖
- Positional ទទួលតម្លៃតាមលំដាប់ (a, b),
- Default ប្រើតម្លៃលំនាំដើមបើមិនបញ្ជាក់ (name='ភ្ញៀវ'),
- Keyword អនុញ្ញាតឱ្យបញ្ជាក់តម្លៃដោយឈ្មោះ (age=25),
- *args ទទួលចំនួនតម្លៃមិនកំណត់ជា tuple,
- **kwargs ទទួលចំនួនតម្លៃមិនកំណត់ជា dictionary។

លទ្ធផល៖

8
សួស្តី ភ្ញៀវ
សួស្តី សុខា
ខ្ញុំឈ្មោះ សុភី អាយុ 25 ឆ្នាំ
10
name: សុធា
age: 30
city: ភ្នំពេញ
5.3 Lambda Functions - អនុគមន៍ Lambda
lambda ជាអនុគមន៍អនាមិក (anonymous) ដែលកំណត់ក្នុងមួយជួរសម្រាប់ការងារសាមញ្ញ។

ឧទាហរណ៍៖

square = lambda x: x ** 2

print(square(5))
ការពន្យល់៖ lambda x: x ** 2 បង្កើតអនុគមន៍ដែលលើកកំពស់ x ទៅជាការ៉េ, ហៅ <code>square(5)</code> ដើម្បីគណនា 5²។

លទ្ធផល៖

25
5.4 Importing Modules (Built-in & Custom) - ការនាំចូលម៉ូឌុល
Modules អនុញ្ញាតឱ្យប្រើ functions និងកូដពីឯកសារផ្សេងទៀត។ មាន built-in modules (ភ្ជាប់មកជាមួយ Python) និង custom modules (បង្កើតដោយអ្នក)។

ឧទាហរណ៍ (Built-in Module)៖

import math

print(math.sqrt(16))
ឧទាហរណ៍ (Custom Module)៖ សន្មត់ថាមានឯកសារ <code>my_module.py</code> ដែលមានកូដ៖

# my_module.py
def say_hello():
    print("ជម្រាបសួរ!")
ហៅប្រើវា៖

import my_module

my_module.say_hello()
ការពន្យល់៖ import math នាំចូលម៉ូឌុល math ដែលភ្ជាប់មកជាមួយ, math.sqrt(16) គណនាឫសការ៉េនៃ 16, import my_module នាំចូលម៉ូឌុលផ្ទាល់ខ្លួន, my_module.say_hello() ហៅអនុគមន៍ពីម៉ូឌុល។

លទ្ធផល៖

4.0
ជម្រាបសួរ!
6. Data Structures - រចនាសម្ព័ន្ធទិន្នន័យ
Data Structures នៅក្នុង Python ជាវិធីសាស្ត្រសម្រាប់រៀបចំ និង រក្សាទុកទិន្នន័យ។ មានប្រភេទជាច្រើនដូចជា Lists, Tuples, Sets, និង Dictionaries ដែលប្រើសម្រាប់គោលបំណងផ្សេងៗគ្នា។

6.1 Lists (Dynamic Arrays) - បញ្ជី (អារេថាមវន្ត)
Lists ជាបញ្ជីដែលអាចផ្លាស់ប្តូរបាន (mutable) និងអាចផ្ទុកទិន្នន័យច្រើនប្រភេទ។

ឧទាហរណ៍៖

fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែឪឡឹក"]
fruits.append("ផ្លែស្ត្របឺរី")
print(fruits)
fruits[1] = "ផ្លែត្រសក់"
print(fruits)
ការពន្យល់៖ fruits = ["ផ្លែប៉ោម", ...] បង្កើតបញ្ជី, append() បន្ថែម 'ផ្លែស្ត្របឺរី' ទៅចុងបញ្ជី, fruits[1] = "ផ្លែត្រសក់" ផ្លាស់ប្តូរធាតុទី 1 (index 1)។

លទ្ធផល៖

['ផ្លែប៉ោម', 'ផ្លែចេក', 'ផ្លែឪឡឹក', 'ផ្លែស្ត្របឺរី']
['ផ្លែប៉ោម', 'ផ្លែត្រសក់', 'ផ្លែឪឡឹក', 'ផ្លែស្ត្របឺរី']
6.2 Tuples (Immutable Lists) - ទុប័ល (បញ្ជីមិនអាចផ្លាស់ប្តូរ)
Tuples ស្រដៀងនឹង Lists ប៉ុន្តែមិនអាចផ្លាស់ប្តូរបាន (immutable) បន្ទាប់ពីកំណត់។

ឧទាហរណ៍៖

colors = ("ក្រហម", "ខៀវ", "លឿង")
print(colors[0])
# colors[0] = "បៃតង" # នឹងបណ្តាលឱ្យមានកំហុស
ការពន្យល់៖ colors = ("ក្រហម", ...) បង្កើតទុប័ល, colors[0] ចូលប្រើធាតុទី 0, មិនអាចផ្លាស់ប្តូរធាតុបាន ព្រោះវា immutable។

លទ្ធផល៖

ក្រហម
6.3 Sets (Unique Collections) - សំណុំ (ការប្រមូលផ្ដុំតែមួយគត់)
Sets ជាការប្រមូលផ្តុំធាតុតែមួយគត់ (unique) ដែលមិនមានលំដាប់ និងអាចផ្លាស់ប្តូរបាន (mutable)។

ឧទាហរណ៍៖

numbers = {1, 2, 3, 3, 4}
numbers.add(5)
print(numbers)
ការពន្យល់៖ 4 បង្កើតសំណុំ ដោយ 3 ស្ទួនត្រូវបានលុបចោល, add(5) បន្ថែម 5 ទៅសំណុំ។

លទ្ធផល៖

{1, 2, 3, 4, 5}
6.4 Dictionaries (Key-Value Pairs) - វចនានុក្រម (គូសោ-តម្លៃ)
Dictionaries ជាការប្រមូលផ្តុំគូសោ-តម្លៃ (key-value pairs) ដែលអាចផ្លាស់ប្តូរបាន (mutable)។

ឧទាហរណ៍៖

student = {"ឈ្មោះ": "សុខា", "អាយុ": 20, "ជំនាញ": "សរសេរកម្មវិធី"}
student["អាយុ"] = 21
student["សាលា"] = "សាកលវិទ្យាល័យ"
print(student)
ការពន្យល់៖ ឈ្មោះ: សុខា, ... បង្កើតវចនានុក្រម, student["អាយុ"] = 21 កែតម្លៃនៃសោ 'អាយុ', student["សាលា"] = "សាកលវិទ្យាល័យ" បន្ថែមគូសោ-តម្លៃថ្មី។

លទ្ធផល៖

{'ឈ្មោះ': 'សុខា', 'អាយុ': 21, 'ជំនាញ': 'សរសេរកម្មវិធី', 'សាលា': 'សាកលវិទ្យាល័យ'}
7. String Manipulation - ការរៀបចំអក្សរ
String Manipulation នៅក្នុង Python ជាវិធីសាស្ត្រសម្រាប់ធ្វើការជាមួយអក្សរ (strings) ដូចជា ការធ្វើទ្រង់ទ្រាយ ការផ្លាស់ប្តូរ និងការវិភាគ។ ផ្នែកនេះនឹងបង្ហាញពីវិធីផ្សេងៗដើម្បីគ្រប់គ្រងអក្សរ។

7.1 String Formatting (f-strings, .format()) - ការធ្វើទ្រង់ទ្រាយអក្សរ
String formatting អនុញ្ញាតឱ្យបញ្ចូលតម្លៃអថេរ (variables) ទៅក្នុងអក្សរ។ វិធីទូទៅគឺ f-strings និង .format()។

ឧទាហរណ៍ (f-strings)៖

name = "សុខា"
age = 25
print(f"ខ្ញុំឈ្មោះ {name} អាយុ {age} ឆ្នាំ")
ឧទាហរណ៍ (.format())៖

name = "សុភី"
age = 30
print("ខ្ញុំឈ្មោះ {} អាយុ {} ឆ្នាំ".format(name, age))
ការពន្យល់៖ f"..." ប្រើ f-strings ដើម្បីបញ្ចូលតម្លៃដោយផ្ទាល់នៅក្នុងអក្សរ, .format() បញ្ចូលតម្លៃតាមលំដាប់ទៅក្នុង {}។

លទ្ធផល៖

ខ្ញុំឈ្មោះ សុខា អាយុ 25 ឆ្នាំ
ខ្ញុំឈ្មោះ សុភី អាយុ 30 ឆ្នាំ
7.2 String Methods (upper(), lower(), replace(), split()) - វិធីសាស្ត្រអក្សរ
String methods ជាមុខងារដែលភ្ជាប់មកជាមួយសម្រាប់ផ្លាស់ប្តូរ ឬវិភាគអក្សរ។

ឧទាហរណ៍៖

text = "សួស្តី Python"
print(text.upper())
print(text.lower())
print(text.replace("Python", "អ្នកសិក្សា"))
print(text.split(" "))
ការពន្យល់៖ upper() ប្តូរទៅអក្សរធំទាំងអស់, lower() ប្តូរទៅអក្សរតូចទាំងអស់, replace() ជំនួសអក្សរមួយដោយអក្សរមួយទៀត, split() បំបែកអក្សរទៅជាបញ្ជីដោយប្រើគម្លាត។

លទ្ធផល៖

សួស្តី PYTHON
សួស្តី python
សួស្តី អ្នកសិក្សា
['សួស្តី', 'Python']
7.3 Regular Expressions (re module) - កន្សោមធម្មតា (ម៉ូឌុល re)
re module អនុញ្ញាតឱ្យប្រើ regular expressions (regex) ដើម្បីស្វែងរក ឬផ្គូផ្គងលំនាំនៅក្នុងអក្សរ។

ឧទាហរណ៍៖

import re

text = "ទូរស័ព្ទ: 012-345-6789, អ៊ីមែល: example@email.com"
phone = re.search(r"\\d{3}-\\d{3}-\\d{4}", text)
email = re.search(r"[a-z]+@[a-z]+\\.[a-z]+", text)

print(phone.group())
print(email.group())
ការពន្យល់៖ import re នាំចូលម៉ូឌុល re, re.search() ស្វែងរកលំនាំដំបូងដែលផ្គូផ្គង, r"\\d3-\\d3-\\d4" លំនាំសម្រាប់លេខទូរស័ព្ទ (xxx-xxx-xxxx), r"[a-z]+@[a-z]+\\.[a-z]+" លំនាំសម្រាប់អ៊ីមែល, group() ទាញតម្លៃដែលផ្គូផ្គង។

លទ្ធផល៖

012-345-6789
example@email.com
8. File Handling - ការគ្រប់គ្រងឯកសារ
File Handling នៅក្នុង Python អនុញ្ញាតឱ្យអាន សរសេរ និងគ្រប់គ្រងឯកសារនៅលើប្រព័ន្ធ។ ផ្នែកនេះនឹងបង្ហាញពីវិធីធ្វើការជាមួយឯកសារអត្ថបទ CSV និង JSON។

8.1 Reading & Writing Files (open(), .read(), .write()) - ការអាន និង សរសេរឯកសារ
ការអាន និងសរសេរឯកសារប្រើ open() ដើម្បីចូលប្រើឯកសារ .read() ដើម្បីអាន និង .write() ដើម្បីសរសេរ។

ឧទាហរណ៍ (សរសេរ)៖

# សរសេរទៅឯកសារ
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("សួស្តី ពិភពលោក!
")
ឧទាហរណ៍ (អាន)៖

# អានពីឯកសារ
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()
print(content)
ការពន្យល់៖ open("example.txt", "w") បើកឯកសារសម្រាប់សរសេរ (w = write), file.write() សរសេរអត្ថបទទៅឯកសារ, open("example.txt", "r") បើកឯកសារសម្រាប់អាន (r = read), file.read() អានខ្លឹមសារទាំងមូល, ប្រើ <code>with</code> ដើម្បីបិទឯកសារដោយស្វ័យប្រវត្តិ។

លទ្ធផល៖

សួស្តី ពិភពលោក!
8.2 Handling CSV (csv module) - ការគ្រប់គ្រង CSV
csv module ជួយអាន និងសរសេរទិន្នន័យទៅឯកសារ CSV (Comma-Separated Values)។

ឧទាហរណ៍ (សរសេរ CSV)៖

import csv

# សរសេរទៅឯកសារ CSV
with open("students.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(["ឈ្មោះ", "អាយុ", "ជំនាញ"])
    writer.writerow(["សុខា", 25, "សរសេរកម្មវិធី"])
ឧទាហរណ៍ (អាន CSV)៖

import csv

# អានពីឯកសារ CSV
with open("students.csv", "r", encoding="utf-8") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
ការពន្យល់៖ import csv នាំចូលម៉ូឌុល csv, csv.writer() បង្កើតអ្នកសរសេរ CSV, writer.writerow() សរសេរជួរមួយទៅឯកសារ, csv.reader() អានជួរនីមួយៗជាបញ្ជី, newline='' ការពារបន្ថែមជួរទទេនៅ Windows។

លទ្ធផល៖

['ឈ្មោះ', 'អាយុ', 'ជំនាញ']
['សុខា', '25', 'សរសេរកម្មវិធី']
8.3 Handling JSON (json module) - ការគ្រប់គ្រង JSON
json module ជួយអាន និងសរសេរទិន្នន័យជាទម្រង់ JSON (JavaScript Object Notation)។

ឧទាហរណ៍ (សរសេរ JSON)៖

import json

data = {"ឈ្មោះ": "សុភី", "អាយុ": 30, "ទីកន្លែង": "ភ្នំពេញ"}
with open("data.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)
ឧទាហរណ៍ (អាន JSON)៖

import json

with open("data.json", "r", encoding="utf-8") as file:
    loaded_data = json.load(file)
print(loaded_data)
ការពន្យល់៖ import json នាំចូលម៉ូឌុល json, json.dump() សរសេរទិន្នន័យទៅឯកសារ JSON, ensure_ascii=False អនុញ្ញាតឱ្យប្រើអក្សរមិនមែន ASCII (ដូចជាខ្មែរ), indent=4 ធ្វើឱ្យទិន្នន័យមានទម្រង់ស្អាត, json.load() អានទិន្នន័យ JSON ទៅជា dictionary។

លទ្ធផល៖

{'ឈ្មោះ': 'សុភី', 'អាយុ': 30, 'ទីកន្លែង': 'ភ្នំពេញ'}
9. Object-Oriented Programming (OOP) - ការសរសេរកម្មវិធីតម្រង់ទិសវត្ថុ
Object-Oriented Programming (OOP) ជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលប្រើ classes និង objects ដើម្បីរៀបចំកូដឱ្យមានរបៀប និងអាចប្រើឡើងវិញបាន។ ផ្នែកនេះនឹងពន្យល់ពីគោលគំនិតសំខាន់ៗនៃ OOP នៅក្នុង Python។

9.1 Classes & Objects - ថ្នាក់ និង វត្ថុ
Classes ជាប្លង់ (blueprint) សម្រាប់បង្កើត objects ដែលជាការកើតឡើងជាក់ស្តែងនៃថ្នាក់។

ឧទាហរណ៍៖

class Dog:
    def bark(self):
        print("វ៉ុហ្វ! វ៉ុហ្វ!")

my_dog = Dog()
my_dog.bark()
ការពន្យល់៖ class Dog បង្កើតថ្នាក់ឈ្មោះ Dog, def bark(self) កំណត់មុខងារសម្រាប់វត្ថុ, my_dog = Dog() បង្កើតវត្ថុ my_dog ពីថ្នាក់ Dog, my_dog.bark() ហៅមុខងាររបស់វត្ថុ។

លទ្ធផល៖

វ៉ុហ្វ! វ៉ុហ្វ!
9.2 Constructors (__init__) - អ្នកសាងសង់
__init__ ជាមុខងារពិសេស (constructor) ដែលរត់ដោយស្វ័យប្រវត្តិនៅពេលបង្កើតវត្ថុ ដើម្បីកំណត់លក្ខណៈដំបូង។

ឧទាហរណ៍៖

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"ខ្ញុំឈ្មោះ {self.name} អាយុ {self.age} ឆ្នាំ")

person = Person("សុខា", 25)
person.introduce()
ការពន្យល់៖ __init__(self, name, age) កំណត់លក្ខណៈ name និង age នៅពេលបង្កើតវត្ថុ, self.name រក្សាទុកតម្លៃ name ទៅវត្ថុ, person = Person("សុខា", 25) បង្កើតវត្ថុដោយផ្តល់តម្លៃ, introduce() ប្រើលក្ខណៈរបស់វត្ថុ។

លទ្ធផល៖

ខ្ញុំឈ្មោះ សុខា អាយុ 25 ឆ្នាំ
9.3 Inheritance - ការទទួលមរតក
Inheritance អនុញ្ញាតឱ្យថ្នាក់មួយទទួលយកលក្ខណៈ និងមុខងារពីថ្នាក់មួយទៀត។ មានប្រភេទផ្សេងៗនៃការទទួលមរតក។

9.3.1 Single Inheritance - ការទទួលមរតកតែមួយ
ថ្នាក់កូនទទួលមរតកពីថ្នាក់មេតែមួយ។

ឧទាហរណ៍៖

class Animal:
    def __init__(self, name):
        self.name = name

class Cat(Animal):
    def meow(self):
        print(f"{self.name} និយាយ: ម៉ៅ! ម៉ៅ!")

cat = Cat("មីមី")
cat.meow()
ការពន្យល់៖ class Cat(Animal) ទទួលមរតកពី Animal, self.name មកពីថ្នាក់មេ, meow() ជាមុខងារថ្មីរបស់ Cat។

លទ្ធផល៖

មីមី និយាយ: ម៉ៅ! ម៉ៅ!
9.3.2 Multiple Inheritance - ការទទួលមរតកច្រើន
ថ្នាក់កូនទទួលមរតកពីថ្នាក់មេច្រើនជាងមួយ។

ឧទាហរណ៍៖

class Flyer:
    def fly(self):
        print("ហោះ!")

class Swimmer:
    def swim(self):
        print("ហែល!")

class Duck(Flyer, Swimmer):
    pass

duck = Duck()
duck.fly()
duck.swim()
ការពន្យល់៖ class Duck(Flyer, Swimmer) ទទួលមរតកពី Flyer និង Swimmer, fly() និង <code>swim()</code> មកពីថ្នាក់មេទាំងពីរ។

លទ្ធផល៖

ហោះ!
ហែល!
9.3.3 Multilevel Inheritance - ការទទួលមរតកច្រើនកម្រិត
ថ្នាក់មួយទទួលមរតកពីថ្នាក់មេ ហើយថ្នាក់មួយទៀតទទួលមរតកពីថ្នាក់នោះបន្ត។

ឧទាហរណ៍៖

class Animal:
    def eat(self):
        print("ញុំា!")

class Dog(Animal):
    def bark(self):
        print("វ៉ុហ្វ!")

class Puppy(Dog):
    def play(self):
        print("លេង!")

puppy = Puppy()
puppy.eat()
puppy.bark()
puppy.play()
ការពន្យល់៖ Puppy ទទួលមរតកពី Dog, Dog ទទួលមរតកពី Animal, ដូច្នេះ Puppy អាចប្រើ <code>eat()</code>, <code>bark()</code>, និង <code>play()</code>។

លទ្ធផល៖

ញុំា!
វ៉ុហ្វ!
លេង!
9.3.4 Hierarchical Inheritance - ការទទួលមរតកជាឋានានុក្រម
ថ្នាក់មេមួយត្រូវបានទទួលមរតកដោយថ្នាក់កូនច្រើន។

ឧទាហរណ៍៖

class Animal:
    def eat(self):
        print("ញុំា!")

class Cat(Animal):
    def meow(self):
        print("ម៉ៅ!")

class Dog(Animal):
    def bark(self):
        print("វ៉ុហ្វ!")

cat = Cat()
dog = Dog()
cat.eat()
cat.meow()
dog.eat()
dog.bark()
ការពន្យល់៖ Cat និង <code>Dog</code> ទទួលមរតកពី Animal, eat() មាននៅក្នុងទាំង Cat និង Dog, ប៉ុន្តែ <code>meow()</code> និង <code>bark()</code> ជាលក្ខណៈផ្ទាល់ខ្លួន។

លទ្ធផល៖

ញុំា!
ម៉ៅ!
ញុំា!
វ៉ុហ្វ!
9.3.5 Hybrid Inheritance - ការទទួលមរតកបែបលាយ
ការរួមបញ្ចូលគ្នានៃប្រភេទទទួលមរតកផ្សេងៗ (ឧ. multilevel និង multiple)។

ឧទាហរណ៍៖

class Animal:
    def eat(self):
        print("ញុំា!")

class Flyer:
    def fly(self):
        print("ហោះ!")

class Bird(Animal):
    def chirp(self):
        print("ជីប! ជីប!")

class Parrot(Bird, Flyer):
    def talk(self):
        print("ខ្ញុំអាចនិយាយបាន!")

parrot = Parrot()
parrot.eat()
parrot.chirp()
parrot.fly()
parrot.talk()
ការពន្យល់៖ Bird ទទួលមរតកពី Animal (single), Parrot ទទួលមរតកពី Bird (multilevel) និង Flyer (multiple), ដូច្នេះ Parrot អាច <code>eat()</code>, <code>chirp()</code>, <code>fly()</code>, និង <code>talk()</code>។

លទ្ធផល៖

ញុំា!
ជីប! ជីប!
ហោះ!
ខ្ញុំអាចនិយាយបាន!
9.4 Polymorphism - ពហុរូបភាព
Polymorphism អនុញ្ញាតឱ្យវត្ថុផ្សេងគ្នាឆ្លើយតបទៅនឹងមុខងារដូចគ្នាតាមវិធីផ្សេងគ្នា។

ឧទាហរណ៍៖

class Cat:
    def sound(self):
        print("ម៉ៅ!")

class Dog:
    def sound(self):
        print("វ៉ុហ្វ!")

def make_sound(animal):
    animal.sound()

cat = Cat()
dog = Dog()
make_sound(cat)
make_sound(dog)
ការពន្យល់៖ sound() ត្រូវបានកំណត់ខុសគ្នានៅក្នុង Cat និង Dog, make_sound() អាចហៅ <code>sound()</code> លើវត្ថុណាមួយដែលមានមុខងារនេះ។

លទ្ធផល៖

ម៉ៅ!
វ៉ុហ្វ!
9.5 Encapsulation - ការវេចខ្ចប់
Encapsulation លាក់ព័ត៌មានខាងក្នុងរបស់វត្ថុ និងអនុញ្ញាតឱ្យចូលប្រើតាមវិធីសាស្ត្រជាក់លាក់ប៉ុណ្ណោះ។

ឧទាហរណ៍៖

class Student:
    def __init__(self, name):
        self.__grade = 85  # private attribute
    def get_grade(self):
        return self.__grade
    def set_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grade = grade

student = Student("សុភី")
print(student.get_grade())
student.set_grade(90)
print(student.get_grade())
ការពន្យល់៖ __grade ជាលក្ខណៈឯកជន (private) ដែលមិនអាចចូលប្រើដោយផ្ទាល់, get_grade() ទាញតម្លៃ, set_grade() កែតម្លៃដោយមានលក្ខខណ្ឌ។

លទ្ធផល៖

85
90
9.6 Magic Methods (__str__, __len__, etc.) - វិធីសាស្ត្រវេទមន្ត
Magic methods ជាមុខងារពិសេសដែលចាប់ផ្តើម និងបញ្ចប់ដោយ __ ដើម្បីកំណត់ឥរិយាបថផ្ទាល់ខ្លួនរបស់វត្ថុ។

ឧទាហរណ៍៖

class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages
    
    def __str__(self):
        return f"សៀវភៅ: {self.title}"
    
    def __len__(self):
        return self.pages

book = Book("Python សម្រាប់អ្នកចាប់ផ្តើម", 300)
print(book)
print(len(book))
ការពន្យល់៖ __str__ កំណត់អ្វីដែលត្រូវបង្ហាញនៅពេលបោះពុម្ពវត្ថុ, __len__ កំណត់ប្រវែងនៃវត្ថុនៅពេលប្រើ <code>len()</code>។

លទ្ធផល៖

សៀវភៅ: Python សម្រាប់អ្នកចាប់ផ្តើម
300
10. Exception Handling - ការគ្រប់គ្រងករណីលើកលែង
Exception Handling នៅក្នុង Python ជាវិធីសាស្ត្រដើម្បីដោះស្រាយកំហុស (errors) ដែលកើតឡើងអំឡុងពេលដំណើរការកម្មវិធី ដើម្បីការពារកម្មវិធីពីការគាំង។ ផ្នែកនេះនឹងបង្ហាញពីវិធីគ្រប់គ្រងករណីលើកលែង។

10.1 try-except Blocks - ប្លុក try-except
try-except ប្លុកប្រើដើម្បីសាកល្បងកូដដែលអាចមានកំហុស និងចាប់យកកំហុសប្រសិនបើវាកើតឡើង។

ឧទាហរណ៍៖

try:
    number = int(input("បញ្ចូលលេខ: "))
    result = 10 / number
    print(f"លទ្ធផល: {result}")
except ZeroDivisionError:
    print("មិនអាចបែងចែកដោយ 0 បានទេ!")
except ValueError:
    print("សូមបញ្ចូលលេខគត់!")
ការពន្យល់៖ try សាកល្បងកូដដែលអាចមានកំហុស, except ZeroDivisionError ចាប់កំហុសនៃការបែងចែកដោយ 0, except ValueError ចាប់កំហុសនៃការបញ្ចូលតម្លៃមិនមែនលេខ។

លទ្ធផល (បញ្ចូល 0)៖

មិនអាចបែងចែកដោយ 0 បានទេ!
លទ្ធផល (បញ្ចូល 'abc')៖

សូមបញ្ចូលលេខគត់!
10.2 Raising Exceptions (raise) - ការបង្កើតករណីលើកលែង
raise ប្រើដើម្បីបង្កើតកំហុសដោយចេតនា នៅពេលលក្ខខណ្ឌមួយមិនត្រូវបានបំពេញ។

ឧទាហរណ៍៖

def check_age(age):
    if age < 0:
        raise ValueError("អាយុមិនអាចតូចជាង 0 បានទេ!")
    print(f"អាយុរបស់អ្នកគឺ {age} ឆ្នាំ")

try:
    check_age(-5)
except ValueError as error:
    print(error)
ការពន្យល់៖ raise ValueError បង្កើតកំហុសប្រសិនបើអាយុតូចជាង 0, except ValueError as error ចាប់កំហុសនិងបង្ហាញសារ។

លទ្ធផល៖

អាយុមិនអាចតូចជាង 0 បានទេ!
10.3 Custom Exceptions - ករណីលើកលែងផ្ទាល់ខ្លួន
អ្នកអាចបង្កើត custom exceptions ដោយបង្កើតថ្នាក់ថ្មីដែលទទួលមរតកពី Exception។

ឧទាហរណ៍៖

class NegativeNumberError(Exception):
    pass

def divide(a, b):
    if b < 0:
        raise NegativeNumberError("មិនអាចបែងចែកដោយលេខអវិជ្ជមានបានទេ!")
    return a / b

try:
    result = divide(10, -2)
except NegativeNumberError as error:
    print(error)
except ZeroDivisionError:
    print("មិនអាចបែងចែកដោយ 0 បានទេ!")
ការពន្យល់៖ class NegativeNumberError(Exception) បង្កើតករណីលើកលែងផ្ទាល់ខ្លួន, raise NegativeNumberError បង្កើតកំហុសផ្ទាល់ខ្លួនប្រសិនបើ b អវិជ្ជមាន, except NegativeNumberError ចាប់កំហុសផ្ទាល់ខ្លួន។

លទ្ធផល៖

មិនអាចបែងចែកដោយលេខអវិជ្ជមានបានទេ!
11. Python Modules & Standard Libraries - ម៉ូឌុល និង បណ្ណាល័យស្តង់ដាររបស់ Python
Python Modules និង Standard Libraries ជាសំណុំនៃមុខងារដែលមានស្រាប់នៅក្នុង Python ដើម្បីជួយសម្រួលការងារផ្សេងៗដូចជា គណនា គ្រប់គ្រងកាលបរិច្ឆេទ ឬធ្វើការជាមួយប្រព័ន្ធប្រតិបត្តិការ។ ផ្នែកនេះនឹងបង្ហាញពីម៉ូឌុលសំខាន់ៗមួយចំនួន។

11.1 math (Mathematical Functions) - ម៉ូឌុល math (មុខងារគណិតវិទ្យា)
math module ផ្តល់មុខងារគណិតវិទ្យាដូចជា ឫសការ៉េ ស៊ីនុស និងការប្រមូលផ្តុំ។

ឧទាហរណ៍៖

import math

print(math.sqrt(16))  # ឫសការ៉េ
print(math.pi)        # តម្លៃ π
print(math.sin(math.pi / 2))  # ស៊ីនុស 90 ដឺក្រេ
ការពន្យល់៖ import math នាំចូលម៉ូឌុល math, math.sqrt() គណនាឫសការ៉េ, math.pi តម្លៃថេរ π, math.sin() គណនាស៊ីនុស (តម្លៃជា radian)។

លទ្ធផល៖

4.0
3.141592653589793
1.0
11.2 datetime (Date & Time) - ម៉ូឌុល datetime (កាលបរិច្ឆេទ និង ពេលវេលា)
datetime module ជួយគ្រប់គ្រងកាលបរិច្ឆេទ និងពេលវេលា។

ឧទាហរណ៍៖

from datetime import datetime

# ពេលវេលាបច្ចុប្បន្ន
now = datetime.now()
print(f"ថ្ងៃនេះ: {now.strftime('%Y-%m-%d %H:%M:%S')}")

# កាលបរិច្ឆេទជាក់លាក់
birthday = datetime(2000, 5, 15)
print(f"ថ្ងៃកំណើត: {birthday.strftime('%Y-%m-%d')}")
ការពន្យល់៖ from datetime import datetime នាំចូល datetime class, datetime.now() ទាញពេលវេលាបច្ចុប្បន្ន, strftime() ធ្វើទ្រង់ទ្រាយកាលបរិច្ឆេទទៅជាអក្សរ, datetime(2000, 5, 15) បង្កើតកាលបរិច្ឆេទជាក់លាក់។

លទ្ធផល (ឧទាហរណ៍)៖

ថ្ងៃនេះ: 2025-04-10 12:00:00
ថ្ងៃកំណើត: 2000-05-15
11.3 random (Generating Random Data) - ម៉ូឌុល random (បង្កើតទិន្នន័យចៃដន្យ)
random module បង្កើតលេខ ឬទិន្នន័យចៃដន្យសម្រាប់ការប្រើប្រាស់ផ្សេងៗ។

ឧទាហរណ៍៖

import random

print(random.randint(1, 10))  # លេខចៃដន្យ 1-10
print(random.choice(["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែឪឡឹក"]))  # ជ្រើសរើសចៃដន្យ
numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)  # សាប់ចៃដន្យ
print(numbers)
ការពន្យល់៖ random.randint(1, 10) បង្កើតលេខគត់ចៃដន្យរវាង 1 និង 10, random.choice() ជ្រើសរើសធាតុមួយចៃដន្យពីបញ្ជី, random.shuffle() សាប់លំដាប់ធាតុក្នុងបញ្ជី។

លទ្ធផល (ឧទាហរណ៍)៖

7
ផ្លែចេក
[3, 1, 5, 2, 4]
11.4 os (Interacting with OS) - ម៉ូឌុល os (ធ្វើអន្តរកម្មជាមួយប្រព័ន្ធប្រតិបត្តិការ)
os module អនុញ្ញាតឱ្យធ្វើអន្តរកម្មជាមួយប្រព័ន្ធប្រតិបត្តិការ ដូចជាគ្រប់គ្រងឯកសារ ឬថតឯកសារ។

ឧទាហរណ៍៖

import os

# ទាញថតបច្ចុប្បន្ន
print(os.getcwd())

# បង្កើតថតថ្មី
os.mkdir("test_folder")

# ប្តូរឈ្មោះថត
os.rename("test_folder", "new_folder")

# លុបថត
os.rmdir("new_folder")
ការពន្យល់៖ os.getcwd() ទាញផ្លូវថតបច្ចុប្បន្ន, os.mkdir() បង្កើតថតថ្មី, os.rename() ប្តូរឈ្មោះថត, os.rmdir() លុបថតទទេ។

លទ្ធផល (ឧទាហរណ៍)៖

/home/user/projects
11.5 sys (System-specific Parameters) - ម៉ូឌុល sys (ប៉ារ៉ាម៉ែត្រជាក់លាក់របស់ប្រព័ន្ធ)
sys module ផ្តល់ព័ត៌មាន និងគ្រប់គ្រងប៉ារ៉ាម៉ែត្រជាក់លាក់របស់ប្រព័ន្ធ Python។

ឧទាហរណ៍៖

import sys

# បង្ហាញជំនាន់ Python
print(sys.version)

# ទាញអាគុយម៉ង់ពី command line
print(sys.argv)

# ចាកចេញពីកម្មវិធី
# sys.exit(0)  # បញ្ចប់ដោយជោគជ័យ (បានបញ្ចូលជា comment ដើម្បីបង្ហាញលទ្ធផល)
ការពន្យល់៖ sys.version បង្ហាញជំនាន់ Python, sys.argv ទាញបញ្ជីអាគុយម៉ង់ពី command line, sys.exit() បញ្ចប់កម្មវិធី (0 = ជោគជ័យ, ផ្សេងទៀត = បរាជ័យ)។

លទ្ធផល (ឧទាហរណ៍)៖

3.11.2 (main, Feb  7 2023, 23:15:45) [GCC 10.2.1]
['script.py', 'arg1', 'arg2']
12. Functional Programming - ការសរសេរកម្មវិធីបែបមុខងារ
Functional Programming ជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្តោតលើការប្រើមុខងារ (functions) និងជៀសវាងការផ្លាស់ប្តូរស្ថានភាព (state)។ Python គាំទ្រឧបករណ៍សម្រាប់ការសរសេរបែបនេះដូចជា map, filter, និង reduce។

12.1 Map, Filter, Reduce - ម៉ែប ហ្វីលធឺ និង រីឌុស
map, filter, និង reduce ជាមុខងារដែលធ្វើការជាមួយបញ្ជីដោយបែបមុខងារ។

ឧទាហរណ៍៖

from functools import reduce

# map: អនុវត្តមុខងារលើធាតុនីមួយៗ
numbers = [1, 2, 3, 4]
squared = list(map(lambda x: x**2, numbers))
print(squared)

# filter: ជ្រើសរើសធាតុតាមលក្ខខណ្ឌ
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)

# reduce: បញ្ចូលធាតុទាំងអស់ទៅជាតម្លៃតែមួយ
sum_result = reduce(lambda x, y: x + y, numbers)
print(sum_result)
ការពន្យល់៖
- map(lambda x: x**2, numbers) ប្តូរធាតុនីមួយៗទៅជាការ៉េ,
- filter(lambda x: x % 2 == 0, numbers) ជ្រើសតែលេខគូ,
- reduce(lambda x, y: x + y, numbers) បូកធាតុទាំងអស់,
- from functools import reduce នាំចូល <code>reduce</code> ពី <code>functools</code>។

លទ្ធផល៖

[1, 4, 9, 16]
[2, 4]
10
12.2 List Comprehensions - ការបង្កើតបញ្ជីបែបសង្ខេប
List comprehensions ជាវិធីសង្ខេបក្នុងការបង្កើតបញ្ជីដោយប្រើនិយាយកថាខ្លី និងមានប្រសិទ្ធភាព។

ឧទាហរណ៍៖

# បញ្ជីការ៉េ
squares = [x**2 for x in range(5)]
print(squares)

# បញ្ជីលេខគូ
evens = [x for x in range(10) if x % 2 == 0]
print(evens)
ការពន្យល់៖ [x**2 for x in range(5)] បង្កើតបញ្ជីការ៉េនៃលេខ 0-4, [x for x in range(10) if x % 2 == 0] បង្កើតបញ្ជីលេខគូពី 0-9។

លទ្ធផល៖

[0, 1, 4, 9, 16]
[0, 2, 4, 6, 8]
12.3 Generators & Iterators - ឧបករណ៍បង្កើត និង ឧបករណ៍រាប់
Generators និង Iterators ជួយគ្រប់គ្រងទិន្នន័យជាលំដាប់ដោយសន្សំសំចៃអង្គចងចាំ។

ឧទាហរណ៍៖

# Generator
def count_up_to(n):
    for i in range(n):
        yield i

counter = count_up_to(5)
print(list(counter))

# Iterator
numbers = iter([1, 2, 3, 4])
print(next(numbers))
print(next(numbers))
ការពន្យល់៖
- yield បង្កើត generator ដែលផ្តល់តម្លៃម្តងមួយៗ,
- count_up_to(5) ផ្តល់លេខ 0-4 តាមលំដាប់,
- iter() បង្កើត iterator ពីបញ្ជី,
- next() ទាញធាតុបន្ទាប់ពី iterator។

លទ្ធផល៖

[0, 1, 2, 3, 4]
1
2
13. Multithreading & Multiprocessing - ការដំណើរការច្រើនខ្សែ និង ច្រើនដំណើរការ
Multithreading និង Multiprocessing ជាវិធីសាស្ត្រដើម្បីដំណើរការកិច្ចការច្រើនក្នុងពេលតែមួយនៅក្នុង Python។ threading ប្រើសម្រាប់ខ្សែបន្តបន្ទាប់ (threads) ក្នុងដំណើរការតែមួយ ចំណែក multiprocessing ប្រើដំណើរការច្រើន (processes) ដើម្បីទាញយកអត្ថប្រយោជន៍ពី CPU ច្រើនស្នូល។

13.1 Threading in Python (threading module) - ការដំណើរការច្រើនខ្សែ (ម៉ូឌុល threading)
threading module អនុញ្ញាតឱ្យដំណើរការកិច្ចការច្រើនក្នុងខ្សែបន្តបន្ទាប់ (threads) ដែលស័ក្តិសមសម្រាប់ការងារ I/O-bound (ឧ. ការអាន/សរសេរឯកសារ)។

ឧទាហរណ៍៖

import threading
import time

def task(name):
    print(f"ខ្សែ {name} ចាប់ផ្តើម")
    time.sleep(2)  # ក្លែងធ្វើការងារដែលចំណាយពេល
    print(f"ខ្សែ {name} បញ្ចប់")

# បង្កើតខ្សែ
t1 = threading.Thread(target=task, args=("ទី១",))
t2 = threading.Thread(target=task, args=("ទី២",))

# ចាប់ផ្តើមខ្សែ
t1.start()
t2.start()

# រង់ចាំខ្សែបញ្ចប់
t1.join()
t2.join()

print("ការងារទាំងអស់បញ្ចប់")
ការពន្យល់៖
- import threading នាំចូលម៉ូឌុល threading,
- threading.Thread(target=task, args=...) បង្កើតខ្សែថ្មីជាមួយមុខងារ target,
- start() ចាប់ផ្តើមខ្សែ,
- join() រង់ចាំខ្សែបញ្ចប់មុននឹងបន្ត។

លទ្ធផល៖

ខ្សែ ទី១ ចាប់ផ្តើម
ខ្សែ ទី២ ចាប់ផ្តើម
(រង់ចាំ 2 វិនាទី)
ខ្សែ ទី១ បញ្ចប់
ខ្សែ ទី២ បញ្ចប់
ការងារទាំងអស់បញ្ចប់
13.2 Parallel Processing (multiprocessing module) - ការដំណើរការស្របគ្នា (ម៉ូឌុល multiprocessing)
multiprocessing module ប្រើដំណើរការច្រើន (processes) ដើម្បីដំណើរការកិច្ចការស្របគ្នា ស័ក្តិសមសម្រាប់ការងារ CPU-bound (ឧ. ការគណនាធំៗ)។

ឧទាហរណ៍៖

import multiprocessing
import time

def square_number(n):
    print(f"ដំណើរការ {multiprocessing.current_process().name} គណនា {n}**2")
    time.sleep(1)  # ក្លែងធ្វើការងារដែលចំណាយពេល
    return n**2

if __name__ == "__main__":
    numbers = [1, 2, 3, 4]
    
    # បង្កើត Pool នៃដំណើរការ
    with multiprocessing.Pool(processes=2) as pool:
        results = pool.map(square_number, numbers)
    
    print(f"លទ្ធផល: {results}")
ការពន្យល់៖
- import multiprocessing នាំចូលម៉ូឌុល multiprocessing,
- multiprocessing.Pool(processes=2) បង្កើតក្រុមដំណើរការចំនួន 2,
- pool.map() អនុវត្តមុខងារ square_number លើធាតុនីមួយៗស្របគ្នា,
- if __name__ == '__main__': ចាំបាច់សម្រាប់ multiprocessing នៅលើ Windows។

លទ្ធផល៖

ដំណើរការ PoolWorker-1 គណនា 1**2
ដំណើរការ PoolWorker-2 គណនា 2**2
(រង់ចាំ 1 វិនាទី)
ដំណើរការ PoolWorker-1 គណនា 3**2
ដំណើរការ PoolWorker-2 គណនា 4**2
(រង់ចាំ 1 វិនាទី)
លទ្ធផល: [1, 4, 9, 16]
14. Database Handling - ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ
Database Handling នៅក្នុង Python អនុញ្ញាតឱ្យធ្វើអន្តរកម្មជាមួយមូលដ្ឋានទិន្នន័យដូចជា SQLite, MySQL, និង PostgreSQL ដើម្បីរក្សាទុក និងទាញយកទិន្នន័យ។ ផ្នែកនេះនឹងបង្ហាញពីរបៀបប្រើម៉ូឌុលសម្រាប់មូលដ្ឋានទិន្នន័យទាំងនេះ។

14.1 SQLite (sqlite3 module) - SQLite (ម៉ូឌុល sqlite3)
sqlite3 module ជាម៉ូឌុលស្តង់ដារសម្រាប់ធ្វើការជាមួយ SQLite ដែលជាមូលដ្ឋានទិន្នន័យទម្ងន់ស្រាល និងមិនតម្រូវឱ្យមាន server ដាច់ដោយឡែក។

ឧទាហរណ៍៖

import sqlite3

# ភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ
conn = sqlite3.connect("students.db")
cursor = conn.cursor()

# បង្កើតតារាង
cursor.execute("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)")

# បញ្ចូលទិន្នន័យ
cursor.execute("INSERT INTO students (name, age) VALUES (?, ?)", ("សុខា", 25))

# ទាញទិន្នន័យ
cursor.execute("SELECT * FROM students")
print(cursor.fetchall())

# រក្សាទុក និងបិទ
conn.commit()
conn.close()
ការពន្យល់៖
- sqlite3.connect() ភ្ជាប់ទៅឯកសារ .db (បង្កើតបើមិនទាន់មាន),
- cursor.execute() ប្រតិបត្តិពាក្យបញ្ជា SQL,
- INSERT INTO បញ្ចូលទិន្នន័យ,
- fetchall() ទាញទិន្នន័យទាំងអស់,
- conn.commit() រក្សាទុកការផ្លាស់ប្តូរ,
- conn.close() បិទការតភ្ជាប់។

លទ្ធផល (ឧទាហរណ៍)៖

[(1, 'សុខា', 25)]
14.2 MySQL (mysql-connector) - MySQL (mysql-connector)
mysql-connector-python ជាម៉ូឌុលសម្រាប់ភ្ជាប់ Python ទៅ MySQL server។ ត្រូវតំឡើងវាដោយប្រើ pip install mysql-connector-python។

ឧទាហរណ៍៖

import mysql.connector

# ភ្ជាប់ទៅ MySQL server
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="your_password",
    database="school"
)
cursor = conn.cursor()

# បង្កើតតារាង
cursor.execute("CREATE TABLE IF NOT EXISTS students (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), age INT)")

# បញ្ចូលទិន្នន័យ
cursor.execute("INSERT INTO students (name, age) VALUES (%s, %s)", ("សុភី", 30))

# ទាញទិន្នន័យ
cursor.execute("SELECT * FROM students")
print(cursor.fetchall())

# រក្សាទុក និងបិទ
conn.commit()
conn.close()
ការពន្យល់៖
- mysql.connector.connect() ភ្ជាប់ទៅ MySQL server ដោយបញ្ជាក់ host, user, password, និង database,
- cursor.execute() ប្រតិបត្តិ SQL,
- %s ជាកន្លែងបញ្ចូលតម្លៃដោយសុវត្ថិភាព,
- fetchall() ទាញលទ្ធផលទាំងអស់។

លទ្ធផល (ឧទាហរណ៍)៖

[(1, 'សុភី', 30)]
14.3 PostgreSQL (psycopg2) - PostgreSQL (psycopg2)
psycopg2 ជាម៉ូឌុលសម្រាប់ភ្ជាប់ Python ទៅ PostgreSQL server។ ត្រូវតំឡើងវាដោយប្រើ pip install psycopg2។

ឧទាហរណ៍៖

import psycopg2

# ភ្ជាប់ទៅ PostgreSQL server
conn = psycopg2.connect(
    host="localhost",
    database="school",
    user="postgres",
    password="your_password"
)
cursor = conn.cursor()

# បង្កើតតារាង
cursor.execute("CREATE TABLE IF NOT EXISTS students (id SERIAL PRIMARY KEY, name VARCHAR(255), age INT)")

# បញ្ចូលទិន្នន័យ
cursor.execute("INSERT INTO students (name, age) VALUES (%s, %s)", ("លីណា", 22))

# ទាញទិន្នន័យ
cursor.execute("SELECT * FROM students")
print(cursor.fetchall())

# រក្សាទុក និងបិទ
conn.commit()
conn.close()
ការពន្យល់៖
- psycopg2.connect() ភ្ជាប់ទៅ PostgreSQL server ដោយបញ្ជាក់ host, database, user, password,
- SERIAL ជាប្រភេទទិន្នន័យសម្រាប់ id ដែលបង្កើនដោយស្វ័យប្រវត្តិ,
- cursor.execute() ប្រតិបត្តិ SQL,
- fetchall() ទាញទិន្នន័យទាំងអស់។

លទ្ធផល (ឧទាហរណ៍)៖

[(1, 'លីណា', 22)]
15. Web Development with Python - ការអភិវឌ្ឍគេហទំព័រជាមួយ Python
ការអភិវឌ្ឍគេហទំព័រជាមួយ Python អនុញ្ញាតឱ្យអ្នកបង្កើតគេហទំព័រនិងកម្មវិធីគេហទំព័រដោយប្រើភាសា Python។ ផ្នែកនេះនឹងផ្តោតលើក្របខ័ណ្ឌពីរដ៏ពេញនិយមគឺ Flask និង Django ដែលជួយសម្រួលដល់ការអភិវឌ្ឍគេហទំព័រ។

15.1 Introduction to Flask & Django - ការណែនាំអំពី Flask និង Django
Flask ជាក្របខ័ណ្ឌទម្ងន់ស្រាលសម្រាប់បង្កើតកម្មវិធីគេហទំព័រតូចៗ ឬ API ដែលផ្តល់ភាពបត់បែនខ្ពស់។ Django ជាក្របខ័ណ្ឌពេញលេញជាង ដែលស័ក្តិសមសម្រាប់គម្រោងធំៗ ដោយមានមុខងារជាច្រើនដូចជា ORM, admin panel និងសុវត្ថិភាព។ ទាំងពីរត្រូវតំឡើងដោយប្រើ pip install flask និង pip install django។

15.2 Creating a Simple API with Flask - ការបង្កើត API សាមញ្ញជាមួយ Flask
នេះគឺជាឧទាហរណ៍នៃការបង្កើត API សាមញ្ញដោយប្រើ Flask ដើម្បីឆ្លើយតបនឹងសំណើ HTTP។

ឧទាហរណ៍៖

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "សូមស្វាគមន៍មកកាន់ Flask API!"})

@app.route('/api/user/<name>')
def get_user(name):
    return jsonify({"name": name, "age": 25})

if __name__ == '__main__':
    app.run(debug=True)
ការពន្យល់៖
- Flask(__name__) បង្កើតកម្មវិធី Flask,
- @app.route('/') កំណត់ផ្លូវសម្រាប់ទំព័រដើម,
- jsonify ប្តូរទិន្នន័យទៅជា JSON,
- /api/user/<name> ផ្លូវដែលទទួលប៉ារ៉ាម៉ែត្រឈ្មោះ,
- app.run(debug=True) ដំណើរការកម្មវិធីជាមួយរបៀប debug។

លទ្ធផល (ឧទាហរណ៍)៖ បើចូលទៅ http://localhost:5000/api/user/សុខា

{"name": "សុខា", "age": 25}
15.3 Building Web Applications with Django - ការបង្កើតកម្មវិធីគេហទំព័រជាមួយ Django
Django អនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធីគេហទំព័រដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់។ នេះគឺជាឧទាហរណ៍មួយសាមញ្ញ។

ឧទាហរណ៍៖ (បន្ទាប់ពីបង្កើតគម្រោងជាមួយ django-admin startproject myproject និង app ជាមួយ python manage.py startapp myapp)

# myapp/views.py
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "សូមស្វាគមន៍មកកាន់ Django!"})

# myproject/urls.py
from django.urls import path
from myapp import views

urlpatterns = [
    path('', views.home, name='home'),
]

# ដំណើរការដោយ python manage.py runserver
ការពន្យល់៖
- views.py កំណត់អនុគមន៍សម្រាប់ឆ្លើយតបសំណើ,
- JsonResponse ផ្ញើទិន្នន័យជា JSON,
- urls.py ភ្ជាប់ផ្លូវទៅនឹងអនុគមន៍,
- runserver ចាប់ផ្តើម server នៅ localhost:8000។

លទ្ធផល (ឧទាហរណ៍)៖ បើចូលទៅ http://localhost:8000/

{"message": "សូមស្វាគមន៍មកកាន់ Django!"}
16. Data Science & Machine Learning - វិទ្យាសាស្ត្រទិន្នន័យ និងការរៀនសូត្រដោយម៉ាស៊ីន
វិទ្យាសាស្ត្រទិន្នន័យ និងការរៀនសូត្រដោយម៉ាស៊ីនជាផ្នែកសំខាន់នៃការវិភាគទិន្នន័យ និងការបង្កើតគំរូដែលអាចទស្សន៍ទាយបាន។ Python ផ្តល់នូវបណ្ណាល័យដ៏មានឥទ្ធិពលដូចជា NumPy, Pandas, Matplotlib, Seaborn និង Scikit-learn ដើម្បីគ្រប់គ្រងទិន្នន័យ និងបង្កើតក្បួនដោះស្រាយ។

16.1 NumPy (Numerical Computing) - NumPy (ការគណនាជាលេខ)
NumPy ជាបណ្ណាល័យសម្រាប់ការគណនាជាលេខ ដែលផ្តល់នូវការគាំទ្រសម្រាប់អារេច្រើនវិមាត្រ និងប្រតិបត្តិការគណិតវិទ្យា។ ត្រូវតំឡើងវាដោយប្រើ pip install numpy។

ឧទាហរណ៍៖

import numpy as np

# បង្កើតអារេ
array = np.array([1, 2, 3, 4, 5])
print("អារេ:", array)

# ប្រតិបត្តិការគណិតវិទ្យា
squared = np.square(array)
print("លេខការ៉េ:", squared)
ការពន្យល់៖
- np.array() បង្កើតអារេ NumPy,
- np.square() គណនាការ៉េនៃធាតុនីមួយៗក្នុងអារេ។

លទ្ធផល (ឧទាហរណ៍)៖

អារេ: [1 2 3 4 5]
លេខការ៉េ: [ 1  4  9 16 25]
16.2 Pandas (Data Analysis) - Pandas (ការវិភាគទិន្នន័យ)
Pandas ជាបណ្ណាល័យសម្រាប់ការវិភាគទិន្នន័យ ដែលផ្តល់នូវរចនាសម្ព័ន្ធទិន្នន័យដូចជា Series និង DataFrame។ ត្រូវតំឡើងវាដោយប្រើ pip install pandas។

ឧទាហរណ៍៖

import pandas as pd

# បង្កើត DataFrame
data = {'ឈ្មោះ': ['សុខា', 'សុភី'], 'អាយុ': [25, 30]}
df = pd.DataFrame(data)
print("DataFrame:")
print(df)

# ចម្រោះទិន្នន័យ
print("អាយុលើសពី 25:")
print(df[df['អាយុ'] > 25])
ការពន្យល់៖
- pd.DataFrame() បង្កើតតារាងទិន្នន័យ,
- df['អាយុ'] > 25 ចម្រោះជួរដែលមានអាយុលើសពី 25។

លទ្ធផល (ឧទាហរណ៍)៖

DataFrame:
   ឈ្មោះ  អាយុ
0  សុខា     25
1  សុភី     30
អាយុលើសពី 25:
   ឈ្មោះ  អាយុ
1  សុភី     30
16.3 Matplotlib & Seaborn (Data Visualization) - Matplotlib និង Seaborn (ការមើលឃើញទិន្នន័យ)
Matplotlib និង Seaborn ជាបណ្ណាល័យសម្រាប់បង្កើតក្រាបទិន្នន័យ។ Matplotlib ផ្តល់មូលដ្ឋានគ្រឹះ ខណៈ Seaborn ធ្វើឱ្យក្រាបកាន់តែស្រស់ស្អាត។ ត្រូវតំឡើងដោយ pip install matplotlib seaborn។

ឧទាហរណ៍៖

import matplotlib.pyplot as plt
import seaborn as sns

# ទិន្នន័យ
x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

# គូសក្រាបជាមួយ Matplotlib
plt.plot(x, y, marker='o')
plt.title("ក្រាបសាមញ្ញ")
plt.show()

# គូសក្រាបជាមួយ Seaborn
sns.barplot(x=x, y=y)
plt.title("ក្រាបរបារសាមញ្ញ")
plt.show()
ការពន្យល់៖
- plt.plot() គូសក្រាបបន្ទាត់,
- sns.barplot() គូសក្រាបរបារ,
- plt.show() បង្ហាញក្រាប។

16.4 Scikit-learn (Machine Learning) - Scikit-learn (ការរៀនសូត្រដោយម៉ាស៊ីន)
Scikit-learn ជាបណ្ណាល័យសម្រាប់ការរៀនសូត្រដោយម៉ាស៊ីន ដែលផ្តល់ឧបករណ៍សម្រាប់ការចាត់ថ្នាក់ និងការទស្សន៍ទាយ។ ត្រូវតំឡើងដោយ pip install scikit-learn។

ឧទាហរណ៍៖

from sklearn.linear_model import LinearRegression
import numpy as np

# ទិន្នន័យ
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 5, 4])

# បង្កើត និងហ្វឹកហាត់គំរូ
model = LinearRegression()
model.fit(X, y)

# ទស្សន៍ទាយ
prediction = model.predict(np.array([[5]]))
print("ការទស្សន៍ទាយ:", prediction)
ការពន្យល់៖
- LinearRegression() បង្កើតគំរូតម្រង់ជួរ,
- model.fit() ហ្វឹកហាត់គំរូជាមួយទិន្នន័យ,
- model.predict() ទស្សន៍ទាយតម្លៃថ្មី។

លទ្ធផល (ឧទាហរណ៍)៖

ការទស្សន៍ទាយ: [4.8]
17. Web Scraping - ការប្រមូលទិន្នន័យពីគេហទំព័រ
Web Scraping គឺជាបច្ចេកទេសសម្រាប់ទាញយកទិន្នន័យពីគេហទំព័រដោយប្រើ Python។ ផ្នែកនេះនឹងបង្ហាញពីរបៀបប្រើបណ្ណាល័យដូចជា requests, BeautifulSoup និង Selenium ដើម្បីប្រមូលទិន្នន័យពីគេហទំព័រឋិតិវន្ត និងថាមវន្ត។

17.1 Using requests & BeautifulSoup - ការប្រើ requests និង BeautifulSoup
requests និង BeautifulSoup ជាឧបករណ៍ដ៏ពេញនិយមសម្រាប់ប្រមូលទិន្នន័យពីគេហទំព័រឋិតិវន្ត។ requests ប្រើសម្រាប់ទាញ HTML ហើយ BeautifulSoup ប្រើសម្រាប់វិភាគ និងស្វែងរកទិន្នន័យ។ ត្រូវតំឡើងដោយ pip install requests beautifulsoup4។

ឧទាហរណ៍៖

import requests
from bs4 import BeautifulSoup

# ទាញទំព័រ
url = "https://example.com"
response = requests.get(url)

# វិភាគ HTML
soup = BeautifulSoup(response.text, 'html.parser')

# ស្វែងរកទិន្នន័យ
title = soup.find('h1').text
print("ចំណងជើង:", title)
ការពន្យល់៖
- requests.get() ទាញ HTML ពី URL,
- BeautifulSoup() វិភាគ HTML,
- soup.find('h1') ស្វែងរកធាតុ h1 ដំបូង និងទាញអត្ថបទ។

លទ្ធផល (ឧទាហរណ៍)៖

ចំណងជើង: Example Domain
17.2 Scraping Dynamic Websites with Selenium - ការប្រមូលទិន្នន័យពីគេហទំព័រថាមវន្តជាមួយ Selenium
Selenium ជាឧបករណ៍សម្រាប់ប្រមូលទិន្នន័យពីគេហទំព័រថាមវន្តដែលប្រើ JavaScript ដើម្បីបង្កើតមាតិកា។ វាអនុញ្ញាតឱ្យធ្វើអន្តរកម្មជាមួយទំព័រដូចជាមនុស្ស។ ត្រូវតំឡើងដោយ pip install selenium និងទាញយក WebDriver (ឧ. ChromeDriver)។

ឧទាហរណ៍៖

from selenium import webdriver
from selenium.webdriver.common.by import By

# ចាប់ផ្តើម WebDriver
driver = webdriver.Chrome()  # ត្រូវបញ្ជាក់ផ្លូវទៅ ChromeDriver បើចាំបាច់
driver.get("https://example.com")

# ស្វែងរកទិន្នន័យ
title = driver.find_element(By.TAG_NAME, 'h1').text
print("ចំណងជើង:", title)

# បិទ WebDriver
driver.quit()
ការពន្យល់៖
- webdriver.Chrome() ចាប់ផ្តើមកម្មវិធីរុករក Chrome,
- driver.get() បើក URL,
- find_element(By.TAG_NAME, 'h1') ស្វែងរកធាតុ h1 និងទាញអត្ថបទ,
- driver.quit() បិទកម្មវិធីរុករក។

លទ្ធផល (ឧទាហរណ៍)៖

ចំណងជើង: Example Domain
18. Cybersecurity & Ethical Hacking - សន្តិសុខបច្ចេកវិទ្យា និងការវាយលុកប្រកបដោយក្រមសីលធម៌
Cybersecurity និង Ethical Hacking ជាផ្នែកសំខាន់ក្នុងការការពារប្រព័ន្ធ និងស្វែងរកចំណុចខ្សោយដោយប្រើបច្ចេកទេសស្របច្បាប់។ Python ផ្តល់ឧបករណ៍ដូចជា hashlib, cryptography និង socket module ដើម្បីអភិវឌ្ឍកម្មវិធីសន្តិសុខ និងសាកល្បងបណ្តាញ។

18.1 Hashing & Cryptography (hashlib, cryptography) - ការបម្លែងជាសញ្ញាសម្ងាត់ និងការអ៊ិនគ្រីប (hashlib, cryptography)
hashlib ជាម៉ូឌុលស្តង់ដារសម្រាប់បម្លែងទិន្នន័យជាសញ្ញាសម្ងាត់ (hashing) ដូចជា MD5 ឬ SHA-256។ cryptography ជាបណ្ណាល័យសម្រាប់ការអ៊ិនគ្រីប និងឌិគ្រីបទិន្នន័យ។ ត្រូវតំឡើង cryptography ដោយ pip install cryptography។

ឧទាហរណ៍៖

import hashlib
from cryptography.fernet import Fernet

# Hashing ជាមួយ hashlib
password = "mysecret"
hash_object = hashlib.sha256(password.encode())
print("SHA-256 Hash:", hash_object.hexdigest())

# Encryption ជាមួយ cryptography
key = Fernet.generate_key()
cipher = Fernet(key)
encrypted = cipher.encrypt(b"សូមស្វាគមន៍!")
print("ទិន្នន័យអ៊ិនគ្រីប:", encrypted)

# Decryption
decrypted = cipher.decrypt(encrypted)
print("ទិន្នន័យឌិគ្រីប:", decrypted.decode())
ការពន្យល់៖
- hashlib.sha256() បម្លែងទិន្នន័យជា hash SHA-256,
- Fernet.generate_key() បង្កើតកូនសោសម្រាប់អ៊ិនគ្រីប,
- cipher.encrypt() អ៊ិនគ្រីបទិន្នន័យ,
- cipher.decrypt() ឌិគ្រីបទិន្នន័យ។

លទ្ធផល (ឧទាហរណ៍)៖

SHA-256 Hash: 91fdeb5b4f6e7f90f3a3e9d5e6e8e9e4b5e8e5e6e8e9e4b5e8e5e6e8e9e4b5e8
ទិន្នន័យអ៊ិនគ្រីប: gAAAAAB... (ខុសគ្នារាល់ដង)
ទិន្នន័យឌិគ្រីប: សូមស្វាគមន៍!
18.2 Network Programming (socket module) - ការសរសេរកម្មវិធីបណ្តាញ (socket module)
socket module ជាម៉ូឌុលស្តង់ដារសម្រាប់ការសរសេរកម្មវិធីបណ្តាញ ដែលអនុញ្ញាតឱ្យភ្ជាប់ និងផ្ញើទិន្នន័យរវាងកុំព្យូទ័រ។ វាអាចប្រើសម្រាប់សាកល្បងសន្តិសុខបណ្តាញ ឬបង្កើត server/client។

ឧទាហរណ៍៖ (Server និង Client សាមញ្ញ)

# Server
import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 12345))
server.listen(1)
print("Server កំពុងរង់ចាំ...")

conn, addr = server.accept()
print("ភ្ជាប់ពី:", addr)
data = conn.recv(1024)
print("ទទួល:", data.decode())
conn.close()

# Client (ដំណើរការដាច់ដោយឡែក)
client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 12345))
client.send("សួស្តីពី Client!".encode())
client.close()
ការពន្យល់៖
- socket.socket() បង្កើត socket សម្រាប់ទំនាក់ទំនង,
- server.bind() ភ្ជាប់ server ទៅ port,
- server.listen() រង់ចាំការភ្ជាប់,
- conn.recv() ទទួលទិន្នន័យ,
- client.connect() ភ្ជាប់ទៅ server,
- client.send() ផ្ញើទិន្នន័យ។

លទ្ធផល (ឧទាហរណ៍)៖

Server កំពុងរង់ចាំ...
ភ្ជាប់ពី: ('127.0.0.1', 54321)
ទទួល: សួស្តីពី Client!`,
  },
  {
    id: 5,
    slug: "react",
    title: "React មូលដ្ឋាន",
    description: "រៀន React សម្រាប់បង្កើត UI ដែលមានអន្តរកម្មខ្ពស់",
    level: "មធ្យម",
    icon: "⚛️",
    language: "javascript",
    content: `React គឺជា JavaScript library សម្រាប់បង្កើត user interfaces។ វាប្រើ component-based architecture ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត UI ដែលអាចប្រើឡើងវិញបាន។`,
    codeExample: `1. React Introduction
React គឺជា library JavaScript ដ៏ខ្លាំងក្លាសម្រាប់ការបង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់។ វាត្រូវបានគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ការបង្កើតកម្មវិធីគេហទំព័រដែលមានលក្ខណៈឌីណាមិក, លឿន, និងមានស្ថានភាពអាចពង្រីកបាន។ ផ្នែកនេះផ្តល់នូវទិដ្ឋភាពទូទៅអំពី React, លក្ខណៈពិសេសរបស់វា, និងរបៀបចាប់ផ្តើមប្រើវា។

អត្ថន័យ៖ React គឺជា library មួយសម្រាប់បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់នៅលើគេហទំព័រ។

1.1 What is React?
React គឺជា JavaScript library សម្រាប់ការបង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់, ជាពិសេសសម្រាប់កម្មវិធីគេហទំព័រដែលមានទំព័រតែមួយ (SPA)។ វាត្រូវបានអភិវឌ្ឍន៍ដោយ Facebook (ឥឡូវ Meta) ហើយត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការបង្កើតកម្មវិធីគេហទំព័រដែលមានលក្ខណៈឌីណាមិក, លឿន, និងអាចពង្រីកបាន។ React អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍បង្កើត component UI ដែលអាចប្រើឡើងវិញ និងធ្វើបច្ចុប្បន្នភាព UI ដោយប្រសិទ្ធភាពនៅពេលទិន្នន័យផ្លាស់ប្តូរ។

អត្ថន័យ៖ React គឺជា library សម្រាប់បង្កើតចំណុចប្រទាក់អ្នកប្រើប្រាស់នៅលើគេហទំព័រ។

ចំណុចសំខាន់៖

React គឺជា library, មិនមែនជា framework ពេញលេញទេ។
វាប្រើ component-based architecture។
React ធ្វើតាម declarative approach, ធ្វើឱ្យវាងាយស្រួលក្នុងការសាកល្បង និងយល់។
1.2 Why Use React?
React មានប្រយោជន៍ជាច្រើនសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ ខាងក្រោមនេះគឺជាហេតុផលមួយចំនួនដែលអ្នកគួរប្រើ React៖

អត្ថន័យ៖ ហេតុអ្វីប្រើ React?

Reusable Components: React អនុញ្ញាតឱ្យអ្នកបង្កើត component ដែលអាចប្រើឡើងវិញបាន, ដែលធ្វើឱ្យការអភិវឌ្ឍន៍កាន់តែរហ័ស និងងាយស្រួល។
Virtual DOM: React ប្រើ Virtual DOM ដើម្បីធ្វើបច្ចុប្បន្នភាព UI ដោយប្រសិទ្ធភាព, ធ្វើឱ្យកម្មវិធីរបស់អ្នកលឿនជាងមុន។
Strong Community: React មានសហគមន៍ធំដែលគាំទ្រនិងផ្តល់នូវធនធានជាច្រើនសម្រាប់អ្នកអភិវឌ្ឍន៍។
1.3 React Features
React មានលក្ខណៈពិសេសជាច្រើនដែលធ្វើឱ្យវាក្លាយជាឧបករណ៍ដ៏ពេញនិយមសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ ខាងក្រោមនេះគឺជាលក្ខណៈពិសេសសំខាន់ៗរបស់ React៖

អត្ថន័យ៖ លក្ខណៈពិសេសរបស់ React។

JSX: JSX គឺជាស៊ាំភ្លេចនៃ JavaScript និង HTML ដែលធ្វើឱ្យការសរសេរកូដកាន់តែងាយស្រួល។
Component-Based: React ប្រើ component-based architecture ដែលធ្វើឱ្យកូដអាចប្រើឡើងវិញបាន។
Unidirectional Data Flow: React ប្រើ unidirectional data flow ដែលធ្វើឱ្យការគ្រប់គ្រង state កាន់តែងាយស្រួល។
1.4 Setting Up React (Vite & CRA)
ដើម្បីចាប់ផ្តើមប្រើ React, អ្នកត្រូវការរៀបចំបរិស្ថានអភិវឌ្ឍន៍។ មានឧបករណ៍ជាច្រើនដែលអាចជួយអ្នកក្នុងការបង្កើតកម្មវិធី React, រួមមាន Vite និង Create React App (CRA)។

អត្ថន័យ៖ របៀបរៀបចំបរិស្ថានអភិវឌ្ឍន៍សម្រាប់ React។

ជំហានដើម្បីរៀបចំបរិស្ថាន៖

Install Node.js: ទាញយកនិងដំឡើង Node.js ពីគេហទំព័រផ្លូវការ។
# Check Node.js version
node -v
Create a React App with Vite:
npm create vite@latest my-react-app --template react
Create a React App with CRA:
npx create-react-app my-react-app
Run the Development Server:
cd my-react-app
npm start
អត្ថន័យ៖ Vite និង CRA គឺជាឧបករណ៍ដែលជួយអ្នកបង្កើតកម្មវិធី React យ៉ាងរហ័ស។

1.5 Writing First React App
បន្ទាប់ពីរៀបចំបរិស្ថានអភិវឌ្ឍន៍រួច, អ្នកអាចចាប់ផ្តើមសរសេរកម្មវិធី React ដំបូងរបស់អ្នក។ ខាងក្រោមនេះគឺជាឧទាហរណ៍សាមញ្ញនៃកម្មវិធី React ដែលបង្ហាញអត្ថបទ "Hello, React!"។

អត្ថន័យ៖ របៀបសរសេរកម្មវិធី React ដំបូង។

ឧទាហរណ៍កូដ៖

// App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;
ជំហានដើម្បីដំណើរការ៖

បើកឯកសារ App.js នៅក្នុងថតរង្វង់របស់អ្នក។
ជំនួសកូដដែលមានដោយឧទាហរណ៍ខាងលើ។
រត់សឺវ័រអភិវឌ្ឍន៍៖
npm start
បើក browser ហើយចូលទៅ http://localhost:3000 ដើម្បីមើលលទ្ធផល។
លទ្ធផល៖

Hello, React!
2. React Basics
React Basics គ្របដណ្តប់អំពីគោលគំនិតជាមូលដ្ឋាននៃ React, រួមមាន JSX, ការ render elements, components, props, state, lifecycle, និងការគ្រប់គ្រង events។ ផ្នែកនេះផ្តល់នូវគ្រឹះដ៏រឹងមាំសម្រាប់ការបង្កើតកម្មវិធី React។

អត្ថន័យ៖ ផ្នែកនេះរៀនអំពីគោលគំនិតជាមូលដ្ឋាននៃ React។

2.1 JSX (JavaScript XML)
JSX គឺជាស៊ាំភ្លេចនៃ JavaScript និង HTML ដែលអនុញ្ញាតឱ្យអ្នកសរសេរកូដ HTML នៅក្នុង JavaScript។ វាធ្វើឱ្យការសរសេរ UI កាន់តែងាយស្រួល និងអាចអានបាន។

អត្ថន័យ៖ JSX គឺជាវិធីសរសេរ HTML នៅក្នុង JavaScript។

ឧទាហរណ៍ JSX៖

const element = <h1>Hello, JSX!</h1>;
ចំណាំ៖ JSX មិនមែនជា JavaScript សុទ្ធនោះទេ ហេតុនេះវាត្រូវបាន compile ទៅជា JavaScript ដោយ Babel។

2.2 Rendering Elements
Rendering elements គឺជាដំណើរការនៃការបង្ហាញ UI នៅលើអេក្រង់។ នៅក្នុង React, អ្នកអាច render elements ដោយប្រើ ReactDOM.render()។

អត្ថន័យ៖ របៀបបង្ហាញ UI នៅលើអេក្រង់។

ឧទាហរណ៍ Rendering៖

const element = <h1>Hello, React!</h1>;
ReactDOM.render(element, document.getElementById('root'));
ចំណាំ៖ ReactDOM.render() ត្រូវបានប្រើដើម្បីបង្ហាញ element នៅក្នុង DOM។

2.3 Components & Props
Components គឺជាផ្នែកដែលអាចប្រើឡើងវិញនៃ UI។ អ្នកអាចបង្កើត components ដោយប្រើ functions ឬ classes។ Props គឺជាទិន្នន័យដែលត្រូវបានបញ្ជូនទៅ components។

អត្ថន័យ៖ Components គឺជាផ្នែកនៃ UI ដែលអាចប្រើឡើងវិញ។

ឧទាហរណ៍ Function Component៖

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
ឧទាហរណ៍ Class Component៖

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
2.4 State & Lifecycle
State គឺជាទិន្នន័យផ្ទាល់ខ្លួនរបស់ component ដែលអាចផ្លាស់ប្តូរបាន។ Lifecycle methods គឺជាវិធីសាស្រ្តដែលត្រូវបានហៅនៅពេល component ត្រូវបានបង្កើត, ធ្វើបច្ចុប្បន្នភាព, ឬលុបចោល។

អត្ថន័យ៖ State គឺជាទិន្នន័យផ្ទាល់ខ្លួនរបស់ component, ហើយ lifecycle methods គឺជាវិធីសាស្រ្តដែលត្រូវបានហៅនៅពេល component ផ្លាស់ប្តូរ។

ឧទាហរណ៍ State៖

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <h1>It is {this.state.date.toLocaleTimeString()}.</h1>;
  }
}
2.5 Handling Events
Handling events គឺជាការគ្រប់គ្រង events ដូចជា clicks, input changes, និងផ្សេងៗទៀតនៅក្នុង React។ អ្នកអាចប្រើ event handlers ដើម្បីឆ្លើយតបទៅនឹង events។

អត្ថន័យ៖ របៀបគ្រប់គ្រង events នៅក្នុង React។

ឧទាហរណ៍ Event Handling៖

function Button() {
  function handleClick() {
    alert('Button clicked!');
  }

  return <button onClick={handleClick}>Click Me</button>;
}
3. React Components
React Components គឺជាផ្នែកសំខាន់នៃកម្មវិធី React។ ពួកវាអនុញ្ញាតឱ្យអ្នកបែងចែក UI ជាផ្នែកតូចៗដែលអាចប្រើឡើងវិញបាន។ ផ្នែកនេះគ្របដណ្តប់អំពី Functional Components, Class Components, ការបញ្ជូន Props, State នៅក្នុង Components, និង Lifecycle Methods។

អត្ថន័យ៖ React Components គឺជាផ្នែកសំខាន់នៃកម្មវិធី React ដែលអាចប្រើឡើងវិញបាន។

3.1 Functional Components
Functional Components គឺជាមុខងារសាមញ្ញដែលទទួល props ហើយ return JSX។ ពួកវាត្រូវបានប្រើយ៉ាងទូលំទូលាយនៅក្នុង React ដោយសារភាពសាមញ្ញ និងភាពងាយស្រួលនៃការប្រើប្រាស់។

អត្ថន័យ៖ Functional Components គឺជាមុខងារសាមញ្ញសម្រាប់បង្កើត UI។

ឧទាហរណ៍ Functional Component៖

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
ចំណាំ៖ Functional Components ត្រូវបានគេប្រើញឹកញាប់ជាង Class Components នៅក្នុង React សម័យទំនើប។

3.2 Class Components
Class Components គឺជា components ដែលត្រូវបានបង្កើតឡើងដោយប្រើ class នៅក្នុង JavaScript។ ពួកវាអាចមាន state និង lifecycle methods។

អត្ថន័យ៖ Class Components គឺជា components ដែលប្រើ class សម្រាប់ការបង្កើត UI។

ឧទាហរណ៍ Class Component៖

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
ចំណាំ៖ Class Components ត្រូវបានប្រើក្នុងករណីដែលត្រូវការ state ឬ lifecycle methods។

3.3 Passing Props
Props គឺជាទិន្នន័យដែលត្រូវបានបញ្ជូនពី parent component ទៅ child component។ ពួកវាជាវិធីសម្រាប់ចែករំលែកទិន្នន័យនៅក្នុង React។

អត្ថន័យ៖ Props គឺជាទិន្នន័យដែលត្រូវបានបញ្ជូនពី component មួយទៅ component មួយទៀត។

ឧទាហរណ៍ Passing Props៖

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}
3.4 State in Components
State គឺជាទិន្នន័យផ្ទាល់ខ្លួនរបស់ component ដែលអាចផ្លាស់ប្តូរបាន។ វាត្រូវបានប្រើដើម្បីគ្រប់គ្រងទិន្នន័យដែលផ្លាស់ប្តូរនៅក្នុង component។

អត្ថន័យ៖ State គឺជាទិន្នន័យផ្ទាល់ខ្លួនរបស់ component។

ឧទាហរណ៍ State៖

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
3.5 Component Lifecycle Methods
Lifecycle Methods គឺជាវិធីសាស្រ្តដែលត្រូវបានហៅនៅពេល component ត្រូវបានបង្កើត, ធ្វើបច្ចុប្បន្នភាព, ឬលុបចោល។ ពួកវាអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងការធ្វើការនៅពេលជាក់លាក់នៅក្នុងអាយុជីវិតរបស់ component។

អត្ថន័យ៖ Lifecycle Methods គឺជាវិធីសាស្រ្តដែលត្រូវបានហៅនៅពេល component ផ្លាស់ប្តូរ។

ឧទាហរណ៍ Lifecycle Methods៖

class Clock extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return <h1>It is {this.state.date.toLocaleTimeString()}.</h1>;
  }
}
4. React Hooks
React Hooks គឺជាមុខងារដែលអនុញ្ញាតឱ្យអ្នកប្រើ state និងលក្ខណៈពិសេសផ្សេងៗរបស់ React នៅក្នុង functional components។ ពួកវាត្រូវបានណែនាំនៅក្នុង React 16.8 ដើម្បីធ្វើឱ្យការសរសេរកូដកាន់តែងាយស្រួល និងអាចអានបាន។

អត្ថន័យ៖ React Hooks គឺជាមុខងារសម្រាប់ប្រើ state និងលក្ខណៈពិសេសផ្សេងៗនៅក្នុង functional components។

4.1 useState Hook
useState គឺជា Hook ដែលអនុញ្ញាតឱ្យអ្នកបន្ថែម state ទៅក្នុង functional components។ វាត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការគ្រប់គ្រងទិន្នន័យដែលផ្លាស់ប្តូរនៅក្នុង component។

អត្ថន័យ៖ useState គឺជា Hook សម្រាប់ប្រើ state នៅក្នុង functional components។

ឧទាហរណ៍ useState៖

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
4.2 useEffect Hook
useEffect គឺជា Hook ដែលអនុញ្ញាតឱ្យអ្នកអនុវត្ត side effects នៅក្នុង functional components។ វាត្រូវបានប្រើសម្រាប់ការធ្វើការងារដូចជា fetching data, ការកំណត់ subscriptions, ឬធ្វើបច្ចុប្បន្នភាព DOM។

អត្ថន័យ៖ useEffect គឺជា Hook សម្រាប់អនុវត្ត side effects នៅក្នុង functional components។

ឧទាហរណ៍ useEffect៖

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds}</p>;
}
4.3 useContext Hook
useContext គឺជា Hook ដែលអនុញ្ញាតឱ្យអ្នកប្រើ context នៅក្នុង functional components។ វាជាវិធីសាមញ្ញសម្រាប់ចែករំលែកទិន្នន័យរវាង components ដោយមិនចាំបាច់បញ្ជូន props តាមដំណាក់កាល។

អត្ថន័យ៖ useContext គឺជា Hook សម្រាប់ប្រើ context នៅក្នុង functional components។

ឧទាហរណ៍ useContext៖

import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? 'black' : 'white' }}>Themed Button</button>;
}
4.4 useRef Hook
useRef គឺជា Hook ដែលអនុញ្ញាតឱ្យអ្នកបង្កើត reference ទៅកាន់ DOM elements ឬរក្សាទុកតម្លៃដែលមិនផ្លាស់ប្តូរនៅពេល component ធ្វើបច្ចុប្បន្នភាព។

អត្ថន័យ៖ useRef គឺជា Hook សម្រាប់បង្កើត reference ទៅកាន់ DOM elements ឬរក្សាទុកតម្លៃដែលមិនផ្លាស់ប្តូរ។

ឧទាហរណ៍ useRef៖

import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
4.5 Custom Hooks
Custom Hooks គឺជាមុខងារដែលអ្នកបង្កើតឡើងដោយខ្លួនឯង ដើម្បីចែករំលែក logic រវាង components។ ពួកវាជាវិធីដ៏មានឥទ្ធិពលដើម្បីធ្វើឱ្យកូដអាចប្រើឡើងវិញបាន។

អត្ថន័យ៖ Custom Hooks គឺជាមុខងារដែលអ្នកបង្កើតឡើងដោយខ្លួនឯងសម្រាប់ចែករំលែក logic។

ឧទាហរណ៍ Custom Hook៖

import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, [url]);

  return data;
}
5. React Forms
React Forms ត្រូវបានប្រើសម្រាប់គ្រប់គ្រងការបញ្ចូលពីអ្នកប្រើប្រាស់នៅក្នុងកម្មវិធី React។ ផ្នែកនេះគ្របដណ្តប់អំពី Controlled Components, Uncontrolled Components, ការគ្រប់គ្រង Forms, និងការធ្វើ Validation។

អត្ថន័យ៖ React Forms គឺជាវិធីសម្រាប់គ្រប់គ្រងការបញ្ចូលពីអ្នកប្រើប្រាស់។

5.1 Controlled Components
Controlled Components គឺជា components ដែលត្រូវបានគ្រប់គ្រងដោយ state របស់ React។ តម្លៃនៃ input ត្រូវបានគ្រប់គ្រងដោយ state, ហើយការផ្លាស់ប្តូរតម្លៃនៃ input ត្រូវបានគ្រប់គ្រងដោយ event handlers។

អត្ថន័យ៖ Controlled Components គឺជា components ដែលត្រូវបានគ្រប់គ្រងដោយ state របស់ React។

ឧទាហរណ៍ Controlled Component៖

function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
5.2 Uncontrolled Components
Uncontrolled Components គឺជា components ដែលតម្លៃ input ត្រូវបានគ្រប់គ្រងដោយ DOM ជំនួសឱ្យ state របស់ React។ អ្នកអាចចូលប្រើតម្លៃ input ដោយប្រើ ref។

អត្ថន័យ៖ Uncontrolled Components គឺជា components ដែលតម្លៃ input ត្រូវបានគ្រប់គ្រងដោយ DOM។

ឧទាហរណ៍ Uncontrolled Component៖

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    alert('Input value: ' + inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
5.3 Form Handling
Form Handling គឺជាដំណើរការនៃការគ្រប់គ្រងការបញ្ចូលពីអ្នកប្រើប្រាស់នៅក្នុង form។ នៅក្នុង React, អ្នកអាចគ្រប់គ្រង form ដោយប្រើ Controlled Components ឬ Uncontrolled Components។

អត្ថន័យ៖ Form Handling គឺជាការគ្រប់គ្រងការបញ្ចូលពីអ្នកប្រើប្រាស់នៅក្នុង form។

ឧទាហរណ៍ Form Handling៖

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(/Username: {username}, Password: {password}/);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
5.4 Validation in Forms
Validation គឺជាដំណើរការនៃការពិនិត្យថាតើទិន្នន័យដែលបញ្ចូលដោយអ្នកប្រើប្រាស់ត្រឹមត្រូវឬអត់។ នៅក្នុង React, អ្នកអាចធ្វើ validation ដោយប្រើ state និង conditional rendering។

អត្ថន័យ៖ Validation គឺជាការពិនិត្យទិន្នន័យដែលបញ្ចូលដោយអ្នកប្រើប្រាស់។

ឧទាហរណ៍ Validation៖

function ValidationForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setError('Invalid email address');
    } else {
      setError('');
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
6. React Router (Navigation)
React Router គឺជាបណ្ណាល័យដ៏ខ្លាំងក្លាសម្រាប់គ្រប់គ្រងការរុករកនិង routing នៅក្នុងកម្មវិធី React។ វាអនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធី single-page applications (SPAs) ដែលមានទិដ្ឋភាពច្រើននិង routing ឌីណាមិក។ ផ្នែកនេះគ្របដណ្តប់អំពីរបៀបដំឡើង React Router, ការកំណត់ routing មូលដ្ឋាន, ការធ្វើការជាមួយ route parameters, និងការអនុវត្ត private routes។

អត្ថន័យ៖ React Router គឺជាបណ្ណាល័យសម្រាប់គ្រប់គ្រងការរុករកនិង routing នៅក្នុងកម្មវិធី React។

6.1 Installing React Router
ដើម្បីប្រើ React Router នៅក្នុងកម្មវិធី React របស់អ្នក, អ្នកត្រូវតែដំឡើងវាជាមុនសិន។ អ្នកអាចដំឡើង React Router ដោយប្រើ npm ឬ yarn។

អត្ថន័យ៖ របៀបដំឡើង React Router។

ឧទាហរណ៍ដំឡើង React Router៖

npm install react-router-dom
ឬប្រើ yarn៖

yarn add react-router-dom
6.2 Basic Routing (Route, Link, Navigate)
React Router ផ្តល់នូវ components ដូចជា Route, Link, និង Navigate សម្រាប់ការកំណត់ routing មូលដ្ឋាននៅក្នុងកម្មវិធី React។

អត្ថន័យ៖ របៀបកំណត់ routing មូលដ្ឋានដោយប្រើ Route, Link, និង Navigate។

ឧទាហរណ៍ Basic Routing៖

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}
6.3 Route Parameters (useParams)
React Router អនុញ្ញាតឱ្យអ្នកប្រើ route parameters ដើម្បីបង្កើត dynamic routes។ អ្នកអាចចូលប្រើ route parameters ដោយប្រើ hook useParams។

អត្ថន័យ៖ របៀបប្រើ route parameters ដើម្បីបង្កើត dynamic routes។

ឧទាហរណ៍ Route Parameters៖

import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
6.4 Private Routes & Redirects
Private routes គឺជា routes ដែលតម្រូវឱ្យអ្នកប្រើប្រាស់ចូលប្រើបានតែនៅពេលពួកគេបានចូលប្រើប្រាស់។ អ្នកអាចបង្កើត private routes ដោយប្រើ Navigate និង conditional rendering។

អត្ថន័យ៖ របៀបបង្កើត private routes និង redirects។

ឧទាហរណ៍ Private Routes៖

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Login() {
  return <h1>Login Page</h1>;
}
7. React Styling
React ផ្តល់វិធីជាច្រើនដើម្បី style components របស់អ្នក, រួមមាន Inline CSS, CSS Modules, Styled Components, និង frameworks utility-first ដូចជា Tailwind CSS។ ផ្នែកនេះគ្របដណ្តប់អំពីវិធីសាស្រ្តផ្សេងៗក្នុងការ style components នៅក្នុង React។

អត្ថន័យ៖ React ផ្តល់វិធីជាច្រើនដើម្បី style components របស់អ្នក, រួមមាន Inline CSS, CSS Modules, Styled Components, និង frameworks utility-first ដូចជា Tailwind CSS។

7.1 Inline CSS
Inline CSS អនុញ្ញាតឱ្យអ្នកអនុវត្ត styles ដោយផ្ទាល់ទៅលើ JSX elements ដោយប្រើ attribute style។ Styles ត្រូវបានសរសេរជា JavaScript objects ជាមួយនឹង property names ជា camelCase។

អត្ថន័យ៖ Inline CSS អនុញ្ញាតឱ្យអ្នកអនុវត្ត styles ដោយផ្ទាល់ទៅលើ JSX elements ដោយប្រើ attribute style។

ឧទាហរណ៍ Inline CSS៖

function InlineStyleExample() {
  const styles = {
    color: 'blue',
    fontSize: '20px',
    backgroundColor: 'lightgray',
  };

  return <div style={styles}>This is an inline-styled div.</div>;
}
7.2 CSS Modules
CSS Modules អនុញ្ញាតឱ្យអ្នកសរសេរ CSS នៅក្នុងឯកសារដាច់ដោយឡែក និងចង្អុល styles ទៅកាន់ components ជាក់លាក់។ វាជួយការពារកុំឱ្យ styles មានការប៉ះទង្គិចគ្នានៅក្នុងកម្មវិធីធំៗ។

អត្ថន័យ៖ CSS Modules អនុញ្ញាតឱ្យអ្នកសរសេរ CSS នៅក្នុងឯកសារដាច់ដោយឡែក និងចង្អុល styles ទៅកាន់ components ជាក់លាក់។

ឧទាហរណ៍ CSS Modules៖

import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.myClass}>This is styled with CSS Modules.</div>;
}
ឯកសារ MyComponent.module.css៖

.myClass {
  color: red;
  font-size: 18px;
}
7.3 Styled Components
Styled Components គឺជា library មួយដែលអនុញ្ញាតឱ្យអ្នកសរសេរ CSS នៅក្នុង JavaScript។ វាប្រើ tagged template literals ដើម្បីបង្កើត components ដែលមាន styles ភ្ជាប់ជាមួយ។

អត្ថន័យ៖ Styled Components គឺជា library សម្រាប់សរសេរ CSS នៅក្នុង JavaScript។

ឧទាហរណ៍ Styled Components៖

import styled from 'styled-components';

const StyledDiv = styled.div/
  color: green;
  font-size: 20px;
  background-color: lightyellow;
/;

function StyledComponentExample() {
  return <StyledDiv>This is a styled component.</StyledDiv>;
}
7.4 Tailwind CSS
Tailwind CSS គឺជា utility-first CSS framework ដែលផ្តល់នូវ classes ជាច្រើនសម្រាប់ style components ដោយផ្ទាល់នៅក្នុង JSX។ វាធ្វើឱ្យការសរសេរ CSS កាន់តែងាយស្រួល និងរហ័ស។

អត្ថន័យ៖ Tailwind CSS គឺជា utility-first CSS framework សម្រាប់ style components ដោយផ្ទាល់នៅក្នុង JSX។

ឧទាហរណ៍ Tailwind CSS៖

function TailwindExample() {
  return (
    <div className="text-blue-500 text-xl bg-gray-100 p-4">
      This is styled with Tailwind CSS.
    </div>
  );
}
8. React API Calls
កម្មវិធី React ជាញឹកញាប់ត្រូវការទាញយកទិន្នន័យពី APIs ដើម្បីបង្ហាញខ្លឹមសារឌីណាមិក។ ផ្នែកនេះគ្របដណ្តប់អំពីរបៀបធ្វើ API calls ដោយប្រើ Fetch API និង Axios, ការគ្រប់គ្រង loading និង error states, និងការអនុវត្ត pagination និង infinite scrolling។

អត្ថន័យ៖ React API Calls គឺជាការទាញយកទិន្នន័យពី APIs ដើម្បីបង្ហាញខ្លឹមសារឌីណាមិកនៅក្នុងកម្មវិធី React។

8.1 Fetching Data with Fetch API
Fetch API គឺជា built-in method នៅក្នុង JavaScript សម្រាប់ធ្វើ HTTP requests។ វាងាយស្រួលប្រើ និងមិនត្រូវការ library បន្ថែម។

អត្ថន័យ៖ Fetch API គឺជា method ដែលមានស្រាប់នៅក្នុង JavaScript សម្រាប់ធ្វើ HTTP requests។

ឧទាហរណ៍ Fetch API៖

import React, { useEffect, useState } from 'react';

function FetchDataExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
8.2 Fetching Data with Axios
Axios គឺជា library ប្រព័ន្ធទូទៅសម្រាប់ធ្វើ HTTP requests។ វាផ្តល់នូវ features ជាច្រើនដូចជា automatic JSON parsing, request cancellation, និង error handling។

អត្ថន័យ៖ Axios គឺជា library សម្រាប់ធ្វើ HTTP requests ដែលមាន features ជាច្រើន។

ឧទាហរណ៍ Axios៖

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
8.3 Handling Loading & Errors
នៅពេលធ្វើ API calls, វាសំខាន់ណាស់ក្នុងការគ្រប់គ្រង loading states និង error states។ នេះជួយឱ្យអ្នកប្រើប្រាស់ដឹងថាទិន្នន័យកំពុងត្រូវបានទាញយក ឬមានបញ្ហាកើតឡើង។

អត្ថន័យ៖ ការគ្រប់គ្រង loading និង error states នៅពេលធ្វើ API calls។

ឧទាហរណ៍ Handling Loading & Errors៖

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoadingErrorExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
8.4 Pagination & Infinite Scrolling
Pagination និង Infinite Scrolling គឺជាវិធីសាស្រ្តពីរយ៉ាងដើម្បីគ្រប់គ្រងការបង្ហាញទិន្នន័យច្រើន។ Pagination បែងចែកទិន្នន័យជាទំព័រផ្សេងៗ, រីឯ Infinite Scrolling ទាញយកទិន្នន័យថ្មីនៅពេលអ្នកប្រើប្រាស់រំកិលទៅផ្នែកខាងក្រោម។

អត្ថន័យ៖ Pagination និង Infinite Scrolling គឺជាវិធីសាស្រ្តពីរយ៉ាងដើម្បីគ្រប់គ្រងការបង្ហាញទិន្នន័យច្រើន។

ឧទាហរណ៍ Pagination៖

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaginationExample() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(/https://jsonplaceholder.typicode.com/posts?_page={page}&_limit=10/)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page + 1)}>Next Page</button>
    </div>
  );
}
ឧទាហរណ៍ Infinite Scrolling៖

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InfiniteScrollExample() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(/https://jsonplaceholder.typicode.com/posts?_page={page}&_limit=10/)
      .then(response => setData(prevData => [...prevData, ...response.data]))
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
9. React State Management
State management គឺជាផ្នែកសំខាន់នៃការបង្កើតកម្មវិធី React ដែលមានស្ថានភាពអាចពង្រីកបាន និងងាយស្រួលថែទាំ។ ផ្នែកនេះគ្របដណ្តប់អំពីបច្ចេកទេសគ្រប់គ្រង state ផ្សេងៗ, រួមមាន useReducer hook, Context API, Redux Toolkit, និង libraries ទំនើបដូចជា Zustand និង Recoil។

អត្ថន័យ៖ State management គឺជាផ្នែកសំខាន់នៃការបង្កើតកម្មវិធី React ដែលមានស្ថានភាពអាចពង្រីកបាន និងងាយស្រួលថែទាំ។

9.1 useReducer Hook
useReducer គឺជា hook ជំនួសឱ្យ useState សម្រាប់គ្រប់គ្រង state logic ស្មុគស្មាញ។ វាមានប្រយោជន៍ជាពិសេសនៅពេល state transitions ពឹងផ្អែកលើ state មុន ឬពាក់ព័ន្ធនឹងតម្លៃរងច្រើន។

អត្ថន័យ៖ useReducer គឺជា hook សម្រាប់គ្រប់គ្រង state logic ស្មុគស្មាញ។

ឧទាហរណ៍ useReducer៖

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
9.2 Context API
Context API គឺជាវិធីសាស្រ្តមួយដើម្បីចែករំលែក state រវាង components ដោយមិនចាំបាច់បញ្ជូន props តាមដំណាក់កាល។ វាមានប្រយោជន៍សម្រាប់ការគ្រប់គ្រង global state។

អត្ថន័យ៖ Context API គឺជាវិធីសាស្រ្តចែករំលែក state រវាង components ដោយមិនចាំបាច់បញ្ជូន props។

ឧទាហរណ៍ Context API៖

import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>Themed Button</button>;
}
9.3 Redux Toolkit
Redux Toolkit គឺជា library ដែលសម្រួលការប្រើ Redux ដោយផ្តល់នូវ tools និង abstractions ដើម្បីធ្វើឱ្យការគ្រប់គ្រង state កាន់តែងាយស្រួល។

អត្ថន័យ៖ Redux Toolkit គឺជា library សម្រាប់សម្រួលការប្រើ Redux។

ឧទាហរណ៍ Redux Toolkit៖

import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

function Counter() {
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>Increment</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
9.4 Zustand & Recoil
Zustand និង Recoil គឺជា libraries ទំនើបសម្រាប់គ្រប់គ្រង state នៅក្នុង React។ Zustand ផ្តល់នូវ API សាមញ្ញ, រីឯ Recoil ផ្តោតលើការគ្រប់គ្រង state ដែលមានលក្ខណៈឌីណាមិក។

អត្ថន័យ៖ Zustand និង Recoil គឺជា libraries ទំនើបសម្រាប់គ្រប់គ្រង state។

ឧទាហរណ៍ Zustand៖

import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
ឧទាហរណ៍ Recoil៖

import { atom, useRecoilState } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
10. React Performance Optimization
ការធ្វើឱ្យកម្មវិធី React មានស្ថានភាពលឿន និងឆ្លើយតបយ៉ាងល្អ គឺជាការសំខាន់ណាស់។ ផ្នែកនេះគ្របដណ្តប់អំពីបច្ចេកទេសដូចជា React.memo(), useCallback, useMemo, និង lazy loading ជាមួយ Suspense ដើម្បីកែលម្អស្ថានភាពកម្មវិធី React របស់អ្នក។

អត្ថន័យ៖ ការធ្វើឱ្យកម្មវិធី React មានស្ថានភាពលឿន និងឆ្លើយតបយ៉ាងល្អ។

10.1 React.memo()
React.memo() គឺជា higher-order component (HOC) ដែលជួយកាត់បន្ថយការ re-render នៃ components នៅពេល props មិនផ្លាស់ប្តូរ។ វាមានប្រយោជន៍សម្រាប់ការបង្កើត components ដែលមានស្ថានភាពល្អ។

អត្ថន័យ៖ React.memo() គឺជា HOC សម្រាប់កាត់បន្ថយការ re-render នៃ components។

ឧទាហរណ៍ React.memo()៖

import React, { memo } from 'react';

const MyComponent = memo(function MyComponent(props) {
  return <div>{props.value}</div>;
});

export default MyComponent;
10.2 useCallback Hook
useCallback គឺជា hook ដែលជួយកាត់បន្ថយការ re-create functions នៅពេល components re-render។ វាមានប្រយោជន៍សម្រាប់ការបង្កើត callback functions ដែលមានស្ថានភាពល្អ។

អត្ថន័យ៖ useCallback គឺជា hook សម្រាប់កាត់បន្ថយការ re-create functions។

ឧទាហរណ៍ useCallback៖

import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
10.3 useMemo Hook
useMemo គឺជា hook ដែលជួយកាត់បន្ថយការ re-compute values នៅពេល components re-render។ វាមានប្រយោជន៍សម្រាប់ការគណនាតម្លៃដែលចំណាយពេលច្រើន។

អត្ថន័យ៖ useMemo គឺជា hook សម្រាប់កាត់បន្ថយការ re-compute values។

ឧទាហរណ៍ useMemo៖

import React, { useMemo } from 'react';

function MyComponent({ list }) {
  const sortedList = useMemo(() => {
    return list.sort((a, b) => a - b);
  }, [list]);

  return (
    <ul>
      {sortedList.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
10.4 Lazy Loading & Suspense
Lazy Loading គឺជាបច្ចេកទេសដើម្បី load components តែនៅពេលចាំបាច់, ដែលជួយកាត់បន្ថយការ load ដំបូងនៃកម្មវិធី។ Suspense គឺជា component ដែលអនុញ្ញាតឱ្យអ្នកបង្ហាញ fallback UI នៅពេល components កំពុងត្រូវបាន load។

អត្ថន័យ៖ Lazy Loading គឺជាបច្ចេកទេស load components តែនៅពេលចាំបាច់, ហើយ Suspense គឺជា component សម្រាប់បង្ហាញ fallback UI។

ឧទាហរណ៍ Lazy Loading & Suspense៖

import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
11. Advanced React Concepts
Advanced React concepts ដូចជា Higher-Order Components (HOC), Render Props, Error Boundaries, និង Portals អនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធីដែលមានភាពអាចបត់បែន និងរឹងមាំ។ ផ្នែកនេះរុករកគំនិតទាំងនេះយ៉ាងលម្អិត។

អត្ថន័យ៖ Advanced React concepts ដូចជា Higher-Order Components (HOC), Render Props, Error Boundaries, និង Portals អនុញ្ញាតឱ្យអ្នកបង្កើតកម្មវិធីដែលមានភាពអាចបត់បែន និងរឹងមាំ។

11.1 Higher-Order Components (HOC)
Higher-Order Components (HOC) គឺជា function ដែលទទួល component មួយហើយ return component ថ្មីដែលមានលក្ខណៈបន្ថែម។ វាជាវិធីសាស្រ្តមួយដើម្បីចែករំលែក logic រវាង components។

អត្ថន័យ៖ Higher-Order Components (HOC) គឺជា function សម្រាប់បង្កើត components ថ្មីដែលមានលក្ខណៈបន្ថែម។

ឧទាហរណ៍ HOC៖

import React from 'react';

function withLoading(WrappedComponent) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...props} />;
  };
}

function MyComponent({ data }) {
  return <div>{data}</div>;
}

const MyComponentWithLoading = withLoading(MyComponent);
11.2 Render Props
Render Props គឺជាវិធីសាស្រ្តមួយដើម្បីចែករំលែក logic រវាង components ដោយប្រើ prop ដែលជា function។ វាអនុញ្ញាតឱ្យ components ប្រើ logic ដូចគ្នាប៉ុន្តែ render UI ផ្សេងគ្នា។

អត្ថន័យ៖ Render Props គឺជាវិធីសាស្រ្តចែករំលែក logic រវាង components។

ឧទាហរណ៍ Render Props៖

import React from 'react';

function DataProvider({ render }) {
  const data = 'Hello, Render Props!';
  return render(data);
}

function MyComponent() {
  return (
    <DataProvider render={data => <div>{data}</div>} />
  );
}
11.3 Error Boundaries
Error Boundaries គឺជា components ដែលចាប់ errors នៅក្នុង child components ហើយបង្ហាញ fallback UI ជំនួសឱ្យការបរាជ័យទាំងស្រុងនៃកម្មវិធី។

អត្ថន័យ៖ Error Boundaries គឺជា components សម្រាប់ចាប់ errors និងបង្ហាញ fallback UI។

ឧទាហរណ៍ Error Boundaries៖

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function MyComponent() {
  return (
    <ErrorBoundary>
      <ComponentThatMayError />
    </ErrorBoundary>
  );
}
11.4 Portals
Portals គឺជាវិធីសាស្រ្តមួយដើម្បី render children ទៅក្នុង DOM node ដែលនៅខាងក្រៅ hierarchy របស់ parent component។ វាមានប្រយោជន៍សម្រាប់ការបង្កើត modals, tooltips, និង popovers។

អត្ថន័យ៖ Portals គឺជាវិធីសាស្រ្តសម្រាប់ render children ទៅក្នុង DOM node ដែលនៅខាងក្រៅ hierarchy របស់ parent component។

ឧទាហរណ៍ Portals៖

import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById('modal-root')
  );
}

function App() {
  return (
    <div>
      <Modal>
        <h1>This is a modal!</h1>
      </Modal>
    </div>
  );
}
12. React and Firebase
Firebase គឺជា platform backend-as-a-service ដ៏ខ្លាំងក្លាដែលផ្តល់ features ដូចជា authentication, database, និង hosting។ ផ្នែកនេះគ្របដណ្តប់អំពីរបៀបបញ្ចូល Firebase ជាមួយ React ដើម្បីបង្កើតកម្មវិធី full-stack។

អត្ថន័យ៖ Firebase គឺជា platform backend-as-a-service ដ៏ខ្លាំងក្លាដែលផ្តល់ features ដូចជា authentication, database, និង hosting។

12.1 Firebase Authentication
Firebase Authentication គឺជា service ដែលអនុញ្ញាតឱ្យអ្នកបង្កើតការចូលប្រើប្រាស់ដោយប្រើ email, Google, Facebook, និង providers ផ្សេងៗទៀត។ វាងាយស្រួលប្រើ និងមានសុវត្ថិភាពខ្ពស់។

អត្ថន័យ៖ Firebase Authentication គឺជា service សម្រាប់ការចូលប្រើប្រាស់ដោយប្រើ email, Google, Facebook, និង providers ផ្សេងៗទៀត។

ឧទាហរណ៍ Firebase Authentication៖

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Logged in user:', user);
    })
    .catch((error) => {
      console.error('Error logging in:', error);
    });
}
12.2 Firestore Database
Firestore Database គឺជា NoSQL database ដែលផ្តល់នូវការទុកដាក់ទិន្នន័យជាពេលជាក់លាក់ (real-time)។ វាងាយស្រួលប្រើ និងមាន scalability ខ្ពស់។

អត្ថន័យ៖ Firestore Database គឺជា NoSQL database សម្រាប់ទុកដាក់ទិន្នន័យជាពេលជាក់លាក់។

ឧទាហរណ៍ Firestore Database៖

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore();

async function addData() {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'John Doe',
      email: 'john@example.com',
    });
    console.log('Document written with ID:', docRef.id);
  } catch (error) {
    console.error('Error adding document:', error);
  }
}
12.3 Hosting React on Firebase
Firebase Hosting គឺជា service ដែលអនុញ្ញាតឱ្យអ្នក deploy និង host កម្មវិធី React របស់អ្នកយ៉ាងងាយស្រួល។ វាផ្តល់នូវ performance ខ្ពស់ និង SSL ដោយស្វ័យប្រវត្តិ។

អត្ថន័យ៖ Firebase Hosting គឺជា service សម្រាប់ deploy និង host កម្មវិធី React។

ជំហានដើម្បី Host React on Firebase៖

Install Firebase CLI៖
npm install -g firebase-tools
Login to Firebase៖
firebase login
Initialize Firebase project៖
firebase init
Build your React app៖
npm run build
Deploy to Firebase៖
firebase deploy
13. React Testing
Testing គឺជាផ្នែកសំខាន់នៃការបង្កើតកម្មវិធី React ដែលអាចទុកចិត្តបាន និងងាយស្រួលថែទាំ។ ផ្នែកនេះគ្របដណ្តប់អំពី unit testing ជាមួយ Jest, component testing ជាមួយ React Testing Library, និង end-to-end testing ជាមួយ Cypress។

អត្ថន័យ៖ Testing គឺជាផ្នែកសំខាន់នៃការបង្កើតកម្មវិធី React ដែលអាចទុកចិត្តបាន និងងាយស្រួលថែទាំ។

13.1 Testing with Jest
Jest គឺជា testing framework ដ៏ពេញនិយមសម្រាប់ unit testing នៅក្នុង JavaScript និង React។ វាផ្តល់នូវ tools ដើម្បីសរសេរ tests, run tests, និងវាយតម្លៃលទ្ធផល។

អត្ថន័យ៖ Jest គឺជា testing framework សម្រាប់ unit testing។

ឧទាហរណ៍ Testing with Jest៖

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
13.2 React Testing Library
React Testing Library គឺជា library សម្រាប់ test React components ដោយផ្តោតលើអ្វីដែលអ្នកប្រើប្រាស់ឃើញ និងធ្វើ។ វាជួយឱ្យអ្នកសរសេរ tests ដែលជិតស្និទ្ធនឹងការប្រើប្រាស់ពិត។

អត្ថន័យ៖ React Testing Library គឺជា library សម្រាប់ test React components។

ឧទាហរណ៍ React Testing Library៖

import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders MyComponent', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});
13.3 End-to-End Testing with Cypress
Cypress គឺជា tool សម្រាប់ end-to-end testing ដែលអនុញ្ញាតឱ្យអ្នក test កម្មវិធីរបស់អ្នកពីចាប់ផ្តើមដល់ចប់។ វាផ្តល់នូវ interface ដ៏ងាយស្រួល និង features ដូចជា time travel debugging។

អត្ថន័យ៖ Cypress គឺជា tool សម្រាប់ end-to-end testing។

ឧទាហរណ៍ End-to-End Testing with Cypress៖

describe('My First Test', () => {
  it('Visits the app', () => {
    cy.visit('/');
    cy.contains('Hello, World!');
  });
});
14. React Deployment
Deploying កម្មវិធី React គឺជាជំហានចុងក្រោយដើម្បីធ្វើឱ្យវាអាចចូលប្រើប្រាស់បានដោយអ្នកប្រើប្រាស់។ ផ្នែកនេះគ្របដណ្តប់អំពីរបៀប deploy កម្មវិធី React ទៅកាន់ platforms ដូចជា Vercel និង Netlify, ព្រមទាំងរបៀប build កម្មវិធីសម្រាប់ production។

អត្ថន័យ៖ Deploying កម្មវិធី React គឺជាជំហានចុងក្រោយដើម្បីធ្វើឱ្យវាអាចចូលប្រើប្រាស់បានដោយអ្នកប្រើប្រាស់។

14.1 Deploying to Vercel
Vercel គឺជា platform ដ៏ពេញនិយមសម្រាប់ deploy កម្មវិធី React។ វាផ្តល់នូវការធ្វើ deployment ដោយស្វ័យប្រវត្តិ, performance optimization, និង scalability។

អត្ថន័យ៖ Vercel គឺជា platform សម្រាប់ deploy កម្មវិធី React។

ជំហានដើម្បី Deploy to Vercel៖

Install Vercel CLI៖
npm install -g vercel
Login to Vercel៖
vercel login
Deploy your React app៖
vercel
14.2 Deploying to Netlify
Netlify គឺជា platform មួយទៀតដែលល្អសម្រាប់ deploy កម្មវិធី React។ វាផ្តល់នូវការធ្វើ deployment ដោយស្វ័យប្រវត្តិ, continuous integration, និង serverless functions។

អត្ថន័យ៖ Netlify គឺជា platform សម្រាប់ deploy កម្មវិធី React។

ជំហានដើម្បី Deploy to Netlify៖

Install Netlify CLI៖
npm install -g netlify-cli
Login to Netlify៖
netlify login
Deploy your React app៖
netlify deploy --prod
14.3 Building for Production
មុនពេល deploy កម្មវិធី React របស់អ្នក, អ្នកត្រូវតែ build វាសម្រាប់ production។ នេះជាជំហានសំខាន់ដើម្បីបង្កើត optimized build ដែលត្រៀមខ្លួនសម្រាប់ deployment។

អត្ថន័យ៖ Building for production គឺជាជំហានសំខាន់មុនពេល deploy កម្មវិធី React។

ជំហានដើម្បី Build for Production៖

npm run build
បន្ទាប់ពី build, ឯកសារនឹងត្រូវបានរក្សាទុកនៅក្នុងថត build/។ អ្នកអាច deploy ថតនេះទៅកាន់ platform ណាមួយដូចជា Vercel ឬ Netlify។`
  },
  {
    id: 7,
    slug: "mongodb",
    title: "MongoDB មូលដ្ឋាន",
    description: "រៀនពីមូលដ្ឋានទិន្នន័យ NoSQL ជាមួយ MongoDB",
    level: "មធ្យម",
    icon: "🍃",
    language: "javascript",
    content: `MongoDB គឺជាមូលដ្ឋានទិន្នន័យ NoSQL ដែលរក្សាទុកទិន្នន័យជាទម្រង់ JSON-like documents។`,
    codeExample: `មិនទាន់មានថ្នាក់នេះទេ Admin និងរៀបចំចេញឆាប់ៗនេះ។`
  },
  {
    id: 8,
    slug: "mysql",
    title: "MySQL មូលដ្ឋាន",
    description: "រៀនពីការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យដោយប្រើ SQL",
    level: "ថ្នាក់ដើម",
    icon: "🗃️",
    language: "sql",
    content: `SQL (Structured Query Language) គឺជាភាសាស្តង់ដារសម្រាប់គ្រប់គ្រងមូលដ្ឋានទិន្នន័យ relational។`,
    codeExample: `មិនទាន់មានថ្នាក់នេះទេ Admin និងរៀបចំចេញឆាប់ៗនេះ។`
  },
  {
    id: 9,
    slug: "git",
    title: "Git មូលដ្ឋាន",
    description: "រៀនពីការគ្រប់គ្រងកូដជាមួយ Git version control",
    level: "ថ្នាក់ដើម",
    icon: "📦",
    language: "bash",
    content: `Git គឺជាប្រព័ន្ធគ្រប់គ្រងកំណែ (version control system) ដែលពេញនិយមបំផុត។ វាជួយតាមដានការផ្លាស់ប្តូរកូដ។`,
    codeExample: `មិនទាន់មានថ្នាក់នេះទេ Admin និងរៀបចំចេញឆាប់ៗនេះ។`
  },
  {
    id: 10,
    slug: "typescript",
    title: "TypeScript មូលដ្ឋាន",
    description: "រៀន TypeScript សម្រាប់សរសេរ JavaScript ដែលមានប្រភេទទិន្នន័យ",
    level: "មធ្យម",
    icon: "🔷",
    language: "typescript",
    content: `TypeScript គឺជា superset នៃ JavaScript ដែលបន្ថែម static type checking។ វាជួយរកកំហុសមុនពេលដំណើរការកូដ។`,
    codeExample: `មិនទាន់មានថ្នាក់នេះទេ Admin និងរៀបចំចេញឆាប់ៗនេះ។`
  },
  {
    id: 14,
    slug: "php",
    title: "PHP មូលដ្ឋាន",
    description: "រៀន PHP សម្រាប់បង្កើត web applications ផ្នែក server",
    level: "ថ្នាក់ដើម",
    icon: "🐘",
    language: "php",
    content: `PHP គឺជាភាសា server-side scripting ដែលពេញនិយមសម្រាប់បង្កើតគេហទំព័រ dynamic។`,
    codeExample: `1. ការណែនាំអំពី PHP
PHP គឺជាភាសាសរសេរស្គ្រីបដែលត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍគេហទំព័រឌីណាមិក។ វាត្រូវបានប្រើសម្រាប់បង្កើតកម្មវិធីគេហទំព័រដែលមានភាពអន្តរកម្មខ្ពស់ និងអាចភ្ជាប់ជាមួយមូលដ្ឋានទិន្នន័យ។

1.1. តើ PHP គឺជាអ្វី?
PHP គឺជាភាសាសរសេរស្គ្រីបដែលត្រូវបានប្រើសម្រាប់ការអភិវឌ្ឍគេហទំព័រឌីណាមិក។ វាត្រូវបានបង្កើតឡើងដោយ Rasmus Lerdorf នៅឆ្នាំ 1994។ PHP មានន័យថា "PHP: Hypertext Preprocessor"។

<?php
  echo "Hello, World!";
?>
លទ្ធផល៖

Hello, World!
1.2. ប្រវត្តិនិងលក្ខណៈពិសេសនៃ PHP
PHP ត្រូវបានបង្កើតឡើងដោយ Rasmus Lerdorf នៅឆ្នាំ 1994។ វាត្រូវបានគេប្រើជាមធ្យោបាយសម្រាប់តាមដានការចូលមើលរបស់អ្នកប្រើប្រាស់នៅលើគេហទំព័រផ្ទាល់ខ្លួនរបស់គាត់។ ក្រោយមក PHP បានអភិវឌ្ឍជាភាសាសរសេរស្គ្រីបពេញលេញសម្រាប់ការអភិវឌ្ឍគេហទំព័រ។

លក្ខណៈពិសេសនៃ PHP:
អាចប្រើប្រាស់ជាមួយ HTML បានយ៉ាងងាយស្រួល។
គាំទ្រការភ្ជាប់មូលដ្ឋានទិន្នន័យជាច្រើន ដូចជា MySQL, PostgreSQL, MongoDB។
មានសហគមន៍ធំ និងឯកសារដ៏សម្បូរបែប។

1.3. វាក្យសម្ព័ន្ធនិងរចនាសម្ព័ន្ធមូលដ្ឋាននៃ PHP
PHP មានវាក្យសម្ព័ន្ធដ៏សាមញ្ញ និងងាយស្រួលយល់។ កូដ PHP ត្រូវបានដាក់នៅក្នុងស្លាក <?php ?>។ ឧទាហរណ៍៖

<?php
  $name = "John";
  echo "Hello, " . $name;
?>
លទ្ធផល៖

Hello, John
1.4. ការដំណើរការ PHP លើម៉ាស៊ីនបម្រើ
PHP ត្រូវបានដំណើរការនៅលើម៉ាស៊ីនបម្រើ (Server)។ ដើម្បីដំណើរការ PHP អ្នកត្រូវការម៉ាស៊ីនបម្រើដែលគាំទ្រកូដ PHP ដូចជា Apache ឬ Nginx។ អ្នកក៏អាចប្រើកម្មវិធីដូចជា XAMPP ឬ WAMP ដើម្បីដំឡើងម៉ាស៊ីនបម្រើក្នុងស្ថានីយរបស់អ្នក។

ជំហានដើម្បីដំណើរការ PHP:
ដំឡើងម៉ាស៊ីនបម្រើដូចជា XAMPP ឬ WAMP។
បង្កើតឯកសារ PHP នៅក្នុងថត htdocs (សម្រាប់ XAMPP)។
បើកឧបករណ៍រុករក និងវាយអាសយដ្ឋាន localhost/yourfile.php។

2. PHP Basics
PHP គឺជាភាសាស្គ្រីបដែលរត់នៅលើសឺវ័រ ដែលត្រូវបានរចនាឡើងសម្រាប់ការអភិវឌ្ឍន៍គេហទំព័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីគោលគំនិតមូលដ្ឋាននៃ PHP រួមមានអថេរ ប្រភេទទិន្នន័យ ថេរ ប្រមាណវិធី ស្ថាបត្យកម្មគ្រប់គ្រង និងរង្វិលជុំ។

2.1. អថេរ និងប្រភេទទិន្នន័យ
នៅក្នុង PHP អថេរត្រូវបានប្រើដើម្បីផ្ទុកទិន្នន័យ។ ពួកវាចាប់ផ្តើមដោយសញ្ញាដុល្លារ (/$/) ហើយបន្ទាប់ដោយឈ្មោះអថេរ។ PHP គាំទ្រប្រភេទទិន្នន័យផ្សេងៗ រួមមានឃ្លា (string) ចំនួនគត់ (integer) ចំនួនទសភាគ (float) តម្លៃប៊ូលីន (boolean) អារេ (array) និងវត្ថុ (object)។

// Example: Variables and Data Types
$name = "John Doe"; // String
$age = 25; // Integer
$height = 5.9; // Float
$isStudent = true; // Boolean
$fruits = array("Apple", "Banana", "Orange"); // Array

echo "Name: $name, Age: $age, Height: $height";
លទ្ធផល៖

Name: John Doe, Age: 25, Height: 5.9
2.2. ថេរ
ថេរគឺដូចអថេរ ប៉ុន្តែតម្លៃរបស់វាមិនអាចផ្លាស់ប្តូរបាននៅពេលដែលបានកំណត់។ ពួកវាត្រូវបានកំណត់ដោយប្រើអនុគមន៍ /define() / ឬពាក្យគន្លឹះ /const/។

// Example: Constants
define("PI", 3.14159);
const SITE_NAME = "MyWebsite";

echo "PI: " . PI . ", Site Name: " . SITE_NAME;
លទ្ធផល៖

PI: 3.14159, Site Name: MyWebsite
2.3. ប្រមាណវិធីនៅក្នុង PHP
PHP គាំទ្រប្រមាណវិធីផ្សេងៗ រួមមានប្រមាណវិធីគណនានព្វន្ធ ប្រមាណវិធីប្រៀបធៀប ប្រមាណវិធីតក្ក និងប្រមាណវិធីផ្សំ។

ប្រមាណវិធីគណនានព្វន្ធ (Arithmetic Operators)
ប្រមាណវិធីគណនានព្វន្ធត្រូវបានប្រើសម្រាប់ធ្វើប្រតិបត្តិការគណនាមូលដ្ឋានដូចជា បូក ដក គុណ និងចែក។

// Example: Arithmetic Operators
$a = 10;
$b = 5;

$sum = $a + $b; // Addition
$diff = $a - $b; // Subtraction
$product = $a * $b; // Multiplication
$quotient = $a / $b; // Division
$remainder = $a % $b; // Modulus (Remainder)

echo "Sum: $sum, Difference: $diff, Product: $product, Quotient: $quotient, Remainder: $remainder";
លទ្ធផល៖

Sum: 15, Difference: 5, Product: 50, Quotient: 2, Remainder: 0
ប្រមាណវិធីប្រៀបធៀប (Comparison Operators)
ប្រមាណវិធីប្រៀបធៀបត្រូវបានប្រើដើម្បីប្រៀបធៀបតម្លៃពីរ ហើយប្រគល់តម្លៃជា /true/ ឬ /false/។

// Example: Comparison Operators
$a = 10;
$b = 5;

$isEqual = ($a == $b); // Equal to
$isNotEqual = ($a != $b); // Not equal to
$isGreater = ($a > $b); // Greater than
$isLess = ($a < $b); // Less than
$isGreaterOrEqual = ($a >= $b); // Greater than or equal to
$isLessOrEqual = ($a <= $b); // Less than or equal to

echo "Is Equal: $isEqual, Is Not Equal: $isNotEqual, Is Greater: $isGreater, Is Less: $isLess, Is Greater or Equal: $isGreaterOrEqual, Is Less or Equal: $isLessOrEqual";
លទ្ធផល៖

Is Equal: , Is Not Equal: 1, Is Greater: 1, Is Less: , Is Greater or Equal: 1, Is Less or Equal: 
ប្រមាណវិធីតក្ក (Logical Operators)
ប្រមាណវិធីតក្កត្រូវបានប្រើដើម្បីផ្សំលក្ខខណ្ឌជាច្រើន។

// Example: Logical Operators
$a = true;
$b = false;

$and = ($a && $b); // Logical AND
$or = ($a || $b); // Logical OR
$not = !$a; // Logical NOT

echo "AND: $and, OR: $or, NOT: $not";
លទ្ធផល៖

AND: , OR: 1, NOT: 
ប្រមាណវិធីផ្សំ (Assignment Operators)
ប្រមាណវិធីផ្សំត្រូវបានប្រើដើម្បីផ្តល់តម្លៃដល់អថេរ។

// Example: Assignment Operators
$a = 10;
$a += 5; // $a = $a + 5
$a -= 3; // $a = $a - 3
$a *= 2; // $a = $a * 2
$a /= 4; // $a = $a / 4

echo "Value of a: $a";
លទ្ធផល៖

Value of a: 6
2.4. ស្ថាបត្យកម្មគ្រប់គ្រង (if, if-else, if-elseif-else)
ស្ថាបត្យកម្មគ្រប់គ្រងអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងលំហូរនៃកម្មវិធីដោយផ្អែកលើលក្ខខណ្ឌ។ PHP គាំទ្រស្ថាបត្យកម្មដូចជា /if/, /if-else/, និង /if-elseif-else/។

if Statement
ស្ថាបត្យកម្ម /if/ ត្រូវបានប្រើដើម្បីអនុវត្តកូដប្រសិនបើលក្ខខណ្ឌជាការពិត។

// Example: if Statement
$age = 20;

if ($age >= 18) {
  echo "You are an adult.";
}
លទ្ធផល៖

You are an adult.
if-else Statement
ស្ថាបត្យកម្ម /if-else/ ត្រូវបានប្រើដើម្បីអនុវត្តកូដមួយប្រសិនបើលក្ខខណ្ឌជាការពិត និងកូដមួយទៀតប្រសិនបើលក្ខខណ្ឌមិនពិត។

// Example: if-else Statement
$age = 15;

if ($age >= 18) {
  echo "You are an adult.";
} else {
  echo "You are a minor.";
}
លទ្ធផល៖

You are a minor.
if-elseif-else Statement
ស្ថាបត្យកម្ម /if-elseif-else/ ត្រូវបានប្រើដើម្បីពិនិត្យលក្ខខណ្ឌច្រើន។

// Example: if-elseif-else Statement
$score = 85;

if ($score >= 90) {
  echo "Grade: A";
} elseif ($score >= 80) {
  echo "Grade: B";
} elseif ($score >= 70) {
  echo "Grade: C";
} else {
  echo "Grade: D";
}
លទ្ធផល៖

Grade: B
switch Statement Variations
ស្ថាបត្យកម្ម /switch/ ក៏អាចប្រើសម្រាប់ពិនិត្យលក្ខខណ្ឌដូចគ្នានេះបានដែរ។ ខាងក្រោមជាឧទាហរណ៍ពីរបន្ថែម៖

// Switch Example 1: Using Conditions
$score = 85;

switch (true) {
    case ($score >= 90):
        echo "Grade: A";
        break;
    case ($score >= 80):
        echo "Grade: B";
        break;
    case ($score >= 70):
        echo "Grade: C";
        break;
    default:
        echo "Grade: D";
}
លទ្ធផល៖

Grade: B
// Switch Example 2: Using Score Ranges
$score = 85;
$gradeRange = (int)($score / 10);

switch ($gradeRange) {
    case 10:
    case 9:
        echo "Grade: A";
        break;
    case 8:
        echo "Grade: B";
        break;
    case 7:
        echo "Grade: C";
        break;
    default:
        echo "Grade: D";
}
លទ្ធផល៖

Grade: B
2.5. រង្វិលជុំ (for, while, do-while, foreach)
រង្វិលជុំអនុញ្ញាតឱ្យអ្នកអនុវត្តកូដដដែលៗដោយផ្អែកលើលក្ខខណ្ឌ។ PHP គាំទ្ររង្វិលជុំដូចជា /for/, /while/, /do-while/, និង /foreach/។

for Loop
រង្វិលជុំ /for/ ត្រូវបានប្រើដើម្បីអនុវត្តកូដច្រើនដង នៅពេលអ្នកដឹងចំនួនដងដែលអ្នកចង់អនុវត្ត។

// Example: for Loop
for ($i = 1; $i <= 5; $i++) {
  echo "Number: $i
";
}
លទ្ធផល៖

Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
while Loop
រង្វិលជុំ /while/ ត្រូវបានប្រើដើម្បីអនុវត្តកូដដដែលៗ ប្រសិនបើលក្ខខណ្ឌជាការពិត។

// Example: while Loop
$i = 1;

while ($i <= 5) {
  echo "Number: $i
";
  $i++;
}
លទ្ធផល៖

Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
do-while Loop
រង្វិលជុំ /do-while/ ត្រូវបានប្រើដើម្បីអនុវត្តកូដយ៉ាងហោចណាស់មួយដង ហើយបន្តអនុវត្តប្រសិនបើលក្ខខណ្ឌជាការពិត។

// Example: do-while Loop
$i = 1;

do {
  echo "Number: $i
";
  $i++;
} while ($i <= 5);
លទ្ធផល៖

Number: 1
Number: 2
Number: 3
Number: 4
Number: 5
foreach Loop
រង្វិលជុំ /foreach/ ត្រូវបានប្រើដើម្បីអនុវត្តកូដសម្រាប់ធាតុនីមួយៗក្នុងអារេ។

// Example: foreach Loop
$fruits = array("Apple", "Banana", "Orange");

foreach ($fruits as $fruit) {
  echo "$fruit
";
}
លទ្ធផល៖

Apple
Banana
Orange
3. Functions in PHP
អនុគមន៍នៅក្នុង PHP គឺជាផ្នែកមួយដ៏សំខាន់នៃការសរសេរកូដ។ ពួកវាអនុញ្ញាតឱ្យអ្នករៀបចំកូដជាប្លុកដែលអាចប្រើឡើងវិញបាន និងគ្រប់គ្រងលំហូរនៃកម្មវិធីយ៉ាងមានប្រសិទ្ធភាព។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការកំណត់និងហៅអនុគមន៍ ប៉ារ៉ាម៉ែត្រនិងតម្លៃត្រឡប់ វិសាលភាពអថេរ និងអនុគមន៍ដែលមានស្រាប់នៅក្នុង PHP។

3.1. Defining and Calling Functions
អនុគមន៍នៅក្នុង PHP ត្រូវបានកំណត់ដោយប្រើពាក្យគន្លឹះ /function/។ អ្នកអាចហៅអនុគមន៍នេះនៅពេលណាក៏បាន ដើម្បីអនុវត្តកូដដែលបានកំណត់នៅក្នុងអនុគមន៍។

// ឧទាហរណ៍៖ កំណត់និងហៅអនុគមន៍
function greet() {
  echo "Hello, World!";
}

greet(); // ហៅអនុគមន៍
លទ្ធផល៖

Hello, World!
3.2. Function Parameters and Return Values
អនុគមន៍អាចទទួលប៉ារ៉ាម៉ែត្រដើម្បីធ្វើការជាមួយទិន្នន័យ និងត្រឡប់តម្លៃដោយប្រើពាក្យគន្លឹះ /return/។

// ឧទាហរណ៍៖ ប៉ារ៉ាម៉ែត្រនិងតម្លៃត្រឡប់
function add($a, $b) {
  return $a + $b;
}

$result = add(5, 3); // តម្លៃត្រឡប់គឺ 8
echo "Result: $result";
លទ្ធផល៖

Result: 8
3.3. Variable Scope and Global Variables
អថេរដែលបានកំណត់នៅក្នុងអនុគមន៍មានវិសាលភាពក្នុងមុខងារនោះ។ ដើម្បីចូលប្រើអថេរក្រៅមុខងារ អ្នកអាចប្រើពាក្យគន្លឹះ /global/។

// ឧទាហរណ៍៖ វិសាលភាពអថេរ និងអថេរសកល
$x = 10; // អថេរសកល

function test() {
  global $x; // ចូលប្រើអថេរសកល
  echo "Value of x: $x";
}

test();
លទ្ធផល៖

Value of x: 10
3.4. Built-in PHP Functions
PHP មានអនុគមន៍ដែលមានស្រាប់ជាច្រើន ដែលអ្នកអាចប្រើដើម្បីអនុវត្តកិច្ចការផ្សេងៗ ដូចជាការធ្វើម៉ាស៊ីនគិតលេខ ការគ្រប់គ្រងឃ្លា និងការងារផ្សេងៗទៀត។

// ឧទាហរណ៍៖ អនុគមន៍ដែលមានស្រាប់
$string = "Hello, World!";
echo "Length: " . strlen($string); // ប្រវែងឃ្លា
echo "Uppercase: " . strtoupper($string); // បំប្លែងអក្សរធំ
លទ្ធផល៖

Length: 13
Uppercase: HELLO, WORLD!
4. Arrays in PHP
អារេ (Arrays) នៅក្នុង PHP គឺជាប្រភេទទិន្នន័យដែលអនុញ្ញាតឱ្យអ្នកផ្ទុកតម្លៃច្រើនក្នុងអថេរតែមួយ។ អារេអាចមានប្រភេទផ្សេងៗ ដូចជា អារេដែលមានសន្ទស្សន៍ (Indexed Arrays) អារេដែលមានគោលគំនិត (Associative Arrays) និងអារេពហុវិមាត្រ (Multidimensional Arrays)។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីប្រភេទអារេទាំងនេះ ព្រមទាំងមុខងារដែលផ្តល់ដោយ PHP ដើម្បីគ្រប់គ្រងអារេ។

4.1. Indexed Arrays
អារេដែលមានសន្ទស្សន៍ (Indexed Arrays) គឺជាអារេដែលតម្លៃត្រូវបានចងភ្ជាប់ជាមួយសន្ទស្សន៍លេខ។ សន្ទស្សន៍ចាប់ផ្តើមពីលេខ 0។

// ឧទាហរណ៍៖ អារេដែលមានសន្ទស្សន៍
$fruits = array("Apple", "Banana", "Orange");

echo "First fruit: " . $fruits[0]; // ទទួលបានតម្លៃដំបូង
លទ្ធផល៖

First fruit: Apple
4.2. Associative Arrays
អារេដែលមានគោលគំនិត (Associative Arrays) គឺជាអារេដែលតម្លៃត្រូវបានចងភ្ជាប់ជាមួយសន្ទស្សន៍ដែលមានឈ្មោះ (keys)។

// ឧទាហរណ៍៖ អារេដែលមានគោលគំនិត
$person = array("name" => "John", "age" => 25, "city" => "Phnom Penh");

echo "Name: " . $person["name"]; // ទទួលបានតម្លៃដោយប្រើ key
លទ្ធផល៖

Name: John
4.3. Multidimensional Arrays
អារេពហុវិមាត្រ (Multidimensional Arrays) គឺជាអារេដែលមានអារេផ្សេងៗនៅក្នុងវា។ វាអនុញ្ញាតឱ្យអ្នកផ្ទុកទិន្នន័យក្នុងទម្រង់តារាង។

// ឧទាហរណ៍៖ អារេពហុវិមាត្រ
$students = array(
  array("name" => "John", "age" => 20),
  array("name" => "Jane", "age" => 22),
  array("name" => "Doe", "age" => 21)
);

echo "First student name: " . $students[0]["name"]; // ទទួលបានតម្លៃពីអារេពហុវិមាត្រ
លទ្ធផល៖

First student name: John
4.4. Array Functions
PHP ផ្តល់មុខងារជាច្រើនដើម្បីគ្រប់គ្រងអារេ។ មុខងារទាំងនេះអនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយអារេយ៉ាងមានប្រសិទ្ធភាព ដូចជាការបញ្ចូល ការលុប ការស្វែងរក និងការរៀបចំអារេ។

// ឧទាហរណ៍៖ មុខងារអារេ
$fruits = array("Apple", "Banana", "Orange");

// រាប់ចំនួនធាតុក្នុងអារេ
echo "Total fruits: " . count($fruits);

// បញ្ចូលធាតុថ្មីទៅអារេ
array_push($fruits, "Mango");
print_r($fruits);
លទ្ធផល៖

Total fruits: 3
Array
(
    [0] => Apple
    [1] => Banana
    [2] => Orange
    [3] => Mango
)
5. Strings in PHP
ឃ្លា (Strings) នៅក្នុង PHP គឺជាប្រភេទទិន្នន័យដែលផ្ទុកអក្សរ ឬអត្ថបទ។ PHP ផ្តល់មុខងារជាច្រើនដើម្បីធ្វើការជាមួយឃ្លា ដូចជាការបំបែក ការភ្ជាប់ ការស្វែងរក និងការជំនួស។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីមុខងារដែលពាក់ព័ន្ធនឹងឃ្លា ការភ្ជាប់ឃ្លា និងការប្រើកន្សោមធម្មតា (Regular Expressions)។

5.1. String Manipulation Functions
PHP ផ្តល់មុខងារជាច្រើនដើម្បីធ្វើការជាមួយឃ្លា។ មុខងារទាំងនេះអនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយឃ្លាយ៉ាងមានប្រសិទ្ធភាព ដូចជាការបំបែក ការស្វែងរក និងការផ្លាស់ប្តូរឃ្លា។

// ឧទាហរណ៍៖ មុខងារធ្វើការជាមួយឃ្លា
$text = "Hello, World!";

// ប្រវែងឃ្លា
echo "Length: " . strlen($text);

// បំបែកឃ្លាជាអក្សរតូច
echo "Lowercase: " . strtolower($text);

// បំបែកឃ្លាជាអក្សរធំ
echo "Uppercase: " . strtoupper($text);
លទ្ធផល៖

Length: 13
Lowercase: hello, world!
Uppercase: HELLO, WORLD!
5.2. String Concatenation
ការភ្ជាប់ឃ្លា (String Concatenation) គឺជាការតភ្ជាប់ឃ្លាពីរ ឬច្រើនជាមួយគ្នា។ នៅក្នុង PHP អ្នកអាចប្រើសញ្ញា /./ ដើម្បីភ្ជាប់ឃ្លា។

// ឧទាហរណ៍៖ ការភ្ជាប់ឃ្លា
$firstName = "John";
$lastName = "Doe";

// ភ្ជាប់ឃ្លា
$fullName = $firstName . " " . $lastName;
echo "Full Name: " . $fullName;
លទ្ធផល៖

Full Name: John Doe
5.3. Regular Expressions in PHP
កន្សោមធម្មតា (Regular Expressions) គឺជាវិធីដ៏មានឥទ្ធិពលដើម្បីស្វែងរក ឬផ្លាស់ប្តូរឃ្លាដោយប្រើលំនាំ។ PHP គាំទ្រកន្សោមធម្មតាតាមរយៈមុខងារ /preg_match/ និង /preg_replace/។

// ឧទាហរណ៍៖ កន្សោមធម្មតា
$text = "The quick brown fox jumps over the lazy dog.";

// ស្វែងរកពាក្យ "fox"
if (preg_match("/fox/", $text)) {
  echo "Found 'fox' in the text.";
}

// ជំនួសពាក្យ "dog" ជាមួយ "cat"
$newText = preg_replace("/dog/", "cat", $text);
echo "New Text: " . $newText;
លទ្ធផល៖

Found 'fox' in the text.
New Text: The quick brown fox jumps over the lazy cat.
6. Superglobals in PHP
Superglobals គឺជាអថេរពិសេសនៅក្នុង PHP ដែលមានភាពងាយស្រួលក្នុងការចូលប្រើពីគ្រប់ទីកន្លែងនៅក្នុងស្គ្រីប។ ពួកវាត្រូវបានប្រើដើម្បីចូលប្រើទិន្នន័យពីទម្រង់ (forms) កុហក (cookies) និងព័ត៌មានអំពីសឺវ័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពី Superglobals ដូចជា /$_GET/, /$_POST/, /$_REQUEST/, /$_SERVER/, /$_SESSION/, និង /$_COOKIE/។

6.1. $_GET and $_POST
/$_GET/ និង /$_POST/ គឺជា Superglobals ដែលត្រូវបានប្រើដើម្បីចូលប្រើទិន្នន័យដែលបានផ្ញើតាមរយៈទម្រង់ HTML ដោយប្រើវិធីសាស្ត្រ GET ឬ POST។

// ឧទាហរណ៍៖ $_GET
// URL: http://example.com?name=John&age=25
echo "Name: " . $_GET['name']; // John
echo "Age: " . $_GET['age']; // 25

// ឧទាហរណ៍៖ $_POST
// ទម្រង់ HTML ដែលប្រើ method="POST"
echo "Name: " . $_POST['name'];
echo "Age: " . $_POST['age'];
លទ្ធផល៖

Name: John
Age: 25
6.2. $_REQUEST
/$_REQUEST/ គឺជា Superglobal ដែលផ្ទុកទិន្នន័យដែលបានផ្ញើតាមរយៈទម្រង់ HTML ដោយប្រើវិធីសាស្ត្រ GET, POST, ឬ COOKIE។ វាជាការរួមបញ្ចូលនៃ /$_GET/, /$_POST/, និង /$_COOKIE/។

// ឧទាហរណ៍៖ $_REQUEST
// URL: http://example.com?name=John
echo "Name: " . $_REQUEST['name']; // John
លទ្ធផល៖

Name: John
6.3. $_SERVER
/$_SERVER/ គឺជា Superglobal ដែលផ្ទុកព័ត៌មានអំពីសឺវ័រ និងបរិស្ថាននៃកម្មវិធី។ វាផ្តល់ព័ត៌មានដូចជា URL បច្ចុប្បន្ន វិធីសាស្ត្រស្នើសុំ (request method) និងព័ត៌មានផ្សេងៗទៀត។

// ឧទាហរណ៍៖ $_SERVER
echo "Server Name: " . $_SERVER['SERVER_NAME']; // example.com
echo "Request Method: " . $_SERVER['REQUEST_METHOD']; // GET or POST
echo "Script Name: " . $_SERVER['SCRIPT_NAME']; // /index.php
លទ្ធផល៖

Server Name: example.com
Request Method: GET
Script Name: /index.php
6.4. $_SESSION and $_COOKIE
/$_SESSION/ និង /$_COOKIE/ គឺជា Superglobals ដែលត្រូវបានប្រើដើម្បីគ្រប់គ្រងសម័យ (sessions) និងកុហក (cookies)។ /$_SESSION/ ផ្ទុកទិន្នន័យដែលត្រូវបានរក្សាទុកនៅលើសឺវ័រ ខណៈពេលដែល /$_COOKIE/ ផ្ទុកទិន្នន័យដែលត្រូវបានរក្សាទុកនៅលើកុំព្យូទ័រអ្នកប្រើប្រាស់។

// ឧទាហរណ៍៖ $_SESSION
session_start();
$_SESSION['username'] = 'JohnDoe';
echo "Session Username: " . $_SESSION['username']; // JohnDoe

// ឧទាហរណ៍៖ $_COOKIE
setcookie("user", "JohnDoe", time() + 3600, "/");
echo "Cookie User: " . $_COOKIE['user']; // JohnDoe
លទ្ធផល៖

Session Username: JohnDoe
Cookie User: JohnDoe
7. សំណុំបែបបទ និងការបញ្ចូលពីអ្នកប្រើ
សំណុំបែបបទ (Forms) គឺជាផ្នែកមួយដ៏សំខាន់នៃការអភិវឌ្ឍន៍គេហទំព័រ។ ពួកវាអនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បញ្ចូលទិន្នន័យ ហើយទិន្នន័យនេះត្រូវបានផ្ញើទៅសឺវ័រដើម្បីដោះស្រាយ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រងទិន្នន័យពីសំណុំបែបបទ ការធ្វើសុពលភាពទិន្នន័យ និងការការពារការវាយប្រហារដូចជា SQL Injection និង XSS។

7.1. ការគ្រប់គ្រងទិន្នន័យពីសំណុំបែបបទ
ទិន្នន័យពីសំណុំបែបបទអាចត្រូវបានផ្ញើតាមរយៈវិធីសាស្ត្រ GET ឬ POST។ PHP ផ្តល់ Superglobals ដូចជា /$_GET/ និង /$_POST/ ដើម្បីចូលប្រើទិន្នន័យនេះ។

// ឧទាហរណ៍៖ ការគ្រប់គ្រងទិន្នន័យពីសំណុំបែបបទ
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  echo "Name: $name, Email: $email";
}
លទ្ធផល៖

Name: John Doe, Email: john@example.com
7.2. ការធ្វើសុពលភាពទិន្នន័យពីសំណុំបែបបទ
ការធ្វើសុពលភាពទិន្នន័យគឺជាដំណើរការនៃការធានាថាទិន្នន័យដែលបានបញ្ចូលដោយអ្នកប្រើប្រាស់គឺត្រឹមត្រូវ និងសុវត្ថិភាព។ នេះអាចរួមបញ្ចូលការពិនិត្យថាតើអ្នកប្រើប្រាស់បានបញ្ចូលអ៊ីមែលត្រឹមត្រូវ ឬថាតើវាលចាំបាច់ត្រូវបានបំពេញ។

// ឧទាហរណ៍៖ ការធ្វើសុពលភាពទិន្នន័យ
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];

  if (empty($name)) {
    echo "Name is required.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
  } else {
    echo "Form submitted successfully!";
  }
}
លទ្ធផល៖

Form submitted successfully!
7.3. ការការពារ SQL Injection និង XSS
SQL Injection និង XSS (Cross-Site Scripting) គឺជាការវាយប្រហារសុវត្ថិភាពដែលអាចបង្កឱ្យមានការខូចខាតធ្ងន់ធ្ងរដល់កម្មវិធីរបស់អ្នក។ ដើម្បីការពារការវាយប្រហារទាំងនេះ អ្នកគួរតែប្រើមុខងារដូចជា /mysqli_real_escape_string/ ឬ /htmlspecialchars/។

// ឧទាហរណ៍៖ ការការពារ SQL Injection
$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);

// ឧទាហរណ៍៖ ការការពារ XSS
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
លទ្ធផល៖

ទិន្នន័យត្រូវបានការពារពី SQL Injection និង XSS។
8. ការគ្រប់គ្រងកំហុស និងការបំបាត់កំហុស
ការគ្រប់គ្រងកំហុស និងការបំបាត់កំហុសគឺជាជំនាញសំខាន់សម្រាប់អ្នកអភិវឌ្ឍ JavaScript។ នៅក្នុងផ្នែកនេះ យើងនឹងស្វែងយល់ពីវិធីសាស្រ្ត console, ការបំបាត់កំហុសដោយប្រើ DevTools របស់កម្មវិធីរុករក និងការប្រើ /try...catch/ និង /throw/។

8.1. វិធីសាស្រ្ត Console (console.log, console.error)
Console methods ដូចជា /console.log/ និង /console.error/ ត្រូវបានប្រើដើម្បីបង្ហាញព័ត៌មាននៅក្នុង console របស់កម្មវិធីរុករក។

// ឧទាហរណ៍៖ Console Methods
console.log("This is a log message."); // បង្ហាញសារធម្មតា
console.error("This is an error message."); // បង្ហាញសារកំហុស
លទ្ធផល៖

This is a log message.
This is an error message.
8.2. ការបំបាត់កំហុសដោយប្រើ DevTools
DevTools របស់កម្មវិធីរុករកផ្តល់ឧបករណ៍សម្រាប់បំបាត់កំហុស ដូចជា breakpoints, step-through debugging, និងការតាមដានតម្លៃអថេរ។

// ឧទាហរណ៍៖ Debugging with DevTools
function add(a, b) {
  debugger; // Pause execution here
  return a + b;
}

console.log(add(2, 3));
លទ្ធផល៖

នៅពេលដំណើរការ កូដនឹងផ្អាកនៅ /debugger/ ហើយអ្នកអាចពិនិត្យតម្លៃអថេរនៅក្នុង DevTools។
8.3. try...catch និង throw
/try...catch/ អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងកំហុសដោយមិនធ្វើឱ្យកម្មវិធីរបស់អ្នកឈប់ដំណើរការ។ /throw/ អនុញ្ញាតឱ្យអ្នកបង្កើតកំហុសផ្ទាល់ខ្លួន។

// ឧទាហរណ៍៖ try...catch និង throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.message); // បង្ហាញសារកំហុស
}
លទ្ធផល៖

Cannot divide by zero!
8. Working with Files in PHP
PHP ផ្តល់មុខងារជាច្រើនដើម្បីធ្វើការជាមួយឯកសារ ដូចជាការអាន ការសរសេរ ការផ្ទុកឡើង និងការគ្រប់គ្រងឯកសារនៅលើសឺវ័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រងឯកសារ ការផ្ទុកឡើងឯកសារ និងការធ្វើការជាមួយឯកសារប្រភេទ CSV និង JSON។

8.1. File Handling (Read/Write)
PHP អនុញ្ញាតឱ្យអ្នកអាន និងសរសេរទិន្នន័យទៅកាន់ឯកសារ។ អ្នកអាចប្រើមុខងារដូចជា /fopen/, /fread/, /fwrite/, និង /fclose/ ដើម្បីធ្វើការជាមួយឯកសារ។

// ឧទាហរណ៍៖ ការសរសេរទិន្នន័យទៅកាន់ឯកសារ
$file = fopen("example.txt", "w");
fwrite($file, "Hello, World!");
fclose($file);

// ឧទាហរណ៍៖ ការអានទិន្នន័យពីឯកសារ
$file = fopen("example.txt", "r");
echo fread($file, filesize("example.txt"));
fclose($file);
លទ្ធផល៖

Hello, World!
8.2. Uploading Files
PHP អនុញ្ញាតឱ្យអ្នកផ្ទុកឡើងឯកសារពីទម្រង់ HTML ទៅកាន់សឺវ័រ។ អ្នកអាចប្រើ Superglobal /$_FILES/ ដើម្បីចូលប្រើឯកសារដែលបានផ្ទុកឡើង។

// ឧទាហរណ៍៖ ការផ្ទុកឡើងឯកសារ
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $target_dir = "uploads/";
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
  move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);
  echo "File uploaded successfully.";
}
លទ្ធផល៖

File uploaded successfully.
8.3. Handling CSV and JSON Files
PHP អនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយឯកសារប្រភេទ CSV និង JSON។ អ្នកអាចប្រើមុខងារដូចជា /fgetcsv/ ដើម្បីអានឯកសារ CSV និង /json_encode/ និង /json_decode/ ដើម្បីធ្វើការជាមួយទិន្នន័យ JSON។

// ឧទាហរណ៍៖ ការអានឯកសារ CSV
$file = fopen("example.csv", "r");
while (($data = fgetcsv($file)) !== FALSE) {
  print_r($data);
}
fclose($file);

// ឧទាហរណ៍៖ ការធ្វើការជាមួយទិន្នន័យ JSON
$data = array("name" => "John", "age" => 25);
$json = json_encode($data);
echo $json;

$decoded = json_decode($json, true);
print_r($decoded);
លទ្ធផល៖

Array
(
    [0] => John
    [1] => 25
)
{"name":"John","age":25}
Array
(
    [name] => John
    [age] => 25
)
9. Object-Oriented Programming (OOP) in PHP
ការសរសេរកម្មវិធីដោយប្រើប្រាស់វិធីសាស្ត្រប្រធានវត្ថុ (Object-Oriented Programming - OOP) គឺជាវិធីសាស្ត្រដ៏មានប្រសិទ្ធភាពក្នុងការរៀបចំកូដ។ PHP គាំទ្រវិធីសាស្ត្រនេះ ដោយផ្តល់លក្ខណៈពិសេសដូចជា Classes, Objects, Inheritance, Polymorphism, Interfaces, Abstract Classes, និង Traits។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីគោលគំនិតទាំងនេះ។

9.1. Classes and Objects
Class គឺជាគំរូ (blueprint) សម្រាប់បង្កើត Objects។ Object គឺជាករណីជាក់លាក់នៃ Class។ នៅក្នុង PHP អ្នកអាចកំណត់ Class ដោយប្រើពាក្យគន្លឹះ /class/ ហើយបង្កើត Object ដោយប្រើពាក្យគន្លឹះ /new/។

// ឧទាហរណ៍៖ Class និង Object
class Car {
  public $brand;
  public $model;

  public function displayInfo() {
    return "Brand: " . $this->brand . ", Model: " . $this->model;
  }
}

$myCar = new Car();
$myCar->brand = "Toyota";
$myCar->model = "Corolla";
echo $myCar->displayInfo();
លទ្ធផល៖

Brand: Toyota, Model: Corolla
9.2. Constructors and Destructors
Constructor គឺជាមុខងារពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេល Object ត្រូវបានបង្កើត។ Destructor គឺជាមុខងារពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេល Object ត្រូវបានបំផ្លាញ។

// ឧទាហរណ៍៖ Constructor និង Destructor
class Car {
  public $brand;
  public $model;

  public function __construct($brand, $model) {
    $this->brand = $brand;
    $this->model = $model;
    echo "Car object created.<br>";
  }

  public function __destruct() {
    echo "Car object destroyed.<br>";
  }

  public function displayInfo() {
    return "Brand: " . $this->brand . ", Model: " . $this->model;
  }
}

$myCar = new Car("Toyota", "Corolla");
echo $myCar->displayInfo();
លទ្ធផល៖

Car object created.
Brand: Toyota, Model: Corolla
Car object destroyed.
9.3. Inheritance and Polymorphism
Inheritance គឺជាលក្ខណៈពិសេសនៃ OOP ដែលអនុញ្ញាតឱ្យ Class មួយទទួលមរតកលក្ខណៈពិសេសពី Class ផ្សេង។ Polymorphism គឺជាលក្ខណៈពិសេសដែលអនុញ្ញាតឱ្យមានច្រើនទម្រង់នៃមុខងារដូចគ្នា។

// ឧទាហរណ៍៖ Inheritance និង Polymorphism
class Vehicle {
  public function startEngine() {
    return "Engine started.<br>";
  }
}

class Car extends Vehicle {
  public function startEngine() {
    return "Car engine started.<br>";
  }
}

$vehicle = new Vehicle();
$car = new Car();
echo $vehicle->startEngine();
echo $car->startEngine();
លទ្ធផល៖

Engine started.
Car engine started.
9.4. Interfaces and Abstract Classes
Interface គឺជាការកំណត់រចនាសម្ព័ន្ធសម្រាប់ Class ដែលត្រូវតាម។ Abstract Class គឺជា Class ដែលមិនអាចបង្កើត Object ដោយផ្ទាល់ ហើយត្រូវតែត្រូវបានពង្រីកដោយ Class ផ្សេង។

// ឧទាហរណ៍៖ Interface និង Abstract Class
interface Drivable {
  public function drive();
}

abstract class Vehicle {
  abstract public function startEngine();
}

class Car extends Vehicle implements Drivable {
  public function startEngine() {
    return "Car engine started.<br>";
  }

  public function drive() {
    return "Car is driving.<br>";
  }
}

$car = new Car();
echo $car->startEngine();
echo $car->drive();
លទ្ធផល៖

Car engine started.
Car is driving.
9.5. Traits in PHP
Traits គឺជាវិធីសាស្ត្រដើម្បីចែករំលែកមុខងាររវាង Classes។ Traits អនុញ្ញាតឱ្យអ្នកប្រើមុខងារដូចគ្នានៅក្នុង Classes ច្រើនដោយមិនចាំបាច់ពង្រីក Class មួយ។

// ឧទាហរណ៍៖ Traits
trait Loggable {
  public function log($message) {
    echo "Log: " . $message . "<br>";
  }
}

class Car {
  use Loggable;

  public function startEngine() {
    $this->log("Car engine started.");
    return "Engine started.<br>";
  }
}

$car = new Car();
echo $car->startEngine();
លទ្ធផល៖

Log: Car engine started.
Engine started.
10. PHP and MySQL
PHP និង MySQL គឺជាបច្ចេកវិទ្យាដ៏ពេញនិយមសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីគេហទំព័រដែលមានការភ្ជាប់ទៅនឹងមូលដ្ឋានទិន្នន័យ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL ការអនុវត្តប្រតិបត្តិការ CRUD (Create, Read, Update, Delete) ការប្រើ Prepared Statements ដើម្បីការពារសុវត្ថិភាព និងការប្រើ PDO សម្រាប់ការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។

10.1. Connecting to a Database
ដើម្បីភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL អ្នកអាចប្រើមុខងារ /mysqli_connect/ ឬ PDO។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ។

// ឧទាហរណ៍៖ ការភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// បង្កើតការភ្ជាប់
$conn = mysqli_connect($servername, $username, $password, $dbname);

// ពិនិត្យការភ្ជាប់
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
លទ្ធផល៖

Connected successfully
10.2. CRUD Operations (Create, Read, Update, Delete)
CRUD គឺជាប្រតិបត្តិការមូលដ្ឋានដែលត្រូវបានប្រើក្នុងការគ្រប់គ្រងទិន្នន័យ។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃប្រតិបត្តិការ CRUD។

// ឧទាហរណ៍៖ CRUD Operations
// Create
$sql = "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')";
if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
}

// Read
$sql = "SELECT id, name, email FROM users";
$result = mysqli_query($conn, $sql);
while ($row = mysqli_fetch_assoc($result)) {
  echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
}

// Update
$sql = "UPDATE users SET email='john.doe@example.com' WHERE id=1";
if (mysqli_query($conn, $sql)) {
  echo "Record updated successfully";
}

// Delete
$sql = "DELETE FROM users WHERE id=1";
if (mysqli_query($conn, $sql)) {
  echo "Record deleted successfully";
}
លទ្ធផល៖

New record created successfully
ID: 1 - Name: John Doe - Email: john@example.com
Record updated successfully
Record deleted successfully
10.3. Prepared Statements and Security
Prepared Statements គឺជាវិធីសាស្ត្រដើម្បីការពារកម្មវិធីពីការវាយប្រហារដូចជា SQL Injection។ វាអនុញ្ញាតឱ្យអ្នកដាក់ប៉ារ៉ាម៉ែត្រទៅក្នុងសំណួរដោយសុវត្ថិភាព។

// ឧទាហរណ៍៖ Prepared Statements
$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

// កំណត់តម្លៃប៉ារ៉ាម៉ែត្រ និងអនុវត្ត
$name = "Jane Doe";
$email = "jane@example.com";
$stmt->execute();

echo "New record created successfully";
លទ្ធផល៖

New record created successfully
10.4. Using PDO for Database Interaction
PDO (PHP Data Objects) គឺជាវិធីសាស្ត្រដ៏មានប្រសិទ្ធភាពសម្រាប់ការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។ វាផ្តល់ភាពអាចផ្លាស់ប្តូរបានរវាងមូលដ្ឋានទិន្នន័យផ្សេងៗ និងគាំទ្រការប្រើ Prepared Statements។

// ឧទាហរណ៍៖ ការប្រើ PDO
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // ប្រើ Prepared Statements
  $stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (:name, :email)");
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':email', $email);

  // កំណត់តម្លៃប៉ារ៉ាម៉ែត្រ និងអនុវត្ត
  $name = "Alice";
  $email = "alice@example.com";
  $stmt->execute();

  echo "New record created successfully";
} catch (PDOException $e) {
  echo "Error: " . $e->getMessage();
}
លទ្ធផល៖

New record created successfully
11. Sessions and Cookies
Sessions និង Cookies គឺជាវិធីសាស្ត្រសម្រាប់គ្រប់គ្រងស្ថានភាពរបស់អ្នកប្រើប្រាស់នៅលើគេហទំព័រ។ Sessions ត្រូវបានរក្សាទុកនៅលើសឺវ័រ ខណៈពេលដែល Cookies ត្រូវបានរក្សាទុកនៅលើកុំព្យូទ័រអ្នកប្រើប្រាស់។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រង Sessions និងការប្រើ Cookies សម្រាប់ការតាមដានអ្នកប្រើប្រាស់។

11.1. Managing Sessions
Sessions ត្រូវបានប្រើដើម្បីរក្សាទិន្នន័យរបស់អ្នកប្រើប្រាស់នៅលើសឺវ័រ ហើយអាចប្រើបាននៅទូទាំងទំព័រផ្សេងៗនៃគេហទំព័រ។ ដើម្បីប្រើ Sessions អ្នកត្រូវចាប់ផ្តើម Session ដោយប្រើមុខងារ /session_start()/។

// ឧទាហរណ៍៖ ការគ្រប់គ្រង Sessions
session_start();

// កំណត់តម្លៃ Session
$_SESSION['username'] = 'JohnDoe';

// ទាញយកតម្លៃ Session
echo "Username: " . $_SESSION['username'];

// លុប Session
session_unset();
session_destroy();
លទ្ធផល៖

Username: JohnDoe
11.2. Using Cookies for User Tracking
Cookies ត្រូវបានប្រើដើម្បីរក្សាទិន្នន័យរបស់អ្នកប្រើប្រាស់នៅលើកុំព្យូទ័ររបស់ពួកគេ។ Cookies អាចត្រូវបានប្រើដើម្បីតាមដានអ្នកប្រើប្រាស់ ឬរក្សាការកំណត់របស់ពួកគេ។

// ឧទាហរណ៍៖ ការប្រើ Cookies
// កំណត់ Cookie
setcookie("username", "JohnDoe", time() + (86400 * 30), "/"); // 86400 = 1 day

// ទាញយកតម្លៃ Cookie
if (isset($_COOKIE['username'])) {
  echo "Username: " . $_COOKIE['username'];
} else {
  echo "Cookie not set.";
}

// លុប Cookie
setcookie("username", "", time() - 3600, "/");
លទ្ធផល៖

Username: JohnDoe
12. PHP and AJAX
AJAX (Asynchronous JavaScript and XML) គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យអ្នកធ្វើការស្នើសុំទៅកាន់សឺវ័រដោយមិនចាំបាច់ផ្ទុកទំព័រឡើងវិញ។ PHP អាចត្រូវបានប្រើជាមួយ AJAX ដើម្បីធ្វើការស្នើសុំអសមកាល និងទទួលការឆ្លើយតបពីសឺវ័រ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការគ្រប់គ្រងសំណើអសមកាល និងការប្រើ Fetch API ជាមួយ PHP។

12.1. Handling Asynchronous Requests
AJAX អនុញ្ញាតឱ្យអ្នកធ្វើការស្នើសុំទៅកាន់សឺវ័រដោយមិនចាំបាច់ផ្ទុកទំព័រឡើងវិញ។ PHP អាចដំណើរការសំណើទាំងនេះ ហើយត្រឡប់ទិន្នន័យជាទម្រង់ JSON ឬ HTML។

// ឧទាហរណ៍៖ ការគ្រប់គ្រងសំណើអសមកាល
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $response = array("status" => "success", "message" => "Hello, " . $name);
  echo json_encode($response);
}
លទ្ធផល៖

{"status":"success","message":"Hello, John"}
12.2. Fetch API and PHP
Fetch API គឺជាវិធីសាស្ត្រទំនើបសម្រាប់ធ្វើការស្នើសុំ HTTP ពី JavaScript។ វាអាចត្រូវបានប្រើជាមួយ PHP ដើម្បីទទួល និងដំណើរការទិន្នន័យពីសឺវ័រ។

// ឧទាហរណ៍៖ ការប្រើ Fetch API ជាមួយ PHP
fetch('server.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John' })
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
លទ្ធផល៖

{"status":"success","message":"Hello, John"}
13. PHP Security
សុវត្ថិភាពគឺជាផ្នែកមួយដ៏សំខាន់នៃការអភិវឌ្ឍន៍កម្មវិធី។ PHP ផ្តល់ឧបករណ៍និងវិធីសាស្ត្រជាច្រើនដើម្បីការពារកម្មវិធីពីការវាយប្រហារផ្សេងៗ។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការធ្វើសុពលភាពនិងសម្អាតទិន្នន័យ ការការពារការវាយប្រហារ SQL Injection ការការពារការវាយប្រហារ Cross-Site Scripting (XSS) និងការគ្រប់គ្រងពាក្យសម្ងាត់ដោយសុវត្ថិភាព។

13.1. Input Validation and Sanitization
ការធ្វើសុពលភាពនិងសម្អាតទិន្នន័យគឺជាដំណើរការនៃការធានាថាទិន្នន័យដែលបានបញ្ចូលដោយអ្នកប្រើប្រាស់គឺត្រឹមត្រូវ និងសុវត្ថិភាព។ PHP ផ្តល់មុខងារដូចជា /filter_var/ និង /htmlspecialchars/ សម្រាប់ការសម្អាតទិន្នន័យ។

// ឧទាហរណ៍៖ ការធ្វើសុពលភាពនិងសម្អាតទិន្នន័យ
$email = "john@example.com";

// ធ្វើសុពលភាពអ៊ីមែល
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Email is valid.";
} else {
  echo "Invalid email format.";
}

// សម្អាតទិន្នន័យ
$input = "<script>alert('XSS');</script>";
$cleanInput = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
echo $cleanInput;
លទ្ធផល៖

Email is valid.
&lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;
13.2. Protecting Against SQL Injection
SQL Injection គឺជាការវាយប្រហារដែលអាចឱ្យអ្នកវាយប្រហារបញ្ចូលសំណើ SQL មិនសុវត្ថិភាពទៅក្នុងមូលដ្ឋានទិន្នន័យ។ ដើម្បីការពារការវាយប្រហារនេះ អ្នកគួរតែប្រើ Prepared Statements។

// ឧទាហរណ៍៖ ការការពារការវាយប្រហារ SQL Injection
$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);

$email = "john@example.com";
$stmt->execute();
$result = $stmt->get_result();

while ($row = $result->fetch_assoc()) {
  echo "Name: " . $row['name'];
}
លទ្ធផល៖

Name: John Doe
13.3. Preventing Cross-Site Scripting (XSS)
Cross-Site Scripting (XSS) គឺជាការវាយប្រហារដែលអាចឱ្យអ្នកវាយប្រហារបញ្ចូលស្គ្រីបមិនសុវត្ថិភាពទៅក្នុងទំព័រ។ ដើម្បីការពារការវាយប្រហារនេះ អ្នកគួរតែប្រើមុខងារដូចជា /htmlspecialchars/ ដើម្បីសម្អាតទិន្នន័យ។

// ឧទាហរណ៍៖ ការការពារ XSS
$input = "<script>alert('XSS');</script>";
$cleanInput = htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
echo $cleanInput;
លទ្ធផល៖

&lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;
13.4. Password Hashing and Authentication
ការគ្រប់គ្រងពាក្យសម្ងាត់ដោយសុវត្ថិភាពគឺជាផ្នែកមួយដ៏សំខាន់នៃការអភិវឌ្ឍន៍កម្មវិធី។ PHP ផ្តល់មុខងារដូចជា /password_hash/ និង /password_verify/ ដើម្បីគ្រប់គ្រងពាក្យសម្ងាត់ដោយសុវត្ថិភាព។

// ឧទាហរណ៍៖ ការគ្រប់គ្រងពាក្យសម្ងាត់
$password = "myPassword123";

// បង្កើត hash សម្រាប់ពាក្យសម្ងាត់
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
echo "Hashed Password: " . $hashedPassword;

// ផ្ទៀងផ្ទាត់ពាក្យសម្ងាត់
if (password_verify($password, $hashedPassword)) {
  echo "Password is valid!";
} else {
  echo "Invalid password!";
}
លទ្ធផល៖

Hashed Password: $2y$10$examplehash
Password is valid!
14. Working with APIs in PHP
APIs (Application Programming Interfaces) គឺជាវិធីសាស្ត្រដែលអនុញ្ញាតឱ្យកម្មវិធីផ្សេងៗទំនាក់ទំនងជាមួយគ្នា។ PHP អាចត្រូវបានប្រើដើម្បីទទួលទិន្នន័យពី REST APIs ឬបង្កើត RESTful APIs ផ្ទាល់ខ្លួន។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពីការប្រើ REST APIs និងការបង្កើត RESTful APIs ជាមួយ PHP។

14.1. Consuming REST APIs
PHP អាចត្រូវបានប្រើដើម្បីទទួលទិន្នន័យពី REST APIs ដោយប្រើមុខងារដូចជា /file_get_contents/ ឬ /cURL/។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃការទទួលទិន្នន័យពី REST API។

// ឧទាហរណ៍៖ ការទទួលទិន្នន័យពី REST API
$url = "https://api.example.com/data";
$response = file_get_contents($url);
$data = json_decode($response, true);

print_r($data);
លទ្ធផល៖

Array
(
    [id] => 1
    [name] => John Doe
    [email] => john@example.com
)
14.2. Creating RESTful APIs with PHP
PHP អាចត្រូវបានប្រើដើម្បីបង្កើត RESTful APIs ដែលអនុញ្ញាតឱ្យកម្មវិធីផ្សេងៗទទួលទិន្នន័យពីសឺវ័ររបស់អ្នក។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃការបង្កើត RESTful API សាមញ្ញ។

// ឧទាហរណ៍៖ ការបង្កើត RESTful API
header("Content-Type: application/json");

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", trim($_SERVER['PATH_INFO'], '/'));

switch ($method) {
  case 'GET':
    // ទទួលទិន្នន័យ
    echo json_encode(array("message" => "GET request received"));
    break;
  case 'POST':
    // បង្កើតទិន្នន័យ
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode(array("message" => "POST request received", "data" => $data));
    break;
  default:
    // ការស្នើសុំមិនត្រឹមត្រូវ
    http_response_code(405);
    echo json_encode(array("message" => "Method not allowed"));
    break;
}
លទ្ធផល៖

{"message":"GET request received"}
15. PHP Frameworks
PHP Frameworks គឺជាឧបករណ៍ដែលផ្តល់នូវរចនាសម្ព័ន្ធ និងមុខងារសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីយ៉ាងមានប្រសិទ្ធភាព។ ក្នុងចំណោម PHP Frameworks ដែលពេញនិយមបំផុតគឺ Laravel។ នៅក្នុងផ្នែកនេះ យើងនឹងរៀនអំពី Laravel ដែលរួមមានការណែនាំអំពី Laravel, Routing និង Controllers, Blade Templates, និង Eloquent ORM។

15.1. Introduction to Laravel
Laravel គឺជា PHP Framework ដ៏ពេញនិយមមួយដែលផ្តល់នូវរចនាសម្ព័ន្ធសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីយ៉ាងមានប្រសិទ្ធភាព។ វាមានមុខងារជាច្រើនដូចជា Routing, Controllers, Blade Templates, និង Eloquent ORM។

# ការដំឡើង Laravel
composer create-project --prefer-dist laravel/laravel blog
លទ្ធផល៖

Laravel project created successfully.
15.2. Routing and Controllers
Routing គឺជាវិធីសាស្ត្រដើម្បីកំណត់ពីរបៀបដែលកម្មវិធីឆ្លើយតបទៅនឹងសំណើ HTTP។ Controllers គឺជាផ្នែកមួយដែលគ្រប់គ្រងឡូជីខលនៃកម្មវិធី។

// ឧទាហរណ៍៖ Routing និង Controllers
// កំណត់ Route
Route::get('/user', [UserController::class, 'index']);

// UserController
class UserController extends Controller
{
    public function index()
    {
        return "Hello, User!";
    }
}
លទ្ធផល៖

Hello, User!
15.3. Blade Templates
Blade គឺជាប្រព័ន្ធគំរូ (template engine) របស់ Laravel ដែលផ្តល់នូវភាពងាយស្រួលក្នុងការបង្កើតទំព័រ HTML។ Blade អនុញ្ញាតឱ្យអ្នកប្រើ syntax ដ៏សាមញ្ញ និងមានថាមពល។

// ឧទាហរណ៍៖ Blade Template
// resources/views/welcome.blade.php
<html>
<body>
    <h1>Hello, {{ $name }}</h1>
</body>
</html>

// Route
Route::get('/welcome', function () {
    return view('welcome', ['name' => 'John Doe']);
});
លទ្ធផល៖

<html>
<body>
    <h1>Hello, John Doe</h1>
</body>
</html>
15.4. Eloquent ORM
Eloquent ORM គឺជាប្រព័ន្ធគ្រប់គ្រងទិន្នន័យរបស់ Laravel ដែលផ្តល់នូវវិធីសាស្ត្រដ៏សាមញ្ញ និងមានថាមពលសម្រាប់ការទំនាក់ទំនងជាមួយមូលដ្ឋានទិន្នន័យ។

// ឧទាហរណ៍៖ Eloquent ORM
// កំណត់ Model
class User extends Model
{
    protected $table = 'users';
}

// ទាញយកទិន្នន័យពីមូលដ្ឋានទិន្នន័យ
$users = User::all();
foreach ($users as $user) {
    echo $user->name;
}
លទ្ធផល៖

John Doe
Jane Doe`
  },
  {
    id: 15,
    slug: "java",
    title: "Java មូលដ្ឋាន",
    description: "រៀន Java សម្រាប់បង្កើតកម្មវិធីដែលដំណើរការគ្រប់វេទិកា",
    level: "មធ្យម",
    icon: "☕",
    language: "java",
    content: `Java គឺជាភាសា OOP ដែលប្រើយ៉ាងទូលំទូលាយ។ វាដំណើរការលើគ្រប់វេទិកាតាមរយៈ JVM។`,
    codeExample: `- ជំពូកទី 1 : ការណែនាំអំពី Java
Java គឺជាភាសាសរសេរកម្មវិធីដែលត្រូវបានប្រើប្រាស់យ៉ាងទូលំទូលាយ ដែលល្បីខាងភាពអាចចល័តបាន និងភាពបត់បែន។ ផ្នែកនេះគ្របដណ្តប់លើមូលដ្ឋានគ្រឹះនៃ Java រួមទាំងនិយមន័យ ប្រវត្តិសាស្ត្រ លក្ខណៈសំខាន់ៗ និងសមាសធាតុដែលធ្វើឱ្យវាដំណើរការ ដូចជា JDK, JRE, និង JVM។

1.1. Java ជាអ្វី?
Java គឺជាភាសាសរសេរកម្មវិធីកម្រិតខ្ពស់ និងតម្រង់ទិសវត្ថុ ដែលត្រូវបានបង្កើតឡើងដោយ Sun Microsystems។ វាមានភាពឯករាជ្យលើវេទិកា មានន័យថាកម្មវិធីដែលសរសេរក្នុង Java អាចដំណើរការលើឧបករណ៍ណាមួយដែលមាន Java Virtual Machine (JVM)។

ឧទាហរណ៍នៃកម្មវិធី Java សាមញ្ញ:

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
1.2. ប្រវត្តិសាស្ត្រនៃ Java
Java ត្រូវបានបង្កើតឡើងដោយ James Gosling និងក្រុមរបស់គាត់នៅ Sun Microsystems ក្នុងឆ្នាំ 1995។ ដើមឡើយមានឈ្មោះថា "Oak" វាត្រូវបានរចនាឡើងសម្រាប់ទូរទស្សន៍អន្តរកម្ម ប៉ុន្តែក្រោយមកត្រូវបានកែសម្រួលសម្រាប់អ៊ីនធឺណិត និងការសរសេរកម្មវិធីទូទៅ។

1.3. លក្ខណៈពិសេសនៃ Java
Java ភ្ជាប់មកជាមួយលក្ខណៈពិសេសដ៏មានឥទ្ធិពលជាច្រើន ដែលធ្វើឱ្យវាពេញនិយមក្នុងចំណោមអ្នកអភិវឌ្ឍន៍។

លក្ខណៈសំខាន់ៗ:

ភាពឯករាជ្យលើវេទិកា: សរសេរម្តង ដំណើរការគ្រប់ទីកន្លែង (WORA) ជាមួយ JVM។
តម្រង់ទិសវត្ថុ: គាំទ្រការប្រើប្រាស់ classes, objects, និង inheritance។
រឹងមាំ: ការគ្រប់គ្រងអង្គចងចាំខ្លាំង និងការដោះស្រាយករណីលើកលែង។
សុវត្ថិភាព: មានលក្ខណៈសុវត្ថិភាពដែលភ្ជាប់មកជាមួយ ដូចជា sandboxing។
ពហុខ្សែ: គ្រប់គ្រងកិច្ចការច្រើនក្នុងពេលតែមួយ។
1.4. JDK, JRE, និង JVM
Java ពឹងផ្អែកលើសមាសធាតុសំខាន់ៗចំនួនបី៖ JDK (Java Development Kit), JRE (Java Runtime Environment), និង JVM (Java Virtual Machine)។

JDK - ឧបករណ៍សម្រាប់អភិវឌ្ឍកម្មវិធី Java (compiler, debugger, ជាដើម)។
JRE - បរិស្ថានពេលរត់សម្រាប់ប្រតិបត្តិកម្មវិធី Java។
JVM - ម៉ាស៊ីននិម្មិតដែលបកស្រាយ និងដំណើរការ bytecode របស់ Java។
1.5. ការរៀបចំបរិស្ថាន Java
ដើម្បីចាប់ផ្តើមសរសេរកូដក្នុង Java អ្នកត្រូវដំឡើង JDK និងកំណត់រចនាសម្ព័ន្ធប្រព័ន្ធរបស់អ្នកឱ្យស្គាល់ពាក្យបញ្ជា Java។

ឧទាហរណ៍ពាក្យបញ្ជាដើម្បីពិនិត្យកំណែ Java:

java -version
លទ្ធផលគំរូ:

java version "1.8.0_281"
Java(TM) SE Runtime Environment (build 1.8.0_281-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.281-b09, mixed mode)
2. ការសរសេរកម្មវិធី Java ដំបូងរបស់អ្នក
ការសរសេរកម្មវិធី Java ដំបូងរបស់អ្នកគឺជាជំហានដ៏សំខាន់ក្នុងការរៀនភាសានេះ។ ផ្នែកនេះនឹងណែនាំអ្នកអំពីការបង្កើតកម្មវិធី "Hello World" ដ៏សាមញ្ញ និងពន្យល់ពីរចនាសម្ព័ន្ធមូលដ្ឋាននៃកម្មវិធី Java។

2.1. កម្មវិធី Hello World
កម្មវិធី "Hello World" គឺជាឧទាហរណ៍បុរាណដែលបង្ហាញពីរបៀបសរសេរ និងដំណើរការកូដ Java សាមញ្ញ។ វាបោះពុម្ពសារមួយទៅកាន់ console។

ឧទាហរណ៍កូដ:

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
លទ្ធផល:

Hello, World!
ដើម្បីដំណើរការកម្មវិធីនេះ អ្នកត្រូវរក្សាទុកវាជា HelloWorld.java បន្ទាប់មកចងក្រង និងដំណើរការវាដោយប្រើពាក្យបញ្ជា៖

javac HelloWorld.java
java HelloWorld
2.2. ការយល់ដឹងអំពីរចនាសម្ព័ន្ធនៃកម្មវិធី Java
កម្មវិធី Java មានរចនាសម្ព័ន្ធជាក់លាក់មួយដែលអ្នកត្រូវយល់ដើម្បីសរសេរកូដឱ្យត្រឹមត្រូវ។ នេះគឺជាការពន្យល់អំពីផ្នែកសំខាន់ៗនៃកម្មវិធី "Hello World"។

ផ្នែកនៃកូដ:

public class HelloWorld - កំណត់ឈ្មោះ class ដែលត្រូវតែផ្គូផ្គងនឹងឈ្មោះឯកសារ (HelloWorld.java)។
public static void main(String[] args) - ចំណុចចាប់ផ្តើមនៃកម្មវិធី ដែល JVM ហៅដើម្បីប្រតិបត្តិកូដ។
System.out.println("Hello, World!"); - បោះពុម្ពសារទៅកាន់ console ជាមួយនឹងបន្ទាត់ថ្មី។
ឧទាហរណ៍បន្ថែម: កម្មវិធីដែលបន្ថែមសារផ្ទាល់ខ្លួន

public class GreetUser {
    public static void main(String[] args) {
        String name = "Sok";
        System.out.println("Hello, " + name + "!");
    }
}
លទ្ធផល:

Hello, Sok!
3. វាក្យសម្ព័ន្ធ Java
វាក្យសម្ព័ន្ធ Java គឺជាច្បាប់ដែលកំណត់របៀបសរសេរកូដឱ្យត្រឹមត្រូវ។ ផ្នែកនេះគ្របដណ្តប់លើគោលគំនិតជាមូលដ្ឋានដូចជា keywords, identifiers, ប្រភេទទិន្នន័យ, អថេរ, ថេរ និងការបញ្ចេញមតិយោបល់។

3.1. Keywords និង Identifiers
Keywords គឺជាពាក្យដែលបម្រុងទុកក្នុង Java ដែលមានអត្ថន័យពិសេស ខណៈ identifiers គឺជាឈ្មោះដែលអ្នកបង្កើតសម្រាប់អថេរ ឬ class។

ឧទាហរណ៍:

public class Example {  // "public" និង "class" ជា keywords, "Example" ជា identifier
    int number = 10;     // "int" ជា keyword, "number" ជា identifier
}
ចំណាំ: Keywords ដូចជា if, for, return មិនអាចប្រើជា identifiers បានទេ។

3.2. ប្រភេទទិន្នន័យ (Primitive និង Non-Primitive)
Java មានប្រភេទទិន្នន័យពីរប្រភេទ៖ primitive (ដូចជា int, double) និង non-primitive (ដូចជា String, Array)។

ឧទាហរណ៍ Primitive Data Types:

int age = 25;          // ចំនួនគត់
double salary = 500.75; // ចំនួនទសភាគ
char grade = 'A';       // តួអក្សរ
boolean isActive = true;// ពិត ឬ មិនពិត
ឧទាហរណ៍ Non-Primitive Data Type:

String name = "Chan";  // ខ្សែអក្សរ
int[] numbers = {1, 2, 3}; // Array
3.3. អថេរ និង ថេរ
អថេរគឺជាទីតាំងផ្ទុកទិន្នន័យដែលអាចផ្លាស់ប្តូរបាន ចំណែកថេរគឺមិនអាចផ្លាស់ប្តូរតម្លៃបានទេបន្ទាប់ពីកំណត់។

ឧទាហរណ៍:

int count = 5;         // អថេរ
final double PI = 3.14; // ថេរ (ប្រើ "final" ដើម្បីកំណត់ថេរ)
ការប្រើប្រាស់: បន្ទាប់ពីកំណត់ PI ជា final ការព្យាយាមផ្លាស់ប្តូរវានឹងបណ្តាលឱ្យមានកំហុស។

3.4. ការបញ្ចេញមតិយោបល់ (Single-line, Multi-line, និង Documentation)
ការបញ្ចេញមតិយោបល់ជួយពន្យល់កូដ និងធ្វើឱ្យវាអាចអានបាន។ Java គាំទ្របីប្រភេទនៃការបញ្ចេញមតិយោបល់។

ឧទាហរណ៍:

public class CommentExample {
    // នេះជាការបញ្ចេញមតិយោបល់បន្ទាត់តែមួយ
    int x = 10;

    /* នេះជាការបញ្ចេញមតិយោបល់
       ច្រើនបន្ទាត់ */
    double y = 20.5;

    /**
     * នេះជាការបញ្ចេញមតិយោបល់ប្រភេទ Documentation
     * @param args អាគុយម៉ង់បន្ទាត់បញ្ជា
     */
    public static void main(String[] args) {
        System.out.println("Comments in Java");
    }
}
លទ្ធផល:

Comments in Java
4. ប្រតិបត្តិករ
ប្រតិបត្តិករគឺជានិមិត្តសញ្ញាដែលប្រើសម្រាប់ធ្វើប្រតិបត្តិការលើទិន្នន័យក្នុង Java។ ផ្នែកនេះគ្របដណ្តប់លើប្រភេទផ្សេងៗនៃប្រតិបត្តិករ រួមមាន arithmetic, relational, logical, bitwise, assignment, និង ternary។

4.1. ប្រតិបត្តិករគណិតវិទ្យា
ប្រតិបត្តិករគណិតវិទ្យាត្រូវបានប្រើសម្រាប់ការគណនាគណិតវិទ្យាដូចជាបូក ដក គុណ និងចែក។

ឧទាហរណ៍:

public class Arithmetic {
    public static void main(String[] args) {
        int a = 10, b = 5;
        System.out.println("បូក: " + (a + b));  // 15
        System.out.println("ដក: " + (a - b));   // 5
        System.out.println("គុណ: " + (a * b));  // 50
        System.out.println("ចែក: " + (a / b));  // 2
        System.out.println("សល់: " + (a % b));  // 0
    }
}
លទ្ធផល:

បូក: 15
ដក: 5
គុណ: 50
ចែក: 2
សល់: 0
4.2. ប្រតិបត្តិករទំនាក់ទំនង
ប្រតិបត្តិករទំនាក់ទំនងប្រៀបធៀបតម្លៃពីរ ហើយត្រឡប់តម្លៃ boolean (true ឬ false)។

ឧទាហរណ៍:

public class Relational {
    public static void main(String[] args) {
        int x = 8, y = 3;
        System.out.println("x > y: " + (x > y));   // true
        System.out.println("x < y: " + (x < y));   // false
        System.out.println("x == y: " + (x == y)); // false
        System.out.println("x != y: " + (x != y)); // true
    }
}
លទ្ធផល:

x > y: true
x < y: false
x == y: false
x != y: true
4.3. ប្រតិបត្តិករតក្កវិជ្ជា
ប្រតិបត្តិករតក្កវិជ្ជាត្រូវបានប្រើដើម្បីផ្សំលក្ខខណ្ឌ boolean ច្រើន។

ឧទាហរណ៍:

public class Logical {
    public static void main(String[] args) {
        boolean a = true, b = false;
        System.out.println("a && b: " + (a && b)); // false
        System.out.println("a || b: " + (a || b)); // true
        System.out.println("!a: " + (!a));         // false
    }
}
លទ្ធផល:

a && b: false
a || b: true
!a: false
4.4. ប្រតិបត្តិករ Bitwise
ប្រតិបត្តិករ bitwise ធ្វើការលើ bits នៃចំនួនគត់ ដែលមានប្រយោជន៍សម្រាប់ការគណនាកម្រិតទាប។

ឧទាហរណ៍:

public class Bitwise {
    public static void main(String[] args) {
        int a = 5, b = 3;  // a = 0101, b = 0011
        System.out.println("a & b: " + (a & b)); // 1 (0001)
        System.out.println("a | b: " + (a | b)); // 7 (0111)
        System.out.println("a ^ b: " + (a ^ b)); // 6 (0110)
        System.out.println("~a: " + (~a));       // -6
    }
}
លទ្ធផល:

a & b: 1
a | b: 7
a ^ b: 6
~a: -6
4.5. ប្រតិបត្តិករការកំណត់
ប្រតិបត្តិករការកំណត់ត្រូវបានប្រើដើម្បីផ្តល់តម្លៃទៅអថេរ និងអាចផ្សំជាមួយប្រតិបត្តិករផ្សេងទៀត។

ឧទាហរណ៍:

public class Assignment {
    public static void main(String[] args) {
        int x = 10;
        x += 5;  // x = x + 5
        System.out.println("x += 5: " + x); // 15
        x *= 2;  // x = x * 2
        System.out.println("x *= 2: " + x); // 30
    }
}
លទ្ធផល:

x += 5: 15
x *= 2: 30
4.6. ប្រតិបត្តិករ Ternary
ប្រតិបត្តិករ ternary គឺជាវិធីសង្ខេបនៃ if-else ដែលប្រើសម្រាប់ការសម្រេចចិត្តសាមញ្ញ។

ឧទាហរណ៍:

public class Ternary {
    public static void main(String[] args) {
        int age = 20;
        String result = (age >= 18) ? "មនុស្សពេញវ័យ" : "កុមារ";
        System.out.println(result);
    }
}
លទ្ធផល:

មនុស្សពេញវ័យ
5. សេចក្តីថ្លែងការណ៍គ្រប់គ្រងលំហូរ
សេចក្តីថ្លែងការណ៍គ្រប់គ្រងលំហូរអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងលំដាប់នៃការប្រតិបត្តិកូដក្នុង Java។ ផ្នែកនេះគ្របដណ្តប់លើ if-else, switch-case, និង loops ផ្សេងៗ ព្រមទាំង break និង continue។

5.1. If-Else
សេចក្តីថ្លែងការណ៍ if-else ប្រើសម្រាប់សម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌ។

ឧទាហរណ៍:

public class IfElse {
    public static void main(String[] args) {
        int age = 16;
        if (age >= 18) {
            System.out.println("អ្នកជាមនុស្សពេញវ័យ");
        } else {
            System.out.println("អ្នកនៅជាកុមារ");
        }
    }
}
លទ្ធផល:

អ្នកនៅជាកុមារ
5.2. Switch-Case
សេចក្តីថ្លែងការណ៍ switch-case ជ្រើសរើសប្លុកកូដដើម្បីប្រតិបត្តិដោយផ្អែកលើតម្លៃនៃអថេរ។

ឧទាហរណ៍:

public class SwitchCase {
    public static void main(String[] args) {
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("ច័ន្ទ");
                break;
            case 2:
                System.out.println("អង្គារ");
                break;
            case 3:
                System.out.println("ពុធ");
                break;
            default:
                System.out.println("ថ្ងៃផ្សេង");
        }
    }
}
លទ្ធផល:

ពុធ
5.3. For Loop
For loop ត្រូវបានប្រើសម្រាប់ធ្វើអ្វីមួយច្រើនដងជាមួយនឹងចំនួនជាក់លាក់។

ឧទាហរណ៍:

public class ForLoop {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("លេខ: " + i);
        }
    }
}
លទ្ធផល:

លេខ: 1
លេខ: 2
លេខ: 3
លេខ: 4
លេខ: 5
5.4. While Loop
While loop បន្តប្រតិបត្តិកូដដរាបណាលក្ខខណ្ឌនៅតែពិត។

ឧទាហរណ៍:

public class WhileLoop {
    public static void main(String[] args) {
        int count = 0;
        while (count < 3) {
            System.out.println("រាប់: " + count);
            count++;
        }
    }
}
លទ្ធផល:

រាប់: 0
រាប់: 1
រាប់: 2
5.5. Do-While Loop
Do-while loop ប្រតិបត្តិកូដយ៉ាងហោចណាស់ម្តង មុនពេលពិនិត្យលក្ខខណ្ឌ។

ឧទាហរណ៍:

public class DoWhileLoop {
    public static void main(String[] args) {
        int num = 1;
        do {
            System.out.println("តម្លៃ: " + num);
            num++;
        } while (num <= 3);
    }
}
លទ្ធផល:

តម្លៃ: 1
តម្លៃ: 2
តម្លៃ: 3
5.6. Break និង Continue
Break បញ្ឈប់ loop ទាំងស្រុង ចំណែក continue រំលងទៅវដ្តបន្ទាប់។

ឧទាហរណ៍:

public class BreakContinue {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                break; // បញ្ឈប់នៅ i = 3
            }
            System.out.println("Break: " + i);
        }
        for (int j = 1; j <= 5; j++) {
            if (j == 3) {
                continue; // រំលង i = 3
            }
            System.out.println("Continue: " + j);
        }
    }
}
លទ្ធផល:

Break: 1
Break: 2
Continue: 1
Continue: 2
Continue: 4
Continue: 5
6. ការណែនាំអំពី OOP
OOP (Object-Oriented Programming) គឺជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្តោតលើការប្រើប្រាស់ objects និង classes។ ផ្នែកនេះគ្របដណ្តប់លើគោលគំនិតជាមូលដ្ឋាននៃ OOP ក្នុង Java ដូចជា classes, objects, constructors, និង methods។

6.1. Classes និង Objects
Class គឺជាប្លង់សម្រាប់បង្កើត object ដែលជាវត្ថុជាក់ស្តែងដែលមានលក្ខណៈ និងឥរិយាបថ។

ឧទាហរណ៍:

public class Student {
    String name = "Sok";   // លក្ខណៈ
    int age = 20;

    void study() {         // ឥរិយាបថ
        System.out.println(name + " កំពុងរៀន");
    }
}

class Main {
    public static void main(String[] args) {
        Student student1 = new Student(); // បង្កើត object
        System.out.println("ឈ្មោះ: " + student1.name);
        System.out.println("អាយុ: " + student1.age);
        student1.study();
    }
}
លទ្ធផល:

ឈ្មោះ: Sok
អាយុ: 20
Sok កំពុងរៀន
6.2. Constructors (Default និង Parameterized)
Constructor គឺជា method ពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលបង្កើត object ដើម្បីកំណត់តម្លៃដំបូង។

ឧទាហរណ៍:

public class Car {
    String model;
    int year;

    // Default constructor
    Car() {
        model = "Unknown";
        year = 0;
    }

    // Parameterized constructor
    Car(String m, int y) {
        model = m;
        year = y;
    }

    void display() {
        System.out.println("ម៉ូដែល: " + model + ", ឆ្នាំ: " + year);
    }
}

class Main {
    public static void main(String[] args) {
        Car car1 = new Car();          // ប្រើ default constructor
        Car car2 = new Car("Toyota", 2023); // ប្រើ parameterized constructor
        car1.display();
        car2.display();
    }
}
លទ្ធផល:

ម៉ូដែល: Unknown, ឆ្នាំ: 0
ម៉ូដែល: Toyota, ឆ្នាំ: 2023
6.3. Methods (Instance និង Static)
Method គឺជាប្លុកកូដដែលកំណត់ឥរិយាបថនៃ object។ មាន instance methods (ប្រើជាមួយ object) និង static methods (ប្រើដោយគ្មាន object)។

ឧទាហរណ៍:

public class Calculator {
    // Instance method
    int add(int a, int b) {
        return a + b;
    }

    // Static method
    static int multiply(int a, int b) {
        return a * b;
    }
}

class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator(); // បង្កើត object
        int sum = calc.add(5, 3);           // ហៅ instance method
        System.out.println("បូក: " + sum);

        int product = Calculator.multiply(4, 2); // ហៅ static method
        System.out.println("គុណ: " + product);
    }
}
លទ្ធផល:

បូក: 8
គុណ: 8
- ជំពូកទី 2 : Object Oriented Programming

1. គោលការណ៍នៃ OOP
ការតម្រង់ទិសវត្ថុ (Object-Oriented Programming - OOP) គឺជាវិធីសាស្ត្រសរសេរកម្មវិធីដែលផ្អែកលើគោលការណ៍សំខាន់ៗ។ ផ្នែកនេះគ្របដណ្តប់លើគោលការណ៍ទាំងនោះ ដែលរួមមាន Encapsulation, Inheritance, Polymorphism, និង Abstraction ព្រមទាំងគំនិតពាក់ព័ន្ធដូចជា Access Modifiers, Getters/Setters, និង Interfaces។

1.1. ការវេចខ្ចប់ (Encapsulation)
Encapsulation គឺជាគោលការណ៍នៃ OOP ដែលលាក់ទិន្នន័យ និងមុខងារពាក់ព័ន្ធទុកជាឯកជន (private) ក្នុង class មួយ ដើម្បីការពារការចូលប្រើដោយផ្ទាល់ពីខាងក្រៅ។ វាអនុញ្ញាតឱ្យចូលប្រើទិន្នន័យតាមរយៈវិធីសាស្ត្រសាធារណៈ (public methods) ដូចជា getters និង setters ដែលផ្តល់នូវការគ្រប់គ្រងលើរបៀបដែលទិន្នន័យត្រូវបានអាន ឬកែប្រែ។

ឧទាហរណ៍លម្អិត:

public class Person {
    private String name; // ទិន្នន័យឯកជន
    private int age;

    // Setter សម្រាប់ name
    public void setName(String name) {
        if (name != null && !name.isEmpty()) {
            this.name = name;
        }
    }

    // Getter សម្រាប់ name
    public String getName() {
        return name;
    }

    // Setter សម្រាប់ age
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }

    // Getter សម្រាប់ age
    public int getAge() {
        return age;
    }

    public static void main(String[] args) {
        Person person = new Person();
        person.setName("Sokha");
        person.setAge(25);
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
    }
}
លទ្ធផល:

Name: Sokha
Age: 25
1.2. កម្មវិធីកែប្រែការចូលប្រើ (Public, Private, Protected, Default)
Access Modifiers កំណត់កម្រិតនៃការចូលប្រើទៅលើទិន្នន័យ និងមុខងារក្នុង Java។ មាន ៤ ប្រភេទសំខាន់ៗ៖ public (ចូលប្រើបានគ្រប់ទីកន្លែង), private (ចូលប្រើបានតែក្នុង class), protected (ចូលប្រើបានក្នុង package និង subclass), និង default (បើគ្មាន modifier ចូលប្រើបានតែក្នុង package)។

ឧទាហរណ៍លម្អិត:

public class Example {
    public String publicVar = "Public";
    private String privateVar = "Private";
    protected String protectedVar = "Protected";
    String defaultVar = "Default"; // No modifier

    public void display() {
        System.out.println(publicVar);
        System.out.println(privateVar);
        System.out.println(protectedVar);
        System.out.println(defaultVar);
    }

    public static void main(String[] args) {
        Example ex = new Example();
        ex.display();
    }
}
លទ្ធផល:

Public
Private
Protected
Default
1.3. Getters និង Setters
Getters និង Setters គឺជាវិធីសាស្ត្រសាធារណៈដែលប្រើសម្រាប់អាន (get) និងកំណត់ (set) តម្លៃនៃទិន្នន័យឯកជនក្នុង class មួយ។ វាជួយធានាសុវត្ថិភាពទិន្នន័យ និងអនុញ្ញាតឱ្យមានការត្រួតពិនិត្យបន្ថែម។

ឧទាហរណ៍លម្អិត:

public class Student {
    private int id;
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        if (id > 0) {
            this.id = id;
        }
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public static void main(String[] args) {
        Student student = new Student();
        student.setId(101);
        student.setName("Vannak");
        System.out.println("ID: " + student.getId());
        System.out.println("Name: " + student.getName());
    }
}
លទ្ធផល:

ID: 101
Name: Vannak
1.4. ការស្នងមរតក (Inheritance)
Inheritance អនុញ្ញាតឱ្យ class មួយ (subclass) ស្នងលក្ខណៈ និងមុខងារពី class មួយទៀត (superclass) ដោយប្រើពាក្យគន្លឹះ extends។ វាជួយកាត់បន្ថយការសរសេរកូដซ้ำ និងបង្កើនការប្រើប្រាស់ឡើងវិញ។

ឧទាហរណ៍លម្អិត:

class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog barks.");
    }

    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // ស្នងពី Animal
        dog.bark(); // មុខងាររបស់ Dog
    }
}
លទ្ធផល:

This animal eats food.
The dog barks.
1.5. ប្រភេទនៃការស្នងមរតក (Single, Multilevel, Hierarchical)
Java គាំទ្រប្រភេទនៃការស្នងមរតកចំនួនបី៖ Single (class មួយស្នងពី class មួយ), Multilevel (class មួយស្នងពី class មួយទៀត ហើយបន្តទៅមុខទៀត), Hierarchical (class មួយត្រូវបានស្នងដោយ class ច្រើន)។ Java មិនគាំទ្រ Multiple Inheritance ដោយផ្ទាល់ទេ ប៉ុន្តែអាចសម្រេចបានតាមរយៈ Interfaces។

ឧទាហរណ៍លម្អិត (Multilevel):

class Grandparent {
    void show() {
        System.out.println("Grandparent");
    }
}

class Parent extends Grandparent {
    void display() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    void print() {
        System.out.println("Child");
    }

    public static void main(String[] args) {
        Child child = new Child();
        child.show(); // ពី Grandparent
        child.display(); // ពី Parent
        child.print(); // ពី Child
    }
}
លទ្ធផល:

Grandparent
Parent
Child
1.6. ពាក្យគន្លឹះ Super
ពាក្យគន្លឹះ super ត្រូវបានប្រើដើម្បីហៅ constructor, មុខងារ ឬទិន្នន័យពី superclass នៅក្នុង subclass។ វាមានប្រយោជន៍នៅពេលដែល subclass ត្រូវការចូលប្រើធាតុពី superclass ដែលត្រូវបានបដិសេធ (overridden)។

ឧទាហរណ៍លម្អិត:

class Parent {
    String message = "Hello from Parent";
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    String message = "Hello from Child";
    Child() {
        super(); // ហៅ constructor ពី Parent
        System.out.println("Child constructor");
    }

    void display() {
        System.out.println(super.message); // ចូលប្រើ message ពី Parent
        System.out.println(message); // ចូលប្រើ message ពី Child
    }

    public static void main(String[] args) {
        Child child = new Child();
        child.display();
    }
}
លទ្ធផល:

Parent constructor
Child constructor
Hello from Parent
Hello from Child
1.7. ការបដិសេធមុខងារ (Method Overriding)
Method Overriding កើតឡើងនៅពេល subclass ផ្តល់នូវការអនុវត្តថ្មីសម្រាប់មុខងារដែលមានស្រាប់ក្នុង superclass។ វាតម្រូវឱ្យមុខងារមានឈ្មោះ ប៉ារ៉ាម៉ែត្រ និងប្រភេទត្រឡប់ដូចគ្នា។

ឧទាហរណ៍លម្អិត:

class Animal {
    void sound() {
        System.out.println("Some generic sound");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }

    public static void main(String[] args) {
        Animal animal = new Cat(); // Polymorphism
        animal.sound(); // ហៅ sound() ពី Cat
    }
}
លទ្ធផល:

Meow
1.8. ពហុរូបភាព (Polymorphism)
Polymorphism អនុញ្ញាតឱ្យវត្ថុផ្សេងៗឆ្លើយតបទៅនឹងមុខងារតែមួយតាមវិធីផ្សេងៗ ដែលអាចសម្រេចបានតាមរយៈ Method Overriding (runtime polymorphism) ឬ Method Overloading (compile-time polymorphism)។

ឧទាហរណ៍លម្អិត:

class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle");
    }
}

class Square extends Shape {
    void draw() {
        System.out.println("Drawing a square");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Square();
        shape1.draw(); // ហៅ draw() ពី Circle
        shape2.draw(); // ហៅ draw() ពី Square
    }
}
លទ្ធផល:

Drawing a circle
Drawing a square
1.9. ការផ្ទុកលើសមុខងារ (Method Overloading)
Method Overloading អនុញ្ញាតឱ្យមានមុខងារច្រើនក្នុង class តែមួយដែលមានឈ្មោះដូចគ្នា ប៉ុន្តែប៉ារ៉ាម៉ែត្រខុសគ្នា (ប្រភេទ ឬចំនួន)។ វាជួយបង្កើនភាពបត់បែននៃកូដ។

ឧទាហរណ៍លម្អិត:

class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("2 + 3 = " + calc.add(2, 3));
        System.out.println("2.5 + 3.5 = " + calc.add(2.5, 3.5));
        System.out.println("1 + 2 + 3 = " + calc.add(1, 2, 3));
    }
}
លទ្ធផល:

2 + 3 = 5
2.5 + 3.5 = 6.0
1 + 2 + 3 = 6
1.10. ការបញ្ជូនមុខងារថាមវន្ត (Dynamic Method Dispatch)
Dynamic Method Dispatch គឺជាយន្តការនៃ runtime polymorphism ដែល Java កំណត់មុខងារដែលត្រូវប្រើនៅពេលរត់ ផ្អែកលើប្រភេទវត្ថុជាក់ស្តែង មិនមែនប្រភេទ reference ទេ។

ឧទាហរណ៍លម្អិត:

class Animal {
    void sound() {
        System.out.println("Generic sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Woof");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        animal1.sound(); // ហៅ sound() ពី Dog
        animal2.sound(); // ហៅ sound() ពី Cat
    }
}
លទ្ធផល:

Woof
Meow
1.11. អរូបីភាព (Abstraction)
Abstraction គឺជាគោលការណ៍នៃ OOP ដែលលាក់ព័ត៌មានលម្អិតនៃការអនុវត្ត និងបង្ហាញតែមុខងារសំខាន់ៗដល់អ្នកប្រើប្រាស់។ វាអាចសម្រេចបានតាមរយៈ abstract classes ឬ interfaces។

ឧទាហរណ៍លម្អិត:

abstract class Vehicle {
    abstract void start(); // មុខងារអរូបី
}

class Car extends Vehicle {
    void start() {
        System.out.println("Car starts with a key");
    }

    public static void main(String[] args) {
        Vehicle vehicle = new Car();
        vehicle.start();
    }
}
លទ្ធផល:

Car starts with a key
1.12. ថ្នាក់អរូបី (Abstract Classes)
Abstract Classes គឺជា class ដែលមិនអាចបង្កើត instance បាន ហើយត្រូវបានប្រើដើម្បីកំណត់គំរូសម្រាប់ subclass។ វាអាចមានទាំង abstract methods (គ្មានការអនុវត្ត) និង concrete methods (មានការអនុវត្ត)។

ឧទាហរណ៍លម្អិត:

abstract class Shape {
    abstract void draw(); // មុខងារអរូបី

    void display() { // មុខងារជាក់លាក់
        System.out.println("Displaying shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing a circle");
    }

    public static void main(String[] args) {
        Circle circle = new Circle();
        circle.draw();
        circle.display();
    }
}
លទ្ធផល:

Drawing a circle
Displaying shape
1.13. ចំណុចប្រទាក់ (Interfaces)
Interfaces គឺជាប្រភេទអរូបីទាំងស្រុងដែលកំណត់កិច្ចសន្យាមួយសម្រាប់ class ដែលអនុវត្តវា ដោយប្រើពាក្យគន្លឹះ implements។ វាអនុញ្ញាតឱ្យសម្រេចបាន Multiple Inheritance នៅក្នុង Java។

ឧទាហរណ៍លម្អិត:

interface Printable {
    void print();
}

interface Displayable {
    void display();
}

class Document implements Printable, Displayable {
    public void print() {
        System.out.println("Printing document");
    }

    public void display() {
        System.out.println("Displaying document");
    }

    public static void main(String[] args) {
        Document doc = new Document();
        doc.print();
        doc.display();
    }
}
លទ្ធផល:

Printing document
Displaying document
2. គំនិត OOP កម្រិតខ្ពស់
ផ្នែកនេះគ្របដណ្តប់លើគំនិតកម្រិតខ្ពស់នៃការតម្រង់ទិសវត្ថុ (OOP) ក្នុង Java ដែលរួមបញ្ចូលការប្រើប្រាស់ពាក្យគន្លឹះ static, final, this និងការប្រើប្រាស់ Inner Classes ដើម្បីបង្កើនភាពបត់បែន និងរៀបចំកូដឱ្យកាន់តែប្រសើរឡើង។

2.1. ពាក្យគន្លឹះ Static
ពាក្យគន្លឹះ static ត្រូវបានប្រើដើម្បីបង្កើតធាតុ (variables, methods, ឬ nested classes) ដែលជាកម្មសិទ្ធិរបស់ class ជាជាង instance នៃ class នោះ។ វាអនុញ្ញាតឱ្យចូលប្រើធាតុទាំងនោះដោយមិនចាំបាច់បង្កើត instance នៃ class។

ឧទាហរណ៍លម្អិត:

public class MathUtil {
    // Static variable
    public static int counter = 0;

    // Static method
    public static int add(int a, int b) {
        counter++; // បន្ថែមចំនួនការប្រើប្រាស់
        return a + b;
    }

    public static void main(String[] args) {
        // ចូលប្រើ static method ដោយផ្ទាល់
        System.out.println("5 + 3 = " + MathUtil.add(5, 3));
        System.out.println("10 + 20 = " + MathUtil.add(10, 20));
        System.out.println("ចំនួនការប្រើប្រាស់: " + MathUtil.counter);
    }
}
លទ្ធផល:

5 + 3 = 8
10 + 20 = 30
ចំនួនការប្រើប្រាស់: 2
ការពន្យល់:
- static int counter: អថេរដែលជាកម្មសិទ្ធិរបស់ class និងត្រូវបានចែករំលែកដោយគ្រប់ instance។
- static int add: មុខងារដែលអាចហៅបានដោយផ្ទាល់តាមរយៈឈ្មោះ class។
- មិនចាំបាច់បង្កើត instance ដើម្បីប្រើ counter ឬ add ទេ។

2.2. ពាក្យគន្លឹះ Final
ពាក្យគន្លឹះ final ត្រូវបានប្រើដើម្បីកំណត់ថាអថេរ, មុខងារ ឬ class មិនអាចផ្លាស់ប្តូរ ឬបដិសេធ (override) បានទេ។ វាប្រើសម្រាប់បង្កើតថេរ (constants), ការពារការបដិសេធមុខងារ ឬរារាំងការស្នង class។

ឧទាហរណ៍លម្អិត:

public final class Constants {
    // Final variable (ថេរ)
    public static final double PI = 3.14159;

    // Final method
    public final void display() {
        System.out.println("តម្លៃ PI: " + PI);
    }

    public static void main(String[] args) {
        Constants constants = new Constants();
        constants.display();
        // PI = 3.14; // កំហុស: មិនអាចផ្លាស់ប្តូរ final variable
    }
}

class Test {
    public static void main(String[] args) {
        Constants c = new Constants();
        c.display();
    }
}
លទ្ធផល:

តម្លៃ PI: 3.14159
ការពន្យល់:
- final double PI: ថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃបាន។
- final void display: មុខងារដែលមិនអាចបដិសេធបានក្នុង subclass។
- final class Constants: Class ដែលមិនអាចស្នងបាន (inheritance មិនអាចធ្វើទៅបាន)។

2.3. ពាក្យគន្លឹះ this
ពាក្យគន្លឹះ this សំដៅទៅលើ instance បច្ចុប្បន្ននៃ class និងត្រូវបានប្រើដើម្បីបែងចែករវាងអថេរ instance និងប៉ារ៉ាម៉ែត្រដែលមានឈ្មោះដូចគ្នា ឬហៅ constructor ផ្សេងទៀតក្នុង class ដូចគ្នា។

ឧទាហរណ៍លម្អិត:

public class Person {
    private String name;
    private int age;

    // Constructor ដែលប្រើ this
    public Person(String name, int age) {
        this.name = name; // បែងចែករវាង instance variable និង parameter
        this.age = age;
    }

    // Constructor ដែលហៅ constructor ផ្សេង
    public Person(String name) {
        this(name, 0); // ហៅ constructor ខាងលើជាមួយ age = 0
    }

    public void display() {
        System.out.println("ឈ្មោះ: " + this.name + ", អាយុ: " + this.age);
    }

    public static void main(String[] args) {
        Person p1 = new Person("Sokha", 25);
        Person p2 = new Person("Vannak");
        p1.display();
        p2.display();
    }
}
លទ្ធផល:

ឈ្មោះ: Sokha, អាយុ: 25
ឈ្មោះ: Vannak, អាយុ: 0
ការពន្យល់:
- this.name = name: កំណត់តម្លៃ parameter name ទៅ instance variable name។
- this(name, 0): ហៅ constructor ផ្សេងក្នុង class ដូចគ្នា។
- this ជួយបញ្ជាក់ថាយើងកំពុងធ្វើការជាមួយ instance បច្ចុប្បន្ន។

2.4. Inner Classes (Nested, Local, Anonymous, Static Nested)
Inner Classes គឺជា class ដែលត្រូវបានកំណត់នៅខាងក្នុង class ផ្សេងទៀត។ មានបួនប្រភេទសំខាន់ៗ៖ Nested (ធម្មតា), Local (ក្នុង method), Anonymous (គ្មានឈ្មោះ), និង Static Nested (ប្រើ static)។ វាប្រើសម្រាប់រៀបចំកូដ និងអនុវត្ត logic ស្មុគស្មាញ។

ឧទាហរណ៍លម្អិត (បង្ហាញគ្រប់ប្រភេទ):

public class OuterClass {
    private int outerValue = 100;

    // Nested Inner Class
    class InnerClass {
        void display() {
            System.out.println("Nested Inner: " + outerValue);
        }
    }

    // Static Nested Class
    static class StaticNestedClass {
        void display() {
            System.out.println("Static Nested");
        }
    }

    // Local Inner Class
    void outerMethod() {
        class LocalInnerClass {
            void display() {
                System.out.println("Local Inner: " + outerValue);
            }
        }
        LocalInnerClass local = new LocalInnerClass();
        local.display();
    }

    public static void main(String[] args) {
        // Nested Inner Class
        OuterClass outer = new OuterClass();
        OuterClass.InnerClass inner = outer.new InnerClass();
        inner.display();

        // Static Nested Class
        OuterClass.StaticNestedClass staticNested = new OuterClass.StaticNestedClass();
        staticNested.display();

        // Local Inner Class
        outer.outerMethod();

        // Anonymous Inner Class
        Runnable anonymous = new Runnable() {
            public void run() {
                System.out.println("Anonymous Inner");
            }
        };
        anonymous.run();
    }
}
លទ្ធផល:

Nested Inner: 100
Static Nested
Local Inner: 100
Anonymous Inner
ការពន្យល់:
- InnerClass: Nested Inner Class ដែលអាចចូលប្រើ instance variables របស់ outer class។
- StaticNestedClass: Static Nested Class ដែលមិនតម្រូវឱ្យមាន instance នៃ outer class។
- LocalInnerClass: Local Inner Class ដែលកំណត់ក្នុង method មួយ។
- Anonymous Inner Class: Class គ្មានឈ្មោះដែលប្រើសម្រាប់អនុវត្ត interface ឬ override method ភ្លាមៗ។

- ជំពូកទី 3 : រចនាសម្ព័ន្ធទិន្នន័យ Java
ផ្នែកនេះគ្របដណ្តប់លើរចនាសម្ព័ន្ធទិន្នន័យសំខាន់ៗក្នុង Java ដែលប្រើសម្រាប់រៀបចំ និងគ្រប់គ្រងទិន្នន័យ។ យើងនឹងសិក្សាអំពី Arrays, Strings, Collections Framework និង Generics ដែលជាឧបករណ៍សំខាន់សម្រាប់ការសរសេរកម្មវិធីប្រកបដោយប្រសិទ្ធភាព។

1. Arrays
Arrays គឺជារចនាសម្ព័ន្ធទិន្នន័យដែលផ្ទុកធាតុជាច្រើននៃប្រភេទទិន្នន័យដូចគ្នា ដែលមានទំហំថេរ និងអាចចូលប្រើបានតាមលេខសន្ទស្សន៍ (index)។

1.1. Arrays មួយវិមាត្រ (Single-dimensional Arrays)
Arrays មួយវិមាត្រគឺជាបណ្តុំនៃធាតុដែលរៀបចំជាជួរតែមួយ។ វាត្រូវបានប្រកាសដោយប្រើប្រភេទទិន្នន័យ និងសញ្ញា []។

ឧទាហរណ៍:

public class SingleArrayExample {
    public static void main(String[] args) {
        // ប្រកាស និងកំណត់តម្លៃ array
        int[] numbers = new int[5];
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        numbers[3] = 40;
        numbers[4] = 50;

        // បោះពុម្ពធាតុទាំងអស់
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("លេខទី " + i + ": " + numbers[i]);
        }
    }
}
លទ្ធផល:

លេខទី 0: 10
លេខទី 1: 20
លេខទី 2: 30
លេខទី 3: 40
លេខទី 4: 50
1.2. Arrays ពហុវិមាត្រ (Multi-dimensional Arrays)
Arrays ពហុវិមាត្រគឺជា arrays ដែលមានច្រើនជួរ និងជួរឈរ ដូចជាតារាង។ វាត្រូវបានប្រកាសដោយប្រើសញ្ញា [][] ឬច្រើនជាងនេះ។

ឧទាហរណ៍:

public class MultiArrayExample {
    public static void main(String[] args) {
        // ប្រកាស array 2D
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // បោះពុម្ព matrix
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}
លទ្ធផល:

1 2 3
4 5 6
7 8 9
1.3. វិធីសាស្ត្រសម្រាប់ Arrays
Java ផ្តល់នូវ class Arrays ក្នុង java.util ដែលមានវិធីសាស្ត្រជាច្រើនដូចជា sorting, searching, និង copying arrays។

ឧទាហរណ៍:

import java.util.Arrays;

public class ArrayMethodsExample {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 9};

        // តម្រៀប array
        Arrays.sort(numbers);
        System.out.println("បន្ទាប់ពីតម្រៀប: " + Arrays.toString(numbers));

        // ស្វែងរក index នៃធាតុ
        int index = Arrays.binarySearch(numbers, 8);
        System.out.println("Index នៃ 8: " + index);
    }
}
លទ្ធផល:

បន្ទាប់ពីតម្រៀប: [1, 2, 5, 8, 9]
Index នៃ 8: 3
2. Strings
Strings គឺជាវត្ថុដែលផ្ទុកអក្សរជាបន្តបន្ទាប់ និងត្រូវបានប្រើយ៉ាងទូលំទូលាយក្នុង Java។ វាមានលក្ខណៈ immutable (មិនអាចផ្លាស់ប្តូរបាន)។

2.1. String Class និងវិធីសាស្ត្រ
Class String ផ្តល់នូវវិធីសាស្ត្រជាច្រើនដូចជា length(), substring(), concat() សម្រាប់គ្រប់គ្រងអក្សរ។

ឧទាហរណ៍:

public class StringExample {
    public static void main(String[] args) {
        String text = "Hello, Java!";
        
        // ប្រើវិធីសាស្ត្រផ្សេងៗ
        System.out.println("ប្រវែង: " + text.length());
        System.out.println("អក្សរចាប់ពី 7: " + text.substring(7));
        System.out.println("បន្ថែម: " + text.concat(" Welcome"));
    }
}
លទ្ធផល:

ប្រវែង: 12
អក្សរចាប់ពី 7: Java!
បន្ថែម: Hello, Java! Welcome
2.2. StringBuffer និង StringBuilder
StringBuffer និង StringBuilder គឺជា class ដែលអនុញ្ញាតឱ្យផ្លាស់ប្តូរ string (mutable)។ StringBuffer មានសុវត្ថិភាពសម្រាប់ thread ច្រើន ចំណែក StringBuilder លឿនជាង ប៉ុន្តែមិនមាន thread-safety។

ឧទាហរណ៍:

public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" Java"); // បន្ថែម
        sb.insert(5, ",");  // បញ្ចូល
        sb.replace(0, 5, "Hi"); // ជំនួស
        
        System.out.println("លទ្ធផល: " + sb.toString());
    }
}
លទ្ធផល:

លទ្ធផល: Hi, Java
3. Collections Framework
Collections Framework គឺជាសំណុំនៃ class និង interface ក្នុង java.util ដែលផ្តល់រចនាសម្ព័ន្ធទិន្នន័យដែលអាចបត់បែនបានដូចជា List, Set, Map, និង Queue។

3.1. List (ArrayList, LinkedList)
List គឺជាបណ្តុំដែលអនុញ្ញាតឱ្យមានធាតុស្ទួន និងរក្សាលំដាប់។ ArrayList លឿនសម្រាប់ការចូលប្រើចៃដន ចំណែក LinkedList លឿនសម្រាប់ការបញ្ចូល/លុប។

ឧទាហរណ៍:

import java.util.ArrayList;

public class ListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Sokha");
        names.add("Vannak");
        names.add("Sokha"); // អនុញ្ញាតស្ទួន

        System.out.println("Names: " + names);
    }
}
លទ្ធផល:

Names: [Sokha, Vannak, Sokha]
3.2. Set (HashSet, TreeSet, LinkedHashSet)
Set មិនអនុញ្ញាតឱ្យមានធាតុស្ទួនទេ។ HashSet មិនរក្សាលំដាប់, TreeSet តម្រៀបធាតុ, LinkedHashSet រក្សាលំដាប់ការបញ្ចូល។

ឧទាហរណ៍:

import java.util.HashSet;

public class SetExample {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(5); // ស្ទួនត្រូវបានបដិសេធ

        System.out.println("Numbers: " + numbers);
    }
}
លទ្ធផល:

Numbers: [2, 5]
3.3. Map (HashMap, TreeMap, LinkedHashMap)
Map ផ្ទុកទិន្នន័យជា key-value pairs។ HashMap មិនរក្សាលំដាប់, TreeMap តម្រៀបតាម key, LinkedHashMap រក្សាលំដាប់ការបញ្ចូល។

ឧទាហរណ៍:

import java.util.HashMap;

public class MapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("Sokha", 25);
        ages.put("Vannak", 30);

        System.out.println("Ages: " + ages);
    }
}
លទ្ធផល:

Ages: {Sokha=25, Vannak=30}
3.4. Queue (PriorityQueue, Deque)
Queue គឺជារចនាសម្ព័ន្ធដែលធ្វើការតាមលំដាប់ FIFO (First In, First Out)។ PriorityQueue តម្រៀបធាតុ, Deque (Double-ended Queue) អនុញ្ញាតការបញ្ចូល/លុបនៅចុងទាំងសងខាង។

ឧទាហរណ៍:

import java.util.PriorityQueue;

public class QueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        queue.add(3);
        queue.add(1);
        queue.add(2);

        System.out.println("Queue: " + queue);
        System.out.println("លុបធាតុ: " + queue.poll());
        System.out.println("បន្ទាប់ពីលុប: " + queue);
    }
}
លទ្ធផល:

Queue: [1, 3, 2]
លុបធាតុ: 1
បន្ទាប់ពីលុប: [2, 3]
3.5. Iterators (Iterator, ListIterator)
Iterator និង ListIterator ត្រូវបានប្រើដើម្បីឆ្លងកាត់ធាតុក្នុង collection។ Iterator អនុញ្ញាតឱ្យលុបធាតុ, ចំណែក ListIterator អាចឆ្លងទៅមុខ និងថយក្រោយ។

ឧទាហរណ៍:

import java.util.ArrayList;
import java.util.Iterator;

public class IteratorExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("A");
        list.add("B");
        list.add("C");

        Iterator<String> iterator = list.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
លទ្ធផល:

A
B
C
4. Generics
Generics អនុញ្ញាតឱ្យបង្កើត class ឬ method ដែលអាចធ្វើការជាមួយប្រភេទទិន្នន័យផ្សេងៗ ដោយផ្តល់នូវ type-safety និងកាត់បន្ថយការប្រើ casting។

4.1. Generic Classes និង Methods
Generic classes និង methods ប្រើ type parameter (ដូចជា T) ដើម្បីកំណត់ប្រភេទទិន្នន័យនៅពេលប្រើ។

ឧទាហរណ៍:

public class GenericBox<T> {
    private T item;

    public void setItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }

    public static void main(String[] args) {
        GenericBox<Integer> intBox = new GenericBox<>();
        intBox.setItem(123);
        System.out.println("Integer: " + intBox.getItem());

        GenericBox<String> strBox = new GenericBox<>();
        strBox.setItem("Hello");
        System.out.println("String: " + strBox.getItem());
    }
}
លទ្ធផល:

Integer: 123
String: Hello
4.2. Bounded Types
Bounded types កំណត់ថា type parameter ត្រូវតែជា subclass នៃ class ជាក់លាក់មួយ ឬ implement interface មួយ។

ឧទាហរណ៍:

public class BoundedExample {
    public static <T extends Number> double getDoubleValue(T value) {
        return value.doubleValue();
    }

    public static void main(String[] args) {
        System.out.println("Integer: " + getDoubleValue(5));
        System.out.println("Double: " + getDoubleValue(3.14));
    }
}
លទ្ធផល:

Integer: 5.0
Double: 3.14
4.3. Wildcards
Wildcards (?) ប្រើដើម្បីតំណាងឱ្យប្រភេទទិន្នន័យមិនស្គាល់ ដោយមាន ? extends (upper bound) និង ? super (lower bound)។

ឧទាហរណ៍:

import java.util.ArrayList;

public class WildcardExample {
    public static void printList(ArrayList<? extends Number> list) {
        for (Number n : list) {
            System.out.println(n);
        }
    }

    public static void main(String[] args) {
        ArrayList<Integer> intList = new ArrayList<>();
        intList.add(1);
        intList.add(2);
        printList(intList);

        ArrayList<Double> doubleList = new ArrayList<>();
        doubleList.add(3.14);
        printList(doubleList);
    }
}
លទ្ធផល:

1
2
3.14
- ជំពូកទី 4 : ការគ្រប់គ្រងករណីលើកលែង (Exception Handling)
ការគ្រប់គ្រងករណីលើកលែងគឺជាយន្តការក្នុង Java ដែលប្រើដើម្បីដោះស្រាយបញ្ហា ឬកំហុសដែលកើតឡើងនៅពេលរត់កម្មវិធី (runtime errors)។ ផ្នែកនេះគ្របដណ្តប់លើគោលគំនិតជាមូលដ្ឋាន ប្រភេទនៃករណីលើកលែង និងវិធីបង្កើតករណីលើកលែងផ្ទាល់ខ្លួន។

1. សេចក្តីណែនាំអំពីករណីលើកលែង
ករណីលើកលែង (Exceptions) គឺជាព្រឹត្តិការណ៍ដែលរំខានដល់លំហូរធម្មតានៃកម្មវិធី ដូចជាការបែងចែកដោយសូន្យ ឬការចូលប្រើឯកសារដែលមិនមាន។ Java ប្រើប្រាស់ប្រព័ន្ធការគ្រប់គ្រងករណីលើកលែងដើម្បីធានាថាកម្មវិធីនៅតែដំណើរការបាន។

ឧទាហរណ៍:

public class IntroException {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;
        // នឹងបង្កើត ArithmeticException
        int result = a / b;
        System.out.println("លទ្ធផល: " + result);
    }
}
លទ្ធផល:

Exception in thread "main" java.lang.ArithmeticException: / by zero
ការពន្យល់:
- កូដខាងលើព្យាយាមបែងចែកដោយសូន្យ ដែលបណ្តាលឱ្យកើត ArithmeticException។
- បើគ្មានការគ្រប់គ្រង កម្មវិធីនឹងបញ្ចប់ដោយកំហុស។

2. ប្រភេទនៃករណីលើកលែង (Checked និង Unchecked)
ករណីលើកលែងក្នុង Java មានពីរប្រភេទសំខាន់ៗ៖
- Checked Exceptions: ត្រូវបានត្រួតពិនិត្យនៅពេល compile (ដូចជា IOException) និងតម្រូវឱ្យគ្រប់គ្រង។
- Unchecked Exceptions: កើតឡើងនៅ runtime (ដូចជា ArithmeticException) និងមិនតម្រូវឱ្យគ្រប់គ្រងទេ។

ឧទាហរណ៍:

import java.io.File;
import java.io.FileReader;

public class TypesOfExceptions {
    public static void main(String[] args) {
        // Unchecked Exception
        try {
            int[] numbers = new int[2];
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }

        // Checked Exception
        try {
            File file = new File("nonexistent.txt");
            FileReader fr = new FileReader(file); // FileNotFoundException
        } catch (java.io.FileNotFoundException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

កំហុស: Index 5 out of bounds for length 2
កំហុស: nonexistent.txt (No such file or directory)
ការពន្យល់:
- ArrayIndexOutOfBoundsException: Unchecked ព្រោះវាកើតឡើងនៅ runtime។
- FileNotFoundException: Checked ព្រោះ compiler តម្រូវឱ្យគ្រប់គ្រង (បានបន្ថែម try-catch ដើម្បី compile បាន)។

3. Try-Catch Block
try-catch គឺជារចនាសម្ព័ន្ធសម្រាប់គ្រប់គ្រងករណីលើកលែង។ កូដដែលអាចបណ្តាលឱ្យមានកំហុសត្រូវបានដាក់ក្នុង try ហើយការដោះស្រាយកំហុសត្រូវបានធ្វើក្នុង catch។

ឧទាហរណ៍:

public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // បណ្តាលឱ្យ ArithmeticException
            System.out.println("លទ្ធផល: " + result);
        } catch (ArithmeticException e) {
            System.out.println("កំហុស: មិនអាចបែងចែកដោយសូន្យបានទេ!");
        }
        System.out.println("កម្មវិធីបន្តដំណើរការ...");
    }
}
លទ្ធផល:

កំហុស: មិនអាចបែងចែកដោយសូន្យបានទេ!
កម្មវិធីបន្តដំណើរការ...
ការពន្យល់:
- try: ផ្ទុកកូដដែលអាចបណ្តាលឱ្យមានករណីលើកលែង។
- catch: ចាប់ និងគ្រប់គ្រងករណីលើកលែងជាក់លាក់ (ArithmeticException)។
- កម្មវិធីបន្តដំណើរការបន្ទាប់ពីគ្រប់គ្រងកំហុស។

4. Multiple Catch Blocks
Multiple Catch Blocks អនុញ្ញាតឱ្យគ្រប់គ្រងករណីលើកលែងច្រើនប្រភេទក្នុង try តែមួយ ដោយប្រើ catch ជាច្រើន។ ត្រូវរៀបលំដាប់ពីករណីលើកលែងជាក់លាក់ទៅទូទៅ។

ឧទាហរណ៍:

public class MultipleCatchExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
            int result = 10 / 0; // ArithmeticException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("កំហុស: លេខសន្ទស្សន៍ហួសពី array!");
        } catch (ArithmeticException e) {
            System.out.println("កំហុស: មិនអាចបែងចែកដោយសូន្យបានទេ!");
        } catch (Exception e) {
            System.out.println("កំហុសទូទៅ: " + e.getMessage());
        }
    }
}
លទ្ធផល:

កំហុស: លេខសន្ទស្សន៍ហួសពី array!
ការពន្យល់:
- ArrayIndexOutOfBoundsException: ចាប់ករណីលើកលែងជាក់លាក់ដំបូង។
- ArithmeticException: មិនត្រូវបានប្រតិបត្តិ ព្រោះកំហុសដំបូងត្រូវបានចាប់រួចហើយ។
- Exception: Catch ទូទៅត្រូវដាក់ចុងក្រោយ ដើម្បីចាប់ករណីលើកលែងផ្សេងទៀត។

5. Finally Block
finally គឺជាផ្នែកដែលតែងតែត្រូវបានប្រតិបត្តិ មិនថាមានករណីលើកលែងកើតឡើងឬអត់ ហើយប្រើសម្រាប់ការសម្អាតធនធាន (cleanup) ដូចជាការបិទឯកសារ។

ឧទាហរណ៍:

public class FinallyExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // ArithmeticException
            System.out.println("លទ្ធផល: " + result);
        } catch (ArithmeticException e) {
            System.out.println("កំហុស: " + e.getMessage());
        } finally {
            System.out.println("Finally block តែងតែរត់!");
        }
    }
}
លទ្ធផល:

កំហុស: / by zero
Finally block តែងតែរត់!
ការពន្យល់:
- finally: ត្រូវបានប្រតិបត្តិទោះបីជាមានករណីលើកលែងក៏ដោយ។
- ប្រើសម្រាប់ធានាថាកូដសំខាន់ (ឧ. បិទធនធាន) ត្រូវបានរត់ជានិច្ច។

6. ករណីលើកលែងផ្ទាល់ខ្លួន (Custom Exceptions)
Custom Exceptions គឺជាករណីលើកលែងដែលអ្នកបង្កើតដោយខ្លួនឯង ដើម្បីគ្រប់គ្រងស្ថានភាពជាក់លាក់ក្នុងកម្មវិធីរបស់អ្នក ដោយស្នងពី Exception ឬ RuntimeException។

6.1. ការបង្កើតករណីលើកលែងផ្ទាល់ខ្លួន
ដើម្បីបង្កើត custom exception អ្នកត្រូវបង្កើត class ថ្មីដែលស្នងពី Exception ឬ RuntimeException ហើយបន្ថែម constructor សម្រាប់សារ។

ឧទាហរណ៍:

// Custom Exception Class
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionExample {
    public static void checkAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException("អាយុមិនត្រឹមត្រូវ!");
        }
        System.out.println("អាយុត្រឹមត្រូវ: " + age);
    }

    public static void main(String[] args) {
        try {
            checkAge(25);  // ត្រឹមត្រូវ
            checkAge(-5);  // មិនត្រឹមត្រូវ
        } catch (InvalidAgeException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

អាយុត្រឹមត្រូវ: 25
កំហុស: អាយុមិនត្រឹមត្រូវ!
ការពន្យល់:
- InvalidAgeException: Custom exception ដែលស្នងពី Exception (Checked)។
- throws: បញ្ជាក់ថា method អាចបោះករណីលើកលែងនេះ។
- throw: បោះករណីលើកលែងនៅពេលលក្ខខណ្ឌមិនត្រូវគ្នា។

6.2. ការបោះករណីលើកលែង
ពាក្យគន្លឹះ throw ត្រូវបានប្រើដើម្បីបោះករណីលើកលែងដោយចេតនា ហើយ throws បញ្ជាក់នៅក្នុង method signature ថាវាអាចបោះករណីលើកលែង។

ឧទាហរណ៍:

// Custom Unchecked Exception
class NegativeNumberException extends RuntimeException {
    public NegativeNumberException(String message) {
        super(message);
    }
}

public class ThrowingExceptionExample {
    public static void validateNumber(int number) {
        if (number < 0) {
            throw new NegativeNumberException("លេខមិនអាចអវិជ្ជមានបានទេ!");
        }
        System.out.println("លេខត្រឹមត្រូវ: " + number);
    }

    public static void main(String[] args) {
        try {
            validateNumber(10);  // ត្រឹមត្រូវ
            validateNumber(-3);  // មិនត្រឹមត្រូវ
        } catch (NegativeNumberException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

លេខត្រឹមត្រូវ: 10
កំហុស: លេខមិនអាចអវិជ្ជមានបានទេ!
ការពន្យល់:
- NegativeNumberException: Custom exception ដែលស្នងពី RuntimeException (Unchecked)។
- throw: បោះករណីលើកលែងនៅពេលលេខអវិជ្ជមាន។
- មិនតម្រូវឱ្យប្រើ throws ព្រោះវាជា Unchecked Exception។

- ជំពូកទី 5 : (ការគ្រប់គ្រងឯកសារ និង I/O)
ផ្នែកនេះគ្របដណ្តប់លើការគ្រប់គ្រងឯកសារ និងប្រតិបត្តិការ Input/Output (I/O) ក្នុង Java ដែលអនុញ្ញាតឱ្យអាន សរសេរ និងគ្រប់គ្រងទិន្នន័យក្នុងឯកសារ។ យើងនឹងសិក្សាពី class និង stream ផ្សេងៗ រួមទាំង serialization សម្រាប់រក្សាទុកវត្ថុ។

1. File Class
Class File ក្នុង java.io ត្រូវបានប្រើដើម្បីតំណាងឱ្យឯកសារ ឬថត (directory) នៅក្នុងប្រព័ន្ធឯកសារ និងផ្តល់វិធីសាស្ត្រដើម្បីគ្រប់គ្រងពួកវា (ឧ. បង្កើត លុប ពិនិត្យថាមានឬអត់)។

ឧទាហរណ៍:

import java.io.File;

public class FileClassExample {
    public static void main(String[] args) {
        // បង្កើតឯកសារថ្មី
        File file = new File("example.txt");

        try {
            if (file.createNewFile()) {
                System.out.println("ឯកសារ " + file.getName() + " ត្រូវបានបង្កើត!");
            } else {
                System.out.println("ឯកសារមានរួចហើយ!");
            }

            // ព័ត៌មានអំពីឯកសារ
            System.out.println("ទីតាំង: " + file.getAbsolutePath());
            System.out.println("អាចអានបាន: " + file.canRead());
            System.out.println("ទំហំ (bytes): " + file.length());
        } catch (java.io.IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល (បើជាលើកដំបូង):

ឯកសារ example.txt ត្រូវបានបង្កើត!
ទីតាំង: /path/to/example.txt
អាចអានបាន: true
ទំហំ (bytes): 0
ការពន្យល់:
- File file: បង្កើត instance នៃ File ដែលតំណាងឱ្យ "example.txt"។
- createNewFile(): បង្កើតឯកសារថ្មីបើវាមិនទាន់មាន។
- getAbsolutePath(), canRead(), length(): ទាញយកព័ត៌មានអំពីឯកសារ។

2. ការអាន និងសរសេរឯកសារ
Java ផ្តល់នូវវិធីផ្សេងៗដើម្បីអាន និងសរសេរទិន្នន័យទៅក្នុងឯកសារ ដោយប្រើ class ដូចជា FileWriter និង FileReader សម្រាប់ការងារសាមញ្ញ។

ឧទាហរណ៍:

import java.io.FileReader;
import java.io.FileWriter;

public class ReadWriteExample {
    public static void main(String[] args) {
        try {
            // សរសេរទៅឯកសារ
            FileWriter writer = new FileWriter("output.txt");
            writer.write("សួស្តី! នេះជាឧទាហរណ៍។");
            writer.close();
            System.out.println("បានសរសេរទៅឯកសាររួចរាល់!");

            // អានពីឯកសារ
            FileReader reader = new FileReader("output.txt");
            int character;
            System.out.print("អត្ថបទក្នុងឯកសារ: ");
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
            reader.close();
        } catch (java.io.IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

បានសរសេរទៅឯកសាររួចរាល់!
អត្ថបទក្នុងឯកសារ: សួស្តី! នេះជាឧទាហរណ៍។
ការពន្យល់:
- FileWriter: សរសេរអត្ថបទទៅក្នុងឯកសារ។
- FileReader: អានអត្ថបទពីឯកសារជា character នីមួយៗ។
- close(): បិទ stream ដើម្បីបញ្ចប់ការប្រើប្រាស់ធនធាន។

3. FileInputStream និង FileOutputStream
FileInputStream និង FileOutputStream ត្រូវបានប្រើសម្រាប់អាន និងសរសេរទិន្នន័យជា bytes ដែលស័ក្តិសមសម្រាប់ឯកសារគ្រប់ប្រភេទ (អត្ថបទ ឬ binary)។

ឧទាហរណ៍:

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class FileStreamExample {
    public static void main(String[] args) {
        try {
            // សរសេរទៅឯកសារ
            FileOutputStream fos = new FileOutputStream("data.bin");
            String data = "នេះជាទិន្នន័យ binary";
            fos.write(data.getBytes());
            fos.close();
            System.out.println("បានសរសេរទៅ data.bin!");

            // អានពីឯកសារ
            FileInputStream fis = new FileInputStream("data.bin");
            int byteData;
            System.out.print("ទិន្នន័យ: ");
            while ((byteData = fis.read()) != -1) {
                System.out.print((char) byteData);
            }
            fis.close();
        } catch (java.io.IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

បានសរសេរទៅ data.bin!
ទិន្នន័យ: នេះជាទិន្នន័យ binary
ការពន្យល់:
- FileOutputStream: សរសេរទិន្នន័យជា bytes ដោយបំលែង string ទៅ byte array។
- FileInputStream: អានទិន្នន័យជា bytes និងបំលែងត្រឡប់ទៅជា characters។
- ស័ក្តិសមសម្រាប់ឯកសារមិនមែនអត្ថបទ (ឧ. រូបភាព) ផងដែរ។

4. BufferedReader និង BufferedWriter
BufferedReader និង BufferedWriter ប្រើ buffer ដើម្បីកាត់បន្ថយការចូលប្រើផ្នែករឹងដោយផ្ទាល់ ដែលធ្វើឱ្យការអាន និងសរសេរមានប្រសិទ្ធភាពជាង។

ឧទាហរណ៍:

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class BufferedExample {
    public static void main(String[] args) {
        try {
            // សរសេរទៅឯកសារ
            BufferedWriter bw = new BufferedWriter(new FileWriter("buffered.txt"));
            bw.write("សួស្តី! នេះជាការសរសេរដោយ BufferedWriter។");
            bw.newLine();
            bw.write("ជួរទីពីរ។");
            bw.close();
            System.out.println("បានសរសេរទៅ buffered.txt!");

            // អានពីឯកសារ
            BufferedReader br = new BufferedReader(new FileReader("buffered.txt"));
            String line;
            System.out.println("អត្ថបទក្នុងឯកសារ:");
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            br.close();
        } catch (java.io.IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

បានសរសេរទៅ buffered.txt!
អត្ថបទក្នុងឯកសារ:
សួស្តី! នេះជាការសរសេរដោយ BufferedWriter។
ជួរទីពីរ។
ការពន្យល់:
- BufferedWriter: សរសេរអត្ថបទជាជួរ ដោយប្រើ newLine() សម្រាប់បំបែកជួរ។
- BufferedReader: អានអត្ថបទជាជួរដោយប្រើ readLine()។
- ប្រសិទ្ធភាពខ្ពស់ជាង FileReader/FileWriter សម្រាប់ទិន្នន័យច្រើន។

5. Serialization
Serialization គឺជាដំណើរការនៃការបំលែងវត្ថុទៅជា stream នៃ bytes ដើម្បីរក្សាទុកក្នុងឯកសារ ឬផ្ញើតាមបណ្តាញ និង deserialization ដើម្បីបំលែងត្រឡប់មកជាវត្ថុ។

5.1. Serializable Interface
Interface Serializable គឺជាសញ្ញាសម្គាល់ (marker interface) ដែលបញ្ជាក់ថា class អាចត្រូវបាន serialized បាន។ វាមិនមាន method ទេ។

ឧទាហរណ៍:

import java.io.Serializable;

public class Person implements Serializable {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return "ឈ្មោះ: " + name + ", អាយុ: " + age;
    }

    // Main សម្រាប់តេស្ត (នឹងប្រើនៅផ្នែកបន្ទាប់)
    public static void main(String[] args) {
        Person person = new Person("Sokha", 25);
        System.out.println(person);
    }
}
លទ្ធផល:

ឈ្មោះ: Sokha, អាយុ: 25
ការពន្យល់:
- implements Serializable: អនុញ្ញាតឱ្យ Person អាចត្រូវបាន serialized។
- គ្មាន method តម្រូវឱ្យអនុវត្តទេ ព្រោះវាជា marker interface។

5.2. ObjectInputStream និង ObjectOutputStream
ObjectOutputStream និង ObjectInputStream ត្រូវបានប្រើដើម្បីសរសេរ និងអានវត្ថុដែលអនុវត្ត Serializable។

ឧទាហរណ៍:

import java.io.*;

public class SerializationExample {
    public static void main(String[] args) {
        // Serialization
        try {
            Person person = new Person("Vannak", 30);
            FileOutputStream fos = new FileOutputStream("person.ser");
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(person);
            oos.close();
            System.out.println("បានរក្សាទុកវត្ថុ Person!");
        } catch (IOException e) {
            System.out.println("កំហុស serialization: " + e.getMessage());
        }

        // Deserialization
        try {
            FileInputStream fis = new FileInputStream("person.ser");
            ObjectInputStream ois = new ObjectInputStream(fis);
            Person deserializedPerson = (Person) ois.readObject();
            ois.close();
            System.out.println("វត្ថុដែលបានអាន: " + deserializedPerson);
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("កំហុស deserialization: " + e.getMessage());
        }
    }
}
លទ្ធផល:

បានរក្សាទុកវត្ថុ Person!
វត្ថុដែលបានអាន: ឈ្មោះ: Vannak, អាយុ: 30
ការពន្យល់:
- ObjectOutputStream: សរសេរវត្ថុ Person ទៅឯកសារ "person.ser"។
- ObjectInputStream: អានវត្ថុពីឯកសារ និងបំលែងត្រឡប់ទៅជា Person។
- តម្រូវឱ្យ class (Person) អនុវត្ត Serializable។

- ជំពូកទី 6 : Multithreading
Multithreading គឺជាយន្តការក្នុង Java ដែលអនុញ្ញាតឱ្យកម្មវិធីអាចប្រតិបត្តិការងារច្រើនក្នុងពេលតែមួយ ដោយប្រើ threads ដែលជាអង្គភាពតូចបំផុតនៃការដំណើរការ។ ផ្នែកនេះគ្របដណ្តប់លើគោលគំនិតជាមូលដ្ឋាន និងបច្ចេកទេសកម្រិតខ្ពស់នៃ multithreading។

6.1. សេចក្តីណែនាំអំពី Threads
Thread គឺជាលំដាប់នៃការប្រតិបត្តិកូដដែលដំណើរការដោយឯករាជ្យក្នុងកម្មវិធី។ Multithreading ជួយបង្កើនប្រសិទ្ធភាពដោយអនុញ្ញាតឱ្យការងារផ្សេងៗដំណើរការស្របគ្នា។

ឧទាហរណ៍:

public class SimpleThread {
    public static void main(String[] args) {
        // Main thread
        System.out.println("Main thread កំពុងដំណើរការ: " + Thread.currentThread().getName());
        for (int i = 0; i < 3; i++) {
            System.out.println("Main: " + i);
            try {
                Thread.sleep(500); // ផ្អាក 500ms
            } catch (InterruptedException e) {
                System.out.println("កំហុស: " + e.getMessage());
            }
        }
    }
}
លទ្ធផល:

Main thread កំពុងដំណើរការ: main
Main: 0
Main: 1
Main: 2
ការពន្យល់:
- Thread.currentThread().getName(): ទាញយកឈ្មោះ thread បច្ចុប្បន្ន (main thread)។
- Thread.sleep(): ផ្អាក thread បណ្តោះអាសន្ន។
- នេះជា single-threaded program ដែលប្រតិបត្តិជាលំដាប់។

2. ការបង្កើត Threads
ក្នុង Java យើងអាចបង្កើត threads បានតាមពីរវិធី៖ ដោយស្នងពី class Thread ឬអនុវត្ត interface Runnable។

2.1. ស្នងពី Thread Class
យើងបង្កើត thread ដោយស្នងពី Thread និង override method run() ដើម្បីកំណត់ការងាររបស់ thread។

ឧទាហរណ៍:

class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println("MyThread: " + i + " (" + Thread.currentThread().getName() + ")");
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("កំហុស: " + e.getMessage());
            }
        }
    }
}

public class ThreadExtendExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start(); // ចាប់ផ្តើម thread

        for (int i = 0; i < 3; i++) {
            System.out.println("Main: " + i + " (" + Thread.currentThread().getName() + ")");
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("កំហុស: " + e.getMessage());
            }
        }
    }
}
លទ្ធផល (អាចប្រែប្រួល):

Main: 0 (main)
MyThread: 0 (Thread-0)
Main: 1 (main)
MyThread: 1 (Thread-0)
Main: 2 (main)
MyThread: 2 (Thread-0)
ការពន្យល់:
- run(): កំណត់ការងាររបស់ thread។
- start(): ចាប់ផ្តើម thread ដើម្បីប្រតិបត្តិ run() ដោយស្របគ្នាជាមួយ main thread។

2.2. អនុវត្ត Runnable Interface
វិធីនេះប្រើ Runnable interface ដែលអនុញ្ញាតឱ្យ class អាចស្នងពី class ផ្សេងបាន ហើយប្រគល់ទៅ Thread ដើម្បីប្រតិបត្តិ។

ឧទាហរណ៍:

class MyRunnable implements Runnable {
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println("Runnable: " + i + " (" + Thread.currentThread().getName() + ")");
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("កំហុស: " + e.getMessage());
            }
        }
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();

        for (int i = 0; i < 3; i++) {
            System.out.println("Main: " + i + " (" + Thread.currentThread().getName() + ")");
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("កំហុស: " + e.getMessage());
            }
        }
    }
}
លទ្ធផល (អាចប្រែប្រួល):

Main: 0 (main)
Runnable: 0 (Thread-0)
Runnable: 1 (Thread-0)
Main: 1 (main)
Main: 2 (main)
Runnable: 2 (Thread-0)
ការពន្យល់:
- Runnable: ផ្តល់ run() method សម្រាប់ការងារ។
- new Thread(): បង្កើត thread ដោយប្រើ Runnable instance។
- អាចបត់បែនជាងការស្នង Thread។

3. វដ្តជីវិតនៃ Thread
Thread មានវដ្តជីវិតរួមមាន៖ New, Runnable, Running, Blocked/Waiting, និង Terminated។ វដ្តនេះគ្រប់គ្រងដោយ method ដូចជា start(), sleep(), និង join()។

ឧទាហរណ៍:

class LifecycleThread extends Thread {
    public void run() {
        System.out.println("Thread កំពុងដំណើរការ: " + getName());
        try {
            Thread.sleep(1000); // Blocked/Waiting
        } catch (InterruptedException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}

public class ThreadLifecycleExample {
    public static void main(String[] args) {
        LifecycleThread thread = new LifecycleThread();
        System.out.println("ស្ថានភាពដើម: " + thread.getState()); // New
        thread.start();
        System.out.println("ស្ថានភាពបន្ទាប់ពី start: " + thread.getState()); // Runnable

        try {
            thread.join(); // រង់ចាំ thread បញ្ចប់
        } catch (InterruptedException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
        System.out.println("ស្ថានភាពបន្ទាប់ពីបញ្ចប់: " + thread.getState()); // Terminated
    }
}
លទ្ធផល:

ស្ថានភាពដើម: NEW
ស្ថានភាពបន្ទាប់ពី start: RUNNABLE
Thread កំពុងដំណើរការ: Thread-0
ស្ថានភាពបន្ទាប់ពីបញ្ចប់: TERMINATED
ការពន្យល់:
- getState(): បង្ហាញស្ថានភាពបច្ចុប្បន្ននៃ thread។
- join(): ធ្វើឱ្យ main thread រង់ចាំរហូតដល់ thread បញ្ចប់។
- បង្ហាញវដ្តជីវិតពី New ទៅ Terminated។

4. Thread Synchronization
Synchronization ត្រូវបានប្រើដើម្បីការពារការចូលប្រើធនធានរួម (shared resources) ក្នុងពេលតែមួយដោយ threads ច្រើន ដោយប្រើ synchronized keyword។

ឧទាហរណ៍:

class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizationExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("ចំនួនសរុប: " + counter.getCount());
    }
}
លទ្ធផល:

ចំនួនសរុប: 2000
ការពន្យល់:
- synchronized: ធានាថាមានតែ thread មួយប៉ុណ្ណោះអាចចូលប្រើ increment() ក្នុងពេលតែមួយ។
- បើគ្មាន synchronization លទ្ធផលអាចតិចជាង 2000 ដោយសារការប្រកួតប្រជែង (race condition)។

5. គំនិត Thread កម្រិតខ្ពស់
គំនិតកម្រិតខ្ពស់រួមមាន thread priority, daemon threads, និង interruption។ ឧទាហរណ៍នេះបង្ហាញការប្រើ priority។

ឧទាហរណ៍:

class PriorityThread extends Thread {
    public PriorityThread(String name) {
        super(name);
    }

    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println(getName() + ": " + i);
        }
    }
}

public class AdvancedThreadExample {
    public static void main(String[] args) {
        PriorityThread low = new PriorityThread("Low Priority");
        PriorityThread high = new PriorityThread("High Priority");

        low.setPriority(Thread.MIN_PRIORITY); // 1
        high.setPriority(Thread.MAX_PRIORITY); // 10

        low.start();
        high.start();
    }
}
លទ្ធផល (អាចប្រែប្រួល):

High Priority: 0
High Priority: 1
High Priority: 2
Low Priority: 0
Low Priority: 1
Low Priority: 2
ការពន្យល់:
- setPriority(): កំណត់អាទិភាព (1-10) ដើម្បីផ្តល់សិទ្ធិដល់ thread មួយលើសមួយទៀត។
- High priority thread ទំនងជាដំណើរការមុន ប៉ុន្តែមិនធានា 100% ទេ។

6. Thread Pooling
Thread Pooling ប្រើ ExecutorService ដើម្បីគ្រប់គ្រងក្រុម threads ដែលអាចប្រើឡើងវិញបាន ជំនួសឱ្យការបង្កើត thread ថ្មីរាល់ដង។

ឧទាហរណ៍:

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2); // Pool មាន 2 threads

        for (int i = 0; i < 5; i++) {
            final int task = i;
            executor.submit(() -> {
                System.out.println("Task " + task + " ដំណើរការដោយ: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    System.out.println("កំហុស: " + e.getMessage());
                }
            });
        }

        executor.shutdown(); // បញ្ចប់ pool នៅពេលការងាររួចរាល់
    }
}
លទ្ធផល (អាចប្រែប្រួល):

Task 0 ដំណើរការដោយ: pool-1-thread-1
Task 1 ដំណើរការដោយ: pool-1-thread-2
Task 2 ដំណើរការដោយ: pool-1-thread-1
Task 3 ដំណើរការដោយ: pool-1-thread-2
Task 4 ដំណើរការដោយ: pool-1-thread-1
ការពន្យល់:
- newFixedThreadPool(2): បង្កើត pool ដែលមាន 2 threads។
- submit(): បញ្ជូនការងារទៅ pool ដើម្បីប្រតិបត្តិ។
- ប្រសិទ្ធភាពខ្ពស់ជាងការបង្កើត thread ថ្មីរាល់ដង។

7. Deadlock និង Livelock
Deadlock កើតឡើងនៅពេល threads ពីរឬច្រើនរង់ចាំគ្នាទៅវិញទៅមកដើម្បីបញ្ចេញធនធាន។ Livelock គឺស្រដៀងគ្នា ប៉ុន្តែ threads នៅតែសកម្មដោយគ្មានការរីកចម្រើន។

ឧទាហរណ៍ Deadlock:

public class DeadlockExample {
    public static void main(String[] args) {
        String resource1 = "Resource 1";
        String resource2 = "Resource 2";

        Thread t1 = new Thread(() -> {
            synchronized (resource1) {
                System.out.println("T1: ចាក់សោ resource1");
                try { Thread.sleep(100); } catch (Exception e) {}
                synchronized (resource2) {
                    System.out.println("T1: ចាក់សោ resource2");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (resource2) {
                System.out.println("T2: ចាក់សោ resource2");
                try { Thread.sleep(100); } catch (Exception e) {}
                synchronized (resource1) {
                    System.out.println("T2: ចាក់សោ resource1");
                }
            }
        });

        t1.start();
        t2.start();
    }
}
លទ្ធផល (Deadlock):

T1: ចាក់សោ resource1
T2: ចាក់សោ resource2
(កម្មវិធីជាប់ មិនបញ្ចប់)
ការពន្យល់:
- T1 ចាក់សោ resource1 ហើយរង់ចាំ resource2។
- T2 ចាក់សោ resource2 ហើយរង់ចាំ resource1។
- បណ្តាលឱ្យ deadlock ព្រោះគ្មាន thread ណាបញ្ចេញធនធានទេ។

8. ការទំនាក់ទំនងរវាង Threads
Inter-thread communication ប្រើ wait(), notify(), និង notifyAll() ដើម្បីសម្របសម្រួលការងាររវាង threads។

ឧទាហរណ៍:

class Message {
    private String msg;
    private boolean isProduced = false;

    public synchronized void produce(String msg) {
        while (isProduced) {
            try { wait(); } catch (InterruptedException e) {}
        }
        this.msg = msg;
        isProduced = true;
        System.out.println("ផលិត: " + msg);
        notify();
    }

    public synchronized String consume() {
        while (!isProduced) {
            try { wait(); } catch (InterruptedException e) {}
        }
        isProduced = false;
        System.out.println("ប្រើប្រាស់: " + msg);
        notify();
        return msg;
    }
}

public class InterThreadExample {
    public static void main(String[] args) {
        Message message = new Message();

        Thread producer = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                message.produce("សារទី " + i);
            }
        });

        Thread consumer = new Thread(() -> {
            for (int i = 0; i < 3; i++) {
                message.consume();
            }
        });

        producer.start();
        consumer.start();
    }
}
លទ្ធផល:

ផលិត: សារទី 0
ប្រើប្រាស់: សារទី 0
ផលិត: សារទី 1
ប្រើប្រាស់: សារទី 1
ផលិត: សារទី 2
ប្រើប្រាស់: សារទី 2
ការពន្យល់:
- wait(): ធ្វើឱ្យ thread រង់ចាំរហូតដល់ត្រូវបានគេរំខាន។
- notify(): ជូនដំណឹង thread មួយឱ្យបន្ត។
- បង្កើត producer-consumer pattern ដែល threads សម្របសម្រួលគ្នា។

- ជំពូកទី 7 : បណ្តាញក្នុង Java (Java Networking)
Java Networking គឺជាសមត្ថភាពរបស់ Java ក្នុងការទំនាក់ទំនងរវាងឧបករណ៍តាមបណ្តាញ ដោយប្រើ sockets, URLs, និង HTTP requests។ ផ្នែកនេះគ្របដណ្តប់លើគោលគំនិតជាមូលដ្ឋាន និងបច្ចេកទេសសម្រាប់ការងារបណ្តាញ។

1. មូលដ្ឋានគ្រឹះនៃបណ្តាញ
Networking ពាក់ព័ន្ធនឹងការផ្ញើ និងទទួលទិន្នន័យតាមបណ្តាញដោយប្រើ protocols ដូចជា TCP/IP ឬ UDP។ Java ផ្តល់ package java.net សម្រាប់គ្រប់គ្រងការងារនេះ។

ឧទាហរណ៍ (ការបង្ហាញ IP ម៉ាស៊ីន):

import java.net.InetAddress;

public class NetworkingBasics {
    public static void main(String[] args) {
        try {
            InetAddress localHost = InetAddress.getLocalHost();
            System.out.println("ឈ្មោះម៉ាស៊ីន: " + localHost.getHostName());
            System.out.println("អាសយដ្ឋាន IP: " + localHost.getHostAddress());
        } catch (java.net.UnknownHostException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល (អាស្រ័យលើម៉ាស៊ីន):

ឈ្មោះម៉ាស៊ីន: MyComputer
អាសយដ្ឋាន IP: 192.168.1.100
ការពន្យល់:
- InetAddress: តំណាងឱ្យអាសយដ្ឋាន IP និងឈ្មោះម៉ាស៊ីន។
- getLocalHost(): ទាញព័ត៌មានអំពីម៉ាស៊ីនបច្ចុប្បន្ន។
- បង្ហាញពីគោលគំនិតជាមូលដ្ឋាននៃការទំនាក់ទំនងបណ្តាញ។

2. Socket Programming
Sockets អនុញ្ញាតឱ្យមានការទំនាក់ទំនងរវាង client និង server តាមបណ្តាញ ដោយប្រើ TCP ឬ UDP។

2.1. TCP Sockets
TCP (Transmission Control Protocol) ផ្តល់ការទំនាក់ទំនងដែលអាចទុកចិត្តបាន ដោយប្រើ ServerSocket និង Socket។

ឧទាហរណ៍ (Server និង Client):

Server:

import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            System.out.println("Server កំពុងរង់ចាំ client...");
            Socket clientSocket = serverSocket.accept();
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            
            String inputLine = in.readLine();
            System.out.println("Client ផ្ញើ: " + inputLine);
            out.println("សួស្តីពី Server!");
            
            out.close();
            in.close();
            clientSocket.close();
        } catch (IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
Client:

import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 12345)) {
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            
            out.println("សួស្តីពី Client!");
            String response = in.readLine();
            System.out.println("Server ឆ្លើយតប: " + response);
            
            out.close();
            in.close();
        } catch (IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល (ដំណើរការ Server មុន បន្ទាប់មក Client):

Server កំពុងរង់ចាំ client...
Client ផ្ញើ: សួស្តីពី Client!
(Server output)

Server ឆ្លើយតប: សួស្តីពី Server!
(Client output)
ការពន្យល់:
- ServerSocket: បង្កើត server នៅ port 12345 និងរង់ចាំ client។
- Socket: Client ភ្ជាប់ទៅ server និងផ្ញើសារ។
- ទំនាក់ទំនងជា stream ដែលអាចទុកចិត្តបាន។

2.2. UDP Sockets
UDP (User Datagram Protocol) ផ្តល់ការទំនាក់ទំនងលឿន ប៉ុន្តែមិនធានាការដឹកជញ្ជូន ដោយប្រើ DatagramSocket និង DatagramPacket។

ឧទាហរណ៍ (Server និង Client):

Server:

import java.net.*;

public class UDPServer {
    public static void main(String[] args) {
        try (DatagramSocket socket = new DatagramSocket(9876)) {
            byte[] buffer = new byte[256];
            DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
            
            System.out.println("Server កំពុងរង់ចាំ...");
            socket.receive(packet);
            String received = new String(packet.getData(), 0, packet.getLength());
            System.out.println("Client ផ្ញើ: " + received);
            
            String response = "សួស្តីពី UDP Server!";
            byte[] responseData = response.getBytes();
            DatagramPacket responsePacket = new DatagramPacket(responseData, responseData.length, 
                packet.getAddress(), packet.getPort());
            socket.send(responsePacket);
        } catch (IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
Client:

import java.net.*;

public class UDPClient {
    public static void main(String[] args) {
        try (DatagramSocket socket = new DatagramSocket()) {
            String message = "សួស្តីពី UDP Client!";
            byte[] data = message.getBytes();
            InetAddress address = InetAddress.getByName("localhost");
            DatagramPacket packet = new DatagramPacket(data, data.length, address, 9876);
            socket.send(packet);
            
            byte[] buffer = new byte[256];
            DatagramPacket responsePacket = new DatagramPacket(buffer, buffer.length);
            socket.receive(responsePacket);
            String response = new String(responsePacket.getData(), 0, responsePacket.getLength());
            System.out.println("Server ឆ្លើយតប: " + response);
        } catch (IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល (Server មុន Client):

Server កំពុងរង់ចាំ...
Client ផ្ញើ: សួស្តីពី UDP Client!
(Server output)

Server ឆ្លើយតប: សួស្តីពី UDP Server!
(Client output)
ការពន្យល់:
- DatagramSocket: បង្កើត socket សម្រាប់ UDP។
- DatagramPacket: ផ្ញើ និងទទួលទិន្នន័យជា packets។
- លឿនជាង TCP ប៉ុន្តែអាចបាត់បង់ទិន្នន័យ។

3. ការគ្រប់គ្រង URL
Java អនុញ្ញាតឱ្យធ្វើការជាមួយ URLs ដើម្បីចូលប្រើធនធានលើអ៊ីនធឺណិត ដោយប្រើ URL និង URLConnection។

3.1. URL Class
URL class តំណាងឱ្យ Uniform Resource Locator និងផ្តល់ method ដើម្បីទាញព័ត៌មានអំពី URL។

ឧទាហរណ៍:

import java.net.URL;

public class URLExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.example.com:80/path?query=value");
            System.out.println("Protocol: " + url.getProtocol());
            System.out.println("Host: " + url.getHost());
            System.out.println("Port: " + url.getPort());
            System.out.println("Path: " + url.getPath());
            System.out.println("Query: " + url.getQuery());
        } catch (java.net.MalformedURLException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

Protocol: https
Host: www.example.com
Port: 80
Path: /path
Query: query=value
ការពន្យល់:
- URL: បំបែក URL ជាផ្នែកៗ (protocol, host, port, etc.)។
- ប្រើសម្រាប់ការវិភាគ URL មុនពេលភ្ជាប់។

3.2. URLConnection Class
URLConnection អនុញ្ញាតឱ្យភ្ជាប់ទៅ URL និងអានទិន្នន័យពីវា។

ឧទាហរណ៍:

import java.net.*;
import java.io.*;

public class URLConnectionExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://www.example.com");
            URLConnection conn = url.openConnection();
            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            
            String line;
            System.out.println("ខ្លឹមសារដើមខ្លះពី www.example.com:");
            int lines = 0;
            while ((line = reader.readLine()) != null && lines < 5) {
                System.out.println(line);
                lines++;
            }
            reader.close();
        } catch (IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល (អាស្រ័យលើគេហទំព័រ):

ខ្លឹមសារដើមខ្លះពី www.example.com:
<!doctype html>
<html>
<head>
    <title>Example Domain</title>
...
ការពន្យល់:
- openConnection(): បង្កើតការតភ្ជាប់ទៅ URL។
- getInputStream(): អានទិន្នន័យ HTML ពីគេហទំព័រ។
- សាមញ្ញសម្រាប់ការទាញទិន្នន័យពីអ៊ីនធឺណិត។

4. HTTP Requests
HTTP requests អនុញ្ញាតឱ្យ Java ធ្វើការជាមួយ web servers ដោយប្រើ HttpURLConnection ឬ HTTP Client API ថ្មី (Java 11+)។

4.1. HttpURLConnection
HttpURLConnection គឺជា class សម្រាប់ធ្វើ HTTP requests ដូចជា GET ឬ POST។

ឧទាហរណ៍ (GET Request):

import java.net.*;
import java.io.*;

public class HttpURLConnectionExample {
    public static void main(String[] args) {
        try {
            URL url = new URL("https://jsonplaceholder.typicode.com/posts/1");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            
            BufferedReader reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line;
            System.out.println("ទិន្នន័យ JSON:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            reader.close();
            conn.disconnect();
        } catch (IOException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

ទិន្នន័យ JSON:
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit
suscipit recusandae consequuntur ..."
}
ការពន្យល់:
- setRequestMethod("GET"): កំណត់ប្រភេទ request។
- getInputStream(): ទទួលទិន្នន័យ JSON ពី API។
- ប្រើសម្រាប់ការទាញទិន្នន័យពី web server។

4.2. HTTP Client API (Java 11+)
HTTP Client API ថ្មី (ក្នុង java.net.http) ផ្តល់វិធីទំនើប និងងាយស្រួលជាងសម្រាប់ HTTP requests។

ឧទាហរណ៍ (GET Request):

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientExample {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
            .GET()
            .build();

        try {
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            System.out.println("ស្ថានភាព: " + response.statusCode());
            System.out.println("ទិន្នន័យ JSON:");
            System.out.println(response.body());
        } catch (IOException | InterruptedException e) {
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល:

ស្ថានភាព: 200
ទិន្នន័យ JSON:
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit
suscipit recusandae consequuntur ..."
}
ការពន្យល់:
- HttpClient: បង្កើត client សម្រាប់ requests។
- HttpRequest: កំណត់ URI និង method (GET)។
- send(): ផ្ញើ request និងទទួល response ជា string។
- ទំនើប និងគាំទ្រការងារ asynchronous ផងដែរ។

- ជំពូកទី 8 : ការតភ្ជាប់មូលដ្ឋានទិន្នន័យក្នុង Java (JDBC)
JDBC (Java Database Connectivity) គឺជា API ដែលអនុញ្ញាតឱ្យកម្មវិធី Java ភ្ជាប់ និងធ្វើការជាមួយមូលដ្ឋានទិន្នន័យដោយប្រើ SQL។ ផ្នែកនេះគ្របដណ្តប់លើគោលគំនិតជាមូលដ្ឋាន និងវិធីប្រើ JDBC។

1. សេចក្តីណែនាំអំពី JDBC
JDBC ផ្តល់នូវវិធីស្តង់ដារដើម្បីភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ ដូចជា SQLite, MySQL, ឬ Oracle និងអនុវត្តប្រតិបត្តិការ SQL ដូចជា បញ្ចូល អាន ឬកែទិន្នន័យ។

ឧទាហរណ៍ (ការត្រួតពិនិត្យ Driver):

public class JDBCIntro {
    public static void main(String[] args) {
        try {
            Class.forName("org.sqlite.JDBC"); // ផ្ទុក SQLite Driver
            System.out.println("SQLite JDBC Driver ត្រូវបានផ្ទុកជោគជ័យ!");
        } catch (ClassNotFoundException e) {
            System.out.println("កំហុស: SQLite Driver មិនត្រូវបានរកឃើញ!");
            System.out.println("កំហុស: " + e.getMessage());
        }
    }
}
លទ្ធផល (បើមាន Driver):

SQLite JDBC Driver ត្រូវបានផ្ទុកជោគជ័យ!
ការពន្យល់:
- Class.forName(): ផ្ទុក JDBC driver សម្រាប់ SQLite។
- តម្រូវឱ្យបន្ថែម SQLite JDBC library (ឧ. sqlite-jdbc-3.42.0.jar) ទៅក្នុង project។
- ជាជំហានដំបូងក្នុងការប្រើ JDBC។

2. ស្ថាបត្យកម្ម JDBC
JDBC មានសមាសធាតុសំខាន់ៗដូចជា Driver Manager, Driver, Connection, Statement, និង ResultSet។ វាធ្វើការជាស្រទាប់រវាងកម្មវិធី Java និងមូលដ្ឋានទិន្នន័យ។

ឧទាហរណ៍ (រចនាសម្ព័ន្ធមូលដ្ឋាន):

import java.sql.*;

public class JDBCArchitecture {
    public static void main(String[] args) {
        try {
            // 1. ផ្ទុក Driver
            Class.forName("org.sqlite.JDBC");
            
            // 2. បង្កើត Connection
            Connection conn = DriverManager.getConnection("jdbc:sqlite:sample.db");
            System.out.println("ភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យជោគជ័យ!");
            
            // 3. បិទ Connection
            conn.close();
        } catch (ClassNotFoundException e) {
            System.out.println("កំហុស Driver: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល:

ភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យជោគជ័យ!
ការពន្យល់:
- DriverManager: គ្រប់គ្រងការតភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ។
- Connection: តំណាងឱ្យការតភ្ជាប់ទៅ database។
- បង្ហាញជំហានមូលដ្ឋាននៃស្ថាបត្យកម្ម JDBC។

3. ការតភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យ
ការតភ្ជាប់ទៅមូលដ្ឋានទិន្នន័យតម្រូវឱ្យមាន JDBC driver និង connection string ដែលសមស្រប។

3.1. JDBC Drivers
JDBC drivers គឺជាសមាសធាតុដែលភ្ជាប់ Java ទៅមូលដ្ឋានទិន្នន័យជាក់លាក់ (ឧ. SQLite, MySQL)។ មាន 4 ប្រភេទ៖ Type 1, 2, 3, និង 4 (Type 4 ជា pure Java)។

ឧទាហរណ៍ (ប្រើ SQLite Driver):

import java.sql.*;

public class JDBCDriverExample {
    public static void main(String[] args) {
        try {
            // ផ្ទុក SQLite Driver (Type 4)
            Class.forName("org.sqlite.JDBC");
            System.out.println("Driver ត្រូវបានផ្ទុក!");
            
            Connection conn = DriverManager.getConnection("jdbc:sqlite:test.db");
            System.out.println("ភ្ជាប់ជោគជ័យ!");
            conn.close();
        } catch (ClassNotFoundException e) {
            System.out.println("កំហុស Driver: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល:

Driver ត្រូវបានផ្ទុក!
ភ្ជាប់ជោគជ័យ!
ការពន្យល់:
- org.sqlite.JDBC: SQLite Type 4 driver។
- ត្រូវទាញយក jar file ពី Maven ឬ SQLite ផ្លូវការ។
- បើប្រើ database ផ្សេង (ឧ. MySQL) ត្រូវផ្លាស់ប្តូរ driver និង URL។

3.2. ការបង្កើតការតភ្ជាប់
ការតភ្ជាប់ត្រូវបានបង្កើតដោយប្រើ DriverManager.getConnection() ជាមួយ URL, ឈ្មោះអ្នកប្រើ (username), និងពាក្យសម្ងាត់ (password)។

ឧទាហរណ៍ (SQLite):

import java.sql.*;

public class ConnectionExample {
    public static void main(String[] args) {
        String url = "jdbc:sqlite:students.db";
        try (Connection conn = DriverManager.getConnection(url)) {
            if (conn != null) {
                DatabaseMetaData meta = conn.getMetaData();
                System.out.println("ឈ្មោះ Driver: " + meta.getDriverName());
                System.out.println("កំណែ Driver: " + meta.getDriverVersion());
                System.out.println("ភ្ជាប់ជោគជ័យទៅ students.db!");
            }
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល:

ឈ្មោះ Driver: SQLite JDBC
កំណែ Driver: 3.42.0
ភ្ជាប់ជោគជ័យទៅ students.db!
ការពន្យល់:
- jdbc:sqlite:students.db: Connection URL សម្រាប់ SQLite។
- try-with-resources: បិទ connection ដោយស្វ័យប្រវត្តិ។
- DatabaseMetaData: ផ្តល់ព័ត៌មានអំពី connection។

4. ការប្រតិបត្តិសំណួរ (Queries)
JDBC អនុញ្ញាតឱ្យប្រតិបត្តិ SQL queries ដើម្បីគ្រប់គ្រងទិន្នន័យក្នុងមូលដ្ឋានទិន្នន័យ។

4.1. Statement Interface
Statement ត្រូវបានប្រើដើម្បីប្រតិបត្តិ static SQL queries ដូចជា បង្កើតតារាង ឬបញ្ចូលទិន្នន័យ។

ឧទាហរណ៍:

import java.sql.*;

public class StatementExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
             Statement stmt = conn.createStatement()) {
            // បង្កើតតារាង
            String createTable = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT)";
            stmt.execute(createTable);
            System.out.println("តារាង students ត្រូវបានបង្កើត!");
            
            // បញ្ចូលទិន្នន័យ
            String insert = "INSERT INTO students (id, name) VALUES (1, 'Sokha')";
            stmt.executeUpdate(insert);
            System.out.println("បានបញ្ចូលទិន្នន័យ!");
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល:

តារាង students ត្រូវបានបង្កើត!
បានបញ្ចូលទិន្នន័យ!
ការពន្យល់:
- createStatement(): បង្កើត Statement object។
- execute(): ប្រតិបត្តិ DDL (ឧ. CREATE TABLE)។
- executeUpdate(): ប្រតិបត្តិ DML (ឧ. INSERT)។

4.2. ការប្រតិបត្តិ DML និង DQL
DML (Data Manipulation Language) ដូចជា INSERT, UPDATE, DELETE និង DQL (Data Query Language) ដូចជា SELECT អាចប្រតិបត្តិបានតាមរយៈ Statement។

ឧទាហរណ៍:

import java.sql.*;

public class DMLDQLExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
             Statement stmt = conn.createStatement()) {
            // DML: បញ្ចូលទិន្នន័យ
            stmt.executeUpdate("INSERT INTO students (id, name) VALUES (2, 'Vannak')");
            System.out.println("បានបញ្ចូល Vannak!");
            
            // DQL: អានទិន្នន័យ
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", ឈ្មោះ: " + rs.getString("name"));
            }
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល (បន្ទាប់ពី 4.1):

បានបញ្ចូល Vannak!
ID: 1, ឈ្មោះ: Sokha
ID: 2, ឈ្មោះ: Vannak
ការពន្យល់:
- executeUpdate(): ប្រតិបត្តិ DML ដើម្បីកែទិន្នន័យ។
- executeQuery(): ប្រតិបត្តិ DQL ដើម្បីទាញទិន្នន័យ ត្រឡប់ ResultSet។

5. ResultSet និង PreparedStatement
ResultSet ផ្ទុកលទ្ធផលនៃ query និង PreparedStatement ផ្តល់វិធីសុវត្ថិភាពជាងសម្រាប់ parameterized queries។

5.1. ការធ្វើការជាមួយ ResultSet
ResultSet អនុញ្ញាតឱ្យអានទិន្នន័យពីតារាងជួរម្តងមួយៗ ដោយប្រើ method ដូចជា next() និង getXXX()។

ឧទាហរណ៍:

import java.sql.*;

public class ResultSetExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM students")) {
            System.out.println("បញ្ជីនិស្សិត:");
            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("ID: " + id + ", ឈ្មោះ: " + name);
            }
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល (បន្ទាប់ពី 4.2):

បញ្ជីនិស្សិត:
ID: 1, ឈ្មោះ: Sokha
ID: 2, ឈ្មោះ: Vannak
ការពន្យល់:
- next(): ផ្លាស់ទៅជួរបន្ទាប់ក្នុង ResultSet។
- getInt(), getString(): ទាញតម្លៃតាមឈ្មោះជួរឈរ។
- ប្រើសម្រាប់ការអានទិន្នន័យលទ្ធផល។

5.2. ការប្រើ PreparedStatement
PreparedStatement អនុញ្ញាតឱ្យប្រើ parameterized queries ដើម្បីការពារ SQL injection និងបង្កើនប្រសិទ្ធភាព។

ឧទាហរណ៍:

import java.sql.*;

public class PreparedStatementExample {
    public static void main(String[] args) {
        try (Connection conn = DriverManager.getConnection("jdbc:sqlite:students.db");
             PreparedStatement pstmt = conn.prepareStatement("INSERT INTO students (id, name) VALUES (?, ?)")) {
            // បញ្ចូលទិន្នន័យ
            pstmt.setInt(1, 3);
            pstmt.setString(2, "Ratha");
            pstmt.executeUpdate();
            System.out.println("បានបញ្ចូល Ratha!");
            
            // អានទិន្នន័យ
            PreparedStatement selectStmt = conn.prepareStatement("SELECT * FROM students WHERE id = ?");
            selectStmt.setInt(1, 3);
            ResultSet rs = selectStmt.executeQuery();
            if (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", ឈ្មោះ: " + rs.getString("name"));
            }
        } catch (SQLException e) {
            System.out.println("កំហុស SQL: " + e.getMessage());
        }
    }
}
លទ្ធផល:

បានបញ្ចូល Ratha!
ID: 3, ឈ្មោះ: Ratha
ការពន្យល់:
- prepareStatement(): បង្កើត query ដែលមាន placeholders (?)។
- setXXX(): កំណត់តម្លៃសម្រាប់ placeholders។
- សុវត្ថិភាព និងប្រសិទ្ធភាពជាង Statement សម្រាប់ dynamic queries។`
  },
  {
    id: 16,
    slug: "cpp",
    title: "C++ មូលដ្ឋាន",
    description: "រៀន C++ សម្រាប់បង្កើតកម្មវិធីដែលមានប្រសិទ្ធភាពខ្ពស់",
    level: "កម្រិតខ្ពស់",
    icon: "⚙️",
    language: "cpp",
    content: `C++ គឺជាភាសាដែលមានថាមពលខ្ពស់ ប្រើសម្រាប់បង្កើត systems software, game engines និង applications ដែលត្រូវការល្បឿន។`,
    codeExample: `1. ការណែនាំអំពី C++
C++ គឺជាភាសាសរសេរកម្មវិធីដ៏ខ្លាំង និងមានអត្ថន័យខ្ពស់ ដែលត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការអភិវឌ្ឍប្រព័ន្ធ/កម្មវិធី, ការអភិវឌ្ឍហ្គេម, និងកម្មវិធីដែលទាមទារដល់អត្ថន័យខ្ពស់។ វាគឺជាការពង្រីកនៃភាសា C ជាមួយនឹងលក្ខណៈពិសេសបន្ថែមដូចជាការសរសេរកម្មវិធីបែបវត្ថុ (OOP)។ ផ្នែកនេះណែនាំអំពី C++, ការរៀបចំបរិស្ថាន, និងវាក្យសម្ព័ន្ធមូលដ្ឋាន។

1.1. ទិដ្ឋភាពទូទៅនៃ C++
C++ គឺជាភាសាសរសេរកម្មវិធីទូទៅ ដែលត្រូវបានបង្កើតឡើងដោយ Bjarne Stroustrup ក្នុងឆ្នាំ 1985។ វាផ្សំភាពរបស់ការសរសេរកម្មវិធីកម្រិតទាបដែលមានអត្ថន័យខ្ពស់ ជាមួយនឹងភាពអាចបត់បែននៃការសរសេរកម្មវិធីកម្រិតខ្ពស់ ដែលធ្វើឱ្យវាសមស្របសម្រាប់កម្មវិធីជាច្រើនប្រភេទ។

លក្ខណៈពិសេសរបស់ C++៖

គាំទ្រការសរសេរកម្មវិធីបែបវត្ថុ (OOP) ជាមួយថ្នាក់ និងវត្ថុ។
ផ្តល់នូវការគ្រប់គ្រងអង្គចងចាំកម្រិតទាបដោយប្រើ pointer។
មានអត្ថន័យខ្ពស់ និងលឿន ជាញឹកញាប់ត្រូវបានប្រើក្នុងកម្មវិធីដែលទាមទារដល់អត្ថន័យខ្ពស់។
បណ្ណាល័យស្តង់ដារធំទូលាយ (STL) សម្រាប់រចនាសម្ព័ន្ធទិន្នន័យ និងក្បួនដោះស្រាយ។
អាចដំណើរការបានលើវេទិកាផ្សេងៗ (Windows, macOS, Linux)។
1.2. ការរៀបចំបរិស្ថានអភិវឌ្ឍន៍ (IDE & Compiler)
ដើម្បីចាប់ផ្តើមសរសេរកម្មវិធី C++ អ្នកត្រូវការបរិស្ថានអភិវឌ្ឍន៍ដែលរួមបញ្ចូល compiler និងកម្មវិធីអភិវឌ្ឍន៍ដែលបញ្ចូលគ្នា (IDE)។

ជំហានដើម្បីរៀបចំបរិស្ថាន៖

ទាញយក compiler ដូចជា GCC (សម្រាប់ Linux/macOS) ឬ MinGW (សម្រាប់ Windows)។
ជ្រើសរើស IDE ដូចជា Code::Blocks, Visual Studio, ឬ CLion។
ដំឡើង compiler និង IDE តាមការណែនាំ។
ធានាថា compiler ត្រូវបានភ្ជាប់ជាមួយ IDE របស់អ្នក។
ឧទាហរណ៍នៃការដំឡើង GCC លើ Linux៖

sudo apt-get install g++
1.3. ការសរសេរ និងការចងក្រងកម្មវិធី C++ សាមញ្ញ
កម្មវិធី C++ ដំបូងរបស់អ្នកអាចត្រូវបានសរសេរនៅក្នុងឯកសារ .cpp ហើយចងក្រងដោយប្រើ compiler។

ឧទាហរណ៍កម្មវិធី "Hello, World!"៖

#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
ជំហានដើម្បីចងក្រង និងដំណើរការ៖

រក្សាទុកកូដនៅក្នុងឯកសារ hello.cpp។
បើក terminal ហើយចងក្រងដោយប្រើពាក្យបញ្ជា៖
g++ hello.cpp -o hello
ដំណើរការកម្មវិធី៖
./hello
លទ្ធផល៖

Hello, World!
1.4. វាក្យសម្ព័ន្ធមូលដ្ឋាន
C++ ប្រើវាក្យសម្ព័ន្ធដែលស្រដៀងនឹង C ប៉ុន្តែមានលក្ខណៈពិសេសបន្ថែមដូចជា classes និង objects។

គន្លឹះវាក្យសម្ព័ន្ធ៖

រាល់កម្មវិធី C++ ត្រូវតែមានអនុគមន៍ main() ជាចំណុចចាប់ផ្តើម។
ប្រើ #include ដើម្បីភ្ជាប់បណ្ណាល័យ។
ប្រើ cout ដើម្បីបង្ហាញអត្ថបទទៅកាន់ console។
ប្រើ ; ដើម្បីបញ្ចប់សេចក្តីថ្លែងការណ៍។
2. អថេរ និងប្រភេទទិន្នន័យ
អថេរត្រូវបានប្រើដើម្បីផ្ទុកទិន្នន័យក្នុងកម្មវិធី ហើយប្រភេទទិន្នន័យកំណត់ពីប្រភេទទិន្នន័យដែលអថេរអាចផ្ទុកបាន។ ផ្នែកនេះគ្របដណ្តប់អំពីរបៀបប្រកាសអថេរ, ប្រភេទទិន្នន័យផ្សេងៗក្នុង C++, ថេរ, ការកែប្រែប្រភេទ, និងប្រតិបត្តិការបញ្ចូល/ចេញមូលដ្ឋាន។

2.1. ការប្រកាសអថេរ
អថេរត្រូវបានប្រកាសដោយបញ្ជាក់ប្រភេទទិន្នន័យ និងឈ្មោះរបស់វា។ អថេរអាចត្រូវបានចាប់ផ្តើមជាមួយតម្លៃឬគ្មានតម្លៃ។

ឧទាហរណ៍៖

int age;          // ប្រកាសអថេរ 'age' ជាមួយប្រភេទ int
double salary = 1200.50; // ប្រកាសអថេរ 'salary' ជាមួយប្រភេទ double និងតម្លៃដំបូង
char grade = 'A';     // ប្រកាសអថេរ 'grade' ជាមួយប្រភេទ char និងតម្លៃដំបូង
2.2. ប្រភេទទិន្នន័យ (int, float, char, string, bool)
C++ គាំទ្រប្រភេទទិន្នន័យជាច្រើន ដែលអាចប្រើសម្រាប់ការផ្ទុកទិន្នន័យប្រភេទផ្សេងៗ។

ប្រភេទទិន្នន័យសំខាន់ៗ៖

int - ចំនួនគត់ (ឧទាហរណ៍៖ int age = 25;)
float - ចំនួនគត់ដែលមានចំនុចទសភាគ (ឧទាហរណ៍៖ float pi = 3.14;)
double - ចំនួនគត់ដែលមានចំនុចទសភាគច្រើនខ្ទង់ (ឧទាហរណ៍៖ double salary = 1200.50;)
char - តួអក្សរតែមួយ (ឧទាហរណ៍៖ char grade = 'A';)
string - ខ្សែអក្សរ (ឧទាហរណ៍៖ string name = "John";)
bool - តម្លៃពិត ឬមិនពិត (ឧទាហរណ៍៖ bool isStudent = true;)
2.3. ថេរ និងការកែប្រែប្រភេទ
ថេរគឺជាអថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃបាន។ ការកែប្រែប្រភេទអាចផ្លាស់ប្តូរទំហំ ឬលក្ខណៈនៃប្រភេទទិន្នន័យ។

ឧទាហរណ៍ថេរ៖

const double PI = 3.14159; // ថេរ PI មិនអាចផ្លាស់ប្តូរតម្លៃបាន
ឧទាហរណ៍ការកែប្រែប្រភេទ៖

unsigned int positiveNumber = 100; // ចំនួនគត់វិជ្ជមាន
long bigNumber = 1000000; // ចំនួនគត់ធំ
2.4. បញ្ចូល និងចេញ (cin និង cout)
C++ ប្រើ cin ដើម្បីទទួលទិន្នន័យពីអ្នកប្រើប្រាស់ និង cout ដើម្បីបង្ហាញទិន្នន័យទៅកាន់ console។

ឧទាហរណ៍៖

#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: "; // បង្ហាញសារ
    cin >> age;                 // ទទួលទិន្នន័យពីអ្នកប្រើប្រាស់
    cout << "You are " << age << " years old." << endl; // បង្ហាញលទ្ធផល
    return 0;
}
លទ្ធផល៖

Enter your age: 25
You are 25 years old.
3. ប្រមាណវិធី និងកន្សោម
ប្រមាណវិធីគឺជានិមិត្តសញ្ញាដែលត្រូវបានប្រើដើម្បីអនុវត្តប្រតិបត្តិការលើអថេរ និងតម្លៃ។ កន្សោមគឺជាការផ្សំរវាងអថេរ, ថេរ និងប្រមាណវិធីដែលផលិតលទ្ធផល។ ផ្នែកនេះគ្របដណ្តប់អំពីប្រភេទប្រមាណវិធីផ្សេងៗ និងរបៀបប្រើវាក្នុង C++។

3.1. ប្រមាណវិធីនព្វន្ធ
ប្រមាណវិធីនព្វន្ធត្រូវបានប្រើដើម្បីអនុវត្តការគណនាគណិតវិទ្យាមូលដ្ឋាន។

ប្រមាណវិធីនព្វន្ធសំខាន់ៗ៖

+ - បូក (ឧទាហរណ៍៖ 5 + 3 ផ្តល់លទ្ធផល 8)
- - ដក (ឧទាហរណ៍៖ 5 - 3 ផ្តល់លទ្ធផល 2)
* - គុណ (ឧទាហរណ៍៖ 5 * 3 ផ្តល់លទ្ធផល 15)
/ - ចែក (ឧទាហរណ៍៖ 10 / 2 ផ្តល់លទ្ធផល 5)
% - នៅសល់ (ឧទាហរណ៍៖ 10 % 3 ផ្តល់លទ្ធផល 1)
3.2. ប្រមាណវិធីទាក់ទង និងតក្កវិជ្ជា
ប្រមាណវិធីទាក់ទងត្រូវបានប្រើដើម្បីប្រៀបធៀបតម្លៃ ហើយប្រមាណវិធីតក្កវិជ្ជាត្រូវបានប្រើដើម្បីផ្សំលក្ខខណ្ឌ។

ប្រមាណវិធីទាក់ទង៖

== - ស្មើ (ឧទាហរណ៍៖ 5 == 3 ផ្តល់លទ្ធផល false)
!= - មិនស្មើ (ឧទាហរណ៍៖ 5 != 3 ផ្តល់លទ្ធផល true)
> - ធំជាង (ឧទាហរណ៍៖ 5 > 3 ផ្តល់លទ្ធផល true)
< - តូចជាង (ឧទាហរណ៍៖ 5 < 3 ផ្តល់លទ្ធផល false)
>= - ធំជាង ឬស្មើ (ឧទាហរណ៍៖ 5 >= 5 ផ្តល់លទ្ធផល true)
<= - តូចជាង ឬស្មើ (ឧទាហរណ៍៖ 5 <= 3 ផ្តល់លទ្ធផល false)
ប្រមាណវិធីតក្កវិជ្ជា៖

&& - AND (ឧទាហរណ៍៖ true && false ផ្តល់លទ្ធផល false)
|| - OR (ឧទាហរណ៍៖ true || false ផ្តល់លទ្ធផល true)
! - NOT (ឧទាហរណ៍៖ !true ផ្តល់លទ្ធផល false)
3.3. ប្រមាណវិធីប៊ីត
ប្រមាណវិធីប៊ីតធ្វើការលើប៊ីតនៃតម្លៃគោលពីរ។

ប្រមាណវិធីប៊ីតសំខាន់ៗ៖

& - AND (ឧទាហរណ៍៖ 5 & 3 ផ្តល់លទ្ធផល 1)
| - OR (ឧទាហរណ៍៖ 5 | 3 ផ្តល់លទ្ធផល 7)
^ - XOR (ឧទាហរណ៍៖ 5 ^ 3 ផ្តល់លទ្ធផល 6)
~ - NOT (ឧទាហរណ៍៖ ~5 ផ្តល់លទ្ធផល -6)
<< - ប្តូរឆ្វេង (ឧទាហរណ៍៖ 5 << 1 ផ្តល់លទ្ធផល 10)
>> - ប្តូរស្តាំ (ឧទាហរណ៍៖ 5 >> 1 ផ្តល់លទ្ធផល 2)
3.4. ប្រមាណវិធីការចាត់តាំង និងការចាត់តាំងផ្សំ
ប្រមាណវិធីការចាត់តាំងត្រូវបានប្រើដើម្បីផ្តល់តម្លៃដល់អថេរ ហើយប្រមាណវិធីការចាត់តាំងផ្សំធ្វើប្រតិបត្តិការនិងផ្តល់តម្លៃក្នុងពេលតែមួយ។

ឧទាហរណ៍៖

int x = 5;  // ផ្តល់តម្លៃ 5 ដល់ x
x += 3;    // ដូចគ្នានឹង x = x + 3
x -= 2;    // ដូចគ្នានឹង x = x - 2
x *= 4;    // ដូចគ្នានឹង x = x * 4
x /= 2;    // ដូចគ្នានឹង x = x / 2
3.5. ប្រមាណវិធីបង្កើន និងបន្ថយ
ប្រមាណវិធីបង្កើន (++) និងបន្ថយ (--) ត្រូវបានប្រើដើម្បីបង្កើន ឬបន្ថយតម្លៃអថេរដោយ 1។

ឧទាហរណ៍៖

int x = 5;
x++;  // x ឥឡូវនេះគឺ 6
x--;  // x ឥឡូវនេះគឺ 5
4. សេចក្តីថ្លែងការណ៍គ្រប់គ្រងលំហូរ
សេចក្តីថ្លែងការណ៍គ្រប់គ្រងលំហូរត្រូវបានប្រើដើម្បីគ្រប់គ្រងលំហូរការប្រតិបត្តិនៃកម្មវិធីដោយផ្អែកលើលក្ខខណ្ឌ ឬរង្វិលជុំ។ ផ្នែកនេះគ្របដណ្តប់អំពីសេចក្តីថ្លែងការណ៍លក្ខខណ្ឌ, សេចក្តីថ្លែងការណ៍រង្វិលជុំ, និងសេចក្តីថ្លែងការណ៍លោត។

4.1. សេចក្តីថ្លែងការណ៍លក្ខខណ្ឌ (if, if-else, if-elseif-else, switch)
សេចក្តីថ្លែងការណ៍លក្ខខណ្ឌអនុញ្ញាតឱ្យកម្មវិធីធ្វើការសម្រេចចិត្តដោយផ្អែកលើលក្ខខណ្ឌ។

ឧទាហរណ៍ if៖

if សាមញ្ញត្រូវបានប្រើនៅពេលអ្នកចង់ប្រតិបត្តិកូដតែនៅពេលលក្ខខណ្ឌមួយពិត (true)។ ប្រសិនបើលក្ខខណ្ឌមិនពិត កូដនៅក្នុង if នឹងត្រូវរំលង។

#include <iostream>
using namespace std;

int main() {
    int x = 10;

    if (x > 5) {
        cout << "x is greater than 5" << endl;
    }

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះពិនិត្យតម្លៃរបស់អថេរ x។
- ប្រសិនបើ x ធំជាង 5, វានឹងបង្ហាញ "x is greater than 5"។

លទ្ធផល៖

x is greater than 5
ឧទាហរណ៍ if-else៖

if else បន្ថែមផ្នែក else ដើម្បីប្រតិបត្តិកូដនៅពេលលក្ខខណ្ឌរបស់ if មិនពិត (false)។ វាផ្តល់ជម្រើសពីរផ្លូវ៖ មួយសម្រាប់លក្ខខណ្ឌពិត និងមួយទៀតសម្រាប់លក្ខខណ្ឌមិនពិត។

#include <iostream>
using namespace std;

int main() {
    int x = 3;

    if (x > 5) {
        cout << "x is greater than 5" << endl;
    } else {
        cout << "x is less than or equal to 5" << endl;
    }

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះពិនិត្យតម្លៃរបស់អថេរ x។
- ប្រសិនបើ x ធំជាង 5, វានឹងបង្ហាញ "x is greater than 5"។
- បើមិនដូច្នេះទេ, វានឹងបង្ហាញ "x is less than or equal to 5"។

លទ្ធផល៖

x is less than or equal to 5
ឧទាហរណ៍ if-elseif-else៖

if else if else អនុញ្ញាតឱ្យពិនិត្យលក្ខខណ្ឌច្រើនជាងមួយ។ វាប្រើ else if ដើម្បីបន្ថែមលក្ខខណ្ឌបន្ទាប់ និង else សម្រាប់ករណីដែលគ្មានលក្ខខណ្ឌណាពិត។ នេះជួយគ្រប់គ្រងស្ថានភាពស្មុគស្មាញដែលមានជម្រើសច្រើន។

#include <iostream>
using namespace std;

int main() {
    int x = 10;

    if (x > 10) {
        cout << "x is greater than 10" << endl;
    } else if (x == 10) {
        cout << "x is equal to 10" << endl;
    } else {
        cout << "x is less than 10" << endl;
    }

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះពិនិត្យតម្លៃរបស់អថេរ x។
- ប្រសិនបើ x ធំជាង 10, វានឹងបង្ហាញ "x is greater than 10"។
- ប្រសិនបើ x ស្មើនឹង 10, វានឹងបង្ហាញ "x is equal to 10"។
- បើមិនដូច្នេះទេ, វានឹងបង្ហាញ "x is less than 10"។

លទ្ធផល៖

x is equal to 10
ឧទាហរណ៍ switch៖

សេចក្តីបញ្ជា switch អនុញ្ញាតឱ្យជ្រើសរើសប្លុកកូដមួយក្នុងចំណោមប្លុកជាច្រើន ដោយផ្អែកលើតម្លៃនៃកន្សោម។ វាប្រៀបធៀបតម្លៃមួយជាមួយ case ផ្សេងៗ ហើយប្រតិបត្តិកូដនៅក្នុង case ដែលផ្គូផ្គង។ break ត្រូវបានប្រើដើម្បីបញ្ឈប់ការប្រតិបត្តិ និងចាកចេញពី switch។ បើគ្មាន case ណាផ្គូផ្គងទេ default នឹងត្រូវប្រតិបត្តិ (បើមាន)។ នៅទីនេះ យើងប្រើ switch ដើម្បីកំណត់និទ្ទេសសិស្ស ស្រដៀងនឹង if else if else។
#include <iostream>
using namespace std;

int main() {
    int day = 3;

    switch (day) {
        case 1:
            cout << "Monday" << endl;
            break;
        case 2:
            cout << "Tuesday" << endl;
            break;
        case 3:
            cout << "Wednesday" << endl;
            break;
        case 4:
            cout << "Thursday" << endl;
            break;
        case 5:
            cout << "Friday" << endl;
            break;
        default:
            cout << "Weekend or invalid day" << endl;
            break;
    }

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើសេចក្តីថ្លែងការណ៍ switch ដើម្បីពិនិត្យតម្លៃរបស់អថេរ day។
- ប្រសិនបើ day ស្មើនឹង 1, វានឹងបង្ហាញ "Monday"។
- ប្រសិនបើ day ស្មើនឹង 3, វានឹងបង្ហាញ "Wednesday"។
- ប្រសិនបើតម្លៃមិនត្រូវនឹង case ណាមួយ, វានឹងបង្ហាញ "Weekend or invalid day" (តាម default)។
- break ត្រូវបានប្រើដើម្បីបញ្ឈប់ការប្រតិបត្តិបន្ទាប់ពី case ត្រូវគ្នា។

លទ្ធផល៖

Wednesday
4.2. សេចក្តីថ្លែងការណ៍រង្វិលជុំ (for, while, do-while)
សេចក្តីថ្លែងការណ៍រង្វិលជុំអនុញ្ញាតឱ្យកម្មវិធីធ្វើការម្តងហើយម្តងទៀតដោយផ្អែកលើលក្ខខណ្ឌ។

ឧទាហរណ៍ for៖

for ប្រើសម្រាប់រង្វិលជុំដែលមានចំនួនជាក់លាក់ ដោយប្រើអថេររាប់។
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើរង្វិលជុំ for ដើម្បីបង្ហាញតម្លៃរបស់អថេរ i ពី 0 ដល់ 4។
- រង្វិលជុំនេះដំណើរការដល់ពេល i តូចជាង 5។

លទ្ធផល៖

0 1 2 3 4
ឧទាហរណ៍ while៖

while ប្រតិបត្តិកូដដរាបណាលក្ខខណ្ឌនៅតែពិត។
#include <iostream>
using namespace std;

int main() {
    int i = 0;

    while (i < 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើរង្វិលជុំ while ដើម្បីបង្ហាញតម្លៃរបស់អថេរ i ពី 0 ដល់ 4។
- រង្វិលជុំនេះដំណើរការដល់ពេល i តូចជាង 5។

លទ្ធផល៖

0 1 2 3 4
ឧទាហរណ៍ do-while៖

do...while ប្រតិបត្តិកូដយ៉ាងហោចម្តង មុននឹងពិនិត្យលក្ខខណ្ឌ។
#include <iostream>
using namespace std;

int main() {
    int i = 0;

    do {
        cout << i << " ";
        i++;
    } while (i < 5);
    cout << endl;

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើរង្វិលជុំ do-while ដើម្បីបង្ហាញតម្លៃរបស់អថេរ i ពី 0 ដល់ 4។
- រង្វិលជុំនេះដំណើរការយ៉ាងហោចណាស់ម្តង ហើយបន្តដល់ពេល i តូចជាង 5។

លទ្ធផល៖

0 1 2 3 4
4.3. សេចក្តីថ្លែងការណ៍លោត (break, continue, goto)
សេចក្តីថ្លែងការណ៍លោតអនុញ្ញាតឱ្យកម្មវិធីផ្លាស់ប្តូរលំហូរនៃការដំណើរការ ដែលជាធម្មតាប្រើក្នុងរង្វិលជុំ ឬប្លុកលក្ខខណ្ឌ។

ឧទាហរណ៍ break៖

break ត្រូវបានប្រើដើម្បីគ្រប់គ្រងឥរិយាបថនៃរង្វិលជុំ។ break បញ្ចប់រង្វិលជុំទាំងមូល។
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 10; i++) {
        if (i == 5) {
            break;
        }
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើរង្វិលជុំ for ដើម្បីបង្ហាញតម្លៃរបស់អថេរ i ពី 0 ដល់ 9។
- នៅពេល i ស្មើ 5 សេចក្តីថ្លែងការណ៍ break បញ្ឈប់រង្វិលជុំភ្លាមៗ។

លទ្ធផល៖

0 1 2 3 4
ឧទាហរណ៍ continue៖

continue ត្រូវបានប្រើដើម្បីគ្រប់គ្រងឥរិយាបថនៃរង្វិលជុំ។ continue រំលងទៅវដ្តបន្ទាប់។
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        if (i == 2) {
            continue;
        }
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើរង្វិលជុំ For ដើម្បីបង្ហាញតម្លៃរបស់អថេរ i ពី 0 ដល់ 4។
- នៅពេល i ស្មើ 2 សេចក្តីថ្លែងការណ៍ continue រំលងការបោះពុម្ព ហើយបន្តទៅវដ្តបន្ទាប់។

លទ្ធផល៖

0 1 3 4
ឧទាហរណ៍ goto៖

goto ដើម្បីលោតទៅស្លាក start។
#include <iostream>
using namespace std;

int main() {
    int i = 0;

    start:
    if (i < 5) {
        cout << i << " ";
        i++;
        goto start;
    }
    cout << endl;

    return 0;
}
ការពន្យល់៖
- កម្មវិធីនេះប្រើសេចក្តីថ្លែងការណ៍ goto ដើម្បីលោតទៅស្លាក start។
- វាបង្ហាញតម្លៃរបស់ i ពី 0 ដល់ 4 ហើយបញ្ឈប់នៅពេល i ស្មើ 5។

លទ្ធផល៖

0 1 2 3 4
5. អនុគមន៍ក្នុង C++
អនុគមន៍គឺជាប្លុកនៃកូដដែលអនុវត្តកិច្ចការជាក់លាក់មួយ។ វាជួយឱ្យកម្មវិធីមានភាពស្ថានភាព និងងាយស្រួលក្នុងការថែទាំ។ ផ្នែកនេះគ្របដណ្តប់អំពីផ្នែកផ្សេងៗនៃអនុគមន៍ក្នុង C++ រួមទាំងការប្រកាស ការកំណត់ ការផ្ទុកហួស និងលក្ខណៈពិសេសកម្រិតខ្ពស់ដូចជា អនុគមន៍ Lambda និងកូដចង្អុលអនុគមន៍។

5.1. ការប្រកាស និងការកំណត់អនុគមន៍
អនុគមន៍ត្រូវបានប្រកាសដោយបញ្ជាក់ឈ្មោះរបស់វា ប៉ារ៉ាម៉ែត្រ និងប្រភេទតម្លៃត្រឡប់។ ការកំណត់រួមបញ្ចូលកូដដែលត្រូវអនុវត្ត។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ប្រកាសអនុគមន៍
int add(int a, int b);

int main() {
    int result = add(3, 5); // ហៅអនុគមន៍
    cout << "លទ្ធផល: " << result << endl; // បង្ហាញលទ្ធផល
    return 0;
}

// កំណត់អនុគមន៍
int add(int a, int b) {
    return a + b;
}
លទ្ធផល៖

លទ្ធផល: 8
5.2. ប៉ារ៉ាម៉ែត្រ និងប្រភេទតម្លៃត្រឡប់របស់អនុគមន៍
អនុគមន៍អាចទទួលប៉ារ៉ាម៉ែត្រ និងត្រឡប់តម្លៃនៃប្រភេទជាក់លាក់។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

double multiply(double x, double y) {
    return x * y;
}

int main() {
    double result = multiply(2.5, 4.0); // ហៅអនុគមន៍
    cout << "លទ្ធផល: " << result << endl; // បង្ហាញលទ្ធផល
    return 0;
}
លទ្ធផល៖

លទ្ធផល: 10.0
5.3. ការផ្ទុកអនុគមន៍ហួស
ការផ្ទុកអនុគមន៍ហួសអនុញ្ញាតឱ្យអ្នកកំណត់អនុគមន៍ច្រើនដែលមានឈ្មោះដូចគ្នា ប៉ុន្តែមានប៉ារ៉ាម៉ែត្រខុសគ្នា។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int main() {
    int result1 = add(3, 5);       // ហៅអនុគមន៍ដែលទទួល int
    double result2 = add(2.5, 4.0); // ហៅអនុគមន៍ដែលទទួល double
    cout << "លទ្ធផល 1: " << result1 << endl;
    cout << "លទ្ធផល 2: " << result2 << endl;
    return 0;
}
លទ្ធផល៖

លទ្ធផល 1: 8
លទ្ធផល 2: 6.5
5.4. អនុគមន៍ខ្នាតតូច
អនុគមន៍ខ្នាតតូចត្រូវបានពង្រីកដោយផ្ទាល់នៅកន្លែងដែលវាត្រូវបានហៅ ដើម្បីកាត់បន្ថយការចំណាយលើការហៅអនុគមន៍។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

inline int square(int x) {
    return x * x;
}

int main() {
    int result = square(5); // ហៅអនុគមន៍ខ្នាតតូច
    cout << "លទ្ធផល: " << result << endl;
    return 0;
}
លទ្ធផល៖

លទ្ធផល: 25
5.5. អនុគមន៍ដែលហៅខ្លួនឯង
អនុគមន៍ដែលហៅខ្លួនឯងគឺជាអនុគមន៍ដែលហៅខ្លួនវាផ្ទាល់ដើម្បីដោះស្រាយបញ្ហាដែលអាចបែងចែកបាន។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

int main() {
    int result = factorial(5); // ហៅអនុគមន៍ដែលហៅខ្លួនឯង
    cout << "លទ្ធផល: " << result << endl;
    return 0;
}
លទ្ធផល៖

លទ្ធផល: 120
5.6. អនុគមន៍មិនត្រឡប់តម្លៃ (Void)
អនុគមន៍មិនត្រឡប់តម្លៃគឺជាអនុគមន៍ដែលមិនត្រឡប់តម្លៃណាមួយទៅកាន់កន្លែងដែលវាត្រូវបានហៅ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

void printMessage() {
    cout << "Hello, World!" << endl;
}

int main() {
    printMessage(); // ហៅអនុគមន៍
    return 0;
}
លទ្ធផល៖

Hello, World!
5.7. អាគុយម៉ង់លំនាំដើមក្នុងអនុគមន៍
អាគុយម៉ង់លំនាំដើមអនុញ្ញាតឱ្យអនុគមន៍ប្រើតម្លៃដែលបានកំណត់ជាមុន ប្រសិនបើអាគុយម៉ង់មិនត្រូវបានផ្តល់។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

void greet(string name = "Guest") {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet();        // ប្រើតម្លៃលំនាំដើម
    greet("John");  // ប្រើតម្លៃដែលបានផ្តល់
    return 0;
}
លទ្ធផល៖

Hello, Guest!
Hello, John!
5.8. គំរូអនុគមន៍
គំរូអនុគមន៍អនុញ្ញាតឱ្យអ្នកសរសេរអនុគមន៍ទូទៅដែលអាចដំណើរការជាមួយប្រភេទទិន្នន័យផ្សេងៗ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

template <typename T>
T add(T a, T b) {
    return a + b;
}

int main() {
    int result1 = add(3, 5);         // ប្រើប្រភេទ int
    double result2 = add(2.5, 4.0);  // ប្រើប្រភេទ double
    cout << "លទ្ធផល 1: " << result1 << endl;
    cout << "លទ្ធផល 2: " << result2 << endl;
    return 0;
}
លទ្ធផល៖

លទ្ធផល 1: 8
លទ្ធផល 2: 6.5
5.9. អនុគមន៍ Lambda ក្នុង C++
អនុគមន៍ Lambda គឺជាអនុគមន៍អនាមិកដែលអាចត្រូវបានកំណត់នៅក្នុងកូដ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    auto sum = [](int a, int b) { return a + b; }; // កំណត់ Lambda
    int result = sum(5, 3); // ហៅ Lambda
    cout << "លទ្ធផល: " << result << endl;
    return 0;
}
លទ្ធផល៖

លទ្ធផល: 8
5.10. ការបញ្ជូនអនុគមន៍ជាអាគុយម៉ង់ (កូដចង្អុលអនុគមន៍)
អ្នកអាចបញ្ជូនអនុគមន៍ជាអាគុយម៉ង់ទៅកាន់អនុគមន៍ផ្សេងទៀតដោយប្រើកូដចង្អុលអនុគមន៍។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

void execute(int (*operation)(int, int), int a, int b) {
    cout << "លទ្ធផល: " << operation(a, b) << endl;
}

int add(int a, int b) {
    return a + b;
}

int main() {
    execute(add, 5, 3); // បញ្ជូនអនុគមន៍ជាអាគុយម៉ង់
    return 0;
}
លទ្ធផល៖

លទ្ធផល: 8
6. អារេ និងខ្សែអក្សរ
អារេ និងខ្សែអក្សរគឺជារចនាសម្ព័ន្ធទិន្នន័យមូលដ្ឋានក្នុង C++។ អារេអនុញ្ញាតឱ្យអ្នកផ្ទុកតម្លៃច្រើនដែលមានប្រភេទដូចគ្នា ខណៈខ្សែអក្សរត្រូវបានប្រើដើម្បីផ្ទុក និងដំណើរការអត្ថបទ។ ផ្នែកនេះគ្របដណ្តប់អំពីអារេមួយវិមាត្រ និងច្រើនវិមាត្រ ប្រតិបត្តិការលើអារេ និងការដំណើរការខ្សែអក្សរក្នុង C++។

6.1. អារេមួយវិមាត្រ និងច្រើនវិមាត្រ
អារេមួយវិមាត្រគឺជាអារេដែលមានតែជួរឈរតែមួយ ខណៈអារេច្រើនវិមាត្រគឺជាអារេដែលមានជួរឈរ និងជួរដេកច្រើន។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    // អារេមួយវិមាត្រ
    int arr1D[5] = {1, 2, 3, 4, 5};

    // អារេពីរវិមាត្រ
    int arr2D[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    // បង្ហាញអារេមួយវិមាត្រ
    cout << "អារេមួយវិមាត្រ: ";
    for (int i = 0; i < 5; i++) {
        cout << arr1D[i] << " ";
    }
    cout << endl;

    // បង្ហាញអារេពីរវិមាត្រ
    cout << "អារេពីរវិមាត្រ: " << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << arr2D[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
ការពន្យល់៖
- អារេមួយវិមាត្រ arr1D ផ្ទុកតម្លៃ 1, 2, 3, 4, 5។
- អារេពីរវិមាត្រ arr2D ផ្ទុកតម្លៃក្នុងតារាង 2x3។
- កម្មវិធីបង្ហាញតម្លៃរបស់អារេទាំងពីរ។

លទ្ធផល៖

អារេមួយវិមាត្រ: 1 2 3 4 5 
អារេពីរវិមាត្រ: 
1 2 3 
4 5 6
6.2. ប្រតិបត្តិការលើអារេ
ប្រតិបត្តិការលើអារេរួមមានការបញ្ចូល ការបង្ហាញ ការស្វែងរក និងការតម្រៀបតម្លៃ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    int arr[5] = {5, 3, 1, 4, 2};

    // បង្ហាញអារេ
    cout << "អារេដើម: ";
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    // តម្រៀបអារេ
    for (int i = 0; i < 5; i++) {
        for (int j = i + 1; j < 5; j++) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    // បង្ហាញអារេដែលបានតម្រៀប
    cout << "អារេដែលបានតម្រៀប: ";
    for (int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
ការពន្យល់៖
- អារេ arr ផ្ទុកតម្លៃ 5, 3, 1, 4, 2។
- កម្មវិធីតម្រៀបអារេដោយប្រើក្បួនដោះស្រាយតម្រៀបសាមញ្ញ។
- បង្ហាញអារេដែលបានតម្រៀប។

លទ្ធផល៖

អារេដើម: 5 3 1 4 2 
អារេដែលបានតម្រៀប: 1 2 3 4 5
6.3. ខ្សែអក្សរក្នុង C++ (char arrays និង string class)
ខ្សែអក្សរក្នុង C++ អាចត្រូវបានបង្កើតដោយប្រើ char arrays ឬ string class។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <string>
using namespace std;

int main() {
    // ប្រើ char array
    char str1[] = "Hello, World!";

    // ប្រើ string class
    string str2 = "C++ Programming";

    // បង្ហាញខ្សែអក្សរ
    cout << "char array: " << str1 << endl;
    cout << "string class: " << str2 << endl;

    return 0;
}
ការពន្យល់៖
- str1 គឺជាខ្សែអក្សរដែលបង្កើតដោយប្រើ char array។
- str2 គឺជាខ្សែអក្សរដែលបង្កើតដោយប្រើ string class។
- កម្មវិធីបង្ហាញខ្សែអក្សរទាំងពីរ។

លទ្ធផល៖

char array: Hello, World!
string class: C++ Programming
6.4. អនុគមន៍ដែលដំណើរការលើខ្សែអក្សរ
C++ ផ្តល់អនុគមន៍ជាច្រើនសម្រាប់ដំណើរការលើខ្សែអក្សរ ដូចជា length(), substr(), find(), និង replace()។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";

    // ប្រវែងខ្សែអក្សរ
    cout << "ប្រវែងខ្សែអក្សរ: " << str.length() << endl;

    // ស្រង់ចេញផ្នែកមួយនៃខ្សែអក្សរ
    cout << "ផ្នែកខ្សែអក្សរ: " << str.substr(7, 5) << endl;

    // ស្វែងរកអក្សរក្នុងខ្សែអក្សរ
    cout << "ស្វែងរក 'World': " << str.find("World") << endl;

    // ជំនួសផ្នែកនៃខ្សែអក្សរ
    str.replace(7, 5, "C++");
    cout << "ខ្សែអក្សរដែលបានជំនួស: " << str << endl;

    return 0;
}
ការពន្យល់៖
- length() ប្រើដើម្បីរកប្រវែងខ្សែអក្សរ។
- substr() ប្រើដើម្បីស្រង់ចេញផ្នែកមួយនៃខ្សែអក្សរ។
- find() ប្រើដើម្បីស្វែងរកអក្សរក្នុងខ្សែអក្សរ។
- replace() ប្រើដើម្បីជំនួសផ្នែកនៃខ្សែអក្សរ។

លទ្ធផល៖

ប្រវែងខ្សែអក្សរ: 13
ផ្នែកខ្សែអក្សរ: World
ស្វែងរក 'World': 7
ខ្សែអក្សរដែលបានជំនួស: Hello, C++!
7. កូដចង្អុល និងការយោង
កូដចង្អុល និងការយោងគឺជាលក្ខណៈពិសេសដ៏អស្ចារ្យក្នុង C++ ដែលអនុញ្ញាតឱ្យអ្នកធ្វើការដោយផ្ទាល់ជាមួយអាសយដ្ឋានអង្គចងចាំ។ កូដចង្អុលផ្ទុកអាសយដ្ឋានអង្គចងចាំ ខណៈការយោងផ្តល់ឈ្មោះផ្សេងទៀតឱ្យអថេរដែលមានស្រាប់។ ផ្នែកនេះគ្របដណ្តប់អំពីមូលដ្ឋាននៃកូដចង្អុល ការគណនាកូដចង្អុល ការយោង និងការចាត់ចែងអង្គចងចាំថាមវន្ត។

7.1. ការណែនាំអំពីកូដចង្អុល
កូដចង្អុលគឺជាអថេរដែលផ្ទុកអាសយដ្ឋានអង្គចងចាំរបស់អថេរផ្សេង។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int *ptr = &x; // កូដចង្អុល ptr ផ្ទុកអាសយដ្ឋានរបស់ x

    cout << "តម្លៃរបស់ x: " << x << endl;
    cout << "អាសយដ្ឋានរបស់ x: " << &x << endl;
    cout << "តម្លៃរបស់ ptr: " << ptr << endl;
    cout << "តម្លៃដែល ptr ចង្អុលទៅ: " << *ptr << endl;

    return 0;
}
ការពន្យល់៖
- x គឺជាអថេរធម្មតាដែលមានតម្លៃ 10។
- ptr គឺជាកូដចង្អុលដែលផ្ទុកអាសយដ្ឋានរបស់ x។
- &x ផ្តល់អាសយដ្ឋានរបស់ x។
- *ptr ផ្តល់តម្លៃដែល ptr ចង្អុលទៅ។

លទ្ធផល៖

តម្លៃរបស់ x: 10
អាសយដ្ឋានរបស់ x: 0x7ffee4b5c9d4
តម្លៃរបស់ ptr: 0x7ffee4b5c9d4
តម្លៃដែល ptr ចង្អុលទៅ: 10
7.2. ការគណនាកូដចង្អុល
ការគណនាកូដចង្អុលអនុញ្ញាតឱ្យអ្នកផ្លាស់ប្តូរអាសយដ្ឋានដែលកូដចង្អុលចង្អុលទៅ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    int arr[3] = {10, 20, 30};
    int *ptr = arr; // ptr ចង្អុលទៅធាតុដំបូងនៃអារេ

    cout << "តម្លៃដែល ptr ចង្អុលទៅ: " << *ptr << endl;
    ptr++; // ផ្លាស់ទី ptr ទៅធាតុបន្ទាប់
    cout << "តម្លៃដែល ptr ចង្អុលទៅបន្ទាប់ពី ptr++: " << *ptr << endl;

    return 0;
}
ការពន្យល់៖
- arr គឺជាអារេដែលមានតម្លៃ 10, 20, 30។
- ptr ចង្អុលទៅធាតុដំបូងនៃអារេ។
- ptr++ ផ្លាស់ទីកូដចង្អុលទៅធាតុបន្ទាប់ក្នុងអារេ។

លទ្ធផល៖

តម្លៃដែល ptr ចង្អុលទៅ: 10
តម្លៃដែល ptr ចង្អុលទៅបន្ទាប់ពី ptr++: 20
7.3. ការយោង និងការដកយកតម្លៃ
ការយោងគឺជាឈ្មោះផ្សេងទៀតឱ្យអថេរដែលមានស្រាប់ ហើយការដកយកតម្លៃគឺជាការប្រើកូដចង្អុលដើម្បីចូលដំណើរការតម្លៃនៅអាសយដ្ឋានដែលវាចង្អុលទៅ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int &ref = x; // ref គឺជាការយោងរបស់ x

    cout << "តម្លៃរបស់ x: " << x << endl;
    cout << "តម្លៃរបស់ ref: " << ref << endl;

    ref = 20; // ផ្លាស់ប្តូរតម្លៃរបស់ x តាមរយៈ ref
    cout << "តម្លៃរបស់ x បន្ទាប់ពីផ្លាស់ប្តូរតាមរយៈ ref: " << x << endl;

    return 0;
}
ការពន្យល់៖
- ref គឺជាការយោងរបស់ x។
- ការផ្លាស់ប្តូរតម្លៃរបស់ ref នឹងផ្លាស់ប្តូរតម្លៃរបស់ x។

លទ្ធផល៖

តម្លៃរបស់ x: 10
តម្លៃរបស់ ref: 10
តម្លៃរបស់ x បន្ទាប់ពីផ្លាស់ប្តូរតាមរយៈ ref: 20
7.4. ការចាត់ចែងអង្គចងចាំថាមវន្ត (new និង delete)
ការចាត់ចែងអង្គចងចាំថាមវន្តអនុញ្ញាតឱ្យអ្នកចាត់ចែងអង្គចងចាំក្នុងពេលដំណើរការកម្មវិធី។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    // ចាត់ចែងអង្គចងចាំថាមវន្តសម្រាប់អថេរ int
    int *ptr = new int;
    *ptr = 100;

    cout << "តម្លៃដែល ptr ចង្អុលទៅ: " << *ptr << endl;

    // ដោះលែងអង្គចងចាំ
    delete ptr;

    return 0;
}
ការពន្យល់៖
- new ប្រើដើម្បីចាត់ចែងអង្គចងចាំថាមវន្ត។
- delete ប្រើដើម្បីដោះលែងអង្គចងចាំ។

លទ្ធផល៖

តម្លៃដែល ptr ចង្អុលទៅ: 100
8. កម្មវិធីបង្កើតវត្ថុ (OOP)
កម្មវិធីបង្កើតវត្ថុ (OOP) គឺជារបៀបសរសេរកម្មវិធីដែលរៀបចំការរចនាកម្មវិធីជុំវិញវត្ថុ និងថ្នាក់។ វាសង្កត់ធ្ងន់លើគោលគំនិតដូចជា encapsulation, inheritance, និង polymorphism ដើម្បីបង្កើតកូដដែលមានភាពម៉ូឌុល និងអាចប្រើឡើងវិញបាន។ ផ្នែកនេះគ្របដណ្តប់អំពីមូលដ្ឋាននៃ OOP រួមទាំងថ្នាក់ វត្ថុ សំណង់ ការបំផ្លាញ និងគោលគំនិតដទៃទៀត។

8.1. សេចក្តីផ្តើមអំពីគោលគំនិត OOP
OOP មានគោលគំនិតសំខាន់ៗដូចជា៖
Encapsulation: ការបញ្ចូលទិន្នន័យ និងមុខងារដែលដំណើរការលើទិន្នន័យទៅក្នុងឯកតាតែមួយ (ថ្នាក់)។
Inheritance: ការបង្កើតថ្នាក់ថ្មីពីថ្នាក់ដែលមានស្រាប់ ដើម្បីលើកកម្មវិធីអោយមានភាពងាយស្រួលក្នុងការប្រើប្រាស់ឡើងវិញ។
Polymorphism: ការប្រើចំណុចប្រទាក់តែមួយដើម្បីតំណាងឱ្យប្រភេទវត្ថុផ្សេងៗគ្នា។
Abstraction: ការលាក់ព័ត៌មានស្មុគស្មាញ និងបង្ហាញតែលក្ខណៈចាំបាច់។

8.2. ថ្នាក់ និងវត្ថុ
ថ្នាក់គឺជាគំរូសម្រាប់បង្កើតវត្ថុ ខណៈវត្ថុគឺជាឧទាហរណ៍នៃថ្នាក់មួយ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// កំណត់ថ្នាក់
class Car {
public:
    string brand;
    void honk() {
        cout << "Honk! Honk!" << endl;
    }
};

int main() {
    // បង្កើតវត្ថុពីថ្នាក់ Car
    Car myCar;
    myCar.brand = "Toyota";
    cout << "Brand: " << myCar.brand << endl;
    myCar.honk();

    return 0;
}
ការពន្យល់៖
- ថ្នាក់ Car មានទិន្នន័យ brand និងមុខងារ honk()។
- myCar គឺជាវត្ថុរបស់ថ្នាក់ Car។
- វត្ថុចូលដំណើរការទិន្នន័យ និងមុខងារដោយប្រើផ្កាយ (.)។

លទ្ធផល៖

Brand: Toyota
Honk! Honk!
8.3. សំណង់ និងការបំផ្លាញ
សំណង់ (Constructor) គឺជាមុខងារពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលបង្កើតវត្ថុ។ ការបំផ្លាញ (Destructor) គឺជាមុខងារដែលត្រូវបានហៅនៅពេលវត្ថុត្រូវបានលុប។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

class Book {
public:
    string title;
    // សំណង់
    Book(string t) {
        title = t;
        cout << "Book created: " << title << endl;
    }
    // ការបំផ្លាញ
    ~Book() {
        cout << "Book destroyed: " << title << endl;
    }
};

int main() {
    Book myBook("C++ Programming");
    return 0;
}
ការពន្យល់៖
- សំណង់ Book(string t) ចាប់ផ្តើមតម្លៃ title និងបោះពុម្ពសារ។
- ការបំផ្លាញ ~Book() ត្រូវបានហៅនៅពេលវត្ថុត្រូវបានលុប ហើយបោះពុម្ពសារ។

លទ្ធផល៖

Book created: C++ Programming
Book destroyed: C++ Programming
8.4. Encapsulation និង Data Hiding
Encapsulation គឺជាការបញ្ចូលទិន្នន័យ និងមុខងារដែលដំណើរការលើទិន្នន័យទៅក្នុងឯកតាតែមួយ។ Data Hiding គឺជាការកំណត់ការចូលដំណើរការទិន្នន័យដោយផ្ទាល់ពីខាងក្រៅ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

class Employee {
private:
    string name; // ទិន្នន័យឯកជន
    int salary;

public:
    // មុខងារសាធារណៈដើម្បីចូលដំណើរការទិន្នន័យឯកជន
    void setName(string n) {
        name = n;
    }
    string getName() {
        return name;
    }
    void setSalary(int s) {
        salary = s;
    }
    int getSalary() {
        return salary;
    }
};

int main() {
    Employee emp;
    emp.setName("John Doe");
    emp.setSalary(5000);

    cout << "Name: " << emp.getName() << endl;
    cout << "Salary: " << emp.getSalary() << endl;

    return 0;
}
ការពន្យល់៖
- ទិន្នន័យ name និង salary គឺជាឯកជន ហើយអាចចូលដំណើរការតាមរយៈមុខងារសាធារណៈ។
- មុខងារ setName(), getName(), setSalary(), និង getSalary() ផ្តល់ការចូលដំណើរការទិន្នន័យដែលគ្រប់គ្រង។

លទ្ធផល៖

Name: John Doe
Salary: 5000
8.5. Inheritance និង Polymorphism
Inheritance អនុញ្ញាតឱ្យថ្នាក់មួយទទួលយកលក្ខណៈសម្បត្តិពីថ្នាក់មួយទៀត។ Polymorphism អនុញ្ញាតឱ្យវត្ថុត្រូវបានចាត់ទុកជាឧទាហរណ៍នៃថ្នាក់មេរបស់វា។

8.5.1. សេចក្តីផ្តើមអំពី Inheritance
Inheritance អនុញ្ញាតឱ្យថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់មេ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Animal is eating..." << endl;
    }
};

// ថ្នាក់កូន
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking..." << endl;
    }
};

int main() {
    Dog dog;
    dog.eat();  // ទទួលយកពី Animal
    dog.bark(); // កំណត់នៅក្នុង Dog

    return 0;
}
ការពន្យល់៖
- ថ្នាក់ Dog ទទួលយកមុខងារ eat() ពីថ្នាក់ Animal។
- ថ្នាក់ Dog ក៏កំណត់មុខងារផ្ទាល់ខ្លួនផងដែរ គឺ bark()។

លទ្ធផល៖

Animal is eating...
Dog is barking...
8.5.2. ប្រភេទនៃ Inheritance
មានប្រភេទផ្សេងៗនៃ Inheritance ក្នុង C++៖
Single Inheritance: ថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់មេតែមួយ។
Multiple Inheritance: ថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់មេច្រើន។
Multilevel Inheritance: ថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់កូនមួយទៀត។
Hierarchical Inheritance: ថ្នាក់កូនច្រើនទទួលយកសមាជិកពីថ្នាក់មេតែមួយ។
Hybrid Inheritance: ការផ្សំរវាង Multiple និង Multilevel Inheritance។

8.5.2.1. Single Inheritance
ថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់មេតែមួយ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Vehicle {
public:
    void drive() {
        cout << "Driving..." << endl;
    }
};

// ថ្នាក់កូន
class Car : public Vehicle {
public:
    void honk() {
        cout << "Honk! Honk!" << endl;
    }
};

int main() {
    Car car;
    car.drive(); // ទទួលយកពី Vehicle
    car.honk();  // កំណត់នៅក្នុង Car

    return 0;
}
លទ្ធផល៖

Driving...
Honk! Honk!
8.5.2.2. Multiple Inheritance
ថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់មេច្រើន។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ 1
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// ថ្នាក់មេ 2
class Vehicle {
public:
    void drive() {
        cout << "Driving..." << endl;
    }
};

// ថ្នាក់កូន
class Amphibious : public Animal, public Vehicle {
public:
    void swim() {
        cout << "Swimming..." << endl;
    }
};

int main() {
    Amphibious amp;
    amp.eat();   // ទទួលយកពី Animal
    amp.drive(); // ទទួលយកពី Vehicle
    amp.swim();  // កំណត់នៅក្នុង Amphibious

    return 0;
}
លទ្ធផល៖

Eating...
Driving...
Swimming...
8.5.2.3. Multilevel Inheritance
ថ្នាក់កូនទទួលយកសមាជិកពីថ្នាក់កូនមួយទៀត។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// ថ្នាក់កូន 1
class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

// ថ្នាក់កូន 2
class Puppy : public Dog {
public:
    void cry() {
        cout << "Crying..." << endl;
    }
};

int main() {
    Puppy pup;
    pup.eat();  // ទទួលយកពី Animal
    pup.bark(); // ទទួលយកពី Dog
    pup.cry();  // កំណត់នៅក្នុង Puppy

    return 0;
}
លទ្ធផល៖

Eating...
Barking...
Crying...
8.5.2.4. Hierarchical Inheritance
ថ្នាក់កូនច្រើនទទួលយកសមាជិកពីថ្នាក់មេតែមួយ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// ថ្នាក់កូន 1
class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

// ថ្នាក់កូន 2
class Cat : public Animal {
public:
    void meow() {
        cout << "Meowing..." << endl;
    }
};

int main() {
    Dog dog;
    dog.eat();  // ទទួលយកពី Animal
    dog.bark(); // កំណត់នៅក្នុង Dog

    Cat cat;
    cat.eat();  // ទទួលយកពី Animal
    cat.meow(); // កំណត់នៅក្នុង Cat

    return 0;
}
លទ្ធផល៖

Eating...
Barking...
Eating...
Meowing...
8.5.2.5. Hybrid Inheritance
ការផ្សំរវាង Multiple និង Multilevel Inheritance។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ 1
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// ថ្នាក់មេ 2
class Vehicle {
public:
    void drive() {
        cout << "Driving..." << endl;
    }
};

// ថ្នាក់កូន 1
class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
    }
};

// ថ្នាក់កូន 2
class Amphibious : public Dog, public Vehicle {
public:
    void swim() {
        cout << "Swimming..." << endl;
    }
};

int main() {
    Amphibious amp;
    amp.eat();   // ទទួលយកពី Animal តាមរយៈ Dog
    amp.bark();  // ទទួលយកពី Dog
    amp.drive(); // ទទួលយកពី Vehicle
    amp.swim();  // កំណត់នៅក្នុង Amphibious

    return 0;
}
លទ្ធផល៖

Eating...
Barking...
Driving...
Swimming...
8.5.3. Access Specifiers in Inheritance
Access specifiers កំណត់ពីរបៀបដែលសមាជិកនៃថ្នាក់មេត្រូវបានចូលដំណើរការនៅក្នុងថ្នាក់កូន។ មាន Access specifiers ចំនួនបី៖
Public Inheritance: សមាជិក public និង protected នៃថ្នាក់មេនៅតែ public និង protected នៅក្នុងថ្នាក់កូន។
Protected Inheritance: សមាជិក public និង protected នៃថ្នាក់មេក្លាយជា protected នៅក្នុងថ្នាក់កូន។
Private Inheritance: សមាជិក public និង protected នៃថ្នាក់មេក្លាយជា private នៅក្នុងថ្នាក់កូន។

8.5.3.1. Public Inheritance
សមាជិក public និង protected នៃថ្នាក់មេនៅតែ public និង protected នៅក្នុងថ្នាក់កូន។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
protected:
    void sleep() {
        cout << "Sleeping..." << endl;
    }
};

// ថ្នាក់កូន
class Dog : public Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
        sleep(); // ចូលដំណើរការសមាជិក protected
    }
};

int main() {
    Dog dog;
    dog.eat();  // ចូលដំណើរការសមាជិក public
    dog.bark(); // ចូលដំណើរការសមាជិក public

    return 0;
}
លទ្ធផល៖

Eating...
Barking...
Sleeping...
8.5.3.2. Protected Inheritance
សមាជិក public និង protected នៃថ្នាក់មេក្លាយជា protected នៅក្នុងថ្នាក់កូន។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
protected:
    void sleep() {
        cout << "Sleeping..." << endl;
    }
};

// ថ្នាក់កូន
class Dog : protected Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
        eat();  // ចូលដំណើរការសមាជិក public (ឥឡូវ protected)
        sleep(); // ចូលដំណើរការសមាជិក protected
    }
};

int main() {
    Dog dog;
    dog.bark(); // ចូលដំណើរការសមាជិក public

    return 0;
}
លទ្ធផល៖

Barking...
Eating...
Sleeping...
8.5.3.3. Private Inheritance
សមាជិក public និង protected នៃថ្នាក់មេក្លាយជា private នៅក្នុងថ្នាក់កូន។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
protected:
    void sleep() {
        cout << "Sleeping..." << endl;
    }
};

// ថ្នាក់កូន
class Dog : private Animal {
public:
    void bark() {
        cout << "Barking..." << endl;
        eat();  // ចូលដំណើរការសមាជិក public (ឥឡូវ private)
        sleep(); // ចូលដំណើរការសមាជិក protected (ឥឡូវ private)
    }
};

int main() {
    Dog dog;
    dog.bark(); // ចូលដំណើរការសមាជិក public

    return 0;
}
លទ្ធផល៖

Barking...
Eating...
Sleeping...
8.5.4. Function Overriding in Inheritance
Function overriding កើតឡើងនៅពេលថ្នាក់កូនកំណត់មុខងារដែលមានឈ្មោះ និងសញ្ញាសម្គាល់ដូចគ្នានឹងមុខងារនៅក្នុងថ្នាក់មេ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void speak() {
        cout << "Animal speaks" << endl;
    }
};

// ថ្នាក់កូន
class Dog : public Animal {
public:
    void speak() {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Dog dog;
    dog.speak(); // ហៅមុខងាររបស់ Dog

    return 0;
}
លទ្ធផល៖

Dog barks
8.5.5. Virtual Functions and Polymorphism
Virtual functions អនុញ្ញាតឱ្យថ្នាក់កូនចម្លងមុខងារពីថ្នាក់មេ ហើយ Polymorphism អនុញ្ញាតឱ្យមានការប្រើមុខងារតាមរបៀបផ្សេងៗគ្នា។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    virtual void speak() {
        cout << "Animal speaks" << endl;
    }
};

// ថ្នាក់កូន
class Dog : public Animal {
public:
    void speak() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal *animal = new Dog(); // Polymorphism
    animal->speak(); // ហៅមុខងាររបស់ Dog

    delete animal;
    return 0;
}
លទ្ធផល៖

Dog barks
8.5.6. Base Class and Derived Class Constructors
នៅពេលវត្ថុថ្នាក់កូនត្រូវបានបង្កើត សំណង់ថ្នាក់មេត្រូវបានហៅជាមុន បន្ទាប់មកសំណង់ថ្នាក់កូនត្រូវបានហៅ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    Animal() {
        cout << "Animal constructor" << endl;
    }
};

// ថ្នាក់កូន
class Dog : public Animal {
public:
    Dog() {
        cout << "Dog constructor" << endl;
    }
};

int main() {
    Dog dog; // ហៅសំណង់ Animal ជាមុន បន្ទាប់មក Dog

    return 0;
}
លទ្ធផល៖

Animal constructor
Dog constructor
8.5.7. Virtual Base Classes (Solving Diamond Problem)
Virtual base classes ត្រូវបានប្រើដើម្បីដោះស្រាយបញ្ហា Diamond Problem ក្នុង Multiple Inheritance ដោយធានាថាមានតែឧទាហរណ៍មួយនៃថ្នាក់មេត្រូវបានបង្កើត។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// ថ្នាក់មេ
class Animal {
public:
    void eat() {
        cout << "Eating..." << endl;
    }
};

// ថ្នាក់កណ្តាល 1
class Mammal : virtual public Animal {
public:
    void breathe() {
        cout << "Breathing..." << endl;
    }
};

// ថ្នាក់កណ្តាល 2
class WingedAnimal : virtual public Animal {
public:
    void fly() {
        cout << "Flying..." << endl;
    }
};

// ថ្នាក់កូន
class Bat : public Mammal, public WingedAnimal {
public:
    void display() {
        eat(); // មានតែឧទាហរណ៍មួយនៃ Animal
        breathe();
        fly();
    }
};

int main() {
    Bat bat;
    bat.display();

    return 0;
}
លទ្ធផល៖

Eating...
Breathing...
Flying...
8.5.8. Abstract Classes and Pure Virtual Functions
Abstract classes មិនអាចបង្កើតវត្ថុបានដោយផ្ទាល់ ហើយត្រូវបានប្រើជាថ្នាក់មេ។ ពួកវាមានយ៉ាងហោចណាស់មុខងារ Pure Virtual Function មួយ។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

// Derived class
class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a Circle" << endl;
    }
};

int main() {
    // Shape shape; // កំហុស៖ មិនអាចបង្កើតវត្ថុពី Abstract Class បានទេ
    Circle circle;
    circle.draw();

    return 0;
}
លទ្ធផល៖

Drawing a Circle
8.6. Abstract Classes and Interfaces
Abstract classes មិនអាចបង្កើតវត្ថុបានដោយផ្ទាល់ ហើយត្រូវបានប្រើជាថ្នាក់មេ។ Interfaces គឺស្រដៀងគ្នា ប៉ុន្តែមានតែមុខងារ Pure Virtual Functions។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

// Abstract class
class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

// Derived class
class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a Circle" << endl;
    }
};

int main() {
    // Shape shape; // កំហុស៖ មិនអាចបង្កើតវត្ថុពី Abstract Class បានទេ
    Circle circle;
    circle.draw();

    return 0;
}
លទ្ធផល៖

Drawing a Circle
9. File Handling in C++
File handling ក្នុង C++ អនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយឯកសារនៅលើកុំព្យូទ័ររបស់អ្នក។ អ្នកអាចអានពីឯកសារ សរសេរទៅឯកសារ បន្ថែមទិន្នន័យ និងអនុវត្តប្រតិបត្តិការផ្សេងៗលើឯកសារ។ ផ្នែកនេះគ្របដណ្តប់អំពីមូលដ្ឋាននៃ file handling រួមទាំង file streams, ការអាន និងសរសេរឯកសារ និងប្រតិបត្តិការលើឯកសារ។

9.1. File Streams (ifstream, ofstream, fstream)
File streams ត្រូវបានប្រើដើម្បីធ្វើការជាមួយឯកសារ។ C++ ផ្តល់ថ្នាក់បីសម្រាប់ file streams៖
ifstream: ប្រើសម្រាប់អានទិន្នន័យពីឯកសារ។
ofstream: ប្រើសម្រាប់សរសេរទិន្នន័យទៅឯកសារ។
fstream: ប្រើសម្រាប់អាន និងសរសេរទិន្នន័យទៅឯកសារ។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // បង្កើតឯកសារ និងសរសេរទិន្នន័យ
    ofstream outFile("example.txt");
    outFile << "Hello, World!" << endl;
    outFile.close();

    // អានទិន្នន័យពីឯកសារ
    ifstream inFile("example.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();

    return 0;
}
ការពន្យល់៖
- ofstream ត្រូវបានប្រើដើម្បីសរសេរទិន្នន័យទៅឯកសារ example.txt។
- ifstream ត្រូវបានប្រើដើម្បីអានទិន្នន័យពីឯកសារ example.txt។
- fstream អាចប្រើសម្រាប់អាន និងសរសេរទិន្នន័យទៅឯកសារ។

លទ្ធផល៖

Hello, World!
9.2. Reading and Writing Files
ការអាន និងសរសេរឯកសារគឺជាការងារសំខាន់នៅពេលធ្វើការជាមួយ file handling។ អ្នកអាចប្រើ ifstream ដើម្បីអានទិន្នន័យ និង ofstream ដើម្បីសរសេរទិន្នន័យទៅឯកសារ។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // សរសេរទិន្នន័យទៅឯកសារ
    ofstream outFile("data.txt");
    outFile << "This is line 1." << endl;
    outFile << "This is line 2." << endl;
    outFile.close();

    // អានទិន្នន័យពីឯកសារ
    ifstream inFile("data.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();

    return 0;
}
ការពន្យល់៖
- ទិន្នន័យត្រូវបានសរសេរទៅឯកសារ data.txt ដោយប្រើ ofstream។
- ទិន្នន័យត្រូវបានអានពីឯកសារ data.txt ដោយប្រើ ifstream។

លទ្ធផល៖

This is line 1.
This is line 2.
9.3. File Operations (Appending, Closing, Seeking)
ប្រតិបត្តិការលើឯកសាររួមមានការបន្ថែមទិន្នន័យ បិទឯកសារ និងផ្លាស់ទីទៅទីតាំងជាក់លាក់នៅក្នុងឯកសារ។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <fstream>
using namespace std;

int main() {
    // បន្ថែមទិន្នន័យទៅឯកសារ
    ofstream outFile("data.txt", ios::app);
    outFile << "This is an appended line." << endl;
    outFile.close();

    // អានទិន្នន័យពីឯកសារ
    ifstream inFile("data.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();

    return 0;
}
ការពន្យល់៖
- ទិន្នន័យត្រូវបានបន្ថែមទៅឯកសារ data.txt ដោយប្រើ ios::app។
- ទិន្នន័យត្រូវបានអានពីឯកសារ data.txt ដោយប្រើ ifstream។

លទ្ធផល៖

This is line 1.
This is line 2.
This is an appended line.
10. Standard Template Library (STL)
Standard Template Library (STL) គឺជាបណ្ណាល័យនៃ template classes និង functions ដែលផ្តល់ឱ្យ C++ ជាមួយនឹង data structures និង algorithms ដ៏មានឥទ្ធិពល។ ផ្នែកនេះគ្របដណ្តប់អំពីមូលដ្ឋាននៃ STL រួមទាំង vectors, lists, queues, stacks, deques, maps, និង sets។

10.1. Introduction to STL
STL ផ្តល់ឱ្យ C++ ជាមួយនឹង data structures និង algorithms ដែលត្រៀមរួចជាស្រេច។ វារួមមាន៖
Containers: រចនាសម្ព័ន្ធទិន្នន័យដូចជា vectors, lists, queues, stacks, deques, maps, និង sets។
Algorithms: ប្រតិបត្តិការលើទិន្នន័យដូចជា sorting, searching, និង manipulating។
Iterators: ឧបករណ៍សម្រាប់ចូលដំណើរការធាតុនៅក្នុង containers។

10.2. Vectors, Lists, and Queues
STL ផ្តល់ containers ជាច្រើនសម្រាប់ការរចនាទិន្នន័យ។ ខាងក្រោមនេះគឺជាឧទាហរណ៍នៃ vectors, lists, និង queues។

Vectors
Vectors គឺជា dynamic arrays ដែលអាចផ្លាស់ប្តូរទំហំបាន។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};

    // បង្ហាញធាតុនៃ vector
    for (int i : vec) {
        cout << i << " ";
    }

    return 0;
}
លទ្ធផល៖

1 2 3 4 5
Lists
Lists គឺជា doubly-linked lists ដែលអនុញ្ញាតឱ្យបញ្ចូល និងលុបធាតុបានយ៉ាងមានប្រសិទ្ធភាព។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> lst = {1, 2, 3, 4, 5};

    // បង្ហាញធាតុនៃ list
    for (int i : lst) {
        cout << i << " ";
    }

    return 0;
}
លទ្ធផល៖

1 2 3 4 5
Queues
Queues គឺជា FIFO (First In, First Out) data structures។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);

    // បង្ហាញធាតុនៃ queue
    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }

    return 0;
}
លទ្ធផល៖

1 2 3
10.3. Stack and Deque
STL ក៏ផ្តល់ stack និង deque containers សម្រាប់ការរចនាទិន្នន័យ។

Stack
Stack គឺជា LIFO (Last In, First Out) data structure។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;
    s.push(1);
    s.push(2);
    s.push(3);

    // បង្ហាញធាតុនៃ stack
    while (!s.empty()) {
        cout << s.top() << " ";
        s.pop();
    }

    return 0;
}
លទ្ធផល៖

3 2 1
Deque
Deque (Double-Ended Queue) អនុញ្ញាតឱ្យបញ្ចូល និងលុបធាតុពីចុងទាំងពីរ។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq = {1, 2, 3};
    dq.push_front(0);
    dq.push_back(4);

    // បង្ហាញធាតុនៃ deque
    for (int i : dq) {
        cout << i << " ";
    }

    return 0;
}
លទ្ធផល៖

0 1 2 3 4
10.4. Maps and Sets
Maps និង sets គឺជា associative containers ដែលផ្តល់ឱ្យ C++ ជាមួយនឹង key-value pairs និង unique elements។

Maps
Maps ផ្ទុក key-value pairs ហើយធានាថា keys មានតែមួយគត់។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> m;
    m["apple"] = 5;
    m["banana"] = 3;

    // បង្ហាញ key-value pairs
    for (auto& pair : m) {
        cout << pair.first << ": " << pair.second << endl;
    }

    return 0;
}
លទ្ធផល៖

apple: 5
banana: 3
Sets
Sets ផ្ទុក unique elements ហើយធានាថាធាតុមិនសរសេរទៀត។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {1, 2, 3, 4, 5};

    // បង្ហាញធាតុនៃ set
    for (int i : s) {
        cout << i << " ";
    }

    return 0;
}
លទ្ធផល៖

1 2 3 4 5
11. Exception Handling
Exception handling នៅក្នុង C++ គឺជាមេកានិីសម្រាប់គ្រប់គ្រងកំហុសដែលកើតឡើងក្នុងពេលរត់កម្មវិធី (runtime errors) ដើម្បីធានាថាកម្មវិធីអាចបន្តរត់បាន ឬបញ្ចប់ដោយសុវត្ថិភាព។ ផ្នែកនេះគ្របដណ្តប់អំពីមូលដ្ឋានគ្រឹះនៃ exception handling រួមទាំង try, catch, and throw ការគ្រប់គ្រងកំហុសច្រើន និងការបង្កើតកំហុសផ្ទាល់ខ្លួន (custom exceptions)។

11.1. Try, Catch, and Throw
try block ត្រូវបានប្រើដើម្បីខ្ទៃកូដដែលអាចបណ្តាលឱ្យមានកំហុស (throw an exception)។ catch block ត្រូវបានប្រើដើម្បីគ្រប់គ្រងកំហុស ហើយ throw statement ត្រូវបានប្រើដើម្បីបង្កើតកំហុស។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    try {
        int age = 15;
        if (age < 18) {
            throw "You must be at least 18 years old.";
        }
        cout << "Access granted." << endl;
    }
    catch (const char* msg) {
        cout << "Error: " << msg << endl;
    }

    return 0;
}
លទ្ធផល៖

Error: You must be at least 18 years old.
អត្ថន័យ៖ក្នុងឧទាហរណ៍នេះ ប្រសិនបើតម្លៃនៃ age តិចជាង ១៨ កម្មវិធីនឹងបង្កើតកំហុសដោយប្រើ throw។ កំហុសនេះនឹងត្រូវបានគ្រប់គ្រងដោយ catch block ហើយបង្ហាញសារកំហុស។

11.2. Handling Multiple Exceptions
អ្នកអាចគ្រប់គ្រងកំហុសច្រើនប្រភេទដោយប្រើ catch blocks ច្រើន។ រាល់ catch block នឹងគ្រប់គ្រងកំហុសផ្សេងៗគ្នា។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    try {
        int x = 10;
        int y = 0;
        if (y == 0) {
            throw runtime_error("Division by zero is not allowed.");
        }
        int result = x / y;
        cout << "Result: " << result << endl;
    }
    catch (const runtime_error& e) {
        cout << "Runtime Error: " << e.what() << endl;
    }
    catch (const exception& e) {
        cout << "Standard Exception: " << e.what() << endl;
    }

    return 0;
}
លទ្ធផល៖

Runtime Error: Division by zero is not allowed.
អត្ថន័យ៖ក្នុងឧទាហរណ៍នេះ ប្រសិនបើ y ស្មើនឹង ០ កម្មវិធីនឹងបង្កើតកំហុស runtime_error។ កំហុសនេះនឹងត្រូវបានគ្រប់គ្រងដោយ catch block ដែលត្រូវនឹង runtime_error។

11.3. Custom Exception Handling
អ្នកអាចបង្កើតកំហុសផ្ទាល់ខ្លួន (custom exceptions) ដោយកំណត់ class ថ្មីដែលស្ថិតនៅលើ std::exception។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <exception>
using namespace std;

class MyException : public exception {
public:
    const char* what() const throw() {
        return "Custom exception occurred!";
    }
};

int main() {
    try {
        throw MyException();
    }
    catch (MyException& e) {
        cout << "Error: " << e.what() << endl;
    }

    return 0;
}
លទ្ធផល៖

Error: Custom exception occurred!
អត្ថន័យ៖ក្នុងឧទាហរណ៍នេះ យើងបានបង្កើត class MyException ដែលស្ថិតនៅលើ std::exception។ នៅពេលដែលកំហុសនេះត្រូវបានបង្កើត វានឹងត្រូវបានគ្រប់គ្រងដោយ catch block ដែលត្រូវនឹង MyException។

12. Advanced Topics
ផ្នែកនេះគ្របដណ្តប់អំពីប្រធានបទកម្រិតខ្ពស់នៅក្នុងការសរសេរកម្មវិធី C++ រួមមាន lambda expressions, smart pointers, multithreading, និង networking។ លក្ខណៈពិសេសទាំងនេះជួយឱ្យអ្នកអភិវឌ្ឍន៍សរសេរកូដដែលមានប្រសិទ្ធភាព ទាន់សម័យ និងមានមាត្រដ្ឋានធំ។

12.1. Lambda Expressions
Lambda expressions គឺជាមុខងារអនាមិក (anonymous functions) ដែលអាចត្រូវបានកំណត់នៅក្នុងកូដ។ វាមានប្រយោជន៍សម្រាប់ការសរសេរកូដដែលខ្លី និងរហ័ស។

ឧទាហរណ៍កូដ៖

#include <iostream>
using namespace std;

int main() {
    auto greet = []() {
        cout << "Hello, World!" << endl;
    };

    greet(); // ហៅ lambda function
    return 0;
}
លទ្ធផល៖

Hello, World!
អត្ថន័យ៖ក្នុងឧទាហរណ៍នេះ lambda expression ត្រូវបានប្រើដើម្បីកំណត់មុខងារអនាមិកឈ្មោះ greet ដែលបោះពុម្ពសារប្រកាស "Hello, World!"។

12.2. Smart Pointers (unique_ptr, shared_ptr)
Smart pointers គឺជាវិធីសាស្រ្តសម្រាប់គ្រប់គ្រងការចែកចាយអវកាស (memory management) ដោយស្វ័យប្រវត្តិ។ វារួមមាន unique_ptr និង shared_ptr។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <memory>
using namespace std;

int main() {
    // unique_ptr
    unique_ptr<int> ptr1 = make_unique<int>(10);
    cout << "Unique Pointer: " << *ptr1 << endl;

    // shared_ptr
    shared_ptr<int> ptr2 = make_shared<int>(20);
    cout << "Shared Pointer: " << *ptr2 << endl;

    return 0;
}
លទ្ធផល៖

Unique Pointer: 10
Shared Pointer: 20
អត្ថន័យ៖unique_ptr គឺជា pointer ដែលមានម្ចាស់តែមួយ ហើយ shared_ptr អនុញ្ញាតឱ្យមានម្ចាស់ច្រើន។ វាជួយកាត់បន្ថយការប្រើប្រាស់អវកាសដែលមិនចាំបាច់។

12.3. Multithreading in C++
Multithreading អនុញ្ញាតឱ្យកម្មវិធីរត់ការងារច្រើនក្នុងពេលតែមួយ។ C++ ផ្តល់ std::thread សម្រាប់ការបង្កើតឡើង និងគ្រប់គ្រង threads។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <thread>
using namespace std;

void printMessage() {
    cout << "Hello from thread!" << endl;
}

int main() {
    thread t(printMessage); // បង្កើត thread
    t.join(); // រង់ចាំ thread បញ្ចប់
    return 0;
}
លទ្ធផល៖

Hello from thread!
អត្ថន័យ៖ក្នុងឧទាហរណ៍នេះ std::thread ត្រូវបានប្រើដើម្បីបង្កើត thread ថ្មីដែលរត់មុខងារ printMessage។

12.4. Networking in C++
Networking នៅក្នុង C++ អាចត្រូវបានអនុវត្តដោយប្រើ libraries ដូចជា Boost.Asio ឬ POSIX sockets។ ខាងក្រោមគឺជាឧទាហរណ៍សាមញ្ញនៃការបង្កើត socket។

ឧទាហរណ៍កូដ៖

#include <iostream>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <unistd.h>
using namespace std;

int main() {
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    if (sock == -1) {
        cerr << "Failed to create socket." << endl;
        return 1;
    }

    cout << "Socket created successfully." << endl;
    close(sock);
    return 0;
}
លទ្ធផល៖

Socket created successfully.
អត្ថន័យ៖ឧទាហរណ៍នេះបង្ហាញពីការបង្កើត socket ដោយប្រើ POSIX sockets។ វាជាមូលដ្ឋានគ្រឹះសម្រាប់ការអភិវឌ្ឍកម្មវិធី networking។`
  },
  {
    id: 17,
    slug: "csharp",
    title: "C# មូលដ្ឋាន",
    description: "រៀន C# សម្រាប់បង្កើត .NET applications",
    level: "មធ្យម",
    icon: "💜",
    language: "csharp",
    content: `C# គឺជាភាសា OOP ទំនើបដែលបង្កើតដោយ Microsoft។ វាប្រើសម្រាប់ .NET applications, game development ជាមួយ Unity និងច្រើនទៀត។`,
    codeExample: `. Introduction to C#
C# (អានថា "C Sharp") គឺជាភាសាសរសេរកម្មវិធីទំនើបដែលមានលក្ខណៈវត្ថុនិយមបង្កើតឡើងដោយ Microsoft។ វាត្រូវបានប្រើយ៉ាងទូលំទូលាយសម្រាប់ការបង្កើតកម្មវិធី Windows, កម្មវិធីវេប, ហ្គេម (តាមរយៈ Unity), និងកម្មវិធីទូរស័ព្ទ។ C# គឺជាផ្នែកមួយនៃប្រព័ន្ធ .NET ដែលផ្តល់នូវក្របខ័ណ្ឌដ៏រឹងមាំសម្រាប់ការអភិវឌ្ឍកម្មវិធីដែលមានស្ថេរភាពនិងសុវត្ថិភាព។

1.1 What is C#?
C# គឺជាភាសាសរសេរកម្មវិធីដែលបង្កើតឡើងដោយ Microsoft ក្នុងឆ្នាំ 2000។ វាត្រូវបានរចនាឡើងសម្រាប់ការអភិវឌ្ឍន៍កម្មវិធីនៅលើវេទិកា .NET។ C# គឺជាភាសាដែលងាយស្រួលរៀននិងមានលក្ខណៈពិសេសដូចជា OOP (Object-Oriented Programming), type safety, និងការគ្រប់គ្រងកំហុស។

លក្ខណៈពិសេសរបស់ C#៖

គាំទ្រការសរសេរកម្មវិធីបែបវត្ថុ (OOP)។
មានប្រព័ន្ធប្រមូលសំរាមដោយស្វ័យប្រវត្តិ (Garbage Collection)។
អាចដំណើរការបានលើវេទិកាផ្សេងៗ (Windows, macOS, Linux)។
មានបណ្ណាល័យស្តង់ដារដែលធំទូលាយសម្រាប់ការអភិវឌ្ឍ។
ឧទាហរណ៍នៃ OOP ក្នុង C#៖

using System;

class Animal {
    public string Name { get; set; }

    public void Speak() {
        Console.WriteLine(Name + " makes a sound.");
    }
}

class Dog : Animal {
    public Dog(string name) {
        Name = name;
    }

    public void Bark() {
        Console.WriteLine(Name + " barks.");
    }
}

class Program {
    static void Main() {
        Dog dog = new Dog("Buddy");
        dog.Speak(); // Output: Buddy makes a sound.
        dog.Bark();  // Output: Buddy barks.
    }
}
លទ្ធផល៖

Buddy makes a sound.
Buddy barks.
1.2 Setting Up the Environment (Installing .NET SDK & Visual Studio)
ដើម្បីចាប់ផ្តើមសរសេរកម្មវិធី C# អ្នកត្រូវការដំឡើង .NET SDK និង IDE ដូចជា Visual Studio។

ជំហានដើម្បីរៀបចំបរិស្ថាន៖

ទាញយក .NET SDK ពីគេហទំព័រផ្លូវការរបស់ Microsoft។
ដំឡើង Visual Studio ឬ Visual Studio Code។
ធានាថា .NET SDK ត្រូវបានភ្ជាប់ជាមួយ IDE របស់អ្នក។
ឧទាហរណ៍នៃការដំឡើង .NET SDK លើ Windows៖

dotnet --version
លទ្ធផល៖

7.0.100
ឧទាហរណ៍នៃការបង្កើត Project ថ្មី៖

dotnet new console -o MyFirstApp
cd MyFirstApp
dotnet run
លទ្ធផល៖

Hello, World!
1.3 Writing and Running Your First C# Program
កម្មវិធី C# ដំបូងរបស់អ្នកអាចត្រូវបានសរសេរនៅក្នុងឯកសារ .cs ហើយដំណើរការដោយប្រើ .NET CLI។

ឧទាហរណ៍កម្មវិធី "Hello, World!"៖

using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}
ជំហានដើម្បីចងក្រង និងដំណើរការ៖

រក្សាទុកកូដនៅក្នុងឯកសារ Program.cs។
បើក terminal ហើយចងក្រងដោយប្រើពាក្យបញ្ជា៖
dotnet run
លទ្ធផល៖

Hello, World!
1.4 Understanding the .NET Framework
.NET គឺជាក្របខ័ណ្ឌដែលផ្តល់នូវបណ្ណាល័យនិងឧបករណ៍សម្រាប់ការអភិវឌ្ឍកម្មវិធី។ វារួមបញ្ចូល CLR (Common Language Runtime) និង FCL (Framework Class Library)។

សមាសធាតុសំខាន់ៗនៃ .NET៖

CLR: គ្រប់គ្រងការអនុវត្តកូដនិងការគ្រប់គ្រងអង្គចងចាំ។
FCL: បណ្ណាល័យស្តង់ដារសម្រាប់ការអភិវឌ្ឍ។
គាំទ្រភាសាចម្រុះ (C#, F#, VB.NET)។
ឧទាហរណ៍នៃការប្រើបណ្ណាល័យ .NET៖

using System;

class Program {
    static void Main() {
        DateTime now = DateTime.Now;
        Console.WriteLine("Current date and time: " + now);
    }
}
លទ្ធផល៖

Current date and time: 10/25/2023 12:34:56 PM
2. C# Basics
ផ្នែកនេះគ្របដណ្តប់អំពីគោលគំនិតជាមូលដ្ឋាននៃការសរសេរកម្មវិធី C# រួមទាំង syntax, អថេរ, ប្រភេទទិន្នន័យ, ប្រតិបត្តិករ, និងការបំលែងប្រភេទទិន្នន័យ។ គោលគំនិតទាំងនេះគឺជាការចាំបាច់សម្រាប់ការបង្កើតគ្រឹះរឹងមាំក្នុងការអភិវឌ្ឍ C#។

2.1 Syntax and Structure
C# syntax គឺស្រដៀងនឹងភាសា C-style ផ្សេងទៀតដូចជាមួយនឹងការប្រើប្រាស់វគ្គដែលមានចំណុចចាប់ផ្តើមជាមួយនឹងអនុគមន៍ Main()។

គន្លឹះ Syntax របស់ C#៖

រាល់កម្មវិធី C# ត្រូវតែមានអនុគមន៍ Main() ជាចំណុចចាប់ផ្តើម។
ប្រើ using ដើម្បីភ្ជាប់ namespace។
ប្រើ ; ដើម្បីបញ្ចប់សេចក្តីថ្លែងការណ៍។
ប្រើ ដើម្បីកំណត់ប្លុកកូដ។
ឧទាហរណ៍នៃកម្មវិធី C# សាមញ្ញ៖

using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, C#!");
    }
}
លទ្ធផល៖

Hello, C#!
2.2 Variables and Data Types
អថេរគឺជាកន្លែងសម្រាប់ផ្ទុកទិន្នន័យនិងត្រូវបានកំណត់ដោយប្រភេទទិន្នន័យ។ C# គាំទ្រប្រភេទទិន្នន័យជាច្រើន ដូចជា int, double, string, bool, និងផ្សេងៗទៀត។

ការប្រកាសនិងកំណត់តម្លៃអថេរ
អថេរត្រូវបានប្រកាសដោយប្រើប្រភេទទិន្នន័យ និងឈ្មោះអថេរ។ អ្នកអាចកំណត់តម្លៃអថេរនៅពេលប្រកាស ឬក្រោយមក។

// ប្រកាសអថេរ
int age;
double salary;
string name;
bool isActive;

// កំណត់តម្លៃអថេរ
age = 25;
salary = 1000.50;
name = "John";
isActive = true;

// ប្រកាសនិងកំណត់តម្លៃក្នុងពេលតែមួយ
int score = 100;
double pi = 3.14159;
string greeting = "Hello, World!";
bool isCompleted = false;
ប្រភេទទិន្នន័យនៅក្នុង C#
C# គាំទ្រប្រភេទទិន្នន័យជាច្រើន។ ខាងក្រោមនេះគឺជាប្រភេទទិន្នន័យដែលគេប្រើញឹកញាប់៖

1. ប្រភេទចំនួនគត់ (Integer Types)
ប្រភេទទិន្នន័យចំនួនគត់រួមមាន int, long, short, និង byte។

int age = 25; // ចំនួនគត់ (32-bit)
long population = 7800000000; // ចំនួនគត់ធំ (64-bit)
short temperature = -10; // ចំនួនគត់តូច (16-bit)
byte flags = 0b1010; // ចំនួនគត់តូច (8-bit)
2. ប្រភេទចំនួនទសភាគ (Floating-Point Types)
ប្រភេទទិន្នន័យចំនួនទសភាគរួមមាន float, double, និង decimal។

float piFloat = 3.14f; // ចំនួនទសភាគ (32-bit)
double piDouble = 3.14159; // ចំនួនទសភាគ (64-bit)
decimal price = 19.99m; // ចំនួនទសភាគសម្រាប់តម្លៃហិរញ្ញវត្ថុ (128-bit)
3. ប្រភេទអក្សរ និងឃ្លា (Character and String Types)
ប្រភេទទិន្នន័យអក្សររួមមាន char និង string។

char grade = 'A'; // អក្សរតែមួយ
string name = "John Doe"; // ឃ្លាអក្សរ
4. ប្រភេទតម្លៃពិត (Boolean Type)
ប្រភេទទិន្នន័យ bool ផ្ទុកតម្លៃពិត (true) ឬមិនពិត (false)។

bool isActive = true;
bool isCompleted = false;
5. ប្រភេទទិន្នន័យផ្សេងៗ (Other Data Types)
C# ក៏គាំទ្រប្រភេទទិន្នន័យផ្សេងៗទៀត ដូចជា object, dynamic, និង var។

object obj = 10; // អាចផ្ទុកតម្លៃណាមួយ
dynamic dynamicValue = "Hello"; // ប្រភេទទិន្នន័យត្រូវបានកំណត់នៅពេលដំណើរការ
var message = "Hello, World!"; // ប្រភេទទិន្នន័យត្រូវបានកំណត់ដោយស្វ័យប្រវត្តិ
អថេរថេរ (Constants)
អថេរថេរគឺជាអថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃបាន។ វាត្រូវបានប្រកាសដោយប្រើ const។

const double PI = 3.14159;
const string GREETING = "Hello, World!";
2.3 Constants and Readonly Fields
Constants និង readonly fields គឺជាអថេរដែលមិនអាចផ្លាស់ប្តូរតម្លៃបានបន្ទាប់ពីការចាប់ផ្តើម។ Constants ត្រូវបានកំណត់ដោយប្រើ const ខណៈពេលដែល readonly fields ត្រូវបានកំណត់ដោយប្រើ readonly។

ឧទាហរណ៍៖

const double PI = 3.14159; // Constant value
readonly int maxAttempts = 5; // Readonly field (can be set in constructor)
លទ្ធផល៖

PI = 3.14159
maxAttempts = 5
ភាពខុសគ្នារវាង const និង readonly៖

const: តម្លៃត្រូវតែកំណត់នៅពេលប្រកាស និងមិនអាចផ្លាស់ប្តូរបាន។
readonly: តម្លៃអាចត្រូវបានកំណត់នៅពេលប្រកាស ឬនៅក្នុង constructor នៃ class។
2.4 Operators (Arithmetic, Logical, Comparison)
Operators គឺជានិមិត្តសញ្ញាសម្រាប់ធ្វើប្រតិបត្តិការលើតម្លៃនិងអថេរ។ C# គាំទ្រប្រតិបត្តិករប្រភេទផ្សេងៗដូចជា arithmetic, logical, និង comparison។

Arithmetic Operators
Arithmetic operators ត្រូវបានប្រើសម្រាប់ធ្វើប្រតិបត្តិការគណិតវិទ្យាមូលដ្ឋានដូចជា បូក, ដក, គុណ, និងចែក។

int a = 10;
int b = 5;

int sum = a + b;       // Addition, sum = 15
int difference = a - b; // Subtraction, difference = 5
int product = a * b;    // Multiplication, product = 50
int quotient = a / b;   // Division, quotient = 2
int remainder = a % b;  // Modulus, remainder = 0
លទ្ធផល៖

sum = 15
difference = 5
product = 50
quotient = 2
remainder = 0
Comparison Operators
Comparison operators ត្រូវបានប្រើសម្រាប់ប្រៀបធៀបតម្លៃពីរ។ លទ្ធផលគឺជាតម្លៃ boolean (/true/ ឬ /false/)។

int x = 10;
int y = 5;

bool isEqual = (x == y);      // Equal to, isEqual = false
bool isNotEqual = (x != y);   // Not equal to, isNotEqual = true
bool isGreater = (x > y);     // Greater than, isGreater = true
bool isLess = (x < y);        // Less than, isLess = false
bool isGreaterOrEqual = (x >= y); // Greater than or equal to, isGreaterOrEqual = true
bool isLessOrEqual = (x <= y);    // Less than or equal to, isLessOrEqual = false
លទ្ធផល៖

isEqual = False
isNotEqual = True
isGreater = True
isLess = False
isGreaterOrEqual = True
isLessOrEqual = False
Logical Operators
Logical operators ត្រូវបានប្រើសម្រាប់បញ្ចូលគ្នានូវលក្ខខណ្ឌច្រើន។ ពួកវាត្រូវបានប្រើជាទូទៅនៅក្នុងសេចក្តីថ្លែងការណ៍ត្រួតពិនិត្យ (if, else, while, etc.)។

bool condition1 = true;
bool condition2 = false;

bool andResult = condition1 && condition2; // Logical AND, andResult = false
bool orResult = condition1 || condition2;  // Logical OR, orResult = true
bool notResult = !condition1;              // Logical NOT, notResult = false
លទ្ធផល៖

andResult = False
orResult = True
notResult = False
Ternary Operator
Ternary operator (/? :/) គឺជាប្រតិបត្តិករសន្សំសំចៃសម្រាប់ការសរសេរ /if-else/ សាមញ្ញ។

int age = 20;
string status = (age >= 18) ? "Adult" : "Minor"; // status = "Adult"
លទ្ធផល៖

status = Adult
2.5 Type Casting and Conversions
Type casting គឺជាការបំលែងប្រភេទទិន្នន័យពីប្រភេទមួយទៅប្រភេទមួយទៀត។ C# គាំទ្រការបំលែង implicit (ស្វ័យប្រវត្តិ) និង explicit (ដោយចេញពីអ្នកប្រើប្រាស់)។

ឧទាហរណ៍នៃ type casting៖

double num1 = 10.5;
int num2 = (int)num1; // Explicit casting (double to int)

int num3 = 10;
double num4 = num3; // Implicit casting (int to double)
លទ្ធផល៖

num2 = 10
num4 = 10.0
ការប្រើប្រាស់ Convert class សម្រាប់ការបំលែង៖

string str = "123";
int num = Convert.ToInt32(str); // Convert string to int
លទ្ធផល៖

num = 123
3. Control Flow
Control flow statements នៅក្នុង C# អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រប់គ្រងការប្រតិបត្តិកម្មវិធីរបស់អ្នកដោយផ្អែកលើលក្ខខណ្ឌរង្វិលជុំនិងការលោត។ ផ្នែកនេះគ្របដណ្តប់អំពី conditional statements, loops, និង jump statements។

3.1 Conditional Statements (if, else, switch)
Conditional statements ត្រូវបានប្រើដើម្បីប្រតិបត្តិកូដផ្សេងៗដោយផ្អែកលើលក្ខខណ្ឌជាក់លក្ខណះ។ C# គាំទ្រសេចក្តី if, else, else if, និង switch statements។

if Statement
if statement ត្រូវបានប្រើដើម្បីប្រតិបត្តិកូដនៅពេលលក្ខខណ្ឌមួយគឺពិត (/true/)។ ប្រសិនបើលក្ខខណ្ឌមិនពិត (/false/), កូដនៅក្នុង if block នឹងមិនត្រូវបានអនុវត្តទេ។

int number = 10;
if (number > 5) {
    Console.WriteLine("The number is greater than 5.");
}
លទ្ធផល៖

The number is greater than 5.
if-else Statement
if-else statement ត្រូវបានប្រើដើម្បីប្រតិបត្តិកូដផ្សេងៗដោយផ្អែកលើលក្ខខណ្ឌ។ ប្រសិនបើលក្ខខណ្ឌគឺពិត (/true/), កូដនៅក្នុង if block នឹងត្រូវបានអនុវត្ត។ បើមិនដូច្នេះទេ, កូដនៅក្នុង else block នឹងត្រូវបានអនុវត្ត។

int age = 18;
if (age >= 18) {
    Console.WriteLine("You are an adult.");
} else {
    Console.WriteLine("You are a minor.");
}
លទ្ធផល៖

You are an adult.
if-else if-else Statement
if-else if-else statement ត្រូវបានប្រើដើម្បីពិនិត្យលក្ខខណ្ឌច្រើន។ ប្រសិនបើលក្ខខណ្ឌទីមួយមិនពិត (/false/), លក្ខខណ្ឌបន្ទាប់នឹងត្រូវបានពិនិត្យ។ ប្រសិនបើគ្មានលក្ខខណ្ឌណាមួយពិតទេ, កូដនៅក្នុង else block នឹងត្រូវបានអនុវត្ត។

int score = 85;
if (score >= 90) {
    Console.WriteLine("Grade: A");
} else if (score >= 80) {
    Console.WriteLine("Grade: B");
} else if (score >= 70) {
    Console.WriteLine("Grade: C");
} else {
    Console.WriteLine("Grade: F");
}
លទ្ធផល៖

Grade: B
Nested if Statement
Nested if statement ត្រូវបានប្រើនៅពេលអ្នកត្រូវការពិនិត្យលក្ខខណ្ឌជាច្រើនដែលស្ថិតនៅក្នុងលក្ខខណ្ឌមួយផ្សេងទៀត។

int age = 20;
bool hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        Console.WriteLine("You can drive.");
    } else {
        Console.WriteLine("You need a license to drive.");
    }
} else {
    Console.WriteLine("You are too young to drive.");
}
លទ្ធផល៖

You can drive.
switch Statement
switch statement ត្រូវបានប្រើដើម្បីជ្រើសរើសកូដមួយក្នុងចំណោមកូដច្រើនដែលត្រូវបានអនុវត្ត។ វាសមរម្យសម្រាប់ការពិនិត្យតម្លៃនៃអថេរមួយប្រឆាំងនឹងតម្លៃជាច្រើន។

int day = 3;
switch (day) {
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    case 3:
        Console.WriteLine("Wednesday");
        break;
    default:
        Console.WriteLine("Invalid day");
        break;
}
លទ្ធផល៖

Wednesday
Ternary Operator
Ternary operator (/? :/) គឺជាប្រតិបត្តិករសន្សំសំចៃសម្រាប់ការសរសេរ if-else សាមញ្ញ។

int age = 20;
string status = (age >= 18) ? "Adult" : "Minor"; // status = "Adult"
លទ្ធផល៖

Adult
3.2 Loops (for, while, do-while, foreach)
Loops ត្រូវបានប្រើដើម្បីអនុវត្តកូដដដែលៗដោយផ្អែកលើលក្ខខណ្ឌជាក់លាក់។ C# គាំទ្ររង្វិលជុំដូចជា for, while, do-while, និង foreach។

for Loop
for loop ត្រូវបានប្រើនៅពេលអ្នកដឹងចំនួនដងដែលអ្នកចង់អនុវត្តកូដ។

for (int i = 0; i < 5; i++) {
    Console.WriteLine("Iteration: " + i);
}
លទ្ធផល៖

Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
while Loop
while loop ត្រូវបានប្រើនៅពេលអ្នកមិនដឹងចំនួនដងដែលអ្នកចង់អនុវត្តកូដ ប៉ុន្តែអ្នកដឹងលក្ខខណ្ឌដែលត្រូវបំពេញ។

int i = 0;
while (i < 5) {
    Console.WriteLine("Iteration: " + i);
    i++;
}
លទ្ធផល៖

Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
do-while Loop
do-while loop ស្រដៀងនឹង while loop ប៉ុន្តែវាធានាថាកូដនឹងត្រូវបានអនុវត្តយ៉ាងហោចណាស់ម្តង។

int i = 0;
do {
    Console.WriteLine("Iteration: " + i);
    i++;
} while (i < 5);
លទ្ធផល៖

Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
foreach Loop
foreach loop ត្រូវបានប្រើដើម្បីធ្វើវាងាយស្រួលក្នុងការប្រើប្រាស់ collections ដូចជា arrays ឬ lists។

string[] fruits = { "Apple", "Banana", "Cherry" };
foreach (string fruit in fruits) {
    Console.WriteLine(fruit);
}
លទ្ធផល៖

Apple
Banana
Cherry
3.3 Jump Statements (break, continue, return, goto)
Jump statements ត្រូវបានប្រើដើម្បីគ្រប់គ្រងលំហូរនៃកម្មវិធីដោយប្រើ break, continue, return, និង goto។

break Statement
break statement ត្រូវបានប្រើដើម្បីចាកចេញពី loop ឬ switch statement។

for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // Exit the loop when i is 5
    }
    Console.WriteLine("Iteration: " + i);
}
លទ្ធផល៖

Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
continue Statement
continue statement ត្រូវបានប្រើដើម្បីរំលងការប្រតិបត្តិកូដនៅក្នុង loop និងបន្តទៅការប្រតិបត្តិបន្ទាប់។

for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue; // Skip iteration when i is 2
    }
    Console.WriteLine("Iteration: " + i);
}
លទ្ធផល៖

Iteration: 0
Iteration: 1
Iteration: 3
Iteration: 4
return Statement
return statement ត្រូវបានប្រើដើម្បីបញ្ចប់ការប្រតិបត្តិនៃអនុគមន៍ និងត្រឡប់តម្លៃទៅកាន់ caller។

int Add(int a, int b) {
    return a + b;
}

int result = Add(5, 10);
Console.WriteLine("Result: " + result);
លទ្ធផល៖

Result: 15
goto Statement
goto statement ត្រូវបានប្រើដើម្បីលោតទៅកាន់ label ជាក់លាក់នៅក្នុងកូដ។

int i = 0;
start:
if (i < 5) {
    Console.WriteLine("Iteration: " + i);
    i++;
    goto start;
}
លទ្ធផល៖

Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
4. Methods and Functions
Methods និង functions គឺជាប្លុកកូដដែលអាចហៅដើម្បីអនុវត្តកិច្ចការជាក់លាក់។ ផ្នែកនេះគ្របដណ្តប់អំពីការកំណត់ហៅ methods, parameters, overloading, និង recursion។

4.1 Defining and Calling Methods
Methods គឺជាកូដដែលត្រូវបានកំណត់ដោយប្រើ keyword void (ប្រសិនបើមិនត្រឡប់តម្លៃ) ឬប្រភេទទិន្នន័យជាក់លាក់ (ប្រសិនបើត្រឡប់តម្លៃ)។

ឧទាហរណ៍នៃការកំណត់និងហៅ method៖

// Define a method
void Greet() {
    Console.WriteLine("Hello, World!");
}

// Call the method
Greet();
លទ្ធផល៖

Hello, World!
ឧទាហរណ៍នៃ method ដែលត្រឡប់តម្លៃ៖

// Define a method that returns a value
int Add(int a, int b) {
    return a + b;
}

// Call the method
int result = Add(5, 10);
Console.WriteLine("Result: " + result);
លទ្ធផល៖

Result: 15
4.2 Method Parameters (ref, out, params)
Parameters អនុញ្ញាតឱ្យអ្នកបញ្ជូនទិន្នន័យទៅកាន់ method។ C# គាំទ្រប្រភេទ parameters ដូចជា ref, out, និង params។

ref Parameter
ref parameter អនុញ្ញាតឱ្យអ្នកបញ្ជូនតម្លៃដោយ reference ដូច្នេះការផ្លាស់ប្តូរនៅក្នុង method នឹងប៉ះពាល់ដល់តម្លៃដើម។

void Increment(ref int num) {
    num++;
}

int x = 5;
Increment(ref x);
Console.WriteLine(x);
លទ្ធផល៖

6
out Parameter
out parameter ស្រដៀងនឹង ref ប៉ុន្តែវាមិនតម្រូវឱ្យតម្លៃដើមត្រូវបានចាប់ផ្តើមទេ។

void GetValues(out int a, out int b) {
    a = 10;
    b = 20;
}

int y, z;
GetValues(out y, out z);
Console.WriteLine(y + ", " + z);
លទ្ធផល៖

10, 20
params Parameter
params parameter អនុញ្ញាតឱ្យអ្នកបញ្ជូនចំនួនអថេរនៃ arguments ទៅកាន់ method។

int Sum(params int[] numbers) {
    int sum = 0;
    foreach (int num in numbers) {
        sum += num;
    }
    return sum;
}

int result = Sum(1, 2, 3, 4);
Console.WriteLine(result);
លទ្ធផល៖

10
4.3 Method Overloading
Method overloading អនុញ្ញាតឱ្យអ្នកកំណត់ច្រើន methods ដែលមានឈ្មោះដូចគ្នាប៉ុន្តែមាន parameters ខុសគ្នា។

ឧទាហរណ៍នៃ method overloading៖

void Print(int num) {
    Console.WriteLine("Number: " + num);
}

void Print(string text) {
    Console.WriteLine("Text: " + text);
}

Print(10); // Output: Number: 10
Print("Hello"); // Output: Text: Hello
លទ្ធផល៖

Number: 10
Text: Hello
4.4 Recursion
Recursion គឺជាការហៅ method ដោយខ្លួនឯង។ វាមានប្រយោជន៍សម្រាប់ការដោះស្រាយបញ្ហាដូចជា factorial ឬ Fibonacci។

ឧទាហរណ៍នៃ recursion៖

int Factorial(int n) {
    if (n == 0) {
        return 1;
    }
    return n * Factorial(n - 1);
}

int result = Factorial(5);
Console.WriteLine(result);
លទ្ធផល៖

120
ឧទាហរណ៍នៃ Fibonacci sequence៖

int Fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

int result = Fibonacci(6);
Console.WriteLine(result);
លទ្ធផល៖

8
5. Object-Oriented Programming (OOP) in C#
Object-Oriented Programming (OOP) គឺជារបៀបសរសេរកម្មវិធីដែលប្រើ objects និង classes ដើម្បីរៀបចំកម្មវិធី។ C# គឺជាភាសាដែលគាំទ្រយ៉ាងពេញលេញនូវគោលគំនិត OOP ដូចជា encapsulation, inheritance, និង polymorphism។ ផ្នែកនេះគ្របដណ្តប់អំពីគោលគំនិតមូលដ្ឋាននៃ OOP ក្នុង C#។

5.1 Classes and Objects
Class គឺជាគ្រោងការណ៍សម្រាប់បង្កើត objects ខណៈពេល object គឺជា instance នៃ class។ Class មាន fields (ទិន្នន័យ) និង methods (អនុគមន៍)។

ឧទាហរណ៍នៃ class និង object៖

class Car {
    public string Model; // Field
    public void Drive() { // Method
        Console.WriteLine("Driving " + Model);
    }
}

Car myCar = new Car(); // Create an object
myCar.Model = "Toyota";
myCar.Drive();
លទ្ធផល៖

Driving Toyota
5.2 Constructors and Destructors
Constructor គឺជាអនុគមន៍ពិសេសដែលត្រូវបានហៅដោយស្វ័យប្រវត្តិនៅពេលបង្កើត object។ Destructor ត្រូវបានហៅនៅពេល object ត្រូវបានបំផ្លាញ។

ឧទាហរណ៍នៃ constructor និង destructor៖

class Car {
    public string Model;

    // Constructor
    public Car(string model) {
        Model = model;
        Console.WriteLine("Car created: " + Model);
    }

    // Destructor
    ~Car() {
        Console.WriteLine("Car destroyed: " + Model);
    }
}

Car myCar = new Car("Toyota");
លទ្ធផល៖

Car created: Toyota
Note: Destructor នឹងត្រូវបានហៅនៅពេល object ត្រូវបានបំផ្លាញ (e.g., នៅពេលចប់កម្មវិធី)។

5.3 Encapsulation (Access Modifiers)
Encapsulation គឺជាការលាក់ទិន្នន័យនិងអនុគមន៍ពីការចូលប្រើពីខាងក្រៅ។ C# ប្រើ access modifiers ដូចជា public, private, protected, និង internal។

ឧទាហរណ៍នៃ encapsulation៖

class Car {
    private string Model; // Private field

    public void SetModel(string model) { // Public method
        Model = model;
    }

    public string GetModel() { // Public method
        return Model;
    }
}

Car myCar = new Car();
myCar.SetModel("Toyota");
Console.WriteLine(myCar.GetModel());
លទ្ធផល៖

Toyota
5.4 Properties and Auto-Properties
Properties គឺជាវិធីដើម្បីចូលប្រើ fields ដោយប្រើ getter និង setter។ Auto-properties ធ្វើឱ្យការកំណត់ properties កាន់តែងាយស្រួល។

ឧទាហរណ៍នៃ properties និង auto-properties៖

class Car {
    // Auto-property
    public string Model { get; set; }

    // Property with custom logic
    private int _year;
    public int Year {
        get { return _year; }
        set { _year = value > 2000 ? value : 2000; }
    }
}

Car myCar = new Car();
myCar.Model = "Toyota";
myCar.Year = 1995;
Console.WriteLine(myCar.Year);
លទ្ធផល៖

2000
5.5 Static Members
Static members ជាកម្មសិទ្ធិរបស់ class ជាជាង instance។ ពួកវាអាចត្រូវបានចូលប្រើដោយផ្ទាល់តាមរយៈ class។

ឧទាហរណ៍នៃ static members៖

class Car {
    public static int TotalCars = 0;

    public Car() {
        TotalCars++;
    }
}

Car myCar1 = new Car();
Car myCar2 = new Car();
Console.WriteLine(Car.TotalCars);
លទ្ធផល៖

2
5.6 Inheritance (base and derived classes)
Inheritance អនុញ្ញាតឱ្យ class មួយទទួលយក fields និង methods ពី class ផ្សេង។ Class ដែលទទួលយកគេហៅថា derived class ហើយ class ដែលត្រូវបានទទួលយកគេហៅថា base class។

ឧទាហរណ៍នៃ inheritance៖

class Vehicle { // Base class
    public string Brand = "Toyota";
}

class Car : Vehicle { // Derived class
    public void Drive() {
        Console.WriteLine("Driving " + Brand);
    }
}

Car myCar = new Car();
myCar.Drive();
លទ្ធផល៖

Driving Toyota
5.7 Polymorphism (method overriding, abstract classes, virtual methods)
Polymorphism អនុញ្ញាតឱ្យ methods មានឥរិយាបទខុសៗគ្នានៅក្នុង derived classes។ វាអាចសម្រេចបានតាមរយៈ method overriding, abstract classes, និង virtual methods។

ឧទាហរណ៍នៃ polymorphism៖

class Animal { // Base class
    public virtual void Sound() {
        Console.WriteLine("Animal sound");
    }
}

class Dog : Animal { // Derived class
    public override void Sound() {
        Console.WriteLine("Bark");
    }
}

Animal myDog = new Dog();
myDog.Sound();
លទ្ធផល៖

Bark
5.8 Interfaces
Interface គឺជាកិច្ចសន្យាដែលកំណត់អំពីអ្វីដែល class ត្រូវអនុវត្ត។ វាមិនមាន implementation នោះទេ។

ឧទាហរណ៍នៃ interface៖

interface IDriveable {
    void Drive();
}

class Car : IDriveable {
    public void Drive() {
        Console.WriteLine("Driving car");
    }
}

IDriveable myCar = new Car();
myCar.Drive();
លទ្ធផល៖

Driving car
5.9 Sealed and Partial Classes
Sealed class គឺជា class ដែលមិនអាចទទួលយកបាន។ Partial class អនុញ្ញាតឱ្យអ្នកបែងចែកការកំណត់ class ទៅជាឯកសារច្រើន។

ឧទាហរណ៍នៃ sealed និង partial classes៖

// Sealed class
sealed class Animal {
    public void Sound() {
        Console.WriteLine("Animal sound");
    }
}

// Partial class
partial class Car {
    public void Drive() {
        Console.WriteLine("Driving");
    }
}

partial class Car {
    public void Stop() {
        Console.WriteLine("Stopping");
    }
}

Car myCar = new Car();
myCar.Drive();
myCar.Stop();
លទ្ធផល៖

Driving
Stopping
6. Exception Handling
Exception handling គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងកំហុសដែលកើតឡើងក្នុងកម្មវិធីដោយមិនធ្វើឱ្យកម្មវិធីរត់ប៉ះ។ C# ផ្តល់នូវឧបករណ៍ដូចជា try-catch-finally និងការបង្កើត exceptions ផ្ទាល់ខ្លួន។

6.1 Try-Catch-Finally Blocks
try-catch-finally គឺជារចនាសម្ព័ន្ធសម្រាប់ចាប់យក exceptions។ កូដនៅក្នុង try block ត្រូវបានអនុវត្ត ហើយប្រសិនបើមាន exception វានឹងត្រូវបានចាប់យកដោយ catch block។finally block ត្រូវបានអនុវត្តរៀងរាល់ពេល។

ឧទាហរណ៍នៃ try-catch-finally៖

try {
    int result = 10 / 0; // This will throw an exception
} catch (DivideByZeroException ex) {
    Console.WriteLine("Error: " + ex.Message);
} finally {
    Console.WriteLine("This will always execute.");
}
លទ្ធផល៖

Error: Attempted to divide by zero.
This will always execute.
6.2 Throwing Exceptions
អ្នកអាចបង្កើតនិងបោះ exceptions ដោយប្រើ keyword throw។ វាមានប្រយោជន៍នៅពេលអ្នកចង់រាយការណ៍អំពីកំហុសផ្ទាល់ខ្លួន។

ឧទាហរណ៍នៃការបោះ exception៖

int age = -5;
if (age < 0) {
    throw new ArgumentException("Age cannot be negative.");
}
លទ្ធផល៖

Unhandled exception: System.ArgumentException: Age cannot be negative.
ឧទាហរណ៍នៃការបោះ exception ជាមួយ try-catch៖

try {
    int age = -5;
    if (age < 0) {
        throw new ArgumentException("Age cannot be negative.");
    }
} catch (ArgumentException ex) {
    Console.WriteLine("Error: " + ex.Message);
}
លទ្ធផល៖

Error: Age cannot be negative.
6.3 Custom Exceptions
អ្នកអាចបង្កើត exceptions ផ្ទាល់ខ្លួនដោយសរសេរ class ថ្មីដែលទាញយកពី Exception class។

ឧទាហរណ៍នៃ custom exception៖

class NegativeAgeException : Exception {
    public NegativeAgeException(string message) : base(message) {}
}

try {
    int age = -5;
    if (age < 0) {
        throw new NegativeAgeException("Age cannot be negative.");
    }
} catch (NegativeAgeException ex) {
    Console.WriteLine("Error: " + ex.Message);
}
លទ្ធផល៖

Error: Age cannot be negative.
6.4 Multiple Catch Blocks
អ្នកអាចប្រើច្រើន catch blocks ដើម្បីចាប់យក exceptions ប្រភេទផ្សេងៗ។

ឧទាហរណ៍នៃ multiple catch blocks៖

try {
    int[] numbers = { 1, 2, 3 };
    Console.WriteLine(numbers[5]); // This will throw an IndexOutOfRangeException
} catch (IndexOutOfRangeException ex) {
    Console.WriteLine("Index error: " + ex.Message);
} catch (Exception ex) {
    Console.WriteLine("General error: " + ex.Message);
}
លទ្ធផល៖

Index error: Index was outside the bounds of the array.
6.5 Nested Try-Catch Blocks
អ្នកអាចប្រើ try-catch blocks ដែលជាន់គ្នាដើម្បីគ្រប់គ្រង exceptions នៅក្នុងស្ថានភាពស្មុគស្មាញ។

ឧទាហរណ៍នៃ nested try-catch blocks៖

try {
    try {
        int result = 10 / 0; // This will throw a DivideByZeroException
    } catch (DivideByZeroException ex) {
        Console.WriteLine("Inner error: " + ex.Message);
        throw; // Re-throw the exception
    }
} catch (Exception ex) {
    Console.WriteLine("Outer error: " + ex.Message);
}
លទ្ធផល៖

Inner error: Attempted to divide by zero.
Outer error: Attempted to divide by zero.
7. Collections and Data Structures
Collections និង data structures គឺជាផ្នែកសំខាន់នៃការសរសេរកម្មវិធី C#។ ពួកវាផ្តល់នូវវិធីដើម្បីរៀបចំនិងគ្រប់គ្រងទិន្នន័យយ៉ាងមានប្រសិទ្ធភាព។ ផ្នែកនេះគ្របដណ្តប់អំពី arrays, lists, dictionaries, queues, stacks, និង sets។

7.1 Arrays (one-dimensional, multi-dimensional, jagged)
Arrays គឺជាបណ្តុំនៃធាតុដែលមានប្រភេទដូចគ្នា។ C# គាំទ្រការប្រើ arrays មួយវិមាត្រ, ពហុវិមាត្រ, និង jagged arrays។

ឧទាហរណ៍នៃ arrays៖

// One-dimensional array
int[] numbers = { 1, 2, 3, 4, 5 };
Console.WriteLine("One-dimensional array:");
foreach (int num in numbers) {
    Console.Write(num + " ");
}

// Multi-dimensional array
int[,] matrix = { { 1, 2 }, { 3, 4 } };
Console.WriteLine("

Multi-dimensional array:");
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        Console.Write(matrix[i, j] + " ");
    }
    Console.WriteLine();
}

// Jagged array
int[][] jaggedArray = {
    new int[] { 1, 2 },
    new int[] { 3, 4, 5 }
};
Console.WriteLine("
Jagged array:");
foreach (int[] arr in jaggedArray) {
    foreach (int num in arr) {
        Console.Write(num + " ");
    }
    Console.WriteLine();
}
លទ្ធផល៖

One-dimensional array:
1 2 3 4 5 

Multi-dimensional array:
1 2 
3 4 

Jagged array:
1 2 
3 4 5
7.2 Lists (List<T>)
Lists គឺជា collections ដែលអាចផ្លាស់ប្តូរទំហំបាន។ ពួកវាផ្តល់នូវភាពងាយស្រួលក្នុងការបន្ថែមយកចេញនិងចូលប្រើធាតុ។

ឧទាហរណ៍នៃ List៖

List<int> numbers = new List<int> { 1, 2, 3 };
numbers.Add(4); // Add an element
numbers.Remove(2); // Remove an element
Console.WriteLine("List elements:");
foreach (int num in numbers) {
    Console.Write(num + " ");
}
លទ្ធផល៖

List elements:
1 3 4
7.3 Dictionaries (Dictionary<TKey, TValue>)
Dictionaries គឺជា collections ដែលផ្ទុក key-value pairs។ ពួកវាអនុញ្ញាតឱ្យអ្នកចូលប្រើតម្លៃដោយប្រើ key។

ឧទាហរណ៍នៃ Dictionary៖

Dictionary<string, int> ages = new Dictionary<string, int>();
ages["John"] = 25; // Add a key-value pair
ages["Jane"] = 30;
Console.WriteLine("Dictionary elements:");
foreach (var kvp in ages) {
    Console.WriteLine(kvp.Key + ": " + kvp.Value);
}
លទ្ធផល៖

Dictionary elements:
John: 25
Jane: 30
7.4 Queues and Stacks
Queues និង stacks គឺជា collections ដែលធ្វើការតាមគោលការណ៍ FIFO (First-In-First-Out) និង LIFO (Last-In-First-Out)។

ឧទាហរណ៍នៃ Queue និង Stack៖

// Queue
Queue<int> queue = new Queue<int>();
queue.Enqueue(1); // Add to the queue
queue.Enqueue(2);
Console.WriteLine("Queue elements:");
while (queue.Count > 0) {
    Console.Write(queue.Dequeue() + " "); // Remove from the queue
}

// Stack
Stack<int> stack = new Stack<int>();
stack.Push(1); // Add to the stack
stack.Push(2);
Console.WriteLine("
Stack elements:");
while (stack.Count > 0) {
    Console.Write(stack.Pop() + " "); // Remove from the stack
}
លទ្ធផល៖

Queue elements:
1 2 
Stack elements:
2 1
7.5 HashSet and SortedSet
HashSet និង SortedSet គឺជា collections ដែលមិនអនុញ្ញាតឱ្យមានធាតុស្ទួន។ SortedSet រក្សាធាតុតាមលំដាប់។

ឧទាហរណ៍នៃ HashSet និង SortedSet៖

// HashSet
HashSet<int> hashSet = new HashSet<int> { 1, 2, 3 };
hashSet.Add(2); // Duplicate, will not be added
Console.WriteLine("HashSet elements:");
foreach (int num in hashSet) {
    Console.Write(num + " ");
}

// SortedSet
SortedSet<int> sortedSet = new SortedSet<int> { 3, 1, 2 };
Console.WriteLine("
SortedSet elements:");
foreach (int num in sortedSet) {
    Console.Write(num + " ");
}
លទ្ធផល៖

HashSet elements:
1 2 3 
SortedSet elements:
1 2 3
8. File Handling and Streams
File handling និង streams គឺជាផ្នែកសំខាន់នៃការសរសេរកម្មវិធី C#។ ពួកវាអនុញ្ញាតឱ្យអ្នកអាននិងសរសេរទិន្នន័យទៅកាន់ឯកសារ JSON និង CSV។ ផ្នែកនេះគ្របដណ្តប់អំពីការប្រើ File, StreamReader, StreamWriter, និង System.Text.Json។

8.1 Reading and Writing Files (File, StreamReader, StreamWriter)
C# ផ្តល់នូវវិធីជាច្រើនដើម្បីអាននិងសរសេរទិន្នន័យទៅកាន់ឯកសារ។ អ្នកអាចប្រើ File class សម្រាប់ប្រតិបត្តិការសាមញ្ញ ឬ StreamReader និង StreamWriter សម្រាប់ការគ្រប់គ្រងលម្អិតបន្ថែម។

ឧទាហរណ៍នៃការសរសេរនិងអានឯកសារ៖

using System;
using System.IO;

class Program
{
    static void Main()
    {
        string filePath = "example.txt";

        // Writing to a file using File.WriteAllText
        File.WriteAllText(filePath, "Hello, World!");
        Console.WriteLine("File written using File.WriteAllText.");

        // Reading from a file using File.ReadAllText
        string content = File.ReadAllText(filePath);
        Console.WriteLine("Content read using File.ReadAllText:");
        Console.WriteLine(content); // Output: Hello, World!

        // Appending to a file using File.AppendAllText
        File.AppendAllText(filePath, "
This is an appended line.");
        Console.WriteLine("Line appended using File.AppendAllText.");

        // Reading all lines from a file using File.ReadAllLines
        string[] lines = File.ReadAllLines(filePath);
        Console.WriteLine("Content read using File.ReadAllLines:");
        foreach (string line in lines)
        {
            Console.WriteLine(line);
        }
        // Output:
        // Hello, World!
        // This is an appended line.

        // Using StreamWriter to write to a file
        using (StreamWriter writer = new StreamWriter(filePath))
        {
            writer.WriteLine("This is a new line written using StreamWriter.");
            writer.WriteLine("Another line added.");
        }
        Console.WriteLine("File written using StreamWriter.");

        // Using StreamReader to read from a file line by line
        using (StreamReader reader = new StreamReader(filePath))
        {
            Console.WriteLine("Content read using StreamReader:");
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
        // Output:
        // This is a new line written using StreamWriter.
        // Another line added.

        // Handling exceptions when working with files
        try
        {
            string nonExistentFilePath = "nonexistent.txt";
            string text = File.ReadAllText(nonExistentFilePath);
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine("Error: File not found.");
            Console.WriteLine(ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine("An error occurred:");
            Console.WriteLine(ex.Message);
        }
    }
}
Output:

File written using File.WriteAllText.
Content read using File.ReadAllText:
Hello, World!
Line appended using File.AppendAllText.
Content read using File.ReadAllLines:
Hello, World!
This is an appended line.
File written using StreamWriter.
Content read using StreamReader:
This is a new line written using StreamWriter.
Another line added.
Error: File not found.
Could not find file 'nonexistent.txt'.
8.2 Working with JSON (System.Text.Json)
JSON (JavaScript Object Notation) គឺជាទ្រង់ទ្រាយទិន្នន័យដែលគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ការផ្លាស់ប្តូរទិន្នន័យ។ C# ផ្តល់នូវ System.Text.Json សម្រាប់ការបំលែង objects ទៅជា JSON និងច្រាសមកវិញ។

ឧទាហរណ៍នៃការប្រើ JSON៖

using System.Text.Json;

// Define a Person class
public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
}

// Serialize object to JSON
var person = new Person { Name = "John", Age = 30 };
string json = JsonSerializer.Serialize(person);
Console.WriteLine(json); // Output: {"Name":"John","Age":30}

// Deserialize JSON to object
var deserializedPerson = JsonSerializer.Deserialize<Person>(json);
Console.WriteLine(deserializedPerson.Name); // Output: John
Console.WriteLine(deserializedPerson.Age);  // Output: 30
Output:

{"Name":"John","Age":30}
John
30
8.3 Handling CSV Files
CSV (Comma-Separated Values) គឺជាទ្រង់ទ្រាយឯកសារដែលគេប្រើយ៉ាងទូលំទូលាយសម្រាប់ផ្ទុកទិន្នន័យតារាង។ C# អនុញ្ញាតឱ្យអ្នកអាននិងសរសេរទិន្នន័យ CSV ដោយប្រើ StreamReader និង StreamWriter។

ឧទាហរណ៍នៃការប្រើ CSV៖

// Writing to a CSV file
string csvPath = "data.csv";
using (StreamWriter writer = new StreamWriter(csvPath)) {
    writer.WriteLine("Name,Age");
    writer.WriteLine("John,30");
    writer.WriteLine("Jane,25");
}

// Reading from a CSV file
using (StreamReader reader = new StreamReader(csvPath)) {
    string line;
    while ((line = reader.ReadLine()) != null) {
        Console.WriteLine(line);
    }
}
Output:

Name,Age
John,30
Jane,25
9. LINQ (Language Integrated Query)
LINQ (Language Integrated Query) គឺជាផ្នែកមួយនៃ C# ដែលអនុញ្ញាតឱ្យអ្នកសរសេរសំណួរទៅកាន់ collections, databases, និងទិន្នន័យផ្សេងៗ។ វាធ្វើឱ្យការងារជាមួយទិន្នន័យកាន់តែងាយស្រួលនិងអានបាន។

9.1 Introduction to LINQ
LINQ ផ្តល់នូវវិធីសាមញ្ញនិងអានបានដើម្បីសរសេរសំណួរទៅកាន់ទិន្នន័យ។ វាគាំទ្រទិន្នន័យប្រភេទផ្សេងៗដូចជា collections, arrays, XML, និង databases។

ឧទាហរណ៍នៃ LINQ៖

int[] numbers = { 1, 2, 3, 4, 5 };
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;

foreach (var num in evenNumbers) {
    Console.WriteLine(num); // Output: 2, 4
}
Output:

2
4
9.2 LINQ Queries (Where, Select, OrderBy)
LINQ queries អនុញ្ញាតឱ្យអ្នកច្រាស់ទិន្នន័យដោយប្រើ methods ដូចជា Where, Select, និង OrderBy។

ឧទាហរណ៍នៃ LINQ queries៖

var numbers = new List<int> { 5, 3, 1, 4, 2 };

// Filtering with Where
var filteredNumbers = numbers.Where(n => n > 2);

// Projection with Select
var squaredNumbers = numbers.Select(n => n * n);

// Sorting with OrderBy
var sortedNumbers = numbers.OrderBy(n => n);

Console.WriteLine(string.Join(", ", sortedNumbers)); // Output: 1, 2, 3, 4, 5
Output:

1, 2, 3, 4, 5
9.3 LINQ with Collections
LINQ អាចត្រូវបានប្រើជាមួយ collections ដូចជា List<T>, Dictionary<TKey, TValue>, និង HashSet<T>។

ឧទាហរណ៍នៃ LINQ with collections៖

public class Student {
    public string Name { get; set; }
    public int Age { get; set; }
}

var students = new List<Student> {
    new Student { Name = "John", Age = 20 },
    new Student { Name = "Jane", Age = 22 },
    new Student { Name = "Alice", Age = 21 }
};

var query = from student in students
            where student.Age > 20
            orderby student.Name
            select student;

foreach (var student in query) {
    Console.WriteLine(student.Name); // Output: Alice, Jane
}
Output:

Alice
Jane
9.4 LINQ with Databases (Entity Framework)
LINQ អាចត្រូវបានប្រើជាមួយ databases តាមរយៈ Entity Framework។ វាអនុញ្ញាតឱ្យអ្នកសរសេរសំណួរទៅកាន់ database ដោយប្រើ syntax ដូចគ្នានឹង LINQ with collections។

ឧទាហរណ៍នៃ LINQ with Entity Framework៖

using (var context = new SchoolContext()) {
    var students = from student in context.Students
                   where student.Age > 20
                   orderby student.Name
                   select student;

    foreach (var student in students) {
        Console.WriteLine(student.Name);
    }
}
Output:

Alice
Jane
10. Delegates, Events, and Lambda Expressions
Delegates, events, និង lambda expressions គឺជាផ្នែកសំខាន់នៃ C# ដែលអនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងការហៅអនុគមន៍ដោយប្រើវិធីដែលអាចបត់បែននិងអានបាន។ ផ្នែកនេះគ្របដណ្តប់អំពី delegates, lambda expressions, និងការគ្រប់គ្រង events។

10.1 Delegates (Func, Action, Predicate)
Delegates គឺជាប្រភេទដែលតំណាងឱ្យអនុគមន៍។ C# ផ្តល់នូវ delegates ដូចជា Func, Action, និង Predicate សម្រាប់ការប្រើប្រាស់ទូទៅ។

ឧទាហរណ៍នៃ delegates៖

// Func delegate (returns a value)
Func<int, int, int> add = (a, b) => a + b;
Console.WriteLine(add(2, 3)); // Output: 5

// Action delegate (does not return a value)
Action<string> greet = name => Console.WriteLine("Hello, " + name);
greet("John"); // Output: Hello, John

// Predicate delegate (returns a boolean)
Predicate<int> isEven = num => num % 2 == 0;
Console.WriteLine(isEven(4)); // Output: True
Output:

5
Hello, John
True
10.2 Lambda Expressions
Lambda expressions គឺជាវិធីសង្ខេបដើម្បីសរសេរអនុគមន៍ដោយមិនចាំបាច់កំណត់ឈ្មោះ។ ពួកវាត្រូវបានប្រើជាញឹកញាប់ជាមួយ delegates និង LINQ។

ឧទាហរណ៍នៃ lambda expressions៖

// Lambda expression with Func delegate
Func<int, int> square = x => x * x;
Console.WriteLine(square(5)); // Output: 25

// Lambda expression with LINQ
var numbers = new List<int> { 1, 2, 3, 4, 5 };
var evenNumbers = numbers.Where(n => n % 2 == 0);
Console.WriteLine(string.Join(", ", evenNumbers)); // Output: 2, 4
Output:

25
2, 4
10.3 Events and Event Handling
Events គឺជាវិធីដើម្បីធ្វើឱ្យ class អាចជូនដំណឹងទៅកាន់ class ផ្សេងៗនៅពេលដែលអ្វីមួយកើតឡើង។ Event handling គឺជាការគ្រប់គ្រងការឆ្លើយតបទៅនឹង events។

ឧទាហរណ៍នៃ events និង event handling៖

// Define a delegate for the event
public delegate void Notify();

// Define a class with an event
public class Process {
    public event Notify ProcessCompleted;

    public void StartProcess() {
        Console.WriteLine("Process started...");
        OnProcessCompleted();
    }

    protected virtual void OnProcessCompleted() {
        ProcessCompleted?.Invoke();
    }
}

// Subscribe to the event
Process process = new Process();
process.ProcessCompleted += () => Console.WriteLine("Process completed!");
process.StartProcess(); // Output: Process started... Process completed!
Output:

Process started...
Process completed!
11. Multithreading and Asynchronous Programming
Multithreading និង asynchronous programming គឺជាបច្ចេកទេសសម្រាប់កែលម្អដំណើរការកម្មវិធីដោយអនុញ្ញាតឱ្យការងារច្រើនអាចដំណើរការក្នុងពេលដំណាលគ្នា។ ផ្នែកនេះគ្របដណ្តប់អំពី threads, tasks, parallel programming, និង background workers។

11.1 Threads (Thread Class)
Threads អនុញ្ញាតឱ្យអ្នកដំណើរការកូដជាច្រើនក្នុងពេលដំណាលគ្នា។ អ្នកអាចប្រើ Thread class ដើម្បីបង្កើតនិងគ្រប់គ្រង threads។

ឧទាហរណ៍នៃ threads៖

using System.Threading;

void PrintNumbers() {
    for (int i = 1; i <= 5; i++) {
        Console.WriteLine(i);
        Thread.Sleep(500);
    }
}

Thread thread = new Thread(PrintNumbers);
thread.Start(); // Start the thread
thread.Join();  // Wait for the thread to finish
Output:

1
2
3
4
5
11.2 Task-Based Asynchronous Pattern (async and await)
Task-based asynchronous pattern (TAP) គឺជាវិធីសាមញ្ញនិងមានប្រសិទ្ធភាពដើម្បីដំណើរការកូដ asynchronous ដោយប្រើ async និង await។

ឧទាហរណ៍នៃ async និង await៖

async Task<string> FetchDataAsync() {
    await Task.Delay(2000); // Simulate a delay
    return "Data fetched!";
}

async Task Main() {
    Console.WriteLine("Fetching data...");
    string result = await FetchDataAsync();
    Console.WriteLine(result); // Output: Data fetched!
}

Main().Wait();
Output:

Fetching data...
Data fetched!
11.3 Parallel Programming (Parallel.For, Parallel.ForEach)
Parallel programming អនុញ្ញាតឱ្យអ្នកដំណើរការកូដជាច្រើនក្នុងពេលដំណាលគ្នាដោយប្រើ Parallel.For និង Parallel.ForEach។

ឧទាហរណ៍នៃ parallel programming៖

using System.Threading.Tasks;

Parallel.For(0, 10, i => {
    Console.WriteLine($"Processing {i} on thread {Thread.CurrentThread.ManagedThreadId}");
});

var numbers = new List<int> { 1, 2, 3, 4, 5 };
Parallel.ForEach(numbers, num => {
    Console.WriteLine($"Processing {num} on thread {Thread.CurrentThread.ManagedThreadId}");
});
Output:

Processing 0 on thread 1
Processing 1 on thread 2
Processing 2 on thread 3
Processing 3 on thread 4
Processing 4 on thread 5
Processing 5 on thread 6
Processing 6 on thread 7
Processing 7 on thread 8
Processing 8 on thread 9
Processing 9 on thread 10
Processing 1 on thread 1
Processing 2 on thread 2
Processing 3 on thread 3
Processing 4 on thread 4
Processing 5 on thread 5
11.4 Background Workers
Background workers គឺជាវិធីដើម្បីដំណើរការកូដនៅក្នុងផ្ទៃខាងក្រោយដោយមិនរារាំង UI។ អ្នកអាចប្រើ BackgroundWorker class ដើម្បីគ្រប់គ្រងការងារផ្ទៃខាងក្រោយ។

ឧទាហរណ៍នៃ background workers៖

using System.ComponentModel;

BackgroundWorker worker = new BackgroundWorker();
worker.DoWork += (sender, e) => {
    // Simulate a long-running task
    Thread.Sleep(2000);
    e.Result = "Task completed!";
};

worker.RunWorkerCompleted += (sender, e) => {
    Console.WriteLine(e.Result); // Output: Task completed!
};

worker.RunWorkerAsync();
Output:

Task completed!
12. Working with Databases in C#
C# ផ្តល់នូវឧបករណ៍ដ៏រឹងមាំសម្រាប់ធ្វើការជាមួយ databases ដូចជា ADO.NET និង Entity Framework Core។ ផ្នែកនេះគ្របដណ្តប់អំពីការភ្ជាប់ទៅកាន់ SQL Server, ការប្រើ SQL queries, និងការប្រើ Entity Framework Core។

12.1 ADO.NET Basics
ADO.NET គឺជា framework សម្រាប់ធ្វើការជាមួយ databases នៅក្នុង C#។ វាផ្តល់នូវ classes ដូចជា SqlConnection, SqlCommand, និង SqlDataReader សម្រាប់ការភ្ជាប់និងគ្រប់គ្រងទិន្នន័យ។

ឧទាហរណ៍នៃ ADO.NET៖

using System.Data.SqlClient;

string connectionString = "YourConnectionStringHere";
using (SqlConnection connection = new SqlConnection(connectionString)) {
    connection.Open();
    SqlCommand command = new SqlCommand("SELECT * FROM Customers", connection);
    SqlDataReader reader = command.ExecuteReader();
    while (reader.Read()) {
        Console.WriteLine(reader["CustomerName"]);
    }
}
Output:

John Doe
Jane Smith
Alice Johnson
12.2 Connecting to SQL Server
ដើម្បីភ្ជាប់ទៅកាន់ SQL Server អ្នកត្រូវប្រើ SqlConnection class ជាមួយ connection string។ Connection string មានព័ត៌មានដូចជា server name, database name, និង credentials។

ឧទាហរណ៍នៃការភ្ជាប់ទៅកាន់ SQL Server៖

string connectionString = "Server=your_server;Database=your_db;User Id=your_user;Password=your_password;";
using (SqlConnection connection = new SqlConnection(connectionString)) {
    connection.Open();
    Console.WriteLine("Connected to SQL Server!");
}
Output:

Connected to SQL Server!
12.3 Executing SQL Queries with C#
អ្នកអាចប្រើ SqlCommand ដើម្បីអនុវត្ត SQL queries និង stored procedures។ វាអនុញ្ញាតឱ្យអ្នកអាន, សរសេរ, និងធ្វើបច្ចុប្បន្នភាពទិន្នន័យនៅក្នុង database។

ឧទាហរណ៍នៃការអនុវត្ត SQL queries៖

using (SqlConnection connection = new SqlConnection(connectionString)) {
    connection.Open();
    SqlCommand command = new SqlCommand("INSERT INTO Customers (CustomerName) VALUES (@Name)", connection);
    command.Parameters.AddWithValue("@Name", "John Doe");
    int rowsAffected = command.ExecuteNonQuery();
    Console.WriteLine($"{rowsAffected} row(s) inserted.");
}
Output:

1 row(s) inserted.
12.4 Entity Framework Core Basics
Entity Framework Core (EF Core) គឺជា ORM (Object-Relational Mapper) ដែលអនុញ្ញាតឱ្យអ្នកធ្វើការជាមួយ databases ដោយប្រើ objects និង LINQ។ វាធ្វើឱ្យការងារជាមួយ databases កាន់តែងាយស្រួល។

ឧទាហរណ៍នៃ EF Core៖

using Microsoft.EntityFrameworkCore;

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext {
    public DbSet<Customer> Customers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
        optionsBuilder.UseSqlServer("YourConnectionStringHere");
    }
}

// Adding a customer
using (var context = new AppDbContext()) {
    var customer = new Customer { Name = "John Doe" };
    context.Customers.Add(customer);
    context.SaveChanges();
}

// Querying customers
using (var context = new AppDbContext()) {
    var customers = context.Customers.ToList();
    foreach (var c in customers) {
        Console.WriteLine(c.Name);
    }
}
Output:

John Doe
13. Windows Forms and WPF (GUI Development)
Windows Forms និង WPF (Windows Presentation Foundation) គឺជា frameworks សម្រាប់ការអភិវឌ្ឍកម្មវិធី GUI (Graphical User Interface) នៅក្នុង C#។ ផ្នែកនេះគ្របដណ្តប់អំពីការបង្កើតនិងគ្រប់គ្រងកម្មវិធី GUI ដោយប្រើ Windows Forms និង WPF។

13.1 Introduction to Windows Forms
Windows Forms គឺជា framework សម្រាប់ការបង្កើតកម្មវិធី desktop ដែលមាន GUI។ វាផ្តល់នូវ controls ដូចជា buttons, labels, textboxes, និងផ្សេងៗទៀតសម្រាប់ការបង្កើតផ្ទាំងអ្នកប្រើប្រាស់។

ឧទាហរណ៍នៃការបង្កើត Windows Forms application៖

using System;
using System.Windows.Forms;

public class MainForm : Form {
    public MainForm() {
        // កំណត់ចំណងជើងនិងទំហំរបស់ form
        this.Text = "My First Windows Form";
        this.Size = new System.Drawing.Size(300, 200);

        // បង្កើត button
        Button button = new Button();
        button.Text = "Click Me";
        button.Location = new System.Drawing.Point(100, 50);
        button.Click += (sender, e) => MessageBox.Show("Button clicked!");

        // បន្ថែម button ទៅក្នុង form
        this.Controls.Add(button);
    }

    [STAThread]
    static void Main() {
        // បើក application
        Application.Run(new MainForm());
    }
}
លទ្ធផល៖ វីនដូមួយដែលមានចំណងជើង "My First Windows Form" នឹងបង្ហាញឡើងជាមួយ button ដែលមានចំណងជើង "Click Me"។ នៅពេលចុច button នេះ ប្រអប់សារមួយនឹងបង្ហាញឡើងដោយសារអត្ថបទ "Button clicked!"។

13.2 Working with Controls (Buttons, Labels, Textboxes)
Controls គឺជាធាតុដែលអ្នកប្រើប្រាស់អាចធ្វើអន្តរកម្មជាមួយនៅក្នុងកម្មវិធី GUI។ Windows Forms ផ្តល់នូវ controls ជាច្រើនដូចជា buttons, labels, textboxes, និងផ្សេងៗទៀត។

ឧទាហរណ៍នៃការប្រើ controls៖

using System;
using System.Windows.Forms;

public class MainForm : Form {
    public MainForm() {
        this.Text = "User Input Form";
        this.Size = new System.Drawing.Size(300, 200);

        // បង្កើត label
        Label label = new Label();
        label.Text = "Enter your name:";
        label.Location = new System.Drawing.Point(20, 20);

        // បង្កើត textbox
        TextBox textBox = new TextBox();
        textBox.Location = new System.Drawing.Point(20, 50);
        textBox.Size = new System.Drawing.Size(200, 20);

        // បង្កើត button
        Button button = new Button();
        button.Text = "Submit";
        button.Location = new System.Drawing.Point(20, 80);
        button.Click += (sender, e) => MessageBox.Show("Hello, " + textBox.Text);

        // បន្ថែម controls ទៅក្នុង form
        this.Controls.Add(label);
        this.Controls.Add(textBox);
        this.Controls.Add(button);
    }

    [STAThread]
    static void Main() {
        Application.Run(new MainForm());
    }
}
លទ្ធផល៖ វីនដូមួយដែលមានចំណងជើង "User Input Form" នឹងបង្ហាញឡើងជាមួយ label "Enter your name:", textbox សម្រាប់បញ្ចូលឈ្មោះ និង button "Submit"។ នៅពេលអ្នកប្រើប្រាស់បញ្ចូលឈ្មោះរបស់ពួកគេ ហើយចុច "Submit" ប្រអប់សារមួយនឹងបង្ហាញឡើងដោយសារអត្ថបទ "Hello, [name]"។

13.3 Event Handling in Windows Forms
Event handling គឺជាការគ្រប់គ្រងការឆ្លើយតបទៅនឹងសកម្មភាពរបស់អ្នកប្រើប្រាស់ដូចជាការចុចប៊ូតុង។ អ្នកអាចប្រើ event handlers ដើម្បីកំណត់អ្វីដែលត្រូវធ្វើនៅពេលដែល event កើតឡើង។

ឧទាហរណ៍នៃ event handling៖

using System;
using System.Windows.Forms;

public class MainForm : Form {
    public MainForm() {
        this.Text = "Event Handling Example";
        this.Size = new System.Drawing.Size(300, 200);

        // បង្កើត button
        Button button = new Button();
        button.Text = "Click Me";
        button.Location = new System.Drawing.Point(100, 50);
        button.Click += (sender, e) => {
            MessageBox.Show("Button clicked!");
        };

        // បន្ថែម button ទៅក្នុង form
        this.Controls.Add(button);
    }

    [STAThread]
    static void Main() {
        Application.Run(new MainForm());
    }
}
លទ្ធផល៖ វីនដូមួយដែលមានចំណងជើង "Event Handling Example" នឹងបង្ហាញឡើងជាមួយ button ដែលមានចំណងជើង "Click Me"។ នៅពេលចុច button នេះ ប្រអប់សារមួយនឹងបង្ហាញឡើងដោយសារអត្ថបទ "Button clicked!"។

13.4 Introduction to WPF (Windows Presentation Foundation)
WPF គឺជា framework ទំនើបសម្រាប់ការបង្កើតកម្មវិធី desktop ដែលមាន GUI។ វាផ្តល់នូវការគាំទ្រសម្រាប់ graphics, animations, និង data binding។

ឧទាហរណ៍នៃ WPF application៖

<!-- MainWindow.xaml -->
<Window x:Class="WpfApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="My WPF App" Height="200" Width="300">
    <StackPanel>
        <Label Content="Enter your name:" />
        <TextBox x:Name="txtName" />
        <Button Content="Submit" Click="Button_Click" />
    </StackPanel>
</Window>
// MainWindow.xaml.cs
using System.Windows;

public partial class MainWindow : Window {
    public MainWindow() {
        InitializeComponent();
    }

    private void Button_Click(object sender, RoutedEventArgs e) {
        MessageBox.Show("Hello, " + txtName.Text);
    }
}
លទ្ធផល៖ វីនដូមួយដែលមានចំណងជើង "My WPF App" នឹងបង្ហាញឡើងជាមួយ label "Enter your name:", textbox សម្រាប់បញ្ចូលឈ្មោះ និង button "Submit"។ នៅពេលអ្នកប្រើប្រាស់បញ្ចូលឈ្មោះរបស់ពួកគេ ហើយចុច "Submit" ប្រអប់សារមួយនឹងបង្ហាញឡើងដោយសារអត្ថបទ "Hello, [name]"។

14. ASP.NET Core (Web Development)
ASP.NET Core គឺជា framework ទំនើបសម្រាប់ការអភិវឌ្ឍកម្មវិធី web និង web APIs។ វាគាំទ្រការអភិវឌ្ឍន៍ cross-platform និងមានដំណើរការលឿន។ ផ្នែកនេះគ្របដណ្តប់អំពី MVC architecture, Web APIs, និងការគ្រប់គ្រង authentication និង authorization។

14.1 Introduction to ASP.NET Core
ASP.NET Core គឺជា framework សម្រាប់ការបង្កើតកម្មវិធី web និង web APIs ដែលអាចដំណើរការបានលើ Windows, macOS, និង Linux។ វាត្រូវបានបង្កើតឡើងដើម្បីធ្វើឱ្យការអភិវឌ្ឍន៍ web កាន់តែមានប្រសិទ្ធភាពនិងអាចពង្រីកបាន។

ឧទាហរណ៍នៃ ASP.NET Core project៖

dotnet new webapi -o MyWebApi
14.2 MVC Architecture in ASP.NET
MVC (Model-View-Controller) គឺជារចនាសម្ព័ន្ធសម្រាប់ការអភិវឌ្ឍកម្មវិធី web។ វាបែងចែកកម្មវិធីជា 3 ផ្នែក៖ Model (ទិន្នន័យ), View (ផ្ទាំងអ្នកប្រើប្រាស់), និង Controller (ដែលគ្រប់គ្រងឡូជីខល)។

ឧទាហរណ៍នៃ MVC controller៖

public class HomeController : Controller {
    public IActionResult Index() {
        return View();
    }

    public IActionResult About() {
        ViewData["Message"] = "Your application description page.";
        return View();
    }
}
14.3 Building a Web API with ASP.NET Core
ASP.NET Core ផ្តល់នូវឧបករណ៍ដ៏រឹងមាំសម្រាប់ការបង្កើត Web APIs។ Web APIs អនុញ្ញាតឱ្យអ្នកបង្កើត RESTful services ដែលអាចត្រូវបានប្រើដោយកម្មវិធីផ្សេងៗ។

ឧទាហរណ៍នៃ Web API controller៖

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase {
    [HttpGet]
    public IEnumerable<string> Get() {
        return new string[] { "Product1", "Product2" };
    }

    [HttpGet("{id}")]
    public string Get(int id) {
        return $"Product {id}";
    }
}
14.4 Authentication and Authorization
Authentication គឺជាការផ្ទៀងផ្ទាត់អត្តសញ្ញាណរបស់អ្នកប្រើប្រាស់ ខណៈពេលដែល authorization គឺជាការកំណត់អ្វីដែលអ្នកប្រើប្រាស់អាចធ្វើបាន។ ASP.NET Core ផ្តល់នូវឧបករណ៍សម្រាប់ការគ្រប់គ្រង authentication និង authorization។

ឧទាហរណ៍នៃការកំណត់ authentication៖

public void ConfigureServices(IServiceCollection services) {
    services.AddAuthentication("Bearer")
            .AddJwtBearer("Bearer", options => {
                options.Authority = "https://localhost:5001";
                options.Audience = "api1";
            });
}

public void Configure(IApplicationBuilder app) {
    app.UseAuthentication();
    app.UseAuthorization();
}
15. Unit Testing in C#
Unit testing គឺជាវិធីសាស្រ្តសម្រាប់សាកល្បងកូដដោយបែងចែកវាជាផ្នែកតូចៗ។ វាជួយធានាថាកូដដំណើរការត្រឹមត្រូវនិងអាចពង្រីកបាន។ ផ្នែកនេះគ្របដណ្តប់អំពីការសរសេរ unit tests, mocking, និង test-driven development (TDD)។

15.1 Writing Unit Tests with MSTest and NUnit
MSTest និង NUnit គឺជា frameworks សម្រាប់សរសេរ unit tests នៅក្នុង C#។ ពួកវាផ្តល់នូវ attributes និង methods សម្រាប់ការកំណត់និងដំណើរការ tests។

ឧទាហរណ៍នៃ unit test ជាមួយ MSTest៖

using Microsoft.VisualStudio.TestTools.UnitTesting;

[TestClass]
public class MathTests {
    [TestMethod]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = a + b;

        // Assert
        Assert.AreEqual(8, result);
    }
}
ឧទាហរណ៍នៃ unit test ជាមួយ NUnit៖

using NUnit.Framework;

[TestFixture]
public class MathTests {
    [Test]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = a + b;

        // Assert
        Assert.AreEqual(8, result);
    }
}
15.2 Mocking with Moq
Mocking គឺជាវិធីសាស្រ្តសម្រាប់បង្កើត objects ប្លែកដែលជំនួស dependencies នៅក្នុង unit tests។ Moq គឺជា library ដ៏ពេញនិយមសម្រាប់ mocking នៅក្នុង C#។

ឧទាហរណ៍នៃ mocking ជាមួយ Moq៖

using Moq;

public interface ICalculator {
    int Add(int a, int b);
}

[TestClass]
public class CalculatorTests {
    [TestMethod]
    public void Add_TwoNumbers_ReturnsSum() {
        // Arrange
        var mockCalculator = new Mock<ICalculator>();
        mockCalculator.Setup(x => x.Add(5, 3)).Returns(8);

        // Act
        int result = mockCalculator.Object.Add(5, 3);

        // Assert
        Assert.AreEqual(8, result);
    }
}
15.3 Test-Driven Development (TDD) in C#
Test-Driven Development (TDD) គឺជាវិធីសាស្រ្តសម្រាប់ការអភិវឌ្ឍកូដដោយសរសេរ tests មុនពេលសរសេរកូដដែលធ្វើឱ្យ tests ឆ្លង។ TDD ជួយធានាថាកូដមានគុណភាពខ្ពស់និងអាចពង្រីកបាន។

ឧទាហរណ៍នៃ TDD៖

// Step 1: Write a failing test
[TestMethod]
public void Add_TwoNumbers_ReturnsSum() {
    // Arrange
    var calculator = new Calculator();

    // Act
    int result = calculator.Add(5, 3);

    // Assert
    Assert.AreEqual(8, result);
}

// Step 2: Write the minimal code to pass the test
public class Calculator {
    public int Add(int a, int b) {
        return a + b;
    }
}

// Step 3: Refactor the code (if necessary)
16. Advanced C# Topics
Advanced C# topics គឺជាផ្នែកដែលពង្រីកចំណេះដឹងរបស់អ្នកអំពី C# ដោយគ្របដណ្តប់អំពី reflection, attributes, dependency injection, design patterns, និង microservices។ ផ្នែកនេះជួយអ្នកក្លាយជា developer ដែលមានជំនាញខ្ពស់។

16.1 Reflection in C#
Reflection គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យអ្នកពិនិត្យនិងគ្រប់គ្រង metadata នៃ types, methods, properties, និង fields នៅ runtime។

ឧទាហរណ៍នៃ reflection៖

using System.Reflection;

Type type = typeof(string);
Console.WriteLine("Type Name: " + type.Name);

MethodInfo[] methods = type.GetMethods();
foreach (var method in methods) {
    Console.WriteLine("Method: " + method.Name);
}
16.2 Attributes and Annotations
Attributes គឺជាវិធីដើម្បីបន្ថែម metadata ទៅកាន់ types, methods, properties, និង fields។ ពួកវាត្រូវបានប្រើជាញឹកញាប់ក្នុង serialization, validation, និង dependency injection។

ឧទាហរណ៍នៃ attributes៖

[Serializable]
public class Person {
    [Required]
    public string Name { get; set; }

    [Range(1, 100)]
    public int Age { get; set; }
}
16.3 Dependency Injection (DI)
Dependency Injection (DI) គឺជាវិធីសាស្រ្តសម្រាប់ការគ្រប់គ្រង dependencies នៅក្នុងកម្មវិធី។ វាជួយធ្វើឱ្យកូដកាន់តែអាចធ្វើតេស្តបាននិងអាចពង្រីកបាន។

ឧទាហរណ៍នៃ dependency injection៖

public interface IMessageService {
    void SendMessage(string message);
}

public class EmailService : IMessageService {
    public void SendMessage(string message) {
        Console.WriteLine("Email sent: " + message);
    }
}

public class Notification {
    private readonly IMessageService _messageService;

    public Notification(IMessageService messageService) {
        _messageService = messageService;
    }

    public void Notify(string message) {
        _messageService.SendMessage(message);
    }
}

// Registering services in ASP.NET Core
public void ConfigureServices(IServiceCollection services) {
    services.AddTransient<IMessageService, EmailService>();
}
16.4 Design Patterns (Singleton, Factory, Observer)
Design patterns គឺជាដំណោះស្រាយដែលបានបង្កើតឡើងសម្រាប់បញ្ហាទូទៅនៅក្នុងការអភិវឌ្ឍកម្មវិធី។ ពួកវាជួយធ្វើឱ្យកូដកាន់តែអាចរក្សាទុកបាននិងអាចពង្រីកបាន។

ឧទាហរណ៍នៃ design patterns៖

// Singleton Pattern
public class Singleton {
    private static Singleton _instance;
    private Singleton() {}

    public static Singleton Instance {
        get {
            if (_instance == null) {
                _instance = new Singleton();
            }
            return _instance;
        }
    }
}

// Factory Pattern
public interface IProduct {
    void Create();
}

public class ProductA : IProduct {
    public void Create() {
        Console.WriteLine("Product A created.");
    }
}

public class ProductB : IProduct {
    public void Create() {
        Console.WriteLine("Product B created.");
    }
}

public class ProductFactory {
    public IProduct CreateProduct(string type) {
        switch (type) {
            case "A": return new ProductA();
            case "B": return new ProductB();
            default: throw new ArgumentException("Invalid product type.");
        }
    }
}

// Observer Pattern
public class Subject {
    private List<IObserver> _observers = new List<IObserver>();

    public void Attach(IObserver observer) {
        _observers.Add(observer);
    }

    public void Notify() {
        foreach (var observer in _observers) {
            observer.Update();
        }
    }
}

public interface IObserver {
    void Update();
}

public class Observer : IObserver {
    public void Update() {
        Console.WriteLine("Observer updated.");
    }
}
16.5 Microservices with .NET
Microservices គឺជារចនាសម្ព័ន្ធសម្រាប់ការអភិវឌ្ឍកម្មវិធីដែលបែងចែកកម្មវិធីជាសេវាកម្មតូចៗដែលអាចដំណើរការដាច់ដោយឡែកពីគ្នា។ .NET ផ្តល់នូវឧបករណ៍ដូចជា ASP.NET Core សម្រាប់ការបង្កើត microservices។

ឧទាហរណ៍នៃ microservice៖

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase {
    [HttpGet]
    public IEnumerable<string> Get() {
        return new string[] { "Product1", "Product2" };
    }
}`
  },
  {
    id: 20,
    slug: "kali-linux",
    title: "Kali Linux មូលដ្ឋាន",
    description: "រៀន Kali Linux ដើម្បីខ្លាយជាអ្នកជំនាញ Ethical Hacking",
    level: "កម្រិតខ្ពស់",
    icon: "🐉",
    language: "",
    content: `kali Linux`,
    codeExample: `Kali Linux: From the First Darkness to the Last Darkness
អ្នកនិពន្ធ: Expert Ethical Hacker
ភាសា: ខ្មែរ (ផ្នែកពន្យល់) / English (Code & Commands)
កម្រិត: ចាប់ពីអ្នកចាប់ផ្ដើមដំបូង រហូតដល់អ្នកជំនាញ

Table of Contents
PART 1: Introduction to Kali Linux

Chapter 1: តើ Kali Linux ជាអ្វី?

Chapter 2: ប្រវត្តិ និងការប្រើប្រាស់

Chapter 3: Ethical Hacking vs Illegal Hacking

Chapter 4: ការដំឡើង Kali Linux

PART 2: Linux Basics for Hackers

Chapter 5: File System និង Structure

Chapter 6: Command Line Essential

Chapter 7: User & Permission Management

Chapter 8: Networking Basics

PART 3: Kali Linux Tools Overview

Chapter 9: ការចាត់ថ្នាក់ឧបករណ៍នៅក្នុង Kali

Chapter 10: Information Gathering Tools

Chapter 11: Vulnerability Analysis Tools

Chapter 12: Web Application & Password Attacks Tools

PART 4: Information Gathering & OSINT

Chapter 13: Nmap Mastery

Chapter 14: DNS Enumeration & Subdomain Discovery

Chapter 15: OSINT Techniques

PART 5: Scanning & Enumeration

Chapter 16: Port Scanning Deep Dive

Chapter 17: Service Enumeration

Chapter 18: Banner Grabbing

PART 6: Exploitation with Metasploit

Chapter 19: Metasploit Framework Introduction

Chapter 20: Exploit Vulnerabilities

Chapter 21: Payloads & Reverse Shell

PART 7: Web Application Hacking

Chapter 22: SQL Injection (Basic to Advanced)

Chapter 23: Cross-Site Scripting (XSS)

Chapter 24: CSRF & File Upload Vulnerability

Chapter 25: DVWA Lab Practice

PART 8: Password Attacks

Chapter 26: Brute Force & Dictionary Attack

Chapter 27: Hydra

Chapter 28: John the Ripper

PART 9: Wireless Hacking

Chapter 29: WiFi Security Basics

Chapter 30: Aircrack-ng Suite

PART 10: Privilege Escalation

Chapter 31: Linux Privilege Escalation

Chapter 32: Windows Privilege Escalation

PART 11: Post Exploitation

Chapter 33: Persistence

Chapter 34: Data Exfiltration

Chapter 35: Covering Tracks

PART 12: Real Lab Practice

Chapter 36: Metasploitable 2 Lab

Chapter 37: DVWA Comprehensive Lab

Chapter 38: Step-by-Step Hacking Scenario

PART 13: CTF Challenges

Chapter 39: Beginner CTF Challenges

Chapter 40: Intermediate CTF Challenges

Chapter 41: Advanced CTF Challenges

PART 14: Professional Path

Chapter 42: ក្លាយជា Ethical Hacker អាជីព

Chapter 43: Certifications (CEH, OSCP, eJPT)

Chapter 44: Career Roadmap

PART 15: Final Darkness

Chapter 45: Advanced Hacker Mindset

Chapter 46: Security Philosophy

Chapter 47: Continuous Learning Path

PART 1: Introduction to Kali Linux
Chapter 1: តើ Kali Linux ជាអ្វី?
1.1 សេចក្តីផ្តើម
Kali Linux គឺជាប្រព័ន្ធប្រតិបត្តិការដែលត្រូវបានបង្កើតឡើងជាពិសេសសម្រាប់ការធ្វើតេស្តសន្តិសុខ (Penetration Testing) និងការវាយតម្លៃភាពងាយរងគ្រោះ (Vulnerability Assessment)។ វាត្រូវបានបង្កើតឡើងដោយ Offensive Security ដែលជាក្រុមហ៊ុនឈានមុខគេខាងផ្នែកសន្តិសុខព័ត៌មាន។

រូបភាព 1.1: រូបភាពផ្ទៃតុ Kali Linux បង្ហាញពីរូបតំណាងឧបករណ៍ជាច្រើននៅលើផ្ទៃតុ

1.2 អ្វីដែលធ្វើឱ្យ Kali Linux ពិសេស?
Kali Linux មិនមែនគ្រាន់តែជា Linux ធម្មតាទេ។ វាត្រូវបានរចនាឡើងដោយមានលក្ខណៈពិសេសដូចខាងក្រោម៖

លក្ខណៈពិសេស	ការពិពណ៌នា
Pre-installed Tools	មានឧបករណ៍សន្តិសុខជាង 600 រួចជាស្រេច
Live Boot	អាចប្រើបានដោយមិនចាំបាច់ដំឡើង
Custom Kernel	ខឺណែលត្រូវបានកែសម្រួលសម្រាប់ការវាយប្រហារ Wi-Fi
Forensics Mode	របៀបស៊ើបអង្កេតដោយមិនប៉ះពាល់ទិន្នន័យ
ARM Support	ដំណើរការលើ Raspberry Pi, Android ជាដើម
1.3 ការប្រើប្រាស់សំខាន់ៗ
Kali Linux ត្រូវបានប្រើប្រាស់ដោយ៖

Penetration Testers - អ្នកសាកល្បងការជ្រៀតចូល

Security Researchers - អ្នកស្រាវជ្រាវសន្តិសុខ

CTF Players - អ្នកប្រកួត Capture The Flag

System Administrators - អ្នកគ្រប់គ្រងប្រព័ន្ធ

Students - និស្សិតផ្នែកសន្តិសុខព័ត៌មាន

1.4 តម្រូវការប្រព័ន្ធ
រូបភាព 1.2: តារាងតម្រូវការប្រព័ន្ធ

សមាសភាគ	អប្បបរមា	ណែនាំ
Processor	1 GHz (x86)	2 GHz Dual Core
RAM	1 GB	4 GB+
Storage	20 GB	50 GB+
Graphics	1024x768	1920x1080
Network	Wi-Fi Adapter	Wi-Fi Adapter (សម្រាប់ Wireless Hacking)
1.5 ហេតុអ្វីត្រូវរៀន Kali Linux?
ក្នុងនាមជា Ethical Hacker ការយល់ដឹងអំពី Kali Linux គឺជារឿងចាំបាច់ព្រោះ៖

ឧបករណ៍គ្រប់គ្រាន់ - អ្នកមិនចាំបាច់ដំឡើងឧបករណ៍ម្តងមួយៗទេ

សហគមន៍ធំ - មានការគាំទ្រច្រើន

ឯកសារច្រើន - មានឯកសារបង្រៀនជាច្រើន

ធ្វើបច្ចុប្បន្នភាពញឹកញាប់ - ឧបករណ៍តែងតែត្រូវបានធ្វើបច្ចុប្បន្នភាព

1.6 ការព្រមានអំពីការប្រើប្រាស់
⚠️ សំខាន់៖
ឧបករណ៍នៅក្នុង Kali Linux អាចត្រូវបានប្រើសម្រាប់គោលបំណងខុសច្បាប់។ អ្នកត្រូវតែ៖

ទទួលបានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរមុនពេលសាកល្បងប្រព័ន្ធណាមួយ

ប្រើប្រាស់តែលើប្រព័ន្ធដែលអ្នកមានសិទ្ធិប៉ុណ្ណោះ

អនុវត្តតាមច្បាប់កុំព្យូទ័រនៃប្រទេសរបស់អ្នក

Chapter 2: ប្រវត្តិ និងការប្រើប្រាស់
2.1 ប្រវត្តិនៃការវិវត្ត
Kali Linux មានឫសគល់ជ្រៅនៅក្នុងប្រវត្តិសាស្ត្រនៃការធ្វើតេស្តសន្តិសុខ៖

WHAX (2000) - ការចាប់ផ្តើមដំបូង

BackTrack (2006-2012) - ការបញ្ចូលគ្នារវាង WHAX និង Auditor

Kali Linux (2013-present) - ការកសាងឡើងវិញពី Debian

រូបភាព 2.1: រូបភាពប្រៀបធៀបចំណុចប្រទាក់ BackTrack និង Kali Linux

2.2 កំណែសំខាន់ៗ
កំណែ	ឆ្នាំ	ការផ្លាស់ប្តូរសំខាន់
Kali 1.0	2013	ការចេញផ្សាយដំបូង
Kali 2.0 (Sana)	2015	ប្តូរទៅកាន់កំណែ Rolling Release
Kali 2019.4	2019	បន្ថែមរបៀប Undercover Mode
Kali 2020.1	2020	ប្តូរពាក្យសម្ងាត់ពី toor ទៅ kali
Kali 2023.x	2023	បន្ថែម Kali Purple (Defensive Security)
2.3 ករណីប្រើប្រាស់ក្នុងពិភពពិត
ករណីសិក្សា 2.1: ការធ្វើតេស្តសន្តិសុខរបស់ធនាគារ

ធនាគារធំមួយបានជួលក្រុម Ethical Hacker ឱ្យធ្វើតេស្តប្រព័ន្ធ Internet Banking។ ដោយប្រើ Kali Linux ពួកគេបានរកឃើញ SQL Injection នៅក្នុងទម្រង់បញ្ចូលលេខគណនី ដែលអាចឱ្យពួកគេចូលទៅកាន់ទិន្នន័យអតិថិជនជាង 10,000 នាក់។ បន្ទាប់ពីការរាយការណ៍ ធនាគារបានជួសជុលរន្ធសុវត្ថិភាពនេះភ្លាមៗ។

2.4 Kali Linux នៅក្នុងឧស្សាហកម្ម
ក្រុមហ៊ុនធំៗដែលប្រើប្រាស់ Kali Linux៖

Google - សម្រាប់ការសាកល្បងសន្តិសុខផ្ទៃក្នុង

Microsoft - សម្រាប់ការស្រាវជ្រាវសន្តិសុខ

NSA - សម្រាប់ការបណ្តុះបណ្តាលអ្នកជំនាញសន្តិសុខ

ធនាគារជាតិកម្ពុជា - សម្រាប់ការវាយតម្លៃប្រព័ន្ធធនាគារ

Chapter 3: Ethical Hacking vs Illegal Hacking
3.1 ការបែងចែកសំខាន់
រូបភាព 3.1: តារាងប្រៀបធៀប Ethical vs Illegal Hacking

ទិដ្ឋភាព	Ethical Hacking	Illegal Hacking
ការអនុញ្ញាត	មានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរ	គ្មានការអនុញ្ញាត
គោលបំណង	ការពារ និងកែលម្អសន្តិសុខ	បំផ្លាញ លួច ឬផលប្រយោជន៍ផ្ទាល់ខ្លួន
ការរាយការណ៍	រាយការណ៍រន្ធសុវត្ថិភាពទាំងអស់	លាក់បាំង ឬលក់ព័ត៌មាន
ផលវិបាកផ្លូវច្បាប់	គ្មាន (បើអនុវត្តតាមកិច្ចសន្យា)	ពិន័យ និងជាប់ពន្ធនាគារ
3.2 ប្រភេទនៃ Ethical Hacker
White Hat Hacker - អ្នកដែលធ្វើការដោយមានការអនុញ្ញាត

Grey Hat Hacker - អ្នកដែលចូលដោយគ្មានការអនុញ្ញាត ប៉ុន្តែរាយការណ៍រន្ធសុវត្ថិភាព

Black Hat Hacker - អ្នកដែលចូលដោយគ្មានការអនុញ្ញាត និងប្រើប្រាស់សម្រាប់គោលបំណងខុសច្បាប់

3.3 ច្បាប់កុំព្យូទ័រនៅកម្ពុជា
នៅប្រទេសកម្ពុជា ច្បាប់ស្តីពីកុំព្យូទ័រឆ្នាំ ២០១៥ បានកំណត់ថា៖

មាត្រា ៤២៥ - ការចូលប្រព័ន្ធកុំព្យូទ័រដោយគ្មានការអនុញ្ញាត ត្រូវផ្តន្ទាទោសពី ១ ខែ ដល់ ១ ឆ្នាំ

មាត្រា ៤២៧ - ការបំផ្លាញទិន្នន័យកុំព្យូទ័រ ត្រូវផ្តន្ទាទោសពី ២ ឆ្នាំ ដល់ ៥ ឆ្នាំ

3.4 ក្រមសីលធម៌របស់ Ethical Hacker
Ethical Hacker Pledge:

text
ខ្ញុំសូមសន្យាថា៖
1. នឹងមិនប្រើចំណេះដឹងរបស់ខ្ញុំដើម្បីបំផ្លាញអ្នកដទៃ
2. នឹងទទួលបានការអនុញ្ញាតមុនពេលធ្វើការសាកល្បង
3. នឹងរាយការណ៍រន្ធសុវត្ថិភាពទាំងអស់ទៅកាន់ម្ចាស់ប្រព័ន្ធ
4. នឹងរក្សាការសម្ងាត់ព័ត៌មានរបស់អតិថិជន
5. នឹងបន្តរៀនសូត្រដើម្បីការពារសន្តិសុខតាមអ៊ីនធឺណិត
3.5 ករណីសិក្សា៖ ផលវិបាកនៃការ Hacking ខុសច្បាប់
ករណី ១៖ យុវជនខ្មែរម្នាក់បានចូលទៅកាន់គេហទំព័ររបស់ក្រសួងមួយ ហើយផ្លាស់ប្តូរទំព័រដើម។ លោកត្រូវបានចាប់ខ្លួន និងជាប់ពន្ធនាគាររយៈពេល ៦ ខែ។

មេរៀន៖ សូម្បីតែការ Hacking ដែលគ្មានបំណងបំផ្លាញក៏ដោយ ក៏នៅតែខុសច្បាប់ដែរ។

Chapter 4: ការដំឡើង Kali Linux
4.1 វិធីសាស្ត្រដំឡើង
មានវិធីសំខាន់ៗចំនួន ៣ ក្នុងការប្រើប្រាស់ Kali Linux៖

ការដំឡើងលើ Virtual Machine (ណែនាំសម្រាប់អ្នកចាប់ផ្តើម)

ការដំឡើង Dual Boot (ប្រើជាមួយ Windows/Mac)

Live USB Boot (ប្រើដោយមិនចាំបាច់ដំឡើង)

4.2 ការដំឡើងលើ VirtualBox (Step-by-Step)
រូបភាព 4.1: រូបភាពអេក្រង់ VirtualBox នៅពេលបង្កើត Virtual Machine ថ្មី

ជំហានទី ១៖ ទាញយកកម្មវិធី

bash
# ទាញយក VirtualBox ពី
https://www.virtualbox.org/wiki/Downloads

# ទាញយក Kali Linux ISO ពី
https://www.kali.org/get-kali/
# ជ្រើសរើស "Installer Images" និងទាញយក Kali Linux 64-bit
ជំហានទី ២៖ បង្កើត Virtual Machine ថ្មី

បើក VirtualBox ហើយចុច New

ដាក់ឈ្មោះ៖ Kali Linux

Type: Linux, Version: Debian (64-bit)

Memory Size: 2048 MB (ឬច្រើនជាងនេះបើមាន RAM គ្រប់)

Hard Disk: Create a virtual hard disk now

Hard Disk File Type: VDI

Storage: Dynamically allocated

File Size: 20 GB

រូបភាព 4.2: រូបភាពបង្ហាញការកំណត់ RAM និង Hard Disk

ជំហានទី ៣៖ កំណត់រចនាសម្ព័ន្ធ VM

bash
1. ជ្រើសរើស VM ដែលទើបបង្កើត
2. ចុច Settings → System → Processor
   - Processor(s): 2 CPU
3. Settings → Display
   - Video Memory: 128 MB
   - Enable 3D Acceleration
4. Settings → Network
   - Adapter 1: NAT (សម្រាប់ចេញអ៊ីនធឺណិត)
   - Adapter 2: Host-only Adapter (សម្រាប់ភ្ជាប់ជាមួយម៉ាស៊ីនមេ)
5. Settings → Storage
   - ចុច Empty → Optical Drive → Choose Disk File
   - ជ្រើសរើសឯកសារ Kali Linux ISO
ជំហានទី ៤៖ ចាប់ផ្តើមដំឡើង

ចុច Start ដើម្បីចាប់ផ្តើម VM

ជ្រើសរើស Graphical Install

ជ្រើសរើសភាសា៖ English (ឬ Khmer បើមាន)

កំណត់ទីតាំង៖ Cambodia

Keyboard: American English

Hostname: kali (ឬឈ្មោះដែលអ្នកចង់)

Domain name: (ទុកចន្លោះ)

Root password: កំណត់ពាក្យសម្ងាត់រឹងមាំ (ឧ. Kali@2024)

Full name: Kali User

Username: kali

Password: កំណត់ពាក្យសម្ងាត់សម្រាប់អ្នកប្រើ

Partition disks: Guided - use entire disk

Select disk: SCSI (0,0,0)

Partition scheme: All files in one partition

Finish partitioning and write changes to disk → Yes

រូបភាព 4.3: រូបភាពបង្ហាញអេក្រង់កំឡុងពេលដំឡើង

ជំហានទី ៥៖ បញ្ចប់ការដំឡើង

រង់ចាំការដំឡើងប្រព័ន្ធ

នៅពេលសួរអំពី Network mirror ជ្រើស Yes

Software selection: ជ្រើសរើស Kali Linux desktop environment និង Xfce (ឬ GNOME)

Install GRUB boot loader: Yes

ចុច Continue ដើម្បីបញ្ចប់

យក ISO ចេញពី optical drive ហើយចុច Reboot

4.3 ការដំឡើង Guest Additions
បន្ទាប់ពីដំឡើងរួច អ្នកគួរតែដំឡើង VirtualBox Guest Additions ដើម្បីបង្កើនប្រសិទ្ធភាព៖

bash
# បើក Terminal ហើយដំណើរការ
sudo apt update
sudo apt install -y virtualbox-guest-x11

# បន្ទាប់មក ចាប់ផ្តើម VM ឡើងវិញ
sudo reboot
4.4 ការកំណត់រចនាសម្ព័ន្ធដំបូង
បន្ទាប់ពីចូលប្រព័ន្ធ (username: kali, password: ដែលអ្នកបានកំណត់) សូមធ្វើការកំណត់ដូចខាងក្រោម៖

bash
# 1. ធ្វើបច្ចុប្បន្នភាពប្រព័ន្ធ
sudo apt update
sudo apt full-upgrade -y

# 2. ដំឡើងឧបករណ៍បន្ថែម
sudo apt install -y kali-linux-default

# 3. កំណត់ពាក្យសម្ងាត់ root (បើចាំបាច់)
sudo passwd root

# 4. បើកសេវា SSH (សម្រាប់ការចូលពីចម្ងាយ)
sudo systemctl enable ssh
sudo systemctl start ssh
4.5 ការដំឡើង Live USB
សម្រាប់អ្នកដែលចង់ប្រើ Kali Linux ដោយមិនចាំបាច់ដំឡើងលើថាសរឹង៖

bash
# នៅលើ Windows ប្រើ Rufus
1. ទាញយក Rufus ពី https://rufus.ie
2. ដោត USB (យ៉ាងតិច 8 GB)
3. បើក Rufus
4. Device: ជ្រើសរើស USB Drive
5. Boot selection: ជ្រើសរើស Kali Linux ISO
6. Partition scheme: MBR
7. Target system: BIOS or UEFI
8. ចុច START
9. ជ្រើសរើស "Write in ISO Image mode"
10. រង់ចាំរហូតដល់បញ្ចប់

# នៅលើ Linux
sudo dd if=kali-linux-2024.1-live-amd64.iso of=/dev/sdb bs=4M status=progress
4.6 ការដោះស្រាយបញ្ហាទូទៅ
បញ្ហា	ដំណោះស្រាយ
Wi-Fi មិនឃើញ	ដំឡើង driver បន្ថែម៖ sudo apt install firmware-iwlwifi
សំឡេងមិនដំណើរការ	sudo apt install pulseaudio && sudo reboot
អេក្រង់តូច	ដំឡើង Guest Additions ឬ VMware Tools
ចូលមិនបាន	ចូលរបៀប Recovery Mode ហើយកំណត់ពាក្យសម្ងាត់ថ្មី
Network មិនដំណើរការ	sudo systemctl restart NetworkManager
Chapter 5: File System និង Structure
5.1 ការយល់ដឹងអំពី Filesystem Hierarchy
Linux ប្រើប្រាស់រចនាសម្ព័ន្ធ Filesystem Hierarchy Standard (FHS) ដែលមានលក្ខណៈខុសពី Windows។ នេះជាថតសំខាន់ៗ៖

ថត	ការពិពណ៌នា	ឧទាហរណ៍
/	Root directory - ថតឫសនៃប្រព័ន្ធទាំងមូល	-
/bin	Binary executables - កម្មវិធីមូលដ្ឋាន	ls, cp, mv
/boot	Boot loader files - ឯកសារសម្រាប់ចាប់ផ្ដើម	vmlinuz, initrd.img
/dev	Device files - ឯកសារតំណាងឧបករណ៍	/dev/sda, /dev/null
/etc	Configuration files - ឯកសារកំណត់រចនាសម្ព័ន្ធ	/etc/passwd, /etc/hosts
/home	User home directories - ថតផ្ទាល់ខ្លួនរបស់អ្នកប្រើ	/home/kali
/lib	Libraries - បណ្ណាល័យសម្រាប់កម្មវិធី	/lib/x86_64-linux-gnu
/media	Removable media - USB, CD-ROM	/media/kali/USB
/mnt	Mount point for temporary filesystems	/mnt/data
/opt	Optional software - កម្មវិធីបន្ថែម	/opt/nessus
/proc	Process information (virtual filesystem)	/proc/cpuinfo
/root	Home directory of root user	/root
/sbin	System binaries - កម្មវិធីសម្រាប់អ្នកគ្រប់គ្រង	ifconfig, reboot
/tmp	Temporary files - ឯកសារបណ្ដោះអាសន្ន	-
/usr	User programs and data	/usr/bin, /usr/share
/var	Variable data - logs, mail, spool	/var/log, /var/www
5.2 ការរុករកថត
bash
# បង្ហាញថតបច្ចុប្បន្ន
pwd
# លទ្ធផល៖ /home/kali

# ប្តូរទៅកាន់ថត root
cd /

# ប្តូរទៅកាន់ថត home
cd ~
# ឬ
cd /home/kali

# ត្រលប់ទៅថតមុន
cd -

# បង្ហាញឯកសារក្នុងថត
ls
ls -l          # បង្ហាញលម្អិត
ls -la         # បង្ហាញទាំងឯកសារលាក់
ls -lh         # បង្ហាញទំហំជា human-readable
5.3 ការបង្កើត និងលុបថត/ឯកសារ
bash
# បង្កើតថតថ្មី
mkdir myfolder
mkdir -p dir1/dir2/dir3    # បង្កើតថតតាមឋានានុក្រម

# បង្កើតឯកសារ
touch file.txt              # បង្កើតឯកសារទទេ
echo "Hello" > file.txt     # បង្កើតឯកសារដោយមានខ្លឹមសារ

# ចម្លងឯកសារ
cp file.txt file_copy.txt
cp -r myfolder myfolder_backup   # ចម្លងថត

# ផ្លាស់ទី/ប្តូរឈ្មោះ
mv file.txt newfile.txt
mv file.txt /tmp/

# លុបឯកសារ
rm file.txt
rm -r myfolder                    # លុបថត
rm -rf myfolder                   # លុបថតដោយមិនសួរ
5.4 ការមើលខ្លឹមសារឯកសារ
bash
# មើលឯកសារទាំងមូល
cat file.txt
cat /etc/passwd

# មើលដោយប្រើ less (អាចរមូរបាន)
less /var/log/syslog
# ចុច q ដើម្បីចេញ

# មើលតែប៉ុន្មានជួរដំបូង
head -n 10 /etc/passwd

# មើលតែប៉ុន្មានជួរចុងក្រោយ
tail -n 10 /var/log/syslog
tail -f /var/log/syslog          # តាមដានការបន្ថែមថ្មី

# រាប់ចំនួនជួរ
wc -l /etc/passwd
5.5 ការស្វែងរកឯកសារ
bash
# ស្វែងរកឯកសារតាមឈ្មោះ
find / -name "*.conf" 2>/dev/null

# ស្វែងរកឯកសារដែលបានកែប្រែក្នុងរយៈពេល 7 ថ្ងៃ
find /home -mtime -7

# ស្វែងរកឯកសារដែលមានទំហំធំជាង 100MB
find / -size +100M 2>/dev/null

# ប្រើ locate (លឿនជាង)
sudo updatedb                     # ធ្វើបច្ចុប្បន្នភាព database
locate nmap
5.6 Lab Practice: File System Exploration
លំហាត់ទី ១៖ ស្វែងយល់ពីរចនាសម្ព័ន្ធ Filesystem

bash
# 1. ចូលទៅកាន់ថត root
cd /

# 2. បង្ហាញថតទាំងអស់
ls -l

# 3. ចូលទៅកាន់ /etc ហើយស្វែងរកឯកសារកំណត់រចនាសម្ព័ន្ធរបស់ SSH
cd /etc/ssh
ls -la
cat ssh_config

# 4. មើលព័ត៌មានអំពី CPU
cat /proc/cpuinfo

# 5. មើលព័ត៌មានអំពី Memory
cat /proc/meminfo

# 6. បង្កើតថតសម្រាប់ធ្វើការ
mkdir ~/kali_lab
cd ~/kali_lab

# 7. បង្កើតឯកសារសាកល្បង
echo "Kali Linux is awesome!" > test.txt

# 8. ចម្លងឯកសារទៅ /tmp
cp test.txt /tmp/

# 9. លុបឯកសារនៅក្នុងថតបច្ចុប្បន្ន
rm test.txt
Chapter 6: Command Line Essential
6.1 សេចក្តីផ្តើមអំពី Shell
Shell គឺជាកម្មវិធីដែលធ្វើជាអ្នកបកប្រែពាក្យបញ្ជារវាងអ្នកប្រើ និងខឺណែល។ Kali Linux ប្រើ Bash (Bourne Again SHell) ជា default។

6.2 ពាក្យបញ្ជាមូលដ្ឋាន
ពាក្យបញ្ជា	មុខងារ	ឧទាហរណ៍
pwd	បង្ហាញថតបច្ចុប្បន្ន	pwd
ls	បង្ហាញឯកសារក្នុងថត	ls -la
cd	ប្តូរថត	cd /etc
mkdir	បង្កើតថត	mkdir newdir
rmdir	លុបថតទទេ	rmdir emptydir
rm	លុបឯកសារ/ថត	rm -rf dir
cp	ចម្លង	cp file1 file2
mv	ផ្លាស់ទី/ប្តូរឈ្មោះ	mv old new
touch	បង្កើតឯកសារទទេ	touch file.txt
cat	បង្ហាញខ្លឹមសារ	cat file.txt
echo	បង្ហាញអត្ថបទ	echo "Hello"
man	បង្ហាញសៀវភៅណែនាំ	man nmap
clear	សម្អាតអេក្រង់	clear
6.3 ការប្រើប្រាស់ Wildcards
Wildcards ជួយឱ្យយើងធ្វើការជាមួយឯកសារច្រើនក្នុងពេលតែមួយ៖

bash
# * (asterisk) - តំណាងឱ្យតួអក្សរណាមួយ
ls *.txt          # បង្ហាញឯកសារ .txt ទាំងអស់
rm *.log          # លុបឯកសារ .log ទាំងអស់

# ? (question mark) - តំណាងឱ្យតួអក្សរមួយ
ls file?.txt      # file1.txt, file2.txt, ប៉ុន្តែមិន file10.txt

# [] (brackets) - តំណាងឱ្យតួអក្សរក្នុងជួរ
ls file[0-9].txt  # file0.txt, file1.txt, ..., file9.txt
ls file[a-z].txt  # filea.txt, fileb.txt, ...
6.4 Input/Output Redirection
bash
# បញ្ជូនលទ្ធផលទៅកាន់ឯកសារ (> សរសេរជាន់ពីលើ)
echo "Hello" > output.txt

# បន្ថែមលទ្ធផលទៅឯកសារ (>>)
echo "World" >> output.txt

# បញ្ជូនកំហុសទៅកាន់ឯកសារ (2>)
ls /nonexistent 2> error.txt

# បញ្ជូនលទ្ធផលទាំងពីរទៅកាន់ឯកសារដូចគ្នា
ls /home /nonexistent &> all_output.txt

# ប្រើប្រាស់ pipe (|) ដើម្បីបញ្ជូនលទ្ធផលទៅកាន់ពាក្យបញ្ជាផ្សេង
cat /etc/passwd | grep root
ps aux | grep apache
6.5 ការប្រើប្រាស់ grep
grep គឺជាឧបករណ៍សម្រាប់ស្វែងរកអត្ថបទក្នុងឯកសារ៖

bash
# ស្វែងរកពាក្យ root ក្នុង /etc/passwd
grep "root" /etc/passwd

# ស្វែងរកដោយមិនគិតពីអក្សរធំ-តូច
grep -i "error" /var/log/syslog

# បង្ហាញលេខជួរ
grep -n "root" /etc/passwd

# បង្ហាញជួរមុន និងក្រោយ
grep -B 2 -A 2 "root" /etc/passwd

# ស្វែងរកឯកសារទាំងអស់ក្នុងថត
grep -r "password" /etc/

# ប្រើ regular expressions
grep "^root" /etc/passwd           # ជួរដែលចាប់ផ្ដើមដោយ root
grep "bash$" /etc/passwd           # ជួរដែលបញ្ចប់ដោយ bash
6.6 ការគ្រប់គ្រងដំណើរការ
bash
# បង្ហាញដំណើរការដែលកំពុងដំណើរការ
ps aux
ps -ef

# បង្ហាញដំណើរការក្នុងទម្រង់ tree
pstree

# បញ្ឈប់ដំណើរការដោយ PID
kill 1234

# បញ្ឈប់ដំណើរការដោយឈ្មោះ
pkill firefox
killall firefox

# បង្ខំឱ្យបញ្ឈប់
kill -9 1234

# ដំណើរការកម្មវិធីក្នុងផ្ទៃខាងក្រោយ
nmap -sS 192.168.1.0/24 &

# បង្ហាញដំណើរការផ្ទៃខាងក្រោយ
jobs

# នាំដំណើរការមកផ្ទៃខាងមុខ
fg %1

# បញ្ឈប់ដំណើរការបណ្ដោះអាសន្ន (Ctrl+Z)
6.7 ការបង្កើត Script សាមញ្ញ
bash
# បង្កើតឯកសារ script
nano myscript.sh

# បន្ថែមខ្លឹមសារ
#!/bin/bash
echo "Starting scan..."
nmap -sV 192.168.1.1
echo "Scan completed!"

# ធ្វើឱ្យ script អាចដំណើរការបាន
chmod +x myscript.sh

# ដំណើរការ script
./myscript.sh
6.8 Lab Practice: Command Line Mastery
លំហាត់ទី ១៖ បង្កើតថត និងឯកសារ

bash
# 1. បង្កើតថត lab1
mkdir ~/lab1
cd ~/lab1

# 2. បង្កើតឯកសារ 10 ដែលមានឈ្មោះ file1.txt ដល់ file10.txt
touch file{1..10}.txt

# 3. បន្ថែមអត្ថបទទៅក្នុងឯកសារ file1.txt
echo "This is file 1" > file1.txt

# 4. ចម្លងឯកសារ file1.txt ទៅ file11.txt
cp file1.txt file11.txt

# 5. ស្វែងរកឯកសារទាំងអស់ដែលមានពាក្យ "file"
ls | grep "file"

# 6. លុបឯកសារ .txt ទាំងអស់
rm *.txt
លំហាត់ទី ២៖ ការប្រើប្រាស់ pipes និង grep

bash
# 1. បង្ហាញតែជួរដែលមានពាក្យ "root" ក្នុង /etc/passwd
cat /etc/passwd | grep root

# 2. រាប់ចំនួនអ្នកប្រើដែលប្រើ bash
cat /etc/passwd | grep bash | wc -l

# 3. បង្ហាញឯកសារក្នុង /var/log ដែលត្រូវបានកែប្រែក្នុងរយៈពេល 1 ថ្ងៃ
find /var/log -type f -mtime -1 2>/dev/null

# 4. ស្វែងរកដំណើរការ apache
ps aux | grep apache
Chapter 7: User & Permission Management
7.1 ការយល់ដឹងអំពី Users និង Groups
នៅក្នុង Linux អ្នកប្រើប្រាស់នីមួយៗមាន UID (User ID) និង Group ID (GID)។

bash
# មើលអ្នកប្រើទាំងអស់
cat /etc/passwd

# ទម្រង់នៃ /etc/passwd
# username:password:UID:GID:comment:home:shell
root:x:0:0:root:/root:/bin/bash
kali:x:1000:1000:Kali,,,:/home/kali:/bin/bash

# មើលក្រុមទាំងអស់
cat /etc/group

# មើលព័ត៌មានអ្នកប្រើបច្ចុប្បន្ន
whoami
id
7.2 ការបង្កើត និងគ្រប់គ្រងអ្នកប្រើ
bash
# បង្កើតអ្នកប្រើថ្មី
sudo useradd john
sudo useradd -m -s /bin/bash jane      # -m បង្កើត home directory

# កំណត់ពាក្យសម្ងាត់
sudo passwd john

# បង្កើតក្រុម
sudo groupadd developers

# បន្ថែមអ្នកប្រើទៅក្នុងក្រុម
sudo usermod -a -G developers john
sudo usermod -aG sudo jane            # បន្ថែមទៅក្រុម sudo

# មើលក្រុមរបស់អ្នកប្រើ
groups john
id john

# លុបអ្នកប្រើ
sudo userdel john
sudo userdel -r john                  # លុបទាំង home directory
7.3 ការយល់ដឹងអំពី Permissions
Linux permissions មាន 3 ប្រភេទសម្រាប់ 3 ក្រុម៖

User (u) - ម្ចាស់ឯកសារ

Group (g) - ក្រុមរបស់ឯកសារ

Others (o) - អ្នកដទៃ

ប្រភេទនៃការអនុញ្ញាត៖

r (read) - អានឯកសារ / 4

w (write) - សរសេរឯកសារ / 2

x (execute) - ដំណើរការឯកសារ / 1

bash
# មើល permissions
ls -l file.txt
# -rw-r--r-- 1 kali kali 0 Jan 1 10:00 file.txt
# ^ ^^^ ^^^ ^^^
# | |   |   └─ others (read)
# | |   └───── group (read)
# | └───────── user (read, write)
# └─────────── type (-=file, d=directory)
7.4 ការផ្លាស់ប្តូរ Permissions
bash
# ប្រើ chmod ជាមួយ symbolic mode
chmod u+x file.txt        # បន្ថែម execute សម្រាប់ user
chmod g-w file.txt        # ដក write សម្រាប់ group
chmod o=r file.txt        # កំណត់ read សម្រាប់ others
chmod u=rwx,g=rx,o=r file.txt

# ប្រើ chmod ជាមួយ numeric mode (octal)
# 4 = read, 2 = write, 1 = execute
chmod 755 file.txt        # rwxr-xr-x
chmod 644 file.txt        # rw-r--r--
chmod 600 file.txt        # rw-------
chmod 777 file.txt        # rwxrwxrwx (កុំប្រើ!)

# ផ្លាស់ប្តូរម្ចាស់ឯកសារ
sudo chown john file.txt
sudo chown john:developers file.txt   # ផ្លាស់ប្តូរទាំង user និង group

# ផ្លាស់ប្តូរក្រុមឯកសារ
sudo chgrp developers file.txt
7.5 Special Permissions
Linux មាន special permissions 3 ប្រភេទ៖

SUID (Set User ID) - ដំណើរការដោយសិទ្ធិរបស់ម្ចាស់ឯកសារ

SGID (Set Group ID) - ដំណើរការដោយសិទ្ធិរបស់ក្រុម

Sticky Bit - ការពារការលុបឯកសារដោយអ្នកដទៃ

bash
# កំណត់ SUID
chmod u+s /usr/bin/passwd
# ឬ numeric: 4xxx
chmod 4755 /usr/bin/passwd

# កំណត់ SGID
chmod g+s /usr/bin/locate
# numeric: 2xxx
chmod 2755 /usr/bin/locate

# កំណត់ Sticky Bit លើថត
chmod +t /tmp
# numeric: 1xxx
chmod 1777 /tmp

# ស្វែងរកឯកសារដែលមាន SUID
find / -perm -4000 2>/dev/null
7.6 ការប្រើប្រាស់ sudo
sudo អនុញ្ញាតឱ្យអ្នកប្រើធម្មតាដំណើរការពាក្យបញ្ជាដោយសិទ្ធិ root៖

bash
# កំណត់រចនាសម្ព័ន្ធ sudo
sudo visudo

# បន្ថែមអ្នកប្រើទៅក្នុងក្រុម sudo
sudo usermod -aG sudo username

# ដំណើរការពាក្យបញ្ជាជា root
sudo apt update

# ប្តូរទៅជា root user
sudo -i
sudo su -

# ដំណើរការពាក្យបញ្ជាជាអ្នកប្រើផ្សេង
sudo -u john whoami
Chapter 8: Networking Basics
8.1 គំនិតមូលដ្ឋាននៃបណ្តាញ
មុនពេលចាប់ផ្តើម Hacking អ្នកត្រូវយល់ពីគោលការណ៍បណ្តាញ៖

OSI Model (7 Layers)

Physical - ខ្សែកាប, រលកវិទ្យុ

Data Link - MAC addresses, Switches

Network - IP addresses, Routers

Transport - TCP/UDP, Ports

Session - ការគ្រប់គ្រងការតភ្ជាប់

Presentation - ការបំប្លែងទិន្នន័យ

Application - HTTP, FTP, SSH

8.2 IP Addresses និង Subnetting
bash
# មើល IP address របស់អ្នក
ip addr show
# ឬ
ifconfig

# ប្រភេទ IP
# IPv4: 192.168.1.100 (32-bit)
# IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334

# Private IP ranges
# 10.0.0.0 - 10.255.255.255 (Class A)
# 172.16.0.0 - 172.31.255.255 (Class B)
# 192.168.0.0 - 192.168.255.255 (Class C)

# Subnet mask សាមញ្ញ
# /24 = 255.255.255.0 (256 hosts)
# /16 = 255.255.0.0 (65536 hosts)
# /8 = 255.0.0.0 (16 million hosts)
8.3 ការកំណត់បណ្តាញក្នុង Kali
bash
# បង្ហាញតារាង routing
ip route show
route -n

# បន្ថែម default gateway
sudo ip route add default via 192.168.1.1

# កំណត់ IP address ឋិតិវន្ត
sudo ip addr add 192.168.1.100/24 dev eth0

# បើក និងបិទ interface
sudo ip link set eth0 up
sudo ip link set eth0 down

# កំណត់ DNS
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
8.4 ការធ្វើតេស្តការតភ្ជាប់
bash
# ping - តេស្តការតភ្ជាប់
ping google.com
ping -c 4 8.8.8.8

# traceroute - បង្ហាញផ្លូវដែល packet ឆ្លងកាត់
traceroute google.com

# mtr - ការរួមបញ្ចូលគ្នារវាង ping និង traceroute
mtr google.com

# netstat - បង្ហាញការតភ្ជាប់បណ្តាញ
netstat -tulpn
netstat -ano

# ss - កំណែថ្មីរបស់ netstat
ss -tulpn
8.5 TCP/IP និង Ports
Ports គឺជាច្រកចូលសម្រាប់សេវាកម្មផ្សេងៗ៖

Port	Protocol	Service	ការពិពណ៌នា
20,21	TCP	FTP	File Transfer
22	TCP	SSH	Secure Shell
23	TCP	Telnet	Remote Access (មិនសុវត្ថិភាព)
25	TCP	SMTP	Email
53	TCP/UDP	DNS	Domain Name System
80	TCP	HTTP	Web (មិនសុវត្ថិភាព)
443	TCP	HTTPS	Web Secure
445	TCP	SMB	Windows File Sharing
3306	TCP	MySQL	Database
5432	TCP	PostgreSQL	Database
8080	TCP	HTTP Proxy	Alternative HTTP
bash
# មើល ports ដែលកំពុងបើក
sudo netstat -tulpn
sudo lsof -i
8.6 DNS Basics
bash
# ស្វែងរក DNS record
nslookup google.com
dig google.com

# ស្វែងរក reverse DNS
nslookup 8.8.8.8

# មើល DNS cache
sudo systemd-resolve --statistics

# កំណត់ DNS server បណ្ដោះអាសន្ន
echo "nameserver 1.1.1.1" | sudo tee /etc/resolv.conf
8.7 Firewall Basics (iptables/nftables)
bash
# មើលច្បាប់ firewall បច្ចុប្បន្ន
sudo iptables -L

# បិទ firewall (សម្រាប់ការធ្វើតេស្តតែប៉ុណ្ណោះ)
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
sudo iptables -F

# ទប់ស្កាត់ IP
sudo iptables -A INPUT -s 192.168.1.100 -j DROP

# អនុញ្ញាតតែ SSH
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -j DROP

# រក្សាទុកច្បាប់
sudo iptables-save > /etc/iptables/rules.v4
`
  },
  
    {
    id: 21,
    slug: "Basic Detworking concept",
    title: "Basic Detworking concept មូលដ្ឋាន",
    description: "រៀន Basic Detworking concept ដើម្បីខ្លាយជាអ្នកជំនាញ Ethical Hacking",
    level: "កម្រិតខ្ពស់",
    icon: "🐉",
    language: "",
    content: `Basic Detworking concept`,
    codeExample:`មូលដ្ឋានគ្រឹះបណ្តាញកុំព្យូទ័រសម្រាប់សន្តិសុខសាយប័រ

ជំពូកទី ១៖ សេចក្តីផ្តើមអំពីបណ្តាញកុំព្យូទ័រ
១.១ និយមន័យ និងសារៈសំខាន់នៃបណ្តាញកុំព្យូទ័រ
បណ្តាញកុំព្យូទ័រ (Computer Network) គឺជាប្រព័ន្ធតភ្ជាប់រវាងកុំព្យូទ័រ និងឧបករណ៍អេឡិចត្រូនិកផ្សេងៗ តាមរយៈខ្សែកាប ឬរលកវិទ្យុ ដើម្បីចែករំលែកធនធាន (Resources) ដូចជា ទិន្នន័យ ម៉ាស៊ីនបោះពុម្ព អ៊ីនធឺណិត និងកម្មវិធីផ្សេងៗ។

សារៈសំខាន់ក្នុងវិស័យសន្តិសុខសាយប័រ (Cybersecurity)៖
បណ្តាញគឺជា ច្រកចូល (Attack Surface) ដ៏ធំបំផុតសម្រាប់អ្នកវាយប្រហារ។ ការយល់ដឹងពីបណ្តាញគឺជាគ្រឹះដ៏សំខាន់ ពីព្រោះ៖

ការវាយប្រហារភាគច្រើនកើតឡើងតាមបណ្តាញ៖ មេរោគ (Malware), ការលួចទិន្នន័យ (Data Breach), ការបដិសេធសេវាកម្ម (DDoS) សុទ្ធតែឆ្លងកាត់បណ្តាញ។

ការការពារត្រូវធ្វើនៅលើបណ្តាញ៖ Firewall, IDS/IPS, VPN ជាដើម គឺជាឧបករណ៍ដែលដំណើរការលើបណ្តាញ។

ការស៊ើបអង្កេត (Forensics)៖ នៅពេលមានការវាយប្រហារ អ្នកសន្តិសុខត្រូវវិភាគកំណត់ហេតុបណ្តាញ (Network Logs) និងចរាចរណ៍ទិន្នន័យ (Network Traffic) ដើម្បីតាមដានអ្នកវាយប្រហារ។

១.២ ប្រភេទបណ្តាញតាមទំហំភូមិសាស្ត្រ
បណ្តាញកុំព្យូទ័រអាចចាត់ថ្នាក់តាមទំហំ និងវិសាលភាពភូមិសាស្ត្រដូចខាងក្រោម៖

ប្រភេទ	ឈ្មោះពេញ	វិសាលភាព	ឧទាហរណ៍	ទស្សនៈសន្តិសុខ
PAN	Personal Area Network	ក្នុងបរិវេណបុគ្គល (១-១០ ម៉ែត្រ)	Bluetooth, USB, Infrared	ការវាយប្រហារតាម Bluetooth (BlueBorne, Bluesnarfing) អាចកើតមានប្រសិនបើមិនបិទការរកឃើញ (Discoverable Mode)
LAN	Local Area Network	ក្នុងអគារ ឬបរិវេណតែមួយ (១ គីឡូម៉ែត្រ)	បណ្តាញក្នុងក្រុមហ៊ុន សាលារៀន ផ្ទះ	LAN គឺជាគោលដៅសំខាន់នៃការវាយប្រហារខាងក្នុង (Insider Threats) និង ARP Spoofing
MAN	Metropolitan Area Network	ក្នុងក្រុង ឬទីក្រុង (៥-៥០ គីឡូម៉ែត្រ)	បណ្តាញខ្សែកាបរបស់ ISP ភ្ជាប់សាខាក្រុមហ៊ុន	ការលេចធ្លាយទិន្នន័យរវាងសាខាអាចកើតឡើងប្រសិនបើមិនមានការអ៊ិនគ្រីប (Encryption)
WAN	Wide Area Network	ឆ្លងប្រទេស ឬទ្វីប (គ្មានដែនកំណត់)	អ៊ីនធឺណិត, MPLS, Satellite	WAN គឺជាបណ្តាញសាធារណៈ ដូច្នេះការប្រើប្រាស់ VPN គឺចាំបាច់ដើម្បីការពារការស្ទាក់ចាប់ទិន្នន័យ
១.៣ ប្រភេទបណ្តាញតាមស្ថាបត្យកម្ម (Architecture)
Client-Server Architecture៖

មានម៉ាស៊ីនមេ (Server) ដែលផ្តល់សេវាកម្ម និងម៉ាស៊ីនអតិថិជន (Client) ដែលស្នើសុំសេវាកម្ម។

សន្តិសុខ៖ ងាយស្រួលក្នុងការគ្រប់គ្រងកណ្តាល (Centralized Management) ប៉ុន្តែម៉ាស៊ីនមេគឺជា Single Point of Failure និងជាគោលដៅសំខាន់របស់អ្នកវាយប្រហារ។

Peer-to-Peer (P2P) Architecture៖

ឧបករណ៍ទាំងអស់មានតួនាទីស្មើគ្នា ទាំងផ្តល់ និងទទួលសេវាកម្ម។

សន្តិសុខ៖ ពិបាកក្នុងការគ្រប់គ្រង និងអនុវត្តគោលការណ៍សុវត្ថិភាព ងាយរងការឆ្លងមេរោគឆ្លងឧបករណ៍ (Lateral Movement)។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង LAN និង WAN។

ហេតុអ្វីបានជាការយល់ដឹងពីបណ្តាញមានសារៈសំខាន់សម្រាប់អ្នកជំនាញផ្នែកសន្តិសុខសាយប័រ?

តើគុណវិបត្តិផ្នែកសន្តិសុខនៃស្ថាបត្យកម្ម Peer-to-Peer មានអ្វីខ្លះ?

ជំពូកទី ២៖ គំរូយោង OSI និង TCP/IP
២.១ គំរូ OSI (Open Systems Interconnection)
គំរូ OSI ត្រូវបានបង្កើតឡើងដោយអង្គការ ISO (International Organization for Standardization) ក្នុងឆ្នាំ ១៩៨៤ ដើម្បីធ្វើជាស្តង់ដារសម្រាប់ការទំនាក់ទំនងតាមបណ្តាញ។ គំរូនេះមាន ៧ ស្រទាប់ ដោយស្រទាប់នីមួយៗមានមុខងារជាក់លាក់ និងផ្តល់សេវាកម្មដល់ស្រទាប់ខាងលើ។

តារាងសង្ខេបស្រទាប់ទាំង ៧៖

ស្រទាប់	ឈ្មោះខ្មែរ	ឈ្មោះអង់គ្លេស	ឯកតាទិន្នន័យ	ឧបករណ៍/ពិធីការ	ការវាយប្រហារដែលអាចកើត
7	ស្រទាប់កម្មវិធី	Application	Data	HTTP, HTTPS, FTP, SMTP, DNS	SQL Injection, XSS, Phishing
6	ស្រទាប់បង្ហាញទិន្នន័យ	Presentation	Data	SSL/TLS, JPEG, MPEG, ASCII	ការវាយប្រហារលើការអ៊ិនគ្រីប (Weak Cipher)
5	ស្រទាប់គ្រប់គ្រងវគ្គ	Session	Data	NetBIOS, RPC, SCP	Session Hijacking, Replay Attack
4	ស្រទាប់ដឹកជញ្ជូន	Transport	Segment / Datagram	TCP, UDP	SYN Flood, Port Scanning, DDoS
3	ស្រទាប់បណ្តាញ	Network	Packet	IP (IPv4/IPv6), ICMP, ARP, RIP, OSPF	IP Spoofing, Ping of Death, Routing Attacks
2	ស្រទាប់តំណទិន្នន័យ	Data Link	Frame	Ethernet, MAC, PPP, Switch	ARP Spoofing, MAC Flooding, VLAN Hopping
1	ស្រទាប់រូបវន្ត	Physical	Bits (0/1)	ខ្សែកាប, Hub, Repeater, រលកវិទ្យុ	ការកាត់ខ្សែកាប, Eavesdropping តាមរលកវិទ្យុ
មុខងារលម្អិតនៃស្រទាប់នីមួយៗ៖

ស្រទាប់ទី ១ - Physical៖

ទទួលខុសត្រូវលើការបញ្ជូនប៊ីត (Bits) តាមរយៈប្រព័ន្ធផ្សព្វផ្សាយរូបវន្ត (ខ្សែស្ពាន់ ខ្សែកាបអុបទិក រលកវិទ្យុ)។

កំណត់នូវ Voltage, អត្រាបញ្ជូនទិន្នន័យ (Data Rate), ការតភ្ជាប់រូបវន្ត (Connector Types)។

ទស្សនៈសន្តិសុខ៖ ការវាយប្រហារលើស្រទាប់នេះច្រើនតែជាការវាយប្រហារដោយផ្ទាល់ (Physical Access) ដូចជាការកាត់ខ្សែកាប ឬការដំឡើងឧបករណ៍ស្ទាក់ចាប់ (Wiretap)។

ស្រទាប់ទី ២ - Data Link៖

ធានាការបញ្ជូនទិន្នន័យដោយគ្មានកំហុសរវាងឧបករណ៍ពីរដែលតភ្ជាប់គ្នាដោយផ្ទាល់ (Directly Connected)។

ប្រើប្រាស់ MAC Address (Media Access Control Address) ដើម្បីកំណត់អត្តសញ្ញាណឧបករណ៍។

បែងចែកជា ២ ស្រទាប់រង៖

LLC (Logical Link Control)៖ គ្រប់គ្រងការតភ្ជាប់ និងការកែកំហុស។

MAC (Media Access Control)៖ គ្រប់គ្រងការចូលដំណើរការប្រព័ន្ធផ្សព្វផ្សាយ និងអាសយដ្ឋានរូបវន្ត។

ទស្សនៈសន្តិសុខ៖ ការវាយប្រហារ ARP Spoofing និង MAC Flooding កើតឡើងនៅស្រទាប់នេះ។

ស្រទាប់ទី ៣ - Network៖

ទទួលខុសត្រូវលើការកំណត់ផ្លូវ (Routing) និងការបញ្ជូនកញ្ចប់ទិន្នន័យ (Packet) ពីប្រភពទៅកាន់គោលដៅឆ្លងកាត់បណ្តាញផ្សេងៗ។

ប្រើប្រាស់ IP Address (Internet Protocol Address) សម្រាប់កំណត់អត្តសញ្ញាណឧបករណ៍នៅលើបណ្តាញសកល។

ទស្សនៈសន្តិសុខ៖ ការវាយប្រហារ IP Spoofing, Ping of Death, និងការវាយប្រហារលើពិធីការ Routing (Routing Protocol Attacks)។

ស្រទាប់ទី ៤ - Transport៖

ផ្តល់នូវការបញ្ជូនទិន្នន័យពីចុងម្ខាងទៅចុងម្ខាងទៀត (End-to-End) ដោយមានការគ្រប់គ្រងលំហូរ (Flow Control) និងការកែកំហុស។

ពិធីការសំខាន់ពីរ៖

TCP (Transmission Control Protocol)៖ មានការបង្កើតការតភ្ជាប់ (Connection-Oriented), ធានាការបញ្ជូន (Reliable), មានការបញ្ជាក់ (Acknowledgment)។

UDP (User Datagram Protocol)៖ គ្មានការបង្កើតការតភ្ជាប់ (Connectionless), មិនធានាការបញ្ជូន (Unreliable), លឿន ប្រើសម្រាប់ Streaming, DNS, VPN។

ប្រើប្រាស់ Port Numbers ដើម្បីកំណត់អត្តសញ្ញាណកម្មវិធី ឬសេវាកម្ម។

ទស្សនៈសន្តិសុខ៖ SYN Flood Attack (DDoS), Port Scanning (ការស្កេនរកមើលច្រកបើកចំហរដើម្បីវាយប្រហារ)។

ស្រទាប់ទី ៥ - Session៖

គ្រប់គ្រងការបង្កើត ការថែរក្សា និងការបញ្ចប់វគ្គទំនាក់ទំនង (Session) រវាងកម្មវិធី។

ទស្សនៈសន្តិសុខ៖ Session Hijacking (ការលួចវគ្គទំនាក់ទំនងបន្ទាប់ពីអ្នកប្រើប្រាស់បានចូលប្រព័ន្ធរួចហើយ)។

ស្រទាប់ទី ៦ - Presentation៖

បំប្លែងទិន្នន័យទៅជាទម្រង់ដែលស្រទាប់កម្មវិធីអាចយល់បាន។ ទទួលខុសត្រូវលើការបង្ហាប់ទិន្នន័យ (Compression), ការអ៊ិនគ្រីប (Encryption) និងការបំប្លែងទម្រង់ (Format Conversion)។

ទស្សនៈសន្តិសុខ៖ ការវាយប្រហារលើភាពទន់ខ្សោយនៃក្បួនដោះសូរអ៊ិនគ្រីប (Weak Cipher Suites)។

ស្រទាប់ទី ៧ - Application៖

ជាស្រទាប់ដែលនៅជិតអ្នកប្រើប្រាស់បំផុត។ ផ្តល់ចំណុចប្រទាក់ (Interface) សម្រាប់កម្មវិធីដើម្បីចូលដំណើរការបណ្តាញ។

ទស្សនៈសន្តិសុខ៖ ការវាយប្រហារភាគច្រើនកើតឡើងនៅស្រទាប់នេះ ដូចជា SQL Injection, Cross-Site Scripting (XSS), Phishing, Malware។

២.២ គំរូ TCP/IP (DoD Model)
គំរូ TCP/IP ត្រូវបានបង្កើតឡើងដោយក្រសួងការពារជាតិសហរដ្ឋអាមេរិក (DoD) ហើយជាគំរូដែលប្រើប្រាស់ជាក់ស្តែងនៅលើអ៊ីនធឺណិតបច្ចុប្បន្ន។ គំរូនេះមានតែ ៤ ស្រទាប់ប៉ុណ្ណោះ៖

ស្រទាប់ TCP/IP	ស្រទាប់ OSI ដែលត្រូវគ្នា	ពិធីការសំខាន់ៗ
4. Application	5, 6, 7	HTTP, HTTPS, FTP, SMTP, DNS, SSH, Telnet
3. Transport	4	TCP, UDP
2. Internet	3	IP (IPv4, IPv6), ICMP, ARP
1. Network Access	1, 2	Ethernet, Wi-Fi (802.11), Fiber Optics
២.៣ ការវេចខ្ចប់ទិន្នន័យ (Data Encapsulation)
នៅពេលបញ្ជូនទិន្នន័យ ស្រទាប់នីមួយៗនឹងបន្ថែមព័ត៌មានក្បាល (Header) ទៅលើទិន្នន័យដែលទទួលបានពីស្រទាប់ខាងលើ។ ដំណើរការនេះហៅថា Data Encapsulation។

ឧទាហរណ៍នៃការវេចខ្ចប់៖

ស្រទាប់ Application៖ អ្នកប្រើប្រាស់បញ្ចូលទិន្នន័យ (ឧ. "Hello") -> Data

ស្រទាប់ Transport៖ បន្ថែម TCP Header (បង្ហាញពី Source Port និង Destination Port) -> Segment

ស្រទាប់ Network៖ បន្ថែម IP Header (បង្ហាញពី Source IP និង Destination IP) -> Packet

ស្រទាប់ Data Link៖ បន្ថែម MAC Header (បង្ហាញពី Source MAC និង Destination MAC) និង MAC Trailer (FCS) -> Frame

ស្រទាប់ Physical៖ បំប្លែង Frame ទៅជាប៊ីត (Bits) ហើយបញ្ជូនតាមខ្សែកាប។

ទស្សនៈសន្តិសុខ៖ ការយល់ដឹងពី Data Encapsulation ជួយឱ្យអ្នកសន្តិសុខអាចវិភាគកញ្ចប់ទិន្នន័យ (Packet Analysis) ដោយប្រើឧបករណ៍ដូចជា Wireshark ដើម្បីស្វែងរកចរាចរណ៍ខុសច្បាប់ ឬការវាយប្រហារ។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី២)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង TCP និង UDP។ តើពិធីការមួយណាដែលងាយរងការវាយប្រហារ SYN Flood?

ប្រសិនបើអ្នកឃើញការវាយប្រហារ ARP Spoofing តើវាកើតឡើងនៅស្រទាប់ណានៃគំរូ OSI?

ចូរពន្យល់ពីដំណើរការ Data Encapsulation នៅពេលអ្នកបើកគេហទំព័រ https://www.example.com។

ជំពូកទី ៣៖ អាសយដ្ឋាន និងពិធីការសំខាន់ៗ
៣.១ MAC Address (Media Access Control Address)
MAC Address គឺជាអាសយដ្ឋានរូបវន្ត (Physical Address) ដែលត្រូវបានកំណត់ដោយរោងចក្រផលិត (Hardcoded) ទៅលើ Network Interface Card (NIC)។

លក្ខណៈ៖

ប្រវែង ៤៨ ប៊ីត (៦ បៃ) សរសេរជាទម្រង់ Hexadecimal។

ឧទាហរណ៍៖ 00:1A:2B:3C:4D:5E

00:1A:2B = OUI (Organizationally Unique Identifier) - កូដរបស់ក្រុមហ៊ុនផលិត។

3C:4D:5E = NIC Specific - លេខស៊េរីរបស់កាតបណ្តាញ។

ដំណើរការនៅស្រទាប់ទី ២ (Data Link Layer)។

ប្រើសម្រាប់ការទំនាក់ទំនងក្នុងបណ្តាញមូលដ្ឋាន (LAN) តែប៉ុណ្ណោះ។

ទស្សនៈសន្តិសុខ៖

MAC Flooding៖ អ្នកវាយប្រហារបញ្ជូនកញ្ចប់ទិន្នន័យដែលមាន MAC Address ផ្សេងគ្នារាប់ពាន់ទៅកាន់ Switch រហូតដល់តារាង CAM (Content Addressable Memory) របស់ Switch ពេញ ធ្វើឱ្យ Switch ប្រព្រឹត្តិដូចជា Hub ហើយចាប់ផ្តើមបញ្ជូនទិន្នន័យទៅកាន់ច្រកទាំងអស់ (Broadcast) ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារស្ទាក់ចាប់ទិន្នន័យ។

MAC Spoofing៖ អ្នកវាយប្រហារកែប្រែ MAC Address របស់ឧបករណ៍ខ្លួនឱ្យដូចគ្នានឹងឧបករណ៍ដែលមានសិទ្ធិ (Authorized Device) ដើម្បីរំលងការត្រួតពិនិត្យសុវត្ថិភាពដូចជា Port Security ឬ MAC Filtering។

ការការពារ៖ ប្រើប្រាស់ Port Security នៅលើ Switch ដើម្បីកំណត់ចំនួន MAC Address ដែលអាចប្រើបាននៅលើច្រកនីមួយៗ។

៣.២ IP Address (Internet Protocol Address)
IP Address គឺជាអាសយដ្ឋានតក្កវិជ្ជា (Logical Address) ដែលត្រូវបានកំណត់ទៅឧបករណ៍នៅលើបណ្តាញ។ វាអាចផ្លាស់ប្តូរបាន អាស្រ័យលើបណ្តាញដែលឧបករណ៍កំពុងតភ្ជាប់។

៣.២.១ IPv4 (Internet Protocol version 4)
ប្រវែង ៣២ ប៊ីត (៤ បៃ) សរសេរជាទម្រង់ Dotted Decimal (ឧ. 192.168.1.1)។

ផ្ទុកអាសយដ្ឋានបានអតិបរមាប្រហែល ៤.៣ ពាន់លាន។

រចនាសម្ព័ន្ធ IPv4៖
IPv4 មាន ២ ផ្នែក៖

Network Portion៖ កំណត់អត្តសញ្ញាណបណ្តាញ (Network ID)។

Host Portion៖ កំណត់អត្តសញ្ញាណឧបករណ៍នៅក្នុងបណ្តាញនោះ (Host ID)។

ថ្នាក់នៃ IPv4 (Classes)៖

ថ្នាក់	ប៊ីតដំបូង	Range	Subnet Mask លំនាំដើម	ការប្រើប្រាស់
Class A	0	1.0.0.0 – 126.255.255.255	255.0.0.0 (/8)	បណ្តាញធំៗ (ក្រុមហ៊ុនធំ, ISP)
Class B	10	128.0.0.0 – 191.255.255.255	255.255.0.0 (/16)	បណ្តាញមធ្យម (សាកលវិទ្យាល័យ, មន្ទីរពេទ្យ)
Class C	110	192.0.0.0 – 223.255.255.255	255.255.255.0 (/24)	បណ្តាញតូចៗ (ក្រុមហ៊ុនធុនតូច)
Class D	1110	224.0.0.0 – 239.255.255.255	-	Multicast (ក្រុម)
Class E	1111	240.0.0.0 – 255.255.255.255	-	សម្រាប់ស្រាវជ្រាវ (Reserved)
៣.២.២ Public IP vs Private IP
ដោយសារចំនួន IPv4 មានកំណត់ IANA (Internet Assigned Numbers Authority) បានកំណត់ជួរ IP សម្រាប់ប្រើប្រាស់ក្នុងបណ្តាញឯកជន (Private Networks) ដែលមិនអាចប្រើប្រាស់នៅលើអ៊ីនធឺណិតសាធារណៈបាន។

ជួរ Private IP៖

ថ្នាក់	ជួរ Private IP	Subnet Mask
Class A	10.0.0.0 – 10.255.255.255	255.0.0.0 (/8)
Class B	172.16.0.0 – 172.31.255.255	255.240.0.0 (/12)
Class C	192.168.0.0 – 192.168.255.255	255.255.255.0 (/16)
Public IP គឺជាអាសយដ្ឋានដែលមានលក្ខណៈប្លែកពីគេនៅលើអ៊ីនធឺណិត ហើយត្រូវតែជួលពី ISP។

NAT (Network Address Translation)៖
NAT គឺជាបច្ចេកទេសដែលអនុញ្ញាតឱ្យឧបករណ៍ដែលមាន Private IP ជាច្រើនចែករំលែក Public IP តែមួយដើម្បីចូលប្រើអ៊ីនធឺណិត។

ទស្សនៈសន្តិសុខ៖ NAT ផ្តល់នូវការការពារកម្រិតមូលដ្ឋាន (Basic Security) ដោយលាក់ (Hide) រចនាសម្ព័ន្ធ Private IP ខាងក្នុងពីអ៊ីនធឺណិត។ ទោះយ៉ាងណា NAT មិនមែនជា Firewall ទេ ហើយមិនអាចការពារការវាយប្រហារគ្រប់ប្រភេទបានឡើយ។

៣.២.៣ Subnetting
Subnetting គឺជាដំណើរការបែងចែកបណ្តាញធំមួយទៅជាបណ្តាញរងតូចៗ (Subnets)។

គោលបំណង៖

បង្កើនប្រសិទ្ធភាព៖ កាត់បន្ថយ Broadcast Domain ធ្វើឱ្យចរាចរណ៍បណ្តាញមិនសូវកកស្ទះ។

បង្កើនសន្តិសុខ៖ អាចបំបែកបណ្តាញ (Network Segmentation) ដូចជាបំបែកបណ្តាញបុគ្គលិក បណ្តាញភ្ញៀវ (Guest Wi-Fi) និងបណ្តាញម៉ាស៊ីនមេ (Server Network) ដាច់ពីគ្នា។ ប្រសិនបើបណ្តាញមួយត្រូវបានសម្រុក អ្នកវាយប្រហារនឹងមិនអាចចូលទៅកាន់បណ្តាញផ្សេងទៀតបានដោយងាយនោះទេ។

ឧទាហរណ៍ Subnetting មូលដ្ឋាន៖

បណ្តាញដើម៖ 192.168.1.0/24 (255.255.255.0) អាចផ្ទុក Host បាន ២៥៤។

បែងចែកជា ២ Subnets ដោយប្រើ /25 (255.255.255.128)៖

Subnet 1: 192.168.1.0/25 (192.168.1.1 – 192.168.1.126)

Subnet 2: 192.168.1.128/25 (192.168.1.129 – 192.168.1.254)

៣.២.៤ IPv6 (Internet Protocol version 6)
IPv6 ត្រូវបានបង្កើតឡើងដើម្បីដោះស្រាយបញ្ហាកង្វះអាសយដ្ឋាន IPv4។

លក្ខណៈ៖

ប្រវែង ១២៨ ប៊ីត (១៦ បៃ) សរសេរជាទម្រង់ Hexadecimal ចំនួន ៨ ក្រុម បំបែកដោយសញ្ញា ចុចពីរ (:)។

ឧទាហរណ៍៖ 2001:0db8:85a3:0000:0000:8a2e:0370:7334

ផ្ទុកអាសយដ្ឋានបានប្រហែល ៣.៤ × ១០^៣៨ (គ្រប់គ្រាន់សម្រាប់ឧបករណ៍គ្រប់ដុំនៅលើផែនដី)។

សន្តិសុខ៖ IPv6 រួមបញ្ចូល IPSec (Internet Protocol Security) ជាផ្នែកសំខាន់ ដែលផ្តល់នូវការអ៊ិនគ្រីប (Encryption) និងការបញ្ជាក់អត្តសញ្ញាណ (Authentication)។

៣.៣ Port Numbers
Port គឺជាចំណុចបញ្ចប់នៃការទំនាក់ទំនង (Communication Endpoint) នៅក្នុងប្រព័ន្ធប្រតិបត្តិការ។ វាជួយកំណត់ថាកម្មវិធី ឬសេវាកម្មណាមួយនៅលើម៉ាស៊ីនដែលគួរទទួលទិន្នន័យ។

ប្រភេទ Port៖

Well-Known Ports (០-១០២៣)៖ កំណត់សម្រាប់សេវាកម្មប្រព័ន្ធ (System Services)។

Registered Ports (១០២៤-៤៩១៥១)៖ កំណត់សម្រាប់កម្មវិធីរបស់អ្នកប្រើប្រាស់ (User Applications)។

Dynamic/Private Ports (៤៩១៥២-៦៥៥៣៥)៖ ប្រើជា Temporary Ports សម្រាប់ការតភ្ជាប់របស់ Client។

តារាង Ports សំខាន់ៗសម្រាប់អ្នកសន្តិសុខ៖

Port	ពិធីការ	សេវាកម្ម	កំណត់សម្គាល់សន្តិសុខ
20, 21	TCP	FTP (File Transfer Protocol)	បញ្ជូនទិន្នន័យដោយគ្មានអ៊ិនគ្រីប (Plain Text) ។ គួរប្រើ SFTP (Port 22) ជំនួស។
22	TCP	SSH (Secure Shell)	ប្រើសម្រាប់ចូលគ្រប់គ្រងម៉ាស៊ីនពីចម្ងាយប្រកបដោយសុវត្ថិភាព។ ជាគោលដៅសំខាន់នៃ Brute Force Attack។
23	TCP	Telnet	គ្មានសុវត្ថិភាព។ បញ្ជូនពាក្យសម្ងាត់ជាអក្សរច្បាស់ (Plain Text)។ គួរបិទ។
25	TCP	SMTP (Simple Mail Transfer Protocol)	ប្រើសម្រាប់ផ្ញើអ៊ីមែល។ ងាយរងការវាយប្រហារ Spam និង Email Spoofing។
53	TCP/UDP	DNS (Domain Name System)	ងាយរងការវាយប្រហារ DNS Spoofing, DNS Tunneling (ប្រើ DNS ដើម្បីលួចទិន្នន័យ)។
80	TCP	HTTP	ចរាចរណ៍គ្មានអ៊ិនគ្រីប។ ងាយរងការស្ទាក់ចាប់ (Sniffing)។
443	TCP	HTTPS (HTTP over SSL/TLS)	ចរាចរណ៍មានការអ៊ិនគ្រីប។ អ្នកវាយប្រហារអាចប្រើ HTTPS ដើម្បីលាក់ចរាចរណ៍ Malware (Encrypted Malware Traffic)។
3389	TCP	RDP (Remote Desktop Protocol)	ប្រើសម្រាប់ចូលប្រើ Desktop ពីចម្ងាយ។ ជាគោលដៅសំខាន់នៃ Brute Force Attack និង RDP Exploits។
ទស្សនៈសន្តិសុខ៖

Port Scanning៖ អ្នកវាយប្រហារប្រើឧបករណ៍ដូចជា Nmap ដើម្បីស្កេនរកមើល Ports ដែលបើកចំហរ (Open Ports) នៅលើម៉ាស៊ីនគោលដៅ។ Ports ដែលបើកចំហរគឺជាច្រកចូល (Entry Points) សម្រាប់ការវាយប្រហារ។

ការការពារ៖ ប្រើ Firewall ដើម្បីបិទ Ports ដែលមិនចាំបាច់។ អនុវត្តគោលការណ៍ "Principle of Least Privilege" ដោយបើកតែ Ports ដែលចាំបាច់សម្រាប់ប្រតិបត្តិការប៉ុណ្ណោះ។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៣)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង MAC Address និង IP Address។

តើអ្វីទៅជា NAT? ហេតុអ្វីបានជា NAT មានសារៈសំខាន់សម្រាប់សន្តិសុខបណ្តាញ?

អ្នកជាអ្នកគ្រប់គ្រងបណ្តាញ អ្នកត្រូវបានគេសុំឱ្យបិទ Port 23 នៅលើ Router ។ ហេតុអ្វីបានជាសកម្មភាពនេះសំខាន់សម្រាប់សន្តិសុខ?

ចូរពន្យល់ពីគោលបំណងនៃ Subnetting ក្នុងទស្សនៈសន្តិសុខ។

ជំពូកទី ៤៖ ឧបករណ៍បណ្តាញ និងមុខងារសន្តិសុខ
៤.១ Hub (Repeater)
Hub គឺជាឧបករណ៍សាមញ្ញដែលដំណើរការនៅស្រទាប់ទី ១ (Physical Layer)។

លក្ខណៈ៖

នៅពេលទទួលបានសញ្ញា (Signal) ពីច្រកណាមួយ Hub នឹង បញ្ជូនបន្ត (Broadcast) សញ្ញានោះទៅកាន់ច្រកផ្សេងទៀតទាំងអស់។

មិនមានភាពវៃឆ្លាត (Unintelligent) មិនអាចអាន MAC Address ឬ IP Address បានឡើយ។

ទស្សនៈសន្តិសុខ៖

គ្រោះថ្នាក់ខ្លាំង៖ ដោយសារ Hub បញ្ជូនទិន្នន័យទៅកាន់ឧបករណ៍ទាំងអស់ អ្នកវាយប្រហារដែលតភ្ជាប់ទៅ Hub ដូចគ្នាអាច ស្ទាក់ចាប់ (Sniff) ចរាចរណ៍ទិន្នន័យរបស់អ្នកប្រើប្រាស់ផ្សេងទៀតបានយ៉ាងងាយ។

ការប្រើប្រាស់៖ ក្នុងបរិបទសន្តិសុខទំនើប Hub មិនគួរប្រើប្រាស់ទេ។ គួរប្រើ Switch ជំនួស។

៤.២ Switch (Bridging)
Switch គឺជាឧបករណ៍ដែលដំណើរការនៅស្រទាប់ទី ២ (Data Link Layer)។

លក្ខណៈ៖

ប្រើប្រាស់ MAC Address Table (CAM Table) ដើម្បីរៀននូវ MAC Address នៃឧបករណ៍ដែលតភ្ជាប់នៅលើច្រកនីមួយៗ។

បញ្ជូនទិន្នន័យ (Frame) តែទៅកាន់ច្រកគោលដៅ (Destination Port) ប៉ុណ្ណោះ មិនមែនទៅកាន់ច្រកទាំងអស់ដូច Hub ទេ។

មុខងារសន្តិសុខនៅលើ Switch៖

VLAN (Virtual Local Area Network)៖

VLAN អនុញ្ញាតឱ្យអ្នកគ្រប់គ្រងបំបែកបណ្តាញរូបវន្តតែមួយ (Physical Network) ទៅជាបណ្តាញតក្កវិជ្ជា (Logical Networks) ច្រើនដាច់ពីគ្នា។

សន្តិសុខ៖ ឧបករណ៍នៅក្នុង VLAN មួយមិនអាចទំនាក់ទំនងដោយផ្ទាល់ជាមួយឧបករណ៍នៅក្នុង VLAN ផ្សេងទៀតបានទេ លុះត្រាតែមាន Router ឬ Layer 3 Switch មកធ្វើ Routing រវាង VLAN (Inter-VLAN Routing)។ នេះជួយកំណត់ការរីករាលដាលនៃការវាយប្រហារ (Containment)។

ឧទាហរណ៍៖ VLAN 10 = បុគ្គលិក, VLAN 20 = ភ្ញៀវ, VLAN 30 = ម៉ាស៊ីនមេ។

Port Security៖

កំណត់ចំនួន MAC Address ដែលអាចរៀនបាននៅលើច្រក (Port) នីមួយៗ។

សន្តិសុខ៖ ការពារការវាយប្រហារ MAC Flooding។ ប្រសិនបើចំនួន MAC Address លើសពីកំណត់ Switch អាចត្រូវបានកំណត់ឱ្យបិទច្រកនោះ (Shutdown) ឬបដិសេធ (Protect/Restrict)។

DHCP Snooping៖

មុខងារសន្តិសុខដែលការពារការវាយប្រហារ Rogue DHCP Server។

ការវាយប្រហារ៖ អ្នកវាយប្រហារដំឡើង DHCP Server ខុសច្បាប់នៅលើបណ្តាញ ដើម្បីចែកចាយ IP Address ក្លែងក្លាយដល់អតិថិជន ដែលអាចបញ្ជូនចរាចរណ៍របស់ពួកគេឆ្លងកាត់អ្នកវាយប្រហារ (Man-in-the-Middle)។

ការការពារ៖ DHCP Snooping កំណត់ច្រកដែលអាចទុកចិត្តបាន (Trusted Ports) សម្រាប់ DHCP Server ពិតប្រាកដ និងបដិសេធកញ្ចប់ DHCP Reply ពីច្រកដែលមិនទុកចិត្ត (Untrusted Ports)។

Dynamic ARP Inspection (DAI)៖

ការពារការវាយប្រហារ ARP Spoofing/Poisoning។

DAI ផ្ទៀងផ្ទាត់កញ្ចប់ ARP ទាំងអស់ប្រឆាំងនឹង DHCP Snooping Binding Database ដើម្បីធានាថា MAC Address និង IP Address ត្រូវគ្នានឹងការចែកចាយពិតប្រាកដ។

៤.៣ Router
Router គឺជាឧបករណ៍ដែលដំណើរការនៅស្រទាប់ទី ៣ (Network Layer)។

លក្ខណៈ៖

ភ្ជាប់បណ្តាញផ្សេងៗគ្នា (ឧ. LAN ទៅ WAN)។

ប្រើប្រាស់ Routing Table ដើម្បីកំណត់ផ្លូវល្អបំផុត (Best Path) សម្រាប់ការបញ្ជូនកញ្ចប់ទិន្នន័យ (Packet)។

អនុវត្ត NAT (Network Address Translation)។

មុខងារសន្តិសុខនៅលើ Router៖

ACL (Access Control List)៖

ACL គឺជាបញ្ជីច្បាប់ (Rules) ដែលកំណត់ថាតើកញ្ចប់ទិន្នន័យណាខ្លះត្រូវបានអនុញ្ញាត (Permit) ឬត្រូវបានបដិសេធ (Deny) ឱ្យឆ្លងកាត់ Router។

ACL អាចត្រូវបានកំណត់ដោយផ្អែកលើ៖

Source IP Address / Destination IP Address

Source Port / Destination Port

ពិធីការ (Protocol) ដូចជា TCP, UDP, ICMP

ឧទាហរណ៍ ACL៖ បដិសេធ (Deny) ចរាចរណ៍ SSH (Port 22) ទាំងអស់ពីខាងក្រៅ (WAN) ចូលមកកាន់បណ្តាញខាងក្នុង (LAN)។

៤.៤ Firewall (ជញ្ជាំងភ្លើង)
Firewall គឺជាឧបករណ៍ ឬកម្មវិធីដែលត្រួតពិនិត្យ និងត្រង (Filter) ចរាចរណ៍បណ្តាញចូល និងចេញ ដោយផ្អែកលើច្បាប់សុវត្ថិភាពដែលបានកំណត់ទុកជាមុន។

ប្រភេទ Firewall៖

ប្រភេទ	ការពិពណ៌នា	គុណសម្បត្តិ	គុណវិបត្តិ
Packet Filtering Firewall	ពិនិត្យមើល Header នៃកញ្ចប់ទិន្នន័យ (IP, Port)។ ដំណើរការនៅស្រទាប់ទី ៣ និង ៤។	លឿន ប្រើប្រាស់ធនធានតិច។	មិនអាចពិនិត្យមើលខ្លឹមសារនៃទិន្នន័យ (Payload) បាន។ ងាយរងការវាយប្រហារ IP Spoofing។
Stateful Inspection Firewall	រក្សាទុកស្ថានភាពនៃការតភ្ជាប់ (Connection State)។ អនុញ្ញាតតែកញ្ចប់ទិន្នន័យដែលជាផ្នែកនៃការតភ្ជាប់ដែលបានផ្តើមពីខាងក្នុងប៉ុណ្ណោះ។	សុវត្ថិភាពខ្ពស់ជាង Packet Filtering។	ប្រើប្រាស់ធនធានច្រើនជាង។
Next-Generation Firewall (NGFW)	រួមបញ្ចូលមុខងារកម្រិតខ្ពស់ដូចជា៖ Deep Packet Inspection (DPI), Intrusion Prevention System (IPS), Application Awareness (ស្គាល់កម្មវិធូដូចជា Facebook, YouTube)។	អាចកំណត់ និងទប់ស្កាត់ការវាយប្រហារស្មុគស្មាញបាន។	ថ្លៃខ្ពស់ ត្រូវការអ្នកជំនាញក្នុងការកំណត់រចនាសម្ព័ន្ធ។
៤.៥ IDS និង IPS (Intrusion Detection/Prevention System)
IDS (Intrusion Detection System)	IPS (Intrusion Prevention System)
មុខងារ	រកឃើញ (Detect) សកម្មភាពគួរឱ្យសង្ស័យ និងជូនដំណឹង (Alert) ដល់អ្នកគ្រប់គ្រង។	រកឃើញ (Detect) និង ទប់ស្កាត់ (Block/Prevent) សកម្មភាពគួរឱ្យសង្ស័យដោយស្វ័យប្រវត្តិនៅពេលកើតឡើង។
ទីតាំង	ជាធម្មតាដំឡើងនៅខាងក្រៅលំហូរចរាចរណ៍ (Out-of-band)។	ដំឡើងនៅក្នុងលំហូរចរាចរណ៍ (In-line)។
ផលប៉ះពាល់	មិនប៉ះពាល់ដល់ចរាចរណ៍ពិតប្រាកដ (Legitimate Traffic)។	អាចបណ្តាលឱ្យមានការរំខាន (Latency) ឬប្រសិនបើកំណត់រចនាសម្ព័ន្ធខុសអាចទប់ស្កាត់ចរាចរណ៍ពិតប្រាកដ (False Positive)។
ការរកឃើញ	ប្រើ ២ វិធីសាស្ត្រសំខាន់៖
1. Signature-based៖ ប្រៀបធៀបចរាចរណ៍ជាមួយហត្ថលេខានៃការវាយប្រហារដែលគេស្គាល់ (Known Attacks)។
2. Anomaly-based៖ បង្កើតជាគំរូ (Baseline) នៃចរាចរណ៍ធម្មតា ហើយរកឃើញភាពខុសប្រក្រតី (Anomaly)។	ដូចគ្នានឹង IDS ប៉ុន្តែអាចចាត់វិធានការដោយស្វ័យប្រវត្តិ។
សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៤)៖

ហេតុអ្វីបានជា Hub មិនត្រូវបានណែនាំឱ្យប្រើប្រាស់ក្នុងបរិបទសន្តិសុខ?

ចូរពន្យល់ពីភាពខុសគ្នារវាង VLAN និង Subnetting។

តើអ្វីជាភាពខុសគ្នាសំខាន់រវាង IDS និង IPS?

ប្រសិនបើអ្នកជាអ្នកគ្រប់គ្រងបណ្តាញ តើអ្នកនឹងប្រើមុខងារអ្វីខ្លះនៅលើ Switch ដើម្បីការពារការវាយប្រហារ ARP Spoofing?

ជំពូកទី ៥៖ ការវាយប្រហារលើបណ្តាញ (Network Attacks)
៥.១ Sniffing (ការស្ទាក់ចាប់) និង Eavesdropping (ការស្តាប់)
Sniffing គឺជាការចាប់យក (Capture) និងវិភាគកញ្ចប់ទិន្នន័យដែលឆ្លងកាត់បណ្តាញ។

ឧបករណ៍ Sniffing៖ Wireshark, Tcpdump, Nmap (ក្នុងមុខងារ Scripting)។

ប្រភេទនៃការវាយប្រហារ Sniffing៖

Passive Sniffing៖

កើតឡើងនៅលើបណ្តាញដែលប្រើប្រាស់ Hub ឬនៅលើបណ្តាញដែលមិនមានការបំបែក (Unswitched Network)។

អ្នកវាយប្រហារគ្រាន់តែ "ស្តាប់" (Listen) ទិន្នន័យដែលឆ្លងកាត់ដោយមិនចាំបាច់បញ្ជូនកញ្ចប់ទិន្នន័យណាមួយទៅកាន់បណ្តាញ។

Active Sniffing៖

កើតឡើងនៅលើបណ្តាញដែលប្រើប្រាស់ Switch។

អ្នកវាយប្រហារត្រូវប្រើបច្ចេកទេសដើម្បី "បញ្ឆោត" Switch ឱ្យបញ្ជូនទិន្នន័យដែលមិនមែនសម្រាប់ខ្លួនមកកាន់ខ្លួន។

៥.២ Man-in-the-Middle (MITM)
MITM គឺជាការវាយប្រហារដែលអ្នកវាយប្រហារបញ្ចូលខ្លួនឯងនៅចន្លោះអ្នកទំនាក់ទំនងពីរនាក់ ដោយធ្វើពុតជាភាគីនីមួយៗសម្រាប់ភាគីម្ខាងទៀត។

បច្ចេកទេស MITM សំខាន់ៗ៖

ARP Spoofing (ARP Poisoning)៖

គោលដៅ៖ បណ្តាញមូលដ្ឋាន (LAN)។

របៀបដំណើរការ៖

ARP (Address Resolution Protocol) គឺជាពិធីការដែលប្រើដើម្បីបំប្លែង IP Address ទៅជា MAC Address។

អ្នកវាយប្រហារបញ្ជូន ARP Reply ក្លែងក្លាយទៅកាន់ Switch ដោយប្រាប់ថា MAC Address របស់អ្នកវាយប្រហារត្រូវគ្នានឹង IP Address របស់ Gateway (Default Router)។

ជាលទ្ធផល ចរាចរណ៍ទាំងអស់ពីអតិថិជនដែលត្រូវបានបញ្ឆោតនឹងត្រូវបញ្ជូនទៅកាន់អ្នកវាយប្រហារជាមុនសិន មុននឹងបញ្ជូនបន្តទៅកាន់ Gateway ពិតប្រាកដ។

ផលប៉ះពាល់៖ អ្នកវាយប្រហារអាចស្ទាក់ចាប់ កែប្រែ ឬបញ្ឈប់ទិន្នន័យ។

ការការពារ៖ Dynamic ARP Inspection (DAI) នៅលើ Switch, ប្រើប្រាស់ការអ៊ិនគ្រីប (HTTPS, VPN)។

DNS Spoofing (DNS Cache Poisoning)៖

គោលដៅ៖ បំពុល DNS Cache របស់ម៉ាស៊ីនមេ DNS ឬឧបករណ៍អតិថិជន។

របៀបដំណើរការ៖ អ្នកវាយប្រហារបញ្ចូលកំណត់ត្រា DNS ក្លែងក្លាយទៅក្នុង Cache នៃម៉ាស៊ីនមេ DNS។ ឧទាហរណ៍ នៅពេលអ្នកប្រើប្រាស់វាយ www.bank.com ពួកគេត្រូវបានបញ្ជូនទៅកាន់គេហទំព័រក្លែងក្លាយ (Fake Website) របស់អ្នកវាយប្រហារ។

ការការពារ៖ DNSSEC (DNS Security Extensions), ប្រើប្រាស់ DNS over HTTPS (DoH) ឬ DNS over TLS (DoT)។

៥.៣ Spoofing (ការក្លែងបន្លំ)
Spoofing គឺជាការក្លែងបន្លំអត្តសញ្ញាណ (Identity) ដោយអ្នកវាយប្រហារធ្វើពុតជាអង្គភាពផ្សេង។

ប្រភេទ	ការពិពណ៌នា	ឧទាហរណ៍
IP Spoofing	អ្នកវាយប្រហារកែប្រែ Source IP Address ក្នុងកញ្ចប់ទិន្នន័យ ដើម្បីលាក់អត្តសញ្ញាណពិតប្រាកដ ឬដើម្បីរំលងការត្រួតពិនិត្យ ACL។	ប្រើក្នុងការវាយប្រហារ DDoS ដើម្បីបិទបាំងប្រភពពិតប្រាកដ។
MAC Spoofing	អ្នកវាយប្រហារកែប្រែ MAC Address របស់កាតបណ្តាញរបស់ខ្លួនឱ្យដូចគ្នានឹងឧបករណ៍ដែលមានសិទ្ធិ។	រំលង Port Security ឬ MAC Filtering នៅលើបណ្តាញ Wi-Fi។
Email Spoofing	អ្នកវាយប្រហារក្លែងបន្លំអាសយដ្ឋានអ៊ីមែលអ្នកផ្ញើ (From) ឱ្យដូចជាអ៊ីមែលពីប្រភពដែលគេទុកចិត្ត (ឧ. CEO, Bank)។	ប្រើក្នុងការវាយប្រហារ Phishing និង Business Email Compromise (BEC)។
៥.៤ Denial of Service (DoS) និង Distributed Denial of Service (DDoS)
គោលដៅ៖ ធ្វើឱ្យសេវាកម្ម (Service) មិនអាចប្រើប្រាស់បាន (Unavailable) សម្រាប់អ្នកប្រើប្រាស់ស្របច្បាប់ (Legitimate Users)។

DoS (Denial of Service)	DDoS (Distributed Denial of Service)
ប្រភព	មកពីប្រភពតែមួយ (Single Source)។	មកពីប្រភពច្រើន (Multiple Sources) ដែលជាធម្មតាជា Botnet (បណ្តាញកុំព្យូទ័រដែលត្រូវបានគ្រប់គ្រងដោយអ្នកវាយប្រហារ)។
កម្រិត	ងាយស្រួលការពារ ដោយការទប់ស្កាត់ IP ប្រភពតែមួយ។	ពិបាកការពារខ្លាំង ដោយសារចរាចរណ៍មកពីរាប់ពាន់ IP ផ្សេងគ្នា។
ការពារ	Firewall ACL, Rate Limiting។	ប្រើប្រាស់ DDoS Mitigation Services (Cloudflare, AWS Shield), បង្កើនកម្រិតបញ្ជូន (Bandwidth)។
ប្រភេទនៃការវាយប្រហារ DDoS៖

Volumetric Attacks៖ បំពេញកម្រិតបញ្ជូន (Bandwidth) របស់គោលដៅ។

ឧទាហរណ៍៖ UDP Flood, ICMP Flood (Ping of Death)។

Protocol Attacks៖ កេងចំណេញពីភាពទន់ខ្សោយនៃពិធីការ (Protocol Vulnerabilities)។

ឧទាហរណ៍៖ SYN Flood – អ្នកវាយប្រហារបញ្ជូនកញ្ចប់ SYN រាប់ពាន់ទៅកាន់ម៉ាស៊ីនមេ ប៉ុន្តែមិនដែលបញ្ចប់ការតភ្ជាប់ (ការឆ្លើយតប ACK) ធ្វើឱ្យម៉ាស៊ីនមេអស់ធនធានក្នុងការរក្សាការតភ្ជាប់ពាក់កណ្តាល (Half-Open Connections)។

Application Layer Attacks៖ កំណត់គោលដៅទៅលើកម្មវិធីជាក់លាក់ (ឧ. HTTP, HTTPS, DNS)។

ឧទាហរណ៍៖ HTTP Flood – បញ្ជូនសំណើ HTTP GET/POST រាប់ពាន់ក្នុងមួយវិនាទីទៅកាន់គេហទំព័រ ធ្វើឱ្យម៉ាស៊ីនមេគេហទំព័រ (Web Server) អស់សមត្ថភាពក្នុងការបម្រើសំណើពិតប្រាកដ។

៥.៥ ការវាយប្រហារលើខ្សែកាប (Physical Security)
ការវាយប្រហារផ្នែករូបវន្តច្រើនតែត្រូវបានគេមើលរំលង ប៉ុន្តែវាមានគ្រោះថ្នាក់ខ្លាំង។

ប្រភេទការវាយប្រហារ៖

Rogue Device៖ អ្នកវាយប្រហារដោតឧបករណ៍ខុសច្បាប់ (ដូចជា Raspberry Pi, Laptop) ចូលទៅក្នុងច្រកបណ្តាញ (Network Port) ដែលមិនមានការការពារ ដើម្បីចូលទៅកាន់បណ្តាញខាងក្នុង។

Rogue Access Point៖ អ្នកវាយប្រហារដំឡើង Access Point (AP) ខុសច្បាប់នៅក្នុងអគារ ដើម្បីបញ្ឆោតបុគ្គលិកឱ្យភ្ជាប់ Wi-Fi ទៅកាន់ AP ក្លែងក្លាយ (Evil Twin) និងស្ទាក់ចាប់ទិន្នន័យរបស់ពួកគេ។

ការកាត់ខ្សែកាប៖ កាត់ខ្សែកាប Fiber Optic ឬ Ethernet ដើម្បីបង្កឱ្យមានការរំខានដល់សេវាកម្ម (Service Disruption)។

ការការពារ៖

ប្រើប្រាស់ Port Security នៅលើ Switch ដើម្បីកំណត់ថាតើឧបករណ៍ណាខ្លះអាចតភ្ជាប់បាន។

ប្រើប្រាស់ 802.1X Authentication (RADIUS) ដើម្បីទាមទារការបញ្ជាក់អត្តសញ្ញាណ (Authentication) មុនពេលឧបករណ៍អាចចូលប្រើបណ្តាញបាន។

ដាក់សោទូបណ្តាញ (Network Racks) និងកន្លែងដាក់ខ្សែកាប (MDF/IDF) ឱ្យមានសុវត្ថិភាព។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៥)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាងការវាយប្រហារ ARP Spoofing និង DNS Spoofing។

តើ SYN Flood Attack ដំណើរការយ៉ាងដូចម្តេច? ហើយវាជាប្រភេទ DDoS បែបណា?

ប្រសិនបើអ្នកជាអ្នកគ្រប់គ្រងបណ្តាញ តើអ្នកនឹងចាត់វិធានការអ្វីខ្លះដើម្បីការពារការដំឡើង Rogue Access Point?

ជំពូកទី ៦៖ មូលដ្ឋានគ្រឹះសុវត្ថិភាពបណ្តាញ
៦.១ VPN (Virtual Private Network)
VPN គឺជាបច្ចេកទេសដែលបង្កើតការតភ្ជាប់ដែលមានសុវត្ថិភាព (Secure Tunnel) រវាងឧបករណ៍ ឬបណ្តាញពីរ ឆ្លងកាត់បណ្តាញសាធារណៈដូចជាអ៊ីនធឺណិត។

សមាសធាតុសំខាន់នៃ VPN៖

Tunneling៖ វេចខ្ចប់កញ្ចប់ទិន្នន័យដើម (Original Packet) នៅក្នុងកញ្ចប់ទិន្នន័យថ្មីមួយទៀត។

Encryption៖ អ៊ិនគ្រីបទិន្នន័យដើម្បីការពារការស្ទាក់ចាប់ (Confidentiality)។

Authentication៖ ផ្ទៀងផ្ទាត់អត្តសញ្ញាណនៃចំណុចបញ្ចប់ទាំងពីរ (Endpoints)។

ប្រភេទ VPN៖

ប្រភេទ	ការពិពណ៌នា	ករណីប្រើប្រាស់
Site-to-Site VPN	ភ្ជាប់បណ្តាញទាំងមូល (Network) ទៅកាន់បណ្តាញមួយទៀត។ ជាធម្មតាប្រើប្រាស់ IPsec (Internet Protocol Security)។	ភ្ជាប់សាខាក្រុមហ៊ុន (Branch Office) ទៅកាន់ទីស្នាក់ការកណ្តាល (Headquarters)។
Remote Access VPN	អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់ម្នាក់ៗ (Individual Users) ភ្ជាប់ពីចម្ងាយទៅកាន់បណ្តាញក្រុមហ៊ុន។	បុគ្គលិកធ្វើការពីផ្ទះ (Work from Home) ភ្ជាប់ទៅកាន់បណ្តាញក្រុមហ៊ុន។
SSL/TLS VPN	ប្រើប្រាស់ពិធីការ SSL/TLS (ដូចគ្នានឹង HTTPS) ដើម្បីបង្កើត VPN ។ អាចប្រើតាមរយៈ Web Browser។	ងាយស្រួលប្រើ មិនត្រូវការដំឡើងកម្មវិធីពិសេស (Client Software)។
ទស្សនៈសន្តិសុខ៖ VPN គឺជាឧបករណ៍ចាំបាច់សម្រាប់ការពារទិន្នន័យនៅពេលប្រើប្រាស់បណ្តាញសាធារណៈ (Public Wi-Fi)។ ទោះយ៉ាងណា VPN មិនធ្វើឱ្យឧបករណ៍មានភាពអនាមិក (Anonymous) ទាំងស្រុងនោះទេ។

៦.២ Wi-Fi Security
បណ្តាញឥតខ្សែ (Wireless Network) គឺងាយរងការវាយប្រហារជាងបណ្តាញមានខ្សែ (Wired Network) ដោយសាររលកវិទ្យុអាចត្រូវបានស្ទាក់ចាប់ពីចម្ងាយ។

ការវិវត្តន៍នៃស្តង់ដារសុវត្ថិភាព Wi-Fi៖

ស្តង់ដារ	ឆ្នាំ	កម្រិតសុវត្ថិភាព	កំណត់សម្គាល់
WEP (Wired Equivalent Privacy)	1997	ខ្សោយខ្លាំង (Obsolete)	អាចត្រូវបានបំបែក (Crack) ក្នុងរយៈពេលប៉ុន្មាននាទី។ មិនគួរប្រើប្រាស់ទេ។
WPA (Wi-Fi Protected Access)	2003	ខ្សោយ	ប្រើ TKIP (Temporal Key Integrity Protocol)។ ងាយរងការវាយប្រហារ KRACK (Key Reinstallation Attack)។
WPA2 (Wi-Fi Protected Access 2)	2004	ល្អ (Good)	ប្រើ AES (Advanced Encryption Standard) និង CCMP។ ជាស្តង់ដារដែលប្រើយ៉ាងទូលំទូលាយ។ ទោះយ៉ាងណាក៏ងាយរងការវាយប្រហារ KRACK ដែរប្រសិនបើមិនបានធ្វើបច្ចុប្បន្នភាព (Patch)។
WPA3 (Wi-Fi Protected Access 3)	2018	ខ្ពស់ (Strong)	ប្រើ Simultaneous Authentication of Equals (SAE) ជំនួស PSK (Pre-Shared Key) ធ្វើឱ្យការវាយប្រហារ Brute Force ពិបាក។ ផ្តល់ការអ៊ិនគ្រីបដោយឡែក (Individualized Encryption) សម្រាប់អ្នកប្រើប្រាស់ម្នាក់ៗ។
ការវាយប្រហារលើ Wi-Fi៖

Evil Twin៖ បង្កើត Access Point ក្លែងក្លាយដែលមានឈ្មោះ (SSID) ដូចគ្នានឹងបណ្តាញ Wi-Fi ពិតប្រាកដ ដើម្បីបញ្ឆោតអ្នកប្រើប្រាស់ឱ្យភ្ជាប់។

De-authentication Attack៖ បញ្ជូនកញ្ចប់ De-authentication Frame ទៅកាន់អ្នកប្រើប្រាស់ដែលកំពុងភ្ជាប់ជាមួយ Access Point ពិតប្រាកដ ដើម្បីបង្ខំឱ្យពួកគេផ្តាច់ការតភ្ជាប់ (Disconnect) ហើយភ្ជាប់ទៅកាន់ Evil Twin វិញ។

៦.៣ DMZ (Demilitarized Zone)
DMZ គឺជាបណ្តាញរង (Subnetwork) ដែលមានទីតាំងនៅចន្លោះបណ្តាញខាងក្នុង (Internal Network) និងបណ្តាញខាងក្រៅ (External Network/Internet)។

គោលបំណង៖

ដាក់ម៉ាស៊ីនមេដែលត្រូវការចូលដំណើរការពីខាងក្រៅ (Public-facing Servers) ដូចជា Web Server, Email Server, DNS Server នៅក្នុង DMZ។

ប្រសិនបើម៉ាស៊ីនមេនៅក្នុង DMZ ត្រូវបានសម្រុក (Compromised) អ្នកវាយប្រហារនៅតែមិនអាចចូលទៅកាន់បណ្តាញខាងក្នុង (Internal Network) បានទេ ដោយសារមាន Firewall បំបែករវាង DMZ និង Internal Network។

រចនាសម្ព័ន្ធ DMZ ធម្មតា៖

text
Internet → Firewall (External) → DMZ (Web, Email, DNS) → Firewall (Internal) → Internal Network (បុគ្គលិក, Database)
៦.៤ Zero Trust Security Model
Zero Trust គឺជាគំរូសន្តិសុខដែលសន្មត់ថា គ្មានអ្វីគួរត្រូវបានទុកចិត្តឡើយ ទាំងនៅខាងក្នុងបណ្តាញ (Inside the Network) ឬខាងក្រៅបណ្តាញ (Outside the Network)។

គោលការណ៍ស្នូលនៃ Zero Trust៖

Never Trust, Always Verify៖ តែងតែផ្ទៀងផ្ទាត់ការចូលដំណើរការគ្រប់ពេលវេលា (Continuous Verification) ដោយផ្អែកលើអត្តសញ្ញាណ (Identity) ស្ថានភាពឧបករណ៍ (Device Health) និងបរិបទផ្សេងៗ (Context)។

Least Privilege Access៖ ផ្តល់សិទ្ធិចូលដំណើរការតែអ្វីដែលចាំបាច់ប៉ុណ្ណោះ (Just-in-Time and Just-Enough Access)។

Micro-segmentation៖ បែងចែកបណ្តាញទៅជាផ្នែកតូចៗ (Micro-segments) ដើម្បីកំណត់ការរីករាលដាលនៃការវាយប្រហារ (Lateral Movement)។

Assume Breach៖ សន្មត់ថាអ្នកវាយប្រហារបានចូលទៅក្នុងបណ្តាញរួចហើយ ដូច្នេះត្រូវតាមដាន (Monitor) និងកត់ត្រា (Log) រាល់សកម្មភាពទាំងអស់។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៦)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង Site-to-Site VPN និង Remote Access VPN។

ហេតុអ្វីបានជា WEP មិនត្រូវបានណែនាំឱ្យប្រើប្រាស់ទៀតទេ? តើស្តង់ដារអ្វីដែលគួរប្រើជំនួស?

តើ DMZ មានសារៈសំខាន់យ៉ាងណាក្នុងការការពារបណ្តាញខាងក្នុង?

ចូរពន្យល់ពីគោលការណ៍ "Never Trust, Always Verify" នៅក្នុងគំរូ Zero Trust។

ជំពូកទី ៧៖ ឧបករណ៍ និងពាក្យបញ្ជាមូលដ្ឋាន
៧.១ ពាក្យបញ្ជា Command Line (Windows Command Prompt / Linux Terminal)
ពាក្យបញ្ជាទាំងនេះគឺជាឧបករណ៍ដំបូងដែលអ្នកសន្តិសុខប្រើដើម្បីធ្វើរោគវិនិច្ឆ័យ (Diagnose) បញ្ហាបណ្តាញ និងស្វែងរកសកម្មភាពគួរឱ្យសង្ស័យ។

ពាក្យបញ្ជា	មុខងារ	ឧទាហរណ៍	ទស្សនៈសន្តិសុខ
ping	ផ្ញើ ICMP Echo Request ទៅកាន់គោលដៅ ដើម្បីពិនិត្យមើលថាតើគោលដៅនៅរស់ (Alive) និងវាស់ពេលវេលាឆ្លើយតប (Latency)។	ping google.com	ប្រើដើម្បីពិនិត្យមើលការតភ្ជាប់អ៊ីនធឺណិត។ អ្នកវាយប្រហារក៏ប្រើ ping ដើម្បីស្កេនរកមើលម៉ាស៊ីនដែលនៅរស់ (Host Discovery)។
tracert (Windows) / traceroute (Linux)	បង្ហាញផ្លូវ (Route) ដែលកញ្ចប់ទិន្នន័យឆ្លងកាត់ពីប្រភពទៅកាន់គោលដៅ។	tracert 8.8.8.8	ប្រើដើម្បីកំណត់ថាតើចំណុចណាមួយនៅលើបណ្តាញ (Hop) ដែលបណ្តាលឱ្យមានការយឺតយ៉ាវ (Latency) ឬបាត់បង់កញ្ចប់ទិន្នន័យ (Packet Loss)។
nslookup	សាកសួរ (Query) DNS Server ដើម្បីបំប្លែង Domain Name (ឧ. example.com) ទៅជា IP Address។	nslookup google.com	ប្រើដើម្បីពិនិត្យមើលថាតើ DNS Resolution ដំណើរការបានត្រឹមត្រូវឬទេ។ អាចប្រើដើម្បីរកឃើញ DNS Spoofing។
netstat	បង្ហាញការតភ្ជាប់បណ្តាញសកម្ម (Active Network Connections), តារាង Routing, និងស្ថិតិនៃពិធីការ។	netstat -an (បង្ហាញការតភ្ជាប់ទាំងអស់ និង Ports ដែលកំពុងស្តាប់)	សំខាន់ណាស់សម្រាប់សន្តិសុខ៖ ប្រើដើម្បីពិនិត្យមើលថាតើមានកម្មវិធី Malware ណាមួយកំពុងបង្កើតការតភ្ជាប់ចេញទៅក្រៅ (Outbound Connection) ទៅកាន់ម៉ាស៊ីនមេ Command & Control (C2) ដែរឬទេ។
ipconfig (Windows) / ifconfig (Linux)	បង្ហាញការកំណត់រចនាសម្ព័ន្ធ IP បច្ចុប្បន្នរបស់កាតបណ្តាញ (IP Address, Subnet Mask, Default Gateway)។	ipconfig /all (បង្ហាញព័ត៌មានលម្អិត រួមទាំង MAC Address, DHCP Server)	ប្រើដើម្បីផ្ទៀងផ្ទាត់ថាឧបករណ៍បានទទួល IP Address ត្រឹមត្រូវពី DHCP Server ដែរឬទេ។
៧.២ សេចក្តីផ្តើម Wireshark
Wireshark គឺជាឧបករណ៍វិភាគពិធីការបណ្តាញ (Network Protocol Analyzer) ដែលប្រើដោយឥតគិតថ្លៃ និងមានប្រជាប្រិយភាពខ្លាំង។

មុខងារសំខាន់ៗ៖

Capture៖ ចាប់យក (Capture) កញ្ចប់ទិន្នន័យ (Packets) ដែលឆ្លងកាត់កាតបណ្តាញ (Network Interface) ក្នុងពេលវេលាជាក់ស្តែង (Real-time)។

Filter៖ ប្រើប្រាស់ Display Filters (ឧ. tcp.port == 80, ip.src == 192.168.1.1) ដើម្បីត្រងតែកញ្ចប់ទិន្នន័យដែលចាប់អារម្មណ៍ប៉ុណ្ណោះ។

Inspect៖ ចុចពីរដងលើកញ្ចប់ទិន្នន័យណាមួយ ដើម្បីមើលព័ត៌មានលម្អិតនៃស្រទាប់នីមួយៗ (Ethernet, IP, TCP, HTTP, etc.)។

Follow TCP Stream៖ ប្រមូលផ្តុំកញ្ចប់ទិន្នន័យទាំងអស់នៃការតភ្ជាប់ TCP ជាក់លាក់មួយ ហើយបង្ហាញជាទិន្នន័យឆៅ (Raw Data) ដែលអាចអានបាន (ឧ. ការសន្ទនា HTTP ទាំងមូល)។

ករណីសិក្សា (Use Case) ក្នុងសន្តិសុខ៖

ស្វែងរកចរាចរណ៍ ARP Spoofing (រកមើល ARP Replies ច្រើនពេក)។

វិភាគចរាចរណ៍ Malware (រកមើលការតភ្ជាប់ទៅកាន់ IP Address ឬ Domain ដែលគេស្គាល់ថាជា Malicious)។

ដោះស្រាយបញ្ហាបណ្តាញ (រកមើល TCP Retransmissions ឬ Dup ACKs)។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៧)៖

តើពាក្យបញ្ជា netstat -an អាចជួយអ្នករកឃើញ Malware ដោយរបៀបណា?

ប្រសិនបើអ្នកចង់ឃើញផ្លូវដែលកញ្ចប់ទិន្នន័យឆ្លងកាត់ទៅកាន់ facebook.com តើអ្នកត្រូវប្រើពាក្យបញ្ជាអ្វី?

នៅក្នុង Wireshark តើអ្នកត្រូវប្រើ Display Filter បែបណាដើម្បីមើលតែចរាចរណ៍ HTTPS (Port 443) ប៉ុណ្ណោះ?

ឧបសម្ព័ន្ធ (Appendix)
A. តារាង Port Numbers សំខាន់ៗ
Port	Protocol	Service
20,21	TCP	FTP
22	TCP	SSH
23	TCP	Telnet
25	TCP	SMTP
53	TCP/UDP	DNS
67,68	UDP	DHCP
80	TCP	HTTP
110	TCP	POP3
123	UDP	NTP
143	TCP	IMAP
161,162	UDP	SNMP
389	TCP/UDP	LDAP
443	TCP	HTTPS
445	TCP	SMB
3389	TCP	RDP
B. តារាង Subnet Mask សម្រាប់ប្រើប្រាស់រហ័ស
CIDR	Subnet Mask	ចំនួន Hosts
/8	255.0.0.0	16,777,214
/16	255.255.0.0	65,534
/24	255.255.255.0	254
/25	255.255.255.128	126
/26	255.255.255.192	62
/27	255.255.255.224	30
/28	255.255.255.240	14
/29	255.255.255.248	6
/30	255.255.255.252	2
C. បញ្ជីពាក្យបច្ចេកទេស (Glossary)
ពាក្យបច្ចេកទេស	ការបកប្រែ / ការពិពណ៌នា
Attack Surface	ចំណុចចូលទាំងអស់ដែលអ្នកវាយប្រហារអាចប្រើដើម្បីចូលទៅក្នុងប្រព័ន្ធ។
Botnet	បណ្តាញកុំព្យូទ័រដែលត្រូវបានឆ្លងមេរោគ និងគ្រប់គ្រងដោយអ្នកវាយប្រហារ។
Encryption	ការបំប្លែងទិន្នន័យពីទម្រង់ដែលអាចអានបាន (Plaintext) ទៅជាទម្រង់ដែលមិនអាចអានបាន (Ciphertext)។
False Positive	ព្រឹត្តិការណ៍ដែល IDS/IPS កំណត់ថាជាការវាយប្រហារ ប៉ុន្តែតាមពិតជាចរាចរណ៍ស្របច្បាប់ (Legitimate Traffic)។
Lateral Movement	ការរីករាលដាលរបស់អ្នកវាយប្រហារពីឧបករណ៍មួយទៅកាន់ឧបករណ៍ផ្សេងទៀតនៅក្នុងបណ្តាញតែមួយ។
Payload	ផ្នែកនៃទិន្នន័យដែលផ្ទុកព័ត៌មានជាក់ស្តែង (មិនមែន Header)។
Rogue Device	ឧបករណ៍ដែលត្រូវបានដំឡើងនៅលើបណ្តាញដោយគ្មានការអនុញ្ញាត។
ចំណាំបញ្ចប់៖
ខ្លឹមសារខាងលើនេះគ្របដណ្តប់លើមូលដ្ឋានគ្រឹះទាំងអស់ដែលនិស្សិតឆ្នាំទី ១ ឬទី ២ ផ្នែកបណ្តាញ និងសន្តិសុខសាយប័រគួរតែដឹង។ សម្រាប់ការសិក្សាកម្រិតខ្ពស់

រៀនបន្ថែម (ជំពូកទី ៨ ដល់ ១១)
ជំពូកទី ៨៖ ពិធីការ Routing និងសន្តិសុខ
៨.១ សេចក្តីផ្តើមអំពី Routing
Routing គឺជាដំណើរការកំណត់ផ្លូវ (Path) ដែលកញ្ចប់ទិន្នន័យ (Packet) ត្រូវឆ្លងកាត់ពីប្រភពទៅកាន់គោលដៅនៅលើបណ្តាញផ្សេងៗគ្នា។

តារាង Routing (Routing Table)៖
Router រក្សាទុកតារាង Routing ដែលមានព័ត៌មានដូចខាងក្រោម៖

វាល (Field)	ការពិពណ៌នា	ឧទាហរណ៍
Destination Network	បណ្តាញគោលដៅ	192.168.10.0/24
Next Hop	អាសយដ្ឋាន IP របស់ Router បន្ទាប់	192.168.1.1
Interface	ច្រក (Port) ដែលត្រូវប្រើដើម្បីចេញទៅ	GigabitEthernet0/0
Metric	តម្លៃបង្ហាញពីចម្ងាយ ឬគុណភាពនៃផ្លូវ (តម្លៃតូច = ល្អជាង)	2
៨.២ ប្រភេទនៃ Routing
ប្រភេទ	ការពិពណ៌នា	គុណសម្បត្តិ	គុណវិបត្តិ	ទស្សនៈសន្តិសុខ
Static Routing	អ្នកគ្រប់គ្រងបណ្តាញបញ្ចូលផ្លូវ (Routes) ដោយដៃ (Manual)។	សាមញ្ញ គ្មានចរាចរណ៍ផ្សព្វផ្សាយ (No Overhead) សុវត្ថិភាពខ្ពស់ (អ្នកវាយប្រហារមិនអាចចាក់បញ្ចូល Route ក្លែងក្លាយបាន)។	មិនអាចបត់បែនបាន (Not Scalable) សម្រាប់បណ្តាញធំៗ។	ល្អសម្រាប់សន្តិសុខ៖ ប្រើសម្រាប់បណ្តាញតូច ឬ Default Route។
Dynamic Routing	Router ផ្លាស់ប្តូរព័ត៌មាន Routing គ្នាទៅវិញទៅមកដោយស្វ័យប្រវត្តិ ដោយប្រើពិធីការ Routing Protocol។	អាចបត់បែនបានខ្ពស់ (Scalable) អាចប្តូរផ្លូវដោយស្វ័យប្រវត្តិនៅពេលបណ្តាញបរាជ័យ (Fault Tolerance)។	បង្កើតចរាចរណ៍បន្ថែម (Overhead) ហើយអាចងាយរងការវាយប្រហារ។	ប្រុងប្រយ័ត្ន៖ ត្រូវតែមានការបញ្ជាក់អត្តសញ្ញាណ (Authentication) ដើម្បីការពារ Route Poisoning។
៨.៣ ពិធីការ Dynamic Routing សំខាន់ៗ
៨.៣.១ RIP (Routing Information Protocol)
ប្រភេទ៖ Distance Vector

Metric៖ Hop Count (ចំនួន Router ដែលត្រូវឆ្លងកាត់)

ដែនកំណត់៖ 15 hops (16 hops = unreachable)

សន្តិសុខ៖ ខ្សោយខ្លាំង។ RIP version 1 គ្មានការបញ្ជាក់អត្តសញ្ញាណ (No Authentication)។ RIP version 2 មានការបញ្ជាក់អត្តសញ្ញាណជាអក្សរច្បាស់ (Plain Text Authentication) ឬ MD5។

ការវាយប្រហារ៖ Route Poisoning – អ្នកវាយប្រហារបញ្ជូន Route Update ដែលមាន Hop Count = 16 ទៅកាន់ Router ដើម្បីធ្វើឱ្យផ្លូវនោះត្រូវបានចាត់ទុកថាមិនអាចប្រើបាន (Unreachable)។

៨.៣.២ OSPF (Open Shortest Path First)
ប្រភេទ៖ Link-State

Metric៖ Cost (គណនាដោយផ្អែកលើ Bandwidth)

លក្ខណៈ៖ រកឃើញការផ្លាស់ប្តូរបណ្តាញបានលឿន (Fast Convergence) សមស្របសម្រាប់បណ្តាញធំៗ (Enterprise Networks)។

សន្តិសុខ៖ OSPF អាចត្រូវបានកំណត់រចនាសម្ព័ន្ធឱ្យប្រើ MD5 ឬ SHA Authentication ដើម្បីផ្ទៀងផ្ទាត់កញ្ចប់ OSPF ទាំងអស់។

ការវាយប្រហារ៖

LSDB Overload៖ អ្នកវាយប្រហារបញ្ជូន Link State Advertisement (LSA) ក្លែងក្លាយរាប់ពាន់ទៅកាន់ Router ដើម្បីធ្វើឱ្យ Link State Database (LSDB) ពេញ និងបណ្តាលឱ្យ Router អស់ធនធាន។

OSPF Route Injection៖ ប្រសិនបើគ្មានការបញ្ជាក់អត្តសញ្ញាណ អ្នកវាយប្រហារអាចចាក់បញ្ចូល Route ក្លែងក្លាយដើម្បីបង្វែរចរាចរណ៍ (Traffic Diversion)។

៨.៣.៣ BGP (Border Gateway Protocol)
ប្រភេទ៖ Path Vector

ការប្រើប្រាស់៖ ពិធីការ Routing ស្នូលនៃអ៊ីនធឺណិត (The Internet's Routing Protocol)។ ប្រើដើម្បីផ្លាស់ប្តូរព័ត៌មាន Routing រវាង Autonomous Systems (AS) – ឧ. រវាង ISP ផ្សេងៗគ្នា។

សន្តិសុខ៖ BGP គឺងាយរងការវាយប្រហារខ្លាំង ប្រសិនបើគ្មានការការពារ។

ការវាយប្រហារលើ BGP៖

BGP Hijacking (ការលួចផ្លូវ BGP)៖ ISP ឬអ្នកវាយប្រហារប្រកាស (Announce) ថាពួកគេជាម្ចាស់ IP Prefix ដែលមិនមែនជារបស់ពួកគេ។

ឧទាហរណ៍ក្នុងប្រវត្តិសាស្ត្រ៖ នៅឆ្នាំ ២០០៨, Pakistan Telecom បានព្យាយាមទប់ស្កាត់ YouTube នៅក្នុងប្រទេស ប៉ុន្តែបានប្រកាស Route ក្លែងក្លាយទៅកាន់ ISP ផ្សេងទៀត ធ្វើឱ្យ YouTube មិនអាចចូលប្រើបាននៅទូទាំងពិភពលោកអស់រយៈពេលជាច្រើនម៉ោង។

ការការពារ៖

RPKI (Resource Public Key Infrastructure)៖ ផ្ទៀងផ្ទាត់ថាតើ AS ណាមួយមានសិទ្ធិប្រកាស IP Prefix ណាមួយ។

BGPsec៖ ផ្នែកបន្ថែមនៃ BGP ដែលផ្តល់ការបញ្ជាក់អត្តសញ្ញាណ (Path Authentication)។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៨)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង Static Routing និង Dynamic Routing ក្នុងទស្សនៈសន្តិសុខ។

តើការវាយប្រហារ BGP Hijacking ដំណើរការយ៉ាងដូចម្តេច? ហើយតើ RPKI អាចការពារវាបានដោយរបៀបណា?

ប្រសិនបើអ្នកជាអ្នកគ្រប់គ្រងបណ្តាញ តើអ្នកនឹងប្រើវិធានការអ្វីខ្លះដើម្បីការពារ OSPF Route Injection?

ជំពូកទី ៩៖ សន្តិសុខបណ្តាញឥតខ្សែ (Wireless Security) ស៊ីជម្រៅ
៩.១ ប្រភេទនៃការវាយប្រហារលើ Wi-Fi
៩.១.១ Evil Twin Attack (កូនភ្លោះអាក្រក់)
ការពិពណ៌នា៖
អ្នកវាយប្រហារបង្កើត Access Point (AP) ក្លែងក្លាយដែលមាន SSID (ឈ្មោះបណ្តាញ) ដូចគ្នាទៅនឹងបណ្តាញ Wi-Fi ស្របច្បាប់ (Legitimate AP)។

ជំហាននៃការវាយប្រហារ៖

អ្នកវាយប្រហារដំឡើង Evil Twin AP នៅក្បែរបណ្តាញពិតប្រាកដ។

ប្រើប្រាស់ De-authentication Attack ដើម្បីបង្ខំអ្នកប្រើប្រាស់ឱ្យផ្តាច់ពី AP ពិតប្រាកដ។

ឧបករណ៍របស់អ្នកប្រើប្រាស់ព្យាយាមភ្ជាប់ទៅកាន់ AP ដែលមាន SSID ដូចគ្នា ហើយភ្ជាប់ទៅកាន់ Evil Twin ដោយស្វ័យប្រវត្តិ។

អ្នកវាយប្រហារអាចស្ទាក់ចាប់ (Intercept) រាល់ចរាចរណ៍ទាំងអស់របស់ជនរងគ្រោះ។

ការការពារ៖

ប្រើប្រាស់ VPN នៅពេលភ្ជាប់ Wi-Fi សាធារណៈ។

តែងតែពិនិត្យមើលវិញ្ញាបនបត្រ (Certificate) នៃគេហទំព័រ HTTPS។

ប្រើប្រាស់ WPA3 ដែលមានមុខងារ Protected Management Frames (PMF) ដើម្បីការពារ De-authentication Attack។

៩.១.២ KRACK Attack (Key Reinstallation Attack)
ការពិពណ៌នា៖
KRACK គឺជាការវាយប្រហារលើពិធីការ WPA2 ដែលត្រូវបានរកឃើញនៅឆ្នាំ ២០១៧។ អ្នកវាយប្រហារអាចបង្ខំឱ្យអតិថិជន (Client) ប្រើប្រាស់សោអ៊ិនគ្រីប (Encryption Key) ដដែលម្តងហើយម្តងទៀត (Reinstall) ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារឌិគ្រីប (Decrypt) ចរាចរណ៍ ចាក់បញ្ចូលកញ្ចប់ទិន្នន័យ (Packet Injection) និងលួចចរាចរណ៍។

ការការពារ៖

ធ្វើបច្ចុប្បន្នភាព (Patch) ឧបករណ៍ទាំងអស់ (ទូរស័ព្ទ, Laptop, Router) ជាប្រចាំ។

ប្តូរទៅប្រើប្រាស់ WPA3 ដែលមិនងាយរង KRACK ។

៩.១.៣ Wi-Fi De-authentication Attack
ការពិពណ៌នា៖
អ្នកវាយប្រហារបញ្ជូនកញ្ចប់ De-authentication Frame (ដែលមិនត្រូវការការបញ្ជាក់អត្តសញ្ញាណ) ទៅកាន់អតិថិជន ដោយក្លែងបន្លំថាជា Access Point ពិតប្រាកដ។

ផលប៉ះពាល់៖

បង្ខំឱ្យអ្នកប្រើប្រាស់ផ្តាច់ការតភ្ជាប់ (Disconnect)។

ប្រើជាឧបករណ៍សម្រាប់ Evil Twin Attack (បង្ខំឱ្យភ្ជាប់ទៅកាន់ AP ក្លែងក្លាយ)។

បង្កើតការរំខាន (Denial of Service) លើបណ្តាញ Wi-Fi។

ការការពារ៖

ប្រើប្រាស់ WPA3 ជាមួយ Protected Management Frames (PMF)។

ប្រើប្រាស់ 802.11w (Management Frame Protection) ប្រសិនបើមាន។

៩.២ ស្តង់ដារសុវត្ថិភាព Wi-Fi កម្រិតខ្ពស់
ស្តង់ដារ	ការអ៊ិនគ្រីប	ការបញ្ជាក់អត្តសញ្ញាណ	កម្រិតសុវត្ថិភាព
WPA3-Personal	AES-256 (GCMP-256)	Simultaneous Authentication of Equals (SAE) – ជំនួស PSK	ខ្ពស់ – ការពារ Brute Force Attack, ផ្តល់ Forward Secrecy
WPA3-Enterprise	AES-256	802.1X with EAP (EAP-TLS, PEAP)	ខ្ពស់បំផុត – ប្រើសម្រាប់ក្រុមហ៊ុន និងស្ថាប័នធំៗ
WPA3-Enhanced Open	Opportunistic Wireless Encryption (OWE)	គ្មាន (Open Network)	កម្រិតមធ្យម – អ៊ិនគ្រីបការតភ្ជាប់ដោយស្វ័យប្រវត្តិ សូម្បីតែបណ្តាញបើកចំហរ (No Password)
Wi-Fi 6 (802.11ax) និងសន្តិសុខ៖

Wi-Fi 6 តម្រូវឱ្យប្រើប្រាស់ WPA3 សម្រាប់ការបញ្ជាក់អត្តសញ្ញាណ (Certification Requirement)។

ផ្តល់នូវការអ៊ិនគ្រីបដោយឡែក (Individualized Encryption) សម្រាប់អ្នកប្រើប្រាស់ម្នាក់ៗនៅលើបណ្តាញសាធារណៈ។

៩.៣ ការការពារបណ្តាញ Wi-Fi សាជីវកម្ម (Enterprise Wi-Fi Security)
ប្រើ 802.1X (RADIUS Authentication)៖

មិនប្រើ Pre-Shared Key (PSK) ដែលងាយលេចធ្លាយ។

អ្នកប្រើប្រាស់ម្នាក់ៗមានឈ្មោះអ្នកប្រើប្រាស់ (Username) និងពាក្យសម្ងាត់ (Password) ឬវិញ្ញាបនបត្រ (Certificate) ផ្ទាល់ខ្លួន។

ប្រើ MPSK (Multiple Pre-Shared Keys)៖

កំណត់ PSK ផ្សេងគ្នាសម្រាប់ក្រុមឧបករណ៍ផ្សេងៗគ្នា (ឧ. PSK សម្រាប់បុគ្គលិក, PSK សម្រាប់ភ្ញៀវ)។

ប្រសិនបើ PSK មួយត្រូវបានសម្រុក អ្នកអាចប្តូរបានតែ PSK នោះ ដោយមិនប៉ះពាល់ដល់អ្នកប្រើប្រាស់ផ្សេងទៀត។

ប្រើ Wireless Intrusion Prevention System (WIPS)៖

WIPS ត្រួតពិនិត្យ (Monitor) វិសាលគមវិទ្យុ (RF Spectrum) ដើម្បីរកឃើញ Rogue AP, Evil Twin, De-authentication Attacks និងការវាយប្រហារផ្សេងៗ។

អាចទប់ស្កាត់ (Contain) Rogue AP ដោយស្វ័យប្រវត្តិតាមរយៈការបញ្ជូន De-authentication Frames ទៅកាន់អតិថិជនដែលភ្ជាប់ទៅ Rogue AP។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី៩)៖

ចូរពន្យល់ពីដំណាក់កាលទាំងអស់នៃការវាយប្រហារ Evil Twin Attack។

តើ KRACK Attack ប៉ះពាល់ដល់ស្តង់ដារសុវត្ថិភាពមួយណា? ហើយតើវិធីការពារអ្វីខ្លះ?

ហេតុអ្វីបានជា WPA3-Personal មានសុវត្ថិភាពជាង WPA2-Personal?

ប្រសិនបើអ្នកជាអ្នកគ្រប់គ្រងបណ្តាញក្រុមហ៊ុន តើអ្នកនឹងប្រើវិធីសាស្ត្របញ្ជាក់អត្តសញ្ញាណបែបណាសម្រាប់ Wi-Fi? ហេតុអ្វី?

ជំពូកទី ១០៖ Network Forensics និងការវិភាគកំណត់ហេតុ (Log Analysis)
១០.១ សេចក្តីផ្តើមអំពី Network Forensics
Network Forensics គឺជាសាខាមួយនៃ Digital Forensics ដែលផ្តោតលើការចាប់យក (Capture) កត់ត្រា (Record) និងវិភាគ (Analyze) ចរាចរណ៍បណ្តាញ ដើម្បីស៊ើបអង្កេតឧប្បត្តិហេតុសន្តិសុខ (Security Incidents)។

គោលបំណងសំខាន់៖

កំណត់ប្រភពនៃការវាយប្រហារ (Attribution) – តើអ្នកណាជាអ្នកវាយប្រហារ?

កំណត់វិសាលភាពនៃការវាយប្រហារ (Scope) – តើមានប្រព័ន្ធអ្វីខ្លះដែលរងផលប៉ះពាល់?

កំណត់វិធីសាស្ត្រនៃការវាយប្រហារ (Methodology) – តើអ្នកវាយប្រហារប្រើបច្ចេកទេសអ្វីខ្លះ?

ប្រមូលភស្តុតាង (Evidence Collection) – សម្រាប់ប្រើប្រាស់ក្នុងតុលាការ ឬការរាយការណ៍។

១០.២ ប្រភពនៃកំណត់ហេតុ (Log Sources) សម្រាប់ Forensics
ប្រភព	ឧទាហរណ៍	ព័ត៌មានដែលទទួលបាន
Firewall Logs	pfSense, Cisco ASA, Palo Alto	Source/Destination IP, Port, Protocol, Action (Allow/Deny), Bytes Transferred
IDS/IPS Logs	Snort, Suricata, Zeek (Bro)	Signature ID, Classification, Priority, Source/Destination, Payload (ផ្នែកខ្លះ)
Router/Switch Logs	Syslog from Cisco, Juniper	Configuration changes, Interface up/down, ACL matches, ARP events
DHCP Logs	ISC DHCP Server, Windows DHCP	IP address leases, MAC address, Hostname, Lease time
DNS Logs	BIND, Windows DNS, Pi-hole	Domain names queried, Client IP, Response codes (NXDOMAIN, etc.)
Proxy Logs	Squid, Blue Coat, Zscaler	URLs visited, User agent, Content type, Cache status
NetFlow/IPFIX	Cisco NetFlow, sFlow, ntopng	Flow metadata: Source/Destination IP, Ports, Protocol, Packets, Bytes, Timestamps
១០.៣ ឧបករណ៍សម្រាប់ Network Forensics
១០.៣.១ Wireshark / TShark
មុខងារ៖ ចាប់យក (Capture) និងវិភាគ (Analyze) កញ្ចប់ទិន្នន័យក្នុងពេលវេលាជាក់ស្តែង (Real-time) ឬពីឯកសារ PCAP (Packet Capture)។

ការប្រើប្រាស់ក្នុង Forensics៖

ស្វែងរកចរាចរណ៍គួរឱ្យសង្ស័យ (ឧ. ការតភ្ជាប់ទៅកាន់ IP ដែលគេស្គាល់ថាជា Malicious)។

បង្កើតឡើងវិញ (Reconstruct) ឯកសារដែលត្រូវបានផ្ទេរតាមបណ្តាញ (ឧ. រូបភាព ឯកសារ PDF)។

វិភាគការសន្ទនា (Conversations) រវាងម៉ាស៊ីនពីរ។

១០.៣.២ Zeek (Bro)
មុខងារ៖ Zeek គឺជាឧបករណ៍សុវត្ថិភាពបណ្តាញដែលបំប្លែងចរាចរណ៍បណ្តាញទៅជាព្រឹត្តិការណ៍ (Events) និងកំណត់ហេតុ (Logs) ដែលមានរចនាសម្ព័ន្ធ (Structured Logs)។

ភាពខុសគ្នាពី Wireshark៖ Wireshark ផ្តោតលើការវិភាគកញ្ចប់ទិន្នន័យនីមួយៗ (Packet-level Analysis) រីឯ Zeek ផ្តោតលើការវិភាគលំហូរ (Flow-level Analysis) និងព្រឹត្តិការណ៍កម្រិតខ្ពស់ (ឧ. HTTP request, SSL certificate)។

ឧទាហរណ៍កំណត់ហេតុ Zeek៖ conn.log (ការតភ្ជាប់ TCP/UDP/ICMP), http.log (សំណើ HTTP ទាំងអស់), dns.log (សំណួរ DNS ទាំងអស់), ssl.log (ព័ត៌មាន SSL/TLS)។

១០.៣.៣ SIEM (Security Information and Event Management)
SIEM គឺជាប្រព័ន្ធដែលប្រមូល (Aggregate) កំណត់ហេតុ (Logs) ពីប្រភពផ្សេងៗគ្នា (Firewall, IDS, Server, Application) មកកាន់កន្លែងតែមួយ ដើម្បីធ្វើការជាប់ទាក់ទង (Correlation) និងវិភាគ។

ឧទាហរណ៍ SIEM ពេញនិយម៖

Splunk (Enterprise)

ELK Stack (Elasticsearch, Logstash, Kibana) – Open Source

QRadar (IBM)

Azure Sentinel (Microsoft Cloud)

Wazuh (Open Source XDR/SIEM)

ករណីសិក្សា (Use Case)៖ ការរកឃើញ Port Scanning ដោយប្រើ SIEM

Firewall Log បង្ហាញការតភ្ជាប់ពី Source IP 203.0.113.5 ទៅកាន់ Destination Ports ផ្សេងៗគ្នារាប់រយ (22, 80, 443, 3389, 445) ក្នុងរយៈពេល 5 វិនាទី។

SIEM ប្រើ Correlation Rule ដើម្បីរកឃើញថានេះជា Port Scan Attack (ឧ. ច្រើនជាង 50 ports ក្នុង 10 វិនាទី)។

SIEM បង្កើត Alert (កម្រិត High) ហើយបញ្ជូនទៅកាន់អ្នកគ្រប់គ្រងសន្តិសុខ។

១០.៤ ការវិភាគកំណត់ហេតុ (Log Analysis) ជាក់ស្តែង
១០.៤.១ ការវិភាគ DNS Logs ដើម្បីរកឃើញ Malware
Malware ជាច្រើនប្រើ DNS ដើម្បីទំនាក់ទំនងជាមួយ Command & Control (C2) Server។

សញ្ញាគួរឱ្យសង្ស័យក្នុង DNS Logs៖

Domain Name វែង និងចៃដន្យ (ឧ. q3r5t7y9u1i2o4p6a8s0d2f4g6h8j0k2l4.net) – ប្រើសម្រាប់ Domain Generation Algorithms (DGA)។

ការសាកសួរ (Query) ច្រើនពេកសម្រាប់ Domain ដែលមិនមាន (NXDOMAIN) – អាចបង្ហាញពី DGA កំពុងស្កេនរក C2 Server។

TXT Record Queries – Malware អាចប្រើ DNS TXT Records ដើម្បីទទួលពាក្យបញ្ជា (DNS Tunneling)។

ឧទាហរណ៍ DNS Log (មិនប្រក្រតី)៖

text
2024-01-15 10:23:45, client 192.168.1.100, query: 3f8d2a9c7e5b1d4f6a8c0e2b4d6f8a0c.xyz, type A, response: NXDOMAIN
2024-01-15 10:23:46, client 192.168.1.100, query: 7a3c5e7g9i1k3m5o7q9s1u3w5y7a9c.xyz, type A, response: NXDOMAIN
2024-01-15 10:23:47, client 192.168.1.100, query: b2d4f6h8j0l2n4p6r8t0v2x4z6b8d0.xyz, type A, response: NXDOMAIN
→ នេះជាសញ្ញាច្បាស់នៃ DGA-based Malware (ឧ. Conficker, Kraken)។

១០.៤.២ ការវិភាគ Firewall Logs ដើម្បីរកឃើញ Data Exfiltration
Data Exfiltration គឺជាការលួចទិន្នន័យចេញពីបណ្តាញខាងក្នុងទៅកាន់ខាងក្រៅ។

សញ្ញាគួរឱ្យសង្ស័យក្នុង Firewall Logs៖

ការតភ្ជាប់ចេញទៅក្រៅ (Outbound) ក្នុងបរិមាណច្រើន (Large Volume) – ឧ. 100 MB ក្នុងរយៈពេល 5 នាទី ពីម៉ាស៊ីនមេដែលជាធម្មតាផ្ញើទិន្នន័យតិចតួច។

ការតភ្ជាប់ទៅកាន់ Ports ដែលមិនធម្មតា – ឧ. Outbound ទៅកាន់ Port 53 (DNS) ពីម៉ាស៊ីនមេដែលមិនមែនជា DNS Server (DNS Tunneling)។

ការតភ្ជាប់ទៅកាន់ IP Address ក្នុងប្រទេសដែលមានហានិភ័យខ្ពស់ (High-risk Countries) – ឧ. ការតភ្ជាប់ទៅកាន់ IP ក្នុងប្រទេសដែលក្រុមហ៊ុនមិនមានប្រតិបត្តិការ។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១០)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង Wireshark និង Zeek ក្នុងបរិបទ Network Forensics។

តើ SIEM មានមុខងារអ្វីខ្លះ? ហើយហេតុអ្វីបានជា SIEM សំខាន់សម្រាប់ក្រុមហ៊ុនធំៗ?

តើសញ្ញាអ្វីខ្លះនៅក្នុង DNS Logs ដែលអាចបង្ហាញពីវត្តមានរបស់ Malware?

ប្រសិនបើអ្នកឃើញ Firewall Log បង្ហាញថាម៉ាស៊ីនមេបុគ្គលិកកំពុងផ្ញើទិន្នន័យ 500 MB ទៅកាន់ IP Address ក្នុងប្រទេសរុស្ស៊ីនៅម៉ោង 3 ព្រឹក តើអ្នកនឹងសន្និដ្ឋានយ៉ាងដូចម្តេច?

ជំពូកទី ១១៖ សេចក្តីផ្តើមអំពី Cloud Networking និងសន្តិសុខ
១១.១ តើអ្វីទៅជា Cloud Computing?
Cloud Computing គឺជាការផ្តល់សេវាកម្មកុំព្យូទ័រ (ម៉ាស៊ីនមេ, ផ្ទុកទិន្នន័យ, មូលដ្ឋានទិន្នន័យ, បណ្តាញ, កម្មវិធី) តាមរយៈអ៊ីនធឺណិត ("the cloud") ដោយបង់ថ្លៃតាមការប្រើប្រាស់ (Pay-as-you-go)។

គំរូសេវាកម្ម Cloud (Service Models)៖

គំរូ	ការពិពណ៌នា	ឧទាហរណ៍	ទំនួលខុសត្រូវសន្តិសុខ
IaaS (Infrastructure as a Service)	ផ្តល់ Virtual Machines, Storage, Networks។ អ្នកប្រើប្រាស់គ្រប់គ្រង OS, Application, Data។	AWS EC2, Google Compute Engine, Azure VMs	អ្នកប្រើប្រាស់ទទួលខុសត្រូវលើ OS, Middleware, Data។ Cloud Provider ទទួលខុសត្រូវលើ Physical Hardware, Hypervisor។
PaaS (Platform as a Service)	ផ្តល់ Platform សម្រាប់អភិវឌ្ឍន៍ និងដាក់ពង្រាយកម្មវិធី (មិនចាំបាច់គ្រប់គ្រង OS ឬ Infrastructure)។	AWS Elastic Beanstalk, Google App Engine, Heroku	Cloud Provider គ្រប់គ្រង OS, Middleware, Runtime។ អ្នកប្រើប្រាស់គ្រប់គ្រង Application និង Data។
SaaS (Software as a Service)	ផ្តល់កម្មវិធីដែលត្រៀមប្រើរួចជាស្រេចតាមរយៈ Web Browser។	Gmail, Office 365, Salesforce, Dropbox	Cloud Provider គ្រប់គ្រងស្ទើរតែទាំងអស់។ អ្នកប្រើប្រាស់គ្រប់គ្រងតែ Data និង Access Control កម្រិតខ្លះ។
១១.២ Cloud Networking មូលដ្ឋាន (AWS VPC as Example)
VPC (Virtual Private Cloud) គឺជាបណ្តាញឯកជន (Virtual Network) ដែលឯកោ (Isolated) នៅក្នុង Cloud របស់ AWS។ អ្នកអាចគ្រប់គ្រងបានទាំងស្រុងលើបរិស្ថានបណ្តាញរបស់អ្នក។

សមាសធាតុសំខាន់នៃ VPC៖

Subnet៖

បែងចែក VPC ទៅជា Subnets (ដូចគ្នានឹង Subnetting ក្នុងបណ្តាញប្រពៃណី)។

Public Subnet៖ Subnet ដែលមាន Route ទៅកាន់ Internet Gateway (IGW) – អាចចូលប្រើពីអ៊ីនធឺណិតបាន។

Private Subnet៖ Subnet ដែលមិនមាន Route ទៅកាន់ IGW – មិនអាចចូលប្រើពីអ៊ីនធឺណិតដោយផ្ទាល់។

Internet Gateway (IGW)៖

Gateway ដែលអនុញ្ញាតឱ្យការតភ្ជាប់រវាង VPC និងអ៊ីនធឺណិត។

NAT Gateway / NAT Instance៖

អនុញ្ញាតឱ្យឧបករណ៍នៅក្នុង Private Subnet ចាប់ផ្តើមការតភ្ជាប់ចេញទៅក្រៅ (Outbound Internet) ប៉ុន្តែមិនអនុញ្ញាតឱ្យមានការតភ្ជាប់ចូលពីខាងក្រៅ (Inbound) ទេ។

Route Table៖

កំណត់ថាតើចរាចរណ៍បណ្តាញត្រូវបានបញ្ជូនទៅទីណា (ដូចគ្នានឹង Routing Table ក្នុង Router ប្រពៃណី)។

Security Group៖

Firewall កម្រិតឧបករណ៍ (Instance-level Firewall)។

ធ្វើការនៅស្រទាប់ទី ៤ (Protocol/Port)។

ជា Stateful – ប្រសិនបើអ្នកអនុញ្ញាត Inbound ចរាចរណ៍ចេញ (Outbound) នឹងត្រូវបានអនុញ្ញាតដោយស្វ័យប្រវត្តិ។

Network ACL (NACL)៖

Firewall កម្រិត Subnet (Subnet-level Firewall)។

ធ្វើការនៅស្រទាប់ទី ៣ និង ៤ (IP, Port)។

ជា Stateless – ត្រូវកំណត់ច្បាប់ទាំង Inbound និង Outbound ដាច់ដោយឡែកពីគ្នា។

១១.៣ ការប្រៀបធៀប Security Group vs Network ACL
លក្ខណៈ	Security Group	Network ACL (NACL)
កម្រិត	Instance (VM, Container)	Subnet
ស្ថានភាព (State)	Stateful (ចងចាំការតភ្ជាប់)	Stateless (មិនចងចាំ)
ច្បាប់ (Rules)	អនុញ្ញាតតែ Allow rules (មិនអាច Deny ដោយផ្ទាល់)	អនុញ្ញាតទាំង Allow និង Deny rules
លំដាប់នៃការវាយតម្លៃ	ពិចារណា Rule ទាំងអស់មុនពេលសម្រេច	ពិចារណាតាមលំដាប់លេខ (Rule number) ពីតូចទៅធំ
ការអនុវត្ត	អនុវត្តតែប្រសិនបើភ្ជាប់ទៅ Instance	អនុវត្តដោយស្វ័យប្រវត្តិទៅលើ Subnet ទាំងអស់
១១.៤ ការវាយប្រហារលើ Cloud Networking
ការវាយប្រហារ	ការពិពណ៌នា	ការការពារ
Misconfigured S3 Bucket	អ្នកវាយប្រហារស្វែងរក S3 Bucket (AWS Storage) ដែលត្រូវបានកំណត់រចនាសម្ព័ន្ធខុសជា Public Read/Write ហើយលួចទិន្នន័យ។	ប្រើ Block Public Access, ត្រួតពិនិត្យ IAM Policies, ប្រើ AWS Trusted Advisor។
SSRF (Server-Side Request Forgery)	អ្នកវាយប្រហារប្រើ Metadata Service (ឧ. http://169.254.169.254/latest/meta-data/) ដើម្បីលួច IAM Credentials របស់ Instance។	ប្រើ IMDSv2 (Instance Metadata Service Version 2) ដែលតម្រូវឱ្យមាន PUT request និង Hop Limit។
Cloud Cryptojacking	អ្នកវាយប្រហារដំឡើងកម្មវិធីជីករូបិយប័ណ្ណ (Cryptominer) នៅលើ VMs ដែលត្រូវបានសម្រុក ដោយប្រើប្រាស់ CPU/GPU របស់ជនរងគ្រោះ។	ត្រួតពិនិត្យ Cloud Spend Anomaly, ប្រើ GuardDuty (AWS) ឬ Azure Security Center។
Lateral Movement through VPC Peering	បន្ទាប់ពីសម្រុក VM ក្នុង VPC មួយ អ្នកវាយប្រហារប្រើ VPC Peering Connection ដើម្បីវាយប្រហារ VPC ផ្សេងទៀត។	ប្រើ Network Segmentation, ប្រើ Service Control Policies (SCP) ដើម្បីកំណត់ VPC Peering។
១១.៥ ការអនុវត្តល្អសម្រាប់ Cloud Network Security (Cloud Security Best Practices)
អនុវត្តគោលការណ៍ "Least Privilege" នៅគ្រប់កម្រិត៖

IAM Roles និង Policies (អ្នកណាអាចធ្វើអ្វីបានខ្លះ?)។

Security Groups (សេវាកម្មណាខ្លះអាចទំនាក់ទំនងគ្នាបាន?)។

ប្រើ Cloud Native Security Tools៖

AWS៖ GuardDuty (threat detection), Security Hub (centralized security), WAF & Shield (DDoS protection), Config (compliance monitoring)។

Azure៖ Azure Security Center, Sentinel (SIEM), DDoS Protection។

Google Cloud៖ Cloud Armor (WAF/DDoS), Security Command Center។

តែងតែអ៊ិនគ្រីបទិន្នន័យ៖

Encryption at rest៖ អ៊ិនគ្រីបទិន្នន័យដែលរក្សាទុកក្នុង Cloud Storage (S3, EBS, RDS)។

Encryption in transit៖ ប្រើ TLS សម្រាប់ការទំនាក់ទំនងរវាងសេវាកម្មក្នុង Cloud និងពី Cloud ទៅ On-premise។

ត្រួតពិនិត្យ (Audit) ការកំណត់រចនាសម្ព័ន្ធជាប្រចាំ៖

ប្រើ AWS Config, Azure Policy, ឬ GCP Asset Inventory ដើម្បីរកឃើញការកំណត់រចនាសម្ព័ន្ធដែលខុសពីស្តង់ដារ (Configuration Drift)។

ប្រើ Infrastructure as Code (IaC) – Terraform, CloudFormation – ដើម្បីកំណត់រចនាសម្ព័ន្ធបណ្តាញ និងសន្តិសុខដោយស្វ័យប្រវត្តិ និងអាចធ្វើម្តងទៀតបាន (Repeatable)។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១១)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង IaaS, PaaS, និង SaaS ដោយផ្តោតលើទំនួលខុសត្រូវសន្តិសុខ។

តើ Security Group និង Network ACL (NACL) ខុសគ្នាយ៉ាងណាខ្លះ?

តើ SSRF Attack គឺជាអ្វី? ហើយតើ IMDSv2 អាចការពារវាបានដោយរបៀបណា?

ហេតុអ្វីបានជា Infrastructure as Code (IaC) មានសារៈសំខាន់សម្រាប់សន្តិសុខ Cloud?

មេរៀនបន្ថែម (ជំពូកទី ១២ ដល់ ១៥)
ជំពូកទី ១២៖ Software-Defined Networking (SDN) និង SD-WAN Security
១២.១ សេចក្តីផ្តើមអំពី SDN (Software-Defined Networking)
SDN គឺជាស្ថាបត្យកម្មបណ្តាញដែលបំបែក (Decouple) Control Plane (ការសម្រេចចិត្តកំណត់ផ្លូវ) ពី Data Plane (ការបញ្ជូនកញ្ចប់ទិន្នន័យជាក់ស្តែង)។

សមាសធាតុសំខាន់នៃ SDN៖

សមាសធាតុ	ការពិពណ៌នា	ឧទាហរណ៍
SDN Controller	"ខួរក្បាល" នៃបណ្តាញ។ ធ្វើការសម្រេចចិត្តកំណត់ផ្លូវ (Routing Decisions) និងផ្ញើច្បាប់ (Flow Rules) ទៅកាន់ Switch/ Router។	OpenDaylight, ONOS, Cisco DNA Center, VMware NSX
Southbound API	ពិធីការទំនាក់ទំនងរវាង Controller និង Switch/ Router។	OpenFlow, NETCONF, gRPC
Northbound API	ចំណុចប្រទាក់ (Interface) សម្រាប់កម្មវិធី និងកម្មវិធីស្វ័យប្រវត្តិកម្ម (Automation Tools) ដើម្បីប្រាប់ Controller ពីអ្វីដែលត្រូវធ្វើ។	REST API, Python SDK
Data Plane Devices	Switch, Router ដែលគ្រាន់តែបញ្ជូនបន្ត (Forward) កញ្ចប់ទិន្នន័យដោយផ្អែកលើ Flow Rules ដែលទទួលបានពី Controller។	OpenFlow-enabled Switch, White-box Switch
ភាពខុសគ្នារវាងបណ្តាញប្រពៃណី (Traditional) និង SDN៖

លក្ខណៈ	បណ្តាញប្រពៃណី (Traditional)	SDN
Control Plane	ចែកចាយ (Distributed) – Router នីមួយៗធ្វើការសម្រេចចិត្តដោយខ្លួនឯង។	កណ្តាល (Centralized) – Controller ធ្វើការសម្រេចចិត្តទាំងអស់។
Configuration	Manual (CLI) ឬ Automation (Ansible) នៅលើឧបករណ៍នីមួយៗ។	Programmatic (API) – កំណត់រចនាសម្ព័ន្ធទាំងអស់តាមរយៈ Controller។
Visibility	ពិបាកក្នុងការមើលឃើញបណ្តាញទាំងមូល (End-to-end visibility)។	មើលឃើញបណ្តាញទាំងមូលបានយ៉ាងងាយ (Centralized View)។
Scalability	កំណត់ដោយចំនួនឧបករណ៍ និងការកំណត់រចនាសម្ព័ន្ធដោយដៃ។	អាចពង្រីកបានយ៉ាងខ្ពស់ (Highly Scalable)។
១២.២ អត្ថប្រយោជន៍ផ្នែកសន្តិសុខនៃ SDN
អត្ថប្រយោជន៍	ការពិពណ៌នា	ឧទាហរណ៍
Centralized Policy Enforcement	អាចអនុវត្តគោលការណ៍សន្តិសុខ (Security Policies) ដូចគ្នាទៅលើបណ្តាញទាំងមូលពីកន្លែងតែមួយ។	ប្រសិនបើអ្នកចង់ទប់ស្កាត់ (Block) ចរាចរណ៍ទៅកាន់ Domain ជាក់លាក់មួយ អ្នកអាចធ្វើបានតែម្តងនៅលើ Controller។
Micro-segmentation	SDN អនុញ្ញាតឱ្យបំបែកបណ្តាញទៅជាផ្នែកតូចៗ (Micro-segments) បានយ៉ាងងាយស្រួល សូម្បីតែកម្រិត Virtual Machine ឬ Container។	នៅក្នុង VMware NSX អ្នកអាចបង្កើតច្បាប់ Firewall រវាង VM ពីរដែលនៅលើម៉ាស៊ីន Physical តែមួយ។
Dynamic Threat Response	SDN Controller អាចរួមបញ្ចូលជាមួយ IDS/IPS ឬ SIEM ដើម្បីទប់ស្កាត់ (Block) ចរាចរណ៍គួរឱ្យសង្ស័យដោយស្វ័យប្រវត្តិ។	ប្រសិនបើ SIEM រកឃើញ IP គួរឱ្យសង្ស័យ SIEM អាចប្រាប់ SDN Controller ឱ្យបញ្ចូល Flow Rule ដើម្បីទប់ស្កាត់ IP នោះនៅលើ Switch ទាំងអស់ក្នុងរយៈពេលប៉ុន្មានវិនាទី។
Network Slicing	បង្កើតបណ្តាញនិម្មិត (Virtual Networks) ច្រើននៅលើ Infrastructure រូបវន្តតែមួយ ដោយមានភាពឯកោ (Isolation) ពីគ្នាទៅវិញទៅមក។	ប្រើក្នុង 5G Networks ដើម្បីបំបែកចរាចរណ៍ IoT, Mobile Broadband, និង Critical Communications។
១២.៣ ហានិភ័យសន្តិសុខនៃ SDN
ហានិភ័យ	ការពិពណ៌នា	ការការពារ
Controller is a Single Point of Failure	ប្រសិនបើ SDN Controller ត្រូវបានវាយប្រហារ ឬបរាជ័យ បណ្តាញទាំងមូលអាចដាច់។	ប្រើ Controller Clustering (High Availability), ប្រើ Multiple Controllers នៅក្នុងតំបន់ផ្សេងគ្នា (Geographic Redundancy)។
Northbound API Security	Northbound API (REST API) អាចត្រូវបានវាយប្រហារ ប្រសិនបើគ្មានការបញ្ជាក់អត្តសញ្ញាណ (Authentication) និងការអនុញ្ញាត (Authorization) ត្រឹមត្រូវ។	ប្រើ API Gateway, OAuth 2.0, Mutual TLS (mTLS), Rate Limiting។
Southbound Protocol Vulnerabilities	OpenFlow ឬ NETCONF អាចមានភាពទន់ខ្សោយ (Vulnerabilities) ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារចាក់បញ្ចូល Flow Rules ក្លែងក្លាយ។	ប្រើ TLS Encryption សម្រាប់ Southbound Communication, ផ្ទៀងផ្ទាត់ Switch/Controller (Certificate-based Authentication)។
១២.៤ SD-WAN (Software-Defined Wide Area Network)
SD-WAN គឺជាកម្មវិធីនៃបច្ចេកវិទ្យា SDN ទៅលើបណ្តាញ WAN (Wide Area Network) ដើម្បីភ្ជាប់សាខាក្រុមហ៊ុន (Branch Offices) ទៅកាន់ទីស្នាក់ការកណ្តាល (Headquarters) និង Cloud ។

ភាពខុសគ្នារវាង Traditional WAN (MPLS) និង SD-WAN៖

លក្ខណៈ	Traditional WAN (MPLS)	SD-WAN
ការតភ្ជាប់	MPLS (ថ្លៃ និងស្មុគស្មាញ)	អាចប្រើ MPLS, Broadband (អ៊ីនធឺណិតថោក), 4G/5G LTE ចម្រុះគ្នា។
Routing	IP Routing (OSPF, BGP) – ផ្អែកលើ IP និង Metric។	Policy-based Routing – ផ្អែកលើ Application, Performance, Security (ឧ. បញ្ជូន VoIP តាម MPLS, បញ្ជូន Backup តាម Broadband)។
ការគ្រប់គ្រង	Manual (CLI) ឬ Automation នៅលើ CPE (Customer Premises Equipment) នីមួយៗ។	Centralized Cloud-based Management (Dashboard) – កំណត់រចនាសម្ព័ន្ធទាំងអស់ពីកន្លែងតែមួយ។
សន្តិសុខ	តម្រូវឱ្យប្រើ Firewall, IPS, VPN ដាច់ដោយឡែកពីគ្នា។	សន្តិសុខរួមបញ្ចូលគ្នា (Integrated Security) – Firewall, IPS, VPN, Web Filtering, Anti-malware នៅក្នុងឧបករណ៍តែមួយ (Secure SD-WAN)។
អត្ថប្រយោជន៍ផ្នែកសន្តិសុខនៃ SD-WAN៖

End-to-End Encryption៖ ចរាចរណ៍រវាងសាខាទាំងអស់ត្រូវបានអ៊ិនគ្រីបដោយស្វ័យប្រវត្តិ (IPsec VPN)។

Micro-segmentation នៅលើ WAN៖ អាចបំបែកចរាចរណ៍ (ឧ. Finance, HR, Guest) នៅលើតំណ WAN តែមួយ។

Cloud-based Security៖ SD-WAN អាចបញ្ជូនចរាចរណ៍ទៅកាន់ Security Service Edge (SSE) ដូចជា Zscaler, Netskope, McAfee MVISION ដើម្បីស្កេនរក Malware មុនពេលចូលទៅកាន់អ៊ីនធឺណិត (Cloud Security as a Service)។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១២)៖

ចូរពន្យល់ពីភាពខុសគ្នារវាង Control Plane និង Data Plane នៅក្នុង SDN។

តើអត្ថប្រយោជន៍ផ្នែកសន្តិសុខសំខាន់ៗនៃ SDN មានអ្វីខ្លះ?

តើ SD-WAN ខុសពី Traditional WAN (MPLS) យ៉ាងដូចម្តេចខ្លះ? ហើយតើ SD-WAN ផ្តល់អត្ថប្រយោជន៍ផ្នែកសន្តិសុខអ្វីខ្លះ?

ប្រសិនបើអ្នកជាអ្នកគ្រប់គ្រងបណ្តាញ តើអ្នកនឹងចាត់វិធានការអ្វីខ្លះដើម្បីការពារ SDN Controller ពីការវាយប្រហារ?

ជំពូកទី ១៣៖ Zero Trust Network Access (ZTNA) និង SASE
១៣.១ ដែនកំណត់នៃគំរូសន្តិសុខបែបប្រពៃណី (Traditional Perimeter-based Security)
គំរូសន្តិសុខបែបប្រពៃណី (Castle-and-Moat Model) សន្មត់ថា៖

ខាងក្នុងបណ្តាញ (Inside) = អាចទុកចិត្តបាន (Trusted)

ខាងក្រៅបណ្តាញ (Outside) = មិនអាចទុកចិត្តបាន (Untrusted)

ដែនកំណត់៖

នៅពេលដែលអ្នកវាយប្រហារឆ្លងកាត់ Firewall (ឧ. តាមរយៈ Phishing) ពួកគេអាចធ្វើ Lateral Movement (ផ្លាស់ទីនៅខាងក្នុងបណ្តាញ) ដោយសេរី។

បុគ្គលិកធ្វើការពីផ្ទះ (Work from Home) ឬប្រើ Cloud Applications (SaaS) ធ្វើឱ្យ "ជញ្ជាំង" (Perimeter) លែងមានន័យ។

១៣.២ Zero Trust Network Access (ZTNA)
ZTNA (ត្រូវបានគេស្គាល់ថា "Software-Defined Perimeter" ឬ SDP) គឺជាបច្ចេកវិទ្យាដែលអនុវត្តគោលការណ៍ Zero Trust ទៅលើការចូលដំណើរការបណ្តាញ។

គោលការណ៍ស្នូលនៃ ZTNA៖

គោលការណ៍	ការពិពណ៌នា	ឧទាហរណ៍
Never Trust, Always Verify	មិនមានអ្វីត្រូវបានទុកចិត្តឡើយ ទោះបីជាស្ថិតនៅខាងក្នុងបណ្តាញក៏ដោយ។	រាល់ការស្នើសុំ (Request) ត្រូវតែត្រូវបានផ្ទៀងផ្ទាត់ (Authenticated) និងអនុញ្ញាត (Authorized)។
Least Privilege Access	ផ្តល់សិទ្ធិចូលដំណើរការតែអ្វីដែលចាំបាច់ប៉ុណ្ណោះ (Just-in-Time, Just-Enough)។	បុគ្គលិកផ្នែកទីផ្សារអាចចូលប្រើតែ Marketing Server មិនមែន HR Database។
Micro-segmentation	បំបែកបណ្តាញទៅជាផ្នែកតូចៗ ដើម្បីកំណត់ Lateral Movement។	សូម្បីតែនៅក្នុងបណ្តាញដូចគ្នា VM ពីរមិនអាចទំនាក់ទំនងគ្នាបានទេ លុះត្រាតែមានច្បាប់ច្បាស់លាស់។
Assume Breach	សន្មត់ថាអ្នកវាយប្រហារបានចូលទៅក្នុងបណ្តាញរួចហើយ។	តាមដាន (Monitor) និងកត់ត្រា (Log) រាល់សកម្មភាពទាំងអស់។
របៀបដែល ZTNA ដំណើរការ (Comparison with VPN)៖

លក្ខណៈ	Traditional VPN	ZTNA
ការចូលដំណើរការ	នៅពេលភ្ជាប់ VPN អ្នកប្រើប្រាស់អាចចូលប្រើបណ្តាញខាងក្នុងបាន ទាំងអស់ (Full Network Access)។	អ្នកប្រើប្រាស់អាចចូលប្រើបានតែ កម្មវិធី (Application) ជាក់លាក់ប៉ុណ្ណោះ មិនមែនបណ្តាញទាំងមូលទេ។
Visibility	IP Address របស់អ្នកប្រើប្រាស់ត្រូវបានលាក់ (ប៉ុន្តែពួកគេអាចមើលឃើញបណ្តាញខាងក្នុង)។	ម៉ាស៊ីនមេ (Application Server) ត្រូវបាន លាក់ (Hidden) ពីអ៊ីនធឺណិត។ មានតែ ZTNA Gateway ទេដែលអាចមើលឃើញ។
ការតភ្ជាប់	ពី Client → VPN Gateway → Application Server (ផ្លូវវែង)។	ពី Client → ZTNA Gateway → Application Server (អាចប្រើផ្លូវខ្លី Client → Application Server ដោយផ្ទាល់ប្រសិនបើមានការអនុញ្ញាត)។
Authentication	ជាធម្មតាមានតែ Username/Password និង MFA (ប្រសិនបើកំណត់)។	Continuous Authentication – ផ្ទៀងផ្ទាត់គ្រប់ពេលវេលា (Device Health, User Behavior, Location)។
ឧទាហរណ៍ផលិតផល ZTNA៖ Zscaler Private Access (ZPA), Cloudflare Zero Trust, Cisco Duo Beyond, Microsoft Azure AD Application Proxy, Palo Alto Prisma Access។

១៣.៣ SASE (Secure Access Service Edge)
SASE (ប្រកាសថា "sassy") គឺជាគំរូស្ថាបត្យកម្មដែលរួមបញ្ចូលគ្នានូវ បណ្តាញ (Networking) និង សន្តិសុខ (Security) ទៅក្នុងសេវាកម្មតែមួយដែលផ្តល់ពី Cloud។

សមាសធាតុនៃ SASE៖

សមាសធាតុបណ្តាញ (Networking)	សមាសធាតុសន្តិសុខ (Security)
SD-WAN	Secure Web Gateway (SWG)
WAN Optimization	Cloud Access Security Broker (CASB)
QoS (Quality of Service)	Firewall as a Service (FWaaS)
Global Load Balancing	Zero Trust Network Access (ZTNA)
Data Loss Prevention (DLP)
Browser Isolation (RBI)
ហេតុអ្វី SASE សំខាន់?
បុគ្គលិកឥឡូវនេះធ្វើការពីគ្រប់ទីកន្លែង (Home, Coffee Shop, Airplane) ហើយកម្មវិធី (Applications) ឥឡូវនេះស្ថិតនៅក្នុង Cloud (SaaS, IaaS)។ ការបង្ខំឱ្យចរាចរណ៍ឆ្លងកាត់ Data Center (Backhauling) គឺយឺត និងគ្មានប្រសិទ្ធភាព។ SASE នាំយកសន្តិសុខទៅកាន់ "Edge" (កន្លែងដែលអ្នកប្រើប្រាស់នៅ) តាមរយៈ Cloud។

ឧទាហរណ៍ SASE Providers៖

Cloudflare One (Zero Trust + CDN + WAF)

Cato Networks (SASE platform)

Zscaler (Zscaler Internet Access + Zscaler Private Access)

Cisco (Umbrella + Duo + SD-WAN)

Netskope (Security Service Edge - SSE)

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១៣)៖

តើដែនកំណត់សំខាន់ៗនៃគំរូសន្តិសុខបែបប្រពៃណី (Perimeter-based) មានអ្វីខ្លះ?

ចូរពន្យល់ពីភាពខុសគ្នារវាង Traditional VPN និង ZTNA។

តើ ZTNA អនុវត្តគោលការណ៍ "Least Privilege Access" យ៉ាងដូចម្តេច?

តើ SASE ជាអ្វី? ហើយតើសមាសធាតុសំខាន់ៗនៃ SASE មានអ្វីខ្លះ?

ជំពូកទី ១៤៖ Network Automation & Security (DevSecOps for Network)
១៤.១ សេចក្តីផ្តើមអំពី Network Automation
Network Automation គឺជាដំណើរការប្រើប្រាស់កម្មវិធី (Software) ដើម្បីកំណត់រចនាសម្ព័ន្ធ (Configure) គ្រប់គ្រង (Manage) ធ្វើតេស្ត (Test) និងដាក់ពង្រាយ (Deploy) ឧបករណ៍បណ្តាញដោយស្វ័យប្រវត្តិ ជំនួសឱ្យការធ្វើដោយដៃតាមរយៈ CLI (Command Line Interface)។

ហេតុអ្វីត្រូវការ Network Automation?

បញ្ហានៃការកំណត់រចនាសម្ព័ន្ធដោយដៃ (Manual CLI)	ដំណោះស្រាយដោយ Automation
កំហុសឆ្គងដោយសារមនុស្ស (Human Error) – វាយខុស IP, ភ្លេចបញ្ចូល command ។	កំណត់រចនាសម្ព័ន្ធដូចគ្នា (Consistent) លើឧបករណ៍រាប់រយ។
យឺត (Slow) – ត្រូវ SSH ចូលទៅកាន់ Router នីមួយៗ។	កំណត់រចនាសម្ព័ន្ធក្នុងពេលដំណាលគ្នា (Parallel Execution) លើឧបករណ៍រាប់រយក្នុងរយៈពេលប៉ុន្មានវិនាទី។
ពិបាកក្នុងការតាមដានការផ្លាស់ប្តូរ (Change Tracking) – គ្មាន version control។	ប្រើ Git ដើម្បីរក្សាទុកការកំណត់រចនាសម្ព័ន្ធជា Code (Infrastructure as Code)។
គ្មានការធ្វើតេស្ត (Testing) មុនពេលដាក់ពង្រាយ។	អាចធ្វើតេស្តការកំណត់រចនាសម្ព័ន្ធនៅក្នុងបរិស្ថានសាកល្បង (Staging/Test Environment) មុនពេលដាក់ពង្រាយក្នុងបរិស្ថានផលិតកម្ម (Production)។
១៤.២ ឧបករណ៍សម្រាប់ Network Automation
ឧបករណ៍	ការពិពណ៌នា	ករណីប្រើប្រាស់ (Use Case)
Ansible	Agentless automation tool ប្រើ YAML (Playbooks)។ ភ្ជាប់ទៅកាន់ឧបករណ៍តាមរយៈ SSH, NETCONF, REST API។	កំណត់រចនាសម្ព័ន្ធ VLANs, ACLs, OSPF នៅលើ Router/Switch រាប់រយក្នុងពេលតែមួយ។
Terraform	Infrastructure as Code (IaC) tool ប្រើ HCL (HashiCorp Configuration Language)។ ផ្តោតលើការបង្កើត (Provision) Infrastructure (Cloud VPC, Subnets, Firewall Rules)។	បង្កើត AWS VPC, Subnets, Security Groups, Route Tables ដោយស្វ័យប្រវត្តិ។
Python + Netmiko / NAPALM	Python library សម្រាប់ភ្ជាប់ទៅកាន់ឧបករណ៍បណ្តាញតាមរយៈ SSH (Netmiko) ឬ API (NAPALM)។	សរសេរ Script ដើម្បីប្រមូល (Collect) configuration ពីឧបករណ៍ទាំងអស់ ហើយផ្ទុកទៅក្នុង Database។
Git	Version control system។ រក្សាទុកការផ្លាស់ប្តូរទាំងអស់នៃ Network Configuration (Config as Code)។	ប្រើ Git ដើម្បីតាមដានថាអ្នកណាបានផ្លាស់ប្តូរ ACL នៅពេលណា ហើយអាចត្រឡប់ទៅការកំណត់ចាស់វិញ (Rollback) ប្រសិនបើមានបញ្ហា។
CI/CD Pipelines (Jenkins, GitLab CI, GitHub Actions)	ស្វ័យប្រវត្តិកម្មដំណើរការធ្វើតេស្ត (Test) និងដាក់ពង្រាយ (Deploy) Network Configuration។	នៅពេលអ្នកបញ្ចូល (Push) code ទៅកាន់ Git, CI/CD Pipeline នឹងធ្វើតេស្តដោយស្វ័យប្រវត្តិ (ឧ. ពិនិត្យ syntax) ហើយដាក់ពង្រាយទៅកាន់ Production Network។
១៤.៣ DevSecOps for Network: ការរួមបញ្ចូលសន្តិសុខទៅក្នុង Automation
DevSecOps មានន័យថា "បញ្ចូលសន្តិសុខ (Security) តាំងពីដំណាក់កាលដំបូងនៃការអភិវឌ្ឍន៍ (Shift Left)"។

ការអនុវត្ត DevSecOps ក្នុងបណ្តាញ៖

ដំណាក់កាល	សកម្មភាព	ឧបករណ៍
Code (Config as Code)	សរសេរ Network Configuration ជា Code (YAML, Python, HCL) ហើយរក្សាទុកក្នុង Git Repository។	Git (GitHub, GitLab, Bitbucket)
Static Analysis	ស្កេនរកមើលភាពទន់ខ្សោយ (Vulnerabilities) ឬការកំណត់រចនាសម្ព័ន្ធខុស (Misconfigurations) មុនពេលដាក់ពង្រាយ។	Checkov (for Terraform), Ansible-lint, NAPALM-validate
Testing (Staging)	ដាក់ពង្រាយ Configuration ទៅកាន់បរិស្ថានសាកល្បង (Staging) ដែលដូចគ្នានឹង Production។ ធ្វើតេស្តថាតើមានបញ្ហាអ្វីខ្លះ?	Cisco Modeling Labs (CML), GNS3, EVE-NG
Security Scanning	ស្កេនបរិស្ថានសាកល្បងរកមើល Open Ports, Weak Ciphers, Default Passwords។	Nmap, OpenVAS, Trivy, Nikto
Deploy (Production)	ដាក់ពង្រាយ Configuration ទៅកាន់ Production Network ដោយស្វ័យប្រវត្តិ (Automated) ប្រសិនបើការធ្វើតេស្តទាំងអស់ជោគជ័យ។	Ansible, Terraform, CI/CD Pipeline
Monitoring & Compliance	ត្រួតពិនិត្យ (Monitor) ថាតើ Configuration នៅតែត្រូវគ្នានឹងស្តង់ដារ (Compliance) ដែរឬទេ។	AWS Config, Azure Policy, Cisco DNA Center Assurance
១៤.៤ ឧទាហរណ៍ជាក់ស្តែង៖ ស្វ័យប្រវត្តិកម្មការកំណត់ ACL លើ Router ១០០ គ្រឿង
បញ្ហា៖ អ្នកត្រូវបន្ថែម ACL ថ្មី (Deny SSH from 203.0.113.0/24) ទៅលើ Router ចំនួន ១០០ គ្រឿង។

ដំណោះស្រាយដោយដៃ (Manual)៖

SSH ចូលទៅ Router #1 → configure terminal → access-list... → ចេញ។

ធ្វើម្តងទៀត ៩៩ ដងទៀត។

ពេលវេលា៖ ~៥ នាទី × ១០០ = ៨ ម៉ោង។

ដំណោះស្រាយដោយ Automation (Ansible)៖

yaml
# playbook.yml
- name: Add ACL to all routers
  hosts: all_routers
  tasks:
    - name: Add deny SSH from 203.0.113.0/24
      ios_config:
        lines:
          - access-list 101 deny tcp 203.0.113.0 0.0.0.255 any eq 22
          - access-list 101 permit ip any any
        parents: ip access-list extended 101
ពាក្យបញ្ជាដើម្បីដំណើរការ៖
ansible-playbook -i inventory.txt playbook.yml

លទ្ធផល៖ Router ទាំង ១០០ ត្រូវបានកំណត់រចនាសម្ព័ន្ធក្នុងរយៈពេល ~២ នាទី។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១៤)៖

តើ Network Automation ដោះស្រាយបញ្ហាអ្វីខ្លះនៃការកំណត់រចនាសម្ព័ន្ធដោយដៃ?

ចូរពន្យល់ពីតួនាទីរបស់ Ansible, Terraform, និង Git ក្នុង Network Automation។

តើ "Shift Left" មានន័យយ៉ាងណាក្នុងបរិបទ DevSecOps សម្រាប់បណ្តាញ?

ប្រសិនបើអ្នកត្រូវការបង្កើត VPC ថ្មីនៅក្នុង AWS ជាមួយ Subnets, Security Groups, និង Route Tables តើអ្នកនឹងប្រើឧបករណ៍អ្វីខ្លះ?

ជំពូកទី ១៥៖ ការត្រៀមប្រឡងវិញ្ញាបនបត្របណ្តាញ និងសន្តិសុខ
១៥.១ វិញ្ញាបនបត្រអន្តរជាតិសំខាន់ៗ
វិញ្ញាបនបត្រខាងក្រោមនេះត្រូវបានទទួលស្គាល់ជាអន្តរជាតិ និងបង្កើនឱកាសការងាររបស់អ្នកយ៉ាងខ្លាំង។

វិញ្ញាបនបត្រ	អ្នកផ្តល់	កម្រិត	មុខវិជ្ជាសំខាន់ៗ
CompTIA Network+	CompTIA	Beginner	OSI Model, TCP/IP, Routing, Switching, Wireless, Network Troubleshooting
CompTIA Security+	CompTIA	Beginner-Intermediate	Threats, Attacks, Cryptography, Identity Management, Risk Management, Network Security
Cisco CCNA (200-301)	Cisco	Intermediate	Network Fundamentals, IP Connectivity, IP Services, Security Fundamentals, Automation
CompTIA CySA+	CompTIA	Intermediate-Advanced	Threat Detection, Security Monitoring, Vulnerability Management, Incident Response
Cisco CCNP Security	Cisco	Advanced	VPN, Firewall (ASA/FTD), ISE (Identity Services Engine), Email Security, Web Security
Certified Ethical Hacker (CEH)	EC-Council	Intermediate	Footprinting, Scanning, Enumeration, System Hacking, Sniffing, Social Engineering, DDoS
Certified Information Systems Security Professional (CISSP)	ISC²	Advanced (តម្រូវឱ្យមានបទពិសោធន៍ ៥ ឆ្នាំ)	Security & Risk Management, Asset Security, Security Architecture, Network Security, Identity Management, Security Assessment, Security Operations, Software Development Security
១៥.២ ការរៀបចំផែនការសិក្សា (Study Roadmap)
ផ្លូវទី ១៖ សម្រាប់អ្នកចាប់ផ្តើម (Beginner)
រយៈពេល៖ ៦-១២ ខែ

លំដាប់	វិញ្ញាបនបត្រ	ពេលវេលាប៉ាន់ស្មាន	ធនធានណែនាំ
1	CompTIA Network+	២-៣ ខែ	Professor Messer (YouTube), Jason Dion (Udemy), Exam Compass
2	CompTIA Security+	២-៣ ខែ	Professor Messer, Jason Dion, GCGA (Get Certified Get Ahead)
3	Cisco CCNA	៣-៤ ខែ	Jeremy's IT Lab (YouTube), Neil Anderson (Udemy), Boson ExSim
ផ្លូវទី ២៖ សម្រាប់អ្នកចង់ក្លាយជាអ្នកវិភាគសន្តិសុខ (Security Analyst)
រយៈពេល៖ ១២-១៨ ខែ (បន្ទាប់ពី Security+)

លំដាប់	វិញ្ញាបនបត្រ	ពេលវេលាប៉ាន់ស្មាន	ធនធានណែនាំ
1	CompTIA CySA+	២-៣ ខែ	Jason Dion, Sybex Study Guide, TryHackMe (Blue Team track)
2	Certified Ethical Hacker (CEH)	៣-៤ ខែ	EC-Council iLabs, Matt Walker (All-in-One), Hack The Box (Basic)
3	Cisco CCNP Security	៤-៦ ខែ	Cisco Press, INE, CML (Cisco Modeling Labs)
១៥.៣ វិធីសាស្ត្រសិក្សាដែលមានប្រសិទ្ធភាព
អនុវត្តដោយដៃ (Hands-on Practice) គឺសំខាន់បំផុត៖

ប្រើ Packet Tracer (សម្រាប់ CCNA) – ទាញយកដោយឥតគិតថ្លៃពី Cisco NetAcad។

ប្រើ GNS3 ឬ EVE-NG (សម្រាប់ CCNP និង Security) – អាចដំណើរការ Router/Switch/Firewall (IOS, IOS-XE, ASA, FTD) ជាក់ស្តែង។

ប្រើ Wireshark ដើម្បីចាប់យក (Capture) ចរាចរណ៍ពិតប្រាកដរបស់អ្នក។

ធ្វើតេស្តសាកល្បង (Practice Exams) ច្រើន៖

សម្រាប់ CompTIA៖ Jason Dion Practice Exams (Udemy) ឬ Professor Messer Practice Exams។

សម្រាប់ Cisco៖ Boson ExSim (ថ្លៃ ប៉ុន្តែមានគុណភាពខ្ពស់)។

ធ្វើតេស្តរហូតដល់អ្នកទទួលបានពិន្ទុ ៩០% ឡើងទៅមុនពេលប្រឡងពិតប្រាកដ។

ប្រើប្រាស់ Lab Platforms អនឡាញ៖

Cisco DevNet Sandbox – ឥតគិតថ្លៃ (សម្រាប់សាកល្បង API, Automation)។

TryHackMe – រៀន Cybersecurity តាមរយៈ CTF (Capture The Flag)។

Hack The Box (HTB) – កម្រិតខ្ពស់ជាង TryHackMe (សម្រាប់ CEH, OSCP)។

ចូលរួមសហគមន៍ (Community)៖

Reddit៖ r/CompTIA, r/ccna, r/cybersecurity, r/networking។

Discord៖ The Cyber Mentor, Network Chuck (មានសហគមន៍ខ្មែរខ្លះ)។

Telegram៖ ក្រុមសិក្សាផ្នែកបណ្តាញ និងសន្តិសុខជាភាសាខ្មែរ (ស្វែងរកតាមពាក្យគន្លឹះ "CCNA Khmer", "Cybersecurity Cambodia")។

១៥.៤ ឧទាហរណ៍សំណួរប្រឡង (Sample Exam Questions)
សំណួរបែប CCNA៖

សំណួរ៖ តើពាក្យបញ្ជាមួយណាដែលប្រើដើម្បីមើលតារាង ARP (ARP Table) នៅលើ Router Cisco?
A. show mac address-table
B. show arp
C. show ip neighbors
D. show interfaces

ចម្លើយត្រឹមត្រូវ៖ B. show arp

សំណួរបែប Security+៖

សំណួរ៖ តើការវាយប្រហារប្រភេទណាដែលអ្នកវាយប្រហារបញ្ជូនកញ្ចប់ SYN រាប់ពាន់ទៅកាន់ម៉ាស៊ីនមេ ប៉ុន្តែមិនដែលបញ្ចប់ការតភ្ជាប់ (ACK) ធ្វើឱ្យម៉ាស៊ីនមេអស់ធនធាន?
A. Ping of Death
B. SYN Flood
C. DNS Spoofing
D. ARP Poisoning

ចម្លើយត្រឹមត្រូវ៖ B. SYN Flood

សំណួរបែប CySA+ (Performance-based)៖

សំណួរ៖ អ្នកបានចាប់យក (Capture) ចរាចរណ៍បណ្តាញដោយប្រើ Wireshark ហើយឃើញកញ្ចប់ទិន្នន័យដូចខាងក្រោម៖

text
10:23:45.123, 192.168.1.100 → 8.8.8.8, DNS Query: google.com A
10:23:45.456, 8.8.8.8 → 192.168.1.100, DNS Response: google.com A 142.250.185.46
10:23:46.789, 192.168.1.100 → 142.250.185.46, TCP SYN (port 443)
10:23:46.890, 142.250.185.46 → 192.168.1.100, TCP SYN-ACK
10:23:46.891, 192.168.1.100 → 142.250.185.46, TCP ACK
តើនេះជាចរាចរណ៍ប្រភេទណា? ហើយតើមានសញ្ញាគួរឱ្យសង្ស័យអ្វីខ្លះ?

ចម្លើយ៖ នេះជាចរាចរណ៍ HTTPS ធម្មតា (Google.com)។ មិនមានសញ្ញាគួរឱ្យសង្ស័យទេ (3-way handshake បានបញ្ចប់)។

សំណួរពិនិត្យចំណេះដឹង (ជំពូកទី១៥)៖

តើភាពខុសគ្នារវាង CompTIA Security+ និង CompTIA CySA+ មានអ្វីខ្លះ?

ប្រសិនបើអ្នកចង់ក្លាយជាអ្នកគ្រប់គ្រងបណ្តាញ (Network Administrator) តើវិញ្ញាបនបត្រមួយណាដែលសំខាន់ជាងគេ?

ហេតុអ្វីបានជាការអនុវត្តដោយដៃ (Hands-on Lab) មានសារៈសំខាន់ជាងការទន្ទេញ (Memorization)?

តើអ្នកនឹងប្រើឧបករណ៍អ្វីខ្លះដើម្បីអនុវត្ត CCNA Labs ប្រសិនបើអ្នកមិនមាន Router/Switch ពិតប្រាកដ?

ឧបសម្ព័ន្ធបន្ថែម (Additional Appendix)
D. តារាងសង្ខេបពិធីការបណ្តាញ និងសន្តិសុខ
ពិធីការ	ស្រទាប់ OSI	Port	សុវត្ថិភាព (មានអ៊ិនគ្រីប?)	ការប្រើប្រាស់
HTTP	7	80	ទេ (Plain text)	គេហទំព័រមិនមានសុវត្ថិភាព
HTTPS	7	443	បាទ (TLS)	គេហទំព័រមានសុវត្ថិភាព
FTP	7	20,21	ទេ	ផ្ទេរឯកសារ (ហួសសម័យ)
SFTP	7	22	បាទ (SSH)	ផ្ទេរឯកសារប្រកបដោយសុវត្ថិភាព
Telnet	7	23	ទេ	ចូលគ្រប់គ្រងពីចម្ងាយ (មិនមានសុវត្ថិភាព)
SSH	7	22	បាទ	ចូលគ្រប់គ្រងពីចម្ងាយប្រកបដោយសុវត្ថិភាព
DNS	7	53 (UDP/TCP)	ជាធម្មតាទេ (អាចមាន DoH/DoT)	បំប្លែង Domain Name → IP
DHCP	7	67,68 (UDP)	ទេ	ចែកចាយ IP Address ដោយស្វ័យប្រវត្តិ
SNMPv3	7	161,162 (UDP)	បាទ (ប្រសិនបើកំណត់)	គ្រប់គ្រងបណ្តាញពីចម្ងាយ
E. បញ្ជីពាក្យបច្ចេកទេសបន្ថែម (Glossary Extension)
ពាក្យបច្ចេកទេស	ការបកប្រែ / ការពិពណ៌នា
Backhauling	ការបញ្ជូនចរាចរណ៍បណ្តាញពីសាខាទៅកាន់ Data Center កណ្តាល មុនពេលទៅកាន់អ៊ីនធឺណិត។
East-West Traffic	ចរាចរណ៍រវាងម៉ាស៊ីនមេនៅខាងក្នុង Data Center (ផ្ទុយពី North-South Traffic ដែលចូល/ចេញពី Data Center)។
Lateral Movement	ការរីករាលដាលរបស់អ្នកវាយប្រហារពីឧបករណ៍មួយទៅកាន់ឧបករណ៍ផ្សេងទៀតនៅក្នុងបណ្តាញតែមួយ។
North-South Traffic	ចរាចរណ៍ដែលចូល (Ingress) ឬចេញ (Egress) ពី Data Center ទៅកាន់អ៊ីនធឺណិត ឬអ្នកប្រើប្រាស់ខាងក្រៅ។
Rogue Device	ឧបករណ៍ដែលត្រូវបានដំឡើងនៅលើបណ្តាញដោយគ្មានការអនុញ្ញាត។
Shift Left	ការបញ្ចូលការធ្វើតេស្ត (Testing) និងសន្តិសុខ (Security) ទៅក្នុងដំណាក់កាលដំបូងនៃវដ្តអភិវឌ្ឍន៍កម្មវិធី (Software Development Lifecycle)។
សេចក្តីសន្និដ្ឋានចុងក្រោយ៖

សៀវភៅ "មូលដ្ឋានគ្រឹះបណ្តាញកុំព្យូទ័រសម្រាប់សន្តិសុខសាយប័រ" ឥឡូវនេះមាន សរុបចំនួន ១៥ ជំពូក ដែលគ្របដណ្តប់លើ៖

ជំពូកទី ១-៧៖ មូលដ្ឋានគ្រឹះ (OSI, TCP/IP, IP Addressing, Subnetting, Devices, Common Attacks, VPN, Wi-Fi, Zero Trust, CLI Tools)

ជំពូកទី ៨-១១៖ កម្រិតមធ្យម (Routing Protocols, Wireless Security Deep Dive, Network Forensics, Cloud Networking)

ជំពូកទី ១២-១៥៖ កម្រិតខ្ពស់ (SDN/SD-WAN, ZTNA/SASE, DevSecOps/Network Automation, Certification Roadmap)

សៀវភៅនេះសមស្របសម្រាប់៖

និស្សិតឆ្នាំទី ២ ដល់ទី ៤ ផ្នែកបណ្តាញ និងសន្តិសុខសាយប័រ។

អ្នកបច្ចេកទេសបណ្តាញ (Network Technician) ដែលចង់ផ្លាស់ប្តូរទៅផ្នែកសន្តិសុខ។

អ្នកដែលកំពុងត្រៀមប្រឡងវិញ្ញាបនបត្រ CCNA, Security+, ឬ CySA+។

សូមអរគុណសម្រាប់ការអាន និងសូមសំណាងល្អក្នុងការសិក្សា!`

 },

  {
    id: 22,
    slug: "Operating System Fundamentals",
    title: "Operating System Fundamentals for Cybersecurity មូលដ្ឋាន",
    description: "រៀន  Operating System Fundamentals for Cybersecurity ដើម្បីខ្លាយជាអ្នកជំនាញ Ethical Hacking",
    level: "កម្រិតខ្ពស់",
    icon: "🐉",
    language: "",
    content: `Operating System Fundamentals for Cybersecurity`,
    codeExample:`ពូកទី១: សេចក្តីផ្តើមអំពីប្រព័ន្ធប្រតិបត្តិការ និងតួនាទីក្នុងសន្តិសុខសាយប័រ
១.១ និយមន័យប្រព័ន្ធប្រតិបត្តិការ
ប្រព័ន្ធប្រតិបត្តិការ (Operating System - OS) គឺជាកម្មវិធីស្នូលដែលដើរតួជាអ្នកសម្របសម្រួលរវាងផ្នែករឹង (Hardware) និងកម្មវិធីប្រើប្រាស់ (Application Software)។ OS គ្រប់គ្រងធនធានដូចជា CPU, អង្គចងចាំ, ឧបករណ៍បញ្ចូល/ទិន្នផល, និងឯកសារ។

សមាសភាគសំខាន់ៗនៃ OS៖

Kernel (ស្នូល)៖ ផ្នែកស្នូលដែលធ្វើការទំនាក់ទំនងផ្ទាល់ជាមួយផ្នែករឹង។

Shell (សែល)៖ ចំណុចប្រទាក់អ្នកប្រើ (Command-Line Interface - CLI ឬ Graphical User Interface - GUI)។

System Calls (ប្រព័ន្ធហៅ)៖ ចំណុចប្រទាក់សម្រាប់កម្មវិធីប្រើប្រាស់ស្នើសុំសេវាកម្មពី Kernel។

១.២ ប្រភេទប្រព័ន្ធប្រតិបត្តិការ
Windows (Microsoft)៖ ប្រើយ៉ាងទូលំទូលាយក្នុងបរិស្ថានសាជីវកម្ម (Active Directory, NTFS)។

Linux (Open Source)៖ ពេញនិយមសម្រាប់ម៉ាស៊ីនមេ និងឧបករណ៍សន្តិសុខ (Kali Linux, Ubuntu Server)។

macOS (Apple)៖ ផ្អែកលើ Darwin (Unix-like) ប្រើក្នុងបរិស្ថានច្នៃប្រឌិត។

RTOS (Real-Time OS)៖ ប្រើក្នុងប្រព័ន្ធបង្កប់ (Embedded Systems) ដូចជា VxWorks, FreeRTOS។

១.៣ តួនាទី OS ក្នុងសន្តិសុខសាយប័រ
ការបំបែក (Isolation)៖ ការពារដំណើរការមិនឱ្យចូលដំណើរការអង្គចងចាំរបស់គ្នាទៅវិញទៅមក។

ការត្រួតពិនិត្យការចូលដំណើរការ (Access Control)៖ កំណត់សិទ្ធិអ្នកប្រើ និងដំណើរការលើធនធាន។

ការកត់ត្រា (Audit & Logging)៖ រក្សាទុកព្រឹត្តិការណ៍សន្តិសុខដូចជាការចូលប្រព័ន្ធ ការផ្លាស់ប្តូរឯកសារ។

ការការពារកម្រិត Kernel៖ ការពារការវាយប្រហារដែលព្យាយាមគ្រប់គ្រង Kernel (Rootkits)។

១.៤ ស្ថាបត្យកម្ម Kernel
Monolithic Kernel៖ Kernel ទាំងមូលដំណើរការក្នុងចន្លោះតែមួយ (Linux, Windows)។ មានប្រសិទ្ធភាពខ្ពស់ ប៉ុន្តែកំហុសតូចអាចបណ្តាលឱ្យខូចប្រព័ន្ធទាំងមូល។

Microkernel៖ Kernel តូចតែងតែដំណើរការសេវាកម្មភាគច្រើនក្នុង User Space (QNX, L4)។ មានសុវត្ថិភាពជាង ប៉ុន្តែយឺតជាងបន្តិច។

Hybrid Kernel៖ ផ្សំ Monolithic និង Microkernel (Windows NT kernel, XNU របស់ macOS)។

១.៥ គំនិតសំខាន់ៗសម្រាប់សន្តិសុខ
Trusted Computing Base (TCB)៖ សំណុំសមាសភាគទាំងអស់ដែលសំខាន់សម្រាប់សន្តិសុខប្រព័ន្ធ។ TCB ធំជាង ហានិភ័យកាន់តែខ្ពស់។

Attack Surface៖ ចំណុចទាំងអស់ដែលអ្នកវាយប្រហារអាចបញ្ចូលទិន្នន័យទៅក្នុងប្រព័ន្ធ (System Calls, Network Ports, File Input)។

ជំពូកទី២: ការគ្រប់គ្រងដំណើរការ (Process Management) និងសន្តិសុខ
២.១ និយមន័យដំណើរការ (Process) និងខ្សែស្រឡាយ (Thread)
Process៖ កម្មវិធីដែលកំពុងដំណើរការ រួមទាំងកូដ ទិន្នន័យ និងបរិបទ (Context)។

Thread៖ ឯកតារងនៃដំណើរការ ដែលអាចដំណើរការស្របគ្នា។ Threads ក្នុង process តែមួយចែករំលែកអង្គចងចាំគ្នា។

Process Control Block (PCB)៖ រចនាសម្ព័ន្ធទិន្នន័យក្នុង Kernel ដែលផ្ទុកព័ត៌មានអំពី process នីមួយៗ (PID, state, program counter, registers)។

២.២ ស្ថានភាពដំណើរការ (Process States)
New → Ready → Running → Waiting → Terminated

ការផ្លាស់ប្តូរស្ថានភាពហៅថា Context Switching ដែលត្រូវរក្សាទុក និងស្តារ PCB វិញ។

២.៣ ការបំបែកដំណើរការ (Process Isolation)
Virtual Address Space៖ process នីមួយៗមានចន្លោះអាសយដ្ឋាននិម្មិតផ្ទាល់ខ្លួន។

Hardware Isolation៖ MMU (Memory Management Unit) រារាំង process មិនឱ្យចូលអង្គចងចាំរបស់ process ផ្សេង។

Sandboxing៖ បច្ចេកទេសកំណត់សមត្ថភាព process (ឧ. Chrome sandbox, Docker containers)។

២.៤ ការវាយប្រហារលើដំណើរការ
Process Hollowing៖ បង្កើត process ស្របច្បាប់ (ឧ. svchost.exe) បន្ទាប់មកជំនួសកូដរបស់វាដោយកូដព្យាបាទ។

DLL Injection៖ បញ្ចូល Dynamic Link Library (DLL) ទៅក្នុង process គោលដៅដើម្បីប្រតិបត្តិកូដ។

Process Reuse៖ ប្រើប្រាស់ process ស្របច្បាប់ឡើងវិញដើម្បីលាក់សកម្មភាព។

២.៥ ការការពារ
Address Space Layout Randomization (ASLR)៖ ចៃដន្យទីតាំងអង្គចងចាំរបស់ process ដើម្បីរារាំងការវាយប្រហារប្រភេទ Return-to-libc។

Control Flow Integrity (CFI)៖ ត្រួតពិនិត្យលំហូរកម្មវិធីមិនឱ្យងាកទៅអាសយដ្ឋានដែលមិនអនុញ្ញាត។

ជំពូកទី៣: ការគ្រប់គ្រងអង្គចងចាំ (Memory Management) និងភាពងាយរងគ្រោះ
៣.១ គោលការណ៍មូលដ្ឋាន
Physical Memory៖ RAM ពិតប្រាកដ។

Virtual Memory៖ ចន្លោះអាសយដ្ឋាននិម្មិតដែល process យល់ឃើញ។

Paging៖ បែងចែកអង្គចងចាំជា Page (ធម្មតា 4KB)។

Page Table៖ តារាងបំប្លែងអាសយដ្ឋាននិម្មិតទៅជាអាសយដ្ឋានរូបវន្ត។

៣.២ តំបន់អង្គចងចាំនៃដំណើរការ
Text (Code)៖ កូដប្រតិបត្តិ (Read-only)។

Data៖ អថេរសកល និង static (Read/Write)។

Heap៖ អង្គចងចាំថាមវន្ត (ឧ. malloc() ក្នុង C)។

Stack៖ អថេរមូលដ្ឋាន ប៉ារ៉ាម៉ែត្រអនុគមន៍ និងអាសយដ្ឋានត្រឡប់ (Return Address)។

៣.៣ ភាពងាយរងគ្រោះផ្នែកអង្គចងចាំ
Buffer Overflow (Stack-based)៖ សរសេរទិន្នន័យលើសពីដែនកំណត់របស់ buffer នៅលើ stack ធ្វើឱ្យត្រួតលើ return address។ អ្នកវាយប្រហារអាចត្រឡប់ទៅកូដព្យាបាទវិញ។

Heap Overflow៖ សរសេរលើសនៅលើ heap ដែលអាចត្រួតលើ metadata របស់ allocator។

Use-After-Free (UAF)៖ ចូលដំណើរការអង្គចងចាំដែលបានបញ្ចេញរួច (freed memory)។

Double Free៖ បញ្ចេញអង្គចងចាំដដែលពីរដង បណ្តាលឱ្យខូចរចនាសម្ព័ន្ធ allocator។

៣.៤ បច្ចេកទេសការពារ
Data Execution Prevention (DEP) / NX bit៖ ការពារការប្រតិបត្តិកូដនៅក្នុងតំបន់ Stack ឬ Heap។

ASLR (លម្អិត)៖ ចៃដន្យមូលដ្ឋាននៃ executable, libraries (DLLs/so), stack, heap។ កម្រិត: Kernel ASLR, User-space ASLR។

Stack Canaries៖ តម្លៃចៃដន្យដាក់នៅជាប់ return address មុនពេល function returns។ ប្រសិនបើ canary ផ្លាស់ប្តូរ → រកឃើញ overflow។

Safe Unlinking៖ ត្រួតពិនិត្យសុពលភាពទ្រនិច (pointers) ក្នុង doubly-linked lists របស់ allocator។

៣.៥ ឧទាហរណ៍កូដខ្សោយ (C)
c
void vulnerable() {
    char buffer[8];
    gets(buffer);  // គ្មានការត្រួតពិនិត្យព្រំដែន!
}
អ្នកវាយប្រហារអាចបញ្ចូលទិន្នន័យ 8+ បៃ ដើម្បីត្រួតលើ return address។

ជំពូកទី៤: ប្រព័ន្ធឯកសារ (File System) និងការអនុញ្ញាត
៤.១ រចនាសម្ព័ន្ធប្រព័ន្ធឯកសារ
NTFS (Windows)៖ Master File Table (MFT), Alternate Data Streams (ADS), Access Control Lists (ACLs), Journaling ($LogFile)។

ext4 (Linux)៖ Superblock, Inode table, Block bitmaps, Journaling។

FAT32៖ សាមញ្ញ គ្មានសិទ្ធិ គ្មាន journaling។

៤.២ ការអនុញ្ញាត (Permissions)
Linux/Unix៖

Owner, Group, Others + Read (4), Write (2), Execute (1)

ឧទាហរណ៍៖ chmod 755 file → Owner: rwx (7), Group: r-x (5), Others: r-x (5)

Special bits: Setuid (4), Setgid (2), Sticky bit (1)

Windows ACLs៖

Discretionary Access Control List (DACL)៖ កំណត់ថាអ្នកណាអាចចូលដំណើរការវត្ថុ។

System Access Control List (SACL)៖ កំណត់ថាសកម្មភាពណាខ្លះត្រូវកត់ត្រា។

ACE (Access Control Entry)៖ គូ (User/Group, Permission, Allow/Deny)។

៤.៣ Alternate Data Streams (ADS) - NTFS
ADS អនុញ្ញាតឱ្យឯកសារមាន "ស្ទ្រីម" លាក់។

បង្កើត៖ echo "secret" > file.txt:hidden

មើល៖ dir /r (Windows) ឬ Get-Item -Stream (PowerShell)

ការប្រើប្រាស់ក្នុងការវាយប្រហារ៖ លាក់កូដព្យាបាទក្នុង ADS ហើយប្រតិបត្តិតាមរយៈ wmic process call create file.txt:hidden.exe។

៤.ោ Rootkits លើ File System
Direct Kernel Object Manipulation (DKOM)៖ កែប្រែរចនាសម្ព័ន្ធ Kernel ដើម្បីលាក់ឯកសារ ឬដំណើរការ។

Filter Driver (Windows)៖ ស្ទាក់ចាប់ការហៅប្រព័ន្ធឯកសារ ហើយលុបឈ្មោះឯកសារព្យាបាទចេញពីលទ្ធផល។

៤.៥ Digital Forensics លើ File System
Carving៖ ទាញយកឯកសារពីទិន្នន័យឆៅដោយផ្អែកលើ signatures (ឧ. ក្បាលឯកសារ PDF, JPEG)។

Slack Space៖ ចន្លោះដែលនៅសល់ក្នុង cluster ចុងក្រោយនៃឯកសារ អាចផ្ទុកទិន្នន័យលាក់។

Journal Analysis៖ ពិនិត្យ $LogFile (NTFS) ឬ journal (ext4) ដើម្បីរកសកម្មភាពឯកសារដែលបានលុប។

ជំពូកទី៥: ការគ្រប់គ្រងអ្នកប្រើប្រាស់ និងការបង្កើនសិទ្ធិ (Privilege Escalation)
៥.១ គំនិតអ្នកប្រើ និងក្រុម
Windows៖ SID (Security Identifier) ដូចជា S-1-5-21-...។ Built-in: SYSTEM (S-1-5-18), Administrator (S-1-5-21-...-500), Guest។

Linux៖ UID 0 = root, 1-999 = system users, 1000+ = normal users។ GID សម្រាប់ក្រុម។

៥.២ ការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ (Authentication)
Local Authentication៖ ពិនិត្យពាក្យសម្ងាត់ទល់នឹង /etc/shadow (Linux) ឬ SAM (Windows)។

Hashing Algorithms៖ NTLM (Windows), SHA-512 (Linux), bcrypt។

Domain Authentication៖ Active Directory (Kerberos, LDAP)។

៥.៣ ការបង្កើនសិទ្ធិ (Privilege Escalation)
Horizontal៖ ចូលជាអ្នកប្រើ B ពីអ្នកប្រើ A (សិទ្ធិកម្រិតដូចគ្នា)។
Vertical៖ ពីអ្នកប្រើធម្មតាទៅ root/Administrator។

បច្ចេកទេសទូទៅ៖

Dirty Pipe (CVE-2022-0847)៖ Linux kernel vulnerability អនុញ្ញាតឱ្យសរសេរទៅកាន់ឯកសារអានតែប៉ុណ្ណោះ (read-only)។

PrintNightmare (CVE-2021-34527)៖ Windows Print Spooler អនុញ្ញាតឱ្យដំឡើង printer driver ដោយគ្មានសិទ្ធិ → Remote Code Execution as SYSTEM។

Sudo Buffer Overflow (CVE-2021-3156)៖ ការវាយប្រហារលើ sudoedit ដែលអនុញ្ញាតឱ្យអ្នកប្រើធម្មតាក្លាយជា root។

Misconfigured SUID binaries (Linux)៖ រក binary ដែលមាន SUID bit ហើយអាចប្រតិបត្តិបានដោយអ្នកណាក៏បាន (ឧ. find ឬ vim)។

៥.៤ ការការពារ
Principle of Least Privilege (PoLP)៖ ផ្តល់សិទ្ធិតែចាំបាច់ប៉ុណ្ណោះ។

User Account Control (UAC) (Windows)៖ ស្នើសុំការអនុញ្ញាតមុនពេលប្រតិបត្តិការដែលត្រូវការសិទ្ធិខ្ពស់។

sudo configuration (Linux)៖ កំណត់ថាពាក្យបញ្ជាណាខ្លះដែលអ្នកប្រើអាចដំណើរការបានដោយគ្មានពាក្យសម្ងាត់។

ជំពូកទី៦: ការទំនាក់ទំនងរវាងដំណើរការ (IPC) និងហានិភ័យ
៦.១ យន្តការ IPC
Pipe (Unidirectional) & Named Pipe (FIFO) (Bidirectional)។

Shared Memory៖ ចែករំលែកតំបន់អង្គចងចាំរវាង processes (លឿន ប៉ុន្តែត្រូវ synchronization)។

Message Queue៖ ផ្ញើសារតាមលំដាប់។

Socket៖ Unix domain sockets (local) ឬ TCP/UDP sockets (network)។

D-Bus (Linux desktop)៖ ប្រើសម្រាប់កម្មវិធី GUI ទំនាក់ទំនងគ្នា។

COM/DCOM (Windows)៖ Component Object Model សម្រាប់ IPC ក្នុង Windows។

៦.២ ហានិភ័យសុវត្ថិភាព
Message Sniffing៖ ស្តាប់ទិន្នន័យដែលឆ្លងកាត់ IPC (ជាពិសេស Unix sockets ដែលគ្មានការអ៊ិនគ្រីប)។

Unauthorized Access៖ process ព្យាបាទចូលទៅកាន់ shared memory ឬ named pipe ដែលមិនមានការត្រួតពិនិត្យសិទ្ធិត្រឹមត្រូវ។

D-Bus Policy Bypass៖ ការកំណត់រចនាសម្ព័ន្ធ D-Bus ខ្សោយអនុញ្ញាតឱ្យអ្នកប្រើធម្មតាហៅ method ដែលមានសិទ្ធិខ្ពស់។

៦.៣ ការការពារ
Mandatory Access Control (MAC)៖ SELinux ឬ AppArmor អាចកំណត់ថា process ណាខ្លះអាចប្រើ IPC channel ណាខ្លះ។

Unix Socket Permissions៖ កំណត់សិទ្ធិឯកសារ socket (ឧ. 0600 មានន័យថាម្ចាស់តែប៉ុណ្ណោះ)។

Encryption for IPC៖ ប្រើ TLS សម្រាប់ sockets បណ្តាញ ឬ GnuTLS សម្រាប់ D-Bus។

ជំពូកទី៧: Kernel, Drivers, និង Rootkits
៧.១ Kernel Space vs User Space
User Space៖ កម្មវិធីធម្មតា, ប្រើសិទ្ធិ CPU ring 3 (x86)។

Kernel Space៖ Kernel, drivers, ring 0, អាចចូលដំណើរការផ្នែករឹង និងអង្គចងចាំទាំងអស់។

System Calls ជាច្រកចូលទៅកាន់ Kernel។

៧.២ កម្មវិធីបញ្ជា (Device Drivers)
ដំណើរការក្នុង Kernel space → កំហុសក្នុង driver អាចបណ្តាលឱ្យ BSOD (Blue Screen of Death) ឬ Kernel panic។

Driver Signing (Windows)៖ តម្រូវឱ្យ drivers មានហត្ថលេខាឌីជីថលពី Microsoft ដើម្បីផ្ទុក។

Loadable Kernel Modules (LKM) (Linux)៖ អាចផ្ទុក និងដកចេញបានពេលដំណើរការ (insmod, rmmod)។

៧.៣ Rootkits
User-mode Rootkit៖

Hook (ស្ទាក់ចាប់) API functions ក្នុង user space (ឧ. NtQueryDirectoryFile ដើម្បីលាក់ឯកសារ)។

ងាយរកឃើញជាង kernel-mode។

Kernel-mode Rootkit៖

System Call Table Hook៖ ជំនួសទ្រនិចនៅក្នុង syscall table ដើម្បីហៅកូដព្យាបាទវិញ។

DKOM (Direct Kernel Object Manipulation)៖ កែប្រែរចនាសម្ព័ន្ធទិន្នន័យក្នុង kernel (ឧ. ដក process ចេញពីរាយបញ្ជីសកម្ម)។

Interrupt Descriptor Table (IDT) Hook៖ ស្ទាក់ចាប់ hardware interrupts។

Example Rootkits៖ Sony BMG rootkit (2005), TDL-4, Necurs។

៧.៤ Kernel Exploitation
Double Fetch៖ kernel អានទិន្នន័យពី user space ពីរដង ហើយអ្នកវាយប្រហារផ្លាស់ប្តូរទិន្នន័យនៅចន្លោះពេលនោះ (race condition)។

Null Pointer Dereference៖ kernel ព្យាយាមចូលដំណើរការអាសយដ្ឋាន 0 → crash ឬ privilege escalation ប្រសិនបើអាច map page zero។

៧.៥ ការរកឃើញ Rootkit
Integrity Checking៖ ប្រៀបធៀប kernel code ក្នុងអង្គចងចាំជាមួយនឹងច្បាប់ដើមពី disk (ឧ. kmod signature verification)។

Cross-View Detection៖ ប្រៀបធៀបរាយបញ្ជី process ពី user space (ps) និងពី kernel ដោយផ្ទាល់តាមរយៈឧបករណ៍ដូចជា Volatility។

Timing Analysis៖ rootkit hooks អាចបន្ថែមពេលវេលាដំណើរការ → វាស់ពេលវេលានៃ syscall ដើម្បីរកភាពមិនប្រក្រតី។

ជំពូកទី៨: សុវត្ថិភាពប្រព័ន្ធចាប់ផ្ដើម (Boot Security) និង TPM
៨.១ BIOS vs UEFI
BIOS (Legacy)៖ 16-bit, MBR (Master Boot Record) partition, គ្មានការផ្ទៀងផ្ទាត់ bootloader → ងាយនឹង bootkits។

UEFI (Unified Extensible Firmware Interface)៖ 32/64-bit, GPT (GUID Partition Table), Secure Boot, Network boot (PXE)។

៨.២ Secure Boot
UEFI firmware មានឃ្លាំងសោ (keys) របស់ OEM និង Microsoft។

រាល់ bootloader, kernel, driver ត្រូវតែមានហត្ថលេខាឌីជីថលត្រឹមត្រូវ បើមិនដូច្នោះទេ firmware នឹងបដិសេធមិនផ្ទុក។

Shim (Linux)៖ bootloader កម្រិតមធ្យមដែលមានហត្ថលេខា Microsoft ដើម្បីអនុញ្ញាតឱ្យ boot Linux ជាមួយ Secure Boot។

៨.៣ Bootkits
Bootkit៖ rootkit ដែលឆ្លង MBR (BIOS) ឬ EFI System Partition (UEFI)។

Example៖ Stoned Bootkit, Winnti (UEFI bootkit)។

ការឆ្លង៖ សរសេរកូដព្យាបាទទៅក្នុង VBR (Volume Boot Record) ឬ EFI variables។

Persistence៖ ផ្ទុកមុន OS → អាចបិទ ASLR, DEP, និង patch kernel។

៨.៤ TPM (Trusted Platform Module)
បន្ទះឈីបរឹង (hardware chip) នៅលើ motherboard សម្រាប់រក្សាទុកសោគ្រីបតូក្រាមដោយសុវត្ថិភាព។

Measured Boot៖ TPM កត់ត្រា hash នៃ boot components (firmware, bootloader, kernel) ចូលទៅក្នុង Platform Configuration Registers (PCRs)។

Remote Attestation៖ ម៉ាស៊ីនពីចម្ងាយអាចផ្ទៀងផ្ទាត់តម្លៃ PCR ដើម្បីប្រាកដថាប្រព័ន្ធមិនត្រូវបានកែប្រែ។

BitLocker (Windows)៖ ប្រើ TPM ដើម្បីដោះសោដ្រាយដោយស្វ័យប្រវត្តិប្រសិនបើ boot chain មិនផ្លាស់ប្តូរ។

៨.៥ ការវាយប្រហារលើ TPM
Bus Snooping៖ ស្ទាក់ចាប់ទំនាក់ទំនងរវាង CPU និង TPM (LPC bus) → LPC bus មិនមានការអ៊ិនគ្រីបទេ។

Cold Boot Attack៖ បង្កក RAM ហើយអានសោរដែលនៅសល់មុនពេល TPM បញ្ចេញវា។

ជំពូកទី៩: គោលនយោបាយសន្តិសុខ (MAC, Hardening)
៩.១ Mandatory Access Control (MAC)
SELinux (Security-Enhanced Linux)៖

Labels៖ វត្ថុនីមួយៗ (process, file, socket) មាន security context (user:role:type:level)។

Policy៖ កំណត់ថា type A អាចធ្វើអ្វីខ្លះទៅលើ type B (ឧ. allow httpd_t httpd_log_t:file write)។

Modes៖ Enforcing (រារាំងការបំពាន), Permissive (កត់ត្រាតែប៉ុណ្ណោះ), Disabled។

AppArmor (Ubuntu, SUSE)៖

Path-based៖ កំណត់ទៅតាមផ្លូវឯកសារ (ឧ. /usr/sbin/nginx { /var/log/nginx/* rw, })។

ងាយស្រួលជាង SELinux ប៉ុន្តែខ្សោយជាងបន្តិច។

Windows Integrity Levels (Mandatory Integrity Control)៖

Low (ប្រើសម្រាប់ Internet Explorer protected mode), Medium (user), High (administrator), System។

Process មិនអាចសរសេរទៅកាន់វត្ថុដែលមាន integrity level ខ្ពស់ជាងខ្លួនឡើយ។

៩.២ Hardening OS
Windows Hardening៖

បិទ services ដែលមិនចាំបាច់ (Print Spooler, SMBv1, NetBIOS)។

បើក Windows Defender, Firewall, BitLocker, Credential Guard។

អនុវត្ត Local Group Policy (secpol.msc)៖ កំណត់ password policy, audit policy, user rights។

Linux Hardening៖

បិទ root login តាម SSH (PermitRootLogin no)។

ប្រើ fail2ban ដើម្បីទប់ស្កាត់ brute-force ។

កំណត់ umask 027 ដើម្បីកុំឱ្យ group/others អានឯកសារថ្មី។

ប្រើ auditd ដើម្បីតាមដានការផ្លាស់ប្តូរឯកសារសំខាន់ៗ (/etc/passwd, /etc/shadow)។

CIS Benchmarks & DISA STIGs៖ សំណុំអនុសាសន៍រឹងប៉ឹងប្រព័ន្ធតាមស្តង់ដារ។

ជំពូកទី១០: ការរកឃើញការវាយប្រហារ និង Memory Forensics
១០.១ Log Analysis
Windows Event Logs៖

Security log (Event ID 4624 = successful logon, 4648 = logon with explicit credentials, 4720 = user created)។

PowerShell logging (Event ID 4103 = module logging, 4104 = script block logging)។

Linux syslog/auditd៖

/var/log/auth.log (Debian) or /var/log/secure (RHEL)៖ SSH logins, sudo, user additions។

ausearch -m USER_LOGIN៖ ស្វែងរកព្រឹត្តិការណ៍ចូលប្រព័ន្ធពី auditd។

១០.២ Memory Forensics ជាមួយ Volatility
Image acquisition៖ winpmem (Windows), avml (Linux), mac2memory (macOS)។

Profile identification៖ volatility -f memory.dump imageinfo → ស្វែងរក OS version និង kernel។

List processes៖ pslist, psscan (ស្វែងរក process លាក់ដោយ rootkit)។

Network connections៖ netscan → រក connections ចេញក្រៅដែលមិនស្គាល់។

Dump process៖ procdump -p [PID] -D → ទាញយក executable ពី memory សម្រាប់ reverse engineering។

Scan for malware៖ malfind → រក memory regions ដែលមាន PAGE_EXECUTE_READWRITE និងគ្មាន mapping ទៅកាន់ឯកសារ (indicates injected code)។

១០.៣ Rootkit Detection Tools
chkrootkit (Linux)៖ ពិនិត្យ syscall table, hidden processes, network interfaces។

rkhunter (Linux)៖ ពិនិត្យ backdoors, suspicious strings, file permissions។

GMER (Windows)៖ ស្វែងរក hidden processes, threads, registry keys, rootkit hooks។

Microsoft Sysinternals Autoruns៖ រកចំណុច persistence (Run keys, scheduled tasks, services)។

ជំពូកទី១១: Practical Labs (អនុវត្តជាក់ស្តែង)
Lab 1: Process Injection Detection
ប្រើ mimikatz ដើម្បី inject sekurlsa::logonpasswords ចូលទៅក្នុង lsass.exe។

ប្រើ Process Hacker ឬ Sysinternals Process Explorer ដើម្បីមើល threads មិនធម្មតាក្នុង lsass.exe។

ប្រើ Volatility malfind ដើម្បីរក injected code។

Lab 2: Linux Privilege Escalation (SUID)
ស្វែងរក SUID binaries៖ find / -perm -4000 2>/dev/null។

ពិនិត្យ cp ឬ vim។

ប្រើ vim SUID ដើម្បីអាន /etc/shadow៖ vim -c ':!/bin/sh'។

Lab 3: Windows ADS Malware
បង្កើត script (e.g., calc.exe) ក្នុង ADS៖ type calc.exe > legit.txt:mal.exe។

ប្រតិបត្តិ៖ wmic process call create C:\\path\\legit.txt:mal.exe។

រកឃើញដោយ dir /r ឬ PowerShell Get-ChildItem -Stream។

Lab 4: Kernel Module Rootkit (Linux)
សរសេរ LKM simple ដែល hook syscall mkdir ។

ផ្ទុកជាមួយ insmod។

ប្រើ systemtap ឬ kprobes ដើម្បីរក hook។

Lab 5: Bypassing ASLR/DEP (ជាមួយ ROP)
សរសេរកម្មវិធី C ដែលមាន buffer overflow ។

បិទ ASLR (echo 0 > /proc/sys/kernel/randomize_va_space)។

បើក ASLR ឡើងវិញ ហើយសាកល្បង Return-Oriented Programming (ROP) ដើម្បីបង្កើត ROP chain ។

ជំពូកទី១២: បច្ចេកវិទ្យាទំនើប (Container Security, Confidential Computing)
១២.១ Container Security
Containers (Docker, LXC)៖ មិនមែនជា virtualization ពេញលេញទេ តែប្រើ namespace isolation (PID, NET, MNT, UTS) និង cgroups។

ហានិភ័យ៖

Kernel Exploit៖ container ចែករំលែក kernel ជាមួយ host → kernel bug អាច breakout ។

Privileged container (--privileged)៖ អាចចូលដំណើរការ /dev, ដំឡើង filesystems host ។

Image tampering៖ ប្រើរូបភាពពី registry មិនទុកចិត្ត។

Security Tools៖

Docker Bench Security៖ ពិនិត្យ best practices។

gVisor (Google)៖ kernel ក្លែងធ្វើ (sandbox) ដើម្បីកាត់បន្ថយ attack surface។

Kata Containers៖ container ដំណើរការក្នុង VM តូចៗ (hardware virtualization)។

១២.២ Confidential Computing
Intel SGX (Software Guard Extensions)៖

Enclave៖ តំបន់អង្គចងចាំដែលបានអ៊ិនគ្រីប សូម្បីតែ OS ក៏មិនអាចចូលដំណើរការបានដែរ។

Attestation៖ enclave អាចបង្ហាញភស្តុតាងថាខ្លួនកំពុងដំណើរការលើ SGX real hardware។

AMD SEV (Secure Encrypted Virtualization)៖ អ៊ិនគ្រីប RAM ទាំងមូលរបស់ VM, hypervisor មិនអាចមើលឃើញទិន្នន័យក្នុង VM បានទេ។

១២.៣ eBPF (Extended Berkeley Packet Filter)
អនុញ្ញាតឱ្យដំណើរការកម្មវិធីក្នុង kernel space ដោយសុវត្ថិភាព (verifier ត្រួតពិនិត្យកូដ)។

Use cases for security៖

Runtime security monitoring (Falco)៖ រកឃើញ process executions, network connections, file writes ខុសច្បាប់។

Network filtering (Cilium)៖ តម្រងកញ្ចប់ទិន្នន័យសម្រាប់ Kubernetes ។

Profiling & tracing៖ តាមដាន syscall របស់ process ដោយមិនចាំបាច់កែប្រែ kernel។

ឧបសម្ព័ន្ធ
ក. តារាងពាក្យបច្ចេកទេស (Glossary)
Kernel – ស្នូល OS

Rootkit – កម្មវិធីលាក់ខ្លួនដើម្បីបន្តវត្តមាន

Privilege Escalation – ការបង្កើនសិទ្ធិ

Sandbox – បរិស្ថានឯកោសម្រាប់ដំណើរការកម្មវិធី

ROP (Return-Oriented Programming) – បច្ចេកទេស bypass DEP ដោយប្រើកូដដែលមានស្រាប់

ខ. ឧបករណ៍សម្រាប់អនុវត្ត
ឈ្មោះ	ប្រភេទ	OS
VirtualBox	Virtualization	Cross
Kali Linux	Distro for security	Linux
Sysinternals Suite	Process/Registry analysis	Windows
Volatility	Memory forensics	Cross
Ghidra	Reverse engineering	Cross
Wireshark	Network analysis	Cross
គ. ឯកសារយោង
Silberschatz, A. (2018). Operating System Concepts (10th ed.) – ជំពូក 14-17 (Security & Protection)។

Windows Internals (Part 1 & 2) – Pavel Yosifovich et al.។

The Linux Kernel Module Programming Guide។

NIST SP 800-123: Guide to General Server Security។

ឃ. សំណួរត្រួតពិនិត្យ (Review Questions)
តើ ASLR និង DEP ខុសគ្នាដូចម្តេច?

តើ rootkit អាចលាក់ process ពី Task Manager ដោយរបៀបណា?

ចូរពន្យល់ពីរបៀបដែល Secure Boot និង TPM ធ្វើការរួមគ្នា។

តើ container breakout attack កើតឡើងដោយរបៀបណា?

បើអ្នកជាអ្នារព័ត៌មាន តើអ្នកនឹងរកឃើញ process hollowing ដោយប្រើឧបករណ៍អ្វីខ្លះ?

ជំពូកទី២៤: សន្តិសុខប្រព័ន្ធឯកសារកម្រិតខ្ពស់ (Advanced File System Security)
២៤.១ ការអ៊ិនគ្រីបឯកសារ (File Encryption)
BitLocker (Windows)៖ Full-disk encryption (FDE) ប្រើ AES-128/256 ក្នុង XTS mode។

TPM-only mode: ដោះសោដោយស្វ័យប្រវត្តិប្រសិនបើ boot chain មិនផ្លាស់ប្តូរ។

TPM + PIN: តម្រូវឱ្យបញ្ចូល PIN មុនពេលដោះសោ។

Recovery key: ប្រើសម្រាប់ស្តារនៅពេល TPM ខូច ឬភ្លេច PIN។

LUKS (Linux)៖ dm-crypt + LUKS header។

Multiple passphrases (8 slots)។

LUKS2 បន្ថែម Argon2 key derivation (ការពារ brute-force)។

cryptsetup luksFormat /dev/sda1 --type luks2 --pbkdf argon2id។

FileVault (macOS)៖ XTS-AES-128, recovery key stored in iCloud (optional)។

២៤.២ File Integrity Monitoring (FIM)
Tripwire / AIDE (Linux)៖ បង្កើតមូលដ្ឋានទិន្នន័យ hash នៃឯកសារសំខាន់ៗ (/bin, /etc, /usr) បន្ទាប់មកពិនិត្យជាទៀងទាត់ថាតើ hash បានផ្លាស់ប្តូរឬអត់។

Windows៖ ប្រើ PowerShell DSC (Desired State Configuration) ឬ SFC (System File Checker)។

ការវាយប្រហារ៖ rootkit អាចកែប្រែឯកសារ និងកែ hash database ដើម្បីលាក់ការផ្លាស់ប្តូរ → ត្រូវរក្សា database នៅក្រៅប្រព័ន្ធ (read-only media)។

២៤.៣ File System Journal Forensics
NTFS $LogFile៖ កត់ត្រារាល់ប្រតិបត្តិការឯកសារ (metadata updates)។

ext4 Journal (/var/log/journal)៖ អាចប្រើ jls និង jcat ដើម្បីទាញយកឯកសារដែលបានលុប។

ករណីសិក្សា៖ អ្នកវាយប្រហារលុបឯកសារព្យាបាទ ប៉ុន្តែនៅសល់ដានក្នុង journal → អ្នារព័ត៌មានអាចស្តារបាន។

ជំពូកទី២៥: សន្តិសុខ API ប្រព័ន្ធ (System Call & API Security)
២៥.១ System Call Filtering
seccomp (Linux)៖ កំណត់ system calls ដែលដំណើរការអាចហៅបាន។

c
// អនុញ្ញាតតែ read, write, exit ប៉ុណ្ណោះ
scmp_filter_ctx ctx = seccomp_init(SCMP_ACT_KILL);
seccomp_rule_add(ctx, SCMP_ACT_ALLOW, SCMP_SYS(read), 0);
seccomp_rule_add(ctx, SCMP_ACT_ALLOW, SCMP_SYS(write), 0);
seccomp_rule_add(ctx, SCMP_ACT_ALLOW, SCMP_SYS(exit), 0);
seccomp_load(ctx);
ប្រើប្រាស់៖ Chromium sandbox, Docker (seccomp profiles)។

ការវាយប្រហារ៖ ការហៅ system calls ដែលមិនត្រូវបានតម្រង (ឧ. ptrace សម្រាប់ debugging)។

២៥.២ API Hooking Detection
User-mode hooking៖ អ្នកវាយប្រហារកែប្រែ Import Address Table (IAT) ឬ Inline hooking (កែប្រែបៃដំបូងនៃ function ឱ្យលោតទៅកូដព្យាបាទ)។

ការរកឃើញ៖

ពិនិត្យ memory integrity នៃ DLLs (ឧ. sdelete -p 1234 ប្រៀបធៀបជាមួយច្បាប់ដើមនៅលើ disk)។

ប្រើ Endpoint Detection and Response (EDR) ដូចជា Sysmon (Event ID 7 – Image loaded, Event ID 8 – CreateRemoteThread)។

២៥.៣ Syscall Auditing in Practice
Windows ETW (Event Tracing for Windows)៖

logman start "trace" -p "Microsoft-Windows-Threat-Intelligence" -o trace.etl -ets។

Microsoft-Windows-Threat-Intelligence provider ចាប់យក syscalls ព្យាបាទ (ឧ. NtCreateProcess មិនធម្មតា)។

Linux strace & bpftrace៖

bash
# តាមដាន syscalls របស់ process PID 1234
strace -p 1234 -e trace=open,read,write,execve

# eBPF script to monitor execve
bpftrace -e 'tracepoint:syscalls:sys_enter_execve { printf("%s executed %s\n", comm, str(args->filename)); }'
ជំពូកទី២៦: Windows Security Features កម្រិតខ្ពស់
២៦.១ Credential Guard & Device Guard (Windows 10/11)
Credential Guard៖

ប្រើ Virtualization-based Security (VBS) ដើម្បីដាក់ LSA (Local Security Authority) ក្នុង isolated virtual machine។

ការពារ Pass-the-Hash, Pass-the-Ticket attacks ដោយសារតែ hashes មិនអាចចូលដំណើរការបានពី OS host។

Device Guard / Windows Defender Application Control (WDAC)៖

អនុញ្ញាតឱ្យដំណើរការតែ executable ដែលមានហត្ថលេខាឌីជីថលដែលទុកចិត្ត (whitelisting)។

Code Integrity Policies (CIP) – XML file កំណត់ថា binary ណាខ្លះអាចដំណើរការបាន។

២៦.២ Windows Sandbox
Windows Sandbox៖ បរិស្ថានឯកោបណ្តោះអាសន្ន ប្រើ hardware virtualization (Hyper-V)។

រាល់ពេលបិទ sandbox, ការផ្លាស់ប្តូរទាំងអស់ត្រូវបានលុបចោល។

មានសម្រាប់ Windows 10 Pro/Enterprise (version 1903+)។

ការវាយប្រហារ៖ VM escape ពី sandbox ទៅ host គឺកម្រណាស់ ប៉ុន្តែអាចកើតឡើងប្រសិនបើ hypervisor vulnerability។

២៦.៣ Kernel Patch Protection (PatchGuard)
PatchGuard (x64 Windows)៖ រារាំងការកែប្រែ kernel code ឬ important data structures (SSDT, IDT, GDT)។

ប្រសិនបើ PatchGuard រកឃើញការកែប្រែ → Blue Screen of Death (BSOD)។

ការវាយប្រហារ៖ អ្នកវាយប្រហារប្រើ BYOVD (Bring Your Own Vulnerable Driver) ដើម្បីបិទ PatchGuard តាមរយៈ driver ដែលមានភាពងាយរងគ្រោះ។

២៦.ោ Windows Protected Process Light (PPL)
PPL៖ ការពារ process (ឧ. lsass.exe, csrss.exe) ពីការចូលដំណើរការ (open process with PROCESS_VM_READ) សូម្បីតែពី administrator។

ការវាយប្រហារ៖

PPL bypass តាមរយៈ kernel driver (ដូចជា PPLKiller)។

ប្រើ mimikatz ជាមួយ !+ (protection bypass)។

ជំពូកទី២៧: Linux Security Modules (LSM) និង Kernel Hardening
២៧.១ Linux Capabilities
Capabilities៖ បំបែកសិទ្ធិ root ទៅជា privileges តូចៗ (~40 capabilities)។

CAP_NET_ADMIN: កំណត់រចនាសម្ព័ន្ធបណ្តាញ

CAP_DAC_OVERRIDE: រំលង file permissions

CAP_SYS_ADMIN: wide administrative power (ជិត root)

ឧទាហរណ៍៖ setcap cap_net_raw+ep /usr/bin/ping → ping អាចប្រើ raw sockets ដោយមិនចាំបាច់ root។

ការវាយប្រហារ៖ ស្វែងរក binaries ដែលមាន capabilities ច្រើនពេក (ឧ. cap_setuid + cap_dac_override) → privilege escalation។

២៧.២ Control Groups (cgroups) Security
cgroups៖ កំណត់ធនធាន (CPU, memory, I/O) សម្រាប់ process group (ប្រើដោយ Docker, systemd)។

ហានិភ័យ៖

Cgroup escape – ប្រសិនបើ cgroup namespace ត្រូវបានកំណត់ខុស ដំណើរការក្នុង container អាចកែប្រែ cgroup settings របស់ host។

DoS via resource exhaustion – សូម្បីតែមាន cgroup limits, attacker អាចប្រើប្រាស់ធនធានដល់កម្រិតកំណត់ → ប៉ះពាល់ដល់ processes ដទៃ។

២៧.៣ Kernel Self-Protection (KSP)
Kernel Address Space Layout Randomization (KASLR)៖ ចៃដន្យទីតាំង kernel នៅពេល boot (រារាំងការទាយអាសយដ្ឋានសម្រាប់ kernel exploits)។

Kernel Stack Canaries៖ ស្រដៀង user space, ការពារ stack overflow ក្នុង kernel។

Lockdown LSM (Linux 5.4+)៖ រារាំង root ពីការធ្វើប្រតិបត្តិការដែលអាចបំផ្លាញ integrity (ឧ. loading unsigned kernel modules, access to /dev/mem)។

CONFIG_SLAB_FREELIST_HARDENED៖ ធ្វើឱ្យ heap exploitation (use-after-free) ពិបាកជាងមុន។

ជំពូកទី២៨: macOS Security Architecture កម្រិតខ្ពស់
២៨.១ System Integrity Protection (SIP)
SIP (rootless mode)៖ ការពារ /System, /usr, /bin, /sbin, និង built-in apps ពីការកែប្រែសូម្បីតែពី root។

ស្ថានភាព៖ csrutil status (ក្នុង Recovery mode)។

ការវាយប្រហារ៖ បិទ SIP ដោយរាងកាយ (boot into Recovery → terminal → csrutil disable) ត្រូវការ physical access ឬ firmware password។

២៨.២ Hardened Runtime & Notarization
Hardened Runtime៖ ការពារ process ពី code injection, memory corruption, dynamic linker hijacking។

com.apple.security.cs.disable-library-validation entitlement អាចបិទការការពារនេះ (ប៉ុន្តែត្រូវការហត្ថលេខាពិសេស)។

Notarization (macOS 10.14.5+)៖ Apple ស្កេនកម្មវិធីរក malware មុនពេលអនុញ្ញាតឱ្យដំណើរការ។

ការវាយប្រហារ៖ ប្រើ developer ID certificates ដែលត្រូវបានលួច ឬ revoked មិនទាន់ដើម្បី notarize malware។

២៨.៣ Apple File System (APFS) Security Features
Per-file encryption៖ keys រក្សាទុកក្នុង CoreStorage (FileVault)។

Copy-on-Write (CoW)៖ ការពារការខូចទិន្នន័យ (data corruption) ពី crash ។

Snapshots៖ អាចប្រើសម្រាប់ rollback ពេលមាន ransomware (ប្រសិនបើ snapshot មិនត្រូវបានលុប)។

២៨.៤ macOS Malware Persistence
Launch Agents (~/Library/LaunchAgents/, /Library/LaunchAgents/) – plist with RunAtLoad = true។

Login Items – System Settings → General → Login Items (GUI) ឬ ~/Library/Application Support/com.apple.backgroundtaskmanagement។

Safari Extensions – .safariextz អាចប្រមូលទិន្នន័យរុករក។

ឧទាហរណ៍៖ OSX/Shlayer malware – ប្រើ fake Flash Player update ដើម្បីដំឡើង persistence។

ជំពូកទី២៩: ការវិភាគប្រព័ន្ធប្រតិបត្តិការប្រកបដោយភាពព្យាបាទ (Malicious OS Analysis)
២៩.១ Firmware Malware
UEFI firmware rootkits (LoJax, MoonBounce)៖

សរសេរទៅកាន់ SPI flash memory (firmware)។

Persist across OS reinstall, disk format, and even motherboard replacement (ប្រសិនបើ firmware មិនត្រូវបាន flashed)។

ការរកឃើញ៖

CHIPSEC (Intel) – ពិនិត្យ UEFI firmware integrity ។

FlashROM – dump firmware ហើយប្រៀបធៀប hash ជាមួយ known good image។

២៩.២ Bootkit Analysis
Bootkit (ឧ. MBR Rootkit: TDL-4, Rovnix)៖

ឆ្លង Master Boot Record (MBR) → ផ្ទុកមុន OS → ចាប់ពង្រត់ boot process។

ក្នុង Windows, bootkit អាច patch kernel ក្នុង memory (មុនពេល PatchGuard ផ្ទុក)។

ការរកឃើញ៖

ប្រើ GMER (Windows) – scan MBR និង boot sectors។

Boot from trusted USB (WinPE/Linux) ហើយពិនិត្យ MBR៖ dd if=/dev/sda of=mbr.bin bs=512 count=1។

២៩.៣ Hypervisor Rootkits (Blue Pill)
Blue Pill (Joanna Rutkowska, 2006)៖

ប្រើ AMD SVM (Secure Virtual Machine) ឬ Intel VT-x ដើម្បីបំលែង OS ទាំងមូលទៅជា guest VM នៅ runtime។

Hypervisor (malicious) គ្រប់គ្រង OS ពីខាងក្រោម → OS មិនដឹងថាខ្លួនកំពុងដំណើរការលើ hypervisor ទេ។

ការរកឃើញ៖

Red Pill (2006) – detect hypervisor by measuring timing differences (e.g., sidt instruction latency)។

No Pill (2007) – detect using hardware features (SVM/VMX bits in MSRs)។

ស្ថានភាពបច្ចុប្បន្ន៖ ស្ទើរតែគ្មាន hypervisor rootkits ក្នុងព្រៃ ព្រោះត្រូវការ administrative privileges និងការគាំទ្រ hardware virtualization។

ជំពូកទី៣០: OS Hardening Frameworks & Compliance
៣០.១ CIS Benchmarks (Center for Internet Security)
CIS Benchmarks៖ សំណុំអនុសាសន៍រឹងប៉ឹង OS (Level 1 – basic, Level 2 – advanced/defense-in-depth)។

ឧទាហរណ៍ (Windows 11)៖

Level 1: Ensure 'Accounts: Guest account status' is disabled (score 1)

Level 2: Ensure 'Network access: Do not allow anonymous enumeration of SAM accounts' is enabled

ឧបករណ៍៖ CIS-CAT Pro (assess compliance), OpenSCAP (Linux)។

៣០.២ DISA STIGs (Security Technical Implementation Guides)
STIGs៖ ស្តង់ដាររបស់ US Department of Defense សម្រាប់សន្តិសុខ OS។

Severity categories៖ CAT I (high risk – must fix), CAT II (medium), CAT III (low)។

ឧទាហរណ៍ (Windows Server 2019)៖

V-92945: 'The system must be configured to audit Logon/Logoff - Success and Failure'។

V-92947: 'Windows Server 2019 must have the built-in Administrator account renamed'។

ឧបករណ៍៖ STIG Viewer, SCAP Compliance Checker។

៣០.៣ Automated Hardening Tools
Windows៖

LGPO.exe (Local Group Policy Object) – import/export security policies។

Security Compliance Toolkit (SCT) – Microsoft's baseline templates (Windows 10/11, Server)។

Linux៖

Lynis – security auditing and hardening tool (scans for misconfigurations, suggests fixes)។

Debian Hardening – apt-get install hardening-wrapper, enable -D_FORTIFY_SOURCE=2។

Ansible roles (e.g., devsec.hardening) – automate CIS/STIG compliance។

macOS៖

Santa (Google) – binary whitelisting/blacklisting។

macOS Security Compliance Project (MSCP) – Apple's STIG benchmarks។

៣០.៤ Continuous Compliance Monitoring
OpenSCAP (Linux) – generate compliance report:

bash
oscap xccdf eval --profile xccdf_org.ssgproject.content_profile_cis --report report.html /usr/share/xml/scap/ssg/content/ssg-rhel9-ds.xml
Azure Arc / AWS Systems Manager – monitor OS compliance at scale (hybrid cloud)។

InSpec (Chef) – write compliance tests as code (e.g., describe file('/etc/passwd') { it { should exist } })។

តារាងសង្ខេបមេរៀនទាំងអស់ (ជំពូក ១ ដល់ ៣០)
ជំពូក	ចំណងជើង
1	សេចក្តីផ្តើមអំពី OS និងតួនាទីក្នុងសន្តិសុខសាយប័រ
2	ការគ្រប់គ្រងដំណើរការ (Process Management) និងសន្តិសុខ
3	ការគ្រប់គ្រងអង្គចងចាំ (Memory Management) និងភាពងាយរងគ្រោះ
4	ប្រព័ន្ធឯកសារ (File System) និងការអនុញ្ញាត
5	ការគ្រប់គ្រងអ្នកប្រើប្រាស់ និងការបង្កើនសិទ្ធិ (Privilege Escalation)
6	ការទំនាក់ទំនងរវាងដំណើរការ (IPC) និងហានិភ័យ
7	Kernel, Drivers, និង Rootkits
8	សុវត្ថិភាពប្រព័ន្ធចាប់ផ្ដើម (Boot Security) និង TPM
9	គោលនយោបាយសន្តិសុខ (MAC, Hardening)
10	ការរកឃើញការវាយប្រហារ និង Memory Forensics
11	Practical Labs (អនុវត្តជាក់ស្តែង)
12	បច្ចេកវិទ្យាទំនើប (Container Security, Confidential Computing)
13	កាលវិភាគដំណើរការ (Scheduling) និង Timing Attacks
14	សុវត្ថិភាពបណ្តាញកម្រិត OS (Network Stack Security)
15	ការគ្រប់គ្រងឧបករណ៍ (Device Management) និង DMA Attacks
16	ប្រព័ន្ធចុះឈ្មោះ (Registry) និងសន្តិសុខក្នុង Windows
17	ប្រព័ន្ធឯកសារចែករំលែក (SMB, NFS) និងសន្តិសុខ
18	ការគ្រប់គ្រងព្រឹត្តិការណ៍ (Event Management) និង SIEM
19	Malware Persistence Mechanisms ឆ្លងកាត់ OS
20	Virtualization Security (Hypervisor & VM Escape)
21	Real-Time OS (RTOS) សន្តិសុខក្នុង IoT
22	Mobile OS Security (Android & iOS)
23	Incident Response នៅលើ OS
24	សន្តិសុខប្រព័ន្ធឯកសារកម្រិតខ្ពស់ (FIM, Encryption)
25	សន្តិសុខ API ប្រព័ន្ធ (Syscall Filtering, Hooking)
26	Windows Security Features កម្រិតខ្ពស់ (Credential Guard, PPL, PatchGuard)
27	Linux Security Modules (LSM) និង Kernel Hardening
28	macOS Security Architecture (SIP, Hardened Runtime, APFS)
29	ការវិភាគប្រព័ន្ធប្រតិបត្តិការប្រកបដោយភាពព្យាបាទ (Firmware, Bootkit, Hypervisor Rootkits)
30	OS Hardening Frameworks & Compliance (CIS, STIG, OpenSCAP)
ឧបសម្ព័ន្ធបន្ថែម (Appendix Expansion)
ឃ. គម្រោងស្រាវជ្រាវ (Research Projects) សម្រាប់និស្សិត
Project 1៖ Build a simple rootkit that hooks syscall table in Linux (LKM) and detect it using systemtap។

Project 2៖ Analyze a real malware sample (e.g., WannaCry) in a sandbox – document its persistence, process injection, and network behavior។

Project 3៖ Implement a ROP chain to bypass DEP on Windows (x86) with ASLR disabled, then enable ASLR and retry with information leak។

Project 4៖ Write an eBPF program to monitor execve syscalls and alert on suspicious binaries (e.g., running from /tmp)។

Project 5៖ Harden a Linux server according to CIS Level 2 using Ansible, then scan with OpenSCAP to verify compliance។

ង. បញ្ជីវីដេអូបង្រៀន (Recommended Video Lectures)
Operating System Security (Dr. Ninghui Li, Purdue) – YouTube

Windows Internals (Pavel Yosifovich) – Pluralsight

Linux Kernel Security (Kees Cook, Google) – Linux Foundation

Offensive Security (OSED/OSEE) – process injection, exploit development

ច. ការប្រកួតប្រជែង (Capture The Flag – CTF) ដែលពាក់ព័ន្ធ OS
pwn.college (Arizona State University) – kernel exploitation, seccomp, sandbox escape

HTB (Hack The Box) – Windows/Linux privilege escalation machines

flare-on (FireEye/Mandiant) – reverse engineering and OS internals

សេចក្តីសន្និដ្ឋានចំពោះការបន្ថែមមេរៀន
មេរៀនបន្ថែមទាំងនេះ (ជំពូក ២៤–៣០) ផ្តល់ជូននូវ៖

ការអ៊ិនគ្រីបឯកសារ (BitLocker, LUKS, FileVault)

ការត្រួតពិនិត្យភាពត្រឹមត្រូវនៃឯកសារ (FIM, Tripwire)

ការតម្រង System Calls (seccomp)

Windows Security Features កម្រិតខ្ពស់ (Credential Guard, PPL, PatchGuard)

Linux Kernel Hardening (capabilities, cgroups, KASLR)

macOS Security Architecture (SIP, Hardened Runtime)

Malicious OS Analysis (firmware rootkits, bootkits, hypervisor rootkits)

Hardening Frameworks (CIS, STIG, OpenSCAP)`

},

  {
    id: 22,
    slug: "OCrytography fundemental",
    title: "Crytography fundemental for Cybersecurity មូលដ្ឋាន",
    description: "រៀន  Crytography fundemental for Cybersecurity ដើម្បីខ្លាយជាអ្នកជំនាញ Ethical Hacking",
    level: "កម្រិតខ្ពស់",
    icon: "🐉",
    language: "",
    content: `Crytography fundemental for Cybersecurity`,
    codeExample:`ជំពូកទី 1: សេចក្តីផ្តើមអំពីគ្រីបតូក្រាហ្វ៊ី
1.1 និយមន័យ និងប្រវត្តិ (ពី Caesar cipher ដល់ quantum cryptography)

1.2 គោលដៅសុវត្ថិភាពទាំង 4 (CIA + Non-repudiation)

1.3 ភាពខុសគ្នារវាង cryptography, cryptanalysis, steganography

1.4 វិស័យអនុវត្តក្នុង cybersecurity (TLS, VPN, Blockchain, E2EE)

1.5 ឧទាហរណ៍ជាក់ស្តែង៖ ការផ្ញើសារសម្ងាត់តាម Internet

ជំពូកទី 2: គណិតវិទ្យាគ្រឹះសម្រាប់គ្រីបតូ
2.1 ទ្រឹស្តីចំនួន (number theory): ចំនួនបឋម, gcd, lcm, modulo arithmetic

2.2 Fermat's little theorem, Euler's totient function, Euler's theorem

2.3 ក្រុម, រ៉ង, និងវាល (groups, rings, fields) – សេចក្តីផ្តើម

2.4 លោការីតដាច់ពីគ្នា (discrete logarithm problem)

2.5 កត្តាចំនួនធំ (integer factorization problem)

2.6 លំហាត់គណនា mod inverse, gcd

ជំពូកទី 3: គ្រីបតូបែបបុរាណ (Classical Ciphers)
3.1 Substitution cipher (Caesar, Atbash, Vigenère)

3.2 Transposition cipher (Rail fence, Columnar)

3.3 One-time pad (OTP) – ទ្រឹស្តីសុវត្ថិភាពពេញលេញ

3.4 ការវិភាគភាពញឹកញាប់ (frequency analysis)

3.5 កម្មវិធី៖ ឌិគ្រីប Vigenère ដោយ Kasiski test

ជំពូកទី 4: ចៃដន្យ និងតម្លៃចៃដន្យក្លែង (Randomness & PRNG)
4.1 ភាពចៃដន្យពិត (TRNG) vs ក្លែង (PRNG)

4.2 លក្ខណៈវិនិច្ឆ័យសម្រាប់ PRNG សុវត្ថិភាព (CSPRNG)

4.3 ឧទាហរណ៍ PRNG: LCG, Blum Blum Shub, Fortuna

4.4 ការប្រើប្រាស់ /dev/urandom, CryptGenRandom, RDRAND

4.5 ការវាយប្រហារលើ PRNG ខ្សោយ (ករណី Debian OpenSSL)

ជំពូកទី 5: ការអ៊ិនគ្រីបស៊ីមេទ្រី (Symmetric Encryption)
5.1 គោលការណ៍ទូទៅ៖ block vs stream, key length

5.2 Stream cipher៖ RC4 (ខូច), ChaCha20, Salsa20

5.3 Block cipher៖ Feistel network (ឧ. DES), SP-network (ឧ. AES)

5.4 របៀបប្រើ (Modes): ECB (មិនសុវត្ថិភាព), CBC, CFB, OFB, CTR, GCM (AEAD)

5.5 Padding schemes: PKCS#7, និងការវាយប្រហារ padding oracle

ជំពូកទី 6: AES និងការអនុវត្ត
6.1 ប្រវត្តិការប្រកួតជ្រើសរើស AES

6.2 រចនាសម្ព័ន្ធ SubBytes, ShiftRows, MixColumns, AddRoundKey

6.3 តារាង S-box, key expansion, ចំនួនជុំ (10,12,14)

6.4 ការអនុវត្ត AES-NI (hardware acceleration)

6.5 ឧទាហរណ៍៖ អ៊ិនគ្រីបឯកសារដោយ AES-256-GCM (Python + PyCryptodome)

ផ្នែកទី 2: គ្រីបតូអស៊ីមេទ្រី និង PKI (ជំពូក 7-12)
ជំពូកទី 7: គ្រីបតូកូនសោសាធារណៈ (Public Key Cryptography)
7.1 គំនិតគ្រឹះ៖ កូនសោពីរ, trapdoor one-way function

7.2 កម្មវិធីសំខាន់ៗ៖ encryption, digital signature, key exchange

7.3 Diffie-Hellman key exchange (DH) – ជំនាន់ដើម

7.4 បញ្ហា MITM លើ DH និងតម្រូវការ authentication

ជំពូកទី 8: RSA
8.1 ក្បួនដោះស្រាយបង្កើតគូកូនសោ (p, q, n, φ, e, d)

8.2 ការអ៊ិនគ្រីប RSA (c = m^e mod n), ឌិគ្រីប (m = c^d mod n)

8.3 Digital signature with RSA (hash then sign)

8.4 ទំហំកូនសោ (1024, 2048, 4096 bits) និងសន្តិសុខ

8.5 ការវាយប្រហារ៖ low private exponent, common modulus, blinding

8.6 ឧទាហរណ៍៖ generate RSA key, sign/verify (Python + cryptography)

ជំពូកទី 9: Elliptic Curve Cryptography (ECC)
9.1 សមីការ elliptic curve (y² = x³ + ax + b)

9.2 ការបូកចំណុច (point addition) និង scalar multiplication

9.3 ECDH (Elliptic Curve Diffie-Hellman)

9.4 ECDSA (Elliptic Curve Digital Signature Algorithm)

9.5 ការប្រៀបធៀប RSA vs ECC (សុវត្ថិភាពដូចគ្នា កូនសោខ្លីជាង)

9.6 Curves ពេញនិយម៖ secp256k1 (Bitcoin), Curve25519 (Signal, WireGuard)

ជំពូកទី 10: ហេស និងកូដផ្ទៀងផ្ទាត់សារ (Hash & MAC)
10.1 លក្ខណៈសម្បត្តិ៖ one-way, preimage resistance, collision resistance

10.2 MD5, SHA-1 (collision attacks), SHA-2 (256,512), SHA-3 (Keccak)

10.3 HMAC (Hash-based Message Authentication Code)

10.4 កម្មវិធី៖ password hashing (ដោយ salt + KDF), blockchain, file integrity

10.5 ឧទាហរណ៍៖ compute SHA-256, HMAC-SHA256, brute-force hash cracking

ជំពូកទី 11: PKI និង Digital Certificate
11.1 ហេដ្ឋារចនាសម្ព័ន្ធកូនសោសាធារណៈ (PKI)

11.2 X.509 certificate format, fields (subject, issuer, validity, public key)

11.3 Certificate Authority (CA), Registration Authority (RA)

11.4 Certificate chain, root CA, intermediate CA

11.5 Certificate Revocation List (CRL) vs OCSP

11.6 កម្មវិធី៖ HTTPS (Let's Encrypt), S/MIME, code signing

ជំពូកទី 12: Key Management
12.1 វដ្តជីវិតកូនសោ៖ generation, distribution, storage, rotation, destruction

12.2 Hardware Security Module (HSM), Trusted Platform Module (TPM)

12.3 Key derivation functions (PBKDF2, bcrypt, scrypt, Argon2)

12.4 Secret sharing (Shamir's Secret Sharing)

12.5 ការរក្សាទុកកូនសោដោយសុវត្ថិភាព (encrypted key files, vaults)

ផ្នែកទី 3: ការវាយប្រហារ និងការពារ (ជំពូក 13-18)
ជំពូកទី 13: Cryptanalysis មូលដ្ឋាន
13.1 ការចាត់ថ្នាក់ការវាយប្រហារ៖ ciphertext-only, known-plaintext, chosen-plaintext, chosen-ciphertext

13.2 Brute-force attack (key space, Moore's law, quantum speedup)

13.3 Linear cryptanalysis, differential cryptanalysis

13.4 Side-channel attacks (timing, power, cache, EM)

13.5 Fault injection attacks

ជំពូកទី 14: ការវាយប្រហារលើការអនុវត្ត (Implementation Attacks)
14.1 Padding oracle attack (ឧ. Lucky13, POODLE)

14.2 Timing attack on RSA (Kocher) និង constant-time mitigation

14.3 Cache-timing attack (Prime+Probe) លើ AES

14.4 Heartbleed (OpenSSL), Spectre, Meltdown

14.5 ការពារ៖ constant-time functions, blinding, isolation

ជំពូកទី 15: Protocol Attacks
15.1 Man-in-the-Middle (MITM) on SSL/TLS (SSLstrip)

15.2 Logjam, FREAK, DROWN (export-grade crypto)

15.3 BEAST, CRIME, BREACH (compression attacks)

15.4 Attack on WPA2 (KRACK)

15.5 Replay attack, nonce reuse

ជំពូកទី 16: Post-Quantum Cryptography (សេចក្តីផ្តើម)
16.1 គំរាមកំហែងពី quantum computer (Shor's algorithm, Grover's algorithm)

16.2 គ្រីបតូក្រាហ្វ៊ីធន់នឹងកង់ទិច (PQC)៖ lattice-based, code-based, multivariate, hash-based, isogeny-based

16.3 NIST PQC competition (Kyber, Dilithium, FALCON, SPHINCS+)

16.4 ការផ្លាស់ប្តូរទៅ PQC (hybrid mode)

ជំពូកទី 17: Secure Coding Practices
17.1 កុំបង្កើត cipher ដោយខ្លួនឯង (Don't roll your own crypto)

17.2 ប្រើ high-level libraries (libsodium, Crypto.cipher, OpenSSL)

17.3 ការគ្រប់គ្រង nonce/IV (មិនត្រូវប្រើឡើងវិញ)

17.4 Constant-time comparison (សម្រាប់ MAC, password)

17.5 ការសម្អាតអង្គចងចាំ (zero memory after use)

ជំពូកទី 18: Cryptography in Real-World Protocols
18.1 TLS 1.3: handshake, cipher suites (AES-GCM, ChaCha20-Poly1305), 0-RTT

18.2 SSH: host key, session key exchange (curve25519-sha256), encryption

18.3 IPsec: ESP, AH, IKEv2

18.4 WireGuard: Noise protocol framework, Curve25519, ChaCha20Poly1305

18.5 Signal Protocol: Double Ratchet, Prekeys, X3DH

ផ្នែកទី 4: កម្មវិធីជាក់ស្តែង (ជំពូក 19-24)
ជំពូកទី 19: Cryptography for Passwords
19.1 ការរក្សាទុកពាក្យសម្ងាត់ដោយសុវត្ថិភាព៖ salted hash + KDF

19.2 bcrypt, scrypt, Argon2 (winner of Password Hashing Competition)

19.3 ការការពារប្រឆាំងនឹង rainbow table, GPU brute-force

19.4 Password managers (ការអ៊ិនគ្រីប vault)

19.5 ឧទាហរណ៍៖ hash password with Argon2 (Python passlib)

ជំពូកទី 20: Disk & File Encryption
20.1 Full Disk Encryption (FDE)៖ BitLocker (Windows), LUKS (Linux), FileVault (macOS)

20.2 របៀប LUKS ដំណើរការ (LUKS header, key slots, PBKDF2)

20.3 File-level encryption: gpg, age, 7-Zip AES

20.4 Deniable encryption (TrueCrypt/VeraCrypt hidden volume)

20.5 ឧទាហរណ៍៖ encrypt USB drive with LUKS

ជំពូកទី 21: Cryptography in Blockchain
21.1 Hash (SHA-256) សម្រាប់ block chaining និង Merkle tree

21.2 Digital signature (ECDSA) សម្រាប់ transaction authentication

21.3 Proof-of-Work (hashcash, nonce)

21.4 Bitcoin address generation (public key hash)

21.5 វ៉ាលីត (wallet)៖ hierarchical deterministic (BIP32/39/44), seed phrase

21.6 Ethereum, smart contracts

ជំពូកទី 22: Email & Messaging Security
22.1 PGP/GPG: web of trust, key signing, encryption, signing

22.2 S/MIME: PKI-based email encryption

22.3 End-to-End Encryption (E2EE): Signal, WhatsApp, Telegram (MTProto)

22.4 OMEMO (XMPP), Matrix (Olm/Megolm)

22.5 ឧទាហរណ៍៖ send encrypted email with GnuPG

ជំពូកទី 23: Web Security & TLS
23.1 TLS handshake លម្អិត (ClientHello, ServerHello, Certificate, KeyExchange)

23.2 Cipher suite negotiation, TLS extensions (SNI, ALPN)

23.3 HTTP Strict Transport Security (HSTS), Certificate Pinning

23.4 Let's Encrypt, ACME protocol

23.5 ការធ្វើតេស្ត SSL Labs, openssl s_client

ជំពូកទី 24: Cryptography for Developers (API & Libraries)
24.1 Python: cryptography, PyCryptodome, hashlib, secrets

24.2 Go: crypto/tls, crypto/ed25519, crypto/aes

24.3 JavaScript: Web Crypto API, subtlecrypto, libsodium.js

24.4 C/C++: OpenSSL, libsodium, Botan

24.5 Rust: ring, rust-crypto, dalek

24.6 ការជៀសវាង API គ្រោះថ្នាក់ (M2Crypto deprecated)

ផ្នែកទី 5: បច្ចេកទេសកម្រិតខ្ពស់ និងស្រាវជ្រាវ (ជំពូក 25-30)
ជំពូកទី 25: Zero-Knowledge Proofs (ZKP)
25.1 គោលការណ៍៖ prover បង្ហាញថាស្គាល់អាថ៌កំបាំងដោយមិនបង្ហាញវា

25.2 Interactive vs non-interactive ZKP (NIZK)

25.3 zk-SNARKs (zero-knowledge succinct non-interactive argument of knowledge)

25.4 zk-STARKs (transparent, no trusted setup)

25.5 កម្មវិធី៖ Zcash, anonymous credentials, verifiable voting

ជំពូកទី 26: Homomorphic Encryption
26.1 Partially homomorphic (RSA, ElGamal, Paillier)

26.2 Fully Homomorphic Encryption (FHE) – Gentry's construction

26.3 Schemes: BFV, CKKS (for approximate numbers), TFHE

26.4 កម្មវិធី៖ cloud computing on encrypted data, private machine learning

26.5 បញ្ហា៖ performance, noise management

ជំពូកទី 27: Secure Multi-Party Computation (MPC)
27.1 គោលដៅ៖ ភាគីជាច្រើនគណនាលទ្ធផលរួមគ្នា ដោយមិនបង្ហាញទិន្នន័យផ្ទាល់ខ្លួន

27.2 Garbled circuits (Yao)

27.3 Secret sharing-based MPC (BGW, SPDZ)

27.4 Oblivious transfer (OT) extension

27.5 កម្មវិធី៖ private auction, threshold cryptography

ជំពូកទី 28: Quantum Cryptography
28.1 Quantum Key Distribution (QKD) – BB84 protocol

28.2 គោលការណ៍ quantum entanglement, no-cloning theorem

28.3 ការរកឃើញ eavesdropper (quantum channel monitoring)

28.4 QKD limitations (range, hardware, authentication)

28.5 Post-quantum vs quantum cryptography (ភាពខុសគ្នា)

ជំពូកទី 29: Lightweight Cryptography for IoT
29.1 បញ្ហាប្រឈម៖ resource-constrained devices (CPU, RAM, power)

29.2 Lightweight block ciphers: PRESENT, SPECK, SIMON, SPARX

29.3 Lightweight stream ciphers: Grain, Trivium

29.4 Authenticated encryption for IoT: ASCON (NIST winner), Elephant

29.5 ឧទាហរណ៍៖ encrypt sensor data with PRESENT

ជំពូកទី 30: និន្នាការអនាគត និងការសន្និដ្ឋាន
30.1 ការវិវត្តនៃ NIST standards (FIPS 140-3, SP 800-series)

30.2 Cryptography ក្នុង AI/ML (homomorphic inference, zkML)

30.3 Blockchain interoperability និង zero-knowledge rollups

30.4 តម្រូវការផ្នែកច្បាប់ (GDPR, eIDAS, export control)

30.5 សង្ខេបគ្រឹះទាំងអស់ និងការណែនាំសម្រាប់រៀនបន្ត

30.6 គម្រោងចុងក្រោយ៖ បង្កើត secure chat application (end-to-end encryption, perfect forward secrecy)

បន្ថែម (Appendices)
ឧបសម្ព័ន្ធ A – តារាង ASN.1, OIDs

ឧបសម្ព័ន្ធ B – OpenSSL command reference

ឧបសម្ព័ន្ធ C – គណិតវិទ្យាបន្ថែម (Chinese remainder theorem, primality testing)

ឧបសម្ព័ន្ធ D – Glossary of terms (ខ្មែរ-អង់គ្លេស)

ឧបសម្ព័ន្ធ E – លំហាត់គម្រោង (projects)

ឧបសម្ព័ន្ធ F – ឯកសារយោង (NIST, RFC, books, papers)

ជំពូកទី 1: សេចក្តីផ្តើមអំពីគ្រីបតូក្រាហ្វ៊ី
1.1 តើគ្រីបតូក្រាហ្វ៊ីជាអ្វី?
គ្រីបតូក្រាហ្វ៊ី (Cryptography) មកពីពាក្យក្រិកបុរាណ "kryptos" (មានន័យថា លាក់កំបាំង) និង "graphein" (មានន័យថា សរសេរ)។ ដូច្នេះគ្រីបតូក្រាហ្វ៊ីគឺជា សិល្បៈ និងវិទ្យាសាស្ត្រនៃការសរសេរកំបាំង។ ក្នុងបរិបទសន្តិសុខសាយប៊ែរទំនើប គ្រីបតូក្រាហ្វ៊ីគឺជាឧបករណ៍គ្រឹះមួយសម្រាប់ការពារព័ត៌មានពីភាគីដែលមិនមានការអនុញ្ញាត។

និយមន័យសាមញ្ញ៖
គ្រីបតូក្រាហ្វ៊ី គឺជាដំណើរការបំប្លែងទិន្នន័យដែលអាចអានយល់បាន (plaintext) ទៅជាទម្រង់ដែលមិនអាចអានយល់បាន (ciphertext) ដោយប្រើកូនសោ (key) និងក្បួនដោះស្រាយ (algorithm) ហើយអាចបំប្លែងត្រឡប់វិញបានតែអ្នកដែលមានកូនសោត្រឹមត្រូវប៉ុណ្ណោះ។

ឧទាហរណ៍ប្រចាំថ្ងៃ៖
កាលពី ២.០០០ ឆ្នាំមុន សេសារ (Julius Caesar) បានប្រើស៊ីហ្វឺសាមញ្ញដោយប្តូរអក្សរនីមួយៗទៅមុខ ៣ កន្លែង (A→D, B→E, ...)។ សព្វថ្ងៃនេះ នៅពេលអ្នកចូលទៅកាន់គេហទំព័រ https://bank.com ទិន្នន័យរវាងកុំព្យូទ័ររបស់អ្នក និងម៉ាស៊ីនមេធនាគារត្រូវបានអ៊ិនគ្រីបដោយ AES-256 ដែលខ្លាំងជាង Caesar cipher រាប់ពាន់លានដង។

1.2 គោលដៅសំខាន់ៗទាំងបួននៃគ្រីបតូក្រាហ្វ៊ី
ក្នុងសន្តិសុខសាយប៊ែរ គ្រីបតូក្រាហ្វ៊ីបម្រើគោលបំណងសំខាន់ៗចំនួនបួន (ហៅកាត់ថា CIA + N)៖

1.2.1 ការសម្ងាត់ (Confidentiality)
ការសម្ងាត់មានន័យថា មានតែអ្នកដែលមានសិទ្ធិប៉ុណ្ណោះដែលអាចអានព័ត៌មានបាន។ គ្រីបតូក្រាហ្វ៊ីសម្រេចគោលដៅនេះតាមរយៈការអ៊ិនគ្រីប (encryption)។

ឧទាហរណ៍៖
នៅពេលអ្នកផ្ញើសារតាម WhatsApp សាររបស់អ្នកត្រូវបានអ៊ិនគ្រីប ដូច្នេះទោះបីជានរណាម្នាក់ស្ទាក់ចាប់កញ្ចប់ទិន្នន័យ (packet) ក៏ដោយ ក៏ពួកគេមិនអាចអានសារនោះដែរ។

1.2.2 ភាពត្រឹមត្រូវ (Integrity)
ភាពត្រឹមត្រូវមានន័យថា ទិន្នន័យមិនត្រូវបានកែប្រែដោយគ្មានការអនុញ្ញាត ទាំងក្នុងពេលផ្ទុក ឬក្នុងពេលបញ្ជូន។

ឧទាហរណ៍៖
នៅពេលអ្នកទាញយកកម្មវិធីពីអ៊ីនធឺណិត គេហទំព័រជាច្រើនផ្តល់នូវតម្លៃ SHA-256 hash ។ អ្នកអាចគណនា hash នៃឯកសារដែលទាញយករួច ប្រៀបធៀបជាមួយតម្លៃដើម ប្រសិនបើដូចគ្នា មានន័យថាឯកសារមិនត្រូវបានកែប្រែឡើយ។

1.2.3 ការបញ្ជាក់អត្តសញ្ញាណ (Authentication)
ការបញ្ជាក់អត្តសញ្ញាណមានន័យថា យើងអាចផ្ទៀងផ្ទាត់បានថាអ្នកណាជាអ្នកបង្កើត ឬផ្ញើទិន្នន័យ។

ឧទាហរណ៍៖
នៅពេលអ្នកចូលទៅកាន់គេហទំព័រធនាគារ វិញ្ញាបនបត្រ (certificate) របស់ធនាគារបញ្ជាក់ថាគេហទំព័រនោះពិតជារបស់ធនាគារមែន មិនមែនជាគេហទំព័រក្លែងក្លាយ (phishing) ឡើយ។

1.2.4 ការមិនប្រកែកបដិសេធ (Non-repudiation)
ការមិនប្រកែកបដិសេធមានន័យថា អ្នកបង្កើត ឬអ្នកផ្ញើមិនអាចបដិសេធក្រោយមកថាខ្លួនមិនមែនជាអ្នកបង្កើតនោះទេ។

ឧទាហរណ៍៖
នៅពេលអ្នកចុះហត្ថលេខាឌីជីថល (digital signature) លើកិច្ចសន្យាអេឡិចត្រូនិច ហត្ថលេខានោះត្រូវបានបង្កើតដោយកូនសោឯកជន (private key) របស់អ្នក ដូច្នេះអ្នកមិនអាចបដិសេធថាអ្នកមិនបានចុះហត្ថលេខានោះទេ។

1.3 ប្រវត្តិសង្ខេបនៃគ្រីបតូក្រាហ្វ៊ី
១. សម័យបុរាណ (៤០០ មុនគ.ស – ១៨០០)
Scytale (ស្ប៉ាតា)៖ រុំបន្ទះស្បែកជុំវិញដំបងឈើ សរសេរសារ រួចស្រាយចេញ សារនឹងមើលទៅមិនយល់។

Caesar cipher (រ៉ូម)៖ ប្តូរអក្សរតាមចំនួនថេរ។

Vigenère cipher (សតវត្សរ៍ទី ១៦)៖ ប្រើពាក្យសម្ងាត់ (keyword) ដើម្បីប្តូរអក្សរតាមទីតាំង ត្រូវបានគេហៅថា "le chiffre indéchiffrable" (ស៊ីហ្វឺដែលមិនអាចបំបែកបាន) រហូតដល់សតវត្សរ៍ទី ១៩។

២. សម័យសង្គ្រាមលោក (១៩០០–១៩៤៥)
Enigma (អាល្លឺម៉ង់)៖ ម៉ាស៊ីនអ៊ិនគ្រីបដែលប្រើ rotor ស្មុគស្មាញ។ ត្រូវបានបំបែកដោយ Alan Turing និងក្រុមការងារនៅ Bletchley Park ដែលជួយសម្រេចលទ្ធផលសង្គ្រាម។

One-time pad (OTP)៖ បង្កើតឡើងដោយ Gilbert Vernam ប្រសិនបើប្រើត្រឹមត្រូវ OTP គឺមិនអាចបំបែកបានឡើយ ប៉ុន្តែមានបញ្ហាក្នុងការចែកចាយកូនសោ។

៣. សម័យទំនើប (១៩៧០–បច្ចុប្បន្ន)
DES (1977)៖ Data Encryption Standard ដោយ IBM និង NSA ប្រើកូនសោ ៥៦ ប៊ីត (សព្វថ្ងៃខ្សោយ)។

RSA (1977)៖ គ្រីបតូកូនសោសាធារណៈដំបូងគេ ដោយ Rivest, Shamir, Adleman។

AES (2001)៖ Advanced Encryption Standard ប្រកួតឈ្នះដោយ Rijndael (អ្នករចនាជនជាតិបែលហ្ស៊ិក) ប្រើកូនសោ ១២៨/១៩២/២៥៦ ប៊ីត។

Post-Quantum (2020–)៖ ការប្រកួតរបស់ NIST ដើម្បីស្វែងរកក្បួនដោះស្រាយធន់នឹងកុំព្យូទ័រកង់ទិច។

1.4 គ្រីបតូក្រាហ្វ៊ី និងសន្តិសុខសាយប៊ែរ
គ្រីបតូក្រាហ្វ៊ីមិនមែនជាដំណោះស្រាយទាំងអស់សម្រាប់សន្តិសុខសាយប៊ែរទេ ប៉ុន្តែវាជា ស្រទាប់ការពារដ៏សំខាន់។ ខាងក្រោមនេះជាឧទាហរណ៍កន្លែងដែលគ្រីបតូក្រាហ្វ៊ីត្រូវបានប្រើប្រាស់ជារៀងរាល់ថ្ងៃ៖

កម្មវិធី	តួនាទីគ្រីបតូ	ឧទាហរណ៍
HTTPS	អ៊ិនគ្រីបទិន្នន័យរវាង browser និង server	AES, TLS, RSA/ECDSA
Wi-Fi	ការពារបណ្តាញឥតខ្សែ	WPA2 (AES-CCMP), WPA3 (AES-GCM)
VPN	អ៊ិនគ្រីបចរាចរណ៍ទាំងអស់ពី client ទៅ server	IPsec, WireGuard (ChaCha20)
Email	PGP ឬ S/MIME សម្រាប់អ៊ិនគ្រីប និងចុះហត្ថលេខា	RSA, AES, SHA-256
Blockchain	ការពារប្រតិបត្តិការ និងភាពត្រឹមត្រូវ	SHA-256, ECDSA
Password storage	រក្សាទុកពាក្យសម្ងាត់ដោយសុវត្ថិភាព	bcrypt, Argon2, PBKDF2
1.5 ការយល់ខុសទូទៅអំពីគ្រីបតូក្រាហ្វ៊ី
ការយល់ខុសទី ១៖ "ក្បួនដោះស្រាយសម្ងាត់ (secret algorithm) ធ្វើឱ្យប្រព័ន្ធសុវត្ថិភាពជាង"
ការពិត៖ គ្រីបតូក្រាហ្វ៊ីទំនើបពឹងផ្អែកលើ គោលការណ៍ Kerckhoffs (១៨៨៣)៖ "ប្រព័ន្ធគ្រីបតូគួរតែមានសុវត្ថិភាព ទោះបីជាអ្នកវាយប្រហារដឹងពីក្បួនដោះស្រាយទាំងអស់ លើកលែងតែកូនសោ"។ ក្បួនដោះស្រាយដូចជា AES, RSA ត្រូវបានបោះពុម្ពជាសាធារណៈ និងត្រូវបានវិភាគដោយអ្នកជំនាញរាប់ពាន់នាក់។

ការយល់ខុសទី ២៖ "គ្រីបតូក្រាហ្វ៊ីអាចដោះស្រាយបញ្ហាសន្តិសុខទាំងអស់"
ការពិត៖ គ្រីបតូក្រាហ្វ៊ីការពារតែទិន្នន័យប៉ុណ្ណោះ មិនអាចការពារប្រឆាំងនឹងការវាយប្រហារដូចជា phishing, social engineering, ឬការលេចធ្លាយកូនសោដោយសារកំហុសមនុស្សឡើយ។

ការយល់ខុសទី ៣៖ "MD5 និង SHA-1 នៅតែសុវត្ថិភាព"
ការពិត៖ MD5 (បំបែកនៅឆ្នាំ ២០០៤) និង SHA-1 (បំបែកនៅឆ្នាំ ២០១៧ ដោយ Google SHAttered) លែងមានសុវត្ថិភាពសម្រាប់កម្មវិធីភាគច្រើនទៀតហើយ។

ជំពូកទី 2: គណិតវិទ្យាគ្រឹះសម្រាប់គ្រីបតូក្រាហ្វ៊ី
2.1 សេចក្តីផ្តើម
គ្រីបតូក្រាហ្វ៊ីទំនើបពឹងផ្អែកយ៉ាងខ្លាំងលើគណិតវិទ្យា ជាពិសេស ទ្រឹស្តីចំនួន (Number Theory) និង ពិជគណិតអរូបី (Abstract Algebra)។ អ្នកមិនចាំបាច់ក្លាយជាអ្នកគណិតវិទូដើម្បីយល់ពីគ្រីបតូក្រាហ្វ៊ីទេ ប៉ុន្តែការយល់ដឹងពីគោលគំនិតខាងក្រោមនឹងជួយឱ្យអ្នកយល់ពីរបៀបដែល RSA, ECC, DH ដំណើរការ។

2.2 ចំនួនគត់ និងការចែក
2.2.1 ចំនួនបឋម (Prime Numbers)
ចំនួនបឋមគឺជាចំនួនគត់ធំជាង ១ ដែលចែកបានតែនឹង ១ និងខ្លួនឯងប៉ុណ្ណោះ។
ឧទាហរណ៍៖ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...

ចំនួនបឋមគឺជា "ប្លុកសំណង់" នៃចំនួនគត់ទាំងអស់ (ទ្រឹស្តីបទគ្រឹះនៃនព្វន្ធ)។

2.2.2 Greatest Common Divisor (GCD)
GCD នៃចំនួនពីរ គឺជាចំនួនធំបំផុតដែលចែកចំនួនទាំងពីរបានស្មើ។

ឧទាហរណ៍៖ gcd(12, 18) = 6
ក្បួនដោះស្រាយ Euclidean សម្រាប់គណនា GCD៖

text
gcd(a, b):
    while b ≠ 0:
        temp = b
        b = a mod b
        a = temp
    return a
2.2.3 ចំនួនទាក់ទងបឋម (Coprime / Relatively Prime)
ចំនួនពីរ a និង b ត្រូវបានគេហៅថា coprime ប្រសិនបើ gcd(a, b) = 1។

ឧទាហរណ៍៖ 8 និង 15 គឺ coprime (ព្រោះ 8=2³, 15=3×5 គ្មានកត្តារួម)។

2.3 នព្វន្ធម៉ូឌុល (Modular Arithmetic)
នព្វន្ធម៉ូឌុល គឺជាបេះដូងនៃគ្រីបតូក្រាហ្វ៊ី។ យើងសរសេរ "a mod n" មានន័យថា សំណល់នៃការចែក a នឹង n។

ឧទាហរណ៍៖

17 mod 5 = 2 (ព្រោះ 17 = 3×5 + 2)

20 mod 4 = 0

7 mod 11 = 7

ប្រតិបត្តិការម៉ូឌុល៖

(a + b) mod n = (a mod n + b mod n) mod n

(a - b) mod n = (a mod n - b mod n) mod n

(a × b) mod n = (a mod n × b mod n) mod n

(a^b) mod n = (a mod n)^b mod n

កម្មវិធី៖
នៅក្នុង RSA យើងគណនា c = m^e mod n ។ ប្រសិនបើ m = 65, e = 17, n = 3233 (n=53×61) នោះ c = 65^17 mod 3233 ។

2.4 អង់វឺសគុណម៉ូឌុល (Modular Multiplicative Inverse)
អង់វឺសគុណម៉ូឌុលនៃ a mod n គឺជាចំនួន x ដែល a×x ≡ 1 (mod n)។ យើងសរសេរ x ≡ a⁻¹ mod n។

លក្ខខណ្ឌ៖ អង់វឺសមានតែនៅពេល gcd(a, n) = 1 ប៉ុណ្ណោះ។

ឧទាហរណ៍៖
រក 3⁻¹ mod 7៖ 3×5 = 15 ≡ 1 mod 7 (ព្រោះ 15-14=1) ដូច្នេះ 3⁻¹ ≡ 5 mod 7 ។

ក្បួនដោះស្រាយ Euclidean បន្ថែម (Extended Euclidean Algorithm) ប្រើសម្រាប់គណនាអង់វឺស។

2.5 ទ្រឹស្តីបទសំខាន់ៗ
2.5.1 ទ្រឹស្តីបទតូចរបស់ Fermat (Fermat's Little Theorem)
ប្រសិនបើ p ជាចំនួនបឋម ហើយ a មិនមែនជាពហុគុណនៃ p នោះ៖
a^(p-1) ≡ 1 (mod p)

ឧទាហរណ៍៖ p=7, a=3 → 3^6 = 729, 729 mod 7 = 1 (ព្រោះ 7×104=728)។

2.5.2 អនុគមន៍សូចនាកររបស់ Euler (Euler's Totient Function φ(n))
φ(n) រាប់ចំនួនគត់ចន្លោះពី 1 ដល់ n ដែល coprime នឹង n។

φ(p) = p-1 (ប្រសិនបើ p ជាចំនួនបឋម)

φ(p×q) = (p-1)(q-1) (ប្រសិនបើ p, q ជាចំនួនបឋមផ្សេងគ្នា)

ឧទាហរណ៍៖ n=10=2×5 → φ(10) = (2-1)(5-1) = 1×4 = 4 (ចំនួនគត់គឺ 1,3,7,9)។

2.5.3 ទ្រឹស្តីបទរបស់ Euler (Euler's Theorem)
ប្រសិនបើ gcd(a, n) = 1 នោះ៖
a^(φ(n)) ≡ 1 (mod n)

ទ្រឹស្តីបទរបស់ Euler គឺជាមូលដ្ឋាននៃ RSA។

2.6 បញ្ហាលំបាកខាងគណិតវិទ្យា
សន្តិសុខនៃគ្រីបតូក្រាហ្វ៊ីភាគច្រើនពឹងផ្អែកលើបញ្ហាគណិតវិទ្យាដែលគេជឿថា ពិបាកដោះស្រាយ (computationally infeasible)។

2.6.1 Integer Factorization Problem
ផ្តល់ចំនួន n = p×q (ដែល p, q ជាចំនួនបឋមធំ) វាពិបាករក p និង q។
ប្រើក្នុង៖ RSA

2.6.2 Discrete Logarithm Problem (DLP)
ផ្តល់ g, h, និង p (បឋម) ដែល h ≡ g^x mod p រក x ។
ប្រើក្នុង៖ Diffie-Hellman, DSA, ElGamal

2.6.3 Elliptic Curve Discrete Logarithm Problem (ECDLP)
ផ្តល់ចំណុច P និង Q = kP នៅលើ elliptic curve រក k។
ប្រើក្នុង៖ ECDH, ECDSA

2.7 លំហាត់អនុវត្ត
គណនា gcd(1071, 462) ដោយប្រើក្បួនដោះស្រាយ Euclidean។

គណនា 5⁻¹ mod 18 (ប្រសិនបើមាន)។

ផ្ទៀងផ្ទាត់ Fermat's little theorem សម្រាប់ a=2, p=11។

គណនា φ(91) ដោយដឹងថា 91=7×13។

គណនា 3^17 mod 17 (ប្រើទ្រឹស្តីបទរបស់ Fermat)។

ជំពូកទី 3: គ្រីបតូបែបបុរាណ (Classical Ciphers)
3.1 សេចក្តីផ្តើម
មុនពេលកុំព្យូទ័រ មនុស្សបានបង្កើតវិធីសាស្ត្រអ៊ិនគ្រីបជាច្រើន។ ទោះបីជាវិធីសាស្ត្រទាំងនេះខ្សោយតាមស្តង់ដារទំនើបក៏ដោយ ក៏វាជួយយើងឱ្យយល់ពីគោលការណ៍គ្រឹះនៃការអ៊ិនគ្រីប និងការវិភាគគ្រីប (cryptanalysis)។

3.2 Substitution Ciphers
Substitution cipher ជំនួសអក្សរនីមួយៗ (ឬក្រុមអក្សរ) ដោយអក្សរផ្សេងទៀត។

3.2.1 Caesar Cipher
រំកិលអក្សរនីមួយៗទៅមុខ k កន្លែង (k ជាកូនសោ)។

ឧទាហរណ៍ (k=3)៖
Plaintext: HELLO
Ciphertext: KHOOR

រូបមន្ត៖ C = (P + k) mod 26 (បើ A=0, B=1, ..., Z=25)
ឌិគ្រីប៖ P = (C - k) mod 26

ការវាយប្រហារ៖ មានតែ ២៥ កូនសោដែលអាចធ្វើបាន (k=1..25) ដូច្នេះអាច brute-force បានយ៉ាងងាយ។

3.2.2 Vigenère Cipher
ប្រើពាក្យសម្ងាត់ (keyword) ដើម្បីកំណត់ការរំកិលអក្សរនីមួយៗផ្សេងគ្នា។

ឧទាហរណ៍៖
Plaintext: ATTACKATDAWN
Keyword: LEMONLEMONLE
Ciphertext: LXFOPVEFRNHR

របៀបគណនា៖
A(0) + L(11) = 11 → L
T(19) + E(4) = 23 → X
T(19) + M(12) = 31 mod 26 = 5 → F
... (បន្ត)

ភាពខ្លាំង៖ មិនអាច brute-force បានដោយសារកូនសោវែង (រហូតដល់ប្រវែងសារ)។
ភាពខ្សោយ៖ អាចបំបែកបានដោយ Kasiski examination (រកប្រវែងកូនសោ) និង frequency analysis។

3.3 Transposition Ciphers
Transposition cipher មិនប្តូរអក្សរទេ តែរៀបចំទីតាំងអក្សរឡើងវិញ។

3.3.1 Rail Fence Cipher
សរសេរអក្សរជាជួរដេក (rails) តាមលំនាំ zig-zag រួចអានតាមជួរដេក។

ឧទាហរណ៍ (3 rails)៖
Plaintext: HELLO WORLD
លំនាំ៖
H . . . O . . . R . .
. E . L . W . D . .
. . L . . . O . . .
Ciphertext: HOR ELWD LO

3.3.2 Columnar Transposition
សរសេរ plaintext ចូលតារាងជួរឈរ រួចអានតាមជួរឈរតាមលំដាប់កូនសោ។

ឧទាហរណ៍ (keyword "GERMAN")៖
Plaintext: DEFENDTHEEASTWALL
តារាង (5 ជួរ)៖
G E R M A
D E F E N
D T H E E
A S T W A
L L Z (padding)
អានតាមលំដាប់កូនសោ (A=5, E=2, G=1, M=4, R=3)៖
ជួរ5(A): N E A Z → NEAZ
ជួរ2(E): E T S L → ETSL
ជួរ1(G): D D A L → DDAL
ជួរ4(M): E E W → EEW
ជួរ3(R): F H T → FHT
Ciphertext: NEAZETSLDDALEEWFHT

3.4 One-Time Pad (OTP)
One-time pad ត្រូវបានបង្កើតឡើងដោយ Gilbert Vernam ក្នុងឆ្នាំ ១៩១៧។ វាជា វិធីសាស្ត្រតែមួយគត់ដែលមិនអាចបំបែកបាន (perfect secrecy) ប្រសិនបើប្រើបានត្រឹមត្រូវ។

របៀបដំណើរការ៖

Plaintext មានប្រវែង n ប៊ីត (ឬអក្សរ)

កូនសោត្រូវមានប្រវែងដូចគ្នា បង្កើតដោយចៃដន្យពិត (true random)

Ciphertext = Plaintext XOR Key (សម្រាប់ប៊ីត)

ឌិគ្រីប៖ Plaintext = Ciphertext XOR Key

លក្ខខណ្ឌសុវត្ថិភាព៖

កូនសោត្រូវតែចៃដន្យពិត (មិនមែន PRNG)

កូនសោត្រូវតែវែងយ៉ាងតិចស្មើនឹងសារ

កូនសោមិនត្រូវប្រើឡើងវិញ (one-time)

កូនសោត្រូវរក្សាទុកដោយសម្ងាត់ទាំងសងខាង

ហេតុអ្វីមិនអាចបំបែក?
ប្រសិនបើអ្នកវាយប្រហារឃើញ ciphertext C គ្រប់ plaintext P ដែលអាចធ្វើបានគឺអាចធ្វើទៅបានស្មើគ្នា (ព្រោះមានកូនសោ K = C XOR P)។ គ្មានព័ត៌មានណាអំពី P ត្រូវបានលេចធ្លាយឡើយ។

បញ្ហាក្នុងការអនុវត្ត៖
ការចែកចាយកូនសោវែងៗប្រកបដោយសុវត្ថិភាពគឺពិបាក។ OTP ត្រូវបានប្រើតែក្នុងកម្មវិធីដែលមានសន្តិសុខខ្ពស់បំផុត (ឧ. ខ្សែទូរស័ព្ទក្រហមរវាងវ៉ាស៊ីនតោន និងម៉ូស្គូ អំឡុងសង្គ្រាមត្រជាក់)។

3.5 ការវិភាគប្រេកង់ (Frequency Analysis)
Frequency analysis គឺជាបច្ចេកទេសបំបែក substitution cipher ដោយសង្កេតមើលភាពញឹកញាប់នៃអក្សរក្នុង ciphertext ប្រៀបធៀបនឹងភាពញឹកញាប់ក្នុងភាសាធម្មជាតិ។

ភាពញឹកញាប់អក្សរជាភាសាអង់គ្លេស (ធ្លាក់ចុះ)៖
E (12.7%), T (9.1%), A (8.2%), O (7.5%), I (7.0%), N (6.7%), S (6.3%), H (6.1%), R (6.0%), D (4.3%), L (4.0%), C (2.8%), U (2.8%), M (2.4%), W (2.4%), F (2.2%), G (2.0%), Y (2.0%), P (1.9%), B (1.5%), V (1.0%), K (0.8%), J (0.15%), X (0.15%), Q (0.10%), Z (0.07%)

ឧទាហរណ៍ការវិភាគ៖
ប្រសិនបើអ្នកឃើញ ciphertext ដែលអក្សរ 'X' លេចឡើងញឹកញាប់ជាងគេ (12%) អ្នកអាចសន្និដ្ឋានថា 'X' ប្រហែលជា 'E' ក្នុង plaintext។ បន្ទាប់មកអ្នកអាចសន្និដ្ឋានកូនសោ (ឬផែនទីជំនួស) បន្តិចម្តងៗ។

3.6 លំហាត់អនុវត្ត
ឌិគ្រីប Caesar cipher "WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ" (k=3)។

ប្រើ Kasiski examination ដើម្បីប៉ាន់ស្មានប្រវែងកូនសោរបស់ Vigenère cipher ដែលមាន ciphertext វែង។

អ៊ិនគ្រីប "CRYPTOGRAPHY" ដោយ Rail fence cipher (3 rails)។

ពន្យល់ពីមូលហេតុដែល OTP មានសុវត្ថិភាពពេញលេញ (perfect secrecy)។

អនុវត្ត frequency analysis លើ ciphertext ខាងក្រោម (ស្វែងរកអក្សរដែលញឹកញាប់ជាងគេ)៖
"GWC UVW VWI GWC GWV QI IWVI GWC UIV WVI GWC UGG WCV QI WVI GWC UWVI"

ជំពូកទី 11: Cryptanalysis មូលដ្ឋាន
11.1 សេចក្តីផ្តើម
Cryptanalysis គឺជាវិទ្យាសាស្ត្រនៃការវិភាគ និងបំបែកប្រព័ន្ធគ្រីបតូក្រាហ្វ៊ី។ ការយល់ដឹងពី cryptanalysis គឺចាំបាច់សម្រាប់អ្នករចនាប្រព័ន្ធសុវត្ថិភាព ដើម្បីយល់ពីភាពខ្លាំង និងភាពខ្សោយនៃក្បួនដោះស្រាយដែលពួកគេប្រើប្រាស់។

11.2 ការចាត់ថ្នាក់ការវាយប្រហារ
11.2.1 តាមចំណេះដឹងរបស់អ្នកវាយប្រហារ
ប្រភេទ	ការពិពណ៌នា	កម្រិតគ្រោះថ្នាក់
Ciphertext-only	អ្នកវាយប្រហារមានតែ ciphertext	ទាបបំផុត
Known-plaintext	អ្នកវាយប្រហារមានគូ (plaintext, ciphertext) មួយចំនួន	មធ្យម
Chosen-plaintext	អ្នកវាយប្រហារអាចជ្រើសរើស plaintext និងទទួលបាន ciphertext	ខ្ពស់
Chosen-ciphertext	អ្នកវាយប្រហារអាចជ្រើសរើស ciphertext និងទទួលបាន plaintext	ខ្ពស់បំផុត
Adaptive chosen-plaintext	អ្នកវាយប្រហារអាចជ្រើសរើស plaintext បន្ទាប់ដោយផ្អែកលើលទ្ធផលមុន	ខ្ពស់បំផុត
11.2.2 តាមគោលដៅ
Total break៖ រកឃើញកូនសោសម្ងាត់

Global deduction៖ រកឃើញក្បួនដោះស្រាយសមមូល (equivalent algorithm) ដោយមិនដឹងកូនសោ

Instance deduction៖ ឌិគ្រីប ciphertext ជាក់លាក់ណាមួយ

Information deduction៖ ទទួលបានព័ត៌មានអំពី plaintext ឬ key (ឧ. parity, length)

11.3 Brute-Force Attack
11.3.1 គោលការណ៍
Brute-force attack គឺជាការព្យាយាមសាកល្បងគ្រប់កូនសោដែលអាចធ្វើបាន រហូតដល់រកឃើញកូនសោត្រឹមត្រូវ។

Key space = 2^(key size in bits)

Key Size	Key Space	ពេលវេលា (1 billion keys/sec)
56 bits (DES)	7.2×10^16	~1 ឆ្នាំ (អាចធ្វើបានក្នុងឆ្នាំ 1999)
128 bits (AES)	3.4×10^38	10^22 ឆ្នាំ (មិនអាចធ្វើបាន)
256 bits (AES)	1.2×10^77	10^68 ឆ្នាំ (មិនអាចធ្វើបាន)
11.3.2 ការពន្លឿន Brute-Force
Rainbow tables៖ តារាង hash ដែលបានគណនាទុកជាមុន សម្រាប់បំបែក password hashes

GPU acceleration៖ GPU អាចសាកល្បងកូនសោរាប់ពាន់លានក្នុងមួយវិនាទី

Distributed computing៖ កុំព្យូទ័ររាប់ពាន់ដំណើរការស្របគ្នា (ឧ. distributed.net)

11.3.3 ឧទាហរណ៍ជាក់ស្តែង
DES Challenge (1997-1999)៖ distributed.net បានបំបែក DES ក្នុងរយៈពេល 22 ម៉ោង 15 នាទី (ក្នុងឆ្នាំ 1999)

MD5 collisions (2004)៖ Wang et al. បានបង្ហាញការវាយប្រហារ collision មិនមែន brute-force

11.4 Linear Cryptanalysis
11.4.1 គោលការណ៍
Linear cryptanalysis គឺជាការវាយប្រហារ known-plaintext ដែលស្វែងរកទំនាក់ទំនងលីនេអ៊ែរ (linear approximation) រវាង plaintext, ciphertext, និង key។

ទម្រង់ទូទៅ៖

text
P[i1] ⊕ P[i2] ⊕ ... ⊕ C[j1] ⊕ C[j2] ⊕ ... = K[k1] ⊕ K[k2] ⊕ ...
ដែលមានប្រូបាប៊ីលីតេ p ≠ 1/2។

11.4.2 ការវាយប្រហារលើ DES
Linear cryptanalysis អាចបំបែក DES បានដោយប្រើ 2^43 known plaintext-ciphertext pairs (Matsui, 1993)។ នេះគឺប្រសើរជាង brute-force (2^56)។

11.5 Differential Cryptanalysis
11.5.1 គោលការណ៍
Differential cryptanalysis សិក្សាពីរបៀបដែលភាពខុសគ្នា (difference) នៃ plaintext ប៉ះពាល់ដល់ភាពខុសគ្នានៃ ciphertext។

ជំហាន៖

ជ្រើសរើស plaintext difference ΔP = P ⊕ P'

សង្កេត ciphertext difference ΔC = C ⊕ C'

ស្វែងរក differential characteristic ដែលមានប្រូបាប៊ីលីតេខ្ពស់

ប្រើព័ត៌មាននេះដើម្បីទាញយក key bits

11.5.2 ការវាយប្រហារលើ DES
Differential cryptanalysis ត្រូវបានរកឃើញដោយ Eli Biham និង Adi Shamir ក្នុងទសវត្សរ៍ឆ្នាំ 1990។ វាអាចបំបែក DES បានដោយប្រើ 2^47 chosen plaintexts។

11.6 Side-Channel Attacks
Side-channel attacks មិនវាយប្រហារលើគណិតវិទ្យានៃក្បួនដោះស្រាយទេ ប៉ុន្តែវាយប្រហារលើ ការអនុវត្ត (implementation)។

11.6.1 Timing Attack
គោលការណ៍៖ ពេលវេលាដែលប្រតិបត្តិការគ្រីបតូត្រូវការអាចបង្ហាញព័ត៌មានអំពីកូនសោ។

ឧទាហរណ៍ (RSA timing attack by Kocher, 1996)៖

RSA decryption (modular exponentiation) ប្រើ square-and-multiply algorithm

ប្រសិនបើ key bit = 1, algorithm ធ្វើ multiply (យឺតជាង)

ប្រសិនបើ key bit = 0, algorithm មិនធ្វើ multiply (លឿនជាង)

ដោយវាស់ពេលវេលា អ្នកវាយប្រហារអាចទាញយក key bits

ការការពារ៖

Constant-time implementation៖ ប្រតិបត្តិការទាំងអស់ត្រូវចំណាយពេលដូចគ្នា

Blinding៖ បន្ថែមភាពចៃដន្យមុនពេលគណនា

ប្រើ hardware acceleration (AES-NI, constant-time crypto libraries)

11.6.2 Power Analysis
Simple Power Analysis (SPA)៖ សង្កេតដោយផ្ទាល់នូវការប្រើប្រាស់ថាមពលអំឡុងពេលប្រតិបត្តិការ។

Differential Power Analysis (DPA)៖ ប្រើវិធីសាស្ត្រស្ថិតិដើម្បីវិភាគការប្រើប្រាស់ថាមពលពីការវាស់វែងរាប់ពាន់ដង។

ការការពារ៖

Masking៖ បំបែកការគណនាទៅជា shares ចៃដន្យ

Shuffling៖ ប្តូរលំដាប់ប្រតិបត្តិការ

ប្រើ hardware ដែលធន់នឹង DPA (smart cards ទំនើប)

11.6.3 Cache-Timing Attack
គោលការណ៍៖ ប្រើភាពខុសគ្នានៃពេលវេលាចូលប្រើ cache (cache hit vs cache miss) ដើម្បីទាញយកព័ត៌មាន។

Prime+Probe attack៖

អ្នកវាយប្រហារ "បំពេញ" cache ជាមួយទិន្នន័យរបស់គាត់ (prime)

រង់ចាំ victim អនុវត្តប្រតិបត្តិការគ្រីបតូ

វាស់ពេលវេលាចូលប្រើ cache ម្តងទៀត (probe) ដើម្បីដឹងថា victim បានចូលប្រើ cache lines ណាខ្លះ

ការការពារ៖

Constant-time implementation (bit-slicing, vectorized AES)

ប្រើ hardware AES (AES-NI) ដែលមិនមាន table lookups

ប្រើ cache-flushing មុនពេលប្រតិបត្តិការ

11.6.4 Electromagnetic (EM) Attack
គោលការណ៍៖ វាស់វិទ្យុសកម្មអេឡិចត្រូម៉ាញេទិកដែលចេញពីឧបករណ៍អំឡុងពេលប្រតិបត្តិការគ្រីបតូ។

EM attacks អាចធ្វើពីចម្ងាយ (ឧ. ប្រើ antenna នៅជិតឧបករណ៍)។

11.7 Fault Injection Attack
គោលការណ៍៖ បង្កើតកំហុស (fault) ក្នុងឧបករណ៍កំឡុងពេលប្រតិបត្តិការគ្រីបតូ ហើយវិភាគលទ្ធផលខុសដើម្បីទាញយកកូនសោ។

វិធីសាស្ត្របង្កើតកំហុស៖

Voltage glitching៖ បន្ថយវ៉ុលភ្លាមៗ

Clock glitching៖ បង្កើនល្បឿននាឡិកាភ្លាមៗ

Laser injection៖ បាញ់ឡាស៊ែរទៅលើ chip

Electromagnetic fault injection៖ ប្រើវាលអេឡិចត្រូម៉ាញេទិកខ្លាំង

ការការពារ៖

Redundant computation (គណនាពីរដង ប្រៀបធៀបលទ្ធផល)

Error detection codes

ប្រើ HSM ដែលមាន sensors រកឃើញ fault injection

11.8 ឧទាហរណ៍ជាក់ស្តែង
11.8.1 Heartbleed (2014)
Heartbleed គឺជា vulnerability ក្នុង OpenSSL (CVE-2014-0160) ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារអាន memory របស់ server ដោយផ្ទាល់ រួមទាំង private keys ។

ផលប៉ះពាល់៖ ~17% នៃ HTTPS servers រងផលប៉ះពាល់។

11.8.2 Meltdown & Spectre (2018)
Meltdown និង Spectre គឺជា vulnerabilities កម្រិត CPU ដែលអនុញ្ញាតឱ្យដំណើរការមួយអាន memory របស់ដំណើរការផ្សេងទៀតតាមរយៈ speculative execution និង side-channel (cache timing)។

ផលប៉ះពាល់៖ ប៉ះពាល់ដល់ CPU ស្ទើរតែទាំងអស់ដែលផលិតក្នុងទសវត្សរ៍មុន។

11.8.3 Rowhammer
Rowhammer គឺជាការវាយប្រហារលើ DRAM ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារផ្លាស់ប្តូរ bits ក្នុង memory ដោយការចូលប្រើជួរដេក (row) ម្តងហើយម្តងទៀត (hammering)។

11.9 លំហាត់អនុវត្ត
គណនា key space នៃ AES-128 ប៉ុន្មាន? ប្រសិនបើអ្នកអាចសាកល្បង 10^12 keys ក្នុងមួយវិនាទី តើត្រូវការពេលប៉ុន្មានដើម្បីសាកល្បងគ្រប់កូនសោ?

ស្រាវជ្រាវអំពីការវាយប្រហារ "Lucky13" លើ TLS។ តើវាវាយប្រហារលើអ្វី? តើដំណោះស្រាយជាអ្វី?

ពិសោធន៍ជាមួយ constant-time comparison៖ សរសេរអនុគមន៍ verify_mac(mac1, mac2) ដែលមាន constant-time (មិនថា mac ត្រឹមត្រូវឬអត់ ចំណាយពេលដូចគ្នា)។

ប្រើ Python ដើម្បីវាស់ពេលវេលានៃ RSA decryption សម្រាប់ private key bits ផ្សេងៗគ្នា។ តើអ្នកអាចសង្កេតឃើញ timing difference ទេ?

ស្រាវជ្រាវអំពីការវាយប្រហារ "Spectre"។ តើវាដំណើរការដោយរបៀបណា? តើមានការការពារអ្វីខ្លះ?

ជំពូកទី 12: ការវាយប្រហារលើការអនុវត្ត (Implementation Attacks)
12.1 សេចក្តីផ្តើម
ក្បួនដោះស្រាយគ្រីបតូដែលរឹងមាំខាងគណិតវិទ្យាអាចក្លាយជាខ្សោយទាំងស្រុងប្រសិនបើការអនុវត្ត (implementation) មានកំហុស។ ជំពូកនេះនឹងពិនិត្យមើលការវាយប្រហារទូទៅលើការអនុវត្តគ្រីបតូ និងវិធីការពារ។

12.2 Padding Oracle Attack
12.2.1 គោលការណ៍
Padding oracle attack វាយប្រហារលើ CBC mode encryption នៅពេលដែលប្រព័ន្ធបង្ហាញថាតើ padding ត្រឹមត្រូវឬអត់ (តាមរយៈសារកំហុស ឬពេលវេលាឆ្លើយតប)។

របៀប៖ អ្នកវាយប្រហារកែប្រែ ciphertext ហើយសង្កេតមើលថាតើ padding validation ជោគជ័យឬបរាជ័យ។ តាមរយៈការធ្វើបែបនេះម្តងហើយម្តងទៀត គាត់អាចឌិគ្រីប ciphertext ទាំងមូលដោយមិនចាំបាច់ដឹងកូនសោ។

12.2.2 ឧទាហរណ៍ក្នុងប្រវត្តិសាស្ត្រ
POODLE (2014)៖ Padding Oracle On Downgraded Legacy Encryption វាយប្រហារលើ SSL 3.0

Lucky13 (2013)៖ វាយប្រហារលើ TLS ដោយប្រើ timing side-channel នៃ padding

LuckyMicro (2015)៖ វាយប្រហារលើ DTLS សម្រាប់ IoT devices

12.2.3 ការការពារ
ប្រើ AEAD modes (GCM, CCM, ChaCha20-Poly1305) ជំនួស CBC

ប្រើ constant-time padding validation៖ មិនត្រូវត្រឡប់ error មុនពេលផ្ទៀងផ្ទាត់ MAC

អនុវត្ត "Encrypt-then-MAC"៖ ផ្ទៀងផ្ទាត់ MAC មុនពេលឌិគ្រីប

12.3 Timing Attack
12.3.1 គោលការណ៍
Timing attack វាស់ពេលវេលាដែលប្រតិបត្តិការគ្រីបតូត្រូវការ ហើយប្រើព័ត៌មាននេះដើម្បីទាញយកកូនសោ។

12.3.2 ឧទាហរណ៍៖ RSA Timing Attack
RSA decryption (m = c^d mod n) ជាធម្មតាប្រើ square-and-multiply algorithm៖

text
function modular_exponentiation(c, d, n):
    result = 1
    for each bit in d from MSB to LSB:
        result = result^2 mod n
        if bit == 1:
            result = result * c mod n
    return result
ប្រសិនបើ bit = 1, algorithm ធ្វើ multiply (យឺតជាង)។ ដោយវាស់ពេលវេលា អ្នកវាយប្រហារអាចទាយ bits នៃ d ។

12.3.3 ឧទាហរណ៍ Python: Constant-Time Comparison
python
import secrets

def constant_time_compare(a, b):
    """Constant-time comparison to prevent timing attacks"""
    if len(a) != len(b):
        return False
    result = 0
    for x, y in zip(a, b):
        result |= x ^ y
    return result == 0

# Usage
mac1 = secrets.token_bytes(32)
mac2 = secrets.token_bytes(32)
if constant_time_compare(mac1, mac2):
    print("MACs match")
else:
    print("MACs don't match")
12.3.4 ការការពារ
Constant-time implementation៖ ប្រតិបត្តិការទាំងអស់ចំណាយពេលដូចគ្នា ដោយមិនគិតពីតម្លៃបញ្ចូល

Blinding៖ បន្ថែមភាពចៃដន្យមុនពេលគណនា

python
# RSA blinding example
r = random.randrange(1, n)
c_blinded = (c * pow(r, e, n)) % n
m_blinded = pow(c_blinded, d, n)
m = (m_blinded * modinv(r, n)) % n
ប្រើ hardware acceleration (AES-NI, constant-time crypto libraries)

12.4 Cache-Timing Attack
12.4.1 គោលការណ៍
Cache-timing attack វាយប្រហារលើការអនុវត្តដែលប្រើ table lookups (ដូចជា S-boxes) ដោយសង្កេតមើលថាតើការចូលប្រើ cache ណាមួយបណ្តាលឱ្យ cache hit ឬ cache miss។

12.4.2 Prime+Probe Attack
ជំហាន៖

Prime៖ អ្នកវាយប្រហារបំពេញ cache lines ជាមួយទិន្នន័យរបស់គាត់

រង់ចាំ៖ victim អនុវត្តការអ៊ិនគ្រីប (ប្រើ S-box lookups)

Probe៖ អ្នកវាយប្រហារវាស់ពេលវេលាចូលប្រើ cache lines ម្តងទៀត

ប្រសិនបើ cache line ត្រូវបាន victim ប្រើ វានឹងមាន cache miss (យឺត)

ប្រសិនបើមិនត្រូវបានប្រើ វានឹងមាន cache hit (លឿន)

12.4.3 ឧទាហរណ៍លើ AES
AES T-table implementation (software) ប្រើ table lookups សម្រាប់ SubBytes, MixColumns ។ Cache-timing attack អាចទាញយកកូនសោ AES បាន។

12.4.4 ការការពារ
ប្រើ hardware AES (AES-NI) ដែលមិនមាន table lookups

Bit-slicing implementation៖ ដំណើរការ multiple blocks ស្របគ្នា ដោយមិនប្រើ table lookups

Vectorized AES (AVX-512) សម្រាប់ CPUs ទំនើប

Cache flushing៖ flush cache មុនពេលប្រតិបត្តិការគ្រីបតូ (ប៉ុន្តែអាចប៉ះពាល់ដល់ performance)

12.5 ការវាយប្រហារលើ Random Number Generators
12.5.1 Debian OpenSSL Vulnerability (2008)
បញ្ហា៖ អ្នកអភិវឌ្ឍ Debian បានដកបន្ទាត់កូដដែលប្រមូលភាពចៃដន្យពីដំណើរការនៃប្រព័ន្ធ។ PRNG ប្រើតែ process ID ជា seed ប៉ុណ្ណោះ។

ផលប៉ះពាល់៖ កូនសោ SSH, SSL, OpenVPN ដែលបង្កើតនៅលើ Debian និងដេរីវេ (Ubuntu, ។ល។) ចន្លោះខែកញ្ញា 2006 ដល់ឧសភា 2008 មានតែ 32,768 តម្លៃដែលអាចធ្វើបាន។

មេរៀន៖

កុំកែប្រែកូដគ្រីបតូ លុះត្រាតែអ្នកជាអ្នកជំនាញ

ប្រើ CSPRNG របស់ OS (/dev/urandom, CryptGenRandom)

12.5.2 Nonce Reuse Attack
បញ្ហា៖ AES-GCM, ChaCha20-Poly1305, និង stream ciphers ទាមទារឱ្យ nonce/IV មិនត្រូវប្រើឡើងវិញដាច់ខាត។

ផលប៉ះពាល់៖ ប្រសិនបើ nonce ត្រូវបានប្រើឡើងវិញ៖

សម្រាប់ stream cipher៖ ciphertext = plaintext ⊕ keystream; ប្រសិនបើ nonce ដូចគ្នា keystream ដូចគ្នា → ciphertext1 ⊕ ciphertext2 = plaintext1 ⊕ plaintext2

សម្រាប់ GCM៖ authentication tag ត្រូវបានសម្របសម្រួល អាច forge បាន

ការការពារ៖

ប្រើ nonce វែងគ្រប់គ្រាន់ (96 bits) និងចៃដន្យ

ប្រើ counter-based nonce (កើនឡើងរាល់ដង) ដោយធានាថាមិនដែល reset

12.6 ការវាយប្រហារលើ Protocol
12.6.1 Man-in-the-Middle (MITM) on Diffie-Hellman
Diffie-Hellman ដោយខ្លួនវាមិនមានការបញ្ជាក់អត្តសញ្ញាណ (authentication) ទេ។

MITM attack៖

Alice ផ្ញើ g^a ទៅ Bob

Mallory ស្ទាក់ ហើយផ្ញើ g^m ទៅ Bob (ធ្វើពុតជា Alice)

Bob ផ្ញើ g^b ទៅ Alice

Mallory ស្ទាក់ ហើយផ្ញើ g^m ទៅ Alice (ធ្វើពុតជា Bob)

Alice និង Bob គិតថាពួកគេកំពុងទំនាក់ទំនងគ្នា ប៉ុន្តែតាមពិតទំនាក់ទំនងឆ្លងកាត់ Mallory

ការការពារ៖ ប្រើ DH រួមជាមួយ digital signatures (ឧ. in TLS, signatures on DH parameters)

12.6.2 SSL/TLS Attacks
Attack	Year	Description
SSLstrip	2009	Downgrade HTTPS to HTTP
BEAST	2011	Chosen-plaintext attack on TLS 1.0 CBC
CRIME	2012	Compression ratio info leak
BREACH	2013	HTTP compression attack
POODLE	2014	Padding oracle on SSL 3.0
Logjam	2015	Downgrade to export-grade DH
FREAK	2015	Downgrade to export-grade RSA
DROWN	2016	Cross-protocol attack on SSLv2
12.7 ការអនុវត្តសុវត្ថិភាពសម្រាប់អ្នកអភិវឌ្ឍន៍
12.7.1 DOs and DON'Ts
DO	DON'T
ប្រើ high-level libraries (libsodium, cryptography)	កុំបង្កើត cipher ដោយខ្លួនឯង
ប្រើ AEAD modes (AES-GCM, ChaCha20-Poly1305)	កុំប្រើ ECB mode
ប្រើ constant-time comparison for MACs	កុំប្រើ == សម្រាប់ប្រៀបធៀប MACs
ប្រើ CSPRNG (secrets.token_bytes, os.urandom)	កុំប្រើ random module សម្រាប់គ្រីបតូ
ប្រើ Argon2/bcrypt/PBKDF2 for passwords	កុំរក្សាទុក passwords ជា plaintext
ប្រើ TLS 1.3 ឬ 1.2 with strong ciphers	កុំប្រើ SSLv3, TLS 1.0, TLS 1.1
12.7.2 ឧទាហរណ៍៖ Constant-Time Implementation សម្រាប់ MAC Verification
python
import hmac
import hashlib

def verify_mac_constant_time(key, message, received_mac):
    """Constant-time MAC verification"""
    computed_mac = hmac.new(key, message, hashlib.sha256).digest()
    # constant-time comparison
    return hmac.compare_digest(computed_mac, received_mac)
12.7.3 ឧទាហរណ៍៖ Secure String Comparison
python
def secure_compare(a, b):
    """Constant-time string comparison"""
    if len(a) != len(b):
        return False
    result = 0
    for x, y in zip(a, b):
        result |= ord(x) ^ ord(y)
    return result == 0
12.8 លំហាត់អនុវត្ត
សរសេរ Python function ដែលអ៊ិនគ្រីបដោយ AES-CBC ហើយបន្ទាប់មកសរសេរ padding oracle attack ដើម្បីឌិគ្រីប ciphertext។

វាស់ពេលវេលានៃការប្រៀបធៀប string ដោយប្រើ == vs constant-time comparison ។ តើអ្នកអាចសង្កេតឃើញភាពខុសគ្នាទេ?

ពិសោធន៍ជាមួយ nonce reuse៖ អ៊ិនគ្រីបសារពីរផ្សេងគ្នាដោយ AES-GCM ដោយប្រើ nonce ដូចគ្នា។ តើមានអ្វីកើតឡើង?

ប្រើ OpenSSL ដើម្បីពិនិត្យមើល cipher suites ដែលគាំទ្រដោយ server៖ openssl s_client -connect example.com:443 -cipher 'ALL'

ស្រាវជ្រាវអំពីការវាយប្រហារ "Logjam"។ តើវាដំណើរការដោយរបៀបណា? តើត្រូវការពារយ៉ាងដូចម្តេច?

ជំពូកទី 13: Protocol Attacks
13.1 សេចក្តីផ្តើម
Protocol attacks វាយប្រហារលើវិធីដែលក្បួនដោះស្រាយគ្រីបតូត្រូវបានបញ្ចូលគ្នាជាប្រព័ន្ធទំនាក់ទំនង។ សូម្បីតែក្បួនដោះស្រាយនីមួយៗមានសុវត្ថិភាពក៏ដោយ ក៏ការរចនា protocol មិនត្រឹមត្រូវអាចនាំឱ្យមានភាពខ្សោយ។

13.2 Man-in-the-Middle (MITM) Attack
13.2.1 គោលការណ៍
MITM attack កើតឡើងនៅពេលដែលអ្នកវាយប្រហារដាក់ខ្លួនរវាងភាគីទំនាក់ទំនងពីរ ហើយអាចស្ទាក់ចាប់ កែប្រែ ឬបញ្ចូលសារ។

13.2.2 SSLstrip (Moxie Marlinspike, 2009)
របៀប៖

អ្នកវាយប្រហារដំណើរការ proxy រវាង victim និង internet

នៅពេល victim ចូលទៅកាន់ http://example.com, proxy បង្កើត HTTPS connection ទៅកាន់ example.com

proxy បញ្ជូន HTTP ទៅ victim (គ្មាន encryption)

victim មើលមិនឃើញ padlock icon

ការការពារ៖

HSTS (HTTP Strict Transport Security)៖ server ប្រាប់ browser ថាត្រូវតែប្រើ HTTPS សម្រាប់ដែននេះ

HSTS Preload List៖ browsers បានបញ្ចូលដែនសំខាន់ៗក្នុង preload list

text
# HSTS header
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
13.3 TLS Protocol Attacks
13.3.1 BEAST (Browser Exploit Against SSL/TLS, 2011)
បញ្ហា៖ TLS 1.0 ប្រើ CBC mode ជាមួយ IV ដែលអាចទស្សន៍ទាយបាន (predictable IV)។

ការវាយប្រហារ៖ អ្នកវាយប្រហារអាចធ្វើ chosen-plaintext attack ដើម្បីឌិគ្រីប cookies ។

ការការពារ៖

TLS 1.1+ ប្រើ explicit IV (មិនអាចទស្សន៍ទាយបាន)

នៅលើ TLS 1.0, browsers អនុវត្ត 1/n-1 splitting

13.3.2 CRIME (Compression Ratio Info-leak Made Easy, 2012)
បញ្ហា៖ TLS compression (បង្ហាប់មុនពេលអ៊ិនគ្រីប) លេចធ្លាយព័ត៌មានតាមរយៈទំហំទិន្នន័យ។

ការវាយប្រហារ៖ អ្នកវាយប្រហារអាចទាញយក cookies ដោយបញ្ចូលអត្ថបទផ្សេងៗ និងសង្កេតទំហំ compressed data។

ការការពារ៖

TLS compression ត្រូវបានហាមឃាត់ក្នុង TLS 1.3

Browsers បានបិទ TLS compression

13.3.3 POODLE (Padding Oracle On Downgraded Legacy Encryption, 2014)
បញ្ហា៖ SSL 3.0 មាន padding oracle vulnerability។

ការវាយប្រហារ៖ អ្នកវាយប្រហារអាច downgrade connection ទៅ SSL 3.0 ហើយធ្វើ padding oracle attack ដើម្បីឌិគ្រីប cookies។

ការការពារ៖

បិទ SSL 3.0 ទាំងស្រុង

ប្រើ TLS_FALLBACK_SCSV (Signaling Cipher Suite Value) ដើម្បីការពារ downgrade

13.3.4 Logjam (2015)
បញ្ហា៖ Diffie-Hellman export-grade ciphers (512-bit) នៅតែត្រូវបានគាំទ្រដោយ servers ជាច្រើន។

ការវាយប្រហារ៖ អ្នកវាយប្រហារអាច downgrade connection ទៅ export-grade DH (512-bit) ហើយបំបែក DH key exchange (precomputation attack)។

ការការពារ៖

បិទ export-grade ciphers

ប្រើ DH parameters 2048-bit ឬច្រើនជាង

ប្រើ ECDH (Curve25519) ជំនួស DH

13.3.5 FREAK (Factoring Attack on RSA-EXPORT Keys, 2015)
បញ្ហា៖ Export-grade RSA (512-bit) នៅតែត្រូវបានគាំទ្រ។

ការវាយប្រហារ៖ អ្នកវាយប្រហារអាច downgrade connection ទៅ export-grade RSA ហើយ factor RSA key ដើម្បីទាញយក private key។

ការការពារ៖

បិទ export-grade ciphers

ប្រើ RSA 2048-bit ឬច្រើនជាង

13.3.6 DROWN (Decrypting RSA with Obsolete and Weakened eNcryption, 2016)
បញ្ហា៖ SSLv2 មាន vulnerability ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារឌិគ្រីប RSA key exchange។

ការវាយប្រហារ៖ ប្រសិនបើ server មាន private key ដូចគ្នាប្រើសម្រាប់ SSLv2 និង TLS, អ្នកវាយប្រហារអាចឌិគ្រីប TLS connections តាមរយៈ SSLv2។

ការការពារ៖

បិទ SSLv2 ទាំងស្រុង

ប្រើ private keys ផ្សេងគ្នាសម្រាប់ protocols ផ្សេងគ្នា

13.4 WPA2 KRACK Attack (2017)
13.4.1 គោលការណ៍
KRACK (Key Reinstallation Attack) វាយប្រហារលើ WPA2 protocol ដោយប្រើ nonce reuse vulnerability ក្នុង 4-way handshake។

របៀប៖

អ្នកវាយប្រហារស្ទាក់ និងរារាំង message 3 នៃ 4-way handshake

នៅពេល client ផ្ញើ message 3 ម្តងទៀត (retransmission) អ្នកវាយប្រហារបង្ខំឱ្យ client ប្រើ nonce ដដែលឡើងវិញ

Nonce reuse នាំឱ្យអាចឌិគ្រីប packets និងចាក់បញ្ចូល packets ក្លែងក្លាយ

ផលប៉ះពាល់៖ ប៉ះពាល់ដល់ WPA2 ស្ទើរតែទាំងអស់ (រួមទាំង Android, Linux, Windows)

ការការពារ៖

ប៉ាក់ (patch) client devices

WPA3 ប្រើ SAE (Simultaneous Authentication of Equals) ជំនួស 4-way handshake

13.5 Replay Attack
13.5.1 គោលការណ៍
Replay attack កើតឡើងនៅពេលដែលអ្នកវាយប្រហារកត់ត្រា (record) សារដែលមានសុពលភាព ហើយផ្ញើវាម្តងទៀតនៅពេលក្រោយ។

ឧទាហរណ៍៖

ការផ្ទេរប្រាក់ម្តងហើយម្តងទៀត

ការចូលប្រើដោយគ្មានការអនុញ្ញាត

13.5.2 ការការពារ
Timestamps៖ បដិសេធសារដែលចាស់ពេក

Nonces៖ តម្រូវឱ្យមានតម្លៃតែមួយដងក្នុងសារនីមួយៗ

Sequence numbers៖ តាមដានលំដាប់ បដិសេធសារដែលមានលេខដដែល

Session tokens៖ ប្រើ tokens ដែលផុតកំណត់បន្ទាប់ពីប្រើម្តង

13.6 Downgrade Attack
13.6.1 គោលការណ៍
Downgrade attack បង្ខំឱ្យ client និង server ប្រើ protocol ឬ cipher ចាស់ដែលខ្សោយជាង។

ឧទាហរណ៍៖

TLS downgrade to SSL 3.0 (POODLE)

TLS downgrade to export-grade ciphers (Logjam, FREAK)

13.6.2 ការការពារ
បិទ protocols/ciphers ចាស់ នៅលើ server

ប្រើ TLS_FALLBACK_SCSV៖ cipher suite ពិសេសដែលបញ្ជាក់ថានេះគឺជា fallback connection

ប្រើ TLS 1.3៖ គ្មានការគាំទ្រសម្រាប់ ciphers ចាស់

13.7 ការវាយប្រហារលើ Cryptographic APIs
13.7.1 Padding Oracle Attack on ASP.NET (2010)
Microsoft ASP.NET មាន padding oracle vulnerability ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារឌិគ្រីប cookies និង view state។

13.7.2 XML Encryption Attack (2011)
XML Encryption (ដែលប្រើក្នុង SAML, WS-Security) មាន padding oracle vulnerability ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារឌិគ្រីបឯកសារ XML ។

13.8 លំហាត់អនុវត្ត
ប្រើ Wireshark ដើម្បីចាប់ TLS handshake ហើយកំណត់អត្តសញ្ញាណ cipher suite ដែលប្រើ។

ពិនិត្យមើល HSTS preload list៖ https://hstspreload.org/ ។ តើដែនរបស់អ្នកមានក្នុងបញ្ជីទេ?

ស្រាវជ្រាវអំពីការវាយប្រហារ "KRACK"។ តើវាប៉ះពាល់ដល់ WPA2 យ៉ាងដូចម្តេច? តើ WPA3 កែលម្អអ្វីខ្លះ?

ដំឡើង web server (Apache/nginx) ហើយកំណត់រចនាសម្ព័ន្ធឱ្យប្រើ TLS 1.3 តែប៉ុណ្ណោះ។

ប្រើ sslscan ឬ testssl.sh ដើម្បីស្កេន server សម្រាប់ vulnerabilities (POODLE, Logjam, FREAK)។

ជំពូកទី 14: Post-Quantum Cryptography (PQC)
14.1 សេចក្តីផ្តើម
Post-Quantum Cryptography (PQC) គឺជាវិស័យនៃគ្រីបតូក្រាហ្វ៊ីដែលស្វែងរកក្បួនដោះស្រាយដែលធន់នឹងការវាយប្រហារពីកុំព្យូទ័រកង់ទិច (quantum computers)។

14.2 គំរាមកំហែងពី Quantum Computer
14.2.1 Shor's Algorithm (1994)
Peter Shor បានបង្ហាញថាកុំព្យូទ័រកង់ទិចអាចដោះស្រាយបញ្ហា integer factorization និង discrete logarithm បានយ៉ាងមានប្រសិទ្ធភាព។

ផលប៉ះពាល់៖

RSA (ផ្អែកលើ factorization) → ត្រូវបានបំបែក

ECC (ផ្អែកលើ ECDLP) → ត្រូវបានបំបែក

Diffie-Hellman → ត្រូវបានបំបែក

DSA, ECDSA → ត្រូវបានបំបែក

14.2.2 Grover's Algorithm (1996)
Lov Grover បានបង្ហាញថាកុំព្យូទ័រកង់ទិចអាចបង្កើនល្បឿន brute-force search ពី 2^n ទៅ 2^(n/2)។

ផលប៉ះពាល់៖

AES-128 → សុវត្ថិភាពថយចុះមក 64 bits (ត្រូវការ AES-256)

SHA-256 → collision resistance ថយចុះពី 2^128 ទៅ 2^64

14.2.3 តារាងផលប៉ះពាល់
Algorithm	Quantum Attack	Mitigation
RSA	Shor's (broken)	PQC (lattice-based)
ECC	Shor's (broken)	PQC
AES-128	Grover's (64-bit security)	AES-256
AES-256	Grover's (128-bit security)	Still secure
SHA-256	Grover's (collision 2^64)	SHA-384/SHA-512
14.3 ក្រុមគ្រីបតូធន់នឹងកង់ទិច
14.3.1 Lattice-Based Cryptography
គោលការណ៍៖ ផ្អែកលើបញ្ហា Learning With Errors (LWE) និង Shortest Vector Problem (SVP) ក្នុង lattices។

ក្បួនដោះស្រាយសំខាន់ៗ៖

Kyber (KEM – Key Encapsulation Mechanism) – NIST PQC finalist

Dilithium (Digital Signature) – NIST PQC finalist

FrodoKEM – LWE-based, conservative security

គុណសម្បត្តិ៖

Key sizes តូច (1-3 KB)

ល្បឿនលឿន

មានការស្រាវជ្រាវច្រើន

14.3.2 Code-Based Cryptography
គោលការណ៍៖ ផ្អែកលើបញ្ហា decoding random linear codes (McEliece cryptosystem, 1978)។

ក្បួនដោះស្រាយសំខាន់ៗ៖

Classic McEliece – NIST PQC finalist

BIKE – NIST PQC alternate

HQC – NIST PQC alternate

គុណសម្បត្តិ៖

សុវត្ថិភាពខ្ពស់ (មិនទាន់ត្រូវបានបំបែកអស់រយៈពេល 40+ ឆ្នាំ)

គុណវិបត្តិ៖

Key sizes ធំណាស់ (Classic McEliece public key ~1 MB)

14.3.3 Multivariate Cryptography
គោលការណ៍៖ ផ្អែកលើការដោះស្រាយប្រព័ន្ធសមីការពហុវចនៈ (multivariate quadratic equations)។

ក្បួនដោះស្រាយសំខាន់ៗ៖

Rainbow – NIST PQC finalist (signature)

GeMSS – NIST PQC alternate

14.3.4 Hash-Based Cryptography
គោលការណ៍៖ ផ្អែកលើ security នៃ hash functions (SHA-2, SHA-3)។

ក្បួនដោះស្រាយសំខាន់ៗ៖

SPHINCS+ – NIST PQC finalist (signature) – stateless

XMSS (RFC 8391) – stateful, standardized by IETF

LMS (RFC 8554) – stateful, standardized by IETF

គុណសម្បត្តិ៖

សុវត្ថិភាពខ្ពស់ (ផ្អែកលើ hash functions ដែលបានសាកល្បង)

គុណវិបត្តិ៖

Signatures ធំ (SPHINCS+ ~40 KB)

Stateful signatures ត្រូវការរក្សាទុក state

14.3.5 Isogeny-Based Cryptography
គោលការណ៍៖ ផ្អែកលើ isogenies រវាង elliptic curves (Supersingular Isogeny Diffie-Hellman – SIDH)។

ក្បួនដោះស្រាយ៖

SIKE – NIST PQC alternate

គុណវិបត្តិ៖

Key sizes តូច (~300 bytes)

ល្បឿនយឺត

ការព្រមាន៖ SIKE ត្រូវបានបំបែកនៅឆ្នាំ 2022 (ការវាយប្រហារដោយគណិតវិទ្យា)

14.4 NIST PQC Competition
14.4.1 ប្រវត្តិ
NIST (National Institute of Standards and Technology) បានចាប់ផ្តើមការប្រកួត PQC ក្នុងឆ្នាំ 2016 ដើម្បីជ្រើសរើសស្តង់ដារសម្រាប់ PQC។

14.4.2 លទ្ធផលជុំទី 3 (2022)
អ្នកឈ្នះ (Selected for Standardization)៖

CRYSTALS-Kyber – KEM (Key Encapsulation Mechanism)

CRYSTALS-Dilithium – Digital Signature

FALCON – Digital Signature

SPHINCS+ – Digital Signature (hash-based)

Alternates (ជម្រើសបន្ថែម)៖

BIKE, HQC, Classic McEliece – KEMs

Rainbow – Signature (ត្រូវបានបំបែកក្រោយមក)

14.4.3 កាលវិភាគ
ឆ្នាំ	ព្រឹត្តិការណ៍
2024	NIST បោះពុម្ព draft standards សម្រាប់ Kyber, Dilithium, FALCON, SPHINCS+
2025-2026	ស្តង់ដារផ្លូវការ (FIPS)
2030+	ការផ្លាស់ប្តូរទ្រង់ទ្រាយធំនៅក្នុងប្រព័ន្ធ
14.5 Hybrid Cryptography
14.5.1 គោលការណ៍
Hybrid cryptography រួមបញ្ចូលទាំងក្បួនដោះស្រាយបុរាណ (classical) និង PQC ដើម្បីធានាសុវត្ថិភាពក្នុងពេលផ្លាស់ប្តូរ (transition period)។

ឧទាហរណ៍៖ TLS hybrid key exchange

text
shared_secret = ECDH(Curve25519) || Kyber_KEM()
14.5.2 ការអនុវត្ត
Cloudflare បានប្រើ hybrid (X25519 + Kyber) ក្នុង TLS ចាប់ពីឆ្នាំ 2022

Google បានប្រើ hybrid (X25519 + Kyber) ក្នុង Chrome ចាប់ពីឆ្នាំ 2023

14.6 ឧទាហរណ៍កូដ (liboqs)
liboqs (Open Quantum Safe) គឺជាបណ្ណាល័យ C សម្រាប់ PQC algorithms។

c
#include <oqs/oqs.h>
#include <stdio.h>
#include <string.h>

int main() {
    OQS_KEM *kem = OQS_KEM_new(OQS_KEM_alg_kyber_768);
    if (kem == NULL) {
        printf("Kyber not supported\n");
        return 1;
    }

    uint8_t public_key[OQS_KEM_kyber_768_length_public_key];
    uint8_t secret_key[OQS_KEM_kyber_768_length_secret_key];
    uint8_t ciphertext[OQS_KEM_kyber_768_length_ciphertext];
    uint8_t shared_secret[OQS_KEM_kyber_768_length_shared_secret];
    uint8_t shared_secret_dec[OQS_KEM_kyber_768_length_shared_secret];

    // Key generation
    OQS_KEM_keypair(kem, public_key, secret_key);

    // Encapsulation (sender)
    OQS_KEM_encaps(kem, ciphertext, shared_secret, public_key);

    // Decapsulation (receiver)
    OQS_KEM_decaps(kem, shared_secret_dec, ciphertext, secret_key);

    if (memcmp(shared_secret, shared_secret_dec, kem->length_shared_secret) == 0) {
        printf("Shared secrets match!\n");
    }

    OQS_KEM_free(kem);
    return 0;
}
14.7 លំហាត់អនុវត្ត
ស្រាវជ្រាវអំពី Shor's algorithm។ តើវាដំណើរការដោយរបៀបណា? តើត្រូវការ qubits ប៉ុន្មានដើម្បីបំបែក RSA-2048?

ប្រៀបធៀបទំហំ key និង signature រវាង RSA-2048, ECDSA (secp256r1), និង Kyber-768, Dilithium-3។

ដំឡើង liboqs ហើយសាកល្បង Kyber KEM។

ស្រាវជ្រាវអំពី "Harvest Now, Decrypt Later" attack។ ហេតុអ្វីបានជាវាជាការគំរាមកំហែង?

ពន្យល់ពីភាពខុសគ្នារវាង stateful hash-based signatures (XMSS, LMS) និង stateless (SPHINCS+)។

ជំពូកទី 15: Secure Coding Practices for Cryptography
15.1 សេចក្តីផ្តើម
"Don't roll your own crypto" គឺជាគោលការណ៍ដំបូងគេក្នុងសន្តិសុខសាយប៊ែរ។ ទោះយ៉ាងណា សូម្បីតែពេលប្រើបណ្ណាល័យស្តង់ដារ អ្នកអភិវឌ្ឍន៍នៅតែអាចធ្វើកំហុសបាន។ ជំពូកនេះនឹងពន្យល់ពីការអនុវត្តល្អបំផុតសម្រាប់ការប្រើប្រាស់គ្រីបតូក្រាហ្វ៊ីក្នុងកូដ។

15.2 គោលការណ៍សំខាន់ៗ
15.2.1 គោលការណ៍ Kerckhoffs
"A cryptosystem should be secure even if everything about the system, except the key, is public knowledge."

ការអនុវត្ត៖ កុំពឹងផ្អែកលើ "security through obscurity"។ ក្បួនដោះស្រាយគួរតែជាស្តង់ដារ និងត្រូវបានសាកល្បងជាសាធារណៈ។

15.2.2 កុំបង្កើតដោយខ្លួនឯង
កំហុសទូទៅដែលអ្នកអភិវឌ្ឍន៍ធ្វើ៖

បង្កើត cipher ថ្មី

ប្រើ hash function ដែលខ្សោយ (MD5, SHA-1)

ប្រើ ECB mode

ប្រើ nonce ឡើងវិញ

ការអនុវត្ត constant-time មិនត្រឹមត្រូវ

15.3 ការជ្រើសរើសបណ្ណាល័យ
15.3.1 បណ្ណាល័យដែលត្រូវបានណែនាំ
ភាសា	បណ្ណាល័យណែនាំ	កុំប្រើ
Python	cryptography, PyCryptodome, secrets	hashlib (តែឯង), random
Go	crypto/ (stdlib)	math/rand
Java	java.security, javax.crypto	java.util.Random
C/C++	libsodium, OpenSSL, BoringSSL	បង្កើតដោយខ្លួនឯង
Rust	ring, rust-crypto, dalek	rand (សម្រាប់គ្រីបតូ)
JavaScript	Web Crypto API, libsodium.js	Math.random()
15.3.2 ឧទាហរណ៍ Python ជាមួយ cryptography
python
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.primitives import hashes, hmac
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.backends import default_backend
import os

# ប្រើ secrets សម្រាប់តម្លៃចៃដន្យ
from secrets import token_bytes, token_hex, token_urlsafe

# AES-GCM encryption
def encrypt_aes_gcm(plaintext: bytes, key: bytes) -> bytes:
    nonce = token_bytes(12)  # 96 bits
    cipher = Cipher(algorithms.AES(key), modes.GCM(nonce), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(plaintext) + encryptor.finalize()
    # Format: nonce + ciphertext + tag
    return nonce + ciphertext + encryptor.tag
15.4 Constant-Time Programming
15.4.1 ហេតុអ្វីត្រូវការ constant-time?
Timing attacks អាចទាញយកព័ត៌មានពីភាពខុសគ្នានៃពេលវេលា។ Constant-time code ធានាថាពេលវេលាប្រតិបត្តិមិនអាស្រ័យលើទិន្នន័យសម្ងាត់។

15.4.2 Constant-Time Comparison
python
def constant_time_compare(a: bytes, b: bytes) -> bool:
    """Constant-time byte comparison"""
    if len(a) != len(b):
        return False
    result = 0
    for x, y in zip(a, b):
        result |= x ^ y
    return result == 0

# ប្រើ hmac.compare_digest ដែលមាន constant-time
import hmac
hmac.compare_digest(a, b)
15.4.3 Constant-Time String Operations
python
def constant_time_byte_array_equal(a, b):
    """Constant-time byte array comparison"""
    if len(a) != len(b):
        return False
    r = 0
    for i in range(len(a)):
        r |= a[i] ^ b[i]
    return r == 0
15.5 Key Management
15.5.1 កុំ hardcode keys
python
# DON'T DO THIS!
KEY = "supersecretkey123"
API_KEY = "abc123"

# DO THIS instead
import os
KEY = os.environ.get("ENCRYPTION_KEY")
if not KEY:
    raise ValueError("ENCRYPTION_KEY not set")
15.5.2 Secure Memory Zeroing
python
import sys

def secure_zero(data: bytes) -> None:
    """Overwrite sensitive data in memory"""
    if sys.version_info >= (3, 8):
        # Python 3.8+ has memoryview.cast
        mv = memoryview(data).cast('b')
        mv[:] = b'\x00' * len(data)
    else:
        # Fallback: reassign
        data = b'\x00' * len(data)
15.6 Random Number Generation
15.6.1 ការប្រើប្រាស់ត្រឹមត្រូវ
python
import secrets
import os

# GOOD: Use secrets module
key = secrets.token_bytes(32)      # 256-bit key
nonce = secrets.token_bytes(12)     # 96-bit nonce
token = secrets.token_hex(32)       # hex string
url_safe = secrets.token_urlsafe(32)

# GOOD: Use os.urandom
key = os.urandom(32)

# BAD: Use random module
import random
key = random.getrandbits(256)  # NOT SECURE!
15.6.2 Nonce/IV Management
python
# NEVER reuse nonce with AES-GCM or ChaCha20-Poly1305
# For each encryption, generate a new random nonce
nonce = secrets.token_bytes(12)
cipher = Cipher(algorithms.AES(key), modes.GCM(nonce))

# For deterministic encryption, use a counter that never resets
# Store counter in database and increment after each use
15.7 Password Hashing
15.7.1 ការអនុវត្តត្រឹមត្រូវ
python
import argon2

# Initialize with reasonable parameters
ph = argon2.PasswordHasher(
    time_cost=2,      # iterations
    memory_cost=1024, # memory in KB
    parallelism=2,
    hash_len=32,
    salt_len=16,
)

# Hash a new password
def hash_password(password: str) -> str:
    return ph.hash(password)

# Verify a password
def verify_password(password: str, hash_str: str) -> bool:
    try:
        ph.verify(hash_str, password)
        return True
    except argon2.exceptions.VerificationError:
        return False
15.7.2 កុំប្រើ hash function ធម្មតាសម្រាប់ passwords
python
# BAD: Using SHA-256 for passwords
import hashlib
hash = hashlib.sha256(password.encode()).hexdigest()

# BAD: Even with salt
hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)

# GOOD: Use Argon2, bcrypt, scrypt
import bcrypt
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
15.8 TLS Configuration
15.8.1 ការកំណត់រចនាសម្ព័ន្ធ nginx
nginx
server {
    listen 443 ssl http2;
    ssl_protocols TLSv1.3 TLSv1.2;
    ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305';
    ssl_prefer_server_ciphers off;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
    
    # OCSP stapling
    ssl_stapling on;
    ssl_stapling_verify on;
}
15.8.2 ការកំណត់រចនាសម្ព័ន្ធ Python (requests)
python
import requests
import ssl

# GOOD: Use default settings with verification
response = requests.get('https://api.example.com', verify=True)

# BAD: Disabling certificate verification
response = requests.get('https://api.example.com', verify=False)  # DANGER!
15.9 Error Handling
15.9.1 កុំលេចធ្លាយព័ត៌មានតាមរយៈ errors
python
# BAD: Detailed error messages
try:
    decrypt(data)
except PaddingError:
    return "Invalid padding"  # Padding oracle!
except AuthenticationError:
    return "MAC mismatch"     # Reveals information

# GOOD: Generic error message
try:
    decrypt(data)
except Exception:
    return "Decryption failed"
15.9.2 Constant-time error handling
python
def verify_mac(message, mac, key):
    try:
        expected_mac = hmac.new(key, message, hashlib.sha256).digest()
        # Always take the same time regardless of MAC validity
        if not hmac.compare_digest(mac, expected_mac):
            return False
        return True
    except Exception:
        # Generic error, same timing
        return False
15.10 ការធ្វើតេស្ត (Testing)
15.10.1 Unit Tests
python
import unittest
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
import secrets

class TestAESGCM(unittest.TestCase):
    def test_encrypt_decrypt(self):
        key = secrets.token_bytes(32)
        plaintext = b"Secret message"
        
        # Encrypt
        nonce = secrets.token_bytes(12)
        cipher = Cipher(algorithms.AES(key), modes.GCM(nonce))
        encryptor = cipher.encryptor()
        ciphertext = encryptor.update(plaintext) + encryptor.finalize()
        tag = encryptor.tag
        
        # Decrypt
        cipher = Cipher(algorithms.AES(key), modes.GCM(nonce, tag))
        decryptor = cipher.decryptor()
        decrypted = decryptor.update(ciphertext) + decryptor.finalize()
        
        self.assertEqual(plaintext, decrypted)
15.10.2 Known Answer Tests (KATs)
python
def test_aes_gcm_known_vectors():
    # NIST test vectors
    key = bytes.fromhex("00000000000000000000000000000000")
    nonce = bytes.fromhex("000000000000000000000000")
    plaintext = bytes.fromhex("")
    expected_ciphertext = bytes.fromhex("")
    expected_tag = bytes.fromhex("58e2fccefa7e3061367f1d57a4e7455a")
    
    # Test implementation...
15.11 លំហាត់អនុវត្ត
សរសេរ Python function ដែលអ៊ិនគ្រីបឯកសារដោយ AES-256-GCM រួមទាំងការគ្រប់គ្រង key (environment variable)។

បង្កើត password hashing system ដោយប្រើ Argon2id ។ បន្ថែមការធ្វើតេស្តសម្រាប់ password verification។

ពិនិត្យមើល code review នៃការអនុវត្តគ្រីបតូ។ កំណត់អត្តសញ្ញាណកំហុសសុវត្ថិភាព៖

python
import hashlib
import random

def encrypt(plaintext, key):
    cipher = hashlib.md5(key).digest()
    result = b''
    for i in range(len(plaintext)):
        result += bytes([plaintext[i] ^ cipher[i % len(cipher)]])
    return result
កំណត់រចនាសម្ព័ន្ធ nginx ឱ្យប្រើ TLS 1.3 តែប៉ុណ្ណោះ ហើយទទួលបាន A+ rating ពី SSL Labs។

សរសេរ script ដែលបង្កើត RSA key pair ហើយរក្សាទុក private key ក្នុង PKCS#8 encrypted format (ប្រើ password)។

ជំពូកទី 16: Cryptography in Real-World Protocols (TLS 1.3)
16.1 សេចក្តីផ្តើម
TLS (Transport Layer Security) គឺជា protocol ដែលប្រើយ៉ាងទូលំទូលាយបំផុតសម្រាប់ការពារទំនាក់ទំនងតាមអ៊ីនធឺណិត។ TLS 1.3 (RFC 8446, 2018) គឺជាកំណែថ្មីបំផុត ដែលនាំមកនូវការកែលម្អសុវត្ថិភាព និងប្រសិទ្ធភាពយ៉ាងច្រើន។

16.2 TLS 1.3 vs TLS 1.2
លក្ខណៈ	TLS 1.2	TLS 1.3
Handshake	2 RTT (full)	1 RTT (0-RTT optional)
Cipher suites	Many (including weak)	Limited to strong AEAD
RSA key exchange	Supported	Removed
CBC mode	Supported	Removed
Compression	Supported	Removed
Renegotiation	Supported	Removed
Forward secrecy	Optional	Mandatory
16.3 TLS 1.3 Handshake
16.3.1 Full Handshake (1-RTT)
text
Client                                               Server

ClientHello (supported versions, cipher suites,
            key_share (EC) --------------------->
                                              ServerHello
                                           (selected version,
                                            cipher suite,
                                            key_share)
                                    {EncryptedExtensions}
                                           {CertificateRequest*}
                                                  {Certificate*}
                                            {CertificateVerify*}
                                                      {Finished}
                           <----------------------- [Server Finished]
{Certificate*}
{CertificateVerify*}
{Finished} --------------------------------------->
                                            [Application Data]
<---------------------------------------------------> 
កំណត់សម្គាល់៖

{} មានន័យថា encrypted

[] មានន័យថា encrypted with handshake traffic key

16.3.2 Key Exchange
TLS 1.3 ប្រើតែ Ephemeral Diffie-Hellman (ECDHE ឬ FFDHE) ដើម្បីធានា forward secrecy។

Key Derivation៖

text
early_secret = HKDF-Extract(salt=0, IKM=PSK)
handshake_secret = HKDF-Extract(salt=early_secret, IKM=ECDHE_shared_secret)
master_secret = HKDF-Extract(salt=handshake_secret, IKM=0)
16.3.3 0-RTT (Zero Round Trip Time)
0-RTT អនុញ្ញាតឱ្យ client ផ្ញើទិន្នន័យក្នុងពេលដំណាលគ្នានឹង ClientHello។

របៀប៖

Client រក្សាទុក PSK (Pre-Shared Key) ពី session មុន

ClientHello រួមបញ្ចូល early_data extension

Client ផ្ញើ data ភ្លាមៗបន្ទាប់ពី ClientHello

ការព្រមាន៖ 0-RTT មិនធន់នឹង replay attacks ទេ។ ប្រើតែសម្រាប់ទិន្នន័យដែលមិនរសើប (idempotent requests)។

16.4 Cipher Suites in TLS 1.3
TLS 1.3 cipher suites មានទម្រង់សាមញ្ញជាង TLS 1.2៖

text
TLS_AES_128_GCM_SHA256
TLS_AES_256_GCM_SHA384
TLS_CHACHA20_POLY1305_SHA256
TLS_AES_128_CCM_SHA256
TLS_AES_128_CCM_8_SHA256
សមាសភាព៖

AEAD cipher៖ AES-GCM, ChaCha20-Poly1305

HKDF hash៖ SHA-256, SHA-384

មិនមានការកំណត់ key exchange ឬ signature algorithm ក្នុង cipher suite ទេ (ទាំងនេះត្រូវបានកំណត់ដោយ extensions)។

16.5 0-RTT Security Considerations
16.5.1 Replay Attack
0-RTT data អាចត្រូវបាន replay ដោយអ្នកវាយប្រហារ។

ការការពារ៖

Servers គួរតែដាក់កម្រិត 0-RTT (rate limiting)

ប្រើ Single-Use tickets

កុំប្រើ 0-RTT សម្រាប់ប្រតិបត្តិការដែលមិន idempotent (ឧ. POST requests)

16.5.2 Early Data Indistinguishability
0-RTT data មិនមានការការពារប្រឆាំងនឹង replay ដូច full handshake data ទេ។

16.6 ឧទាហរណ៍៖ Wireshark Analysis
16.6.1 ចាប់ TLS 1.3 Handshake
bash
# Capture TLS 1.3 traffic
tcpdump -i any -w tls13.pcap port 443

# Analyze with Wireshark
# Filter: tls.handshake.version == 0x0304
16.6.2 Key Log File for Debugging
bash
# Set environment variable for browser
export SSLKEYLOGFILE=~/tls_keys.log

# Open Chrome/Firefox
# Wireshark can decrypt traffic using this file
# Preferences -> Protocols -> TLS -> (Pre)-Master-Secret log filename
16.7 TLS 1.3 Implementation in Python
python
import ssl
import socket

# Create SSL context with TLS 1.3 only
context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
context.minimum_version = ssl.TLSVersion.TLSv1_3
context.maximum_version = ssl.TLSVersion.TLSv1_3

# Load certificate (optional for client)
context.load_verify_locations('/etc/ssl/certs/ca-certificates.crt')

# Connect
with socket.create_connection(('example.com', 443)) as sock:
    with context.wrap_socket(sock, server_hostname='example.com') as ssock:
        print(f"TLS version: {ssock.version()}")
        print(f"Cipher: {ssock.cipher()}")
        
        # Send HTTP request
        ssock.send(b'GET / HTTP/1.1\r\nHost: example.com\r\n\r\n')
        response = ssock.recv(4096)
        print(response[:200])
16.8 លំហាត់អនុវត្ត
ប្រើ openssl s_client ដើម្បីភ្ជាប់ទៅកាន់ server ដែលគាំទ្រ TLS 1.3។

bash
openssl s_client -connect cloudflare.com:443 -tls1_3
ចាប់ TLS 1.3 handshake ជាមួយ Wireshark ហើយកំណត់អត្តសញ្ញាណ៖

Supported versions extension

Key share extension

EncryptedExtensions

Finished message

កំណត់រចនាសម្ព័ន្ធ nginx ឱ្យប្រើ TLS 1.3 តែប៉ុណ្ណោះ ហើយសាកល្បងជាមួយ browser។

ស្រាវជ្រាវអំពី "0-RTT replay attack"។ តើវាអាចកើតឡើងយ៉ាងដូចម្តេច? តើមានវិធីការពារអ្វីខ្លះ?

ប្រើ testssl.sh ដើម្បីស្កេន server សម្រាប់ TLS 1.3 support និង cipher suites។

ជំពូកទី 17: SSH (Secure Shell)
17.1 សេចក្តីផ្តើម
SSH (Secure Shell) គឺជា protocol សម្រាប់ការចូលប្រើ remote machines ដោយសុវត្ថិភាព។ វាផ្តល់នូវការបញ្ជាក់អត្តសញ្ញាណ (authentication) ការអ៊ិនគ្រីប (encryption) និងភាពត្រឹមត្រូវ (integrity) សម្រាប់ការទំនាក់ទំនងពីចម្ងាយ។

17.2 SSH Protocol Architecture
SSH មានបីស្រទាប់ (layers)៖

Transport Layer៖ ការអ៊ិនគ្រីប, ការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវ, compression

Authentication Layer៖ ការបញ្ជាក់អត្តសញ្ញាណ client

Connection Layer៖ multiplexing channels (shell, SFTP, port forwarding)

17.3 SSH Key Exchange
17.3.1 Algorithm Negotiation
Client និង server ព្រមព្រៀងគ្នាលើ៖

Key exchange algorithm (curve25519-sha256, ecdh-sha2-nistp256)

Public key algorithm (ssh-ed25519, rsa-sha2-512)

Encryption algorithm (aes256-gcm@openssh.com, chacha20-poly1305@openssh.com)

MAC algorithm (hmac-sha2-256, umac-128-etm@openssh.com)

Compression algorithm (none, zlib@openssh.com)

17.3.2 Key Exchange Process
text
Client                                              Server

1. SSH_MSG_KEXINIT (algorithms) ----------------->
2. <----------------- SSH_MSG_KEXINIT (algorithms)
3. SSH_MSG_KEX_ECDH_INIT (client public key) ---->
4. <----------------- SSH_MSG_KEX_ECDH_REPLY
   (server public key, server host key signature)
5. Compute shared secret
6. SSH_MSG_NEWKEYS ------------------------------>
7. <----------------- SSH_MSG_NEWKEYS
17.3.3 Host Key Verification
ពេលភ្ជាប់ជាលើកដំបូង SSH client បង្ហាញ host key fingerprint៖

bash
$ ssh example.com
The authenticity of host 'example.com (192.168.1.1)' can't be established.
ED25519 key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Fingerprint ត្រូវបានរក្សាទុកក្នុង ~/.ssh/known_hosts។

17.4 SSH Authentication Methods
17.4.1 Public Key Authentication
របៀប៖

Client បង្ហាញអត្តសញ្ញាណ (key ID)

Server ផ្ទៀងផ្ទាត់ថា public key មានក្នុង ~/.ssh/authorized_keys

Server ផ្ញើ challenge (random data) encrypted with public key

Client ឌិគ្រីប challenge ដោយ private key ហើយផ្ញើត្រឡប់

Server ផ្ទៀងផ្ទាត់ challenge

បង្កើត SSH key pair៖

bash
# ED25519 (recommended)
ssh-keygen -t ed25519 -C "your_email@example.com"

# RSA 4096-bit
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# View public key
cat ~/.ssh/id_ed25519.pub
17.4.2 Password Authentication
ងាយស្រួល ប៉ុន្តែខ្សោយជាង public key (ងាយរង brute-force attacks)។

បិទ password authentication ក្នុង /etc/ssh/sshd_config៖

text
PasswordAuthentication no
17.4.3 Multi-Factor Authentication
Google Authenticator (TOTP)

YubiKey (U2F/FIDO2)

Certificates (OpenSSH certificates)

17.5 SSH Encryption
17.5.1 ក្បួនដោះស្រាយដែលបានណែនាំ
ប្រភេទ	ក្បួនដោះស្រាយណែនាំ	កុំប្រើ
Key exchange	curve25519-sha256, ecdh-sha2-nistp256	diffie-hellman-group1-sha1
Host key	ssh-ed25519, rsa-sha2-512	ssh-rsa (SHA-1)
Encryption	aes256-gcm@openssh.com, chacha20-poly1305@openssh.com	aes128-cbc, 3des-cbc
MAC	hmac-sha2-256-etm@openssh.com	hmac-md5
17.5.2 កំណត់រចនាសម្ព័ន្ធ /etc/ssh/sshd_config
text
# Host keys
HostKey /etc/ssh/ssh_host_ed25519_key
HostKey /etc/ssh/ssh_host_rsa_key

# Key exchange
KexAlgorithms curve25519-sha256@libssh.org,ecdh-sha2-nistp521,ecdh-sha2-nistp384,ecdh-sha2-nistp256

# Ciphers
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com

# MACs
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com

# Authentication
PubkeyAuthentication yes
PasswordAuthentication no
PermitRootLogin prohibit-password
17.6 SSH Agent
SSH agent រក្សាទុក private keys ក្នុង memory ដើម្បីកុំឱ្យត្រូវបញ្ចូល passphrase រាល់ដង។

bash
# Start agent
eval $(ssh-agent)

# Add key
ssh-add ~/.ssh/id_ed25519

# List keys
ssh-add -l

# Forward agent to remote server (for chained connections)
ssh -A user@host
17.7 SSH Tunneling (Port Forwarding)
17.7.1 Local Port Forwarding
បញ្ជូនចរាចរណ៍ពី local port ទៅកាន់ remote host តាមរយៈ SSH server។

bash
# Forward local port 8080 to remote web server
ssh -L 8080:internal-web-server:80 user@ssh-gateway.com
# Then access http://localhost:8080
17.7.2 Remote Port Forwarding
បញ្ជូនចរាចរណ៍ពី remote port ទៅកាន់ local host។

bash
# Allow remote access to local web server
ssh -R 8080:localhost:80 user@remote-server.com
# Remote users can access http://remote-server.com:8080
17.7.3 Dynamic Port Forwarding (SOCKS Proxy)
bash
# Create SOCKS proxy on local port 1080
ssh -D 1080 user@ssh-gateway.com
# Configure browser to use SOCKS proxy localhost:1080
17.8 SFTP (SSH File Transfer Protocol)
SFTP គឺជា protocol សម្រាប់ផ្ទេរឯកសារតាមរយៈ SSH (មិនមែន FTP)។

bash
# Interactive SFTP
sftp user@host

# Batch operations
sftp user@host <<EOF
cd /remote/path
lcd /local/path
get file.txt
put file2.txt
quit
EOF

# Using rsync over SSH
rsync -avz -e ssh /local/path user@host:/remote/path
17.9 SSH Security Best Practices
ប្រើ ED25519 keys ជំនួស RSA

ការពារ private key៖ chmod 600 ~/.ssh/id_ed25519

ប្រើ passphrase សម្រាប់ private keys

បិទ password authentication ក្នុង server

ប្រើ AllowUsers / DenyUsers ក្នុង sshd_config

ផ្លាស់ប្តូរ default port (22 → higher port) ដើម្បីកាត់បន្ថយ automated attacks

ប្រើ Fail2ban ដើម្បីទប់ស្កាត់ brute-force attacks

បង្វិល host keys ជាទៀងទាត់

17.10 លំហាត់អនុវត្ត
បង្កើត ED25519 key pair ដោយប្រើ ssh-keygen។

កំណត់រចនាសម្ព័ន្ធ SSH server ឱ្យប្រើតែ public key authentication និងបិទ password authentication។

បង្កើត SSH config file (~/.ssh/config) សម្រាប់ hosts ផ្សេងៗ។

ប្រើ SSH agent forwarding ដើម្បីភ្ជាប់ទៅ jump server ហើយបន្ទាប់មកទៅកាន់ internal server។

កំណត់រចនាសម្ព័ន្ធ SFTP chroot jail សម្រាប់ users មានកម្រិត។

ជំពូកទី 18: Cryptography for Passwords
18.1 សេចក្តីផ្តើម
ការរក្សាទុកពាក្យសម្ងាត់ (password storage) គឺជាកម្មវិធីគ្រីបតូក្រាហ្វ៊ីដ៏សំខាន់បំផុតមួយ។ គោលដៅគឺដើម្បីផ្ទៀងផ្ទាត់អត្តសញ្ញាណអ្នកប្រើប្រាស់ដោយមិនរក្សាទុកពាក្យសម្ងាត់ជា plaintext។

18.2 ហេតុអ្វីមិនប្រើ Hash ធម្មតា?
18.2.1 បញ្ហាជាមួយ hash ធម្មតា
python
# BAD: Using SHA-256 directly
import hashlib
hash = hashlib.sha256(password.encode()).hexdigest()
បញ្ហា៖

លឿនពេក៖ SHA-256 ត្រូវបានរចនាឡើងឱ្យលឿន ដែលអនុញ្ញាតឱ្យអ្នកវាយប្រហារសាកល្បងពាក្យសម្ងាត់រាប់លានក្នុងមួយវិនាទី

គ្មាន salt៖ Rainbow table attacks

មិនមាន key stretching៖ មិនមានការបង្កើនពេលវេលាគណនា

18.2.2 Rainbow Table Attack
Rainbow table គឺជាតារាង hash ដែលបានគណនាទុកជាមុនសម្រាប់ពាក្យសម្ងាត់ទូទៅ។

ឧទាហរណ៍៖ ប្រសិនបើ database លេចធ្លាយហើយមានតែ hash ដោយគ្មាន salt, អ្នកវាយប្រហារអាចប្រើ rainbow table ដើម្បីរកពាក្យសម្ងាត់ក្នុងរយៈពេលវិនាទី។

18.3 Salt
18.3.1 តើ Salt ជាអ្វី?
Salt គឺជាតម្លៃចៃដន្យដែលត្រូវបានបន្ថែមទៅពាក្យសម្ងាត់មុនពេល hashing។

text
hash = H(password + salt)
18.3.2 លក្ខណៈ Salt
ចៃដន្យ (random)៖ ប្រើ CSPRNG

វែងគ្រប់គ្រាន់៖ 16+ bytes (128 bits)

ផ្សេងគ្នាសម្រាប់អ្នកប្រើប្រាស់នីមួយៗ

រក្សាទុកជាមួយ hash (មិនចាំបាច់សម្ងាត់)

18.3.3 ឧទាហរណ៍
python
import os
import hashlib

# Generate salt
salt = os.urandom(16)

# Hash password with salt
password = b"mypassword"
hash_obj = hashlib.pbkdf2_hmac('sha256', password, salt, 100000)
stored = salt + hash_obj  # 16 + 32 = 48 bytes
18.4 Key Derivation Functions (KDF) for Passwords
18.4.1 PBKDF2
PBKDF2 (Password-Based Key Derivation Function 2) គឺជា KDF ស្តង់ដារដែលប្រើ hash function និង iterations ។

រូបមន្ត៖

text
DK = PBKDF2(PRF, Password, Salt, Iterations, dkLen)
ឧទាហរណ៍ Python៖

python
import hashlib
import os

salt = os.urandom(16)
password = b"mypassword"
iterations = 100000  # 100,000+ recommended

hash = hashlib.pbkdf2_hmac('sha256', password, salt, iterations, 32)
ប៉ារ៉ាម៉ែត្រ៖

iterations៖ កាន់តែខ្ពស់ កាន់តែយឺត (100,000+ សម្រាប់ 2024)

dkLen៖ output length (32 bytes for AES-256)

18.4.2 bcrypt
bcrypt គឺជា KDF ដែលផ្អែកលើ Blowfish cipher និងមាន salt បង្កប់ក្នុង output។

លក្ខណៈ៖

មាន salt បង្កប់ (60-character string)

ធន់នឹង GPU attacks (memory-hard)

Cost factor (2^cost iterations)

ឧទាហរណ៍ Python៖

python
import bcrypt

password = b"mypassword"

# Hash (salt generated automatically)
hashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))
print(hashed)  # b'$2b$12$...'

# Verify
if bcrypt.checkpw(password, hashed):
    print("Password correct")
18.4.3 scrypt
scrypt គឺជា KDF memory-hard ដែលត្រូវបានរចនាឡើងដើម្បីទប់ទល់នឹង ASIC/GPU attacks។

ប៉ារ៉ាម៉ែត្រ៖

N (CPU/memory cost) – must be power of 2

r (block size)

p (parallelization)

ឧទាហរណ៍ Python៖

python
import scrypt

password = b"mypassword"
salt = os.urandom(16)

# N=16384, r=8, p=1 (recommended)
hash = scrypt.hash(password, salt, N=16384, r=8, p=1, buflen=32)
18.4.4 Argon2 (Recommended)
Argon2 គឺជាអ្នកឈ្ន៉ះនៃ Password Hashing Competition (2015)។

បំរែបំរួល៖

Argon2i៖ ធន់នឹង side-channel attacks (សម្រាប់ password hashing)

Argon2d៖ លឿនជាង ប៉ុន្តែងាយរង side-channel

Argon2id៖ hybrid (ណែនាំឱ្យប្រើ)

ឧទាហរណ៍ Python (argon2-cffi)៖

python
from argon2 import PasswordHasher
from argon2.exceptions import VerificationError

ph = PasswordHasher(
    time_cost=2,      # iterations
    memory_cost=1024, # memory in KB (1 GB)
    parallelism=2,    # threads
    hash_len=32,
    salt_len=16,
)

# Hash
hash_str = ph.hash("mypassword")
print(hash_str)

# Verify
try:
    ph.verify(hash_str, "mypassword")
    print("Valid!")
except VerificationError:
    print("Invalid!")
18.5 ការប្រៀបធៀប KDFs
KDF	Salt	Iterations	Memory-Hard	GPU-Resistant	Recommended
PBKDF2	Yes	Configurable	No	No	Legacy
bcrypt	Built-in	Configurable (2^cost)	Limited	Medium	Good
scrypt	Yes	Configurable	Yes	High	Good
Argon2	Built-in	Configurable	Yes (high)	High	Best
18.6 Password Policies
18.6.1 NIST SP 800-63B Recommendations
NIST (National Institute of Standards and Technology) ណែនាំ៖

DO:

អនុញ្ញាតឱ្យមានរហូតដល់ 64+ characters

អនុញ្ញាតឱ្យប្រើ Unicode (including spaces)

ផ្ទៀងផ្ទាត់ប្រឆាំងនឹង breached password lists

ប្រើ rate limiting បន្ទាប់ពីការបរាជ័យច្រើនដង

DON'T:

កុំតម្រូវឱ្យមាន complexity rules (uppercase, number, symbol) ប្រសិនបើគ្មានហេតុផល

កុំតម្រូវឱ្យផ្លាស់ប្តូរពាក្យសម្ងាត់តាមកាលកំណត់ (unless evidence of compromise)

កុំប្រើ password hints

កុំប្រើ security questions (mother's maiden name, etc.)

18.6.2 Breached Password Detection
python
import requests

def is_password_breached(password: str) -> bool:
    """Check if password appears in HaveIBeenPwned database"""
    import hashlib
    
    sha1 = hashlib.sha1(password.encode()).hexdigest().upper()
    prefix, suffix = sha1[:5], sha1[5:]
    
    response = requests.get(f"https://api.pwnedpasswords.com/range/{prefix}")
    if response.status_code != 200:
        return False
    
    for line in response.text.splitlines():
        if line.startswith(suffix):
            count = int(line.split(':')[1])
            return count > 0
    return False
18.7 Password Managers
Password managers រក្សាទុកពាក្យសម្ងាត់ក្នុង encrypted vault។

ឧទាហរណ៍៖ Bitwarden, 1Password, KeePass, LastPass

លក្ខណៈពិសេស៖

បង្កើតពាក្យសម្ងាត់វែង ចៃដន្យ

ផ្ទុក autofill

សមកាលកម្មឆ្លងឧបករណ៍ (end-to-end encrypted)

Breach monitoring

18.8 Multi-Factor Authentication (MFA)
MFA បន្ថែមស្រទាប់ការពារបន្ថែមលើពាក្យសម្ងាត់។

18.8.1 TOTP (Time-based One-Time Password)
ស្តង់ដារ៖ RFC 6238

របៀប៖ បង្កើត code 6-8 digits ផ្លាស់ប្តូររៀងរាល់ 30 វិនាទី

ឧទាហរណ៍៖ Google Authenticator, Authy, Microsoft Authenticator

ឧទាហរណ៍ Python (pyotp)៖

python
import pyotp
import qrcode

# Generate secret
secret = pyotp.random_base32()
print(f"Secret: {secret}")

# Generate TOTP URI for QR code
totp = pyotp.TOTP(secret)
uri = totp.provisioning_uri("user@example.com", issuer_name="MyApp")

# Generate QR code
qrcode.make(uri).save("totp_qr.png")

# Verify
if totp.verify(input("Enter code: ")):
    print("Valid!")
18.8.2 WebAuthn / FIDO2
ឧទាហរណ៍៖ YubiKey, Windows Hello, Touch ID

លក្ខណៈ៖ phishing-resistant, biometric options

18.9 ឧទាហរណ៍ពេញលេញ៖ Password Storage System
python
import os
import argon2
from argon2.exceptions import VerificationError
import secrets

class PasswordManager:
    def __init__(self):
        self.ph = argon2.PasswordHasher(
            time_cost=2,
            memory_cost=1024,
            parallelism=2,
            hash_len=32,
            salt_len=16,
        )
    
    def hash_password(self, password: str) -> str:
        """Hash a new password"""
        return self.ph.hash(password)
    
    def verify_password(self, password: str, hash_str: str) -> bool:
        """Verify a password against its hash"""
        try:
            self.ph.verify(hash_str, password)
            # Check if rehash is needed (upgrade parameters)
            if self.ph.check_needs_rehash(hash_str):
                # Rehash with new parameters
                return self.hash_password(password)
            return True
        except VerificationError:
            return False
    
    def generate_secure_password(self, length: int = 32) -> str:
        """Generate a secure random password"""
        alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        return ''.join(secrets.choice(alphabet) for _ in range(length))

# Usage
pm = PasswordManager()

# Register new user
password = "user_password"  # In practice, get from user input
hash_str = pm.hash_password(password)
print(f"Hash: {hash_str}")

# Login
if pm.verify_password("user_password", hash_str):
    print("Login successful")
else:
    print("Login failed")
18.10 លំហាត់អនុវត្ត
ប្រើ hashcat ដើម្បីសាកល្បងបំបែក MD5 hash នៃពាក្យសម្ងាត់ទូទៅ។

សរសេរ Python script ដែលបង្កើត salt ចៃដន្យ 16 bytes ហើយរក្សាទុកជាមួយ PBKDF2 hash។

ប្រៀបធៀបពេលវេលា hashing រវាង SHA-256 (1 iteration) និង PBKDF2 (100,000 iterations) សម្រាប់ពាក្យសម្ងាត់ដូចគ្នា។

ដំឡើង TOTP 2FA សម្រាប់កម្មវិធីតូចមួយ (ឧ. Flask app)។

ស្រាវជ្រាវអំពី "Have I Been Pwned" API ហើយបង្កើត function ដើម្បីពិនិត្យថាតើពាក្យសម្ងាត់មួយត្រូវបានបំពានដែរឬទេ។

ជំពូកទី 19: Disk & File Encryption
19.1 សេចក្តីផ្តើម
Disk និង file encryption ការពារទិន្នន័យនៅពេលសម្រាក (data at rest)។ វាមានសារៈសំខាន់សម្រាប់ការពារការលេចធ្លាយទិន្នន័យនៅពេលឧបករណ៍ត្រូវបានលួច ឬបាត់បង់។

19.2 Full Disk Encryption (FDE)
19.2.1 តើ FDE ជាអ្វី?
Full Disk Encryption (FDE) អ៊ិនគ្រីបថាសទាំងមូល រួមទាំង OS, applications, និង data។ ការឌិគ្រីបកើតឡើងក្នុងពេលចាប់ផ្ដើមប្រព័ន្ធ (boot time) បន្ទាប់ពីការបញ្ចូល password/PIN។

19.2.2 ដំណោះស្រាយ FDE
OS	Solution	Encryption	Key Management
Windows	BitLocker	AES-128/256	TPM, PIN, USB key, Recovery key
macOS	FileVault 2	AES-XTS 128	User password, Recovery key
Linux	LUKS (dm-crypt)	AES-XTS 256	Passphrase, Key file, TPM2
Android	File-Based Encryption (FBE)	AES-256	Hardware-backed keystore
iOS	Data Protection	AES-256	Secure Enclave
19.2.3 LUKS (Linux Unified Key Setup)
LUKS គឺជាស្តង់ដារសម្រាប់ disk encryption នៅលើ Linux។

រចនាសម្ព័ន្ធ LUKS header៖

LUKS header (2 MB)៖ មាន key slots (8 slots)

Key slot៖ encrypted master key (ប្រើ PBKDF2/Argon2)

Master key៖ key ពិតប្រាកដសម្រាប់អ៊ិនគ្រីបថាស

ឧទាហរណ៍ LUKS commands៖

bash
# បង្កើត encrypted partition
sudo cryptsetup luksFormat /dev/sdb1
# Enter passphrase

# បើក partition
sudo cryptsetup luksOpen /dev/sdb1 myencrypted

# បង្កើត filesystem
sudo mkfs.ext4 /dev/mapper/myencrypted

# Mount
sudo mount /dev/mapper/myencrypted /mnt

# បន្ថែម key slot (extra passphrase)
sudo cryptsetup luksAddKey /dev/sdb1

# មើល key slots
sudo cryptsetup luksDump /dev/sdb1

# បិទ
sudo umount /mnt
sudo cryptsetup luksClose myencrypted
19.2.4 BitLocker (Windows)
BitLocker ប្រើ TPM (Trusted Platform Module) សម្រាប់រក្សាទុក key។

របៀប៖

TPM រក្សាទុក key

នៅពេលចាប់ផ្ដើម TPM បញ្ជាក់ថា boot components មិនត្រូវបានកែប្រែ

TPM បញ្ចេញ key សម្រាប់ឌិគ្រីប

ការកំណត់រចនាសម្ព័ន្ធ៖

TPM only៖ ឌិគ្រីបដោយស្វ័យប្រវត្តិ (ប្រសិនបើ boot components មិនផ្លាស់ប្តូរ)

TPM + PIN៖ ត្រូវការ PIN បន្ថែម

TPM + USB key៖ ត្រូវការ USB key

Recovery key៖ 48-digit recovery key សម្រាប់ពេលភ្លេច PIN

19.3 File-Level Encryption
19.3.1 eCryptfs (Linux)
eCryptfs គឺជា stacked filesystem ដែលអ៊ិនគ្រីបឯកសារនីមួយៗដោយឡែកពីគ្នា។

bash
# ដំឡើង
sudo mount -t ecryptfs /home/user/private /home/user/private
# កំណត់ cipher: AES, key size: 256, passphrase
19.3.2 gpg (GNU Privacy Guard)
gpg អាចអ៊ិនគ្រីបឯកសារនីមួយៗដោយ symmetric key ឬ public key។

bash
# Symmetric encryption (password)
gpg --symmetric --cipher-algo AES256 file.txt
# Output: file.txt.gpg

# Decrypt
gpg --decrypt file.txt.gpg > file.txt

# Public key encryption
gpg --encrypt --recipient user@example.com file.txt

# Decrypt with private key
gpg --decrypt file.txt.gpg > file.txt
19.3.3 age (Simple Encryption Tool)
age (https://github.com/FiloSottile/age) គឺជា encryption tool សាមញ្ញ និងមានសុវត្ថិភាព។

bash
# Generate key pair
age-keygen -o key.txt

# Encrypt with recipient public key
age -r age1... file.txt > file.txt.age

# Decrypt with private key
age -d -i key.txt file.txt.age

# Symmetric encryption (password)
age -p file.txt > file.txt.age
19.3.4 7-Zip / VeraCrypt
7-Zip (AES-256)៖

bash
# Command line
7z a -p -mx=0 -mhe=on archive.7z file.txt
# -p: prompt for password
# -mhe=on: encrypt file headers
VeraCrypt៖ បង្កើត encrypted container (virtual disk)។

គាំទ្រ AES, Serpent, Twofish

Hidden volume (deniable encryption)

Cross-platform (Windows, Linux, macOS)

19.4 Deniable Encryption
Deniable encryption អនុញ្ញាតឱ្យអ្នកប្រើប្រាស់បដិសេធថាមានទិន្នន័យដែលបានអ៊ិនគ្រីប (plausible deniability)។

19.4.1 VeraCrypt Hidden Volume
VeraCrypt hidden volume គឺជា volume ដែលបង្កប់ក្នុង volume មួយផ្សេងទៀត។

រចនាសម្ព័ន្ធ៖

Outer volume៖ មានទិន្នន័យធម្មតា (ឬទិន្នន័យដែលមិនរសើប)

Hidden volume៖ បង្កប់ក្នុង outer volume អាចចូលប្រើបានតែដោយ password ផ្សេងគ្នា

ការប្រើប្រាស់៖

ពេលត្រូវបានបង្ខំឱ្យបង្ហាញ password, អ្នកប្រើប្រាស់ផ្តល់ password នៃ outer volume

Outer volume មានទិន្នន័យដែលអាចបង្ហាញបាន

Hidden volume នៅតែលាក់កំបាំង

19.5 Cloud Storage Encryption
19.5.1 Client-Side Encryption
មុនពេលផ្ទុកឯកសារទៅ cloud, អ៊ិនគ្រីបឯកសារនៅលើ client។

ឧបករណ៍៖

rclone៖ គាំទ្រ client-side encryption

Cryptomator៖ open-source client-side encryption សម្រាប់ cloud

Boxcryptor (commercial)

rclone example៖

bash
# Configure rclone with crypt remote
rclone config
# Choose 'crypt' remote
# Set password and salt

# Upload encrypted files
rclone copy /local/path crypt:remote/path

# Mount encrypted remote
rclone mount crypt:remote/path /mnt/encrypted
19.5.2 End-to-End Encryption (E2EE)
Cloud providers ដែលផ្តល់ E2EE៖

Tresorit

Sync.com

MEGA (client-side encryption)

19.6 Key Management for Disk Encryption
19.6.1 TPM (Trusted Platform Module)
TPM គឺជាបន្ទះឈីបនៅលើ motherboard ដែលរក្សាទុក keys ដោយសុវត្ថិភាព។

មុខងារ៖

Storage Root Key (SRK) មិនចាកចេញពី TPM

Sealed keys: keys ត្រូវបានចងភ្ជាប់ជាមួយ hardware និង software configuration

PCR (Platform Configuration Registers)៖ កត់ត្រា boot measurements

19.6.2 Recovery Keys
ការប្រើប្រាស់ recovery keys មានសារៈសំខាន់សម្រាប់ការសង្គ្រោះទិន្នន័យ។

BitLocker recovery key៖

powershell
# Backup recovery key to AD
manage-bde -protectors -add c: -recoverypassword

# Display recovery key
manage-bde -protectors -get c:

# Store recovery key in Microsoft account (for personal devices)
LUKS recovery៖

bash
# Add recovery key (another passphrase)
sudo cryptsetup luksAddKey /dev/sdb1

# Backup LUKS header
sudo cryptsetup luksHeaderBackup /dev/sdb1 --header-backup-file luks-header.bin
19.7 ឧទាហរណ៍ Python៖ File Encryption with AES-GCM
python
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend

def encrypt_file(filename: str, key: bytes):
    """Encrypt a file with AES-256-GCM"""
    nonce = os.urandom(12)
    
    with open(filename, 'rb') as f:
        plaintext = f.read()
    
    cipher = Cipher(algorithms.AES(key), modes.GCM(nonce), backend=default_backend())
    encryptor = cipher.encryptor()
    ciphertext = encryptor.update(plaintext) + encryptor.finalize()
    tag = encryptor.tag
    
    # Write format: nonce (12) + tag (16) + ciphertext
    with open(filename + '.enc', 'wb') as f:
        f.write(nonce)
        f.write(tag)
        f.write(ciphertext)

def decrypt_file(filename: str, key: bytes):
    """Decrypt a file encrypted with AES-256-GCM"""
    with open(filename, 'rb') as f:
        nonce = f.read(12)
        tag = f.read(16)
        ciphertext = f.read()
    
    cipher = Cipher(algorithms.AES(key), modes.GCM(nonce, tag), backend=default_backend())
    decryptor = cipher.decryptor()
    plaintext = decryptor.update(ciphertext) + decryptor.finalize()
    
    output_filename = filename.replace('.enc', '.dec')
    with open(output_filename, 'wb') as f:
        f.write(plaintext)

# Usage
key = os.urandom(32)  # AES-256
encrypt_file('secret.txt', key)
decrypt_file('secret.txt.enc', key)
19.8 លំហាត់អនុវត្ត
ប្រើ LUKS ដើម្បីបង្កើត encrypted partition នៅលើ USB drive ទំហំ 8 GB។

ប្រើ VeraCrypt ដើម្បីបង្កើត hidden volume។

កំណត់រចនាសម្ព័ន្ធ BitLocker ជាមួយ TPM + PIN នៅលើ Windows។

ប្រើ gpg ដើម្បីអ៊ិនគ្រីបឯកសារដោយ password ហើយបន្ទាប់មកឌិគ្រីប។

សរសេរ Python script ដែលអ៊ិនគ្រីប directory ទាំងមូល (recursive) ដោយប្រើ AES-GCM។

ជំពូកទី 20: Cryptography in Blockchain
20.1 សេចក្តីផ្តើម
Blockchain គឺជាបច្ចេកវិទ្យាដែលពឹងផ្អែកយ៉ាងខ្លាំងលើគ្រីបតូក្រាហ្វ៊ី។ ការយល់ដឹងពីរបៀបដែលគ្រីបតូក្រាហ្វ៊ីដំណើរការក្នុង blockchain គឺចាំបាច់សម្រាប់អ្នកអភិវឌ្ឍន៍ និងអ្នកស្រាវជ្រាវ។

20.2 Hash Functions in Blockchain
20.2.1 Block Hashing
Block នីមួយៗមាន block header ដែលរួមបញ្ចូល៖

Previous block hash៖ ភ្ជាប់ block ជាបន្តបន្ទាប់

Merkle root៖ hash នៃ transactions ទាំងអស់

Timestamp, Nonce, Difficulty target

Bitcoin block header (80 bytes)៖

text
Version (4 bytes)
Previous Block Hash (32 bytes)
Merkle Root (32 bytes)
Timestamp (4 bytes)
Difficulty Target (4 bytes)
Nonce (4 bytes)
Block hash = SHA-256(SHA-256(block header))

20.2.2 Merkle Tree
Merkle tree អនុញ្ញាតឱ្យផ្ទៀងផ្ទាត់ transaction មួយដោយមិនចាំបាច់ទាញយក transactions ទាំងអស់។

text
Merkle Root = H(H(H(Tx1) + H(Tx2)) + H(H(Tx3) + H(Tx4)))
SPV (Simplified Payment Verification)៖

Light client ទាញយកតែ block headers

សម្រាប់ transaction ជាក់លាក់ ទាញយក Merkle proof (path to root)

ផ្ទៀងផ្ទាត់ដោយគណនា Merkle root ឡើងវិញ

20.3 Digital Signatures in Blockchain
20.3.1 Bitcoin: ECDSA (secp256k1)
Bitcoin ប្រើ ECDSA នៅលើ curve secp256k1។

Public Key Generation៖

text
private_key = random (1..n-1)
public_key = private_key × G
Address Generation (Base58Check)៖

text
public_key → SHA-256 → RIPEMD-160 → add version byte → Base58Check
Bitcoin address formats៖

P2PKH (Legacy)៖ starts with '1'

P2SH (SegWit)៖ starts with '3'

Bech32 (SegWit native)៖ starts with 'bc1'

20.3.2 Ethereum: ECDSA (secp256k1)
Ethereum ប្រើ ECDSA ដូច Bitcoin ដែរ ប៉ុន្តែ address generation ខុសគ្នា៖

text
public_key → Keccak-256 (SHA-3 variant) → last 20 bytes → address
Ethereum address គឺ 0x + 40 hex characters (20 bytes)។

20.3.3 Ed25519 in Other Blockchains
Blockchains មួយចំនួនប្រើ Ed25519 (Curve25519) សម្រាប់ល្បឿន និងសុវត្ថិភាព៖

Solana

Cardano

Stellar

20.4 Proof-of-Work (PoW)
20.4.1 គោលការណ៍
Proof-of-Work តម្រូវឱ្យ miners រក nonce ដែល block hash តិចជាង target។

text
Block Hash = SHA-256(SHA-256(Version | PrevHash | MerkleRoot | Time | Bits | Nonce))
Condition: Block Hash < Target
20.4.2 Difficulty Adjustment
Bitcoin កែសម្រួល difficulty រៀងរាល់ 2016 blocks (~2 weeks) ដើម្បីរក្សា block time ~10 minutes។

text
New Difficulty = Old Difficulty × (Actual Time / Expected Time)
Expected Time = 2016 × 10 minutes = 2 weeks
20.4.3 Hashcash
Proof-of-Work គឺផ្អែកលើ hashcash (Adam Back, 1997)។

20.5 Hierarchical Deterministic (HD) Wallets
20.5.1 BIP32 (Hierarchical Deterministic Wallets)
HD wallet អនុញ្ញាតឱ្យបង្កើតគូកូនសោរាប់លានពី seed តែមួយ។

រចនាសម្ព័ន្ធ៖

text
Seed (128-256 bits)
  → Master Private Key
    → Child Private Keys (using HMAC-SHA512)
20.5.2 BIP39 (Mnemonic Phrases)
BIP39 កំណត់ពីរបៀបបំប្លែង seed ទៅជាពាក្យ 12, 18, ឬ 24 ពាក្យ។

ឧទាហរណ៍ mnemonic៖

text
abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about
ដំណើរការ៖

បង្កើត entropy (128-256 bits)

គណនា checksum (SHA-256, first bits)

បំបែកជា 11-bit groups → ពាក្យពី wordlist

ប្រើ PBKDF2 ដើម្បីបង្កើត seed (2048 iterations, HMAC-SHA512)

20.5.3 BIP44 (Multi-Account Hierarchy)
BIP44 កំណត់ path structure សម្រាប់ multi-coin wallets៖

text
m / purpose' / coin_type' / account' / change / address_index
purpose៖ 44' for BIP44

coin_type៖ 0' for Bitcoin, 60' for Ethereum

account៖ 0' for first account

change៖ 0 for external, 1 for change

address_index៖ 0, 1, 2, ...

ឧទាហរណ៍៖ m/44'/0'/0'/0/0 (Bitcoin first receiving address)

20.6 Smart Contracts & Cryptography
20.6.1 Elliptic Curve Operations in Solidity
Solidity មិនមានអនុគមន៍ native សម្រាប់ EC operations ទេ ប៉ុន្តែមាន precompiled contracts៖

solidity
// Precompiled contract for ecrecover
function recoverSigner(bytes32 hash, bytes memory signature) public pure returns (address) {
    bytes32 r;
    bytes32 s;
    uint8 v;
    
    assembly {
        r := mload(add(signature, 32))
        s := mload(add(signature, 64))
        v := byte(0, mload(add(signature, 96)))
    }
    
    return ecrecover(hash, v, r, s);
}
20.6.2 zk-SNARKs in Blockchain
zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) ត្រូវបានប្រើក្នុង៖

Zcash៖ shielded transactions

Ethereum៖ privacy-preserving smart contracts (Aztec, Tornado Cash)

20.7 ឧទាហរណ៍៖ Bitcoin Transaction Signing
python
import hashlib
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat, PublicTypes

# Generate key pair (secp256k1)
private_key = ec.generate_private_key(ec.SECP256K1())
public_key = private_key.public_key()

# Transaction data
tx = {
    'version': 1,
    'inputs': [{'txid': '...', 'vout': 0, 'scriptSig': ''}],
    'outputs': [{'value': 100000, 'scriptPubKey': '...'}],
    'locktime': 0
}

# Create transaction hash (simplified)
tx_bytes = b'...'  # Serialized transaction
tx_hash = hashlib.sha256(hashlib.sha256(tx_bytes).digest()).digest()

# Sign transaction
signature = private_key.sign(tx_hash, ec.ECDSA(hashes.SHA256()))

# Verify
try:
    public_key.verify(signature, tx_hash, ec.ECDSA(hashes.SHA256()))
    print("Signature valid")
except:
    print("Signature invalid")
20.8 Blockchain Security Considerations
20.8.1 51% Attack
ប្រសិនបើ miner ឬ group of miners គ្រប់គ្រង >50% នៃ hashrate ពួកគេអាច៖

Double-spend transactions

Censor transactions

រារាំងការបញ្ជាក់ពី miners ផ្សេងទៀត

20.8.2 Quantum Threat
Bitcoin៖ ECDSA នឹងត្រូវបំបែកដោយ Shor's algorithm

Quantum-resistant blockchains៖ QRL (Quantum Resistant Ledger) ប្រើ hash-based signatures

Mitigation៖ ការផ្លាស់ប្តូរទៅ PQC signatures (FALCON, Dilithium)

20.9 លំហាត់អនុវត្ត
គណនា Merkle root នៃ transactions 4 ដោយដៃ (ប្រើ SHA-256)។

បង្កើត Bitcoin mnemonic (12 words) ដោយប្រើ BIP39 ហើយទាញយក master private key ដោយប្រើ BIP32។

ប្រើ Python bitcoinlib ឬ ethereum libraries ដើម្បីបង្កើត wallet address ហើយចុះហត្ថលេខាលើ transaction។

ស្រាវជ្រាវអំពី "ECDSA nonce reuse attack"។ តើវាប៉ះពាល់ដល់ PlayStation 3 យ៉ាងដូចម្តេច?

ពន្យល់ពីភាពខុសគ្នារវាង Bitcoin, Ethereum, និង Solana ក្នុងការប្រើប្រាស់គ្រីបតូក្រាហ្វ៊ី។`

},
 
];

export default lessons;
