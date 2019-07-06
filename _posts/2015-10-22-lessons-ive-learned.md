---
layout: post
title:  "Lessons I’ve learned in the last 12 years"
date:   2015-10-22 06:57:00 -0700
categories: career related
---

## Work at a job you love
This is huge. Believe me, if you don't love your job, it can and will eventually cause you complications in life.

I love Intel as a company and I spent nearly 3 years there. During my time there, I met some amazing people and did some great things. Ultimately, the job wasn't for me. Manufacturing processors is their core business, which means the process for my manufacturing group was extremely conservative. Changes could potentially take *years* to get into production; it's a long term game.

Being in this kind of environment was tough for me- *I personally love being able to see my work make a positive impact and having the ability to fix anything that's a pain point.* Since making changes to the production environment can be cost prohibitive, the business chooses to leaves some bugs in place since it's cheaper for folks to use a documented work-around than to fix the root cause. This drove me nuts.

How can making a change be cost prohibitive? Fixing one line of code is easy, right? Well... in reality, we'd need to get permission to (as a department) regression test the entire system to make sure this one change doesn't break anything else, bring results from those tests to review with all stakeholders to prove the change is safe and justified, and then (assuming it gets approved by those stakeholders), find a time when the factory is already scheduled to be down (maybe for tool maintenance). In an environment where downtime in minutes can be measured in millions of dollars, the business can't risk taking the factory down for a simple code change. And this deployment process would then need to be repeated for each factory worldwide. Unless you have a critical hot-fix, your proposed changes aren't likely to be included until the next major process change.

After two years of being in this kind of environment, I was worn down and burned out. *I tried so hard to make a personal impact to the business but I felt like I wasn't able to change anything*. The stress I put myself through combined with having obsessive compulsive disorder (and not knowing it at the time) was causing me to have extreme anxiety and depression. I ended up quitting before hitting 3 years which, in retrospect, was a great life-changing decision for me.

My current job at GoDaddy has been amazing. I joined as a C++ dev back in 2008 and was immediately making changes that would get pushed to production. I'd get feedback from our support staff and even directly from customers and we could make changes to help them out. I honestly love the work I do, the people I work with, and the customers that use our products. Being incredibly happy at work spilled over to my personal life. I cared enough about myself to seek help for OCD and not long after that, I met my wife.

## Software that works is king; improve it in iterations
This is something that seems obvious to me, but I don't think it gets enough attention because it's not a "sexy" topic. *Having code that works is the single most important goal from a business perspective.* Period. Re-usable code, maintainable code, efficient code, using a bleeding edge version of a library / technology... these are all great things, but ultimately they're worthless if the software doesn't fulfill its job. Features are why people pay us to make software for them and we shouldn't forget that.

We've all been in those situations where you start looking at code written by a co-worker and you start getting emotional. *"Whoever wrote this code IS AN IDIOT and deserves to be shot"*. How about that person that copy/pastes everything from Stack Overflow... or the person who has a gigantic function with a 10,000 line switch statement, because they don't know any better. Then there are the extreme cases which make you want to gouge your eyeballs out with a spoon, like folks using a for loop instead of a sleep statement. I think it's a natural human response for a developer to make a judgement and *try* to justify reworking this code in some way.

```cpp
// HorribleCode.cpp
bool condition = (1 == 1);
if (condition == true) {
  DoThing1();
} else if (condition == false) {
  DoThing2();
} else{
  // Seriously? Whoever put this code here needs to be shot.
  throw std::exception("Wow, boolean is not true or false, LOL");
}
```

But you need to fight that urge. Put yourself into the shoes of the business or product owner and try to justify this rewrite. If this code is already in production, it's already making someone money. Best case scenario, your newly rewritten code would do exactly what it already does from a feature perspective; worst case, and very commonly, the code is rewritten and features that customers use or that make money are were accidentally left out along the way. And hopefully you don't introduce bugs. There are times where rewrites are justified, but those should be very rare and extreme situations.

