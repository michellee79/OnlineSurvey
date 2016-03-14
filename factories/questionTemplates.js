App.factory('QuestionTemplates', ['models.histogram', function(histogram_model)
{
    var font_size = [
        'small',
        'normal',
        'large',
        'xlarge',
        'xxlarge'
    ];

    var validation_numeration = [
        'Number',
        'Upper Alpha',
        'Lower Alpha'
    ];

    var grade_levels = [
        'None',
        'Pre-K',
        'K',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        'Higher-End'
    ];

    var subject_areas = [
        'None',
        'Other',
        'Health & Physical Recreation',
        'Language Arts',
        'Mathematics',
        'Professional Development',
        'Science',
        'Social Studies',
        'Special Education',
        'Technology',
        'Arts'
    ];

    var learn_objectives = [
        "Learn objectives > Common core > Mathematics (2010) > Grade 6 > MA.6.CCSS.Math.Content.6.NS > MA.6.CCSS.Math.Content.6.NS.B",
        "MA.6.CCSS.Math.Content.6.NS.B.2 - Fluently divide multi-digit numbers using the standard algorithm.",
        "MA.6.CCSS.Math.Content.6.NS.B.3 - Fluently add, substract, multiply, and divide multi-digit decimals using the standard algorithm for each operation."
    ];

    var difficulty_levels = [
        "Easy",
        "Normal",
        "Hard"
    ];

    var scoring_types = [
        {
            id: "matchAnyWord",
            value: "Match any word"
        },
        {
            id: "matchAllWords",
            value: "Match all words"
        },
        {
            id: "exactMatch",
            value: "Exact match"
        }
    ];

    var organizers = [
        {
            "name" : "Empty Rectangle",
            "image": "app/data/graphicorganizers/rectangle.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/rectangle.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Beginning/Middle/Ending",
            "image": "app/data/graphicorganizers/begin-mid-end.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/begin-mid-end.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Cause and Effect",
            "image": "app/data/graphicorganizers/cause-effect.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/cause-effect.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Concept and Event 1",
            "image": "app/data/graphicorganizers/concept1.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/concept1.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Concept and Event 2",
            "image": "app/data/graphicorganizers/concept2.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/concept2.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Evidence and Conclusion 1",
            "image": "app/data/graphicorganizers/evidence-conclusion-1.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/evidence-conclusion-1.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Evidence and Conclusion 2",
            "image": "app/data/graphicorganizers/evidence-conclusion-2.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/evidence-conclusion-2.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Reasons and Facts 1",
            "image": "app/data/graphicorganizers/reasons-facts-1.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/reasons-facts-1.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Reasons and Facts 2",
            "image": "app/data/graphicorganizers/reasons-facts-2.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/reasons-facts-2.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Sequence (First, then, next)",
            "image": "app/data/graphicorganizers/sequence.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/sequence.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Subject-Part 1",
            "image": "app/data/graphicorganizers/subject-part-1.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-1.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Subject-Part 2",
            "image": "app/data/graphicorganizers/subject-part-2.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-2.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Subject-Part 3",
            "image": "app/data/graphicorganizers/subject-part-3.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-3.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Synonym-Antonym",
            "image": "app/data/graphicorganizers/synonym-antonym.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/synonym-antonym.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Topic-Main Idea",
            "image": "app/data/graphicorganizers/topic-mainidea.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/topic-mainidea.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Main Idea 1",
            "image": "app/data/graphicorganizers/mainidea-1.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/mainidea-1.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Main Idea 2",
            "image": "app/data/graphicorganizers/mainidea-2.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/mainidea-2.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Story Characters",
            "image": "app/data/graphicorganizers/characters-1.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/characters-1.png\" style=\"width:100%\" />"
        },
        {
            "name" : "US Map",
            "image": "app/data/graphicorganizers/us_map.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/us_map.png\" style=\"width:100%\" />"
        },
        {
            "name" : "Venn Diagram",
            "image": "app/data/graphicorganizers/venn.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/venn.png\" style=\"width:100%\" />"
        },
        {
            "name" : "World Map",
            "image": "app/data/graphicorganizers/world_map.png",
            "textcontrol" : "<img alt=\"\" src=\"/app/data/graphicorganizers/world_map.png\" style=\"width:100%\" />"
        }
    ];

    var quest_types = {
        "multiple_choice" : [
            {
                "name" : "MCQ Standard",
                "link" : "app/img/quiz/mc_single_response_320x160.png",                //Template link
                "info" : "",                // To be used for information link.
                "comment" : "Standard Multiple Choice Question",
                "typeid" : "mcq_standard"
            },
            {
                "name" : "MCQ Mutli Response",
                "link" : "app/img/quiz/mc_multiple_response_320x160.png",
                "info" : "",
                "comment" : "Multiple Choice Question with multiple responses",
                "typeid" : "mcq_multi"
            }
        ],
        "written_spoken" : [
            {
                "name" : "Short Text",
                "link" : "app/img/quiz/short_answer_320x160.png",
                "info" : "",
                "comment" : "Short answer responses",
                "typeid" : "shorttext"
            },{
                "name" : "Essay",
                "link" : "app/img/quiz/long_answer_320x160.png",
                "info" : "",
                "comment" : "Long answer responses",
                "typeid" : "longtext"
            }
        ],
        "fill_in" : [
            {
                "name" : "Cloze Drag & Drop",
                "link" : "app/img/quiz/cloze_dd.png",
                "info" : "",
                "comment" : "Fill in the blanks drag and drop.",
                "typeid" : "fillin"
            },
            {
                "name" : "Cloze Drop Down",
                "link" : "app/img/quiz/clozedropdown.png",
                "info" : "",
                "comment" : "Fill in the blanks with drop down menus",
                "typeid" : "fidropdown"
            },
            {
                "name" : "Cloze Text",
                "link" : "app/img/quiz/clozet.png",
                "info" : "",
                "comment" : "Fill in the blanks",
                "typeid" : "ficlozet"
            },
            {
                "name" : "Image Drag & Drop",
                "link" : "app/img/quiz/image_dd.png",
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd"
            },
            {
                "name" : organizers[0].name,
                "link" : organizers[0].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd0"
            },
            {
                "name" : organizers[1].name,
                "link" : organizers[1].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd1"
            },
            {
                "name" : organizers[2].name,
                "link" : organizers[2].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd2"
            },
            {
                "name" : organizers[3].name,
                "link" : organizers[3].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd3"
            },
            {
                "name" : organizers[4].name,
                "link" : organizers[4].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd4"
            },
            {
                "name" : organizers[5].name,
                "link" : organizers[5].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd5"
            },
            {
                "name" : organizers[6].name,
                "link" : organizers[6].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd6"
            },
            {
                "name" : organizers[7].name,
                "link" : organizers[7].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd7"
            },
            {
                "name" : organizers[8].name,
                "link" : organizers[8].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd8"
            },
            {
                "name" : organizers[9].name,
                "link" : organizers[9].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd9"
            },
            {
                "name" : organizers[10].name,
                "link" : organizers[10].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd10"
            },
            {
                "name" : organizers[11].name,
                "link" : organizers[11].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd11"
            },
            {
                "name" : organizers[12].name,
                "link" : organizers[12].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd12"
            },
            {
                "name" : organizers[13].name,
                "link" : organizers[13].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd13"
            },
            {
                "name" : organizers[14].name,
                "link" : organizers[14].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd14"
            },
            {
                "name" : organizers[15].name,
                "link" : organizers[15].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd15"
            },
            {
                "name" : organizers[16].name,
                "link" : organizers[16].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd16"
            },
            {
                "name" : organizers[17].name,
                "link" : organizers[17].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd17"
            },
            {
                "name" : organizers[18].name,
                "link" : organizers[18].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd18"
            },
            {
                "name" : organizers[19].name,
                "link" : organizers[19].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd19"
            },
            {
                "name" : organizers[20].name,
                "link" : organizers[20].image,
                "info" : "",
                "comment" : "Fill in the image drag and drop.",
                "typeid" : "imagedd20"
            }
        ],
        "graphing" : [
            {
                "name" : "X-Y Graph",
                "link" : "app/img/quiz/graph.png",                //Template link
                "info" : "",                // To be used for information link.
                "comment" : "Plot and score points, polygons, and circles",
                "typeid" : "graphplotting"
            },
            {
                "name" : "Number Line – Drag & Drop",
                "link" : "app/img/quiz/numberline.png",                //Template link
                "info" : "",                // To be used for information link.
                "comment" : "Place points on a number line.",
                "typeid" : "numberline"
            },
            {
                name : 'Histogram',
                link : 'app/img/quiz/histogram.png',
                info : '',
                comment : 'Create an interactive charts',
                typeid : 'histogram'
            }
        ]
    };

    var stimulus_template = {   //This template is used for populating sub quiz stimulus
        title : "",
        content : " "
    };

    var quiz_template = {
        name : '[Quiz Name]',
        stimulus : '',
        questions : []
    };

    var subquiz_template = {
        'stimulus' : [
            /* Structure of array element is 
             {
             "title" : "",
             "content" : ""
             }
             */
        ],
        'layout' : '',
        'parts' : []
    };

    var question_templates = {
        "mcq" : {
            'type' : 'mcq',
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                },
                {
                    "label" : "[Option3]",
                    "value" : 2
                },
                {
                    "label" : "[Option4]",
                    "value" : 3
                }
            ],
            'shuffle' : false,
            'multiple_response' : false,
            'validation' : {
                'scoring_type' : 'exactMatch',
                'valid_response' : {
                    'score' : 1,
                    'value' : [0]
                },
                'alt_response' : []
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "shorttext" : {
            'type' : 'shorttext',
            'stimulus' : '[Stimulus]',
            'max_length' : 50,
            'placeholder' : "",
            'learn_objective' : [],
            'validation' : {
                'scoring_type' : 'matchAnyWord',
                'valid_response' : {
                    'score' : 1,
                    'value' : ""
                },
                'alt_response' : [],
                case_sensitive : false
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "longtext" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'type' : 'longtext',
            'validation' : {
                'scoring_type' : 'exactMatch',
                'valid_response' : {
                    'score' : 1,
                    'value' : ""
                },
                'alt_response' : [],
                'rubric' : {
                    'name' : "",
                    'location' : "",
                    'files' : []
                }
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "fillin" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'markup' : 'Today, I went to the ##response## and bought some milk and eggs. I knew it was going to rain, but I forgot to take my ##response##',
            'type' : 'fillin',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0,
                    "x": -1,
                    "y": -1
                },
                {
                    "label" : "[Option2]",
                    "value" : 1,
                    "x": -1,
                    "y": -1
                }
            ],
            'droppedInfo' : {
                'dragableEle' : [
                    {
                        "label" : "[Option1]",
                        "value" : 0
                    },
                    {
                        "label" : "[Option2]",
                        "value" : 1
                    }
                ],
                'droparea' : [
                    {
                        "paraTxt" : "Today, I went to the ",
                        "value" : -1,
                        "txt": "[1]"
                    },
                    {
                        "paraTxt" : " and bought some milk and eggs. I knew it was going to rain, but I forgot to take my ",
                        "value" : -1,
                        "txt" : "[2]"
                    }
                ],
                'lastTxt' : ""
            },
            'answer' : [-1,-1],
            'validation' : {
                'scoring_type' : 'exactMatch',
                'valid_response' : {
                    'score' : 2,
                    'value' : [0,1]
                },
                'alt_response' : []
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/us_map.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/us_map.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/us_map.png",
                "name" : "US Map",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/us_map.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 0,
                    'value': [0]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },

        "imagedd0" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/rectangle.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/rectangle.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/rectangle.png",
                "name" : "Rectangle",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/rectangle.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":49.05568574857069,\"y\":31.005455333824077,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":499.45161290322574,\"height\":329.3456221198157,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":499.45161290322574,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":329.3456221198157,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":499.45161290322574,\"y\":329.3456221198157,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-248.97800724016577,\"y\":389.4261311498553},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-102.68834010628319,\"y\":361.2711633675847},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":97.36458333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":97.36458333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                }
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd1" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/begin-mid-end.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/begin-mid-end.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/begin-mid-end.png",
                "name" : "Beginning-Middle-Ending",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/begin-mid-end.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Beginning",
                    "value" : 0
                },
                {
                    "label" : "Middle",
                    "value" : 1
                },
                {
                    "label" : "Ending",
                    "value" : 2
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":46.81013824884792,\"y\":313.31555299539167,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":513.2764976958524,\"height\":59.76036866359442,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":513.2764976958524,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":59.76036866359442,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":513.2764976958524,\"y\":59.76036866359442,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":44.962672811059896,\"y\":191.05008640552995,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":513.2764976958525,\"height\":59.76036866359445,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":513.2764976958525,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":59.76036866359445,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":513.2764976958525,\"y\":59.76036866359445,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":44.90822031078259,\"y\":71.09762123244158,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":513.2764976958523,\"height\":59.76036866359448,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-1.3824884792626762},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-1.3824884792626762},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-1.3824884792626762},\"className\":\"Circle\"},{\"attrs\":{\"y\":58.3778801843318,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":513.2764976958523,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-1.3824884792626762},\"className\":\"Circle\"},{\"attrs\":{\"x\":513.2764976958523,\"y\":58.3778801843318,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-290.4526616180459,\"y\":394.95608506690604},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":90.32258064516128,\"height\":33.41013824884783,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":418.8225806451613,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":53.41013824884783,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":418.8225806451613,\"y\":53.41013824884783,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-169.04778711089148,\"y\":362.6536518468473},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":97.23502304147462,\"height\":36.17511520737316,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":425.7350230414746,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":83.5396985407065,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":425.7350230414746,\"y\":83.5396985407065,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-31.79723502304147,\"y\":342.85714285714283},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":93.08755760368655,\"height\":34.79262672811046,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":410.08755760368655,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":104.2509600614438,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":410.08755760368655,\"y\":104.2509600614438,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd2" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/cause-effect.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/cause-effect.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/cause-effect.png",
                "name" : "Cause and Effect",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/cause-effect.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Topic",
                    "value" : 0
                },
                {
                    "label" : "Causes",
                    "value" : 1
                },
                {
                    "label" : "Effects",
                    "value" : 2
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":44.04516129032257,\"y\":273.22338709677416,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":511.8940092165898,\"height\":149.62211981566824,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-33.17972350230414},\"className\":\"Rect\"},{\"attrs\":{\"y\":-33.17972350230414,\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"y\":-33.17972350230414,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":116.4423963133641,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":511.8940092165898,\"y\":116.4423963133641,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":511.8940092165898,\"y\":-33.17972350230414,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":44.9626728110599,\"y\":43.123819124423946,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":510.51152073732703,\"height\":151.0046082949309,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-33.17972350230415},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-33.17972350230415},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-33.17972350230415},\"className\":\"Circle\"},{\"attrs\":{\"y\":117.82488479262676,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732703,\"y\":117.82488479262676,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732703,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-33.17972350230415},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":176.2446258407365,\"y\":184.46167653198077,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":357.0552995391705,\"height\":32.11059907834087,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":-53.91705069124424,\"y\":-1.382488479262662},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":-53.91705069124424,\"y\":-1.382488479262662},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-53.91705069124424,\"y\":-1.382488479262662},\"className\":\"Circle\"},{\"attrs\":{\"y\":30.728110599078207,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-53.91705069124424},\"className\":\"Circle\"},{\"attrs\":{\"x\":303.13824884792626,\"y\":30.728110599078207,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":303.13824884792626,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-1.382488479262662},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-260.0379150742672,\"y\":394.95608506690587},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":90.32258064516134,\"height\":30.645161290322562,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":418.82258064516134,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":50.64516129032256,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":418.82258064516134,\"y\":50.64516129032256,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-144.16299448416336,\"y\":365.41862880537263},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":90.32258064516134,\"height\":32.027649769585146,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":418.82258064516134,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":79.39223310291848,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":418.82258064516134,\"y\":79.39223310291848,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-13.824884792626724,\"y\":342.8571428571428},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":84.79262672811046,\"height\":32.02764976958525,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":401.79262672811046,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":101.4859831029186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":401.79262672811046,\"y\":101.4859831029186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd3" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/concept1.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/concept1.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/concept1.png",
                "name" : "Concept 1",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/concept1.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Event",
                    "value" : 0
                },
                {
                    "label" : "Who",
                    "value" : 1
                },
                {
                    "label" : "Why",
                    "value" : 2
                },
                {
                    "label" : "How",
                    "value" : 3
                },
                {
                    "label" : "What",
                    "value" : 4
                },
                {
                    "label" : "When",
                    "value" : 5
                },
                {
                    "label" : "Where",
                    "value" : 6
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                },
                {
                    "value" : 3
                },
                {
                    "value" : 4
                },
                {
                    "value" : 5
                },
                {
                    "value" : 6
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":397.9622119815667,\"y\":276.4443548387097,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":6},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":145.53456221198155,\"height\":97.0875576036866,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"7\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":145.53456221198155,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":97.0875576036866,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":145.53456221198155,\"y\":97.0875576036866,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":225.1511520737326,\"y\":274.2566244239631,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":5},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":151.0645161290322,\"height\":101.23502304147462,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"6\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":151.0645161290322,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":101.23502304147462,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":151.0645161290322,\"y\":101.23502304147462,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":55.105069124423906,\"y\":272.0688940092166,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":4},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":146.9170506912442,\"height\":105.38248847926269,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"5\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":146.9170506912442,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":105.38248847926269,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":146.9170506912442,\"y\":105.38248847926269,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":400.7271889400921,\"y\":30.710656682027675,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":3},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":141.38709677419354,\"height\":91.55760368663596,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"4\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":141.38709677419354,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":91.55760368663596,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":141.38709677419354,\"y\":91.55760368663596,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":229.29861751152066,\"y\":29.90541474654379,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":137.23963133640547,\"height\":92.94009216589862,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":137.23963133640547,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":92.94009216589862,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":137.23963133640547,\"y\":92.94009216589862,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":61.552534562211946,\"y\":29.298934331797238,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":130.32718894009216,\"height\":95.70506912442397,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":130.32718894009216,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":95.70506912442397,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":130.32718894009216,\"y\":95.70506912442397,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":46.2907087900453,\"y\":181.6966995734554,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":433.0921658986175,\"height\":41.7880184331797,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":76.03686635944699},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":76.03686635944699},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":76.03686635944699},\"className\":\"Circle\"},{\"attrs\":{\"x\":509.1290322580645,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":509.1290322580645,\"y\":41.7880184331797,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":41.7880184331797,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":76.03686635944699},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-309.80750032772335,\"y\":392.19110810838055},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.26267281105993,\"height\":33.410138248847886,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.76267281105993,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":53.410138248847886,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.76267281105993,\"y\":53.410138248847886,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-206.37497605098363,\"y\":364.03614032610983},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":75.11520737327191,\"height\":33.41013824884784,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":403.6152073732719,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":80.77472158218117,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":403.6152073732719,\"y\":80.77472158218117,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-94.00921658986174,\"y\":341.47465437788014},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":80.6451612903225,\"height\":34.79262672811058,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":397.6451612903225,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":104.25096006144392,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":397.6451612903225,\"y\":104.25096006144392,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":11.059907834101379,\"y\":315.20737327188937},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":70.96774193548379,\"height\":32.02764976958518,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"[Option4]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":387.9677419354838,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":126.2151497695852,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":387.9677419354838,\"y\":126.2151497695852,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":107.83410138248846,\"y\":293.08755760368655},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":75.11520737327174,\"height\":34.79262672811058,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"[Option5]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":392.11520737327174,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":153.70929339477726,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":392.11520737327174,\"y\":153.70929339477726,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":-248.84792626728105,\"y\":316.589861751152},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"width\":91.70506912442391,\"height\":30.645161290322505,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":150.64583333333337,\"text\":\"[Option6]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":408.7050691244239,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":174.29099462365588,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":408.7050691244239,\"y\":174.29099462365588,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":6,\"x\":-105.06912442396312,\"y\":293.08755760368655},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"width\":77.88018433179718,\"height\":30.64516129032262,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":175.37500000000003,\"text\":\"[Option7]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":6},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317972,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":199.02016129032265,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317972,\"y\":199.02016129032265,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                },
                {
                    'hotspot_value': 3,
                    'value': [3]
                },
                {
                    'hotspot_value': 4,
                    'value': [4]
                },
                {
                    'hotspot_value': 5,
                    'value': [5]
                },
                {
                    'hotspot_value': 6,
                    'value': [6]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 3,
                        'score': 1,
                        'value': [3]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 4,
                        'score': 1,
                        'value': [4]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 5,
                        'score': 1,
                        'value': [5]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 6,
                        'score': 1,
                        'value': [6]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd4" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/concept2.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/concept2.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/concept2.png",
                "name" : "Concept 2",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/concept2.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Concept",
                    "value" : 0
                },
                {
                    "label" : "Who",
                    "value" : 1
                },
                {
                    "label" : "Why",
                    "value" : 2
                },
                {
                    "label" : "What",
                    "value" : 3
                },
                {
                    "label" : "How",
                    "value" : 4
                },
                {
                    "label" : "When",
                    "value" : 5
                },
                {
                    "label" : "Where",
                    "value" : 6
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                },
                {
                    "value" : 3
                },
                {
                    "value" : 4
                },
                {
                    "value" : 5
                },
                {
                    "value" : 6
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":301.18801843317965,\"y\":286.1217741935484,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":6},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":157.9769585253456,\"height\":95.70506912442397,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":5.529953917050648,\"y\":12.442396313363986},\"className\":\"Rect\"},{\"attrs\":{\"x\":5.529953917050648,\"y\":12.442396313363986,\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"7\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":5.529953917050648,\"y\":108.14746543778796,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":163.50691244239624,\"y\":12.442396313363986,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":5.529953917050648,\"y\":12.442396313363986,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":163.50691244239624,\"y\":108.14746543778796,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":135.28940092165894,\"y\":293.61146313364054,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":5},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":157.97695852534554,\"height\":99.85253456221204,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":1.3824884792626335},\"className\":\"Rect\"},{\"attrs\":{\"y\":1.3824884792626335,\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"6\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"y\":1.3824884792626335,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":101.23502304147468,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":157.97695852534554,\"y\":101.23502304147468,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":157.97695852534554,\"y\":1.3824884792626335,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":426.9944700460828,\"y\":162.85230414746545,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":4},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":159.35944700460834,\"height\":97.0875576036866,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"5\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460834,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":97.0875576036866,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460834,\"y\":97.0875576036866,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":13.630414746543776,\"y\":139.9272465437788,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":3},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":159.35944700460828,\"height\":97.08755760368663,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"4\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460828,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":97.08755760368663,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460828,\"y\":97.08755760368663,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":305.33548387096755,\"y\":6.4031105990783574,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":159.35944700460828,\"height\":95.70506912442399,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460828,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":95.70506912442399,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460828,\"y\":95.70506912442399,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":133.44193548387096,\"y\":5.796630184331803,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":159.35944700460826,\"height\":99.85253456221197,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460826,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":99.85253456221197,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":159.35944700460826,\"y\":99.85253456221197,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":185.9220451955752,\"y\":160.9593723845153,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":225.71889400921657,\"height\":98.47004608294924,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":1.3824884792626335},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":1.3824884792626335},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":1.3824884792626335},\"className\":\"Circle\"},{\"attrs\":{\"x\":227.1013824884792,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":98.47004608294924,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":1.3824884792626335},\"className\":\"Circle\"},{\"attrs\":{\"x\":227.1013824884792,\"y\":98.47004608294924,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-322.24989664108733,\"y\":390.8086196291178},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":82.02764976958525,\"height\":32.027649769585196,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":410.52764976958525,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":52.027649769585196,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":410.52764976958525,\"y\":52.027649769585196,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-283.7943308896933,\"y\":404.12830622472745},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":76.4976958525346,\"height\":30.64516129032257,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":404.9976958525346,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":78.0097446236559,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":404.9976958525346,\"y\":78.0097446236559,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-179.72350230414744,\"y\":349.7695852534561},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":75.11520737327186,\"height\":27.88018433179718,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":392.11520737327186,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":97.33851766513052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":392.11520737327186,\"y\":97.33851766513052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-102.30414746543778,\"y\":360.82949308755747},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":80.6451612903225,\"height\":30.645161290322548,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"[Option4]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":397.6451612903225,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":124.83266129032256,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":397.6451612903225,\"y\":124.83266129032256,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":-12.442396313364053,\"y\":297.23502304147445},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":68.20276497695846,\"height\":30.645161290322505,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"[Option5]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":385.20276497695846,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":149.5618279569892,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":385.20276497695846,\"y\":149.5618279569892,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":78.80184331797234,\"y\":276.49769585253443},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"width\":69.58525345622115,\"height\":27.88018433179718,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":150.64583333333337,\"text\":\"[Option6]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":386.58525345622115,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":171.52601766513055,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":386.58525345622115,\"y\":171.52601766513055,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":6,\"x\":26.267281105990776,\"y\":288.94009216589853},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"width\":98.61751152073731,\"height\":29.262672811059986,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":175.37500000000003,\"text\":\"[Option7]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":6},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.6175115207373,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":197.63767281106,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.6175115207373,\"y\":197.63767281106,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                },
                {
                    'hotspot_value': 3,
                    'value': [3]
                },
                {
                    'hotspot_value': 4,
                    'value': [4]
                },
                {
                    'hotspot_value': 5,
                    'value': [5]
                },
                {
                    'hotspot_value': 6,
                    'value': [6]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 3,
                        'score': 1,
                        'value': [3]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 4,
                        'score': 1,
                        'value': [4]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 5,
                        'score': 1,
                        'value': [5]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 6,
                        'score': 1,
                        'value': [6]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd5" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/evidence-conclusion-1.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/evidence-conclusion-1.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/evidence-conclusion-1.png",
                "name" : "Evidence & Conclusion 1",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/evidence-conclusion-1.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Conclusion",
                    "value" : 0
                },
                {
                    "label" : "Evidence 1",
                    "value" : 1
                },
                {
                    "label" : "Evidence 2",
                    "value" : 2
                },
                {
                    "label" : "Evidence 3",
                    "value" : 3
                },
                {
                    "label" : "Evidence 4",
                    "value" : 4
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":159.75546719681907,\"y\":28.964214711729625,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":406.28230616302204,\"height\":213.272365805169,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":-11,\"y\":-13},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":-11,\"y\":-13},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":395.28230616302204,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-13},\"className\":\"Circle\"},{\"attrs\":{\"y\":200.272365805169,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-11},\"className\":\"Circle\"},{\"attrs\":{\"x\":395.28230616302204,\"y\":200.272365805169,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-11,\"y\":-13},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":43.85685884691847,\"y\":257.37574552683895,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":509.3021868787277,\"height\":124.27833001988068,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":509.3021868787277,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":124.27833001988068,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":509.3021868787277,\"y\":124.27833001988068,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-85.88469184890656,\"y\":390.0596421471174},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":100,\"y\":20,\"width\":100.00000000000006,\"height\":53.57852882703787,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":107,\"y\":27,\"text\":\"Conclusion\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":100,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":200.00000000000006,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":100,\"y\":73.57852882703787,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":200.00000000000006,\"y\":73.57852882703787,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":32.206759443339955,\"y\":417.4950298210737},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":100,\"y\":-5,\"width\":100.00000000000006,\"height\":27.335984095427477,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":107,\"y\":2,\"text\":\"Evidence 1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":100,\"y\":-5,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":200.00000000000006,\"y\":-5,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":100,\"y\":22.335984095427477,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":200.00000000000006,\"y\":22.335984095427477,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-97.81312127236579,\"y\":325.6461232604374},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":351.5,\"y\":85.27083333333334,\"width\":91.65009940357851,\"height\":28.52882703777334,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":358.5,\"y\":92.27083333333334,\"text\":\"Evidence 2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":351.5,\"y\":85.27083333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":443.1500994035785,\"y\":85.27083333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":351.5,\"y\":113.79966037110668,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":443.1500994035785,\"y\":113.79966037110668,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":17.892644135188867,\"y\":297.01789264413515},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":351.5,\"y\":117.90625000000001,\"width\":101.19284294234598,\"height\":27.335984095427406,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":358.5,\"y\":124.90625000000001,\"text\":\"Evidence 3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":351.5,\"y\":117.90625000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":452.692842942346,\"y\":117.90625000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":351.5,\"y\":145.24223409542742,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":452.692842942346,\"y\":145.24223409542742,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":137.1769383697813,\"y\":267.1968190854871},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":351.5,\"y\":150.54166666666669,\"width\":90.45725646123265,\"height\":27.335984095427364,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":358.5,\"y\":157.54166666666669,\"text\":\"Evidence 4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":351.5,\"y\":150.54166666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":441.95725646123265,\"y\":150.54166666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":351.5,\"y\":177.87765076209405,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":441.95725646123265,\"y\":177.87765076209405,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd6" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/evidence-conclusion-2.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/evidence-conclusion-2.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/evidence-conclusion-2.png",
                "name" : "Evidence & Conclusion 2",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/evidence-conclusion-2.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Conclusion",
                    "value" : 0
                },
                {
                    "label" : "Evidence 1",
                    "value" : 1
                },
                {
                    "label" : "Evidence 2",
                    "value" : 2
                },
                {
                    "label" : "Evidence 3",
                    "value" : 3
                },
                {
                    "label" : "Evidence 4",
                    "value" : 4
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                },
                {
                    "value" : 3
                },
                {
                    "value" : 4
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":64.13518886679917,\"y\":45.04970178926439,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":512.0715705765408,\"height\":250.3200795228628,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":-21,\"y\":-17},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":-21,\"y\":-17},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":491.07157057654075,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-17},\"className\":\"Circle\"},{\"attrs\":{\"y\":233.3200795228628,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-21},\"className\":\"Circle\"},{\"attrs\":{\"x\":491.07157057654075,\"y\":233.3200795228628,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-21,\"y\":-17},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":43.856858846918485,\"y\":319.4035785288269,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":512.8807157057655,\"height\":69.40755467196811,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":512.8807157057655,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":69.40755467196811,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":512.8807157057655,\"y\":69.40755467196811,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-81.11332007952285,\"y\":391.2524850894632},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":100,\"y\":20,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":107,\"y\":27,\"text\":\"Conclusion\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":100,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":200,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":200,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":100,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":42.94234592445328,\"y\":416.3021868787277},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":100,\"y\":-5,\"width\":82.10735586481115,\"height\":61.92842942345925,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":107,\"y\":2,\"text\":\"Evidence 1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":100,\"y\":-5,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":182.10735586481115,\"y\":-5,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":100,\"y\":56.92842942345925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":182.10735586481115,\"y\":56.92842942345925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-100.19880715705766,\"y\":330.4174950298211},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":351.5,\"y\":85.27083333333334,\"width\":77.33598409542742,\"height\":60.73558648111339,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":358.5,\"y\":92.27083333333334,\"text\":\"Evidence 2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":351.5,\"y\":85.27083333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.8359840954274,\"y\":85.27083333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":351.5,\"y\":146.00641981444673,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.8359840954274,\"y\":146.00641981444673,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":9.542743538767395,\"y\":294.63220675944336},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":351.5,\"y\":117.90625000000001,\"width\":80.91451292246524,\"height\":61.92842942345918,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":358.5,\"y\":124.90625000000001,\"text\":\"Evidence 3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":351.5,\"y\":117.90625000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":432.41451292246524,\"y\":117.90625000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":351.5,\"y\":179.8346794234592,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":432.41451292246524,\"y\":179.8346794234592,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":115.70576540755467,\"y\":260.03976143141153},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":351.5,\"y\":150.54166666666669,\"width\":83.30019880715702,\"height\":65.50695825049701,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":358.5,\"y\":157.54166666666669,\"text\":\"Evidence 4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":351.5,\"y\":150.54166666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":434.800198807157,\"y\":150.54166666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":351.5,\"y\":216.0486249171637,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":434.800198807157,\"y\":216.0486249171637,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd7" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/reasons-facts-1.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/reasons-facts-1.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/reasons-facts-1.png",
                "name" : "Reasons & Facts 1",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/reasons-facts-1.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Topic",
                    "value" : 0
                },
                {
                    "label" : "Reasons1",
                    "value" : 1
                },
                {
                    "label" : "Facts",
                    "value" : 2
                },
                {
                    "label" : "Reasons2",
                    "value" : 3
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                },
                {
                    "value" : 3
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":44.045161290322575,\"y\":274.02862903225804,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":3},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":510.51152073732715,\"height\":108.14746543778801,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-1.3824884792627472},\"className\":\"Rect\"},{\"attrs\":{\"y\":-1.3824884792627472,\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"4\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"y\":-1.3824884792627472,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":106.76497695852527,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732715,\"y\":106.76497695852527,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732715,\"y\":-1.3824884792627472,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":176.76405529953914,\"y\":228.98375576036864,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":303.1382488479261,\"height\":30.72811059907832,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":303.1382488479261,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":30.72811059907832,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":303.1382488479261,\"y\":30.72811059907832,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":43.58018433179722,\"y\":83.21598502304148,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":510.51152073732703,\"height\":108.14746543778801,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732703,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":108.14746543778801,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732703,\"y\":108.14746543778801,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":176.2446258407365,\"y\":40.68287468866277,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":303.1382488479262,\"height\":30.72811059907834,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-1.3824884792626762},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-1.3824884792626762},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-1.3824884792626762},\"className\":\"Circle\"},{\"attrs\":{\"y\":29.345622119815665,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":303.1382488479262,\"y\":29.345622119815665,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":303.1382488479262,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-1.3824884792626762},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-290.45266161804585,\"y\":389.4261311498552},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":100,\"height\":29.262672811059872,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":49.26267281105987,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":49.26267281105987,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-164.90032167310343,\"y\":362.6536518468472},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":95.85253456221199,\"height\":30.645161290322513,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":424.352534562212,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":78.00974462365585,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":424.352534562212,\"y\":78.00974462365585,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-30.4147465437788,\"y\":342.8571428571428},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":83.41013824884783,\"height\":32.02764976958531,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":400.41013824884783,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":101.48598310291865,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":400.41013824884783,\"y\":101.48598310291865,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":80.18433179723502,\"y\":316.589861751152},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":86.17511520737315,\"height\":33.41013824884787,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"[Option4]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":403.17511520737315,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":127.59763824884789,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":403.17511520737315,\"y\":127.59763824884789,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                },
                {
                    'hotspot_value': 3,
                    'value': [3]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 3,
                        'score': 1,
                        'value': [3]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd8" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/reasons-facts-2.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/reasons-facts-2.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/reasons-facts-2.png",
                "name" : "Reasons & Facts 2",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/reasons-facts-2.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Reasons",
                    "value" : 0
                },
                {
                    "label" : "Facts",
                    "value" : 1
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":44.9626728110599,\"y\":243.5846486175115,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":510.51152073732703,\"height\":146.8571428571428,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-2.842170943040401e-14},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-2.842170943040401e-14},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-2.842170943040401e-14},\"className\":\"Circle\"},{\"attrs\":{\"y\":146.85714285714278,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732703,\"y\":146.85714285714278,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":510.51152073732703,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-2.842170943040401e-14},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":44.90822031078263,\"y\":48.97780556423881,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":509.1290322580644,\"height\":146.85714285714286,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":509.1290322580644,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":146.85714285714286,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":509.1290322580644,\"y\":146.85714285714286,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-248.97800724016574,\"y\":392.19110810838055},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":98.61751152073737,\"height\":41.70506912442386,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":427.11751152073737,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":61.70506912442386,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":427.11751152073737,\"y\":61.70506912442386,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-93.01092075144446,\"y\":365.4186288053727},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":95.85253456221193,\"height\":40.322580645161175,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":424.35253456221193,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":87.68716397849451,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":424.35253456221193,\"y\":87.68716397849451,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd9" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/sequence.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/sequence.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/sequence.png",
                "name" : "Sequence",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/sequence.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "First",
                    "value" : 0
                },
                {
                    "label" : "Then",
                    "value" : 1
                },
                {
                    "label" : "Next",
                    "value" : 2
                },
                {
                    "label" : "Then2",
                    "value" : 3
                },
                {
                    "label" : "Last",
                    "value" : 4
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                },
                {
                    "value" : 3
                },
                {
                    "value" : 4
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":92.43225806451608,\"y\":278.98133640552993,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":4},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":462.1244239631335,\"height\":52.847926267281196,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":52.53456221198144},\"className\":\"Rect\"},{\"attrs\":{\"y\":52.53456221198144,\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"5\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"y\":52.53456221198144,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":462.1244239631335,\"y\":105.38248847926263,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":462.1244239631335,\"y\":52.53456221198144,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":105.38248847926263,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":93.81474654377878,\"y\":251.90881336405528,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":3},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":462.12442396313355,\"height\":54.23041474654377,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"4\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":462.12442396313355,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":54.23041474654377,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":462.12442396313355,\"y\":54.23041474654377,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":93.81474654377878,\"y\":173.68421658986173,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":462.12442396313355,\"height\":52.84792626728105,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":462.12442396313355,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":52.84792626728105,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":462.12442396313355,\"y\":52.84792626728105,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":94.73225806451612,\"y\":94.27589285714285,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":460.74193548387086,\"height\":54.23041474654377,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":460.74193548387086,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":54.23041474654377,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":460.74193548387086,\"y\":54.23041474654377,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":94.67780556423884,\"y\":15.798082061934675,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":460.7419354838709,\"height\":54.23041474654378,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":460.7419354838709,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":54.23041474654378,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":460.7419354838709,\"y\":54.23041474654378,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-315.33745424477405,\"y\":392.1911081083805},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":100,\"height\":33.410138248847886,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":53.410138248847886,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":53.410138248847886,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-192.5500912583569,\"y\":364.03614032610983},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":91.70506912442397,\"height\":36.17511520737322,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":420.20506912442397,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":83.53969854070655,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":420.20506912442397,\"y\":83.53969854070655,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-66.35944700460828,\"y\":341.47465437788003},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":98.61751152073731,\"height\":37.5576036866359,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.6175115207373,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":107.01593701996924,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.6175115207373,\"y\":107.01593701996924,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":59.447004608294925,\"y\":317.9723502304146},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":87.5576036866359,\"height\":36.17511520737325,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"[Option4]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":404.5576036866359,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":130.36261520737327,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":404.5576036866359,\"y\":130.36261520737327,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":172.8110599078341,\"y\":291.70506912442386},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":88.94009216589859,\"height\":37.55760368663596,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"[Option5]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":405.9400921658986,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":156.47427035330264,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":405.9400921658986,\"y\":156.47427035330264,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                },
                {
                    'hotspot_value': 3,
                    'value': [3]
                },
                {
                    'hotspot_value': 4,
                    'value': [4]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 3,
                        'score': 1,
                        'value': [3]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 4,
                        'score': 1,
                        'value': [4]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd10" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/subject-part-1.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-1.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/subject-part-1.png",
                "name" : "Subject & Parts 1",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-1.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Subject",
                    "value" : 0
                },
                {
                    "label" : "Part1",
                    "value" : 1
                },
                {
                    "label" : "Part2",
                    "value" : 2
                },
                {
                    "label" : "Part3",
                    "value" : 3
                },
                {
                    "label" : "Part4",
                    "value" : 4
                },
                {
                    "label" : "Part5",
                    "value" : 5
                },
                {
                    "label" : "Part6",
                    "value" : 6
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":124.88433179723486,\"y\":87.04086981566812,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":434.705069124424,\"height\":265.9032258064516,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":6.294930875576043,\"x\":-4},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":6.294930875576043,\"x\":-4},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"y\":272.1981566820276,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-4},\"className\":\"Circle\"},{\"attrs\":{\"x\":430.705069124424,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":6.294930875576043},\"className\":\"Circle\"},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":6.294930875576043,\"x\":-4},\"className\":\"Circle\"},{\"attrs\":{\"x\":430.705069124424,\"y\":272.1981566820276,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":111.26766731539092,\"y\":41.065363167925454,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":443.1520737327188,\"height\":31.72811059907835,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":443.1520737327188,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":31.72811059907835,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":443.1520737327188,\"y\":31.72811059907835,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-313.95496576551136,\"y\":390.8086196291177},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.26267281105987,\"height\":25.115207373271858,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"Subject\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.7626728110599,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":45.11520737327186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.7626728110599,\"y\":45.11520737327186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-222.9648378021357,\"y\":377.8610251187366},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":80.64516129032262,\"height\":23.732718894009118,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"Part1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":409.1451612903226,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":71.09730222734245,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":409.1451612903226,\"y\":71.09730222734245,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-116.1290322580645,\"y\":340.0921658986174},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":77.88018433179712,\"height\":25.115207373271858,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"Part2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317971,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":94.5735407066052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317971,\"y\":94.5735407066052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-15.207373271889399,\"y\":312.44239631336393},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":72.35023041474648,\"height\":26.497695852534534,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"Part3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.3502304147465,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":120.68519585253455,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.3502304147465,\"y\":120.68519585253455,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":70.5069124423963,\"y\":312.442396313364},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":73.73271889400917,\"height\":23.73271889400911,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"Part4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":390.73271889400917,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":142.6493855606758,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":390.73271889400917,\"y\":142.6493855606758,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":164.51612903225805,\"y\":270.96774193548384},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"width\":70.96774193548379,\"height\":29.262672811059815,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":150.64583333333337,\"text\":\"Part5\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":387.9677419354838,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":172.9085061443932,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":387.9677419354838,\"y\":172.9085061443932,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":6,\"x\":-77.41935483870967,\"y\":275.11520737327186},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"width\":82.02764976958514,\"height\":23.732718894009224,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":175.37500000000003,\"text\":\"Part6\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":6},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":399.02764976958514,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":192.10771889400925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":399.02764976958514,\"y\":192.10771889400925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4, 5, 6]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4, 5, 6]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd11" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/subject-part-2.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-2.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/subject-part-2.png",
                "name" : "Subject & Parts 2",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-2.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Subject",
                    "value" : 0
                },
                {
                    "label" : "Part1",
                    "value" : 1
                },
                {
                    "label" : "Part2",
                    "value" : 2
                },
                {
                    "label" : "Part3",
                    "value" : 3
                },
                {
                    "label" : "Part4",
                    "value" : 4
                },
                {
                    "label" : "Part5",
                    "value" : 5
                },
                {
                    "label" : "Part6",
                    "value" : 6
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":10.75529953917038,\"y\":114.51552419354826,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":576.5253456221199,\"height\":261.89400921658984,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":8.294930875576043},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":8.294930875576043},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":8.294930875576043},\"className\":\"Circle\"},{\"attrs\":{\"y\":270.18894009216586,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":576.5253456221199,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":8.294930875576043},\"className\":\"Circle\"},{\"attrs\":{\"x\":576.5253456221199,\"y\":270.18894009216586,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":111.26766731539092,\"y\":42.065363167925454,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":484.327188940092,\"height\":32.34562211981567,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-8.294930875576043,\"x\":-54},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-8.294930875576043,\"x\":-54},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-8.294930875576043,\"x\":-54},\"className\":\"Circle\"},{\"attrs\":{\"x\":430.327188940092,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-8.294930875576043},\"className\":\"Circle\"},{\"attrs\":{\"x\":430.327188940092,\"y\":24.05069124423963,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":24.05069124423963,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-54},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-313.95496576551136,\"y\":390.8086196291177},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.26267281105987,\"height\":25.115207373271858,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"Subject\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.7626728110599,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":45.11520737327186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.7626728110599,\"y\":45.11520737327186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-204.99248757172097,\"y\":376.4785366394739},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":46.08294930875576,\"height\":23.732718894009118,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"Part1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":374.58294930875576,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":71.09730222734245,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":374.58294930875576,\"y\":71.09730222734245,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-121.6589861751152,\"y\":341.47465437788003},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":54.37788018433167,\"height\":25.115207373271744,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"Part2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":371.3778801843317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":94.57354070660509,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":371.3778801843317,\"y\":94.57354070660509,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":11.05990783410138,\"y\":317.9723502304145},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":58.525345622119744,\"height\":25.115207373271787,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"Part3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":375.52534562211974,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":119.3027073732718,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":375.52534562211974,\"y\":119.3027073732718,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":98.15668202764975,\"y\":299.9999999999999},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":57.14285714285717,\"height\":23.732718894009054,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"Part4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":374.14285714285717,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":142.64938556067574,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":374.14285714285717,\"y\":142.64938556067574,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":186.6359447004608,\"y\":280.6451612903225},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"width\":59.90783410138238,\"height\":29.26267281105976,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":150.64583333333337,\"text\":\"Part5\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":376.9078341013824,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":172.90850614439313,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":376.9078341013824,\"y\":172.90850614439313,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":6,\"x\":-56.68202764976957,\"y\":258.5253456221198},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"width\":52.99539170506898,\"height\":27.88018433179724,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":175.37500000000003,\"text\":\"Part6\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":6},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":369.995391705069,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":196.25518433179727,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":369.995391705069,\"y\":196.25518433179727,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4, 5, 6]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4, 5, 6]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd12" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/subject-part-3.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-3.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/subject-part-3.png",
                "name" : "Subject & Parts 3",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/subject-part-3.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Subject",
                    "value" : 0
                },
                {
                    "label" : "Part1",
                    "value" : 1
                },
                {
                    "label" : "Part2",
                    "value" : 2
                },
                {
                    "label" : "Part3",
                    "value" : 3
                },
                {
                    "label" : "Part4",
                    "value" : 4
                },
                {
                    "label" : "Part5",
                    "value" : 5
                },
                {
                    "label" : "Part6",
                    "value" : 6
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":104.40967741935468,\"y\":63.861146313363975,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":495.9769585253456,\"height\":319.1981566820276,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-2.7050691244239573,\"x\":-18},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-2.7050691244239573,\"x\":-18},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":477.9769585253456,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-2.7050691244239573},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.9769585253456,\"y\":316.49308755760364,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-2.7050691244239573,\"x\":-18},\"className\":\"Circle\"},{\"attrs\":{\"y\":316.49308755760364,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-18},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":83.61789773013743,\"y\":18.328035978985362,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":444.1520737327188,\"height\":32.580645161290334,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":444.1520737327188,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":32.580645161290334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":444.1520737327188,\"y\":32.580645161290334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-313.95496576551136,\"y\":390.8086196291177},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.26267281105987,\"height\":25.115207373271858,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"Subject\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.7626728110599,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":45.11520737327186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.7626728110599,\"y\":45.11520737327186,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-222.9648378021357,\"y\":377.8610251187366},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":80.64516129032262,\"height\":23.732718894009118,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"Part1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":409.1451612903226,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":71.09730222734245,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":409.1451612903226,\"y\":71.09730222734245,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-116.1290322580645,\"y\":340.0921658986174},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":77.88018433179712,\"height\":25.115207373271858,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"Part2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317971,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":94.5735407066052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317971,\"y\":94.5735407066052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-15.207373271889399,\"y\":312.44239631336393},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":72.35023041474648,\"height\":26.497695852534534,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"Part3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.3502304147465,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":120.68519585253455,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.3502304147465,\"y\":120.68519585253455,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":70.5069124423963,\"y\":312.442396313364},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":73.73271889400917,\"height\":23.73271889400911,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"Part4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":390.73271889400917,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":142.6493855606758,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":390.73271889400917,\"y\":142.6493855606758,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":160.36866359447006,\"y\":266.82027649769583},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"width\":70.96774193548379,\"height\":29.262672811059815,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":150.64583333333337,\"text\":\"Part5\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":387.9677419354838,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":172.9085061443932,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":387.9677419354838,\"y\":172.9085061443932,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":6,\"x\":-77.41935483870967,\"y\":275.11520737327186},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"width\":82.02764976958514,\"height\":23.732718894009224,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":175.37500000000003,\"text\":\"Part6\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":6},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":399.02764976958514,\"y\":168.37500000000003,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":192.10771889400925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":399.02764976958514,\"y\":192.10771889400925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4, 5, 6]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4, 5, 6]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd13" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/synonym-antonym.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/synonym-antonym.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/synonym-antonym.png",
                "name" : "Synonym & Antonym",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/synonym-antonym.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                },
                {
                    "label" : "[Option3]",
                    "value" : 2
                },
                {
                    "label" : "[Option4]",
                    "value" : 3
                },
                {
                    "label" : "[Option5]",
                    "value" : 4
                },
                {
                    "label" : "[Option6]",
                    "value" : 5
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":434,\"height\":397.83333333333337},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7233333333333334,\"scaleY\":0.7233333333333334},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":317.31290322580645,\"y\":54.18372695852533,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":225.7188940092165,\"height\":311.3732718894007,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-5.5299539170506975},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-5.5299539170506975},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":225.7188940092165,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-5.5299539170506975},\"className\":\"Circle\"},{\"attrs\":{\"y\":305.84331797235,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-5.5299539170506975},\"className\":\"Circle\"},{\"attrs\":{\"x\":225.7188940092165,\"y\":305.84331797235,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":58.73310510340935,\"y\":48.97780556423882,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":222.95391705069122,\"height\":309.9907834101382,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":222.95391705069122,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":309.9907834101382,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":222.95391705069122,\"y\":309.9907834101382,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-308.4250118484606,\"y\":392.19110810838055},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":76.4976958525346,\"height\":29.262672811059872,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":404.9976958525346,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":49.26267281105987,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":404.9976958525346,\"y\":49.26267281105987,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-211.90492996803437,\"y\":365.4186288053725},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":75.11520737327191,\"height\":32.0276497695852,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":403.6152073732719,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":79.39223310291854,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":403.6152073732719,\"y\":79.39223310291854,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-103.68663594470041,\"y\":348.3870967741934},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"width\":75.11520737327186,\"height\":30.645161290322562,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":76.45833333333334,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":392.11520737327186,\"y\":69.45833333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":100.1034946236559,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":392.11520737327186,\"y\":100.1034946236559,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-2.764976958525345,\"y\":322.11981566820265},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"width\":77.88018433179718,\"height\":26.497695852534477,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":101.18750000000001,\"text\":\"[Option4]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317972,\"y\":94.18750000000001,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":120.68519585253449,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":394.8801843317972,\"y\":120.68519585253449,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":99.53917050691241,\"y\":298.61751152073725},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"width\":73.73271889400917,\"height\":30.645161290322562,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":324,\"y\":125.91666666666669,\"text\":\"[Option5]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":317,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":390.73271889400917,\"y\":118.91666666666669,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":317,\"y\":149.56182795698925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":390.73271889400917,\"y\":149.56182795698925,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":168.66359447004606,\"y\":270.9677419354838},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":343.26728110599083,\"y\":143.64583333333337,\"width\":73.73271889400917,\"height\":30.645161290322505,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":350.26728110599083,\"y\":150.64583333333337,\"text\":\"[Option6]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":343.26728110599083,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":417,\"y\":143.64583333333337,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":417,\"y\":174.29099462365588,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":343.26728110599083,\"y\":174.29099462365588,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0,1,2]
                },
                {
                    'hotspot_value': 1,
                    'value': [3,4,5]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0,1,2]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [3,4,5]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd14" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/topic-mainidea.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/topic-mainidea.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/topic-mainidea.png",
                "name" : "Topic & Main Idea",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/topic-mainidea.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "Topic",
                    "value" : 0
                },
                {
                    "label" : "MainIdea",
                    "value" : 1
                },
                {
                    "label" : "Detail1",
                    "value" : 2
                },
                {
                    "label" : "Detail2",
                    "value" : 3
                },
                {
                    "label" : "Detail3",
                    "value" : 4
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":63.39222797927461,\"y\":151.42597150259064,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":512.9430051813472,\"height\":237.77202072538853,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":-20,\"y\":-16},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":-20,\"y\":-16},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":492.9430051813472,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-16},\"className\":\"Circle\"},{\"attrs\":{\"y\":221.77202072538853,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-20},\"className\":\"Circle\"},{\"attrs\":{\"x\":492.9430051813472,\"y\":221.77202072538853,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":-20,\"y\":-16},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":105.07823834196888,\"y\":57.63636658031086,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":444.2953367875647,\"height\":30.207253886010385,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":2.07253886010362},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":2.07253886010362},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":2.07253886010362},\"className\":\"Circle\"},{\"attrs\":{\"y\":32.279792746114005,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":444.2953367875647,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":2.07253886010362},\"className\":\"Circle\"},{\"attrs\":{\"x\":444.2953367875647,\"y\":32.279792746114005,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":184.90726522375027,\"y\":14.85493361753265,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":302.3264248704663,\"height\":24.207253886010363,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":302.3264248704663,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":24.207253886010363,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":302.3264248704663,\"y\":24.207253886010363,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-304.4614006643916,\"y\":387.8550129817122},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.27461139896377,\"height\":27.20207253886008,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"Topic\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.77461139896377,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":47.20207253886008,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.77461139896377,\"y\":47.20207253886008,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-201.3559936962166,\"y\":361.47889479711114},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":86.5284974093264,\"height\":29.27461139896372,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"MainIdea\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.0284974093264,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":76.63919473229706,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.0284974093264,\"y\":76.63919473229706,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-147.15025906735752,\"y\":306.7357512953368},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"width\":83.41968911917098,\"height\":28.238341968911868,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":109.6875,\"text\":\"Detail1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":472.919689119171,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":130.92584196891187,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":472.919689119171,\"y\":130.92584196891187,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-40.41450777202073,\"y\":264.24870466321244},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"width\":81.3471502590674,\"height\":32.383419689119194,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":151.03125,\"text\":\"Detail2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":470.8471502590674,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":176.4146696891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":470.8471502590674,\"y\":176.4146696891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":66.32124352331607,\"y\":220.7253886010363},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":185.375,\"width\":87.5647668393782,\"height\":32.383419689119194,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":192.375,\"text\":\"Detail3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.0647668393782,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":217.7584196891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.0647668393782,\"y\":217.7584196891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2, 3, 4]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2, 3, 4]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd15" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/mainidea-1.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/mainidea-1.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/mainidea-1.png",
                "name" : "Main Idea & Detail",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/mainidea-1.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "MainIdea",
                    "value" : 0
                },
                {
                    "label" : "Detail1",
                    "value" : 1
                },
                {
                    "label" : "Detail2",
                    "value" : 2
                },
                {
                    "label" : "Detail3",
                    "value" : 3
                },
                {
                    "label" : "Detail4",
                    "value" : 4
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":43.66373056994814,\"y\":104.52237694300517,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":534.0725388601035,\"height\":272.3160621761659,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":2.07253886010362},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":2.07253886010362},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":2.07253886010362},\"className\":\"Circle\"},{\"attrs\":{\"y\":274.3886010362695,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":534.0725388601035,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":2.07253886010362},\"className\":\"Circle\"},{\"attrs\":{\"x\":534.0725388601035,\"y\":274.3886010362695,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":25.627472477636275,\"y\":18.5440527885171,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":559.2538860103626,\"height\":66.49740932642484,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-2},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-2},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-2},\"className\":\"Circle\"},{\"attrs\":{\"y\":64.49740932642484,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":559.2538860103626,\"y\":64.49740932642484,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":559.2538860103626,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-2},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-304.4614006643916,\"y\":387.8550129817122},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.27461139896377,\"height\":27.20207253886008,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"MainIdea\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.77461139896377,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":47.20207253886008,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.77461139896377,\"y\":47.20207253886008,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-201.3559936962166,\"y\":361.47889479711114},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":86.5284974093264,\"height\":29.27461139896372,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"Detail1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.0284974093264,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":76.63919473229706,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.0284974093264,\"y\":76.63919473229706,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-147.15025906735752,\"y\":306.7357512953368},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"width\":83.41968911917098,\"height\":28.238341968911868,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":109.6875,\"text\":\"Detail2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":472.919689119171,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":130.92584196891187,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":472.919689119171,\"y\":130.92584196891187,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-40.41450777202073,\"y\":264.24870466321244},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"width\":81.3471502590674,\"height\":32.383419689119194,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":151.03125,\"text\":\"Detail3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":470.8471502590674,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":176.4146696891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":470.8471502590674,\"y\":176.4146696891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":72.53886010362694,\"y\":214.50777202072538},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":185.375,\"width\":87.5647668393782,\"height\":32.383419689119194,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":192.375,\"text\":\"Detail4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.0647668393782,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":217.7584196891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.0647668393782,\"y\":217.7584196891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd16" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/mainidea-2.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/mainidea-2.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/mainidea-2.png",
                "name" : "Main Idea & Detail 2",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/mainidea-2.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "MainIdea",
                    "value" : 0
                },
                {
                    "label" : "Detail1",
                    "value" : 1
                },
                {
                    "label" : "Detail2",
                    "value" : 2
                },
                {
                    "label" : "Detail3",
                    "value" : 3
                },
                {
                    "label" : "Detail4",
                    "value" : 4
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":48.026424870466286,\"y\":104.41356865284972,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":499.83937823834185,\"height\":277.3523316062176,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":2.07253886010362,\"x\":2},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":2.07253886010362,\"x\":2},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":2.07253886010362,\"x\":2},\"className\":\"Circle\"},{\"attrs\":{\"x\":501.83937823834185,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":2.07253886010362},\"className\":\"Circle\"},{\"attrs\":{\"x\":501.83937823834185,\"y\":279.42487046632124,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":279.42487046632124,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":2},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":51.06270563825808,\"y\":16.725399938776178,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":498.6943005181348,\"height\":67.279792746114,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":498.6943005181348,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":67.279792746114,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":498.6943005181348,\"y\":67.279792746114,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-304.4614006643916,\"y\":387.8550129817122},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":79.27461139896377,\"height\":27.20207253886008,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"MainIdea\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.77461139896377,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":47.20207253886008,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":407.77461139896377,\"y\":47.20207253886008,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-201.3559936962166,\"y\":361.47889479711114},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":86.5284974093264,\"height\":29.27461139896372,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"Detail1\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.0284974093264,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":76.63919473229706,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":415.0284974093264,\"y\":76.63919473229706,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-147.15025906735752,\"y\":306.7357512953368},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"width\":83.41968911917098,\"height\":28.238341968911868,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":109.6875,\"text\":\"Detail2\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":472.919689119171,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":130.92584196891187,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":472.919689119171,\"y\":130.92584196891187,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-40.41450777202073,\"y\":264.24870466321244},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"width\":81.3471502590674,\"height\":32.383419689119194,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":151.03125,\"text\":\"Detail3\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":470.8471502590674,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":176.4146696891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":470.8471502590674,\"y\":176.4146696891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":66.32124352331607,\"y\":220.7253886010363},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":185.375,\"width\":87.5647668393782,\"height\":32.383419689119194,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":192.375,\"text\":\"Detail4\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.0647668393782,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":217.7584196891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.0647668393782,\"y\":217.7584196891192,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1, 2, 3, 4]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1, 2, 3, 4]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd17" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/characters-1.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/characters-1.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/characters-1.png",
                "name" : "Story & Characters",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/characters-1.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                },
                {
                    "label" : "[Option3]",
                    "value" : 2
                },
                {
                    "label" : "[Option4]",
                    "value" : 3
                },
                {
                    "label" : "[Option5]",
                    "value" : 4
                },
                {
                    "label" : "[Option6]",
                    "value" : 5
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":600,\"height\":550},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\"},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":318.4668393782383,\"y\":63.87988989637307,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":250.25906735751292,\"height\":305.12953367875645,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":250.25906735751292,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":305.12953367875645,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":250.25906735751292,\"y\":305.12953367875645,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":35.68446729628914,\"y\":67.70467455017514,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":250.40414507772016,\"height\":300.98445595854923,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":250.40414507772016,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":300.98445595854923,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":250.40414507772016,\"y\":300.98445595854923,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-314.8240949649097,\"y\":371.27470210088325},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":87.5647668393782,\"height\":32.38341968911914,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":416.0647668393782,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":52.38341968911914,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":416.0647668393782,\"y\":52.38341968911914,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-206.53734084647567,\"y\":358.37008650695566},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":83.41968911917098,\"height\":33.419689119171046,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":411.919689119171,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":80.78427245250438,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":411.919689119171,\"y\":80.78427245250438,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-163.73056994818654,\"y\":289.119170984456},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"width\":87.56476683937825,\"height\":33.41968911917098,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":109.6875,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.06476683937825,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":136.10718911917098,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":477.06476683937825,\"y\":136.10718911917098,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":3,\"x\":-12.43523316062176,\"y\":243.52331606217624},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"width\":80.31088082901556,\"height\":31.347150259067348,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":151.03125,\"text\":\"[Option4]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":3},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":469.81088082901556,\"y\":144.03125,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":175.37840025906735,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":469.81088082901556,\"y\":175.37840025906735,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":4,\"x\":-60.10362694300518,\"y\":242.4870466321243},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":185.375,\"width\":79.27461139896377,\"height\":30.310880829015616,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":192.375,\"text\":\"[Option5]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":4},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":468.77461139896377,\"y\":185.375,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":215.68588082901562,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":468.77461139896377,\"y\":215.68588082901562,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":5,\"x\":76.6839378238342,\"y\":181.34715025906735},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":397.79015544041454,\"y\":226.71875,\"width\":81.34715025906746,\"height\":31.34715025906729,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":404.79015544041454,\"y\":233.71875,\"text\":\"[Option6]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":5},\"className\":\"Text\"},{\"attrs\":{\"x\":397.79015544041454,\"y\":226.71875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":479.137305699482,\"y\":226.71875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":397.79015544041454,\"y\":258.0659002590673,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":479.137305699482,\"y\":258.0659002590673,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0, 1, 2]
                },
                {
                    'hotspot_value': 1,
                    'value': [3, 4, 5]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0, 1, 2]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [3, 4, 5]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd18" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/us_map.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/us_map.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/us_map.png",
                "name" : "US Map",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/us_map.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":457,\"height\":418.9166666666667},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7616666666666667,\"scaleY\":0.7616666666666667},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":65.7,\"y\":51.41875,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":93,\"height\":104,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":223.2492341356674,\"y\":177.54923413566738,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":93,\"height\":104,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-23.632385120350108,\"y\":60.39387308533916},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":111.59737417943107,\"y\":122.10065645514223},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":97.36458333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":97.36458333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 0,
                    'value': [0]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd19" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/venn.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/venn.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/venn.png",
                "name" : "Venn Diagram",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/venn.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                },
                {
                    "label" : "[Option3]",
                    "value" : 2
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                },
                {
                    "value" : 2
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":579,\"height\":530.75},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.965,\"scaleY\":0.965},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":267.5373056994819,\"y\":130.7005829015544,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":2},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":49.47668393782379,\"height\":143.37823834196888,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":8.290155440414537},\"className\":\"Rect\"},{\"attrs\":{\"x\":8.290155440414537,\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"3\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"x\":8.290155440414537,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":57.76683937823833,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":57.76683937823833,\"y\":143.37823834196888,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":8.290155440414537,\"y\":143.37823834196888,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":379.6896373056994,\"y\":137.4291126943005,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":107.50777202072544,\"height\":229.3886010362694,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"x\":4.145077720207212,\"y\":-50.77720207253887},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"x\":4.145077720207212,\"y\":-50.77720207253887},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":4.145077720207212,\"y\":-50.77720207253887},\"className\":\"Circle\"},{\"attrs\":{\"y\":178.61139896373052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false,\"x\":4.145077720207212},\"className\":\"Circle\"},{\"attrs\":{\"x\":111.65284974093265,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-50.77720207253887},\"className\":\"Circle\"},{\"attrs\":{\"x\":111.65284974093265,\"y\":178.61139896373052,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":94.75182480924249,\"y\":135.062187503543,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":116.83419689119174,\"height\":230.4248704663213,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\",\"y\":-46.6321243523316},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75,\"y\":-46.6321243523316},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false,\"y\":-46.6321243523316},\"className\":\"Circle\"},{\"attrs\":{\"x\":116.83419689119174,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false,\"y\":-46.6321243523316},\"className\":\"Circle\"},{\"attrs\":{\"x\":116.83419689119174,\"y\":183.7927461139897,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":183.7927461139897,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-258.86554574211175,\"y\":392.0000907019194},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":73.05699481865287,\"height\":32.383419689119165,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":401.55699481865287,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":52.383419689119165,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":401.55699481865287,\"y\":52.383419689119165,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":-146.43371390347045,\"y\":363.5514336572148},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":82.3834196891192,\"height\":33.41968911917099,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":410.8834196891192,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":80.78427245250433,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":410.8834196891192,\"y\":80.78427245250433,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":2,\"x\":-87.04663212435234,\"y\":312.95336787564776},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"width\":84.45595854922277,\"height\":32.38341968911914,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":396.5,\"y\":109.6875,\"text\":\"[Option3]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":2},\"className\":\"Text\"},{\"attrs\":{\"x\":389.5,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":473.95595854922277,\"y\":102.6875,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":389.5,\"y\":135.07091968911914,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":473.95595854922277,\"y\":135.07091968911914,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 1,
                    'value': [1]
                },
                {
                    'hotspot_value': 2,
                    'value': [2]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    },
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 2,
                        'score': 1,
                        'value': [2]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "imagedd20" : {
            'max_length' : 10000,
            'placeholder' : "",
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'image' : {
                "url" : "/app/data/graphicorganizers/world_map.png",
                "title" : "",
                "width" : "",
                "height" : "",
                "scale" : 100,
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/world_map.png\" style=\"width:100%\" />"
            },
            'graphic_organizer' : {
                "image" : "/app/data/graphicorganizers/world_map.png",
                "name" : "World Map",
                "textcontrol": "<img alt=\"\" src=\"/app/data/graphicorganizers/world_map.png\" style=\"width:100%\" />"
            },
            'type' : 'imagedd',
            'options' : [
                {
                    "label" : "[Option1]",
                    "value" : 0
                },
                {
                    "label" : "[Option2]",
                    "value" : 1
                }
            ],
            'hotspots' : [
                {
                    "value" : 0
                },
                {
                    "value" : 1
                }
            ],
            'canvas' : "{\"attrs\":{\"width\":457,\"height\":418.9166666666667},\"className\":\"Stage\",\"children\":[{\"attrs\":{\"name\":\"MainLayer\",\"scaleX\":0.7616666666666667,\"scaleY\":0.7616666666666667},\"className\":\"Layer\",\"children\":[{\"attrs\":{\"id\":\"Image\",\"name\":\"BackgroundImage\"},\"className\":\"Image\"},{\"attrs\":{\"x\":65.7,\"y\":51.41875,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":1},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":93,\"height\":104,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"2\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"x\":223.2492341356674,\"y\":177.54923413566738,\"draggable\":true,\"name\":\"hotspot\",\"qtype\":\"hotspot\",\"qid\":0},\"className\":\"Group\",\"children\":[{\"attrs\":{\"width\":93,\"height\":104,\"stroke\":\"black\",\"strokeWidth\":1,\"dash\":[10,5],\"fill\":\"\"},\"className\":\"Rect\"},{\"attrs\":{\"opacity\":0.75},\"className\":\"Label\",\"children\":[{\"attrs\":{\"fill\":\"yellow\",\"pointerDirection\":\"right\",\"pointerWidth\":20,\"pointerHeight\":28,\"lineJoin\":\"round\",\"x\":-37.095703125,\"y\":-12,\"width\":17.095703125,\"height\":24},\"className\":\"Tag\"},{\"attrs\":{\"text\":\"1\",\"fontFamily\":\"Calibri\",\"fontSize\":14,\"padding\":5,\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"x\":-37.095703125,\"y\":-12},\"className\":\"Text\"}]},{\"attrs\":{\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":93,\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"y\":104,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":0,\"x\":-23.632385120350108,\"y\":60.39387308533916},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":20,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":27,\"text\":\"[Option1]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":0},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":20,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":70,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]},{\"attrs\":{\"draggable\":true,\"name\":\"option\",\"qtype\":\"option\",\"qid\":1,\"x\":111.59737417943107,\"y\":122.10065645514223},\"className\":\"Group\",\"children\":[{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"width\":100,\"height\":50,\"fill\":\"white\",\"stroke\":\"black\",\"strokeWidth\":1},\"className\":\"Rect\"},{\"attrs\":{\"x\":335.5,\"y\":54.364583333333336,\"text\":\"[Option2]\",\"fontFamily\":\"Helvetica\",\"fill\":\"black\",\"width\":\"auto\",\"height\":\"auto\",\"name\":\"text_option\",\"qid\":1},\"className\":\"Text\"},{\"attrs\":{\"x\":328.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":47.364583333333336,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"topRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":428.5,\"y\":97.36458333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomRight\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"},{\"attrs\":{\"x\":328.5,\"y\":97.36458333333334,\"stroke\":\"#666\",\"fill\":\"#ddd\",\"radius\":8,\"name\":\"bottomLeft\",\"draggable\":true,\"dragOnTop\":false},\"className\":\"Circle\"}]}]}]}",
            'answer' : [
                {
                    'hotspot_value': 0,
                    'value': [0]
                },
                {
                    'hotspot_value': 0,
                    'value': [0]
                }
            ],
            'validation' : {
                'valid_response': {
                    'scoring_type': 'exactMatch',
                    'hotspot_value': 0,
                    'score': 1,
                    'value': [0]
                },
                'alt_response': [
                    {
                        'scoring_type': 'exactMatch',
                        'hotspot_value': 1,
                        'score': 1,
                        'value': [1]
                    }
                ]
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'hotspot_value' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'hotspot_value' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },

        "fidropdown" : {
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'type' : 'fidropdown',
            'markup' : 'Today, I went to the ##response## and bought some milk and eggs. I knew it was going to rain, but I forgot to take my ##response##',
            'options' : [
                [
                    {"label" : 'Choice A', "value" : 0 },
                    {"label" : 'Choice B', "value" : 1 },
                    {"label" : 'Choice C', "value" : 2 },
                    {"label" : 'Choice D', "value" : 3 }
                ],
                [
                    {"label" : 'Choice A', "value" : 0 },
                    {"label" : 'Choice B', "value" : 1 },
                    {"label" : 'Choice C', "value" : 2 },
                    {"label" : 'Choice D', "value" : 3 }
                ]
            ],
            'validation' : {
                'scoring_type': 'exactMatch',
                'valid_response': {
                    'score' : 1,
                    'value': [0, 1]
                },
                'alt_response' : []
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'valid_response' : {
                        'value' : [0]
                    },
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },

        "ficlozet" : {
            'max_length' : 15,
            'learn_objective' : [],
            'stimulus' : '[Stimulus]',
            'type' : 'ficlozet',
            'markup' : 'Today, I went to the ##response## and bought some milk and eggs. I knew it was going to rain, but I forgot to take my ##response##',
            'validation' : {
                'scoring_type': 'exactMatch',
                'valid_response': {
                    'score': 2,
                    'value': ["Choice A", "Choice B"]
                },
                'alt_response' : []
            },
            'difficulty' : '',
            'instant_feedback' : false,
            'num_feedback_clicked' : 0,
            'feedback' : [
                {
                    'option' : '0',
                    'text_feedback' : 'Incorrect! Try again.',
                    'web_feedback' : [],
                    'video_feedback' : []
                },
                {
                    'option' : '1',
                    'valid_response' : {
                        'value' : [1]
                    },
                    'text_feedback' : 'Correct!',
                    'web_feedback' : [],
                    'video_feedback' : []
                }
            ],
            'tags' : []
        },
        "graphplotting" :{
            "type": "graphplotter",
            "stimulus": "[Stimulus]",
            "learn_objective": [],
            "tags": [],
            "canvas": {
                "snap_to": "grid",
                "x_max": 10.4,
                "x_min": -10.4,
                "y_min": -10.4,
                "y_max": 10.4
            },
            'ui_style': {
                'font_size': 'normal',
                'validation_stem_numeration': "Number",
                'width': '600px',
                'height': '600px'
            },
            "toolbar": {
                "tools": [
                    "point",
                    "move"
                ],
                "default_tool": "point",
                "controls": ["undo", "redo"]
            },
            "axis_x": {
                "ticks_distance": 1,
                "draw_labels": true,
                "show_first_arrow": true,
                "show_last_arrow": true
            },
            "axis_y": {
                "ticks_distance": 1,
                "draw_labels": true,
                "show_first_arrow": true,
                "show_last_arrow": true
            },
            "grid": {
                "x_distance": 1,
                "y_distance": 1
            },
            "validation": {
                "scoring_type": "exactMatch",
                "valid_response": {
                    "score": 1
                },
                "alt_response": []
            },
            "difficulty": "",
            "instant_feedback": false,
            "num_feedback_clicked": 0,
            "feedback": [
                {
                    "option": "0",
                    "text_feedback": "Incorrect! Try again.",
                    "web_feedback": [],
                    "video_feedback": []
                },
                {
                    "option": "1",
                    "text_feedback": "Correct!",
                    "web_feedback": [],
                    "video_feedback": []
                }
            ]
        },
        "numberline" :{
            "type": "numberline",
            "stimulus": "<p>[This is the stem.]</p>",
            "labels": {
                "frequency": 1,
                "show_max": true,
                "show_min": true
            },
            "line": {
                "max": 10,
                "min": 0
            },
            "points": ["[Choice A]", "[Choice B]", "[Choice C]"],
            "snap_to_ticks": true,
            "ticks": {
                "distance": 1,
                "show": true
            },
            "validation": {
                "scoring_type": "exactMatch",
                "valid_response": {
                    "score": 1,
                    "value": [{
                        "point": "[Choice A]",
                        "position": ""
                    }, {
                        "point": "[Choice A]",
                        "position": ""
                    }, {
                        "point": "[Choice A]",
                        "position": ""
                    }]
                }
            },
            "difficulty": "",
            "instant_feedback": false,
            "num_feedback_clicked": 0,
            "feedback": [
                {
                    "option": "0",
                    "text_feedback": "Incorrect! Try again.",
                    "web_feedback": [],
                    "video_feedback": []
                },
                {
                    "option": "1",
                    "text_feedback": "Correct!",
                    "web_feedback": [],
                    "video_feedback": []
                }
            ]
        },
        histogram: {
            type: 'histogram'
        }
    };

    function cloneStimulusTemplate()
    {
        return angular.copy(stimulus_template);
    }

    function cloneQuizTemplate()
    {
        return angular.copy(quiz_template);
    }

    function cloneSubQuizTemplate()
    {
        return angular.copy(subquiz_template);
    }

    function cloneQuestionTemplate(typeId){
        var template = getTemplate(typeId);
        typeId == "histogram" && (template = new histogram_model());
        return angular.copy(template);
    }

    function cloneResponseTemplate(typeId, settings)
    {
        var objTemplate = null, i;
        if(typeId == 'fidropdown')
        {
            objTemplate = {
                score: 1,
                value: []
            };
            for(i = 0; i < settings.numOptions; i++)
            {
                objTemplate.value.push(0);
            }
        }
        return objTemplate;
    }

    function getTemplate (typeId) {
        var id_arr = typeId.split('_');
        var template = question_templates[id_arr[0]];
        if(id_arr[0] == 'mcq')
        {
            switch(id_arr[1])
            {
                case 'standard':
                    template.multiple_response = false;
                    break;
                case 'multi' :
                    template.multiple_response = true;
            }
        }
        return template;
    }

    return {
        //Internal objects.
        font_size : font_size,
        validation_numeration : validation_numeration,
        quest_types : quest_types,
        diff_levels : difficulty_levels,
        learn_objectives : learn_objectives,
        grade_levels : grade_levels,
        subject_areas : subject_areas,
        graphic_organizers : organizers,
        scoring_types : scoring_types,

        //Functions
        cloneQuestionTemplate: cloneQuestionTemplate,
        cloneQuizTemplate : cloneQuizTemplate,
        cloneSubQuizTemplate : cloneSubQuizTemplate,
        cloneStimulusTemplate : cloneStimulusTemplate,
        cloneResponseTemplate : cloneResponseTemplate
    };

}]);
