const commentFormHandler = async (event) => {
    event.preventDefault();

    const commentEl = document.querySelector('#comment-form')

    if (comment) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment: commentEl.value
            }),
            headers: { 'Content-Type': 'application/json' },
        });


        if (response.ok) {
            document.location.replace('/single-page');
        } else {
            alert(response.statusText)
        }
    }
}


document
    .querySelector('.new-comment-form')
    .addEventListener('submit', commentFormHandler);


  