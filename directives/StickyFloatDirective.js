App.directive('stickyFloat', function($log)
{
	return {
		restrict: 'A',
		link: function(scope, element, attrs)
		{
			$log.debug("Sticky float binding");
			if($(element).stickyfloat)
			{
				$(element).stickyfloat({duration: 100});
			}
			else
			{
				$log.debug("Please import jQuery stickyfloat library");
			}
			scope.$on('$destroy', function()
			{
				$(element).stickyfloat('destroy');
			});
		}
	};
});