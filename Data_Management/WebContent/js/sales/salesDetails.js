var salesApp = angular.module("salesApp",[]);

salesApp.controller(
				'salesDetailsController',
				function($rootScope, $scope, $http) {
					$scope.purchaseOrderList = [];
					$scope.quotationList = [];
					$scope.inventoryList = [];
					$scope.salesList = [];
					$scope.InwardDCList = [];
					$scope.searchResList = [];
					
					$scope.styleClassH = "active";
					$scope.isHome = true;
					$scope.infoPanel = false;
					
					$scope.styleClassP = "";
					$scope.isPurchase = "";
					
					$scope.styleClassQ = "";
					$scope.Quotation = "";
					
					$scope.styleClassT = "";
					$scope.Invoice = "";
					
					$scope.styleClassI = "";
					$scope.isInventory = "";
					
					$scope.styleClassS = "";
					$scope.isSales = "";
					
					$scope.isIDC = "";
					
					$scope.isItemMaster = false;
					
					$scope.isSearch = false;
					
					$scope.enableEdit = true;
					
					var clear = function() {
						$scope.styleClassH = "";
						$scope.isHome = "";
						$scope.styleClassP = "";
						$scope.isPurchase = "";
						$scope.styleClassQ = "";
						$scope.styleClassT = "";
						$scope.isQuotation = "";
						$scope.isInvoice = "";
						$scope.styleClassI = "";
						$scope.isInventory = "";
						$scope.styleClassS = "";
						$scope.isSales = "";
						$scope.isIDC = "";
						$scope.isEnquiry = "";
						$scope.isItemMaster = false;
						$scope.add = false;
						$scope.addQuote = false;
						$scope.isSearch = false;
						$scope.isAddNewItem = false;
						$scope.searchRes = false;
						$scope.enableEdit = false;
						$scope.searchResList = [];
						$scope.checked='';
						$scope.isVendor = false;
						$scope.addNewVendor = false;
					}
					$scope.showHome = function() {
						clear();
						$scope.styleClassH="active";
						$scope.isHome = true;
					}
					
					$scope.showPurchaseOrder = function() {
						clear();
						$scope.styleClassP="active";
						$scope.isPurchase = true;
						
					}
					$scope.showQuotation = function() {
						clear();
						$scope.styleClassQ="active";
						$scope.isQuotation = true;
					}
					
					$scope.showInvoice = function() {
						clear();
						$scope.styleClassT="active";
						$scope.isInvoice = true;
					}
					
					$scope.showEnquiry = function() {
						clear();
						$scope.styleClassQ="active";
						$scope.isEnquiry = true;
					}
					
					$scope.showInventory = function() {
						clear();
						$scope.styleClassI="active";
						$scope.isInventory = true;
					}
					
					$scope.showSales = function() {
						clear();
						$scope.styleClassS="active";
						$scope.isSales = true;
					}
					
					$scope.addItems = function() {
						$scope.add = true;
						 $scope.purchaseOrderList.push({
							 	itemId:0,
							 	itemName : '' ,
								uom: '',
							 	quantity : 0,
							 	unitPrice : 0,
								amount: '',
								discount: 0
					  });
						 
					}
					$scope.addQuotation = function() {
						$scope.addQuote = true;
						 $scope.quotationList.push({
							 	itemId:0,
							 	itemName : '' ,
								uom: '',
							 	quantity : 0,
							 	unitPrice : 0,
								amount: '',
								discount: 0
					  });
						 
					}
					$scope.openInputBox = function() {
						$scope.existingVen = true;
						$scope.showSubmit = true;
						$scope.addInventory = false;
						$scope.addVendor = false;
					}
					$scope.submitVendorId = function(vendorId) {
						$scope.showSubmit = false;
						$scope.addInventory = true;
						$scope.inventoryList.push({
							itemId: '',
							unitPrice: 0,
							noOfUnits: 0,
							totalPrice: 0
						})
					}
					$scope.addNewVendor = function() {
						$scope.addVendor = true;
						$scope.showSubmit = false;
						$scope.addInventory = false;
					} 
					$scope.addSales = function() {
						$scope.addSalesDetails = true;
						 $scope.salesList.push({
							 	itemId: '',
							 	vendorId : '' , 
							 	quantitySold: 0,
							 	unitPrice: 0,
							 	TotalAmt: 0
					  });
						 
					}
					$scope.showIDC = function() {
						clear();
						$scope.isIDC = true;
					}
					$scope.addIDC = function() {
						$scope.InwardDC = true;
						$scope.InwardDCList.push({
							itemId: '',
							itemName:'',
							quantity:0,
							unitPrice: 0,
							totalAmt: 0
						});
					}
					
					$scope.showItemMaster = function() {
						clear();
						$scope.isItemMaster = true;
					}
					$scope.showSearch = function(value) {
						$scope.checked=value;
						$scope.isSearch = true;
						$scope.isAddNewItem = false;
					}
					$scope.showNewItem = function(value) {
						$scope.checked=value;
						$scope.isSearch = false;
						$scope.isAddNewItem = true;
						$scope.searchRes = false;
						$scope.enableEdit = false;
						$scope.searchResList = [];
						$scope.addNewItem = true;
					}
					$scope.showSearchResults = function() {
						$scope.searchRes = true;
						$scope.enableEdit = true;
						$scope.searchResList.push({
							itemId: '',
							itemName:'',
							noOfUnits:0,
							unitPrice: 0
							
						});
					}
					$scope.enableEditF = function(itemId) {
						$scope.enableEdit = false;
					}
					$scope.showVendors = function() {
						clear();
						$scope.isVendor = true;
						$scope.addNewVendor = true;
					}
					
				}
			);