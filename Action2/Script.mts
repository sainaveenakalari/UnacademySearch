'Browser("Full Stack Development").Page("Full Stack Development").WebButton("Full Stack Develop ...").Click
'Browser("Full Stack Development").Page("Goals | Unacademy").WebEdit("Search for your goal").Set "gate"
'Browser("Full Stack Development").Page("Goals | Unacademy").WebElement("GATE - EE (English)").Click
'Browser("Full Stack Development").Page("Unacademy GATE - EE (English) |").WebElement("WebElement").Click
'Browser("Full Stack Development").Page("Unacademy GATE - EE (English) |").WebEdit("WebEdit").Set "english"
'Browser("Full Stack Development").Page("Unacademy - India's largest_8").WebElement("WebElement").Click
'Browser("Full Stack Development").Page("Unacademy - India's largest_8").WebEdit("Search for courses, lessons,").Set "engl"
'Browser("Full Stack Development").Page("Unacademy - India's largest_8").Link("Unacademy GATE - EE (English)1").Click


'Browser("Full Stack Development").Page("Full Stack Development").WebEdit("Search courses, test series").Check CheckPoint("Search courses, test series and educators") @@ script infofile_;_ZIP::ssf50.xml_;_
'Browser("Full Stack Development").Page("Full Stack Development").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf51.xml_;_
'Browser("Full Stack Development").Page("Full Stack Development").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf52.xml_;_
'Browser("Full Stack Development").Page("Full Stack Development").WebEdit("Search courses, test series").Set "unacademy gate ee" @@ script infofile_;_ZIP::ssf53.xml_;_
'Browser("Full Stack Development").Page("Full Stack Development").WebElement("Unacademy GATE - EE (English)1").Check CheckPoint("Unacademy GATE - EE (English)10K followers • 11 courses") @@ script infofile_;_ZIP::ssf54.xml_;_
'Browser("Full Stack Development").Page("Full Stack Development").Link("Unacademy GATE - EE (English)1").Click @@ script infofile_;_ZIP::ssf55.xml_;_
'Browser("Full Stack Development").Page("Unacademy - India's largest_9").WebElement("Unacademy GATE - EE (English)").Check CheckPoint("Unacademy GATE - EE (English)") @@ script infofile_;_ZIP::ssf56.xml_;_


Services.StartTransaction "course"
SearchUnacademyCourse()
Services.EndTransaction "course"
