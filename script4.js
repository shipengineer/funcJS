async function getUsers() {
  const asking = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await asking.json();
  return users;
}
const users = await getUsers();
console.log(users);
users.forEach((user) => {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div class="user-wrap" id=${user.id}>
  <p class="name">${user.name}</p>
  <p class="username">${user.username}</p>
  <a href="mailto:${user.email}">${user.email}</a>
  <div class="address">
      <p class="street">${user.address.street}</p>
      <p class="suite">${user.address.suite}</p>
      <p class="city">${user.address.city}</p>
      <p class="zipcode">${user.address.zipcode}</p>
      <div class="geo">
          <p class="lat">${user.address.geo.lat}</p>
          <p class="lng">${user.address.geo.lng}</p>
      </div>

  </div>
  <a href="tel:${user.phone}" class="tel">${user.phone}</a>
  <a href="${user.website}" class="web">${user.website}</a>
  <div class="company">
      <p class="company-name">${user.company.name}</p>
      <p class="catchPrase">${user.company.catchPhrase}</p>
      <p class="bs">${user.company.bs}</p>
  </div>
</div>`
  );
});
