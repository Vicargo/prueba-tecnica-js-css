
var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `

  <div class="page">
    <div class="container">
      <section class="page-top">
        <h1 class="title">Unique Element Challenge</h1>
        <img class="logo" src="./src/assets/logo.svg" />
      </section>

      <div class="page-content">
        <section class="page-section">
            <article class="page-article">
              <h2 class="title">Target</h2>
              <p>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</p>
            </article>

            <article class="page-article">
              <h2 class="title">Considerations</h2>
              <ul class="list">
                <li>Values are <span>duplicated only twice.</span></li>
                <li>There is <span>only one non duplicate value</span>.</li>
                <li>The non duplicate value can be placed <span>anywhere on the array.</span></li>
                <li>The result must be an integer.</li>
              </ul>
            </article>
        </section>

        <section class="page-section page-grid">
          <div class="grid-box grid-box--up">
            <h2>Test Data</h2>
            <div>${arrayTest}</div>
          </div>
          
          <div class="grid-box grid-box--left">
            <h2>Expected result</h2>
            <div class="big-number">4</div>
          </div>

          <div class="grid-box grid-box--right">
            <h2>Your Result</h2>
            <div class="big-number">4</div>
          </div>
        </section>
      </div>  
    </div>  
  </div>
`;