<body class="fx-embedded">
  <div id="anonymousWebRTC">
    <!-- keep EVERYTHING you already have exactly the same, inside this div -->
    <div id="main" style="display: none">
      ...
    </div>

    <div id="reload" style="display: none">
      ...
    </div>

    <div id="calling" style="display: none">
      ...
    </div>
  </div>

  <!-- scripts stay at the bottom -->
  <script type="text/javascript" src="./jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="./debug.js?v=1634266640747"></script>
  <script type="text/javascript" src="./gsRTC.min.js?v=1634266640747"></script>
  <script type="text/javascript" src="./webRTC/js/language.js?v=1634266640747"></script>
  <script type="text/javascript" src="./webRTC/js/main.js?v=1634266640747"></script>

  <!-- ✅ ADD THIS -->
  <script>
    // Force the SDK to initialize devices and show the UI
    window.addEventListener("load", function () {
      if (window.startDevice) window.startDevice();
    });
  </script>
</body>
