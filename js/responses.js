function getBotResponse(input) {
 
    // Simple responses
    if (/[Hh]ello/.test(input)||/[Hh]i/.test(input)||/[Hh]ow are you/.test(input)||/[Gg]ood day/.test(input)||/[Ww]hat's up/.test(input)||/[Nn]ice to meet you/.test(input)) {
        return "Hi, I'm MeowBot! What can I help you?";
    } else if (/[Ww]hat can you do for me?/.test(input)||/[Ww]hat is your function?/.test(input)||/[Ww]hat can you do?/.test(input)) {
        return "You can know:<br>1. Cat care tips<br>2. Cat anatomy<br>3. Cat health<br>4. Cat communication cues<br>5. Quirky cat behavior<br>6. Cat facts<br>7. Cat diseases.<br>8. Vet location";
    } else if (/[Ss]how me some cat care tips/.test(input)||/[Cc]at tips/.test(input)){
        return ("1. Groom your cat regularly<br>2. Provide fresh water daily<br>3. Make sure you have enough litter boxes<br>4. Notice if your cat starts urinating outside its litter box<br>5. Train your cat to use a scratching post"+
        "<br>6. Use a cat carrier in the car<br>7. Keep your cat's teeth clean<br>8. Choose a cat-friendly vet<br>9. Schedule regular veterinary visits<br>10. Spay or neuter your cat");
    } else if (/[Ww]hy is it important to groom my pet regularly?/.test(input)||/[Ww]hy should I groom my cat?/.test(input)||/[Gg]room cat/.test(input)) {
        return "It can helps to remove the dead hair from your cat's coat so it doesnt ingest it while self-grooming and gives you the chance to notice any changes to your pet body.";
    } else if (/[Ww]hy is it important to provide fresh water daily for my cat?/.test(input)||/[Ww]hy should I provide fresh water to my cat?/.test(input)||/[Pp]rovide fresh water/.test(input)) {
        return "Clean and fresh water is essential for your cat's good health.";
    } else if (/[Ww]hy my cat don't drink water from a bowl?/.test(input)||/[Ww]hy my cat doesn't seem to drink from a bowl?/.test(input)) {
        return "Try to provide your cat a tall glass. Because some cats don't like to bend down to drink.";
    } else if (/[Ww]hy I need to make sure I have enough litter boxes?/.test(input)||/[Ww]hy enough litter boxes is important??/.test(input)) {
        return "A general rule of thumb for litter boxes is one for each cat plus one more. To encourage good litter box habits, keep the litter boxes clean. This may mean scooping more than once per day. Regular cleaning will also help you notice any changes in your cat's urine or stool, which could indicate a health issue.";
    } else if (/[Ww]hy my cat urinate outside the litter box?/.test(input)||/[Ww]hy my cat doesn't urinate inside the litter box?/.test(input)) {
        return "You may schedule a visit to the veterinarian because your cat may have a urinary tract infection or other medical issue.";
    } else if (/[Ww]hy I need to train my cat to use a scratching post?/.test(input)||/[Ww]hy is it important for my cat to use a scratching post?/.test(input)||/[Ii]mportance of stretching post/.test(input)||/[Ss]tretching post/.test(input)) {
        return "This can prevent damage to your furniture and helps you cat  stretch it muscles and keep it's claws in top condition.";
    } else if (/[Ww]hy I need to have cat carrier im my car?/.test(input)||/[Cc]at carrier/.test(input)) {
        return "By having cat carrier, your cat will not roam freely in the car which may distract you from driving safely.";
    } else if (/[Ww]hy I need to keep my cat's teeth clean?/.test(input)||/[Ww]hy cat needs to have a clean teeth?/.test(input)) {
        return "Cats can develop tartar on their teeth, which can lead to gum disease and tooth decay if their teeth is not clean.";
    } else if (/[Ww]hy I need to have a cat-friendly vet?/.test(input)||/[Ww]hy cat-friendly vet is important?/.test(input)||/[Cc]at-friendly vet/.test(input)) {
        return "A veterinarian specializing in feline health and anatomy can be a valuable ally in keeping your cat in it best possible health.";
    } else if (/[Ww]hy is it important to schedule a regular veterinary visits?/.test(input)||/[Ww]hy is it important to schedule a regular vet visits?/.test(input)||/[Ww]hy my cat need a regular vet visit?/.test(input)||/[Rr]egular visit/.test(input)) {
        return "Annual visits give the vet a chance to catch any potential feline diseases in their early stages, administer vaccines, and clean the cat's teeth. Your vet can also tell you if your cat is at a healthy weight.";
    } else if (/[Ss]how me some cat anatomy and physiology/.test(input)||/[Cc]at anatomy/.test(input)) {
        return ("1. Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.<br>2. Cats are believed to be the only mammals who don't taste sweetness.<br>3. Cats can jump up to six times their length.<br>"+
        "4. Cats have 230 bones, while humans only have 206.<br>5. Male cats are more likely to be left-pawed, while female cats are more likely to be right-pawed.<br>6. Cats have the largest eyes relative to their head size of any mammal.");
    } else if (/[Ss]how me some cat health and wellness/.test(input)||/[Cc]at health/.test(input)) {
        return ("1. According to The Huffington Post, cats typically sleep for 12 to 16 hours a day.<br>2. Cats live longer when they stay indoors.<br>3. Cats can spend up to a third of their waking hours grooming.<br>"+
        "4. Your cat’s grooming process stimulates blood flow to his skin, regulates his body temperature and helps him relax.<br>5. Spaying and neutering can extend a cat’s life.<br>6. Grapes and raisins, as well as onions, garlic, and chives, are all extremely harmful foods for cats.");
    } else if (/[Ss]how me some cat communication cues/.test(input)||/[Cc]at communication cues/.test(input)) {
        return ("1. A cat with a question-mark-shaped tail is asking, “Want to play?”<br>2. A slow blink is a “kitty kiss.” This movement shows contentment and trust.<br>3. Cats have up to 100 different vocalizations.<br>4. Cats find it threatening when you make direct eye contact with them.<br>"+
        "5. If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you.");
    } else if (/[Ss]how me some quirky cat behavior and why they happen/.test(input)||/[Qq]uirky cat behaviour/.test(input)) {
        return ("1. Cats often attack your ankles when they’re bored.<br>2. Cats are very fussy about their water bowls; some prefer to ignore their bowls entirely in favor of drinking from the sink faucet.<br>3. Cats like to sleep on things that smell like their owners, such as their pillows and dirty laundry.<br>"
        +"4. If you can’t find your cat, you should look in a box or a bag, as these are some of their favorite hiding spots!");
    } else if (/[Ss]how me some cat facts/.test(input)||/[Cc]at facts/.test(input)) {
        return "1. Each cat’s nose print is unique, much like human fingerprints.<br>2. A cat’s learning style is about the same as a 2 to 3 years old child.<br>3. Cats dream, just like people do.<br>4. White cats with blue eyes are prone to deafness.";
    } else if (/[Ww]hat is the common cat diseases?/.test(input)||/[Cc]at disease/.test(input)) {
        return "1. Cancer<br>2. Diabetes<br>3. Feline Immunodeficiency Virus (FIV)<br>4. Feline Leukemia Virus (FelV)<br>5. Heartworm<br>6. High-Rise Syndrome<br>7. Rabies<br>8. Ringworm<br>9. Upper Respiratory Infections<br>10. Worms";
    } else if (/[Cc]at cancer/.test(input)||/[Cc]ancer/.test(input)) {
        return "Cats can get various kinds of cancer. The disease can be localized (confined to one area, like a tumor) or generalized (spread throughout the body).";
    } else if (/[Ww]hat causes cat cancer?/.test(input)||/[Ww]hat is the factors of cat cancer?/.test(input)) {
        return "Cancer is a “multifactorial” disease, which means it has no known single cause. However, we do know that both hereditary and environmental factors can lead to the development of cancer in cats.";
    } else if (/[Ww]hat is the symptoms of cat cancer?/.test(input)||/[Ww]hat is the sign of cat cancer?/.test(input)||/[Ss]ymptoms of cancer/.test(input)) {
        return "1. Swelling<br>2. Persistent sores or skin infections<br>3. Bad breath<br>4. Weight loss<br>5. Diarrhea<br>6. Scaly<br>7. Change in behavior";
    } else if (/[Hh]ow to prevent cat from getting cancer?/.test(input)||/[Pp]revent cancer/.test(input)) {
        return "1. Keeping your cat indoors will protect her from certain skin cancers caused by repeated sun exposure and sunburn<br>2. Breast cancer is a common cancer for cats, but it can be avoided by having your cat spayed before her first heat cycle.";
    } else if (/[Cc]at diabetes/.test(input)||/[Dd]iabetes/.test(input)) {
        return "It is important to understand that diabetes is considered a manageable disorder—and many diabetic cats can lead happy, healthy lives. Some may even go into remission!";
    } else if (/[Ss]how me the type of diabetes?/.test(input)||/[Tt]ype of diabetes/.test(input)) {
        return "Type 1 - lack of insulin production<br>Type 2 - impaired insulin production along with an inadequate response to the hormone";
    } else if (/[Ww]hat are diabetes symptoms in cats?/.test(input)||/[Dd]iabetes symptoms/.test(input)) {
        return "1. Change in appetite<br>2. Weight loss<br>3. Excessive thirst<br>4. Increased urination<br>5. Urinating in areas other than litter box<br>6. Dehydration<br>7. Unkempt hair coat<br>8. Urinary tract infection";
    } else if (/[Ww]hat causes cat getting diabetes?/.test(input)||/[Ff]actors of cats diabetes/.test(input)) {
        return "The exact cause of diabetes is unknown. Genetics, pancreatic disease, certain medications and abnormal protein deposits in the pancreas can play a role in causing this disorder.";
    } else if (/[Hh]ow to diagnose diabetes?/.test(input)||/[Ww]ays to identify diabetes/.test(input)||/[Hh]ow to detect diabetes/.test(input)) {
        return "To properly diagnose diabetes, your veterinarian will collect information about clinical signs, perform a physical examination and check blood work and urinalysis.";
    } else if (/[Hh]ow to prevent diabetes?/.test(input)||/[Hh]ow to avoid diabetes?/.test(input)||/[Pp]revent diabetes/.test(input)) {
        return "A proper diet and regular exercise can go a long way to avoid the development of feline diabetes. Aside from other negative effects, obesity is known to contribute to insulin resistance";
    } else if (/[Ff]eline Immunodeficiency Virus/.test(input)||/[Ff]IV/.test(input)||/[Ww]hat is FIV?/.test(input)) {
        return "Cats infected with FIV may not show symptoms until years after the initial infection occurred. Although the virus is slow-acting, a cat’s immune system is severely weakened once the disease takes hold. FIV cannot be transmitted from cat to human, only from cat to cat.";
    } else if (/[Ww]hat is the symptoms of FIV?/.test(input)||/[Ss]ymptoms of FIV/.test(input)) {
        return "1.Fever<br>2. Anemia<br>3. Weight loss<br>4. Poor appetite<br>5. Diarrhea<br>6. Sneezing<br>7. Discharge from eyes or nose<br>8. Behavior change<br>9. Skin redness or hair loss";
    } else if (/[Hh]ow FIV transmit/.test(input)||/[Tt]ransmission of FIV/.test(input)) {
        return "1. FIV is mainly passed from cat to cat through deep bite wounds<br>2. Less common mode of transmission is from an FIV-infected mother cat to her kitten<br>3. Any feline is susceptible, free-roaming, outdoor intact male cats who fight most frequently contract the disease";
    } else if (/[Hh]ow to prevent FIV/.test(input)||/[Ff]IV prevention/.test(input)||/[Hh]ow to prevent my cat from getting FIV/.test(input)||/[Hh]ow to avoid FIV/.test(input)) {
        return ("1. Keep your cat indoors<br>2. Avoiding any chance of contact with infected felines<br>3. If you walk your cat, keep him on a leash when outdoors<br>"+
        "4. If your cat is going to be spending any time in a cattery or in a home with other felines, make sure all cats have tested negative for FIV<br>5. You may also want to speak to your veterinarian about the FIV vaccine and if it is appropriate for your cat");
    } else if (/[Hh]ow to diagnose FIV?/.test(input)) {
        return "1. FIV infection is routinely diagnosed by blood testing<br>2. The FIV status of every cat should be known<br>3. Since it is possible for an infected mother cat to transfer FIV antibodies to her kittens, these kittens may test positive from their mother’s antibodies until they have cleared them from their systems";
    } else if (/[Hh]ow to treat FIV?/.test(input)) {
        return "1. Medication for secondary infections<br>2. Healthy<br>3. Palatable diet to encourage good nutrition<br>4. Fluid and electrolyte replacement therapy<br>5. Anti-inflammatory drugs<br>6. Immune-enhancing drugs<br>7. Parasite control";
    } else if (/[Ww]hat is FelV/.test(input)||/[Ff]elV/.test(input)) {
        return "FelV is a transmittable RNA retrovirus that can severely inhibit a cat’s immune system. It is one of the most commonly diagnosed causes of disease and death in domestic cats.";
    } else if (/[Ww]hat is the symptoms of FelV/.test(input)||/[Ww]hat is the sign of FelV/.test(input)||/[Ss]ymptoms of FelV/.test(input)) {
        return "1. Loss of appetite and weight loss<br>2. Poor coat condition<br>3. Fever<br>4. Diarrhea<br>5. Vision problems<br>6. Chronic skin disease<br>7. Enlarged lymph nodes";
    } else if (/[Hh]ow to prevent FelV/.test(input)||/[Pp]revent FelV/.test(input)||/[Hh]ow to avoid FelV/.test(input)) {
        return "1. There is a vaccine available for cats who are at risk of contracting FelV<br>2. As with any infectious disease, the best prevention is eliminating sources of exposure";
    } else if (/[Hh]ow to diagnose FelV/.test(input)||/[Ww]ays to identify FelV/.test(input)) {
        return "1. Most veterinarians and shelter professionals use the ELISA (enzyme-linked immunosorbent assay) test, which detects antigen to the FELV virus in the bloodstream<br>2. Tests like the IFA (indirect fluorescent antibody) test or PCR (polymerase chain reaction) test are recommended to confirm positive ELISA test results";
    } else if (/[Ww]hat is heartworm/.test(input)||/[Hh]eartworm/.test(input)) {
        return "Spread by infected mosquitoes, heartworm is increasingly being recognized as an underlying cause of health problems in domestic cats. Cats are an atypical host for heartworms. Heartworm primarily causes lung disease in cats. It is an important concern for any cat owner living in areas densely populated by mosquitoes.";
    } else if (/[Ww]hat is the symptoms of heartworm/.test(input)||/[Ww]hat is the sign of heartworm/.test(input)||/[Ss]ymptoms of heartworm/.test(input)) {
        return "1. Persistent cough<br>2. Breathing difficulties<br>3. Depression<br>4. Loss of appetite<br>5. Weight loss<br>6. Sporadic vomiting<br>7. Lethargy<br>8. Sudden death";
    } else if (/[Hh]ow to prevent heartworm/.test(input)||/[Hh]ow to avoid heartworm/.test(input)||/[Hh]eartworm prevention/.test(input)) {
        return "1. Several FDA-approved medications available that reliably prevent feline heartworm infection<br>2. Limit your cat’s exposure to mosquito-infested areas<br>3. Regular checkups are key to detecting early infections";
    } else if (/[Hh]ow to diagnose heartworm/.test(input)||/[Hh]ow to handle heartworm/.test(input)||/[Ww]ays to manage heartworm/.test(input)) {
        return "1. Routine testing includes a combination of blood tests<br>2. When cats show signs of respiratory difficulty and heartworm is suspected, diagnosis is usually based on a cat’s history, physical examination, radiographs, echocardiogram and blood tests";
    } else if (/[Ww]hat is High-Rise Syndrome/.test(input)||/[Ww]hat is HRS/.test(input)||/[Hh]RS/.test(input)) {
        return "Many pet parents eagerly open their windows to enjoy the weather during the summer months. Unfortunately, unscreened windows pose a real danger to cats, who fall out of them so often that the veterinary profession has a name for the complaint—High-Rise Syndrome. Falls can result in shattered jaws, punctured lungs, broken limbs and pelvises—and even death.";
    } else if (/[Hh]ow to prevent HRS/.test(input)||/[Hh]ow to avoid HRS/.test(input)||/[Hh]RS prevention/.test(input)) {
        return "1. Install snug and sturdy screens in all your windows<br>2. If you have adjustable screens, please make sure that they are tightly wedged into window frames";
    } else if (/[Ww]hat is rabies/.test(input)||/[Rr]abies/.test(input)) {
        return "Rabies is a viral disease that affects the brain and spinal cord of all mammals, including cats, dogs and humans.";
    } else if (/[Hh]ow rabies transmit/.test(input)||/[Tt]ransmission of rabies/.test(input)) {
        return ("1. Rabies is most often transmitted through a bite from an infected animal<br>2. It can be passed on when the saliva of an infected animal enters another animal’s body through mucous membranes or an open, fresh wound<br>"+
        "3. Unvaccinated cats who are allowed to roam outdoors are at the highest risk for rabies infection<br>4. Feral cat populations remain a reservoir host for the rabies virus");
    } else if (/[Hh]ow to prevent rabies/.test(input)||/[Hh]ow to avoid rabies/.test(input)||/[Rr]abies prevention/.test(input)) {
        return "Visit your veterinarian regularly or taking vaccination";
    } else if (/[Ww]hat is the symptoms of rabies/.test(input)||/[Ww]hat is the sign of rabies/.test(input)||/[Ss]ymptoms of rabies/.test(input)) {
        return "1. Change in behavior<br>2. Increased vocalization<br>3. Loss of appetite<br>4. Weakness<br>5. Disorientation<br>6. Paralysis<br>7. Seizures<br>8. Sudden death";
    } else if (/[Hh]ow to diagnose rabies/.test(input)||/[Ww]ays to identify rabies/.test(input)) {
        return "1. There is no accurate test to diagnose rabies in live animals<br>2. The direct fluorescent antibody test is the most accurate test for diagnosis, but it can only be performed after the death of the animal";
    } else if (/[Ww]hat can I do if my cat interacts with a rabid animal?/.test(input)) {
        return ("1. Put gloves on to protect yourself from infection<br>2. Call your veterinarian for an immediate appointment<br>3. A cat who is up to date with his vaccinations and who has been bitten by a possibly rabid animal should also be given a rabies booster vaccine immediately and kept under observation for 45 days<br>"+
        "4. Contact local animal control officers if the animal who bit your pet is still at large; they will be best able to safely apprehend and remove the animal from the environment");
    } else if (/[Ww]hat is ringworm/.test(input)||/[Rr]ingworm/.test(input)) {
        return "Although the name suggests otherwise, ringworm isn’t caused by a worm at all—but a fungus that can infect the skin, hair and nails. Not uncommon in cats, this highly contagious disease can lead to patchy, circular areas of hair loss with central red rings. Also known as dermatophytosis, ringworm often spreads to other pets in the household—and to humans too";
    } else if (/[Ww]hat is the symptoms of ringworm/.test(input)||/[Ww]hat is the sign of ringworm/.test(input)||/[Ss]ymptoms of ringworm/.test(input)) {
        return ("1. Skin lesions that typically appear on the head, ears and forelimbs<br>2. Cause flaky bald patches that sometimes look red in the center<br>3. In mild cases, there may be localized areas of redness or simply dandruff, while more severe infections can spread over a cat’s entire body<br>"+
        "4. It’s possible for a pet to carry ringworm spores and not show any symptoms whatsoever");
    } else if (/[Hh]ow ringworm transmit/.test(input)||/[Tt]ransmission of ringworm/.test(input)) {
        return ("1. Any cat can develop ringworm, but kittens less than a year old and geriatric cats are most prone to infection<br>2. Long-haired cats and those who are immunocompromised are also more susceptible<br>"+
        "3. Ringworm can quickly spread in shelters or other crowded environments<br>4. Warm and humid conditions tend to promote ringworm infections");
    } else if (/[Hh]ow to diagnose ringworm/.test(input)||/[Ww]ays to identify ringworm/.test(input)) {
        return ("1. Since some cats show few or no symptoms, a diagnosis of ringworm is rarely made just by looking at the skin<br>2. A veterinarian may use an ultraviolet light to diagnose ringworm, or may examine a fungal culture taken from a cat’s hair or skin cells<br>3. Frequently vacuum to rid the house of infected hairs and skin cells<br>"+
        "3. Skin biopsy and microscopic exam are sometimes also performed");
    } else if (/[Hh]ow to treat ringworm?/.test(input)||/[Hh]ow to handle ringworm?/.test(input)||/[Ww]ays to manage ringworm?/.test(input)) {
        return ("1. A veterinarian may prescribe a shampoo or ointment that contains a special medication to kill the fungus<br>2. Treat the cat’s environment to prevent infection from recurring<br>3. Frequently vacuum to rid the house of infected hairs and skin cells<br>"+
        "4. Wash the infected animals’ bedding and toys with a disinfectant that kills ringworm spores");
    } else if (/[Ww]hat is Upper Respiratory Infections/.test(input)||/[Uu]RIs/.test(input)) {
        return "A cat’s upper respiratory tract—the nose, throat and sinus area—is susceptible to infections caused by a variety of viruses and bacteria.";
    } else if (/[Ww]hat are the causes of URIs/.test(input)||/[Ww]hat causes URIs/.test(input)) {
        return ("1. Viruses are the most common causes of upper respiratory infections (URIs) in cats<br>2. These viruses can be transmitted from cat to cat through sneezing, coughing, or while grooming or sharing food and water bowls<br>"+
        "3. There are also upper respiratory infections in cats that are primarily caused by bacteria. Chlamydia and Bordetella—commonly found in shelters and areas with multiple cats—are two such bacterial infections.<br>4. Once infected, cats can become carriers for life, and though they may not show clinical signs, they can still transmit the viruses to others");
    } else if (/[Hh]ow to prevent URIs/.test(input)||/[Hh]ow to avoid URIs/.test(input)||/[Uu]RIs prevention/.test(input)) {
        return ("1. Keep your cat indoors to minimize the risk of exposure to infected animals<br>2. Properly isolate infected cats to protect other pets living in the same environment<br>3. Keep your cat up to date on vaccines as recommended by your vet<br>"+
        "4. Practice good hygiene and wash your hands thoroughly when handling multiple cats");
    } else if (/[Ww]hat is the symptoms of URIs/.test(input)||/[Ww]hat is the sign of URIs/.test(input)||/[Ss]ymptoms of URIs/.test(input)) {
        return "1. Sneezing<br>2. Congestion<br>3. Runny nose<br>4. Cough<br>5. Fever<br>6. Rapid breathing<br>7. Open-mouth breathing";
    } else if (/[Hh]ow to diagnose URIs/.test(input)||/[Ww]ays to identify URis/.test(input)) {
        return ("1. Age, vaccination status and physical condition all play a role in a cat’s susceptibility to upper respiratory infections<br>2. Cats who live in multi-cat households or shelters are most susceptible<br>3. Veterinarians have found that stress plays a role in causing outbreaks of URI, and cats in any shelter, cattery or boarding facility are generally experiencing high levels of stress<br>"+
        "4. Cats who have recovered from URI can become carriers, and may experience recurrences when stressed<br>5. Certain breeds like Persians and other flat-faced breeds have a predisposition to develop upper respiratory infections due to their facial structure");
    } else if (/[Hh]ow to treat URIs?/.test(input)||/[Hh]ow to handle URIs?/.test(input)||/[Ww]ays to manage URIs?/.test(input)) {
        return "1. Medications<br>2. Isolation<br>3. Rest<br>4. Support with fluids<br>5. Nutritional support";
    } else if (/[Ww]hat is worms/.test(input)||/[Ww]orms/.test(input)) {
        return "Cats can acquire a variety of intestinal parasites, including some that are commonly referred to as “worms.” Infestations of intestinal worms can cause a variety of symptoms. Some feline parasitic worms are hazards for human health as well.";
    } else if (/[Hh]ow to prevent worms/.test(input)||/[Hh]ow to avoid worms/.test(input)||/[Ww]orms prevention/.test(input)) {
        return ("1. Keep your cat indoors to avoid exposure to infected cats, rodents, fleas and feces<br>2. Make sure your home, yard and pets are flea-free<br>3. Practice good hygiene and wear gloves when changing cat litter or handling feces. It’s also important to frequently dispose of stool<br>"+
        "4. Ask your veterinarian to recommend an appropriate internal parasite treatment or prevention program for your cat");
    } else if (/[Ww]hat is the symptoms of worms/.test(input)||/[Ww]hat is the sign of worms/.test(input)||/[Ss]ymptoms of worms/.test(input)) {
        return "1. Diarrhea<br>2. Bloody stool<br>3. Weight loss<br>4. Vomiting<br>5. Constipation<br>6. Anemia<br>7. Coughing<br>8. Trouble breathing";
    } else if (/[Hh]ow to treat worms?/.test(input)||/[Hh]ow to handle worms?/.test(input)||/[Ww]ays to manage worms?/.test(input)) {
        return "Not all dewormers eradicate all types of worms. Your veterinarian will determine the type of worm(s) infestation(s) your cat has, and prescribe the best course of treatment.  Your veterinarian will also be able to tell you if the dewormer should be repeated, and when.";
    } else if (/[Bb]ye/.test(input)||/[Gg]oodbye/.test(input)||/[Ss]ee you again/.test(input)||/[Ii] need to go now/.test(input)) {
        return "Goodbye, hope to see you again.";
    } else if (/[Ss]how the nearby vet clinic/.test(input)||/[Nn]earby vet clinic/.test(input)||/[Vv]et clinic nearby/.test(input)){
        return "To find the nearby vet clinic please enter your current living state first~";
    } else if (/[Jj]ohor/.test(input)){
        return ("BATU ANIMAL CLINIC & SURGERY<br>16, JALAN SHAHBANDAR 6, TAMAN UNGKU TUN AMINAH, 81300 SKUDAI, JOHOR<br>07-5570166<br><a href='https://www.facebook.com/people/Batu-Animal-Clinic-Surgery/100036165381450/'>Official Website</a><br><br>"+
        "HAN VETERINARY & SURGERY<br>50, JALAN MOLEK 2/2, TAMAN MOLEK, 81100 JOHOR BAHRU, JOHOR<br>07-3555705<br><a href='https://www.facebook.com/people/Han-Veterinary-Surgery/100064009508485/'>Official Website</a><br><br>"+
        "SHAN ANIMAL CLINIC & SURGERY<br>24, LORONG KURAU 9, TAMAN SUNGAI ABONG, 84000 MUAR, JOHOR<br>07-9150006<br><a href='https://my270359-shan-animal-clinic-surgery.contact.page/'>Official Website</a><br><br>"+
        "PERMAS ANIMAL CLINIC & SURGERY<br>9, JALAN PERMAS 10/3, BANDAR BARU PERMAS JAYA, 81750 MASAI, JOHOR<br>07-3822893<br><a href='https://permas-animal-clinic-surgery.business.site/'>Official Website</a><br><br>"+
        "P.E.T.S VETERINARY CENTRE<br>103, JALAN SUSUR PERDANA TENGAH, TAMAN BUKIT PERDANA, 83000 BATU PAHAT, JOHOR<br>07-4314653<br><a href='https://m.facebook.com/profile.php?id=126635800810126'>Official Website</a><br><br>"+
        "NIVEETHA ANIMAL CLINIC<br>8, JALAN NAGASARI 1, BANDAR SEGAMAT BARU, 85000 SEGAMAT, JOHOR<br>019-7546085<br><a href='https://www.top-rated.online/cities/Segamat/place/p/8104987/Klinik+Haiwan+Niveetha'>Official Website</a>");
    } else if (/[Kk]edah/.test(input)){
        return ("ANIMAL CENTRE & SURGERY<br>2504-A PEKAN PUMPONG, 05250 ALOR SETAR, KEDAH<br>04-7334394<br><a href='https://m.facebook.com/profile.php?id=112313232173489&__tn__=%2CHH-R'>Official Website</a><br><br>"+
        "KLINIK HAIWAN SCHRODINGER<br>8, TAMAN HELANG PERDANA, KUAH, 07000 LANGKAWI, KEDAH<br>04-9610019<br><a href='https://m.facebook.com/profile.php?id=408170606030663'>Official Website</a><br><br>"+
        "LOVING ANIMAL CLINIC<br>317, LORONG 9, TAMAN BANDAR BARU AZHAM, 08000 SUNGAI PETANI, KEDAH<br>04-4410813<br><a href='https://m.facebook.com/profile.php?id=130435043789804'>Official Website</a>");
    } else if (/[Kk]elantan/.test(input)){
        return ("KLINIK HAIWAN WAKAF BHARU<br>LOT 1956 B, JALAN PUTERI SAADONG, WAKAF BHARU, 16250 TUMPAT, KELANTAN<br>011-11488051<br><a href='https://m.facebook.com/profile.php?id=408058482948764&__tn__=C-R'>Official Website</a>");
    } else if (/[Mm]elaka/.test(input)){
        return ("CHONG VETERINARY CLINIC<br>5, JALAN INANG 1, TAMAN PAYA RUMPUT UTAMA, 76450 MELAKA<br>06-3368304<br><a href='https://www.facebook.com/people/Chong-Veterinary-Clinic/100054511748837/'>Official Website</a><br><br>"+
        "I CARE VETERINARY CLINIC<br>26, JALAN IKS M/5, TAMAN MERDEKA PERMAI, 75350 MELAKA<br>06-3320816<br><a href='https://m.facebook.com/profile.php?id=267582374098809'>Official Website</a><br><br>"+
        "KIM VETERINARY CLINIC & SURGERY<br>11, JALAN MAGENTA 2, TAMAN BERTAM MUTIARA, LEBUH AMJ, CHENG, 75250 MELAKA<br>06-3347366<br><a href='https://kim-veterinary-clinic-surgery.business.site/'>Official Website</a><br><br>"+
        "MAJU ANIMAL CLINIC<br>NO 25, JALAN KANAN 1, TAMAN CERGAS, BATU BERENDAM, 75350 MELAKA<br>06-3173669<br><a href='https://my270662-maju-animal-clinic.contact.page/'>Official Website</a><br><br>"+
        "VALLY ANIMAL CLINIC (M) SDN BHD<br>109, JALAN LAKSAMANA CHENG HO, 75000 MELAKA, MELAKA<br>06-2849918<br><a href='https://www.facebook.com/people/Vally-Animal-Clinic-Melaka/100063493753493/'>Official Website</a>");
    } else if (/[Nn]egeri [Ss]embilan/.test(input)||/[Nn]9/.test(input)){
        return ("KLINIK HAIWAN EE<br>197, JALAN RAHANG, TAMAN CHONG LOONG, 70100 SEREMBAN, NEGERI SEMBILAN<br>06-7617211<br><a href='https://my212321-klinik-haiwan-ee.contact.page/'>Official Website</a><br><br>"+
        "KLINIK HAIWAN SENAWANG<br>14, JALAN MATAHARI 1/1, TAMAN MATAHARI HEIGHTS, 70450 SEREMBAN, NEGERI SEMBILAN<br>06-6788675/ 06-6788680<br><a href='https://my.polomap.com/ms/seremban/29855'>Official Website</a><br><br>"+
        "KLINIK VETERINAR DAN SURGERI NORMAN<br>43G, JALAN DATARAN KEMUNING 2, DATARAN KEMUNING SENAWANG, 70450 SEREMBAN, NEGERI SEMBILAN<br>06-6770132<br><a href='https://m.facebook.com/profile.php?id=167790583986344'>Official Website</a><br><br>"+
        "YARL LIVESTOCK SERVICES<br>20/1, PERSADA DAMAI, BANDAR ENSTEIC, 71760 NEGERI SEMBILAN<br>06-7913736<br><a href='https://drsocka.tripod.com/'>Official Website</a>");
    } else if (/[Pp]ahang/.test(input)){
        return ("EAST COAST ANIMAL MEDICAL CENTRE<br>A615, GROUND FLOOR, JALAN BESERAH, 25300 KUANTAN, PAHANG<br>09-5687168<br><br>"+
        "JAWHARI CAT MEDICAL CENTRE<br>A-39, KUANTAN AVENUE, JALAN BESERAH, 25000 KUANTAN, PAHANG<br>09-5143399<br><a href='https://jawhari-cat-medical-centre.business.site/'>Official Website</a><br><br>"+
        "KLINIK HAIWAN & SURGERI JERANTUT<br>LOT 4265, TINGKAT BAWAH, JALAN KUANTAN, 27000 JERANTUT, PAHANG<br>019-459 2428<br><a href='https://ms-my.facebook.com/vetjerantut/'>Official Website</a><br><br>"+
        "KLINIK HAIWAN KUANTAN<br>19A, JALAN HAJI AHMAD 2, 25300 KUANTAN, PAHANG<br>09-5172233<br><br>"+
        "PAHANG ANIMAL CLINIC<br>A-533, JALAN TELOK SISEK, 25250 KUANTAN, PAHANG<br>09-5686292<br><a href='https://ms-my.facebook.com/pahanganimalclinic/'>Official Website</a>");
    } else if (/[Pp]erak/.test(input)){
        return ("ANIMAL REPUBLIC VETERINARY CLINIC<br>14, BERCHAM BISTARI 1, MEDAN BERCHAM BISTARI, 31400 IPOH, PERAK<br>013-5280028<br><a href='https://www.facebook.com/wecareforyourfurbabies/'>Official Website</a><br><br>"+
        "KLEBANG VETERINARY CLINIC<br>18, JALAN PPK 2, PUSAT PERDAGANGAN KLEBANG, 31200 CHEMOR, PERAK<br>018-7918184<br><a href='https://klebang-veterinary-clinic.business.site/'>Official Website</a><br><br>"+
        "KLINIK HAIWAN JAYA<br>105-G, JALAN DENAI INTAN, BANDAR BARU, 36000 TELUK INTAN, PERAK<br>05-6210287<br><br>"+
        "KLINIK HAIWAN PERTAMA<br>35, JALAN LUMUT, TAMAN SENTOSA, 32000 SITIAWAN, PERAK<br>05-6920302<br><br>"+
        "LAKEVIEW ANIMAL CLINIC<br>5, SUSUR ILBP 4, BUSINESS PARK, JALAN ISTANA, 34000 TAIPING, PERAK<br>017-4516107<br><br>"+
        "PAW PAW ANIMAL CLINIC<br>12, PERSIARAN ORKID 1, TAMAN ORKID, 31000 BATU GAJAH, PERAK<br>05-3656150<br><a href='https://www.facebook.com/people/PAW-PAW-ANIMAL-CLINIC/100064160496052/'>Official Website</a><br><br>"+
        "V CARE KLINIK HAIWAN<br>22, JALAN WAWASAN 1, TAMAN WAWASAN JAYA, 34200 PARIT BUNTAR, PERAK<br>05-7169595<br><a href='https://ms-my.facebook.com/vcarepb/'>Official Website</a><br><br>"+
        "WONDERVET ANIMAL CLINIC<br>NO. 262, JALAN PPMP 3/4, 32040 SERI MANJUNG, PERAK<br>018-7804313<br><a href='https://wondervet-animal-clinic.business.site/'>Official Website</a>");
    } else if (/[Pp]ulau [Pp]inang/.test(input)){
        return ("ANGSANA VETERINARY CLINIC<br>31A, MEDAN ANGSANA, BANDAR BARU AYER ITAM, 11500 GEORGE TOWN, PULAU PINANG<br>04-8275152<br><a href='https://veterinary-clinic-in-penang.business.site/'>Official Website</a><br><br>"+
        "DR ANTHONY ANIMAL CLINIC<br>2, LORONG PERNIAGAAN 1, PUSAT PERNIAGAAN ALMA, 14000 BUKIT MERTAJAM, PULAU PINANG<br>019-4204908<br><a href='https://dr-anthony-animal-clinic.business.site/'>Official Website</a><br><br>"+
        "HOPE VETERINARY CENTER<br>12, JALAN PANTAI JERJAK, TAMAN PANTAI JERJAK, 11900 SUNGAI NIBONG, PULAU PINANG<br>04-6560113<br><a href='https://www.facebook.com/people/Hope-Veterinary-Centre/100054455170823/'>Official Website</a><br><br>"+
        "WINDSOR ANIMAL HOSPITAL<br>C-G-7, VANTAGE DESIRAN, JALAN DESIRAN TANJUNG, 10470 TANJUNG TOKONG, PULAU PINANG<br>04-8990055<br><a href='https://www.windsor-animalhospital.com/'>Official Website</a><br><br>"+
        "PAWSITIVE PET ANIMAL CLINIC<br>45, LORONG 22/SS1, BANDAR TASEK MUTIARA, 14120 SIMPANG AMPAT, PULAU PINANG<br>010-8838739<br><a href='https://www.facebook.com/PawsitivePetAnimalClinic/'>Official Website</a>");
    } else if (/[Ss]abah/.test(input)){
        return ("CENTURY ANIMALS MEDICAL CENTRE<br>GROUND FLOOR LOT 25, BLOK C, PLAZA UTAMA, JALAN PENAMPANG BY-PASS, 88200 KOTA KINABALU, SABAH<br>088-731032<br><a href='https://www.facebook.com/centuryanimal/'>Official Website</a><br><br>"+
        "HAPPY VETERINARY CLINIC & SURGERY<br>LOT 5-GF, UTAMA ZONE 3, IJM, MILE 6, NORTH ROAD, 90000 SANDAKAN, SABAH<br>089-232323<br><br>"+
        "KINABALU ANIMAL CLINIC<br>LOT 6, LORONG DURIAN 3, KIAN YAP INDUSTRIAL ESTATE, 88450 KOTA KINABALU, SABAH<br>088-385804<br><a href='https://www.kinabaluvet.my/'>Official Website</a><br><br>"+
        "SANDAKAN VETERINARY CLINIC<br>2A & 2B, TAI FAI YIN 4, LABUK ROAD 8TH MILE, 90009 SANDAKAN, SABAH<br>089-660691<br><a href='https://www.facebook.com/people/Sandakan-Veterinary-Clinic/100066588471215/'>Official Website</a><br><br>"+
        "SUNNY GARDEN VETERINARY CLINIC<br>LOT 10, GROUND FLOOR, MILE 1 1/2 TUARAN ROAD, P.O. BOX 10372, 88804 KOTA KINABALU, SABAH<br>088-257275<br><a href='https://www.facebook.com/sunnygardenvet/'>Official Website</a><br><br>");
    } else if (/[Ss]arawak/.test(input)){
        return ("ANGEL ANIMAL CLINIC<br>LOT 163, JALAN TANJUNG, 98000 MIRI, SARAWAK<br>085-417128<br><a href='https://m.facebook.com/profile.php?id=235720076498162'>Official Website</a><br><br>"+
        "CHENG ANIMAL CLINIC & SURGERY<br>SHOPLOT 23, SIBIYU UTAMA COMMERCIAL CENTER, 97000 BINTULU, SARAWAK<br>08-6316729<br><a href='https://m.facebook.com/Dr-Cheng-Animal-Clinic-Surgery-208244035877085/photos/'>Official Website</a><br><br>"+
        "CITY VETERINARY CENTRE<br>NO.38, LOT 94, SANNY ESTATE, JALAN TABUAN, 93200 KUCHING, SARAWAK<br>082-243993<br><a href='https://m.facebook.com/profile.php?id=1411201419093757&__tn__=C-R'>Official Website</a><br><br>"+
        "J & J ANIMAL CLINIC<br>LOT 2062, JALAN MS1/6, MARINA SQUARE 1, 98000 MIRI, SARAWAK<br>010-9820661<br><a href='https://www.facebook.com/JnJanimalclinic/'>Official Website</a><br><br>"+
        "PRIMAVET ANIMAL CLINIC<br>LOT 2453, ASHRAF AVENUE, JALAN DEPO, PETRA JAYA, 93050 KUCHING, SARAWAK<br>012-8522258<br><a href='https://www.facebook.com/primavet/'>Official Website</a>");
    } else if (/[Ss]elangor/.test(input)){
        return ("ANIMED VETERINARY CENTER<br>28, JALAN KASTURI 3, OFF JALAN BALAKONG, 43200 BATU 11, CHERAS, SELANGOR<br>03-90817643<br><a href='https://www.facebook.com/Animedvetcenter/'>Official Website</a><br><br>"+
        "CITIVET ANIMAL CLINIC<br>24, JALAN BP 6/13, BANDAR BUKIT PUCHONG, 47100 PUCHONG, SELANGOR<br>03-80685552<br><a href='https://www.facebook.com/CitivetPuchong/'>Official Website</a><br><br>"+
        "HAND N PAWS VETERINARY CLINIC<br>BG 21, JALAN TROPICANA SELATAN 1, MERCHANT SQUARE, 47410 PETALING JAYA, SELANGOR<br>03-78046539<br><a href='https://www.facebook.com/pages/Hand%20'n'%20Paws/202250219796237/'>Official Website</a><br><br>"+
        "STAR PETS ANIMAL CLINIC<br>LOT PT 4577 (SPCA SELANGOR), JALAN KERJA AYER LAMA, 68000 AMPANG JAYA, SELANGOR<br>03-42565312<br><a href='https://www.facebook.com/starpetsanimalclinic/photos/'>Official Website</a><br><br>"+
        "SHAH ALAM VETERINARY CLINIC<br>63-G, JALAN SNUKER 13/28, SEKSYEN 13, TADISMA BUSINESS CENTRE, 40000 SHAH ALAM, SELANGOR<br>03-55116182<br><a href='https://shah-alam-veterinary-clinic-klinik-veterinar-shah.business.site/'>Official Website</a><br><br>"+
        "PASSIONATE ANIMAL CLINIC<br>12A, JALAN BP 5, TAMAN BAYU PERMAI, 48000 RAWANG, SELANGOR<br>03-60935177<br><a href='https://www.facebook.com/passionateanimalclinicrawang/'>Official Website</a>");
    } else if (/[Tt]erengganu/.test(input)){
        return ("KLINIK VETERINAR HAIWANKU<br>WISMA ETAWIN, LOT 3629, JALAN BUKIT KECIL, 21100 KUALA TERENGGANU, TERENGGANU<br>09-6239325/ 016-9869325<br><a href='https://ms-my.facebook.com/klinikhaiwankualaterengganu/'>Official Website</a><br><br>"+
        "DRNOR VETERINARY CLINIC<br>239, LORONG PASAR, KAMPUNG GONG KAPAS, 21100 KUALA TERENGGANU, TERENGGANU<br><a href='https://www.facebook.com/CatCareCentre/'>Official Website</a>");
    } else if (/[Ww]ilayah [Pp]ersekutuan/.test(input)||/[Kk][Ll]/.test(input)||/[Ww]Pp[Kk][Ll]/.test(input)){
        return ("VETS FOR PETS ANIMAL CLINIC<br>5, JALAN SOLARIS 4, SOLARIS MONT KIARA, 50480 KUALA LUMPUR<br>014-9194980<br><a href='https://www.vpac.com.my/'>Official Website</a><br><br>"+
        "PREVENTICARE VETERINARY CLINIC<br>15G, JALAN 1/114 KUCHAI BUSINESS CENTRE, JALAN KUCHAI LAMA, 58100 KUALA LUMPUR<br>011-11328113<br><a href='https://www.facebook.com/people/Preventicare-Veterinary-Clinic/100070332249350/'>Official Website</a><br><br>"+
        "KLINIK VETERINAR MUEZZA<br>G-3, RESIDENSI GOMBAK 126, NO 133 JALAN GOMBAK, 53000 GOMBAK, KUALA LUMPUR<br>03-40315082<br><a href='https://m.facebook.com/profile.php?id=280683099081683&__tn__=C-R'>Official Website</a><br><br>"+
        "DAMANSARA HEIGHTS VETERINARY CLINIC<br>79, PLAZA DAMANSARA, JALAN MEDAN SETIA 1, 50490 KUALA LUMPUR, KUALA LUMPUR<br>03-20956877<br><a href='https://damansaraheightsveterinaryclinic.business.site/'>Official Website</a><br><br>"+
        "HAEMAS HAPPY PAWS<br>2/10, JALAN UDANG SIAR 2, TAMAN SRI SEGAMBUT, 52000 KUALA LUMPUR<br>012-3024450<br><a href='https://m.facebook.com/media/set/?vanity=irc.com.my&set=a.1903545439897207'>Official Website</a>");
    } else if (/[Pp]erlis/.test(input)){
        return ("KLINIK HAIWAN DAN SURGERI KANGAR<br>JALAN KANGAR - ALOR SETAR, 01000 KANGAR, PERLIS<br>04-9767175<a href='https://m.facebook.com/profile.php?id=276465352824134&__tn__=C-R'>Official Website</a>");
    } else if (/[Ii] dont know the exact breed of my cat/.test(input)){
        return ("Maybe you can figure it out at our cat recognition webpage <a href = 'http://127.0.0.1:5500/Recognition.html'>here</a>");
    } else {
        return "MeowBot can't understand you. If you have inquiry about your cat's health, you can go to <a href = 'http://127.0.0.1:5500/Cat%20Wiki.html'>here</a>";
    }
}

                                                                            