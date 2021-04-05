const navToggle = document.querySelector('.nav-toggle');
const headerInner = document.querySelector('.header-inner');
const nav = document.querySelector('.nav');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open')
    headerInner.classList.toggle('opened')
})

function createModal() {
    const header = document.querySelector('.header')
    header.insertAdjacentHTML('afterend', `
        <div class="modal" data-general="true">
            <div class="modal-content" >
                <div class="modal-title" >Записатись</div>
                <form class="form" >
                    <input type="text" class="input-name"  placeholder="Your Name"/>
                    <input type="email" class="input-email"  placeholder="Your email or phone"/>
                    <input type="datetime-local" class="date"/>
                    <textarea class="message" placeholder="Your wishes"></textarea>
                </form>                
                
                <button class="modal-btn" type="submit">Надіслати</button>
            </div>
        </div>
    `)

    const dataLink = document.querySelectorAll('[data-modal]')
    const modal = document.querySelector('.modal')
    const modalContent = document.querySelector('.modal-content')
    const modalBtn = document.querySelector('.modal-btn')

    modalBtn.addEventListener('click', () => {
        modalContent.classList.add('close')
        setTimeout(() => {
            modal.style.display = 'none'
            modalContent.classList.remove('close')
        },300)
    })

    dataLink.forEach(link => {
        link.addEventListener('click', () => {
            modal.style.display = 'block'
            setTimeout(() => {
                modalContent.classList.add('openm')
            },100)
        })
    })

    modal.addEventListener('click', event => {
        if (event.target.dataset.general) {
            modalContent.classList.remove('openm')
            modalContent.classList.add('close')
            setTimeout(() => {
                modal.style.display = 'none'
                modalContent.classList.remove('close')
            },300)
        }
    })
}

createModal()
