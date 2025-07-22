const resumeData = {
    // =================================================================================
    // English Content
    // =================================================================================
    en: {
        ui: {
            langButton: 'Language',
            docButton: 'Document',
        },
        about: {
            title: 'About This Page',
            content: 'This page was created to showcase my professional and academic background in multiple languages. It is designed to be clean, responsive, and easy to navigate. The project is built with HTML, CSS, and vanilla JavaScript, emphasizing a modular and maintainable code structure. You can view the source code on [GitHub](https://github.com/johndoe/resume-page).'
        },
        work: {
            name: 'John Doe',
            contact: [
                '<span>(123) 456-7890</span>',
                { text: 'john.doe@email.com', href: 'mailto:john.doe@email.com' },
                { text: 'LinkedIn', href: 'https://linkedin.com/in/johndoe' },
                { text: 'GitHub', href: 'https://github.com/johndoe' }
            ],
            sections: [{
                title: 'Work Experience',
                items: [{
                    title: 'Senior Software Engineer',
                    subtitle: 'Tech Solutions Inc. | San Francisco, CA | 2020 - Present',
                    description: 'Led a team of 5 developers in the creation of a new [cloud-based analytics platform](https://example.com).',
                    points: [
                        'Architected and implemented a microservices-based backend using Node.js and Docker.',
                        'Improved application performance by 30% through query optimization and caching strategies.',
                        'Mentored junior engineers and conducted code reviews to maintain code quality.'
                    ]
                }, {
                    title: 'Software Engineer',
                    subtitle: 'Innovatech Corp. | Palo Alto, CA | 2018 - 2020',
                    description: 'Developed and maintained features for a large-scale e-commerce website.',
                    points: [
                        'Built responsive UI components with React and Redux.',
                        'Wrote unit and integration tests, increasing code coverage to over 90%.',
                    ]
                }]
            }, {
                title: 'Skills',
                items: [{
                    title: 'Programming Languages',
                    subtitle: 'Java, NodeJs, Express, Python, Cpp, html, css',
                }, {
                    title: 'Technologies',
                    subtitle: 'Docker, Git, Github, Reddis, MongoDB, Postgress',
                }]
            }]
        },
        academic: {
            name: 'John Doe',
            contact: [
                '<span>(123) 456-7890</span>',
                { text: 'john.doe.edu@email.com', href: 'mailto:john.doe.edu@email.com' },
                { text: 'Google Scholar', href: 'https://scholar.google.com/citations?user=johndoe' }
            ],
            sections: [{
                title: 'Education',
                items: [{
                    title: 'M.S. in Computer Science',
                    subtitle: 'Stanford University | Stanford, CA | 2016 - 2018',
                    description: 'Thesis: "Efficient Algorithms for Large-Scale Data Processing". GPA: 3.9/4.0',
                }, {
                    title: 'B.S. in Computer Science',
                    subtitle: 'University of California, Berkeley | Berkeley, CA | 2012 - 2016',
                    description: 'Graduated with High Honors. GPA: 3.8/4.0',
                }]
            }, {
                title: 'Publications',
                items: [{
                    title: 'A Novel Approach to Distributed Systems',
                    subtitle: 'Published in [IEEE Transactions on Computers](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=12), 2018',
                    description: 'This paper introduces a new framework for building scalable and fault-tolerant distributed systems.'
                }]
            }, {
                title: 'Teaching Experience',
                items: [{
                    title: 'Teaching Assistant for Data Structures',
                    subtitle: 'Stanford University | 2017',
                    description: 'Led weekly discussion sections for 50+ undergraduate students and graded assignments.'
                }]
            }]
        }
    },
    // =================================================================================
    // Persian (Farsi) Content (Content is the same, but you can translate it)
    // =================================================================================
    fa: {
        ui: {
            langButton: 'زبان',
            docButton: 'سند',
        },
        about: {
            title: 'درباره این صفحه',
            content: 'این صفحه برای نمایش پیشینه حرفه‌ای و آکادمیک من به چندین زبان ایجاد شده است. طراحی آن ساده، واکنش‌گرا و با ناوبری آسان است. کد منبع این پروژه در [گیت‌هاب](https://github.com/johndoe/resume-page) موجود است.'
        },
        work: {
            name: 'جان دو',
            contact: [
                '<span>(۱۲۳) ۴۵۶-۷۸۹۰</span>',
                { text: 'john.doe@email.com', href: 'mailto:john.doe@email.com' },
                { text: 'لینکدین', href: 'https://linkedin.com/in/johndoe' },
                { text: 'گیت‌هاب', href: 'https://github.com/johndoe' }
            ],
            sections: [{
                title: 'سوابق کاری',
                items: [{
                    title: 'مهندس نرم‌افزار ارشد',
                    subtitle: 'شرکت تک سولوشنز | سانفرانسیسکو، کالیفرنیا | ۲۰۲۰ - اکنون',
                    description: 'رهبری یک تیم ۵ نفره از توسعه‌دهندگان در ایجاد یک [پلتفرم تحلیل مبتنی بر ابر](https://example.com).',
                    points: [
                        'معماری و پیاده‌سازی یک بک‌اند مبتنی بر میکروسرویس با استفاده از Node.js و Docker.',
                        'بهبود ۳۰ درصدی عملکرد برنامه از طریق بهینه‌سازی کوئری‌ها و استراتژی‌های کش.',
                        'راهنمایی مهندسان تازه‌کار و بازبینی کد برای حفظ کیفیت کد.'
                    ]
                }, {
                    title: 'مهندس نرم‌افزار',
                    subtitle: 'شرکت اینووتک | پالو آلتو، کالیفرنیا | ۲۰۱۸ - ۲۰۲۰',
                    description: 'توسعه و نگهداری ویژگی‌ها برای یک وب‌سایت تجارت الکترونیک در مقیاس بزرگ.',
                    points: [
                        'ساخت کامپوننت‌های UI واکنش‌گرا با React و Redux.',
                        'نوشتن تست‌های واحد و یکپارچه‌سازی، و افزایش پوشش کد به بیش از ۹۰ درصد.',
                    ]
                }]
            }, {
                title: 'مهارت‌ها',
                items: [{
                    title: 'زبان‌های برنامه‌نویسی',
                    subtitle: 'جاوا اسکریپت، پایتون، جاوا، SQL',
                }, {
                    title: 'تکنولوژی‌ها',
                    subtitle: 'React, Node.js, Docker, AWS, PostgreSQL',
                }]
            }]
        },
        academic: {
            name: 'جان دو',
            contact: [
                 '<span>(۱۲۳) ۴۵۶-۷۸۹۰</span>',
                { text: 'john.doe.edu@email.com', href: 'mailto:john.doe.edu@email.com' },
                { text: 'گوگل اسکالر', href: 'https://scholar.google.com/citations?user=johndoe' }
            ],
            sections: [{
                title: 'تحصیلات',
                items: [{
                    title: 'کارشناسی ارشد علوم کامپیوتر',
                    subtitle: 'دانشگاه استنفورد | استنفورد، کالیفرنیا | ۲۰۱۶ - ۲۰۱۸',
                    description: 'پایان‌نامه: "الگوریتم‌های کارآمد برای پردازش داده‌های بزرگ". معدل: ۳.۹/۴.۰',
                }, {
                    title: 'کارشناسی علوم کامپیوتر',
                    subtitle: 'دانشگاه کالیفرنیا، برکلی | برکلی، کالیفرنیا | ۲۰۱۲ - ۲۰۱۶',
                    description: 'فارغ‌التحصیل با درجه عالی. معدل: ۳.۸/۴.۰',
                }]
            }, {
                title: 'مقالات منتشر شده',
                items: [{
                    title: 'رویکردی نوین به سیستم‌های توزیع‌شده',
                    subtitle: 'منتشر شده در [IEEE Transactions on Computers](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=12), 2018',
                    description: 'این مقاله یک چارچوب جدید برای ساخت سیستم‌های توزیع‌شده مقیاس‌پذیر و مقاوم در برابر خطا معرفی می‌کند.'
                }]
            }, {
                title: 'سوابق تدریس',
                items: [{
                    title: 'دستیار آموزشی برای درس ساختمان داده‌ها',
                    subtitle: 'دانشگاه استنفورد | ۲۰۱۷',
                    description: 'برگزاری جلسات بحث هفتگی برای بیش از ۵۰ دانشجوی کارشناسی و نمره‌دهی به تکالیف.'
                }]
            }, {
                title: 'سوابق تدریس',
                items: [{
                    title: 'دستیار آموزشی برای درس ساختمان داده‌ها',
                    subtitle: 'دانشگاه استنفورد | ۲۰۱۷',
                    description: 'برگزاری جلسات بحث هفتگی برای بیش از ۵۰ دانشجوی کارشناسی و نمره‌دهی به تکالیف.'
                }]
            }]
        }
    },
    // =================================================================================
    // German Content (Content is the same, but you can translate it)
    // =================================================================================
    de: {
        ui: {
            langButton: 'Sprache',
            docButton: 'Dokument',
        },
        about: {
            title: 'Über diese Seite',
            content: 'Diese Seite wurde erstellt, um meinen beruflichen und akademischen Werdegang in mehreren Sprachen zu präsentieren. Sie ist übersichtlich, responsiv und einfach zu navigieren. Der Quellcode ist auf [GitHub](https://github.com/johndoe/resume-page) verfügbar.'
        },
        work: {
            name: 'John Doe',
            contact: [
                '<span>(123) 456-7890</span>',
                { text: 'john.doe@email.com', href: 'mailto:john.doe@email.com' },
                { text: 'LinkedIn', href: 'https://linkedin.com/in/johndoe' },
                { text: 'GitHub', href: 'https://github.com/johndoe' }
            ],
            sections: [{
                title: 'Berufserfahrung',
                items: [{
                    title: 'Senior Software-Ingenieur',
                    subtitle: 'Tech Solutions Inc. | San Francisco, CA | 2020 - Heute',
                    description: 'Leitung eines 5-köpfigen Entwicklerteams bei der Erstellung einer neuen [Cloud-basierten Analyseplattform](https://example.com).',
                    points: [
                        'Architektur und Implementierung eines auf Microservices basierenden Backends mit Node.js und Docker.',
                        'Verbesserung der Anwendungsleistung um 30% durch Abfrageoptimierung und Caching-Strategien.',
                        'Betreuung von Nachwuchsingenieuren und Durchführung von Code-Reviews zur Sicherstellung der Code-Qualität.'
                    ]
                }, {
                    title: 'Software-Ingenieur',
                    subtitle: 'Innovatech Corp. | Palo Alto, CA | 2018 - 2020',
                    description: 'Entwicklung und Wartung von Funktionen für eine große E-Commerce-Website.',
                    points: [
                        'Erstellung responsiver UI-Komponenten mit React und Redux.',
                        'Schreiben von Unit- und Integrationstests, wodurch die Code-Abdeckung auf über 90% erhöht wurde.',
                    ]
                }]
            }, {
                title: 'Fähigkeiten',
                items: [{
                    title: 'Programmiersprachen',
                    subtitle: 'JavaScript, Python, Java, SQL',
                }, {
                    title: 'Technologien',
                    subtitle: 'React, Node.js, Docker, AWS, PostgreSQL',
                }]
            }]
        },
        academic: {
            name: 'John Doe',
            contact: [
                '<span>(123) 456-7890</span>',
                { text: 'john.doe.edu@email.com', href: 'mailto:john.doe.edu@email.com' },
                { text: 'Google Scholar', href: 'https://scholar.google.com/citations?user=johndoe' }
            ],
            sections: [{
                title: 'Ausbildung',
                items: [{
                    title: 'M.S. in Informatik',
                    subtitle: 'Stanford University | Stanford, CA | 2016 - 2018',
                    description: 'Masterarbeit: "Effiziente Algorithmen für die Verarbeitung großer Datenmengen". Notendurchschnitt: 3.9/4.0',
                }, {
                    title: 'B.S. in Informatik',
                    subtitle: 'University of California, Berkeley | Berkeley, CA | 2012 - 2016',
                    description: 'Abschluss mit Auszeichnung. Notendurchschnitt: 3.8/4.0',
                }]
            }, {
                title: 'Veröffentlichungen',
                items: [{
                    title: 'Ein neuer Ansatz für verteilte Systeme',
                    subtitle: 'Veröffentlicht in [IEEE Transactions on Computers](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=12), 2018',
                    description: 'Dieses Papier stellt ein neues Framework für die Erstellung skalierbarer und fehlertoleranter verteilter Systeme vor.'
                }]
            }, {
                title: 'Lehrerfahrung',
                items: [{
                    title: 'Lehrassistent für Datenstrukturen',
                    subtitle: 'Stanford University | 2017',
                    description: 'Leitung wöchentlicher Diskussionsrunden für über 50 Bachelor-Studenten und Benotung von Aufgaben.'
                }]
            }]
        }
    }
};
