/* 
   Google Ads Conversion Tracking
   Tracks clicks on WhatsApp links and form submissions as conversions.
*/

window.gtag_report_conversion = function (url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };

    // Safety check if gtag is not defined
    if (typeof gtag !== 'function') {
        console.warn('gtag not defined, redirecting directly');
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
        return false;
    }

    gtag('event', 'conversion', {
        'send_to': 'AW-16628989534/DcRYCOb1nvIbEN78qPk9',
        'value': 1.0,
        'currency': 'USD',
        'event_callback': callback
    });
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    // Delegate event listener for all WhatsApp links
    document.body.addEventListener('click', (e) => {
        // Find closest anchor tag
        const link = e.target.closest('a');

        // Check if it's a WhatsApp link and not just a fragment/internal link
        if (link && (link.href.includes('wa.me') || link.href.includes('whatsapp.com'))) {
            // Prevent default navigation
            e.preventDefault();

            // Call conversion function
            gtag_report_conversion(link.href);
        }
    });

    console.log('✅ Google Ads Conversion Tracking Active');
});
