function loadValidaionScript(src = 'https://blog.zohowebstatic.com/sites/zblogs/common/js/zoho-blog-validation-plugin.js') {
    return new Promise(function(resolve, reject) {
        if ($("script[src*='" + src + "']").length === 0) {
            let script = document.createElement('script');
            script.onload = function() {
                resolve();
            };
            script.onerror = function() {
                reject();
            };
            script.src = src;
            document.body.appendChild(script);
        } else {
            resolve();
        }
    });
}

jQuery(document).ready(function() {
    function getConCode() {
        if (typeof CountryCode !== 'undefined') {
            return CountryCode;
        } else {
            var cookieName = "zip" + "=",
                // cDecoded = decodeURIComponent(document.cookie);
                cList = document.cookie,
                cListArr = cList.split('; '),
                zipRes;
            cListArr.forEach(val => {
                if (val.indexOf(cookieName) === 0) zipRes = val.substring(cookieName.length);
            })
            codeResArr = zipRes.split('|');
            codeRes = codeResArr[1];
            return codeRes;
        }
    }
    var EUArray = ['RS', 'VA', 'GB', 'UA', 'CH', 'SE', 'ES', 'SI', 'SK', 'SM', 'RO', 'PT', 'PL', 'NO', 'NL', 'ME', 'MC', 'MD', 'MT', 'MK', 'LU', 'LT', 'LI', 'LV', 'IT', 'IM', 'IE', 'IS', 'HU', 'GR', 'GI', 'DE', 'FR', 'FI', 'FO', 'EE', 'DK', 'CZ', 'CY', 'HR', 'BG', 'BA', 'BE', 'BY', 'AT', 'AD', 'AL', 'AX', 'GG', 'JE', 'XK', 'SJ', 'CS', 'UK'];
    var zohodblogs_CountryCode = getConCode();
    var page_lang = jQuery('html').attr('zohodblogs-lang');
    var success_msg_content = `<div class="success-alert"><div class="scs-pop-inr"> <span class="scs-txt">Success Message</span></div></div>`;
    if (page_lang == 'en') {
        page_lang = '';
    } else {
        page_lang = '/' + page_lang;
    }

    setTimeout(function() {

        jQuery('#cancel-comment-reply-link').attr('href', window.location.pathname + '#respond');
        jQuery(".reply > a").on("click", function() {
            var local_home_path = drupalSettings.group_details.local_home_path;
            var local_domain = drupalSettings.group_details.local_domain;
            jQuery("#cancel-comment-reply-link").show();
            reply_id = jQuery(this).attr('data-commentid');
            node_id = jQuery(this).attr('data-postid');
            comment_title = Drupal.t("Reply to") + ' ' + jQuery(this).parent().parent()[0].children[0].children[0].children[1].innerText;
            path = local_domain + local_home_path + page_lang + '/comment/reply/node/' + node_id + '/field_comments/' + reply_id;
            if (local_domain.includes(window.location.hostname)) {
                path = local_home_path + page_lang + '/comment/reply/node/' + node_id + '/field_comments/' + reply_id;
            }
            var pathname = window.location.pathname
            jQuery('#reply-title').text(comment_title);
            var CancelText = Drupal.t("Cancel reply");
            jQuery('#reply-title').append('<small><a rel="nofollow" id="cancel-comment-reply-link" href="' + pathname + '#respond">' + CancelText + '</a></small>');
            jQuery('#respond form').attr('action', path);
            jQuery('#comments').append('<div id="wp-temp-form-div" style="display: none;"></div>');
            jQuery('#respond').insertAfter(jQuery('#' + jQuery(this)[0].parentElement.parentElement.id));
            var replyCancel = function() {
                jQuery("#cancel-comment-reply-link").hide();
                comment_title = Drupal.t("Leave a Reply");
                path = local_domain + local_home_path + page_lang + '/comment/reply/node/' + node_id + '/field_comments';
                if (local_domain.includes(window.location.hostname)) {
                    path = local_home_path + page_lang + '/comment/reply/node/' + node_id + '/field_comments';
                }
                var pathname = window.location.pathname
                var CancelText = Drupal.t("Cancel reply");
                jQuery('#reply-title').append('<small><a rel="nofollow" id="cancel-comment-reply-link" style="display=none;" href="' + pathname + '#respond">' + CancelText + '</a></small>');
                jQuery('#reply-title').text(comment_title);
                jQuery('#respond form').attr('action', path);
                jQuery('#wp-temp-form-div').remove();
                jQuery('#respond').appendTo('#comments');
            }
            document.getElementById("cancel-comment-reply-link").onclick = replyCancel;

        });
    }, 1000);

    var headerMenuUrl = '';
    var pageException = false;
    var bodyElement = jQuery("body");
    var footerElement = jQuery("footer.site-footer");
    var productName = bodyElement.attr('data-prdname');
    var domainName = window.location.host;
    var local_domain = drupalSettings.group_details.local_domain;
    var live_domain = drupalSettings.group_details.live_domain;
    var local_home_path = drupalSettings.group_details.local_home_path;
    var live_home_path = drupalSettings.group_details.live_home_path;

    var page_lang = jQuery('html').attr('zohodblogs-lang');
    if (page_lang == 'en') {
        page_lang = '';
    } else {
        page_lang = '/' + page_lang;
    }

    if (bodyElement.hasClass("page-node-type-article-content") || bodyElement.hasClass("page-node-type-product-home")) {
        pageException = true;
    }
    if (local_domain.includes(domainName)) {
        commonHeaderMenuUrl = local_domain + page_lang + "/common-blog-menu";
        commonFooterMenuUrl = local_domain + page_lang + "/common-blog-footer-menu";
    } else if (live_domain.includes(domainName)) {
        commonHeaderMenuUrl = live_domain + live_home_path + page_lang + "/common-blog-menu";
        commonFooterMenuUrl = live_domain + live_home_path + page_lang + "/common-blog-footer-menu";
    }
    jQuery.ajax(commonHeaderMenuUrl, {
        success: function(commonBlogContent) {
            var commonHeaderContent, commonSalesForm = '';
            // if(jQuery('body').hasClass("user-logged-in") && jQuery(commonBlogContent)[0].children[2] != ""){
            //     commonHeaderContent = jQuery(commonBlogContent)[0].children[2];
            // }
            // else if(jQuery(commonBlogContent)[2] != "")
            // {
            //     commonHeaderContent = jQuery(commonBlogContent)[2];
            // }


            // if(commonHeaderContent != '')
            // {
            //     var headerInnerHTML = commonHeaderContent.innerHTML;
            //     bodyElement.prepend(headerInnerHTML);
            // }

            commonHeaderContent = jQuery(commonBlogContent).find('#sidebar');
            if (commonHeaderContent.length != 0) {
                var headerInnerHTML = commonHeaderContent[0].outerHTML;
                bodyElement.prepend(headerInnerHTML);
            }
            commonSalesForm = jQuery(commonBlogContent).find('.sales-form-container');
            if (commonSalesForm.length != 0) {
                var salesFormHtml = commonSalesForm[0].outerHTML;
                var form_subject, form_title, form_desc = "";
                var sales_form_wrap = jQuery('.contact-sales-form-wrap .formInner');

                loadValidaionScript().then(function() {
                    form_subject = jQuery(".form-widget .form-details-wrap .form-subject").attr("data-val");
                    form_title = jQuery(".form-widget .form-details-wrap .form-title").attr("data-val");
                    form_desc = jQuery(".form-widget .form-details-wrap .form-description").attr("data-val");
                    if (form_title != "") {
                        sales_form_wrap.append(`<h4>${form_title}</h4>`);
                    }
                    if (form_desc != "") {
                        sales_form_wrap.append(`<p>${form_desc}</p>`);
                    }
                    if (form_subject != "") {
                        jQuery('.contact-sales-form-wrap .formInner').append(salesFormHtml);
                        jQuery("#zcf_subject_multi1").val(form_subject);
                        jQuery('.form-widget,.sales-form-open').click(function() {

                            jQuery('.blog-form-container').fadeIn();
                            jQuery(".blog-form-container .formSec").addClass("active");
                        });
                        jQuery('.freeze_layer,.form-close').click(function(eve) {
                            jQuery(".blog-form-container .formSec").removeClass("active");
                            jQuery('.blog-form-container').fadeOut('slow');
                        });
                        jQuery(window).scroll(function() {
                            var limit = jQuery('.widget.related-topics').height() + jQuery('.widget.related-topics').offset().top;
                            var st = jQuery(window).scrollTop();
                            if (st > limit && !jQuery('.widget.form-widget').hasClass('fixed')) {


                                jQuery('.widget.form-widget').addClass('fixed').css({ 'position': 'fixed', 'top': '100px' });
                                var other_widget_with = jQuery('.widget.sidebar-search').outerWidth();
                                jQuery('.widget.form-widget.fixed').css("width", other_widget_with + 'px');

                            }
                            if (st < limit && jQuery('.widget.form-widget').hasClass('fixed')) {

                                if (jQuery('.widget.form-widget').hasClass('fixed')) {
                                    jQuery('.widget.form-widget').removeClass('fixed').css({ 'position': 'unset', 'top': 'opx' });
                                }
                            }


                        });

                        if (jQuery('.success-alert').length == 0) {
                            jQuery('.site-inner').append(success_msg_content);
                        }
                        // fileds values set

                        $('.z_crmwebform_multi1 #returnURL').val(location.protocol + '//' + location.host + location.pathname + '?submit=success2');
                        // $('#zcf_signup_url_multi1').val(location.protocol + '//' + location.host + location.pathname);
                        // $('#zcf_marketing_source_multi1').val(customvar.czms().split('|')[0]);
                        // $('#zcf_mls_multi1').val(customvar.czms().split('|')[1]);
                        // $('#zcf_mlastsource_multi1').val(customvar.czms().split('|')[2]);
                        // $('#zcf_mr_url_multi1').val(customvar.czmr());
                        // $('#zcf_website_multi1').val(document.referrer); 
                        $(".z_crmwebform_multi1").submit(function(event) {
                            event.preventDefault();
                        }).validate({
                            submitHandler: function(form) {
                                $('.z_crmwebform_multi1 .zsubmit button').attr('disabled', 'disabled');
                                $('.z_crmwebform_multi1 .zsubmit .btn-text').css('display', 'none');
                                $('.z_crmwebform_multi1 .zsubmit .progress-loader').css('display', 'inline-block');
                                $.ajax({
                                    type: "POST",
                                    url: $(form).attr("action"),
                                    data: $(form).serialize(),
                                    success: function(result) {
                                        $(".z_crmwebform_multi1 .reload-img").trigger("click");
                                        if (result.indexOf("window.location.assign") > -1) {
                                            jQuery('#zcf_reported_by_multi1,#zcf_email_multi1,#zcf_phone_multi1,#zcf_company_name_multi1,#zcf_users_multi1 ,.z_crmwebform_multi1 #zcf_enterdigest').val("");
                                            jQuery('.freeze_layer').click();
                                            var Success_txt = Drupal.t("Thanks for subscribing to our newsletter");
                                            show_success_message(Success_txt);
                                        } else {
                                            $(".z_crmwebform_multi1 #zcf_enterdigest").val("").focus();
                                            var err_lable = $(".z_crmwebform_multi1 #zcf_enterdigest").next();
                                            if (err_lable.hasClass("error")) {
                                                err_lable.show();
                                            } else {
                                                $(`<label for="zcf_enterdigest" generated="true" class="error" ">Please enter captcha</label>`).insertAfter(".z_crmwebform_multi1 #zcf_enterdigest")
                                            }
                                        }
                                        $('.z_crmwebform_multi1 .zsubmit button').removeAttr('disabled');
                                        $('.z_crmwebform_multi1 .zsubmit .btn-text').css('display', 'inline-block');
                                        $('.z_crmwebform_multi1 .zsubmit .progress-loader').css('display', 'none');
                                    },
                                });
                            },
                        });
                    }



                });
            }


        }
    });
    jQuery.ajax(commonFooterMenuUrl, {
        success: function(commonBlogFooterContent) {
            var commonFooterContent = '';
            if (jQuery('body').hasClass("user-logged-in") && jQuery(commonBlogFooterContent)[0].children[2] != "") {
                commonFooterContent = jQuery(commonBlogFooterContent)[0].children[2];
            } else if (jQuery(commonBlogFooterContent)[2] != "") {
                commonFooterContent = jQuery(commonBlogFooterContent)[2];
            }

            if (commonFooterContent != '') {
                var footerInnerHTML = commonFooterContent.innerHTML;
                footerElement.append(footerInnerHTML);


            }
        }
    });
    if (pageException) {
        if (local_domain.includes(domainName)) {
            headerMenuUrl = local_domain + page_lang + "/" + productName + "/product-blog-menu";
        } else if (live_domain.includes(domainName)) {
            headerMenuUrl = live_domain + live_home_path + page_lang + '/' + productName + "/product-blog-menu";
        }
        jQuery.ajax(headerMenuUrl, {
            success: function(content) {
                var headerContent, formContent = '';
                // if(jQuery('body').hasClass("user-logged-in") && jQuery(content)[0].children[2] != ""){
                //     headerContent = jQuery(content)[0].children[2];
                // }
                // else if(jQuery(content)[2] != ""){
                //     headerContent = jQuery(content)[2];
                //     // var headerContainer ;
                //     // if(jQuery("body").hasClass("lang-pt-br"))
                //     // {
                //     //     header_container = "#lang-pt-br-product-header";
                //     // }
                //     // else
                //     // {
                //     // }
                // }

                // if(headerContent != '')
                // {
                //     var headerInnerHTML = headerContent.innerHTML;
                //     jQuery('body .header-product-link').append(headerInnerHTML);
                // }


                headerContent = jQuery(content).find('.header-link-inner');
                // var headerContainer ;
                // if(jQuery("body").hasClass("lang-pt-br"))
                // {
                //     header_container = "#lang-pt-br-product-header";
                // }
                // else
                // {
                // }


                if (headerContent.length != 0) {
                    var headerInnerHTML = headerContent[0].outerHTML;
					if(jQuery(content).find('.notify-banner').length != 0){
						headerInnerHTML += jQuery(content).find('.notify-banner')[0].outerHTML;
					}
                    jQuery('body .header-product-link').append(headerInnerHTML);
                }
                var is_EU_country = false;
                var is_campaign_form = false;
                if (jQuery('#zcampaignOptinForm').length != 0) {
                    is_campaign_form = true;
                    var accessed_country = getConCode();
                    if (EUArray.includes(accessed_country)) {
                        is_EU_country = true;
                    }
                }

                if (is_campaign_form) {
                    var src = "";
                    if (!is_EU_country) {
                        jQuery('.subscribe-form-eu').remove();
                    } else {
                        jQuery('.subscribe-form').remove();
                    }
                    // loadCampaignScript(src).then(function() {
                    var footer_form_wrap = jQuery(content).find('.footer-subscribe');
                    footer_form_wrap.find(".subscribe-box").remove();
                    $('body .site-inner').append(footer_form_wrap[0].outerHTML);
                    jQuery(".footer-subscribe").show();
                    jQuery('.subscribe-show-btn').click(function() {

                        jQuery('.blog-form-container').fadeIn();
                        jQuery(".blog-form-container .formSec").addClass("active");
                        jQuery('.subscribe-show-btn').fadeOut('slow');
                    });
                    jQuery('.freeze_layer,.form-close').click(function(eve) {
                        jQuery(".blog-form-container .formSec").removeClass("active");
                        jQuery('.blog-form-container').fadeOut('slow');
                        jQuery('.subscribe-show-btn').fadeIn('slow');
                    });
                    // });

                    // if (formContent.length != 0) {
                    //     if (!is_EU_country) {

                    //     } else {

                    //     }
                    //     var formHtml = formContent[0].outerHTML;

                    //     

                    //     $('body .site-inner').append(formHtml);
                    //     jQuery(".footer-subscribe").show();
                    //     jQuery("body").addClass('subscribe-form-added');
                    //     jQuery(".subscribe-show-btn").click(function() {
                    //         jQuery(".subscribe-box").slideDown();
                    //         jQuery(".subscribe-show-btn").hide();
                    //     });
                    //     jQuery(".form-closer").click(function() {
                    //         jQuery(".subscribe-box").slideUp();
                    //         jQuery(".subscribe-show-btn").show();
                    //     });
                    // }
                } else {
                    formContent = jQuery(content).find('.footer-subscribe');
                    if (formContent.length != 0) {
                        var formHtml = formContent[0].outerHTML;


                        loadValidaionScript().then(function() {
                            $('body .site-inner').append(formHtml);
                            jQuery(".footer-subscribe").show();
                            jQuery("body").addClass('subscribe-form-added');

                            jQuery(".subscribe-show-btn").click(function() {
                                jQuery(".subscribe-box").slideDown();
                                jQuery(".subscribe-show-btn").hide();
                            });
                            jQuery(".form-closer").click(function() {
                                jQuery(".subscribe-box").slideUp();
                                jQuery(".subscribe-show-btn").show();
                            });
                            if (jQuery('.success-alert').length == 0) {
                                jQuery('.site-inner').append(success_msg_content);
                            }
                            $('#returnURL').val(location.protocol + '//' + location.host + location.pathname + '?submit=success');
                            $("#z_crmwebform_multi").submit(function(event) {
                                event.preventDefault();
                            }).validate({
                                submitHandler: function(form) {
                                    $('.subscribe-crm-form .zsubmit button').attr('disabled', 'disabled');
                                    $('.subscribe-crm-form .zsubmit .btn-text').css('display', 'none');
                                    $('.subscribe-crm-form .zsubmit .progress-loader').css('display', 'inline-block');
                                    $.ajax({
                                        type: "POST",
                                        url: $(form).attr("action"),
                                        data: $(form).serialize(),
                                        success: function(result) {
                                            $(".reload-img").trigger("click");
                                            if (result.indexOf("Error") > -1 || result.indexOf("Please enter the correct code") > -1) {
                                                /* Error action */
                                                $(".subscribe-crm-form #zcf_enterdigest").val("").focus();
                                                var err_lable = $(".subscribe-crm-form #zcf_enterdigest").next();
                                                if (err_lable.hasClass("error")) {
                                                    err_lable.show();
                                                } else {
                                                    $(`<label for="zcf_enterdigest" generated="true" class="error" ">Please enter captcha</label>`).insertAfter(".subscribe-crm-form #zcf_enterdigest")
                                                }

                                            } else {
                                                /* Success action */
                                                jQuery('#zcf_email').val('');
                                                jQuery(".subscribe-crm-form  #zcf_enterdigest").val("");
                                                jQuery(".form-closer").click();
                                                var Success_txt = Drupal.t("Thanks for subscribing to our newsletter");
                                                show_success_message(Success_txt);
                                            }
                                            $('.subscribe-crm-form .zsubmit button').removeAttr('disabled');
                                            $('.subscribe-crm-form .zsubmit .btn-text').css('display', 'inline-block');
                                            $('.subscribe-crm-form .zsubmit .progress-loader').css('display', 'none');
                                        },
                                    });
                                },
                            });

                        })
                    }
                }


            }
        });
    }
    jQuery(document).ajaxComplete(function(event, xhr, options) {
        if (options.url.endsWith('/product-blog-menu')) {
            jQuery('.prod-nav-link li.drop-down-cta').on('mouseenter', function() {
                if (!jQuery(this).hasClass('dropdown-visible')) {
                    jQuery(this).addClass('dropdown-visible');
                }
            });
            jQuery('.prod-nav-link li.drop-down-cta').on('mouseleave', function() {
                if (jQuery(this).hasClass('dropdown-visible')) {
                    jQuery(this).removeClass('dropdown-visible');
                }
            });
        }
    });
    // post comment submit handling
    var hash_value = location.hash;
    if (hash_value != "" && hash_value == "#comment-success" && jQuery('body').hasClass('page-node-type-article-content')) {
        jQuery('.site-inner').append(success_msg_content);
        history.pushState("", "", `${location.pathname}${location.search}`);
        show_success_message('Your comment has been queued for review by site administrators and will be published after approval.');
    }
});
jQuery(document).ready(function() {
    //var commentText = Drupal.t("Post Comment");
    //jQuery("#comments #edit-submit").attr('value', commentText);
    jQuery('#edit-comment-body-0-format').remove();
    jQuery(".js-form-item.form-item.js-form-type-textarea > label").after('<span class="required">*</span>');
    jQuery(".field--name-field-author > .js-form-item.form-item.js-form-type-textfield > label").after('<span class="required">*</span>');
    jQuery(".js-form-item.form-item.js-form-type-email > label").after('<span class="required">*</span>');

    if (window.location.href.includes('/comment/reply/node/')) {
        if (jQuery('.messages--error').length != 0) {
            jQuery('.messages--status,.region-content,header').hide();
            var content = jQuery('.messages--error')[0].outerHTML;
            jQuery('main').append('<div class="err-msg-popup" ></div>');
            jQuery('.err-msg-popup').append(content);
            jQuery('.err-msg-popup #message-error-title').text('Notice');
        }

    }

    var domain = location.origin;
    if (domain == "https://www.zoho.com" || domain == "https://www.localzoho.com") {
        if (location.href.includes('/author/')) {
            // jQuery('#main a,.brand-logo > a').each(function() {
            //     var href_url = jQuery(this).attr('href');
            //     if (!href_url.startsWith('/blog')) {
            //         jQuery(this).attr('href', ('/blog' + href_url));
            //     }
            // });
            jQuery('.wp-pagenavi > a').each(function() {
                var old_href = jQuery(this).attr('href');
                if (old_href.includes('/blog?')) {
                    var new_href = old_href.replace('/blog?', location.pathname + '?')
                    jQuery(this).attr('href', new_href);
                }

            });
        }
    }
    if(window.location.origin == 'https://blog.zoho.com' && jQuery('body').hasClass('path-author')) {
        jQuery('.wp-pagenavi a').each(function (params) {
            var cur_anchor = jQuery(this);
            if(cur_anchor.attr('href').includes('/blog/')){
                var new_anchor = cur_anchor.attr('href').replace('/blog/','/');
                cur_anchor.attr('href',new_anchor);
            }
        })
        
    }

});

