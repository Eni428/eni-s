// Define translations for each language
const translations = {
    en: {
        home: "Home",
        about: "About",
        resume: "Resume",
        projects: "Projects",
        certifications: "Certifications",
        contact:"Contact",
        degree:"Bachelor of Computer Science and Artificial Intelligence",
        skills: "Skills",
        data_analysis: "Data Analysis",
        cybersecurity: "Cybersecurity",
        machine_learning: "Machine Learning",
        html: "Proficient In HTML, CSS, And JavaScript",
        language: "Strong Understanding Of Database Languages, Including SQL",
        oriented: "Detail-oriented And Highly Organized",
        attitude: "Positive Attitude",
        report: "Analyzed And Reported On Campaign Performance",
        recommendations: "Data-driven Recommendations For Optimization",
        teamwork: "Teamwork And Collaboration",
        about_me: "About Me",
        descriptions_for_me: "Hello! I'm Enisa Shahini, a passionate Computer Science and Artificial Intelligence student. With a strong foundation in programming, data analysis, and cybersecurity, I thrive on solving complex problems and continually expanding my skill set. My goal is to leverage technology to make a meaningful impact. In addition to my academic pursuits, I enjoy working on innovative projects that challenge my creativity and technical abilities.",
        my_resume: "My Resume",
        my_resume_heading: "My Resume",
        resume_description: "Computer Science and Artificial Intelligence is a dynamic field that integrates computational theories and advanced algorithms to develop innovative solutions for complex problems across various domains. In this field, data and adaptability are two key elements. Data is essential for training models and creating intelligent systems, while adaptability determines their effectiveness and relevance in real-world applications.",
        education_title: "Education",
        university_name: "Western Balkans University",
        university_description: "Western Balkans University | Bachelor in Computer Science and AI | Faculty of Economics, Technology and Innovation | Department of Technology and Business. Second-year student of Bachelor in Biomedical Engineering, class of 2022-2025 <br><br> <i>Relevant Courseworks: Introduction to Programming, Database Systems, Logical Circuits, Object Oriented Programming, Web Programming, Discrete Mathematics, ML, Data Structures and Algorithms, Wireless and Mobile Networks, Technology and Interactive Multimedia, Artificial Intelligence, Computer Networks.",
        high_school_name: "Said Najdeni",
        high_school_description: "High School Diploma class of 2019-2022",
        professional_experience_title: "Professional Experience",
        project_analysis_title: "Database Project Analysis (2022/2023)",
        project_analysis_description: "<In this project, I developed a comprehensive database management system that effectively organizes, stores, and retrieves large sets of data. This experience enhanced my skills in database design, SQL querying, and data normalization.I implemented data integrity measures to ensure accuracy and consistency within the database, utilizing constraints and validation rules. Additionally, I employed indexing techniques to optimize query performance and improve data retrieval speed.Through this project, I gained hands-on experience with data analysis, enabling me to extract meaningful insights and generate reports that inform decision-making processes.",
        logic_circuit_lab_title: "Logic Circuit Laboratory (2023)",
        logic_circuit_lab_description: "In the Logic Circuit Laboratory, I engaged in designing and testing various digital circuits using logic gates such as AND, OR, NOT, and XOR. This hands-on experience allowed me to understand the fundamental principles of digital electronics.I conducted experiments to analyze the behavior of different circuit configurations, such as combinational and sequential circuits. By constructing truth tables and simulating circuits, I learned how to predict and verify circuit functionality.Additionally, I utilized simulation software to model complex circuits, enabling me to visualize circuit operations and troubleshoot issues effectively before physical implementation.",
        salary_system_project_title: "Salary System Project (2023)",
        salary_system_project_description: "In this Java project, I developed a comprehensive Salary Management System that automates the process of calculating employee salaries based on hours worked, overtime, and deductions. This experience enhanced my programming skills and understanding of object-oriented principles.I implemented features such as employee data management, payroll calculation, and report generation. By utilizing Javas built-in libraries, I ensured efficient data handling and streamlined the user interface for better usability.Through this project, I also gained experience in database connectivity, allowing the application to store employee information and salary records in a relational database, facilitating easy retrieval and analysis of payroll data.",
        internship_title: "IT Office and Library Assistant Internship (Dec 2023 - June 2024)",
        internship_description: "Assisted in managing daily operations of the IT office, providing technical support to faculty and students, and ensuring efficient use of IT resources.Collaborated with library staff to enhance digital resource accessibility, contributing to improved user experience and information retrieval.Gained hands-on experience in troubleshooting hardware and software issues, which sharpened my problem-solving skills and technical knowledge.Participated in the development and implementation of training sessions for students on using library databases and digital tools.",
        Hands:"Hands-on Project",
        salary_title: "Salary Management System",
        salary_description:"The Salary Management System is a Java-based application designed to streamline the management of employee salary data. Using object-oriented programming principles, this system enables users to efficiently add, update, and retrieve employee records, calculate salaries, and generate payroll reports. Key features include employee management, salary calculations based on various parameters, and robust data persistence through file handling or databases. This project provides hands-on experience in Java programming, database management, and software development best practices.",
        FMtitle:"Football Club Management (Korabi)",
        FMdes:"This CRUD application was developed for managing the football team 'Korabi' from Dibra. Built with JavaFX and MySQL, the system features a login and new user registration screen. Users can manage team information, including player ID, name, phone number, and position, using standard CRUD operations. Additional functionality includes managing player wages, and tracking match stats such as goals, assists, and points. This project provides hands-on experience in desktop GUI development, database integration, and handling real-world data for a football club.",
        Housing_t:"Housing in Mexico",
        Housing_d:"I worked with a dataset of 21,000 properties to analyze how real estate prices are influenced by size and location. I imported, cleaned, and explored the data, focusing on correlations between property size, location, and price. Through this project, I gained hands-on experience with data analysis, property price modeling, and statistical correlations using Python libraries such as Pandas and Matplotlib.",
        apartment_t:"Apartment Sales in Buenos Aires",
        apartment_d:"I built a linear regression model to predict apartment prices and developed a data pipeline to handle missing values. Additionally, I enhanced the model by addressing overfitting and improving its overall performance. This project focused on building and refining machine learning models using Python and libraries such as Scikit-learn and NumPy.",
        air_t:"Air Quality in Nairobi",
        air_d:"I developed an ARMA time-series model to predict air quality levels in Nairobi using a comprehensive dataset sourced from MongoDB. This project involved extensive data preprocessing and analysis to identify key trends and patterns in air quality. To enhance the accuracy of my predictions, I performed hyperparameter tuning, experimenting with various model parameters to find the optimal settings. Ultimately, this project aimed to provide valuable insights into air quality trends and inform public health initiatives.",
        earthquake_t:"Earthquake Damage in Nepal",
        earthquake_d:"I built logistic regression and decision tree models to predict the extent of earthquake damage to buildings in Nepal. Through this analysis, I identified potential biases within the dataset, which could significantly impact the accuracy of the model predictions. By addressing these biases, I aimed to improve the reliability of the predictions and provide actionable insights for disaster response strategies.",
        bankruptcy_t:"Bankruptcy in Poland",
        bankruptcy_d:"I implemented random forest and gradient boosting models to predict company bankruptcy, focusing on performance metrics such as precision and recall. By addressing imbalanced data through resampling techniques, I improved the robustness of the models. This analysis aimed to provide valuable insights for stakeholders to make informed decisions regarding risk management.",
        customer_t:"Customer Segmentation in the US",
        customer_d:"I created a k-means clustering model to segment US consumers based on purchasing behavior and demographic factors. To visualize the clusters effectively, I employed Principal Component Analysis (PCA) for dimensionality reduction. Furthermore, I built an interactive dashboard using Plotly Dash, allowing stakeholders to explore insights and trends within the consumer segments.",
        ab_t:"A/B Testing at WQU",
        ab_d:"I conducted a chi-square test to evaluate the impact of email campaigns on program enrollment rates. In addition, I implemented an ETL (Extract, Transform, Load) process using custom Python classes to streamline data handling. I designed a three-tiered interactive data application, providing users with a dynamic interface to visualize A/B testing results.",
        volatility_t: "Volatility Forecasting in India",
        volatility_d:"I created a GARCH time-series model to forecast stock market volatility, utilizing stock data acquired through an API. I then developed my own API to serve the predictions, allowing users to access volatility forecasts seamlessly. To ensure data persistence, I stored the relevant data in a SQLite database for further analysis and reporting.",
        prefix_t:"Prefix Expression Evaluation",
        prefix_d:"This project involves evaluating prefix expressions using a stack-based approach in Java. The program reads a prefix expression from user input, splits it into tokens, and processes these tokens to compute the result by performing operations on operands as they are encountered. The final result is then displayed to the user, providing an intuitive understanding of prefix notation.",
        web_server_t:"Web Server",
        web_server_d:"This web server project involves creating a basic HTTP server capable of handling client requests and serving static files. The server listens for incoming connections, processes HTTP requests by parsing the request method and URL, and responds with appropriate content or status codes. Future enhancements could include features such as routing, middleware, and dynamic content generation based on client input.",
        cisco_t:"Cisco Packet Tracer Network",
        cisco_d:"In this configuration process, I set up a structured, efficient, and secure network for the university's campus by implementing separate VLANs for each department. Utilizing Cisco commands, I configured routers, switches, and DHCP services to enable effective communication among devices both internally and externally. This network design accommodates the diverse needs of each department while maintaining robust performance and security standards.",
        creativity_t:"Creativity System with Graphic Design",
        creativity_d:"I developed a creativity system using C++ that incorporates graphical visualization with GL and GLUT, resulting in over 10 unique visualization programs. Each program showcases various visual effects and interactions, enhancing the user experience. This project aims to explore the intersection of programming and artistic expression, promoting creativity through technology.",
        face_t:"Face Recognition Project",
        face_d:"I created a real-time face recognition system using Python, designed to capture and identify faces seamlessly. The camera setup detects faces in real time, labeling the first face it sees as 'unknown.' When a new face is detected, the system saves the image and assigns a name, allowing it to recognize returning individuals using facial embeddings. The system logs each recognized face, noting the duration of their presence and the time of recognition, storing this information in a Google Sheet for easy access. To ensure privacy, users have the option to delete stored faces at any time.",
        Certificate:"My Certifications",





    },
    al: {
        home: "Kreu",
        about: "Rreth meje",
        resume: "CV",
        projects: "Projekte",
        certifications: "Certifikata",
        contact: "Kontakt", // corrected from contanct
        degree: "Bacelor në Shkenca Kompjuterike dhe Inteligjencë Artificiale",
        skills: "Aftësi",
        data_analysis: "Analiza e të Dhënave",
        cybersecurity: "Siguria Kibernetike",
        machine_learning: "Mësimi i Makinerive",
        html: "Ekipi i HTML, CSS, dhe JavaScript",
        language: "Kuptim i Fortë i Gjuhëve të Bazës së Dhënash, Duke Përfshirë SQL",
        oriented: "I Orientuar në Detaje dhe Shumë i Organizuar",
        attitude: "Qasje Pozitive",
        report: "Analizuar dhe Raportuar mbi Performancën e Fushatave",
        recommendations: "Rekomandime të Bazuar në të Dhëna për Optimizimin",
        teamwork: "Bashkëpunimi në Ekip",
        about_me: "Rreth Meje",
        descriptions_for_me: "Përshëndetje! Unë jam Enisa Shahini, një studente e apasionuar për Shkencat Kompjuterike dhe Inteligjencën Artificiale. Me një bazë të fortë në programim, analizën e të dhënave dhe sigurinë kibernetike, unë përfitoj nga zgjidhja e problemeve komplekse dhe vazhdoj të zgjeroj aftësitë e mia. Qëllimi im është të shfrytëzoj teknologjinë për të bërë një ndikim të rëndësishëm. Përveç ndjekjes sime akademike, unë e shijoj punën në projekte inovative që sfidojnë kreativitetin dhe aftësitë e mia teknike.",
        my_resume: "CV-ja Ime",
        my_resume_heading: "CV-ja Ime",
        resume_description: "Shkenca Kompjuterike dhe Inteligjenca Artificiale është një fushë dinamike që integron teoritë kompjuterike dhe algoritmet e avancuara për të zhvilluar zgjidhje inovative për probleme komplekse nëpërmjet fusha të ndryshme. Në këtë fushë, të dhënat dhe adaptueshmëria janë dy elemente kyçe. Të dhënat janë thelbësore për trajnimet e modeleve dhe krijimin e sistemeve inteligjente, ndërsa adaptueshmëria përcakton efektivitetin dhe rëndësinë e tyre në aplikimet e botës reale.",
        education_title: "Edukimi",
        university_name: "Universiteti i Ballkanit Perëndimor",
        university_description: "Universiteti i Ballkanit Perëndimor | Bachelor në Shkencat Kompjuterike dhe AI | Fakulteti i Ekonomisë, Teknologjisë dhe Inovacionit | Departamenti i Teknologjisë dhe Biznesit. Student i vitit të dytë në Bachelor në Inxhinieri Biomedikale, klasa e 2022-2025 <br><br> <i>Kursi të Rëndësishëm</i>: Hyrje në Programim, Sistemet e të Dhënave, Rrymat Logjike, Programimi i Orientuar nga Objekti, Programimi në Web, Matematika Diskrete, ML, Strukturat e të Dhënave dhe Algoritmet, Rrjetet Wireless dhe Mobile, Teknologjia dhe Multimedia Interaktive, Inteligjenca Artificiale, Rrjetet Kompjuterike.",
        high_school_name: "Said Najdeni",
        high_school_description: "Diploma e Shkollës së Mesme, klasa e 2019-2022",
        professional_experience_title: "Eksperienca Profesionale",
        project_analysis_title: "Analiza e Projektit të Bazës së të Dhënave (2022/2023)",
        project_analysis_description: "Në këtë projekt, zhvillova një sistem të plotë menaxhimi të bazës së të dhënave që organizon, ruan dhe rikuperon në mënyrë efektive grupe të mëdha të dhënash. Kjo përvojë përmirësoi aftësitë e mia në dizajnin e bazave të të dhënave, kërkimin SQL dhe normalizimin e të dhënave.Implementova masa të integritetit të të dhënave për të siguruar saktësi dhe qëndrueshmëri brenda bazës së të dhënave, duke përdorur kufizime dhe rregulla validimi. Për më tepër, përdora teknika indekse për të optimizuar performancën e kërkimeve dhe për të përmirësuar shpejtësinë e rikuperimit të të dhënave.Nëpërmjet këtij projekti, fitova përvojë praktike me analizën e të dhënave, duke më mundësuar të nxjerr përfundime të vlefshme dhe të gjeneroj raporte që informojnë proceset e vendimmarrjes.",
        logic_circuit_lab_title: "Laboratori i Rryma Logjike (2023)",
        logic_circuit_lab_description: "Në Laboratorin e Rrymave Logjike, angazhova në dizajnimin dhe testimin e rrymave të ndryshme digjitale duke përdorur porta logjike si AND, OR, NOT, dhe XOR. Kjo përvojë praktike më lejoi të kuptoj parimet themelore të elektronikës digjitale.Kam kryer eksperimente për të analizuar sjelljen e konfigurimeve të ndryshme të rrymave, siç janë rrymat kombinatorike dhe sekondar. Duke ndërtuar tabela të vërtetës dhe simuluar rrymat, mësova se si të parashikoj dhe verifikoj funksionalitetin e rrymave.Për më tepër, përdora softuerin e simulimit për të modeluar rryma komplekse, duke më mundësuar të vizualizoj operacionet e rrymave dhe të zgjidh problemet në mënyrë efektive para zbatimit fizik.",
        salary_system_project_title: "Projekti i Sistem Menaxhimi të Pagave (2023)",
        salary_system_project_description: "Në këtë projekt Java, zhvillova një Sistem Menaxhimi të Pagave që automatizon procesin e llogaritjes së pagave të punonjësve bazuar në orët e punuara, orët e tepërta dhe zbritjet. Kjo përvojë përmirësoi aftësitë e mia në programim dhe kuptimin e parimeve të orientuara nga objekti.Implementova veçori si menaxhimi i të dhënave të punonjësve, llogaritja e pagave dhe gjenerimi i raporteve. Duke përdorur bibliotekat e ndërtuara në Java, sigurova menaxhimin e efektshëm të të dhënave dhe optimizimin e ndërfaqes së përdoruesit për një përdorim më të mirë.Nëpërmjet këtij projekti, fitova gjithashtu përvojë në lidhjen me bazat e të dhënave, duke lejuar aplikacionin të ruajë informacionin e punonjësve dhe rekordet e pagave në një bazë të dhënash relacionale, duke lehtësuar rikuperimin dhe analizimin e të dhënave të pagave.",
        internship_title: "Praktika si Asistent në Zyrën e IT dhe Bibliotekë (Dhjetor 2023 - Qershor 2024)",
        internship_description: "Pjesëmarrës në menaxhimin e operacioneve të përditshme të zyrës së IT, duke ofruar mbështetje teknike për fakultetin dhe studentët, dhe duke siguruar përdorimin efikas të burimeve të IT.Bashkëpunova me stafin e bibliotekës për të përmirësuar aksesin në burimet dixhitale, duke kontribuar në përmirësimin e përvojës së përdoruesit dhe rikuperimin e informacionit.Fitova përvojë praktike në zgjidhjen e problemeve me pajisjet dhe softuerin, që përmirësoi aftësitë e mia të zgjidhjes së problemeve dhe njohuritë teknike.Mora pjesë në zhvillimin dhe zbatimin e sesioneve trajnimi për studentët për përdorimin e bazave të të dhënave të bibliotekës dhe mjeteve dixhitale.",
        Hands:"Projekt Praktik",
        salary_title: "Sistem Menaxhimi të Pagave",
        salary_description:"Sistemi i Menaxhimit të Pagave është një aplikacion i bazuar në Java, i krijuar për të thjeshtuar menaxhimin e të dhënave të pagave të punonjësve. Duke përdorur parimet e programimit të orientuar nga objektet, ky sistem u mundëson përdoruesve të shtojnë, përditësojnë dhe tërheqin në mënyrë efikase regjistrimet e punonjësve, të llogarisin pagat dhe të gjenerojnë raporte për pagat. Karakteristikat kryesore përfshijnë menaxhimin e punonjësve, llogaritjet e pagave bazuar në parametra të ndryshëm dhe ruajtjen e qëndrueshme të të dhënave përmes trajtimit të skedarëve ose bazave të të dhënave. Ky projekt ofron përvojë praktike në programimin me Java, menaxhimin e bazave të të dhënave dhe praktikat më të mira të zhvillimit të softuerit",
        FMtitle:"Menaxhimi i Klubit të Futbollit (Korabi)",
        FMdes:"Kjo aplikacion CRUD u zhvillua për menaxhimin e ekipit të futbollit 'Korabi' nga Dibra. I ndërtuar me JavaFX dhe MySQL, sistemi përmban një ekran për hyrje dhe regjistrim të përdoruesve të rinj. Përdoruesit mund të menaxhojnë informacionin e ekipit, duke përfshirë ID-në e lojtarit, emrin, numrin e telefonit dhe pozicionin, duke përdorur operacionet standarde CRUD. Funksionaliteti shtesë përfshin menaxhimin e pagave të lojtarëve dhe gjurmimin e statistikave të ndeshjeve, si golat, asistimet dhe pikët. Ky projekt ofron përvojë praktike në zhvillimin e GUI për desktop, integrimin e bazave të të dhënave dhe trajtimin e të dhënave reale për një klub futbolli.",
        Housing_t:"Strehimi në Meksikë",
        Housing_d:"Kam punuar me një dataset prej 21,000 pronash për të analizuar se si çmimet e pasurive të patundshme ndikohet nga madhësia dhe vendndodhja. Kam importuar, pastruar dhe eksploruar të dhënat, duke u fokusuar në korrelacionet midis madhësisë së pronës, vendndodhjes dhe çmimit. Përmes këtij projekti, kam fituar përvojë praktike në analizën e të dhënave, modelimin e çmimeve të pronave dhe korrelacionet statistikore duke përdorur biblioteka të Python-it si Pandas dhe Matplotlib.",
        apartment_t:"Shitjet e Apartamenteve në Buenos Aires",
        apartment_d:"Ndërtova një model regresioni linear për të parashikuar çmimet e apartamenteve dhe zhvillova një pipeline të të dhënave për të trajtuar vlerat që mungojnë. Përveç kësaj, përmirësova modelin duke adresuar mbingarkimin dhe duke rritur performancën e tij të përgjithshme. Ky projekt u fokusua në ndërtimin dhe përmirësimin e modeleve të të mësuarit makinerik duke përdorur Python dhe bibliotekat si Scikit-learn dhe NumPy.",
        air_t:"Cilësia e Ajrit në Nairobi",
        air_d:"Zhvillova një model të serive kohore ARMA për të parashikuar nivelet e cilësisë së ajrit në Nairobi duke përdorur një dataset të gjerë të marrë nga MongoDB. Ky projekt përfshiu përpunimin dhe analizimin e të dhënave për të identifikuar tendencat dhe modelet kryesore të cilësisë së ajrit. Për të përmirësuar saktësinë e parashikimeve, kreva optimizimin e hiperparametrave, duke eksperimentuar me parametra të ndryshëm të modelit për të gjetur cilësimet optimale. Në fund, ky projekt synoi të ofrojë njohuri të vlefshme mbi tendencat e cilësisë së ajrit dhe të ndihmojë iniciativat e shëndetit publik.",
        earthquake_t:"Dëmet nga Tërmeti në Nepal",
        earthquake_d:"Ndërtova modele të regresionit logjistik dhe pemës vendimmarrëse për të parashikuar shkallën e dëmeve të shkaktuara nga tërmeti në ndërtesat në Nepal. Gjatë kësaj analize, identifikova paragjykime të mundshme brenda datasetit, të cilat mund të ndikojnë ndjeshëm në saktësinë e parashikimeve të modelit. Duke adresuar këto paragjykime, synova të përmirësoj besueshmërinë e parashikimeve dhe të ofroj njohuri të vlefshme për strategjitë e përgjigjes ndaj fatkeqësive.",
        bankruptcy_t:"Falimentimi në Poloni",
        bankruptcy_d:"Implementova modele të pyllit të rastësishëm dhe të përmirësimit gradues për të parashikuar falimentimin e kompanive, duke u fokusuar në metrike të performancës si precizioni dhe kujtesa. Duke trajtuar të dhënat e pabalancuara përmes teknikave të rishembullimit, përmirësova qëndrueshmërinë e modeleve. Kjo analizë synonte të ofronte njohuri të vlefshme për palët e interesuara që të marrin vendime të informuara në lidhje me menaxhimin e rrezikut.",
        customer_t:"Segmentimi i Klientëve në SHBA",
        customer_d:"Krijova një model grumbullimi k-means për të segmentuar konsumatorët amerikanë bazuar në sjelljen e blerjeve dhe faktorët demografikë. Për të visualizuar grumbujt në mënyrë efektive, përdora Analizën e Komponentëve Kryesorë (PCA) për reduktimin e dimensionalitetit. Për më tepër, ndërtova një panel interaktiv duke përdorur Plotly Dash, duke lejuar palët e interesuara të eksplorojnë njohuritë dhe trendet brenda segmenteve të konsumatorëve.",
        ab_t:"Testimi A/B në WQU",
        ab_d:"Kryeva një test chi-square për të vlerësuar ndikimin e fushatave me email në normat e regjistrimit në programe. Për më tepër, implementova një proces ETL (Nxjerrje, Transformim, Ngarkim) duke përdorur klasa të personalizuara Python për të thjeshtuar menaxhimin e të dhënave. Kam dizajnuar një aplikacion interaktiv të dhënash me tri nivele, duke ofruar përdoruesve një ndërfaqe dinamike për të visualizuar rezultatet e testimit A/B.",
        volatility_t: "Parashikimi i Volatilitetit në Indi",
        volatility_d: "Krijova një model GARCH të serive kohore për të parashikuar volatilitetin e tregut të aksioneve, duke përdorur të dhëna aksionesh të marra përmes një API. Më pas, zhvillova API-në time për të shërbyer parashikimet, duke lejuar përdoruesit të aksesojnë parashikimet e volatilitetit pa ndihmë. Për të siguruar qëndrueshmërinë e të dhënave, ruajta të dhënat përkatëse në një bazë të dhënash SQLite për analiza dhe raportime të mëtejshme.",
        prefix_t: "Vlerësimi i Shprehjeve Prefiks",
        prefix_d: "Ky projekt përfshin vlerësimin e shprehjeve prefiks duke përdorur një qasje të bazuar në stack në Java. Programi lexon një shprehje prefiks nga inputi i përdoruesit, e ndan atë në pjesë, dhe proceson këto pjesë për të llogaritur rezultatin duke kryer operacione mbi operandët ndërsa ata hasen. Rezultati përfundimtar pastaj shfaqet për përdoruesin, duke ofruar një kuptim intuitiv të notacionit prefiks.",
        web_server_t: "Serveri Web",
        web_server_d: "Ky projekt serveri web përfshin krijimin e një serveri HTTP bazik në gjendje të trajtojë kërkesat e klientëve dhe të shërbejë skedarë statikë. Serveri dëgjon për lidhje që vijnë, proceson kërkesat HTTP duke analizuar metodën e kërkesës dhe URL-në, dhe përgjigjet me përmbajtje ose kode statusi të përshtatshme. Përmirësime të ardhshme mund të përfshijnë veçori të tilla si rrugëzimi, middleware, dhe gjenerimi i përmbajtjes dinamike në bazë të inputit të klientit.",
        cisco_t: "Rrjeti Cisco Packet Tracer",
        cisco_d: "Në këtë proces konfigurimi, krijova një rrjet të strukturuar, efikas dhe të sigurt për kampusin e universitetit duke implementuar VLAN të veçanta për secilën departament. Duke përdorur komandat Cisco, konfigurava routerat, switch-ët dhe shërbimet DHCP për të mundësuar komunikimin efektiv midis pajisjeve si brenda ashtu edhe jashtë. Ky dizajn rrjeti i përshtatet nevojave të ndryshme të çdo departamenti ndërsa ruan standardet e forta të performancës dhe sigurisë.",
        creativity_t: "Sistemi i Kreativitetit me Dizajn Grafik",
        creativity_d: "Krijova një sistem kreativiteti duke përdorur C++ që përfshin vizualizimin grafik me GL dhe GLUT, duke rezultuar në mbi 10 programe unike vizualizimi. Çdo program tregon efekte vizuale dhe ndërveprime të ndryshme, duke përmirësuar përvojën e përdoruesit. Ky projekt ka si qëllim të eksplorojë ndërthurjen e programimit dhe shprehjes artistike, duke promovuar kreativitetin përmes teknologjisë.",
        face_t: "Projekti i Njohjes së Fytyrave",
        face_d: "Krijova një sistem njohjeje të fytyrës në kohë reale duke përdorur Python, i projektuar për të kapur dhe identifikuar fytyrat pa probleme. Konfigurimi i kamerës zbulon fytyrat në kohë reale, duke e etiketuar fytyrën e parë që sheh si 'të panjohur.' Kur zbulon një fytyrë të re, sistemi ruan imazhin dhe i cakton një emër, duke lejuar që të njohë individët që kthehen duke përdorur embedding të fytyrës. Sistemi regjistron çdo fytyrë të njohur, duke shënuar kohën e pranisë së tyre dhe kohën e njohjes, duke e ruajtur këtë informacion në një Google Sheet për qasje të lehtë. Për të siguruar privatësinë, përdoruesit kanë mundësinë të fshijnë fytyrat e ruajtura në çdo moment.",
        Certificate:"Certifikatat e Mia",


    }
    
};

// Function to change language
function switchLanguage(lang) {
    // Get all elements with data-key attributes
    const translatableElements = document.querySelectorAll('[data-key]');
    
    // Loop through each element and update its text content
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
}

// Event listeners for language buttons
document.getElementById('translate-alb').addEventListener('click', function () {
    switchLanguage('al');
});

document.getElementById('translate-eng').addEventListener('click', function () {
    switchLanguage('en');
});

const cards = document.querySelectorAll('.card');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
let currentIndex = 0;

function updateCards() {
    const totalCards = cards.length;
    const visibleCards = 3; // Number of cards to display at once

    // Calculate the transform value based on the current index
    const transformValue = -(currentIndex * (300 + 20)); // 300 is card width + 20 is margin

    document.querySelector('.card-container').style.transform = `translateX(${transformValue}px)`;

    // Toggle button visibility based on current index
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex >= totalCards - visibleCards ? 'none' : 'block';
}

// Event listeners for buttons
nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        updateCards();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
    }
});

// Initial update
updateCards();
 

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Toggle the 'active' class on the nav list
});