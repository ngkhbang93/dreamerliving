const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const contactDialog = document.querySelector('[data-contact-dialog]');
const storyDialog = document.querySelector('[data-story-dialog]');
const contactForm = document.querySelector('[data-contact-form]');
const formSuccess = document.querySelector('[data-form-success]');

const stories = {
  'daily-rhythm': {
    category: 'Daily Living',
    title: 'Một ngôi nhà tốt bắt đầu từ nhịp sống của người ở.',
    lead: 'Không gian có ý nghĩa khi nó nâng đỡ những thói quen thật, thay vì ép con người phải sống theo một hình ảnh đẹp.',
    body: 'Tôi thường bắt đầu bằng một ngày bình thường: ai thức dậy trước, ánh sáng đến từ đâu, chiếc bàn nào được dùng nhiều nhất và khi nào căn nhà cần trở nên thật yên. Những câu trả lời giản dị đó thường giá trị hơn một danh sách phong cách.',
    image: 'assets/daily-living.jpg'
  },
  'open-home': {
    category: 'Daily Living / Kiến trúc',
    title: 'Một căn nhà mở — và cảm giác thời gian trôi chậm lại',
    lead: 'Độ mở không chỉ nằm ở diện tích cửa. Nó là cách ánh sáng, gió, cây xanh và tầm nhìn kết nối các khoảnh khắc trong ngày.',
    body: 'Căn nhà đáng nhớ không cố phô diễn mọi thứ cùng lúc. Nó tạo ra những lớp chuyển tiếp: một mái hiên đủ sâu, một góc nhìn được giữ lại và khoảng sân khiến ta tự nhiên bước chậm hơn.',
    image: 'assets/interior-editorial.jpg'
  },
  'small-apartment': {
    category: 'Nội thất',
    title: 'Căn hộ nhỏ không nhất thiết phải tối giản',
    lead: 'Ít diện tích không đồng nghĩa với ít cá tính. Điều cần tiết chế là sự lộn xộn, không phải câu chuyện của người sống trong đó.',
    body: 'Một căn hộ nhỏ có thể giàu lớp lang nhờ vật liệu, ánh sáng và những đồ vật có ý nghĩa. Ưu tiên công năng thật, khoảng trống đúng chỗ và một vài điểm nhấn đủ mạnh thay vì làm mọi bề mặt giống nhau.',
    image: 'assets/interior-editorial.jpg'
  },
  'read-place': {
    category: 'Bất động sản',
    title: 'Đọc một khu vực bằng nhịp sống, không chỉ bằng giá',
    lead: 'Một nơi đáng sống được cảm nhận qua buổi sáng, giờ tan tầm và cuối tuần — không chỉ qua bản đồ tiện ích.',
    body: 'Hãy thử đi bộ, quan sát bóng mát, tiếng ồn, cách người dân sử dụng không gian công cộng và thời gian thực tế để thực hiện những hành trình thường ngày. Giá trị sống thường nằm trong các chi tiết không xuất hiện trên brochure.',
    image: 'assets/daily-living.jpg'
  },
  'tropical-home': {
    category: 'Kiến trúc',
    title: 'Kiến trúc nhiệt đới không chỉ là trồng thêm cây',
    lead: 'Cây xanh là một phần của hệ vi khí hậu, nhưng tỷ lệ, hướng nắng, thông gió và lớp chuyển tiếp mới quyết định chất lượng.',
    body: 'Một công trình nhiệt đới thuyết phục xử lý nắng và mưa trước khi trang trí. Mái che, khoảng đệm, vật liệu chịu ẩm và khả năng thông gió tự nhiên cần được nghĩ như một hệ thống duy nhất.',
    image: 'assets/architecture-home.jpg'
  },
  'material-value': {
    category: 'Nội thất / Bất động sản',
    title: 'Vật liệu đẹp hôm nay, giá trị như thế nào sau mười năm?',
    lead: 'Vẻ đẹp ban đầu chỉ là một phần. Chi phí bảo trì, khả năng sửa chữa và cách vật liệu già đi mới tạo nên giá trị dài hạn.',
    body: 'Thay vì chỉ hỏi vật liệu nào đang thịnh hành, hãy hỏi nó phản ứng với khí hậu, thói quen sử dụng và đội ngũ thi công địa phương ra sao. Một bề mặt có thể già đi đẹp thường đáng giá hơn một bề mặt luôn phải giữ như mới.',
    image: 'assets/architecture-home.jpg'
  }
};

const filterLabels = {
  all: 'Tất cả góc nhìn',
  daily: 'Daily Living',
  architecture: 'Kiến trúc',
  interior: 'Nội thất',
  realestate: 'Bất động sản'
};

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 24);
}

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const next = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(next));
  mobileMenu.classList.toggle('is-open', next);
});

mobileMenu.querySelectorAll('a, button').forEach((item) => item.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

function applyFilter(filter) {
  document.querySelectorAll('[data-filter]').forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-active', active && button.classList.contains('choice-card'));
    if (button.classList.contains('choice-card')) button.setAttribute('aria-pressed', String(active));
  });

  let visibleCount = 0;
  document.querySelectorAll('[data-category]').forEach((card) => {
    const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter);
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  document.querySelector('[data-filter-status]').textContent = `Đang xem tuyển chọn: ${filterLabels[filter]}`;
  document.querySelector('[data-empty-state]').hidden = visibleCount !== 0;
  if (filter !== 'daily') document.querySelector('#stories').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

function openDialog(dialog) {
  closeMenu();
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

function closeDialog(dialog) {
  dialog.close();
  document.body.classList.remove('dialog-open');
}

document.querySelectorAll('[data-open-contact]').forEach((button) => {
  button.addEventListener('click', () => openDialog(contactDialog));
});

document.querySelector('[data-close-dialog]').addEventListener('click', () => closeDialog(contactDialog));
contactDialog.addEventListener('click', (event) => {
  if (event.target === contactDialog) closeDialog(contactDialog);
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.hidden = true;
  formSuccess.hidden = false;
});

document.querySelector('[data-reset-form]').addEventListener('click', () => {
  contactForm.reset();
  contactForm.hidden = false;
  formSuccess.hidden = true;
});

document.querySelectorAll('[data-open-story]').forEach((button) => {
  button.addEventListener('click', () => {
    const story = stories[button.dataset.openStory];
    if (!story) return;
    storyDialog.querySelector('[data-story-category]').textContent = story.category;
    storyDialog.querySelector('[data-story-title]').textContent = story.title;
    storyDialog.querySelector('[data-story-lead]').textContent = story.lead;
    storyDialog.querySelector('[data-story-body]').textContent = story.body;
    const image = storyDialog.querySelector('[data-story-image]');
    image.src = story.image;
    image.alt = story.title;
    openDialog(storyDialog);
  });
});

document.querySelector('[data-close-story]').addEventListener('click', () => closeDialog(storyDialog));
storyDialog.addEventListener('click', (event) => {
  if (event.target === storyDialog) closeDialog(storyDialog);
});

document.querySelector('[data-close-note]').addEventListener('click', () => {
  document.querySelector('[data-demo-note]').remove();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') document.body.classList.remove('dialog-open');
});