jQuery(document).ready(function() {
    var content_html = jQuery('#content').html();
    if (content_html.includes("'")) {
        // content_html = content_html.replaceAll("'","â€™");
        content_html = content_html.replaceAll("'", "&#39;");
    }
    jQuery('#content').html(content_html);
    // audio click track 
    jQuery("audio").on("play", function() {
        try { $zoho.salesiq.visitor.customaction('{"eventCategory":"audio-click,"eventAction":"celebrating-8-years","eventLabel":"social"}'); } catch (e) {};
    });
});

jQuery(window).scroll(function() {

    var scrollTop = jQuery(window).scrollTop();
    if (scrollTop > 100) {
        if (!jQuery('.header-link-inner').hasClass('fixed')) {
            jQuery('.header-link-inner').addClass('fixed');
        }
    } else {
        if (jQuery('.header-link-inner').hasClass('fixed')) {
            jQuery('.header-link-inner').removeClass('fixed');
        }
    }
});
jQuery(window).resize(function() {
    if (jQuery('.widget.form-widget').length != 0) {
        var other_widget_with = jQuery('.widget.sidebar-search').outerWidth();
        jQuery('.widget.form-widget').css("width", other_widget_with + 'px');
    }

});
var sales_form_name = Drupal.t("Please enter your name");
var sales_form_phone = Drupal.t("Please enter your phone number");
var EmailVal = Drupal.t("Please enter your email");
var EmailVal2 = Drupal.t('Please enter valid email address');
var CaptchVal = Drupal.t("Please enter a correct captcha");
var Company_name = Drupal.t("Please enter company name");
var Users_count = Drupal.t("Please select the number of users");

