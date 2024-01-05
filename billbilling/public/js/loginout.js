document.addEventListener('DOMContentLoaded', function () {
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', function (e) {
        e.preventDefault();

        // Display a confirmation dialog
        const isConfirmed = confirm('確定要登出嗎？');

        // If the user confirms, redirect to "loginout.html"
        if (isConfirmed) {
            window.location.href = 'loginlogout.html';
        }
        // Otherwise, do nothing
    });
});
