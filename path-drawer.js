reearth.ui.show(
  `
<style>
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2)
      format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  
  html,
  body {
    margin: 0;
    height: auto;
    overflow:hidden;
    width: 312px;
    max-width: 312px;
  }

  #wrapper {
    display: block;
    gap: 20px;
    background: #171618;
    overflow: hidden;
    max-width: 312px;
    max-height: 666px;
    border-radius: 4px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #28272f;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #171618;
    overflow: hidden;
    max-width: 312px;
    max-height: 666px;
  }

  .section .extendedh, .extendedh { width: 46px; cursor: pointer;}
  .section .extendedv, .extendedv { height: 46px; }
  #wrapper { box-sizing: border-box; }
  .extendedh body, .extendedh #wrapper { width: 46px; border-radius: 4px;}
  .extendedv body, .extendedv #wrapper { max-height: 317px; height: 46px;}

  .height-46 {
    height:46px;
    width: 46px;
    border-radius: 4px;
  }

  div#form-wrapper {
    margin-bottom: 18px;
    margin-left: 15px;
    margin-right: 15px;
    max-width:312px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #171618;
  }
  .section .extendedh, .extendedh { width: 46px; cursor: pointer;}
  .section .extendedv, .extendedv { height: 46px; }
  #wrapper { box-sizing: border-box; }
  .extendedh body, .extendedh #wrapper { width: 46px; border-radius: 4px;}
  .extendedv body, .extendedv #wrapper { max-height: 317px; height: 46px;}

  .height-46 {
    height:46px;
    width: 46px;
    border-radius: 4px;
  }

  div#form-wrapper {
    margin-bottom: 18px;
    margin-left: 15px;
    margin-right: 15px;
    max-width:312px;
  }
  p,
  h3,
  span,
  label {
    color: #bfbfbf;
  }
  #title {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    margin: 0px;
    height: 30px;
    background: #171618;
    border-radius: 4px 4px 0px 0px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    padding-bottom: 16px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
  }

  p.title-p {
    margin-top: 15px;
    margin-left: 5px;
  }

  span#logo {
    position: relative;
    top: 4px;
    margin-right: 8px;
  }
  .group-title {
    width: 100%;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 12px;
  }
  .group-title p {
    margin: 0px 8px;
  }
  .input-title {
    display: block;
    overflow: hidden;
    font-size: 12px;
    line-height: 16px;
    padding: 8px 0px 8px 0px;
    width: 100px;
    margin: 0px;
    float: left;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  input[type="number"], input[type="text"],
  select {
    width: calc(100% - 120px);
    background: #171618;
    border: 1px solid #4a4a4a;
    height: 27px;
    color: #c7c5c5;
    font-size: 12px;
    padding-left: 7px;
    float: right;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  /* Chrome, Safari, Edge, Opera */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  *:focus {
    outline: none;
  }
  
  .guide {
    display: block;
    width: 100%;
    font-size: 12px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    margin-bottom: 10px;
  }
  #clean-all-fields {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #3b3cd0;
    border: solid 1px #3b3cd0;
    background: transparent;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    border-radius: 4px;
    padding: 5px;
    margin-right: 7px;
  }
  #clean-all-fields,
  #generate-model, #download {
    cursor: pointer;
  }
  
  #clean-all-fields,
  #generate-model {
    width: 149px;
    height: 30px;
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
  }
  #generate-model,
  .blue-btn {
    font-family: "Roboto" !important;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    background: #3b3cd0;
    border: solid 1px #3b3cd0;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    border-radius: 4px;
    padding: 5px;
    height: 30px;
    width: 100%;
    cursor: pointer;
  }
  
  button {
    display: inline-block;
  }
   #export {
    margin-bottom: 12px;
    margin-top: 5px;
  } 
  .separator {
    display: flex;
    align-items: center;
  }
  
  .separator .line {
    height: 1px;
    flex: 1;
    background-color: #4a4a4a;
  }
  
  .separator h2 {
    padding: 0 1px;
  }
  
  #btn-wrapper {
    margin-top: 10px;
  }
  
  .form-group {
    margin: 0;
    position: relative;
    display: block;
    overflow: hidden;
    height: 37px;
  }
  .form-group-1 {
    margin: 0;
    position: static;
    display: block;
    overflow: hidden;
  }
  
  span.maru {
    position: relative;
    left: 145px;
    top: 8px;
    font-size: 12px;
    color: #4a4a4a;
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  
  span.arrow {
    position: relative;
    left: 190px;
    top: -25px;
    font-size: 20px;
    color: #4a4a4a;
  }
  
  select {
    appearance: none;
  }
  
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  
  #general .form-group {
    margin-bottom: 5px;
  }
  
  span#close:hover {
    cursor: pointer;
  }
  
  .down-ar:before {
    content: "";
    float: right;
    color: #595959;
    position: relative;
    top: -27px;
    right: 7px;
  }
  
  div.path-body {
    padding: 0px 8px;
    display: none;
  }
  
  .path-header {
    width: 100%;
    display: flex;
    justify-items: stretch;
    justify-content: space-between;
  }
  
  span.remove-path {
      margin-top: 6px;
      margin-right: 10px;
      cursor: pointer;
  }
  
  span.path-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin: 4px 2px;
    height: 22px;
    padding-left: 8px;
  }
  
#close {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 40px;
    left: 155px;
    top: 1px;
    color: #595959;
}

  #close::after,
  #close::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 16px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 1px;
  }
  #close::after {
    transform: rotate(-45deg);
  }
  
  span.down-ar {
    display: block;
    overflow: hidden;
    position: relative;
    top: 1px;
    left: 165px;
    transform: rotate(0deg);
  }
  
  @media only screen (max-width: 1440px) {
	  span.down-ar {
      top: 0px !important;
    }
  }
  
  #closed-logo {
    display: none;
    overflow: hidden;
    width: 21px;
    height: 21px;
    cursor: pointer;
    margin-top: 11px;
    margin-left: 12px;
    background: #181618;
    padding: 5px;
    border-radius: 5px;
  }
  
  p#guide-txt {
    color: #4A4A4A;
    margin-bottom: 0px;
  }
  
  .guide-panel {
    margin-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    min-height: 25px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    display: block;
    text-align: center;
    color: #4A4A4A !important;
    margin: auto;
  }
  
  .path-wrapper {
    overflow-y: scroll;
    max-height: 365px;
    display: block;
  }

  div#path-item {
    border: 1px solid #595959;
    margin-bottom: 10px;
    border-radius: 4px;
  }

  input[type="color"] {
  -webkit-appearance: none;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  padding: 0px;
  }

  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  input[type="color"]::-webkit-color-swatch {
    border: none;
  }

  input.stroke-color, input.buffer-color {
    width: 112px;
  }

  form#path-draw-form {
    margin-bottom: 0px; 
  }

  .path-item {
    display: none;
    border-radius: 4px;
  }

  #path-wrapper .path-item {
    display: block;
    border: 1px solid #4a4a4a;
    margin-bottom: 10px;
  }

  .showDistanceistance {
    color: white;
    display: block;
  }

  .path-item:hover {
    background: rgba(190, 188, 243,0.1);
  }

  .not-allow {
    cursor: not-allowed;
  }

  span.m {
      width: 12px;
      height: 16px;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: #4A4A4A;
      top: -26px;
      left: 140px;
  }

  @media only screen and (min-width: 1440px) {
    span.down-ar {
      top: 0px;
    }
  }

  .width-buffer-div, .buffer-color-div {
    display: none;
  }

  /* Toggle Switch */
  .switch input[type='checkbox'] {
  position: absolute;
  width: 0;
  height: 0;
  }

  .switch .base {
    margin-left:2px;
    width: 31px;
    border-radius: 15px;
    height: 18px;
    border: 1px solid gray;
  }

  .switch .circle {
    position: absolute;
    top: 1px;
    width: 18px;
    height: 18px;
    border-radius: 12px;
    background-color: gray;
    transition: 0.5s;
  }

  input:checked ~ .base {
    border: 1px solid #bfbfbf;
    transition: 0.5s;
  }

  input:checked ~ .circle {
    transform: translateX(100%);
    background-color: #bfbfbf;
  }

  .switch {
    position: relative;
  }

  .switch_label {
    position: absolute;
    margin-left: 9px;
    margin-top: 5px;
  }

  /* Toggle Switch */

  </style>
    <div class="height-46" id="wrapper">
      <h3 id="title">
        <span id="logo">
        
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_331_3173)">
        <circle cx="2.5" cy="2.49998" r="1.66667" fill="#BFBFBF"/>
        <ellipse cx="15.8333" cy="4.99998" rx="1.66667" ry="1.66667" fill="#BFBFBF"/>
        <circle cx="17.5" cy="13.3334" r="1.66667" fill="#BFBFBF"/>
        <ellipse cx="2.5" cy="17.5" rx="1.66667" ry="1.66667" fill="#BFBFBF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3033 5.53648L2.38482 3.11427L2.61518 1.88568L16.3634 4.46347L18.2267 13.7801L2.66728 18.1022L2.33272 16.8978L16.7733 12.8865L15.3033 5.53648Z" fill="#BFBFBF"/>
        </g>
        <defs>
        <clipPath id="clip0_331_3173">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
          </span><p class="title-p"> Path Drawer</p> <span id="close" data-stt="0"></span>
      </h3>
      <form method="POST" id="path-draw-form">
        <div id="form-wrapper">
          <input type="button" class="blue-btn" id="path-draw" value="パスを描く">
          <div class="guide-panel" id="guide-panel">
            <p id="guide-txt">ボタンをクリックし、マップをクリックするとパスを描くことができます。<br>右クリックで終了します。</p>
          </div>
          <div class="path-wrapper" id="path-wrapper">
            <div id="line"></div>
          </div>
          <div class="group-div">
            <span id="choose-marker" class="group-title separator"><div
                class="line"></div>
              <p>設定</p>
              <div class="line"></div>
            </span>
            <div class="form-group-1">
              <div class="form-group">
                <label for="choose-by" class="input-title">ファイルタイプ</label>
                <select id="choose-by" name="choose-by" onchange="getOptions()">
                  <option value="geojson">GeoJson</option>
                </select>
                <span class="down-ar">
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5L9 0.5L4.5 5.5L0 0.5Z" fill="#4A4A4A" />
                    </svg>
                </span>
              </div>
              <input type="button" class="blue-btn" id="export" value="エクスポート">
            </div>
            </div>
          </div>
        </div>
      </form>
      <div class="path-item" id="path-item-temp">
        <div class="path-header">
          <span class="path-title"  title="選択">パス<span class="pathItemID"></span><span class="showDistance"></span></span> 
          <span class="remove-path" onclick="removePath(this)"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4998 3.5L2.49976 3.50001" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 6.5V10.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.5 6.5V10.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 3.5V13C12.5 13.1326 12.4473 13.2598 12.3536 13.3536C12.2598 13.4473 12.1326 13.5 12 13.5H4C3.86739 13.5 3.74021 13.4473 3.64645 13.3536C3.55268 13.2598 3.5 13.1326 3.5 13V3.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 3.5V2.5C10.5 2.23478 10.3946 1.98043 10.2071 1.79289C10.0196 1.60536 9.76522 1.5 9.5 1.5H6.5C6.23478 1.5 5.98043 1.60536 5.79289 1.79289C5.60536 1.98043 5.5 2.23478 5.5 2.5V3.5" stroke="#BFBFBF" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </div>
        <div class="path-body" >
          <div class="form-group">
            <label class="input-title">太さ</label>
            <input type="number" class="stroke-width" id="stroke-width-temp" name="path[temp][strwidth]" 
              value="1" placeholder="1" min="1" onchange="changeStrokeWidth(this)" />
            <span class="maru m">px</span>
          </div>
          <div class="form-group">
            <label class="input-title">色</label>
            <input type="color" class="color" value="#FFFFFF" id="color-temp" name="path[temp][color]">
            <input type="text" class="stroke-color color-code" id="stroke-color-temp" name="path[temp][strcolor]" value="#FFFFFF" onchange="changeColorPicker(this)"/>
          </div>
          <div class="form-group">
            <label class="input-title">バッファ</label>
            <label class="switch_label">
              <div class="switch">
                <input type="checkbox" class="use-buffer"
                  id="use-buffer-temp" name="path[temp][isUsingBuffer]"
                  onchange="switchBuffer(this)" />
                <div class="circle"></div>
                <div class="base"></div>
              </div>
            </label>
          </div>
          <div class="form-group width-buffer-div" >
            <label class="input-title">バッファの大きさ</label>
            <input type="text" class="width-buffer" id="width-buffer-temp" 
              name="path[temp][widthBuffer]" value="1"
              onchange="changeWidthBuffer(this)"/>
            <span class="maru m">m</span>
          </div>
          <div class="form-group buffer-color-div">
            <label class="input-title"> バッファの色</label>
            <input type="color" class="color" value="#FFFFFF" id="buffer-color-picker-temp" name="path[temp][bufferColorPicker]">
            <input type="text" class="buffer-color color-code" id="buffer-color-temp" name="path[temp][bufferColor]" value="#FFFFFF" onchange="changeColorPicker(this)"/>
          </div>
          <div>
            <input type="hidden" class="layer-path" id="layer-path-temp" name="path[temp][layerPathId]" value="" data-point="" data-layer-id=""/>
          </div>
        </div>
      </div>


<script src='https://unpkg.com/@turf/turf@6/turf.min.js'></script>
<script>

  // Handle path item ID and return html string for appending
  function handlePathItemHtml(pathNumber) {
    let pathItem = document.querySelector(".path-item");
    return pathItem;
  }


  // ------------------- Clone Path Item Function --------------------------- //
  // ----------------------------------------------------------------------- //
  let pathWrapper = document.getElementById("path-wrapper");
    // Handling Creating Path Item
    function handleCreatingPathItem() {
      let pathDrawBtn = document.querySelector("#path-draw");
      let appendData = "";
      pathDrawBtn.addEventListener("click", function() {
        event.preventDefault();
        let countPathItem = document.querySelectorAll('.path-item').length;
        pathNumber = countPathItem + 1;
        let pathItem = document.querySelector("#path-item-temp");
        pathWrapper.appendChild(pathItem.cloneNode(true));
        handleGeneratingNewPathID();
        //handleDeletingPathItem();
        handleToDisplayColorHex();
        createNewPath();
        reUpdateIframe();
      });
    }
    // ---- Close Handling Creating Path Item ---------- //

    // -------------------  ReUpdate Iframe --------------------------- //
    function reUpdateIframe() {
      heightWp = wapperElm.offsetHeight;
      let expanded = false;
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");

    }

    // -------------------Close ReUpdate Iframe-------------------------------- //

    var allPathsArr = [];
    // Handling Deleting Path Item
    function removePath(item) {
      let removePathLayerId = item.closest(".path-item")
                      .querySelector(".layer-path")
                      .getAttribute("data-layer-id");
      item.closest(".path-item").remove();
      handleGeneratingNewPathID();
      allowCreateNewPathOrNot();
      parent.postMessage({ type: "removePath", removePathLayerId}, "*");
      parent.postMessage({ type: "removePoint"}, "*");
    }

    // ---- Close Handle Handling Deleting Path Item ---------- //


    // Handle re-generating Path ID after deleted Path Item
    function handleGeneratingNewPathID() {
      let allPathItemIDs = document.querySelectorAll(".path-item");
      let total = allPathItemIDs.length;
      allPathItemIDs.forEach(function(pathItem, ind) {
        let pathId = ind + 1;
        let PathItemElm = pathItem.querySelector(".pathItemID");
        PathItemElm.textContent = pathId;
        if (ind + 1 < total) {
          let strokeWidthElm = pathItem.querySelector(".stroke-width");
          let strokeColorElm = pathItem.querySelector(".stroke-color");
          let layerPathIdElm = pathItem.querySelector(".layer-path");
          let colorElm = pathItem.querySelector(".color");
          let isUsingBufferElm = pathItem.querySelector(".use-buffer");
          let widthBufferElm = pathItem.querySelector(".width-buffer");
          let bufferColorElm = pathItem.querySelector(".buffer-color");

          pathItem.setAttribute("id", "path-item-" + pathId);

          strokeWidthElm.setAttribute("id", "stroke-width-" + pathId);
          strokeWidthElm.setAttribute( "name", "path[" + pathId +"][strwidth]");

          strokeColorElm.setAttribute("id", "stroke-color-" + pathId);
          strokeColorElm.setAttribute( "name", "path[" + pathId +"][strcolor]");

          layerPathIdElm.setAttribute("id", "layer-path-" + pathId);
          layerPathIdElm.setAttribute( "name", "path[" + pathId +"][layerPathId]");
          layerPathIdElm.setAttribute( "value", pathId);

          colorElm.setAttribute("id", "color-" + pathId);
          colorElm.setAttribute( "name", "path[" + pathId +"][color]");

          isUsingBufferElm.setAttribute("id", "use-buffer-" + pathId);
          isUsingBufferElm.setAttribute( "name", "path[" + pathId +"][isUsingBuffer]");

          widthBufferElm.setAttribute("id", "width-buffer-" + pathId);
          widthBufferElm.setAttribute( "name", "path[" + pathId +"][widthBuffer]");

          widthBufferElm.setAttribute("id", "buffer-color" + pathId);
          widthBufferElm.setAttribute( "name", "path[" + pathId +"][bufferColor]");
        }
      });
    }    
    // ---- Close Handling re-generating Path ID after deleted Path Item ---------- //
    
    // Handle to get color hex from color picker
    function handleToDisplayColorHex() {
      let colorPickers = document.querySelectorAll('.color');
      colorPickers.forEach(function(colorPicker, ind) {
        colorPicker.addEventListener("change", function() {
          event.preventDefault();
          let pathItem = colorPicker.closest("div").querySelector(".color-code");
          pathItem.value = event.target.value;
          createGeojsonEachPath(colorPicker.closest(".path-item"));
         });
      });
    }  
    // ---- Close Handle to get color hex from color picker ---------- //
  
    // Change color picker from color hex
    function changeColorPicker(item) {
      let pathItem = item.closest("div"); 
      pathItem.querySelector(".color-code").value = item.value;
      createGeojsonEachPath(item.closest(".path-item"));
    }  

    //Update path on earth when change width 
    function changeStrokeWidth(item) {
      createGeojsonEachPath(item.closest(".path-item"));
    }
  
  // ------------------------------------------------------------------------------ //
  // ------------------- Close Clone Path Item Function--------------------------- //


  // ---------------------------- Handle Formdata --------------------------- //
  let exportBtn = document.getElementById("export");
  exportBtn.addEventListener("click", function (event) {
    event.preventDefault();
    handleFormData("path-draw-form"); // Dont include # character
    geojsonData = createGeojsonAllPaths()
    downloadObjectAsJson(geojsonData, "download");
  });

  // Download Geojson file
  function downloadObjectAsJson(exportObj, exportName) {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".geojson");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  // ---------------------------- Handle Formdata --------------------------- //
  function handleFormData(formElmId, objectConvert = false) {
    let formElm = document.getElementById(formElmId);
    const formData = new FormData(formElm)
    const output = [];
    for (const [key, value] of formData) {
      output[key] = value;
    }
    if (objectConvert === true) {
      return Object.assign({}, output);
    } else {
      return output;
    }
  }
  // ---------------------------- Close Handle Formdata --------------------------- //

  // Document Ready functions
  handleToDisplayColorHex();
  handleCreatingPathItem();
  // Close Document Readdy funtions

  // ---------------------------- Handle Javascript --------------------------- //
  
  let pointArr;
  let geojsonData;
  let isPauseState = true;
  let selectedEditPathElm;

  // Create New Path 
  function createNewPath() {
    //remove old data
    parent.postMessage({ type: "removePoint"}, "*");
    pointArr = [];
    isPauseState = false;
    
    changeBackgroundToOriginal();
    document.getElementById("path-item-"+ pathCount() +"").style.background = 'rgba(190, 188, 243,0.1)';
    allowCreateNewPathOrNot();
  }

  // Count the number of paths
  function pathCount() {
    return document.querySelectorAll('.path-item').length - 1;
  }

  const calculateLength = (arr) => {
    let l = arr.length
    let resArr = []
    let options = {units: 'kilometers'};

    if(l > 1) {
      for (let i = 0; i + 1 < l; i++) {
        resArr.push(turf.distance(turf.point(arr[i]), turf.point(arr[i+1]), options))
      }
      return resArr.reduce((sum, a) => sum + a, 0);
    }
  }

  addEventListener("message", e => {
    if (e.source !== parent) return;
    let pathLayerId = e.data.pathLayerId;
    let pathItem;
    if (pathLayerId && e.data.type == "showPath") {
      document.getElementById('path-item-'+ pathCount()).querySelector(".layer-path").setAttribute("data-layer-id", pathLayerId );
    }

    if (e.data.type === 'mousedata' && e.data.payload.lng && e.data.payload.lat && !isPauseState) {
      let colorPath, widthPath;
      
      let pointsPathElm;
      
      // Create new path
        pathItem = document.getElementById('path-item-'+ pathCount());
        pointsPathElm = pathItem.querySelector(".layer-path");

      // Add new point into path
      pointArr.push([e.data.payload.lng, e.data.payload.lat]);
      parent.postMessage({type: "showPoint", lngPoint: e.data.payload.lng, latPoint:e.data.payload.lat}, "*");
      if(pointArr.length > 0){
        pointsPathElm.setAttribute("data-point", JSON.stringify(pointArr));
        createGeojsonEachPath(pathItem);
      }
    }
    
    // Stop drawing path when right click
    if (e.data.type === 'rightclick') {
      isPauseState = true;
      changeBackgroundToOriginal();
      pathItem = document.getElementById('path-item-'+ pathCount());
      if (pathItem) {
        displayPathBody(pathItem);
      }
      parent.postMessage({ type: "removePoint"}, "*");

      allowCreateNewPathOrNot();
    }
  });

  // Check for disable new path button
  function allowCreateNewPathOrNot() {
    if (pathCount() > 0 ) {
      let newPathInput = document.getElementById("path-item-"+ pathCount() +"")                    
                      .closest(".path-item").querySelector(".layer-path")
                      .getAttribute("data-point");
                      
     // Not allow to click new path button when not entering data of previous path
      if (newPathInput === "") {
        document.getElementById("path-draw").classList.add("not-allow");
        document.getElementById("path-draw").disabled = true;
        document.getElementById("path-draw").style.backgroundColor = "gray";
        document.getElementById("path-draw").style.borderColor = "gray";
      } else {
        //Allow click new path button
        document.getElementById("path-draw").classList.remove("not-allow");
        document.getElementById("path-draw").disabled = false;

        document.getElementById("path-draw").style.backgroundColor = "#3b3cd0";
        document.getElementById("path-draw").style.borderColor = "#3b3cd0";
      }
    } else {
      //Allow click new path button
      document.getElementById("path-draw").classList.remove("not-allow");
      document.getElementById("path-draw").disabled = false;

      document.getElementById("path-draw").style.backgroundColor = "#3b3cd0";
      document.getElementById("path-draw").style.borderColor = "#3b3cd0";
    }
  }

  function createGeojsonAllPaths() {
    let temp;
    let result = {
      "type":"FeatureCollection",
      "features":[]
    };

    let allPathItems = document.querySelectorAll(".path-item");
    allPathItems.forEach(function(obj, ind) {
      if (obj.getAttribute("id") != "path-item-temp") {
        temp = createGeojsonEachPath(obj).features[0];
        result.features.push(temp);
      }
    });

    return result;
  }

  //Each path is a layer
  function createGeojsonEachPath(pathEle) {
    let temp = [];
    let line;
    let geojsonData ;

    let pointsData = pathEle.querySelector(".layer-path").getAttribute("data-point");
    let strokeColor = pathEle.querySelector(".stroke-color").value || "#FFFFFF";
    let strokeWidth = pathEle.querySelector(".stroke-width").value || 1 ;
    let layerPathId = pathEle.querySelector(".layer-path").getAttribute("data-layer-id");
    let isUsingBuffer = pathEle.querySelector(".use-buffer").checked;
    let widthBuffer = pathEle.querySelector(".width-buffer").value || 1;
    let bufferColor = pathEle.querySelector(".buffer-color").value || "#FFFFFF";

    let formData = {
      linestring: line,
      pointsData: pointsData,
      strokeColor: strokeColor,
      strokeWidth: strokeWidth,
      layerPathId: layerPathId,
      isUsingBuffer: isUsingBuffer,
      widthBuffer: widthBuffer,
      bufferColor: bufferColor
    }

    if (pointsData) {
      if(JSON.parse(pointsData).length > 1){
        //line = turf.lineString(JSON.parse(pointsData), { 'stroke': strokeColor, 'stroke-width': strokeWidth });
        line = turf.lineString(JSON.parse(pointsData));
        formData.linestring = line;
        geojsonData = createGeojsonStructure(formData);
      }
      let pointsDataArr = JSON.parse(pointsData);

      parent.postMessage({type: "showPath", geojsonData, layerPathId}, "*");

      //calculate the length of line by turf distance
      let distance = turf.round(calculateLength(JSON.parse(pointsData)), 3);
      pathEle.getElementsByClassName("showDistance")[0].innerHTML = "  Distance is: "+ distance + " km";
    }

    return geojsonData;
  }

  function createGeojsonStructure(data) {
    var geometries;
    if (data.isUsingBuffer) {
      var buffer = turf.buffer(data.linestring, data.widthBuffer/1000, {units: 'kilometers'});
      geometries = [buffer.geometry, data.linestring.geometry];
    } else {
      geometries = [data.linestring.geometry];
    }
    var dataStructure = {
      "type":"FeatureCollection",
      "features":[
         {
            "type":"Feature",
            "properties":{
               "stroke": data.strokeColor,
               "stroke-width": data.strokeWidth,
               "fill": data.bufferColor
            },
            "geometry":{
              "type": "GeometryCollection",
              "geometries": geometries
            }
         }
      ]
    };

    return dataStructure;
  }

  // change background color to original
  function changeBackgroundToOriginal() {
    let elements = document.getElementsByClassName("path-item");   
    
    for(let i = 0; i < elements.length; i++){
      if (elements[i].getAttribute("id") != "path-item-temp") {
        elements[i].style.backgroundColor = "";
      }
    }
  }

  function updateIframeSize() {
    let newWrapperElm = document.getElementById("wrapper");
    let heightWp = newWrapperElm.offsetHeight;
    let expanded = false;
    parent.postMessage({ type: "resize", expanded, heightWp }, "*");
  }
  
  let expanded = false;
  let resizeElms = document.querySelectorAll(".resize");  
  let closeElm = document.getElementById("title");
  closeElm.addEventListener("click", handleCloseOpenPopup);
  let wapperElm = document.getElementById("wrapper");
  let heightWp = wapperElm.offsetHeight = 700;
  let newWrapperHeight = 0;
  function handleCloseOpenPopup(e) {
    if (e.target.id == "title" || e.target.classList.contains("title-p") ||
    (document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).parentNode.id == "title")) {
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");
        if(wapperElm !== null) {
          wapperElm.classList.remove("height-46");
        }
      if (expanded){
        document.documentElement.classList.add("extendedh", "extendedv");
      } else {
        document.documentElement.classList.remove("extendedh", "extendedv");
      }
      expanded = !expanded
    } else {
      if(e.target.tagName === "path" || e.target.tagName === "svg" || e.target.tagName === "g") {
        if(e.target.closest("#title")) {
          parent.postMessage({ type: "resize", expanded, heightWp }, "*");
          if( wapperElm !== null) {
            wapperElm.classList.remove("height-46");
          }
          if (expanded) {
            document.documentElement.classList.add("extendedh", "extendedv");
          } else {
            document.documentElement.classList.remove("extendedh", "extendedv");
          }
          expanded = !expanded
        }
      }
    }
  }

  function displayPathBody(item) {
    item.querySelector('.path-header').style.borderBottom = '1px solid #595959';
    item.querySelector('.path-header').style.marginBottom = '8px';
    item.querySelector('.path-body').style.display = 'block';
    updateIframeSize();
  }

  function switchBuffer(item) {
    var widthBufferElm = item.closest(".path-item").querySelector(".width-buffer-div");
    var bufferColorElm = item.closest(".path-item").querySelector(".buffer-color-div");
    if (item.checked) {
      widthBufferElm.style.display = "block";
      bufferColorElm.style.display = "block";
    } else {
      widthBufferElm.style.display = "none";
      bufferColorElm.style.display = "none";
    }
    
    updateIframeSize();
    createGeojsonEachPath(item.closest(".path-item"));
  }

  function changeWidthBuffer(item) {
    createGeojsonEachPath(item.closest(".path-item"));
  }

</script>
`,
  { width: 46, height: 46 }
);