// subscribe form validation
function setValidationRules() {
    if ($(".footer-subscribe #z_crmwebform_multi").length != 0) {
        /* Clear rules */
        $("#z_crmwebform_multi").validate().settings.rules = {};


        $("#zcf_email").rules("add", { required: true, email: true, messages: { required: EmailVal, email: EmailVal2 } });
        $("#zcf_enterdigest").rules("add", { required: true, messages: { required: CaptchVal } });
    }
    if ($(".z_crmwebform_multi1").length != 0) {
        // for contact sales forms
        $(".z_crmwebform_multi1").validate().settings.rules = {};

        $("#zcf_reported_by_multi1").rules("add", { required: true, messages: { required: sales_form_name } });
        $("#zcf_phone_multi1").rules("add", { required: true, messages: { required: sales_form_phone } });
        $("#zcf_email_multi1").rules("add", { required: true, email: true, messages: { required: EmailVal, email: EmailVal2 } });
        $("#zcf_users_multi1").rules("add", { required: true, messages: { required: Users_count } });
        $("#zcf_company_name_multi1").rules("add", { required: true, messages: { required: Company_name } });
        $(".z_crmwebform_multi1 #zcf_enterdigest").rules("add", { required: true, messages: { required: CaptchVal } });
    }

}
// handling form success msg
function show_success_message(msg_conent) {
    jQuery('.scs-pop-inr .scs-txt').text(msg_conent);
    $('.success-alert').show();
    setTimeout(function() {
        $('.scs-pop-inr').addClass('animate')
    }, 1400);
    setTimeout(function() {
        $('.success-alert').fadeOut(350);
    }, 10000);
}

