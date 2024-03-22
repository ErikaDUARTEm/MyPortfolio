import { CardSkills } from "./CardSkills";
export function Skills() {
  return (
    <>
      <section className="container-skills" id="skills">
        <h2>Skills</h2>
        <div className="container-card-skills">
          <CardSkills
            id={1}
            imagen={"https://img.icons8.com/color/48/000000/javascript.png"}
            title={"Javascript"}
            alt={"Logo de Javascript"}
          />
          <CardSkills
            id={2}
            imagen={"https://img.icons8.com/color/48/000000/html-5.png"}
            title={"Html5"}
            alt={"Logo de Html5"}
          />
          <CardSkills
            id={3}
            imagen={"https://img.icons8.com/color/48/000000/css3.png"}
            title={"Css3"}
            alt={"Logo de Css3"}
          />
          <CardSkills
            id={4}
            imagen={"https://img.icons8.com/color/48/000000/firebase.png"}
            title={"Firebase"}
            alt={"Logo de Firebase"}
          />
          <CardSkills
            id={5}
            imagen={"https://img.icons8.com/office/45/000000/figma.png"}
            title={"Figma"}
            alt={"Logo de Figma"}
          />
          <CardSkills
            id={6}
            imagen={"https://img.icons8.com/color/48/000000/git.png"}
            title={"Git"}
            alt={"Logo de Git"}
          />
          <CardSkills
            id={7}
            imagen={
              "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-trello-a-web-based-list-making-application-for-multi-platform-logo-color-tal-revivo.png"
            }
            title={"Trello"}
            alt={"Logo de Trello"}
          />
          <CardSkills
            id={8}
            imagen={"https://img.icons8.com/color/48/null/nodejs.png"}
            title={"Node.js"}
            alt={"Logo de Node.js"}
          />
          <CardSkills
            id={9}
            imagen={"https://img.icons8.com/fluency/48/null/github.png"}
            title={"Github"}
            alt={"Logo de Github"}
          />
          <CardSkills
            id={10}
            imagen={
              "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png"
            }
            title={"Jest"}
            alt={"Logo de Jest"}
          />
          <CardSkills
            id={11}
            imagen={"https://img.icons8.com/plasticine/48/react.png"}
            title={"React.js"}
            alt={"Logo de React.js"}
          />
          <CardSkills
            id={12}
            imagen={"https://img.icons8.com/fluency/48/my-sql.png"}
            title={"MySql"}
            alt={"Logo de MySql"}
          />
          <CardSkills
            id={13}
            imagen={"https://img.icons8.com/officel/48/php-logo.png"}
            title={"Php"}
            alt={"Logo de Php"}
          />
          <CardSkills
            id={14}
            imagen={"https://img.icons8.com/color/48/bootstrap.png"}
            title={"Bootstrap"}
            alt={"Logo de Bootstrap"}
          />
          <CardSkills
            id={15}
            imagen={
              "data:image/png;base64,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"
            }
            title={"Java"}
            alt={"Logo de Java"}
          />
          <CardSkills
            id={16}
            imagen={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGElEQVR4nO1Z208cVRhfbw/2RePlSX3wbzAa++SLIXvOQltjqKaN8UmTqqnGRGvQBJNausywbaX0QlrFC2krCL3QVtQ2G85ZlgILLNdti0BZoFQoC+WysNfPfLM7lF1YZoaZ2QfDLzlhObv7ze87l9/3O2ctlk1s4v8Lhzv/yaw8qKoq/zHBlbu1mJECgZEagdNekZOAwGhY5DSSeE26RUZqBU6/cnDr6wCWRxRjMlppKvGShpyXBE7sAiOjIqegsY0InB6wO60vrhW72EXeERiNiw15LxtO/ACzPi9wUi4yEtoA8dTGMAYpLXHmPifHx9kRGPHi+wIjXxpKXuBkl8DolG7iq9uEyOlOfIbIrXlyv8CJxxDi5Z5XnhA4PWUCcUhtpBRJp/TpXUaFntwtAqNXzSdPl9vRpp1Qd7NYel3Cyaf6Rj7L5EVOwTt+BQYDrcllRK9tOIHsLBua0i75igARiYXgcOMOQDk+7Nz+tGbyJS7r7myTP9v5BYSjiyCjuucbqR9lVRP5ouYdzwqcTGaT/IW+/RCOLcFKtI1dlN8/rikBSeezRPyQaxs0+c9BHOKQjqngSGIfMOJVTR6royFFSkX7rbsAJueHIDPikiKJjMTsf7/5lNrRt5tJ2uHKg/N9+2F42gtqgElKs+Cy5iiSL4TCR9GnGEH0SONbcKL5Paho2yOtbzZUAb6JBliMzIEWNAz9mIjJ6F7l0Xflbt0I0Yu+Ikm7Rx/0wsziPUkCjULXeH1yH9CjigmgJVZN3P02NPnPah5RJQTDD1L+vzPdkUiAk3rlGWCkRg35Xzs+k0baaETjEbg760vpCwTHZCXyKSYgMtqjRP5c1z5YWWyMRM+/12ApMp/StxCekZ89omIG1rfK5S3vw2Jk1hTywcgsOAdPr+rHhJJ7YErFDKyv//9M3QCzcPmmCPfm+lf1oyAkVIiEdCXwc/snppFvv1sHdT57xplJbGK6pGsJtY7WmEJ+MOCB0qb8jKIwMT8oq9Ckrk08PnfbcPL+mS7JMnvHr2b8zECgRZ6BLjVLqDZTAqgGRuLWJJfIX+j7bt3P4cwnE6jWVciMKljxeAzcw2dA5DapnihJcm3vt0kOtn2KCeClU+YZmNZNHtc5HlowXkXbHsWYKKGHGrcnODRaX1Vl5gRO/UZLKB5UmkeqJfuBsX7p2KtqScrLR2RkGLkpJpDcBwfXSuD6QPmGfA36pWM3di3HwduGcDSo+N1QdAGON++Wi1iRRe+BBqVOzTKaDwUkVanq/hocrm0p3+8c/0N18n/2ly7rv8Nte8GiBQKjJ9aaharuglVWGUcKpc45eAp+av9Y2pzpR8b620ekxNSiZeT35e+rstHpcLhznsl0qEeS6P3/6i+DivaPoCSNsNx+8HwIjcOVMB+aUk08GgvD9YGTDweBkfsr7001QWS2d9VY6/TkkDRWTy2IxsKSEz3t+SAlnsBt+Rsi/zAJcjKdJN4goHbjXxypSu/nksJML46tSzIWj0q1BL3N/QU/3Jluh9bRWrjkOwjfJ9UppTFaZtEL6YcGTs+vDCz79VA0qGl2tDSBk8uFzjcetxgBvNwVGb0iB3f7z0jkUR5NSqAOn2kxEslL3jWVydDGaJlhI5/xpx9zrhwndG9Yjfemx7DA6F/rdAl1HmXbkm1gdUTbkck7KRD3oz3QXGHNAJose4PtNfwJFT07Hjykkx3aEUZCyVNeJ76HlhhdpWpjtolNbMKyHv4DEwlIYov/X1cAAAAASUVORK5CYII="
            }
            title={"Spring boot"}
            alt={"Logo de Spring boot"}
          />
        </div>
      </section>
    </>
  );
}
