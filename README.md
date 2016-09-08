# Texting Simulator

Simulates texting, and back and forth text conversations.

### type()

Simply pass a string, element, and chpm and type() will simulate typing at the chpm rate.

Determine your chpm at http://www.powertyping.com/mo/testmobile.html

### convo()

Pass string, element, wpm, optional rate, and optional callback and convo() will simulate a back and forth conversation.

You may pass an option rate (e.g. 2, 3, 4, etc.) and strings will return at 2x, 3x, 4x, etc. speeds.

E.g. convo("How's it going?", document.getElementById('chatBox'), 45, { rate: 2 });