jQuery(document).ready(function() {
    if (jQuery('body').hasClass("page-node-type-article-content") && drupalSettings.user.uid == '0') {
        /**
         * @file
         * Statistics functionality.
         */

        (function($, drupalSettings) {
            setTimeout(() => {
                $.ajax({
                    type: 'POST',
                    cache: false,
                    url: drupalSettings.statistics.url,
                    data: drupalSettings.statistics.data,
                });
            });
        })(jQuery, drupalSettings);

        /**
         * @file
         * Nodeviewcount statistics functionality.
         */

        (function($, Drupal, drupalSettings) {

            'use strict';

            $(document).ready(function() {
                $.each(drupalSettings.nodeviewcount.data, function(key, value) {
                    $.ajax({
                        type: 'POST',
                        cache: false,
                        url: drupalSettings.nodeviewcount.url,
                        data: value
                    });
                });
            });
        })(jQuery, Drupal, drupalSettings);
    }

    $('iframe[src^="https://player.vimeo.com/video/"]').attr('allow','fullscreen;picture-in-picture');
    $('iframe[src^="https://player.vimeo.com/video/"]').each(function (index, element) {
        element.setAttribute('src',element.src);
    });
// announcement banner click code by - pugaz
    jQuery('.ztopstrip-close').click(function (a) {
        a.preventDefault();
        jQuery(".ztopstrip-container").fadeOut(350)
    })
    // announcement banner click code by - pugaz
});