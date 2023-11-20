$(document).ready(function(){
    $("#downloadBtn").on("click", function () {
        var divContents = $("#html_content").html();
        console.log(divContents);
        var printWindow = window.open('', '總覽', 'height=400,width=800');
        printWindow.document.write('<html><head><title>多多益善</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        //開啟列印視窗
        printWindow.print();
      });
})

