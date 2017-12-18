$(document).ready(function() {
    document.querySelectorAll('.swatch').forEach((element, index) => {
        document.querySelectorAll('#swatch-'+ index +' li').forEach((innerElement, innerIndex) => {
            innerElement.style.backgroundColor = innerElement.dataset.color;
            innerElement.style.transform = 'rotate(' + (20 - (innerIndex*3)) + 'deg)';
        });

        $('#swatch-'+ index +' li').on('click', function(event) {
            $('#swatch-'+ index +' li').removeClass('active');
            $(this).addClass('active');
        });
    });
});