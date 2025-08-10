---
title: "자료실"
permalink: /resources/
redirect_from:
  - /resources
---
<!-- below iframe works -->
<!-- <body>
<iframe src="/files/1차-XRD_기본_이해-김창수.pdf#toolbar=0" width="120%" height="600px" style="border: none;"></iframe> -->

<!-- <script>
        $('#iframe').ready(function() {
           setTimeout(function() {
              $('#iframe').contents().find('#download').remove();
           }, 100);
        });
</script>> -->

<!-- <script>
        document.getElementById('iframe').addEventListener('load', function() {
          const iframeDocument = this.contentDocument;
          if (iframeDocument) {
            iframeDocument.addEventListener('contextmenu', function(e) {
              e.preventDefault();
            });
          }
        });
    </script> -->

<!-- below works -->
<!-- <script>
  document.addEventListener('contextmenu', (e) => {
    const inPdf =
      e.target.closest('#viewerContainer') || e.target.closest('.pdfViewer');
    if (inPdf) e.preventDefault();
  }, { capture: true });

  document.addEventListener('keydown', (e) => {
    const k = (e.key || '').toLowerCase();
    if ((e.metaKey || e.ctrlKey) && (k === 'p' || k === 's')) {
      e.preventDefault(); e.stopPropagation();
    }
  }, { capture: true });
</script>
</body> -->