reearth.on("click", (mousedata) => {
  reearth.ui.postMessage(
    {
      type: "mousedata",
      payload: mousedata,
    },
    "*"
  );
});

reearth.on("rightclick", (mousedata) => {
  reearth.ui.postMessage(
    {
      type: "rightclick",
      payload: mousedata,
    },
    "*"
  );
});

let pathDrawerLayerId;
let pathPointsLayerId;
let pathPointsArray = [];
reearth.on("message", (msg) => {
  if (msg.type == "showPoint") {
    pathPointsArray.push(
      reearth.layers.add({
        extensionId: "marker",
        isVisible: true,
        title: "pointPath",
        property: {
          default: {
            heightReference: "clamp",
            location: {
              lat: msg.latPoint,
              lng: msg.lngPoint,
            },
            style: "point",
          },
        },
      })
    );
  }

  if (msg.type == "removePoint") {
    pathPointsArray.map((element, index) => {
      reearth.layers.hide(element);
    });
  }

  if (msg.type == "removePath") {
    reearth.layers.hide(msg.removePathLayerId, {
      default: {
        url: [],
      },
    });
  }

  if (msg.type == "showPath") {
    //Override the old layer
    if (msg.layerPathId) {
      // refresh
      reearth.layers.overrideProperty(msg.layerPathId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(msg.layerPathId, {
        default: {
          url: msg.geojsonData,
        },
      });
    } else {
      //Create a new layer
      pathDrawerLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: "Path",
        property: {
          default: {
            url: msg.geojsonData,
            type: "geojson",
            clampToGround: true
          },
        },
      });

      pathPointsLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: "Path",
        property: {
          default: {
            url: msg.pointsTurf,
            type: "geojson",
            clampToGround: true
          },
        },
      });
    }
  }
  reearth.ui.postMessage({
    pathLayerId: pathDrawerLayerId,
    type: msg.type,
  });
});

reearth.on("message", (msg) => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 46 : 312,
      msg.expanded ? 46 : msg.heightWp,
      msg.expanded ? undefined : false
    );
  }
});