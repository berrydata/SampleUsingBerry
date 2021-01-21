pragma solidity >=0.5.16;
import "usingberry/contracts/UsingBerry.sol";
import "usingberry/contracts/BerryPlayground.sol";

contract SampleUsingBerry is UsingBerry {
    constructor(address payable _berryAddress)
        public
        UsingBerry(_berryAddress)
    {}

    function readBerryValue(uint256 _berryID)
        external
        view
        returns (uint256)
    {
        //Helper function to get latest available value for that Id
        (bool ifRetrieve, uint256 value, uint256 _timestampRetrieved) =
            getCurrentValue(_berryID);
        if (!ifRetrieve) return 0;
        return value;
    }

    function readBerryValueBefore(uint256 _berryId, uint256 _timestamp)
        external
        returns (uint256, uint256)
    {
        //Helper Function to get a value before the given timestamp
        (bool _ifRetrieve, uint256 _value, uint256 _timestampRetrieved) =
            getDataBefore(_berryId, _timestamp);
        if (!_ifRetrieve) return (0, 0);
        return (_value, _timestampRetrieved);
    }
}
