if(typeof TEMPLATES === 'undefined') {var TEMPLATES = {};}
TEMPLATES['column-setting.html'] = "		<div class=\"panel panel-default\">\n" +
    "		  <div class=\"panel-heading\">{{'columns.' + column.name | translate}}</div>\n" +
    "		  <div class=\"panel-body\">\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"form-group\">\n" +
    "					    <label for=\"column-alignment\" data-i18n=\"column.alignment.label\">\n" +
    "					    	{{'column.alignment.label' | translate}}\n" +
    "					    </label>\n" +
    "					    <select id=\"column-alignment\" name=\"column-alignment\" ng-model=\"column.alignment\" class=\"form-control\">\n" +
    "								<option value=\"left\" data-i18n=\"column.alignment.left\">{{'column.alignment.left' | translate}}</option>\n" +
    "								<option value=\"center\" data-i18n=\"column.alignment.center\">{{'column.alignment.center' | translate}}</option>\n" +
    "								<option value=\"right\" data-i18n=\"column.alignment.right\">{{'column.alignment.right' | translate}}</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"form-group\">\n" +
    "							<label for=\"column-width\" data-i18n=\"column.width\">\n" +
    "					    	{{'column.width' | translate}}\n" +
    "					    </label>\n" +
    "					    <input id=\"column-width\" name=\"column-width\" type=\"text\" ng-model=\"column.width\" class=\"text-field form-control\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"form-group\">\n" +
    "					    <label for=\"column-decimals\" data-i18n=\"column.decimals.label\">\n" +
    "					    	{{'column.decimals.label' | translate}}\n" +
    "					    </label>\n" +
    "					    <select id=\"column-decimals\" name=\"column-decimals\" ng-model=\"column.decimals\" class=\"form-control\">\n" +
    "								<option value=\"0\">0</option>\n" +
    "								<option value=\"1\">1</option>\n" +
    "								<option value=\"2\">2</option>\n" +
    "								<option value=\"3\">3</option>\n" +
    "								<option value=\"4\">4</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"form-group\">\n" +
    "					    <label for=\"column-sign\" data-i18n=\"column.sign.label\">\n" +
    "					    	{{'column.sign.label' | translate}}\n" +
    "					    </label>\n" +
    "					    <select id=\"column-sign\" name=\"column-sign\" ng-model=\"column.sign\" class=\"form-control\">\n" +
    "								<option value=\"neg\">-</option>\n" +
    "								<option value=\"pos-neg\">+/-</option>\n" +
    "								<option value=\"bracket\">()</option>\n" +
    "								<option value=\"arrow\">Arrow</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"form-group\">\n" +
    "					    <label for=\"column-color-condition\" data-i18n=\"column.color-condition.label\">\n" +
    "					    	{{'column.color-condition.label' | translate}}\n" +
    "					    </label>\n" +
    "					    <select id=\"column-color-condition\" name=\"column-color-condition\" ng-model=\"column.colorCondition\" class=\"form-control\">\n" +
    "						    <option value=\"none\" data-i18n=\"column.color-condition.none\">{{'column.color-condition.none' | translate}}</option>\n" +
    "								<option value=\"up-green\" data-i18n=\"column.color-condition.up-green\">{{'column.color-condition.up-green' | translate}}</option>\n" +
    "								<option value=\"up-red\" data-i18n=\"column.color-condition.up-red\">{{'column.color-condition.up-red' | translate}}</option>\n" +
    "								<option value=\"positive-green\" data-i18n=\"column.color-condition.positive-green\">{{'column.color-condition.positive-green' | translate}}</option>\n" +
    "								<option value=\"positive-red\" data-i18n=\"column.color-condition.positive-red\">{{'column.color-condition.positive-red' | translate}}</option>\n" +
    "					    </select>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-3\">\n" +
    "						<div class=\"form-group\">\n" +
    "							<label for=\"column-header-text\" data-i18n=\"column.header-text\">\n" +
    "						    	{{'column.header-text' | translate}}\n" +
    "					    </label>\n" +
    "					    <input id=\"column-header-text\" name=\"column-header-text\" type=\"text\" ng-model=\"column.headerText\" class=\"text-field form-control\" />\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    ""; 