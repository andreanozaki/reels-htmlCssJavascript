const testimonialsContainer = document.
querySelector('.testimonials-container')
const testimonial= document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const testimonials = [
    {
    name: 'Mario Briku',
    photo: 
    'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=883&q=80',
    text:
    "Estou extremamente satisfeito com o serviço prestado. A equipe foi profissional e atenciosa em todos os momentos.",
    },
   {
    name: 'Kaito Marks',
    photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    text:
    "O atendimento ao cliente foi excepcional. Todas as minhas dúvidas foram prontamente respondidas, e me senti valorizado como cliente.",
   },
   {
    name: 'Marta Rosen',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    text:
    "Estou muito feliz por ter escolhido este serviço. O suporte técnico foi rápido e eficiente, e o resultado final foi perfeito para as minhas necessidades.",
   },
   {
    name: 'Clara Ken',
    photo: 'https://images.unsplash.com/photo-1548142542-c53707f8b05b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80',
    text:
    "Recomendo fortemente esta empresa. Eles entregaram o projeto antes do prazo e o resultado final foi simplesmente incrível.",
   },
]
let idx = 1 
function updateTestimonial (){
    const {name, photo, text } = testimonials [idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    idx++

    if(idx > testimonials.length - 1){
        idx = 0
    }
}
setInterval (updateTestimonial,5000)