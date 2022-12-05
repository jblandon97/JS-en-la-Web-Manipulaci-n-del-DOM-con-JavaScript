//IIFE
(() => {
      const btn = document.querySelector("[data-form-btn]")

      const checkIcon = () => {
            const icons = document.getElementsByClassName("far fa-check-square icon")
            for (let index = 0; index < icons.length; index++) {
                  const element = icons[index]
                 
                  element.addEventListener("click", () => {
                        element.classList.toggle("green")
                        console.log(element)
                  })

            }
      }
      const deleteTask = () => {
            const icons = document.getElementsByClassName("fas fa-trash-alt trashIcon icon")
            for (let index = 0; index < icons.length; index++) {
                  const element = icons[index]
                 
                  element.addEventListener("click", (e) => {
                        const parent = (e.target.parentElement)
                        parent.remove();
                  })

            }
      }



      const createTask = function (e) {
            e.preventDefault()
            const input = document.querySelector("[data-form-input")
            const task = document.createElement("li")
            task.setAttribute("class", "card")
            const list = document.querySelector("[data-list]")
            const content = `            <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${input.value}</span>
          </div>
          <i class="fas fa-trash-alt trashIcon icon"></i>`
            task.innerHTML = content
            list.appendChild(task)
            input.value = "";
            checkIcon();
            deleteTask();

      }

      btn.addEventListener("click", createTask)


})();

