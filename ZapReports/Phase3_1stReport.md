# ZAP Scanning Report

ZAP by [Checkmarx](https://checkmarx.com/).


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 2 |
| Low | 4 |
| Informational | 6 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Content Security Policy (CSP) Header Not Set | Medium | 7 |
| Missing Anti-clickjacking Header | Medium | 7 |
| Application Error Disclosure | Low | 1 |
| Strict-Transport-Security Header Not Set | Low | 17 |
| Timestamp Disclosure - Unix | Low | 5 |
| X-Content-Type-Options Header Missing | Low | 7 |
| Authentication Request Identified | Informational | 4 |
| Information Disclosure - Suspicious Comments | Informational | 1 |
| Loosely Scoped Cookie | Informational | 5 |
| Modern Web Application | Informational | 1 |
| Re-examine Cache-control Directives | Informational | 11 |
| Session Management Response Identified | Informational | 7 |




## Alert Detail



### [ Content Security Policy (CSP) Header Not Set ](https://www.zaproxy.org/docs/alerts/10038/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1679317318&target=OPTIMIZATION_TARGET_LANGUAGE_DETECTION
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127919&target=OPTIMIZATION_TARGET_GEOLOCATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127962&target=OPTIMIZATION_TARGET_NOTIFICATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730214257&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=240731042075&target=OPTIMIZATION_TARGET_SEGMENTATION_COMPOSE_PROMOTION
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=5&target=OPTIMIZATION_TARGET_PAGE_TOPICS_V2
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 7

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy ](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy)
* [ https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://w3c.github.io/webappsec-csp/ ](https://w3c.github.io/webappsec-csp/)
* [ https://web.dev/articles/csp ](https://web.dev/articles/csp)
* [ https://caniuse.com/#feat=contentsecuritypolicy ](https://caniuse.com/#feat=contentsecuritypolicy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Missing Anti-clickjacking Header ](https://www.zaproxy.org/docs/alerts/10020/)



##### Medium (Medium)

### Description

The response does not protect against 'ClickJacking' attacks. It should include either Content-Security-Policy with 'frame-ancestors' directive or X-Frame-Options.

* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1679317318&target=OPTIMIZATION_TARGET_LANGUAGE_DETECTION
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127919&target=OPTIMIZATION_TARGET_GEOLOCATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127962&target=OPTIMIZATION_TARGET_NOTIFICATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730214257&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=240731042075&target=OPTIMIZATION_TARGET_SEGMENTATION_COMPOSE_PROMOTION
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=5&target=OPTIMIZATION_TARGET_PAGE_TOPICS_V2
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 7

### Solution

Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app.
If you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)


#### CWE Id: [ 1021 ](https://cwe.mitre.org/data/definitions/1021.html)


#### WASC Id: 15

#### Source ID: 3

### [ Application Error Disclosure ](https://www.zaproxy.org/docs/alerts/90022/)



##### Low (Medium)

### Description

This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.

* URL: http://localhost:8000/reservation
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `HTTP/1.1 500 Internal Server Error`
  * Other Info: ``

Instances: 1

### Solution

Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Strict-Transport-Security Header Not Set ](https://www.zaproxy.org/docs/alerts/10035/)



##### Low (High)

### Description

HTTP Strict Transport Security (HSTS) is a web security policy mechanism whereby a web server declares that complying user agents (such as a web browser) are to interact with it using only secure HTTPS connections (i.e. HTTP layered over TLS/SSL). HSTS is an IETF standards track protocol and is specified in RFC 6797.

* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSIAlN-SI5wUW4MBIFDVNVgbUSBQ3OQUx6IaJTNx4ZeJ9O%3Falt=proto
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSIAnbfdMfo8FmohIFDQszjw4SBQ0C98dkISZnKRVjrvNp%3Falt=proto
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSIAnZ94D1EGfxrhIFDR3-HlkSBQ3MSQIEIUzA53a5qJ-S%3Falt=proto
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSJwkpKaFsFNIqrBIFDVNVgbUSBQ3OQUx6EgUNXRqesCG911aMsPl9kg==%3Falt=proto
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1679317318&target=OPTIMIZATION_TARGET_LANGUAGE_DETECTION
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127919&target=OPTIMIZATION_TARGET_GEOLOCATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127962&target=OPTIMIZATION_TARGET_NOTIFICATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730214257&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=240731042075&target=OPTIMIZATION_TARGET_SEGMENTATION_COMPOSE_PROMOTION
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=5&target=OPTIMIZATION_TARGET_PAGE_TOPICS_V2
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/v1:GetModels%3Fkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://update.googleapis.com/service/update2/json
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://update.googleapis.com/service/update2/json%3Fcup2key=14:GL9BmdhbcXMRqXk3wp7OJSFQxzDPd4soMrA19KdKd1Y&cup2hreq=872c3b91fa574743770a07aaaaf35fe4ee358cca7b5e899a0602efb758d533dd
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://update.googleapis.com/service/update2/json%3Fcup2key=14:uE2fiJ_u92Vb-V44b86_xU_vdnITyf9_lpPgWlgOqeI&cup2hreq=c2de6fa4c2dfddeb9128a480f719004565d11e29cbfcfcae5f29c2c3da503110
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://update.googleapis.com/service/update2/json%3Fcup2key=14:VC57959GZYYDy6ab9cdZXGqd0qXiQ5NKbiebggDdqTk&cup2hreq=cc217789c81affbf0f39c270b8d45cdaef8bffbda309c6f68f3a446134b98292
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: https://update.googleapis.com/service/update2/json%3Fcup2key=14:Xc5ISczwiGyCQjRTLLUTnktN9v69HIAzxziqtw4f_yA&cup2hreq=abb9e0f2644ca2f65659e29a86c92d01385cf19893264633ce4aec1aa14b8e19
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: 17

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to enforce Strict-Transport-Security.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)
* [ https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security ](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
* [ https://caniuse.com/stricttransportsecurity ](https://caniuse.com/stricttransportsecurity)
* [ https://datatracker.ietf.org/doc/html/rfc6797 ](https://datatracker.ietf.org/doc/html/rfc6797)


#### CWE Id: [ 319 ](https://cwe.mitre.org/data/definitions/319.html)


#### WASC Id: 15

#### Source ID: 3

### [ Timestamp Disclosure - Unix ](https://www.zaproxy.org/docs/alerts/10096/)



##### Low (Low)

### Description

A timestamp was disclosed by the application/web server. - Unix

* URL: https://optimizationguide-pa.googleapis.com/v1:GetModels%3Fkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1679317318`
  * Other Info: `1679317318, which evaluates to: 2023-03-20 15:01:58.`
* URL: https://optimizationguide-pa.googleapis.com/v1:GetModels%3Fkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1696267841`
  * Other Info: `1696267841, which evaluates to: 2023-10-02 20:30:41.`
* URL: https://optimizationguide-pa.googleapis.com/v1:GetModels%3Fkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1730127919`
  * Other Info: `1730127919, which evaluates to: 2024-10-28 17:05:19.`
* URL: https://optimizationguide-pa.googleapis.com/v1:GetModels%3Fkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1730127962`
  * Other Info: `1730127962, which evaluates to: 2024-10-28 17:06:02.`
* URL: https://optimizationguide-pa.googleapis.com/v1:GetModels%3Fkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `1730214257`
  * Other Info: `1730214257, which evaluates to: 2024-10-29 17:04:17.`

Instances: 5

### Solution

Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.

### Reference


* [ https://cwe.mitre.org/data/definitions/200.html ](https://cwe.mitre.org/data/definitions/200.html)


#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ X-Content-Type-Options Header Missing ](https://www.zaproxy.org/docs/alerts/10021/)



##### Low (Medium)

### Description

The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1679317318&target=OPTIMIZATION_TARGET_LANGUAGE_DETECTION
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127919&target=OPTIMIZATION_TARGET_GEOLOCATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127962&target=OPTIMIZATION_TARGET_NOTIFICATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730214257&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=240731042075&target=OPTIMIZATION_TARGET_SEGMENTATION_COMPOSE_PROMOTION
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=5&target=OPTIMIZATION_TARGET_PAGE_TOPICS_V2
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`

Instances: 7

### Solution

Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.
If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.

### Reference


* [ https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85) ](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85))
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Authentication Request Identified ](https://www.zaproxy.org/docs/alerts/10111/)



##### Informational (High)

### Description

The given request has been identified as an authentication request. The 'Other Info' field contains a set of key=value lines which identify any relevant fields. If the request is in a context which has an Authentication Method set to "Auto-Detect" then this rule will change the authentication to match the request identified.

* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=username
userValue=aku.ankka@disney.fi
passwordParam=password
referer=http://localhost:8000/login`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=username
userValue=arska.soikkeli@kauppa.fi
passwordParam=password
referer=http://localhost:8000/login`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=username
userValue=kvaak@kvaak
passwordParam=password
referer=http://localhost:8000/login`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=username
userValue=mikki.hiiri@disney.fi
passwordParam=password
referer=http://localhost:8000/login`

Instances: 4

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/ ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/)



#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Medium)

### Description

The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.

* URL: http://localhost:8000/reservation
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `username`
  * Other Info: `The following pattern was used: \bUSERNAME\b and was detected in the element starting with: "<!-- Reserver username (pre-filled) -->", see evidence field for the suspicious comment/snippet.`

Instances: 1

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ Loosely Scoped Cookie ](https://www.zaproxy.org/docs/alerts/90033/)



##### Informational (Low)

### Description

Cookies can be scoped by domain or path. This check is only concerned with domain scope.The domain scope applied to a cookie determines which domains can access it. For example, a cookie can be scoped strictly to a subdomain e.g. www.nottrusted.com, or loosely scoped to a parent domain e.g. nottrusted.com. In the latter case, any subdomain of nottrusted.com can access the cookie. Loosely scoped cookies are common in mega-applications like google.com and live.com. Cookies set from a subdomain like app.foo.bar are transmitted only to that domain by the browser. However, cookies scoped to a parent-level domain may be transmitted to the parent, or any subdomain of the parent.

* URL: http://localhost:8000/logout
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `The origin domain used for comparison was:
localhost
session_id="";$Path="/";$Domain="localhost"
`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `The origin domain used for comparison was:
localhost
session_id=111aef6f-c32f-4a1c-a5d3-705db77995f7
`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `The origin domain used for comparison was:
localhost
session_id=29eb89ad-c707-4c35-894b-3aed42c69eb8
`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `The origin domain used for comparison was:
localhost
session_id=2cc3fc90-7265-4c13-8d83-364bf4a1ce04
`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `The origin domain used for comparison was:
localhost
session_id=b9111da8-87f8-4895-a7fd-a9c5c593a5c9
`

Instances: 5

### Solution

Always scope cookies to a FQDN (Fully Qualified Domain Name).

### Reference


* [ https://tools.ietf.org/html/rfc6265#section-4.1 ](https://tools.ietf.org/html/rfc6265#section-4.1)
* [ https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html ](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html)
* [ https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies ](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_cookies)


#### CWE Id: [ 565 ](https://cwe.mitre.org/data/definitions/565.html)


#### WASC Id: 15

#### Source ID: 3

### [ Modern Web Application ](https://www.zaproxy.org/docs/alerts/10109/)



##### Informational (Medium)

### Description

The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.

* URL: http://localhost:8000/reservation
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script src="/static/reservations.js"></script>`
  * Other Info: `No links have been found while there are scripts, which is an indication that this is a modern web application.`

Instances: 1

### Solution

This is an informational alert and so no changes are required.

### Reference




#### Source ID: 3

### [ Re-examine Cache-control Directives ](https://www.zaproxy.org/docs/alerts/10015/)



##### Informational (Low)

### Description

The cache-control header has not been set properly or is missing, allowing the browser and proxies to cache content. For static assets like css, js, or image files this might be intended, however, the resources should be reviewed to ensure that no sensitive content will be cached.

* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSIAlN-SI5wUW4MBIFDVNVgbUSBQ3OQUx6IaJTNx4ZeJ9O%3Falt=proto
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `private,max-age=604800`
  * Other Info: ``
* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSIAnbfdMfo8FmohIFDQszjw4SBQ0C98dkISZnKRVjrvNp%3Falt=proto
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `private,max-age=604800`
  * Other Info: ``
* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSIAnZ94D1EGfxrhIFDR3-HlkSBQ3MSQIEIUzA53a5qJ-S%3Falt=proto
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `private,max-age=604800`
  * Other Info: ``
* URL: https://content-autofill.googleapis.com/v1/pages/ChVDaHJvbWUvMTMxLjAuNjc3OC4xMDkSJwkpKaFsFNIqrBIFDVNVgbUSBQ3OQUx6EgUNXRqesCG911aMsPl9kg==%3Falt=proto
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `private,max-age=604800`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1679317318&target=OPTIMIZATION_TARGET_LANGUAGE_DETECTION
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1696267841&target=OPTIMIZATION_TARGET_OMNIBOX_URL_SCORING
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127919&target=OPTIMIZATION_TARGET_GEOLOCATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730127962&target=OPTIMIZATION_TARGET_NOTIFICATION_PERMISSION_PREDICTIONS
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=1730214257&target=OPTIMIZATION_TARGET_CLIENT_SIDE_PHISHING
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=240731042075&target=OPTIMIZATION_TARGET_SEGMENTATION_COMPOSE_PROMOTION
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``
* URL: https://optimizationguide-pa.googleapis.com/downloads%3Fname=5&target=OPTIMIZATION_TARGET_PAGE_TOPICS_V2
  * Method: `GET`
  * Parameter: `cache-control`
  * Attack: ``
  * Evidence: `public, max-age=86400`
  * Other Info: ``

Instances: 11

### Solution

For secure content, ensure the cache-control HTTP header is set with "no-cache, no-store, must-revalidate". If an asset should be cached consider setting the directives "public, max-age, immutable".

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching ](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#web-content-caching)
* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
* [ https://grayduck.mn/2021/09/13/cache-control-recommendations/ ](https://grayduck.mn/2021/09/13/cache-control-recommendations/)


#### CWE Id: [ 525 ](https://cwe.mitre.org/data/definitions/525.html)


#### WASC Id: 13

#### Source ID: 3

### [ Session Management Response Identified ](https://www.zaproxy.org/docs/alerts/10112/)



##### Informational (High)

### Description

The given response has been identified as containing a session management token. The 'Other Info' field contains a set of header tokens that can be used in the Header Based Session Management Method. If the request is in a context which has a Session Management Method set to "Auto-Detect" then this rule will change the session management to use the tokens identified.

* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `111aef6f-c32f-4a1c-a5d3-705db77995f7`
  * Other Info: `
cookie:session_id`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `29eb89ad-c707-4c35-894b-3aed42c69eb8`
  * Other Info: `
cookie:session_id`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `2cc3fc90-7265-4c13-8d83-364bf4a1ce04`
  * Other Info: `
cookie:session_id`
* URL: http://localhost:8000/login
  * Method: `POST`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `b9111da8-87f8-4895-a7fd-a9c5c593a5c9`
  * Other Info: `
cookie:session_id`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `29eb89ad-c707-4c35-894b-3aed42c69eb8`
  * Other Info: `
cookie:session_id`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `2cc3fc90-7265-4c13-8d83-364bf4a1ce04`
  * Other Info: `
cookie:session_id`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `session_id`
  * Attack: ``
  * Evidence: `b9111da8-87f8-4895-a7fd-a9c5c593a5c9`
  * Other Info: `
cookie:session_id`

Instances: 7

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id)



#### Source ID: 3