Your best plan for a scenario like this is to try and refactor the code a piece at a time, as you touch each piece. This can be tricky and needs to be done carefully; you need to change the code without changing any of the functionality. If you don’t take your time and properly refactor it, instead opting for a rewrite, chances are high that you’ll miss something. Some piece of business logic that the poor soul before you put in place after something horrible happened which may have cost the company money and/or downtime.

Lastly, people need to use your code. Putting something out in front of customers, even if it’s not exactly what they want, is huge. It's a way to evaluate if your code is doing its job. Many times the customer doesn't know what they want, which is a perfect reason to take an iterative approach. Once you get feedback you can start making small tweaks. You'll almost never get it right on your first try.

## Work hard to improve your communication skills
Communication is hands down the most important skill for your job. It's a vital skill for expressing ideas, thoughts and feelings, and building relationships.

### On making mistakes and taking things personally
Everyone makes mistakes. If you make a mistake or accidentally introduce a bug, please save everyone time by admitting you made a mistake and asking for help. Your co-workers are there to help you. If you suspect someone has introduced a bug or you think they are making a bad design decision, try to think of a constructive way to bring about a discussion.

Never make (or take) any criticisms personal. Be careful on how you give criticism and don't attack people personally. If you find yourself being attacked, take a deep breath or step away for a minute. Sometimes criticism, especially if you're stressed out, can feel like a personal attack when people choose poor words. If that is not the case and you're flat out being attacked personally, you'll want to bring this to human resources immediately. Having a hostile work relationship between folks is bad for everybody.

### On asking for help and receiving criticism
Not knowing about a topic and/or asking for help is not a sign of weakness; everybody has room for improvement. Try to think about feedback as getting free useful advice. If you take an attitude of humbleness, you open the door for folks to share their knowledge with you... not only the answer to your question, but also the "Why?" behind it. Getting a chance to learn from someone that knows more than you in a given area is a valuable opportunity. *When you have room to improve, you have potential to be better than you already are. If you don’t think you can possibly get better, you’re telling the world that you don’t have any potential.*

### Attitude is everything
Be positive- it's contagious. After you finish working on code with another person, thank them. Treat people with respect. If you don't like ideas being presented by folks, don't complain; brainstorm your own solution and propose it to the group. When fellow employees look up to you, support and mentor them in their growth; this is your chance to share an area of expertise to help them reach their goals.

## Learning is a full time job and it never ends
Over my career, I’ve always found myself to go through a particular cycle:

1. Begin learning a technology I’m not familiar with
2. Get very familiar with this technology
3. Consider myself pretty damn good at this technology
4. Meet someone better than me at this topic and become humbled, realizing “wow, I feel like a complete idiot after seeing how good that person is”
5. Continue learning this technology
6. Back to step 4, until technology is obsolete / not in demand

12 years in, I’ve built myself a hefty portfolio of knowledge. I consider myself to be extremely strong with C, C++, C#, and SQL. But things change; JavaScript has blown up in popularity in the past few years. Ruby and Python both have robust frameworks (Rails, Django) with excellent testing frameworks (rspec, python-nose). After working with JavaScript/Ruby/Python daily, I’m finally at a point where I feel competent with them, but it’s been a humbling experience.

Just this last January, I got involved with a documentation effort for the [Ember.js](https://emberjs.com/) framework. Jumping into this project head first, I got a chance to communicate and build a relationship with a few members of the core team and many folks in the community. While everyone I met had been extremely supportive of me, I couldn't help but feel mediocre at best if I compare myself to these folks (when it comes to overall comprehension of JavaScript). But I realized it was an opportunity for me to go into "sponge mode", soaking up as much knowledge as humanly possible. Getting the chance to rub elbows virtually with these folks has built up my knowledge of JavaScript significantly and also brought up my confidence level. Plus I’d like to think I’ve made a few new friends and made at least one valuable contribution. I’m still eager to continue contributing.

Technologies change; new languages and new ways of doing things emerge and become popular. You’ll always be going through a cycle like this and you will continue fighting the good fight until you either die or retire; it comes with the job.
