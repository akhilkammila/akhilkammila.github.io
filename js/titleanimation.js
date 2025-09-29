const elements=document.querySelectorAll("span.titleletter");

console.log(elements)

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener('animationend', function(e) {
    elements[i].classList.remove('animated');
	});

  elements[i].addEventListener('mouseover', function(e) {
    elements[i].classList.add('animated')
  })
}
+(function() {
+	try {
+		const elements=document.querySelectorAll("span.titleletter");
+		if (!elements || elements.length === 0) {
+			console.warn("No title letter elements found for animation");
+			return;
+		}
+		console.log("Title animation elements found:", elements.length);
+		for (let i = 0; i < elements.length; i++) {
+			elements[i].addEventListener('animationend', function(e) {
+				elements[i].classList.remove('animated');
+			});
+
+			elements[i].addEventListener('mouseover', function(e) {
+				elements[i].classList.add('animated')
+			})
+		}
+	} catch (error) {
+		console.error("Title animation initialization failed:", error);
+	}
+})();
\ No newline at end of file